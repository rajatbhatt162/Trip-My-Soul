import { NextResponse } from "next/server";
import crypto from "crypto";
import axios from "axios";
import { connection } from "@/model/connection";
import { emailSmtpFunction } from "@/helper/commonFunction";

async function getPaymentDetailsByTransactionId(id) {
  const mysqlConnection = await connection();
  try {
    const sql = `SELECT first_name as firstName, last_name as lastName , mobile_number as mobileNumber, email,address,pincode as pinCode,city,state,country,remaining_other_details as remainingOtherDetails, booking_status as bookingStatus FROM tms_payments WHERE merchant_transaction_id = ?`;
    const values = [id];
    const resultData = await mysqlConnection.execute(sql, values);
    return resultData[0][0];
  } catch (error) {
    throw new Error(error.message);
  } finally{
    mysqlConnection.end();
  }
}

async function updateTransactionId(merchantTransactionId, transactionId) {
  const mysqlConnection = await connection();
  try {
    const sql = `UPDATE tms_payments SET transanction_id = ? WHERE merchant_transaction_id = ?`;
    const values = [transactionId, merchantTransactionId];
    const resultData = await mysqlConnection.execute(sql, values);
    return resultData;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  } finally{
    mysqlConnection.end();
  }
}

async function updateBookingStatus(merchantTransactionId, bookingStatus) {
  const mysqlConnection = await connection();
  try {
    const sql = `UPDATE tms_payments SET booking_status = ? WHERE merchant_transaction_id = ?`;
    const values = [bookingStatus, merchantTransactionId];
    const resultData = await mysqlConnection.execute(sql, values);
    return resultData;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  } finally{
    mysqlConnection.end();
  }
}

export async function POST(request, { params }) {
  try {
    const merchantId = process.env.NEXT_PUBLIC_MERCHANTID;
    const { id } = params;
    const keyIndex = 1;
    const key = process.env.NEXT_PUBLIC_MERCHANT_KEY;
    const string = `/pg/v1/status/${merchantId}/${id}` + key;
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;
    const Url = `${process.env.NEXT_PUBLIC_MERCHANT_PROD_URL}/status/${merchantId}/${id}`;
    const options = {
      method: "GET",
      url: Url,
      headers: {
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
        "X-MERCHANT-ID": merchantId,
      },
    };
    const result = await getPaymentDetailsByTransactionId(id);
    const axiosResponse = await axios.request(options);
    const resultData = await updateTransactionId(
      id,
      axiosResponse?.data?.data?.transactionId
    );
    const finalData = {
      ...axiosResponse.data.data,
      amount: axiosResponse?.data?.data?.amount / 100,
      userDetails: {
        ...result,
        remainingOtherDetails: JSON.parse(result.remainingOtherDetails),
      },
    };
    
    if (!result.bookingStatus) {
      await emailSmtpFunction(finalData);
      const updatedResult = await updateBookingStatus(id, 1);
    }

    return NextResponse.json({
      message: "Payment successful",
      data: finalData,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { msg: "Internal server error", error: error },
      { status: 500 }
    );
  }
}
