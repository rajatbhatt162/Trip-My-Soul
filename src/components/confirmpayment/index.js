"use client";
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  TextField,
  FormGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const Review = ({
  data,
  participants,
  setParticipants,
  gstAmount,
  finalAmount,
  paymentOption,
  setPaymentOption,
  payingAmount,
  setPayingAmount,
  formdetails,
  remainingAmount,
  setRemainingAmount,
}) => {
  const [loading, setLoading] = useState(true);
  const [customAmount, setCustomAmount] = useState("");
  useEffect(() => {
    if (data && data.fields) {
      setLoading(false);
    }
  }, [data]);

  const handlePaymentChange = (event) => {
    let newPayingAmount;
    switch (event.target.value) {
      case "thirty":
        newPayingAmount = (finalAmount * 0.3).toFixed(2);
        break;
      case "custom":
        newPayingAmount = parseFloat(event.target.value);
        break;
      default:
        newPayingAmount = finalAmount; // Full payment
    }
    setPayingAmount(newPayingAmount);
    setPaymentOption(event.target.value);
  };

  const handleParticipants = (e) => {
    setParticipants(e.target.value);

    let newTotalAmount = (finalAmount / participants) * e.target.value;

    // Update the payingAmount based on the selected payment option
    let newPayingAmount;
    switch (paymentOption) {
      case "thirty":
        newPayingAmount = (newTotalAmount * 0.3).toFixed(2); // Calculate 30% of newTotalAmount
        break;
      case "custom":
        newPayingAmount = parseFloat(customAmount); // Use the custom amount entered by the user
        break;
      default:
        newPayingAmount = newTotalAmount.toFixed(2); // Full payment
    }

    setPayingAmount(newPayingAmount);
  };

  useEffect(() => {
    // Assuming you have a way to calculate the paying amount based on the current paymentOption and finalAmount
    let newPayingAmount;
    if (paymentOption === "thirty") {
      newPayingAmount = (finalAmount * 0.3).toFixed(2);
    } else if (paymentOption === "custom") {
      newPayingAmount = parseFloat(customAmount);
    } else {
      newPayingAmount = finalAmount;
    }

    // Update the payingAmount state
    setPayingAmount(newPayingAmount);
  }, [finalAmount, paymentOption, customAmount]);

  useEffect(() => {
    const remaining = (finalAmount - payingAmount).toFixed(2);
    setRemainingAmount(remaining);
  }, [finalAmount, payingAmount]);

  const handleCustomAmount = (e) => {
    setCustomAmount(e.target.value);
    setPayingAmount(e.target.value);
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "700px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Card sx={{ padding: "20px" }}>
      <CardMedia
        component="img"
        height="250"
        image={data.fields.travelbanner.travelimage}
        alt={data.fields.description}
      />
      <CardContent>
        <Typography sx={{ marginTop: "20px", fontSize: "25px" }} gutterBottom>
          {data.fields.title}
        </Typography>
        <Divider />
        <Stack spacing={2}>
          <List disablePadding>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: 700 }}>Price</Typography>
                }
              />
              <Typography variant="body2">₹{data.fields.amount}</Typography>
            </ListItem>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: 700 }}>Location</Typography>
                }
              />
              <Typography variant="body2">{data.fields.location}</Typography>
            </ListItem>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: 700 }}>Region</Typography>
                }
              />
              <Typography variant="body2">{data.fields.region}</Typography>
            </ListItem>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: 700 }}>
                    Selected Month
                  </Typography>
                }
              />
              <Typography variant="body2">
                {formdetails?.selectMonth}
              </Typography>
            </ListItem>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: 700 }}>
                    Selected Batch
                  </Typography>
                }
              />
              <Typography variant="body2">
                {formdetails?.selectBatch?.startDate} -{" "}
                {formdetails?.selectBatch?.endDate}
              </Typography>
            </ListItem>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: 700 }}>
                    No. of participants
                  </Typography>
                }
              />
              <TextField
                id="participants"
                type="number"
                sx={{ width: "100px" }}
                size="small"
                inputProps={{
                  min: "1",
                  step: "1",
                }}
                value={participants}
                onChange={handleParticipants}
              />
            </ListItem>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: 700 }}>GST 5%</Typography>
                }
              />
              <Typography variant="body2">₹{gstAmount.toFixed(2)}</Typography>
            </ListItem>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: 700 }}>Total Amount</Typography>
                }
              />
              <Typography variant="body2">₹{finalAmount.toFixed(2)}</Typography>
            </ListItem>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: 700 }}>
                    Paying Amount
                  </Typography>
                }
              />
              <Typography variant="body2">
                ₹{payingAmount ? payingAmount : 0}
              </Typography>
            </ListItem>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: 700 }}>
                    Remaining Amount
                  </Typography>
                }
              />
              <Typography variant="body2">
                {" "}
                ₹
                {paymentOption === "full"
                  ? 0
                  : payingAmount
                  ? remainingAmount
                  : finalAmount}
              </Typography>
            </ListItem>

            {/* payment option */}
            <ListItem sx={{ py: 1, px: 0 }}>
              <Box>
                <FormControlLabel
                  value="full"
                  control={<Radio />}
                  label="Full Payment"
                  checked={paymentOption === "full"}
                  onChange={handlePaymentChange}
                />
                <FormControlLabel
                  value="thirty"
                  control={<Radio />}
                  label="30% Payment"
                  checked={paymentOption === "thirty"}
                  onChange={handlePaymentChange}
                />
                <FormControlLabel
                  value="custom"
                  control={<Radio />}
                  label="Custom"
                  checked={paymentOption === "custom"}
                  onChange={handlePaymentChange}
                />

                {paymentOption === "custom" && (
                  <TextField
                    id="customAmount"
                    type="number"
                    sx={{ width: "100px", marginLeft: "45px" }}
                    onChange={handleCustomAmount}
                    size="small"
                    inputProps={{
                      min: "1",
                      step: "1",
                    }}
                  />
                )}
              </Box>
            </ListItem>
          </List>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Review;

