"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CircularProgress from "@mui/material/CircularProgress";
import AddressForm from "@/components/paymentadressform";
import Review from "@/components/confirmpayment";
import { Container } from "@mui/material";
import { getTrekDetailsById, paymentByPhonepe } from "@/services";
// import { useSnackbar } from "notistack";

const steps = ["Basics Details", "Tour Details"];

export default function Checkout({ params }) {
  const [trekdetails, setTrekDetails] = React.useState([]);
  const [formdetails, setForm] = React.useState();
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [buttonnext, Setbuttonnext] = React.useState("Next");
  const [loading, setLoading] = React.useState(true);
  const trekid = params.trekid;
  const [participants, setParticipants] = React.useState(1);
  const [finalAmount, setFinalAmount] = React.useState(0);
  const [gstAmount, setGstAmount] = React.useState("");
  const [paymentOption, setPaymentOption] = React.useState("full");
  const [payingAmount, setPayingAmount] = React.useState(finalAmount);
  const [remainingAmount, setRemainingAmount] = React.useState(0);

  const formdata = (data) => {
    setForm(data);
  };

  // const handleValidationChange = (isValid) => {
  //   console.log("this is isvalid" ,isValid);

  //   setIsFormValid(isValid);
  // };
  // console.log("this is trekdetails", trekdetails);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <AddressForm
            trekdetails={trekdetails}
            formdata={formdata}
            setValidationStatus={setIsFormValid}
          />
        );
      case 1:
        return (
          <Review
            data={trekdetails}
            formdetails={formdetails}
            setParticipants={setParticipants}
            participants={participants}
            gstAmount={gstAmount}
            finalAmount={finalAmount}
            paymentOption={paymentOption}
            setPaymentOption={setPaymentOption}
            payingAmount={payingAmount}
            setPayingAmount={setPayingAmount}
            remainingAmount={remainingAmount}
            setRemainingAmount={setRemainingAmount}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);
  // console.log("remainingAMount", remainingAmount);
        console.log("formdetails", formdetails);
        console.log("selectBatch", formdetails?.selectBatch);



  const handleNext = async () => {
    try {
      formdetails["amount"] = payingAmount;
      formdetails["remainingOtherDetails"] = {
        payingAmount: Number(payingAmount),
        paymentOption: paymentOption,
        finalAmount: finalAmount,
        gstAmount: gstAmount,
        tourdays: trekdetails?.fields?.travelbanner?.traveldays,
        tourname: trekdetails?.fields?.description,
        difficulty: trekdetails?.fields?.difficulty,
        region: trekdetails?.fields?.region,
        location: trekdetails?.fields?.location,
        participants: participants,
        remainingAmount: Number(remainingAmount),
        selectMonth: formdetails.selectMonth,
        selectBatch: JSON.parse(formdetails.selectBatch)
      };

      console.log("formdetails", formdetails);


      if (buttonnext !== "Next") {
        setLoading(true);
        const res = await paymentByPhonepe(formdetails);
        console.log("this is form details ", formdetails);

        if (res.status === 200) {
          // window.open(res.data.url, "_blank");
          window.location.href = res?.data?.url
        } else if (res.response.status === 400) {
          alert("Amount should be greater than 0");
        }
      } else {
        setActiveStep(activeStep + 1);
      }
    } catch (error) {
      console.error("Payment Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const fetchAllTrekCategories = async () => {
    try {
      const res = await getTrekDetailsById(trekid);

      setTrekDetails(res[0]);
    } catch (error) {
      console.error("Error fetching trek details:", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchAllTrekCategories();
  }, [trekid]);

  React.useEffect(() => {
    if (activeStep === steps.length - 1) {
      const price = trekdetails.fields.amount * participants;
      const gst = (price * 5) / 100;
      const totalPrice = price + gst;
      setFinalAmount(totalPrice);
      // setPayingAmount(totalPrice);
      setGstAmount(gst);
      Setbuttonnext(`Pay ₹${payingAmount ? payingAmount : 0}`);
    } else {
      Setbuttonnext("Next");
    }
  }, [activeStep, trekdetails, participants, payingAmount]);

  return (
    <Box
      sx={{
        position: "relative",
        // background: `url(${trekdetails?.fields?.travelbanner?.travelimage} )`,
        background: "linear-gradient(93deg, #53b2fe, #065af3)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {loading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(5px)",
          }}
        >
          <CircularProgress />
        </Box>
      )}

      <Container maxWidth="xl">
        <CssBaseline />
        <Grid className="flex justify-center" container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "100%",
              width: "100%",
              backgroundColor: {
                xs: "background.default",
                sm: "background.default",
              },
              alignItems: "center",
              pt: { xs: 2, sm: 4 },
              px: { xs: 2, sm: 5 },
              gap: { xs: 4, md: 0 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: { sm: "space-between", md: "flex-end" },
                alignItems: "center",
                width: "100%",
                maxWidth: { sm: "100%", md: 600 },
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  flexGrow: 1,
                  height: "50px",
                }}
              >
                <Stepper
                  id="desktop-stepper"
                  activeStep={activeStep}
                  sx={{
                    width: "100%",
                    height: 40,
                  }}
                >
                  {steps.map((label) => (
                    <Step
                      sx={{
                        ":first-child": { pl: 0 },
                        ":last-child": { pr: 0 },
                      }}
                      key={label}
                    >
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                width: "100%",
                maxWidth: { sm: "100%", md: 600 },
                gap: { xs: 5, md: "none" },
              }}
            >
              <Stepper
                id="mobile-stepper"
                activeStep={activeStep}
                alternativeLabel
                sx={{ display: { sm: "flex", md: "none" } }}
              >
                {steps.map((label) => (
                  <Step
                    sx={{
                      ":first-child": { pl: 0 },
                      ":last-child": { pr: 0 },
                      "& .MuiStepConnector-root": { top: { xs: 6, sm: 12 } },
                    }}
                    key={label}
                  >
                    <StepLabel
                      sx={{
                        ".MuiStepLabel-labelContainer": { maxWidth: "70px" },
                      }}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>

              <React.Fragment>
                {getStepContent(activeStep)}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column-reverse", sm: "row" },
                    justifyContent:
                      activeStep !== 0 ? "space-between" : "flex-end",
                    alignItems: "end",
                    flexGrow: 1,
                    gap: 1,
                    pb: { xs: 0, sm: 0 },
                    mt: { xs: 2, sm: 0, lg: 0 },
                  }}
                >
                  {activeStep !== 0 && (
                    <Button
                      startIcon={<ChevronLeftRoundedIcon />}
                      onClick={handleBack}
                      variant="text"
                      sx={{
                        marginBottom: "50px",
                        display: { xs: "none", sm: "flex" },
                      }}
                    >
                      Previous
                    </Button>
                  )}

                  {activeStep !== 0 && (
                    <Button
                      startIcon={<ChevronLeftRoundedIcon />}
                      onClick={handleBack}
                      variant="outlined"
                      fullWidth
                      sx={{
                        display: { xs: "flex", sm: "none" },
                      }}
                    >
                      Previous
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    endIcon={<ChevronRightRoundedIcon />}
                    onClick={handleNext}
                    disabled={!isFormValid}
                    sx={{
                      background: "linear-gradient(93deg, #53b2fe, #065af3)",
                      marginBottom: "50px",
                      width: { xs: "100%", sm: "fit-content" },
                    }}
                  >
                    {buttonnext}
                  </Button>
                </Box>
              </React.Fragment>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
