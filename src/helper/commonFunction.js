import nodemailer from "nodemailer";
const template = (data) => {
  const transactionId = data.transactionId;
  const { firstName, lastName, remainingOtherDetails, mobileNumber, email } =
    data.userDetails;
  const paymentType = data.paymentInstrument.type;
  const {
    payingAmount,
    remainingAmount,
    finalAmount,
    tourname,
    location,
    region,
    tourdays,
    difficulty,
    participants,
    selectMonth,
    selectBatch,
  } = remainingOtherDetails;
  console.log("remainingOtherDetailsselectMonth", selectMonth);
  console.log("remainingOtherDetailsselectbatch", selectBatch);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Booking Confirmation</title>
<style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background-color: #4CAF50;
            padding: 20px;
            color: #ffffff;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
            color: #333333;
            line-height: 1.6;
        }
        .content h2 {
            margin-top: 0;
            color: #4CAF50;
        }
        .booking-details, .payment-details, .contact-details {
            border-collapse: collapse;
            width: 100%;
            margin-top: 20px;
        }
        .booking-details td, .payment-details td, .contact-details td {
            padding: 10px;
            border: 1px solid #dddddd;
        }
        .footer {
            background-color: #f4f4f4;
            padding: 10px;
            text-align: center;
            color: #777777;
            font-size: 12px;
        }
</style>
</head>
<body>
<div class="email-container">
<div class="header">
<h1>Booking Confirmed! 🎉</h1>
</div>
<div class="content">
<p>Dear ${firstName} ${lastName},</p>
<p>Thank you for booking with us! We are excited to confirm your booking details below:</p>
 
            <h2>Booking Details</h2>
<table class="booking-details">
<tr>
<td><strong>Tour Name:</strong></td>
<td>${tourname}</td>
</tr>
<tr>
<td><strong>Location:</strong></td>
<td>${location}</td>
</tr>
<tr>
<td><strong>Region:</strong></td>
<td>${region}</td>
</tr>
<tr>
<td><strong>Month:</strong></td>
<td>${selectMonth}</td>
</tr>

<tr>
<td><strong>Batch:</strong></td>
<td>${selectBatch.startDate} - ${selectBatch.endDate}</td>
</tr>


<tr>
<td><strong>Tour Days:</strong></td>
<td>${tourdays}</td>
</tr>
<tr>
<td><strong>Difficulty:</strong></td>
<td>${difficulty}</td>
</tr>
<tr>
<td><strong>Participants:</strong></td>
<td>${participants}</td>
</tr>
</table>
 
            <h2>Payment Details</h2>
<table class="payment-details">
<tr>
<td><strong>Total Amount:</strong></td>
<td>${finalAmount}</td>
</tr>
<tr>
<td><strong>Paying Amount:</strong></td>
<td>${payingAmount}</td>
</tr>
<tr>
<td><strong>Remaining Amount:</strong></td>
<td>${remainingAmount}</td>
</tr>
<tr>
<td><strong>Transaction ID:</strong></td>
<td>${transactionId}</td>
</tr>
<tr>
<td><strong>Payment Type:</strong></td>
<td>${paymentType}</td>
</tr>
</table>
 <h2>Contact Details</h2>
 <table class="contact-details">
 <tr>
 <tr><td><strong>Phone Number:</strong></td>
 <td>8178613438</td></tr>
 </table>
    <p>We look forward to welcoming you! If you have any questions, feel free to contact us.</p>
 
