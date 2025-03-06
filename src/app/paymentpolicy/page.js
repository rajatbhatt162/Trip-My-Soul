// components/PaymentPolicy.js
import * as React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import PaymentPolicyTable from "@/components/viewitinerarycomponent/paymentpolicy";

// Data rows
const rows = [
  {
    name: "Booking Amount",
    upto16days: <CheckOutlinedIcon sx={{ color: "green" }} />,
    days15to8: <CheckOutlinedIcon sx={{ color: "green" }} />,
    days7to3: <CheckOutlinedIcon sx={{ color: "green" }} />,
    days2to0: <CheckOutlinedIcon sx={{ color: "green" }} />,
  },
  {
    name: "50% Payment",
    upto16days: "Optional",
    days15to8: "Compulsory",
    days7to3: <CloseIcon color="error" />,
    days2to0: <CloseIcon color="error" />,
  },
  {
    name: "75% Payment",
    upto16days: "Optional",
    days15to8: "Optional",
    days7to3: "Compulsory",
    days2to0: <CloseIcon color="error" />,
  },
  {
    name: "100% Payment",
    upto16days: "Optional",
    days15to8: "Optional",
    days7to3: "Optional",
    days2to0: "Compulsory",
  },
];

const PaymentPolicy = () => {
  return (
    <Box sx={{ paddingBottom: "25px" }}>
      <Container maxWidth="xl">
        {/* Title and Introduction */}
        <Box sx={{ paddingBottom: "25px", paddingTop: "50px" }}>
          <Typography sx={{ fontSize: "25px", fontWeight: "400"  , color:"#FF7A00" }} variant="h4">
            Payment Policy
          </Typography>
          <Typography sx={{ fontSize: "17px", marginTop: "20px" , color:"#666666" }}>
            We value transparency in our payment process, ensuring you understand how your payments
            are structured at every stage of your booking. Below, you will find a detailed breakdown
            of our payment policy based on the number of days before the start of the trip. This 
            structure is designed to accommodate flexibility while ensuring that your booking is 
            secure.
          </Typography>
        </Box>

        {/* Detailed Payment Policy Section */}
        <Box sx={{ marginBottom: "30px" }}>
          <Typography variant="h6" sx={{ marginBottom: "15px", fontWeight: "500" , color:"#FF7A00"}}>
            Understanding Our Payment Stages:
          </Typography>
          <Typography sx={{ marginBottom: "15px" ,color:"#FF7A00"}}>
            Our payment policy is divided into four key stages, each associated with a certain number
            of days before your trip:
          </Typography>
          <Typography sx={{ color:"#666666"}}  >
            <span style={{color:"#FF7A00"}}>Booking Amount</span>: At the time of booking, you are required to pay a minimum
            booking amount to secure your spot. This amount is fully refundable depending on the
            number of days left until the trip.
          </Typography>
          <Typography sx={{ marginTop: "15px" , color:"#666666" }}>
            <span  style={{color:"#FF7A00"}}>50% Payment</span>: As the date approaches, partial payment is required to
            confirm your reservation. This payment becomes compulsory closer to the trip.
          </Typography>
          <Typography sx={{ marginTop: "15px" , color:"#666666" }}>
            <span  style={{color:"#FF7A00"}}>75% Payment</span>: As we get closer to the trip date, we ask for a 75% payment
            to ensure that all arrangements are finalized.
          </Typography>
          <Typography sx={{ marginTop: "15px", color:"#666666" }}>
            <span  style={{color:"#FF7A00"}}>100% Payment</span>: For trips with less than 2 days remaining, full payment is
            required to confirm the booking.
          </Typography>
        </Box>

        {/* Payment Policy Grid Display */}
  <PaymentPolicyTable/>

        {/* Conclusion */}
        <Box sx={{ marginTop: "30px" }}>
          <Typography sx={{ fontSize: "16px" , color:"#666666"}}>
            Please ensure that you review our payment policy before confirming your trip. We strive
            to offer a balance between flexibility and certainty for our travelers. Should you have
            any questions, feel free to contact our support team for assistance. We look forward to
            making your travel experience seamless and enjoyable!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PaymentPolicy;


export async function generateMetadata({ params }) {
  return {
    title: 'Explore TripMySoul’s payment policy for smooth bookings',
    description: 'TripMySoul Payment Policy: Secure payment methods and cancellation guidelines for a seamless booking process.',
  };
}