// "use client";
// import React, { useState, useEffect } from "react";
// import CircularProgress from "@mui/material/CircularProgress";
// import Divider from "@mui/material/Divider";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
// import { Box, Card, CardMedia, CardContent, Button } from "@mui/material";
// import jsPDF from "jspdf";
// import DownloadIcon from "@mui/icons-material/Download";

// const Review = ({ data, formdetails }) => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (data && data.fields) {
//       setLoading(false);
//     }
//   }, [data]);

//   const handleDownload = () => {
//     const doc = new jsPDF();

//     doc.setFontSize(18);
//     doc.text(data.fields.title, 20, 20);
//     const img = new Image();
//     img.src = data.fields.travelbanner.travelimage;
//     img.onload = () => {
//       doc.addImage(img, 'JPEG', 20, 90, 170, 100);
//       doc.save("details.pdf");
//     };
//     doc.setFontSize(14);
//     doc.text(`Price: ₹${data.fields.amount}`, 20, 40);
//     doc.text(`Location: ${data.fields.location}`, 20, 50);
//     doc.text(`Region: ${data.fields.region}`, 20, 60);
//     doc.text(`Selected Month: ${formdetails?.selectMonth}`, 20, 70);
//     doc.text(`Selected Batch: ${formdetails?.selectBatch}`, 20, 80);

//   };

//   if (loading) {
//     return (
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           minHeight: "700px",
//         }}
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Card sx={{ padding: "20px" }}>
//       <CardMedia
//         component="img"
//         height="250"
//         image={data.fields.travelbanner.travelimage}
//         alt={data.fields.description}
//       />
//       <CardContent>
//         <Typography sx={{ marginTop: "20px", fontSize: "25px" }} gutterBottom>
//           {data.fields.title}
//         </Typography>
//         <Divider />
//         <Stack spacing={2}>
//           <List disablePadding>
//             <ListItem sx={{ py: 1, px: 0 }}>
//               <ListItemText
//                 primary={
//                   <Typography sx={{ fontWeight: 700 }}>Price</Typography>
//                 }
//               />
//               <Typography variant="body2">₹{data.fields.amount}</Typography>
//             </ListItem>
//             <ListItem sx={{ py: 1, px: 0 }}>
//               <ListItemText
//                 primary={
//                   <Typography sx={{ fontWeight: 700 }}>Location</Typography>
//                 }
//               />
//               <Typography variant="body2">{data.fields.location}</Typography>
//             </ListItem>
//             <ListItem sx={{ py: 1, px: 0 }}>
//               <ListItemText
//                 primary={
//                   <Typography sx={{ fontWeight: 700 }}>Region</Typography>
//                 }
//               />
//               <Typography variant="body2">{data.fields.region}</Typography>
//             </ListItem>
//             <ListItem sx={{ py: 1, px: 0 }}>
//               <ListItemText
//                 primary={
//                   <Typography sx={{ fontWeight: 700 }}>
//                     Selected Month
//                   </Typography>
//                 }
//               />
//               <Typography variant="body2">
//                 {formdetails?.selectMonth}
//               </Typography>
//             </ListItem>
//             <ListItem sx={{ py: 1, px: 0 }}>
//               <ListItemText
//                 primary={
//                   <Typography sx={{ fontWeight: 700 }}>
//                     Selected Batch
//                   </Typography>
//                 }
//               />
//               <Typography variant="body2">
//                 {formdetails?.selectBatch}
//               </Typography>
//             </ListItem>
//           </List>
//         </Stack>
//         <Button
//           variant="contained"
//           startIcon={<DownloadIcon />}
//           sx={{ marginTop: "20px" ,background: "linear-gradient(93deg, #53b2fe, #065af3)",}}
//           onClick={handleDownload}
//         >
//           Download Invoice
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default Review;