</div>
<div class="footer">
<p>Thank you for choosing us! We wish you a pleasant experience.</p>
</div>
</div>
</body>
</html>`;
  const html2 = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>New Booking Notification</title>
<style>

        body {

            font-family: Arial, sans-serif;

            background-color: #f4f4f4;

            margin: 0;

            padding: 0;

        }

        .email-container {

            max-width: 600px;

            margin: 20px auto;

            background-color: #ffffff;

            border-radius: 8px;

            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

            overflow: hidden;

        }

        .header {

            background-color: #ff9800;

            padding: 20px;

            color: #ffffff;

            text-align: center;

        }

        .header h1 {

            margin: 0;

            font-size: 24px;

        }

        .content {

            padding: 20px;

            color: #333333;

            line-height: 1.6;

        }

        .content h2 {

            margin-top: 0;

            color: #ff9800;

        }

        .booking-details, .payment-details, .contact-details {

            border-collapse: collapse;

            width: 100%;

            margin-top: 20px;

        }

        .booking-details td, .payment-details td, .contact-details td {

            padding: 10px;

            border: 1px solid #dddddd;

        }

        .footer {

            background-color: #f4f4f4;

            padding: 10px;

            text-align: center;

            color: #777777;

            font-size: 12px;

        }
</style>
</head>
<body>
<div class="email-container">
<div class="header">
<h1>New Booking Alert 🚨</h1>
</div>
<div class="content">
<p>You have received a new booking! Below are the details of the booking made by a customer:</p>
 
            <h2>Booking Details</h2>
<table class="booking-details">
<tr>
<td><strong>Tour Name:</strong></td>
<td>${tourname}</td>
</tr>
<tr>
<td><strong>Location:</strong></td>
<td>${location}</td>
</tr>
<tr>
<td><strong>Region:</strong></td>
<td>${region}</td>
</tr>
<tr>
<td><strong>Month:</strong></td>
<td>${selectMonth}</td>
</tr>

<tr>
<td><strong>Batch:</strong></td>
<td>${selectBatch.startDate} - ${selectBatch.endDate}</td>
</tr>

<tr>
<td><strong>Tour Days:</strong></td>
<td>${tourdays}</td>
</tr>
<tr>
<td><strong>Difficulty:</strong></td>
<td>${difficulty}</td>
</tr>
<tr>
<td><strong>Participants:</strong></td>
<td>${participants}</td>
</tr>
</table>
 
            <h2>Payment Details</h2>
<table class="payment-details">
<tr>
<td><strong>Total Amount:</strong></td>
<td>${finalAmount}</td>
</tr>
<tr>
<td><strong>Paying Amount:</strong></td>
<td>${payingAmount}</td>
</tr>
<tr>
<td><strong>Remaining Amount:</strong></td>
<td>${remainingAmount}</td>
</tr>
<tr>
<td><strong>Transaction ID:</strong></td>
<td>${transactionId}</td>
</tr>
<tr>
<td><strong>Payment Type:</strong></td>
<td>${paymentType}</td>
</tr>
</table>
 
            <h2>Customer Contact Details</h2>
<table class="contact-details">
<tr>
<td><strong>Email:</strong></td>
<td>${email}</td>
</tr>
<tr>
<td><strong>Phone Number:</strong></td>
<td>${mobileNumber}</td>
</tr>
</table>
 
            <p>Please prepare for the arrival of the guest and ensure all arrangements are in place. If you need further assistance, feel free to reach out to us.</p>
</div>
<div class="footer">
<p>This is an automated notification. Please do not reply to this email directly.</p>
</div>
</div>
</body>
</html>

`;
  return { html, html2 };
};

export const emailSmtpFunction = async (data) => {
  const email = data?.userDetails?.email;
  console.log("send email");

  try {
    // Configure the transporter
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: "799bda001@smtp-brevo.com",
        pass: "nmTvRFPdJwh3VIf6",
      },
      tls: {
        rejectUnauthorized: false, // Ignore self-signed certificate
      },
    });
    let mailOptions = {
      from: `Trip My Soul <${process.env.SENDER_EMAIL}>`,
      to: email,
      subject: "Booking confirmation status",
      html: template(data).html,
    };

    let mailOptions2 = {
      from: `Trip My Soul <${process.env.SENDER_EMAIL}>`,
      to: process.env.SENDER_EMAIL,
      subject: `New booking of tripmysoul`,
      html: template(data).html2,
    };
    let info = await transporter.sendMail(mailOptions);
    let info2 = await transporter.sendMail(mailOptions2);

    return info;
  } catch (error) {
    console.log("Error in sending email:", error);
  }
};
