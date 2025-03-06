"use client"
import React, { Fragment, useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import DownloadIcon from "@mui/icons-material/Download";

const PaymentStatus = ({ params }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [tractionData, setTransactionData] = useState({});
  const router = useRouter();

  const fetchPaymentStatus = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`/api/status/phonepe/${id}`);
      setTransactionData(response?.data?.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentStatus(params.id);
  }, [params.id]);

  const handelredirecthome = () => {
    router.push("/");
  };

  // const handleDownloadPDF = () => {

  //   const input = document.getElementById('pdf-content');
  //   html2canvas(input)
  //     .then((canvas) => {
  //       const imgData = canvas.toDataURL('image/png');
  //       const pdf = new jsPDF();
  //       pdf.addImage(imgData, 'PNG', 0, 0);
  //       pdf.save("Trip_Mysoul_Payment.pdf");
  //     });
  // };
  const handleDownloadPDF = () => {
    const input = document.getElementById('pdf-content');
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 210, canvas.height * 210 / canvas.width);
      pdf.save('Trip_Mysoul_Payment.pdf');
    });
  };
// console.log("trXzx" ,tractionData)
  return (
    <Fragment>
      <Box sx={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
        <Grid container>
          <Grid item xs={12} sx={{ marginTop: "30px" }}>
            <Box
              sx={{
                width: "100%",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "10px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                backgroundColor: "#fff",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  marginBottom: "20px",
                  fontSize: { xs: "18px", sm: "25px" },
                }}
              >
                Welcome to Your Travel Dashboard!
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  marginBottom: "20px",
                  textAlign: "center",
                  fontSize: { xs: "10px", sm: "15px" },
                }}
              >
                We are thrilled to have you on this journey. Here you can view
                the details of your recent payment. Safe travels and enjoy your
                adventure!
              </Typography>

              <Typography
                sx={{
                  fontWeight: "600",
                  marginBottom: "20px",
                  fontSize: { xs: "18px", sm: "20px" },
                }}
              >
                {isLoading
                  ? "Fetching Your Payment Details..."
                  : "Payment Details"}
              </Typography>

              {isLoading ? (
                <Box
             
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <Box 
                id="pdf-content" 
                 sx={{ width: "100%", padding: "15px" }}>
                  {/* Payment Details */}
                  <Typography
                    sx={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Payment Status:{" "}
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        color:
                          tractionData?.state === "COMPLETED"
                            ? "#4BB543"
                            : "#FF5722",
                      }}
                    >
                      {tractionData?.state}
                    </span>
                  </Typography>

                  <Typography
                    sx={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Payment Type:{" "}
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      {tractionData?.paymentInstrument?.type}
                    </span>
                  </Typography>

                  <Typography
                    sx={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Paying Amount:{" "}
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      ₹
                      {
                        tractionData?.userDetails?.remainingOtherDetails
                          ?.finalAmount
                      }
                    </span>
                  </Typography>

                  {/* <Typography
                    sx={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                   GST Amount:{" "}
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      ₹{tractionData?.userDetails?.remainingOtherDetails?.gstAmount}
                    </span>
                  </Typography> */}
                  <Typography
                    sx={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Remaining Amount:{" "}
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      ₹
                      {
                        tractionData?.userDetails?.remainingOtherDetails
                          ?.remainingAmount
                      }
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Payment Type:{" "}
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      {
                        tractionData?.userDetails?.remainingOtherDetails
                          ?.paymentOption
                      }
                    </span>
                  </Typography>

                  <Typography
                    sx={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Transaction ID:{" "}
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      {tractionData?.transactionId}
                    </span>
                  </Typography>

                  <Typography
                    sx={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Merchant Transaction ID:{" "}
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      {tractionData?.merchantTransactionId}
                    </span>
                  </Typography>

                  {/* Customer Details */}
                  <Typography
                    sx={{
                      fontWeight: "600",
                      marginTop: "20px",
                      marginBottom: "10px",
                      fontSize: { xs: "16px", sm: "18px" },
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Customer Details
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Name:{" "}
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      {tractionData?.userDetails?.firstName}{" "}
                      {tractionData?.userDetails?.lastName}
                    </span>
                  </Typography>

                  <Typography
                    sx={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Mobile Number:{" "}
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      {tractionData?.userDetails?.mobileNumber}
                    </span>
                  </Typography>

                  <Typography
                    sx={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Address:{" "}
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      {tractionData?.userDetails?.address},{" "}
                      {tractionData?.userDetails?.city},{" "}
                      {tractionData?.userDetails?.state}{" "}
                      {tractionData?.userDetails?.pinCode},{" "}
                      {tractionData?.userDetails?.country}
                    </span>
                  </Typography>

                  {/* tourdetails */}
                  <Typography
                    sx={{
                      fontWeight: "600",
                      marginTop: "20px",
                      marginBottom: "10px",
                      fontSize: { xs: "16px", sm: "18px" },
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Tour Details
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Tour Name:{" "}
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      {
                        tractionData?.userDetails?.remainingOtherDetails
                          ?.tourname
                      }{" "}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Tour Location:{" "}
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      {
                        tractionData?.userDetails?.remainingOtherDetails
                          ?.location
                      }{" "}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Region:{" "}
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      {tractionData?.userDetails?.remainingOtherDetails?.region}{" "}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Tour Days:{" "}
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      {
                        tractionData?.userDetails?.remainingOtherDetails
                          ?.tourdays
                      }{" "}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Difficulty:{" "}
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      {
                        tractionData?.userDetails?.remainingOtherDetails
                          ?.difficulty
                      }{" "}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Participants:{" "}
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      {
                        tractionData?.userDetails?.remainingOtherDetails
                          ?.participants
                      }{" "}
                    </span>
                  </Typography>
                </Box>
              )}

              {!isLoading && (
                <Box
                  sx={{
                    width: "100%",
                    padding: "15px",
                    marginTop: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Button
                    size="small"
                    onClick={handelredirecthome}
                    sx={{
                      fontSize: { xs: "7px", sm: "12px" },

                      color: "#fff",
                      fontWeight: "600",
                      backgroundColor: "#0093E9",
                      backgroundImage:
                        "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
                      "&:hover": {
                        backgroundColor: "#007AB8",
                      },
                    }}
                  >
                    Back to Dashboard
                  </Button>

                  <Button
                    size="small"
                    onClick={handleDownloadPDF}
                    sx={{
                      fontSize: { xs: "7px", sm: "12px" },
                      color: "#fff",
                      fontWeight: "600",
                      backgroundColor: "#4CAF50",
                      "&:hover": {
                        backgroundColor: "#45A049",
                      },
                    }}
                    startIcon={<DownloadIcon />}
                  >
                    Download Payment Details
                  </Button>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default PaymentStatus;
