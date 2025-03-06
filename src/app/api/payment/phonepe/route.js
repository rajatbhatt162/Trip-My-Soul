import { NextResponse, NextRequest } from "next/server";
import { connection } from "@/model/connection";
import crypto from "crypto";
import axios from "axios";
function generateTransactionID() {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1000000);
  const transactionId = `T${timestamp}${randomNum}`;
  return transactionId;
}

function generateInsertQuery(tableName, data) {
  const columns = Object.keys(data).join(", ");
  const placeholders = Object.keys(data)
    .map(() => "?")
    .join(", ");
  return `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders})`;
}

async function savePaymentDetails(userValues) {
  const connectionMysql = await connection();
  try {
    const sql = generateInsertQuery("tms_payments", userValues);
    const values = Object.values(userValues);
    const result = await connectionMysql.execute(sql, values);
    return result[0].insertId;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to save payment details");
  } finally{
    connectionMysql.end();
  }
}

export async function POST(request) {
  try {
    const reqBody = await request.json();
    console.log("reqBody",reqBody)
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      amount,
      pinCode,
      city,
      state,
      country,
      address,
      remainingOtherDetails
    } = reqBody;
  
    const origin = request.headers.get("origin");
    if(!firstName){
      return NextResponse.json({ msg: "First name is required" }, { status: 400 });
    }
    if(!phoneNumber){
      return NextResponse.json({ msg: "Phone number is required" }, { status: 400 });
    }
    if(!amount){
      return NextResponse.json({message: "Amount should be greater than 0"},{status: 400})
    }
    if(!pinCode){
      return NextResponse.json({ msg: "Pincode is required" }, { status: 400 });
    }
    if(!city){
      return NextResponse.json({ msg: "City is required" }, { status: 400 });
    }
    if(!state){
      return NextResponse.json({ msg: "State is required" }, { status: 400 });
    }
    if(!country){
      return NextResponse.json({ msg: "Country is required" }, { status: 400 });
    }
    if(!address){
      return NextResponse.json({ msg: "Address is required" }, { status: 400 });
    }
    const merchantTransactionId = generateTransactionID();
    const userValues = {
      merchant_id: process.env.NEXT_PUBLIC_MERCHANTID,
      merchant_transaction_id: merchantTransactionId,
      amount: amount,
      first_name: firstName,
      last_name: lastName,
      mobile_number: phoneNumber,
      email: email,
      pincode: pinCode,
      address: address,
      city: city,
      state: state,
      country: country,
      remaining_other_details:JSON.stringify(remainingOtherDetails)
    };

    console.log("userValues", userValues);
    
    const resultValue = await savePaymentDetails(userValues);
    const data = {
      merchantId: process.env.NEXT_PUBLIC_MERCHANTID,
      merchantTransactionId: merchantTransactionId,
      merchantUserId: "MUID9EFWBE9E9WBFC",
      name: firstName,
      amount: amount * 100,
      redirectUrl: `${origin}/payment/status/${merchantTransactionId}`,
      mobileNumber: phoneNumber,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };
    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString("base64");
    const key = process.env.NEXT_PUBLIC_MERCHANT_KEY;
    const keyIndex = 1;
    const string = payloadMain + "/pg/v1/pay" + key;
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;
    const URL = `${process.env.NEXT_PUBLIC_MERCHANT_PROD_URL}/pay`;
    const options = {
      method: "POST",
      url: URL,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
      data: {
        request: payloadMain,
      },
    };
    const axiosResponse = await axios.request(options);
    const redirectUrl =
      axiosResponse?.data?.data?.instrumentResponse?.redirectInfo?.url;
    return NextResponse.json({ url: redirectUrl });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Internal server error" }, { status: 500 });
  }
}
