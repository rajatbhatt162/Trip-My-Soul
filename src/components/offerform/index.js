

"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import Cookies from "js-cookie";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const OfferForm = ({ onClose }) => {
  const [error, setError] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    number: "",
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[A-Za-z\s]*$/, "Please enter a valid name")
      .min(3, "Name must be at least 3 characters")
      .max(20, "Name must be at most 20 characters")
      .required("Name is required"),
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/,
        "Invalid email address"
      )
      .required("Email is required"),
    number: yup
      .number()
      .required("Please enter number")
      .test("is-ten-digits", "Number must be exactly 10 digits", (value) => {
        if (value) {
          const stringValue = String(value);
          return stringValue.length === 10;
        }
        return false;
      }),
  });

  const trackingId = Cookies.get("be_tracking_id");

  const generateRandomCode = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const length = 6;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    return result;
  };

  const handleGetCouponCode = () => {
    const code = generateRandomCode();
    setCouponCode(code);
  };

  const onSubmit = async (values, { resetForm }) => {
    handleGetCouponCode();
    setLoading(true);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values?.name,
        email: values?.email,
        mobile: values?.number,
        tracking_id: trackingId,
        sdk_id: "tripmysoul",
        message: `Your coupon code is ${couponCode}`,
      }),
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TRACKING_BASE_URL}/api/v1/contact-form`,
        options
      );
      const data = await response.json();
      resetForm();
      setOpenModal(true);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCopied(false);
  };

  const handleCopyCouponCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
  };

  return (
    <Box sx={{ margin: { sm: "2rem 0" }, display: { xs: "none", sm: "block" } }}>
      <Container>
        <Grid
          container
          sx={{
            borderRadius: "10px",
            height: "70vh",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            backgroundColor: "white",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              backgroundSize: "cover",
              background: 'url("/offerform1.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "justify",
            }}
          >
            <Box sx={{ padding: "1rem" }}>
              <Typography
                sx={{
                  color: "#e5f607",
                  fontSize: { xs: "20px", sm: "20px", md: "30px" },
                  fontWeight: 600,
                }}
              >
                Get Your Coupon Code
              </Typography>
              <Typography
                sx={{
                  color: "#e5f607",
                  fontSize: { xs: "20px", sm: "20px", md: "30px" },
                  fontWeight: 600,
                }}
              >
                and Unlock 30% Off On Your Trip!
              </Typography>
              <Box sx={{ marginTop: "10px" }}>
                <Typography
                  sx={{ fontSize: "20px", fontWeight: 300, color: "white" }}
                >
                  Submit your details now to avail the offer and start your
                  adventure.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid sx={{ backgroundColor: "white" }} item sm={6}>
            <Tooltip title={"Cancel"}>
              <IconButton
                onClick={onClose}
                sx={{
                  position: "absolute",
                  top: "0.9rem",
                  right: "0.5rem",
                  color: "#E07323",
                }}
              >
                <CancelRoundedIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <Box sx={{ padding: "1rem", marginTop: "60px" }}>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ values, touched, errors, handleChange }) => (
                  <Form>
                    <Box sx={{ padding: "1rem", gap: "10px" }}>
                      <Stack spacing={3}>
                        <Field
                          as={TextField}
                          name="name"
                          label="Name"
                          variant="outlined"
                          value={values?.name}
                          fullWidth
                          onChange={handleChange}
                          error={touched.name && !!errors.name}
                          helperText={touched.name && errors.name}
                        />
                        <Field
                          as={TextField}
                          name="number"
                          label="Phone"
                          variant="outlined"
                          fullWidth
                          value={values?.number}
                          onChange={handleChange}
                          error={touched.number && !!errors.number}
                          helperText={touched.number && errors.number}
                        />
                        <Field
                          as={TextField}
                          name="email"
                          label="Email"
                          variant="outlined"
                          fullWidth
                          value={values?.email}
                          onChange={handleChange}
                          error={touched.email && !!errors.email}
                          helperText={touched.email && errors.email}
                        />
                      </Stack>
                    </Box>
                    <Box
                      className="flex justify-center"
                      sx={{ marginTop: { sm: "2rem" } }}
                    >
                      <Tooltip title="Get Coupon Code">
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          sx={{
                            background:
                              "linear-gradient(93deg, #53b2fe, #065af3)",
                          }}
                        >
                          {loading
                            ? "Getting Your Coupon..."
                            : "Get Coupon Code"}
                        </Button>
                      </Tooltip>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
      >
        <Box sx={{ padding: 2, textAlign: "center" }}>
          <Box
            sx={{
              backgroundImage: 'url("/Auli1.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "150px",
              borderRadius: "8px",
              mb: 2,
            }}
          />
          <DialogTitle sx={{ textAlign: "center" }}>
            <Typography
              variant="h5"
              component="h2"
              fontWeight="bold"
              gutterBottom
            >
              Congratulations!
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              Your coupon code is: <strong>{couponCode}</strong>
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Button
              variant="contained"
              startIcon={<ContentCopyIcon />}
              onClick={handleCopyCouponCode}
            >
              {copied ? "Copied" : "Copy Code"}
            </Button>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="error"
              onClick={handleCloseModal}
              sx={{ width: "100%" }}
            >
              Close
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default OfferForm;
