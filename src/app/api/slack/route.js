import axios from "axios";
import { NextResponse } from "next/server";

async function slack(text) {
  // console.log(postData);
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  const message = {
    text: text,
  };
  try {
    axios
      .post(webhookUrl, message)
      .then((response) => {
        console.log("Message sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  } catch (e) {
    console.log("Error in mapengage", e);
    throw e;
  }
}

export async function POST(request) {
  const data = await request.json();

  const { name, email, mobile, sdk_id, message, tracking_id } = data;
  const newMesage = `Name: ${name}
    Email: ${email}
    Phone: ${mobile}
    Sdk id: ${sdk_id}
    Tracking id: ${tracking_id}
    Message: ${message}
    `;

  try {
    const result = await slack(newMesage);
    return NextResponse.json({
      message: "Message sent successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { msg: "Internal server error", error: error },
      { status: 500 }
    );
  }
}
