"use client";
import React, { useState } from "react";
import * as yup from "yup";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Cookies from "js-cookie";
import { Box, Container, Grid, Modal, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { IoLogoYoutube } from "react-icons/io5";
import { slackNotifier } from "@/services";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    address: "",
    location: "",
    number: "",
    message: "",
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
    address: yup.string().required("Address is required"),
    message: yup.string().required("Message is required"),
  });

  const trackingId = Cookies.get("be_tracking_id");

  const onSubmit = async (values, { resetForm }) => {
    console.log("Form Submitted with values: ", values);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values?.name,
        email: values?.email,
        address: values?.address,
        location: values?.location,
        mobile: values?.number,
        message: values?.message,
        tracking_id: trackingId,
        event_type: "form-submit",
        sdk_id: "tripmysoul",
      }),
    };

    setLoading(true);
    try {
      // debugger;
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TRACKING_BASE_URL}/api/v1/contact-form`,
        options
      );
      const data = await response.json();
      console.log(data);
      if(data.success){
        const slackMessage = await slackNotifier(data?.data[0]);
      }
      setLoading(false);
      setModalOpen(true);
      resetForm();
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError(true);
    }
  };
  const handleClose = () => setModalOpen(false);
  return (
    <>
      <Box
        sx={{
          padding: "1rem 0",
          background: 'url("/contactus3.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: { xs: "300px", sm: "300px" },
          position: "relative",
        }}
      >
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} sm={12}>
              <Box
                sx={{
                  textAlign: "start",
                  paddingLeft: {
                    xs: "1rem",
                    sm: "1rem",
                    md: "1rem",
                    lg: "9rem",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#fff",
                    fontSize: { xs: "2rem" },
                    paddingTop: { xs: "4rem", sm: "3.5rem" },
                  }}
                  variant="h3"
                >
                  Contact us
                </Typography>
                <Typography sx={{ padding: "0.5rem 0", color: "#fff" }}>
                  Reach Out to Us for Your Travel Inquiries and Support
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ position: "relative", top: "-4rem" }}>
        <Container>
          <Grid container spacing={2}>
         
            <Grid item xs={12} sm={7}>
              <Box
                sx={{
                  borderRadius: "10px",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  backgroundColor: "#fff",
                }}
              >
                <Box sx={{ borderBottom: "1px solid grey" }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      gap: "1rem",
                      padding: "1rem 0 1rem 2rem ",
                    }}
                    variant="h5"
                  >
                    <span style={{ paddingRight: "1.5rem" }}>
                      <KeyboardBackspaceIcon />
                    </span>
                    Send us a message
                  </Typography>
                </Box>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {({ touched, errors, handleChange, values }) => (
                    <Form>
                      <Box sx={{ padding: "1rem " }}>
                        <Box
                          sx={{
                            padding: { xs: "0rem 0rem", sm: "1rem 0" },
                            display: "flex",
                            alignItems: "center",
                            "& > :not(style)": { m: 1 },
                          }}
                        >
                          <Field
                            as={TextField}
                            fullWidth
                            name="name"
                            label="Full Name"
                            value={values?.name}
                            onChange={handleChange}
                            error={touched.name && !!errors.name}
                            helperText={touched.name && errors.name}
                          />
                          <Field
                            as={TextField}
                            fullWidth
                            name="email"
                            label="Email Address"
                            value={values?.email}
                            onChange={handleChange}
                            error={touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                          />
                        </Box>

                        <Box
                          sx={{
                            padding: "1rem 0",
                            display: "flex",
                            alignItems: "center",
                            "& > :not(style)": { m: 1 },
                          }}
                        >
                          <Field
                            as={TextField}
                            fullWidth
                            name="number"
                            label="Phone Number"
                            value={values?.number}
                            onChange={handleChange}
                            error={touched.number && !!errors.number}
                            helperText={touched.number && errors.number}
                          />
                          <Field
                            as={TextField}
                            fullWidth
                            name="address"
                            label="Address"
                            value={values?.address}
                            onChange={handleChange}
                            error={touched.address && !!errors.address}
                            helperText={touched.address && errors.address}
                          />
                            <Field
                            as={TextField}
                            fullWidth
                            name="location"
                            label="City(optional)"
                            value={values?.location}
                            onChange={handleChange}
                          
                          />
                        </Box>

                        <Box
                          component="div"
                          sx={{
                            padding: {
                              xs: "0rem 1rem 0rem 0rem",
                              sm: "1rem 1rem 0rem 0rem",
                            },
                            "& .MuiTextField-root": { m: 1 },
                          }}
                        >
                          <Field
                            as={TextField}
                            fullWidth
                            name="message"
                            label="Message"
                            multiline
                            rows={4}
                            value={values.message}
                            onChange={handleChange}
                            error={touched.message && !!errors.message}
                            helperText={touched.message && errors.message}
                          />
                        </Box>

                        <Box sx={{ padding: "1rem" }}>
                          <Typography sx={{ fontSize: "1rem" }}>
                            By submitting this form: You agree to the processing
                            of the submitted personal data in accordance with{" "}
                            <a style={{ textDecoration: "none" }} href="#">
                              Trip My Soul
                            </a>{" "}
                            Privacy Policy including the transfer of data to the
                            United States.
                          </Typography>
                        </Box>

                        <Box sx={{ padding: "0 1rem" }}>
                          <Stack spacing={2} direction="row">
                            <Button
                              type="submit"
                              disabled={loading}
                              sx={{
                                background:
                                  "linear-gradient(93deg, #53b2fe, #065af3)",
                                fontWeight: "600",
                                borderRadius: "25px",
                                color: "#fff",
                                padding: "0.5rem 1.5rem",
                              }}
                            >
                              {loading ? "Submitting..." : "Submit"}
                            </Button>
                          </Stack>
                        </Box>
                      </Box>
                    </Form>
                  )}
                </Formik>
              </Box>
            </Grid>

            <Grid item xs={12} sm={5}>
              <Box
                sx={{
                  borderRadius: "10px",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  backgroundColor: "#fff",
                  padding: "2rem",
                }}
              >
                <Box sx={{ padding: "1rem 0" }}>
                  <Typography>
                    Join Our Community of Adventurers and Get in Touch.
                  </Typography>
                </Box>
                {/* <Box sx={{ color: "#0095F6" }}>
                  <Typography
                    sx={{
                      lineHeight: "2.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    {" "}
                    <EmailIcon /> tripmysoulteam@gmail.com{" "}
                  </Typography>
                  <Typography
                    sx={{
                      lineHeight: "2.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    {" "}
                    <a
                    href="https://www.youtube.com/@tripmysoul"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    <IoLogoYoutube /> youtube
                  </a>
               
                  </Typography>
                  <Typography
                    sx={{
                      lineHeight: "2.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    {" "}
                    <a
                    href="https://www.facebook.com/tripmysoul.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                          <FacebookIcon /> Facebook
                  </a>
          
                  </Typography>
                  <Typography
                    sx={{
                      lineHeight: "2.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    {" "}
                    <a
                    href="https://www.linkedin.com/in/pramod-panwar-568702224/?originalSubdomain=in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
              <LinkedInIcon /> LinkedIn
                  </a>
                  
                  </Typography>
                  <Typography
                    sx={{
                      lineHeight: "2.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    {" "}

                    <a
                    href="https://www.instagram.com/tripmysoul.in/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                      <InstagramIcon /> Instagram
                  </a>
                
                  </Typography>
                </Box> */}

                <Box sx={{ color: "#0095F6" }}>
                  <Typography
                    component="a"
                    href="mailto:tripmysoulteam@gmail.com"
                    sx={{
                      lineHeight: "2.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      textDecoration: "none",
                      color: "inherit", 
                      fontFamily:"Montserrat , sans-serif"
                    }}
                  >
                    <EmailIcon />
                    tripmysoulteam@gmail.com
                  </Typography>

                  <Typography
                    sx={{
                      lineHeight: "2.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <a
                      href="https://www.youtube.com/@tripmysoul"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                       
                        color: "#0095F6",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        textDecoration: "none",
                      }}
                    >
                      <IoLogoYoutube size={"23px"} /> YouTube
                    </a>
                  </Typography>

                  <Typography
                    sx={{
                      lineHeight: "2.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <a
                      href="https://www.facebook.com/tripmysoul.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#0095F6",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        textDecoration: "none",
                      }}
                    >
                      <FacebookIcon /> Facebook
                    </a>
                  </Typography>

                  <Typography
                    sx={{
                      lineHeight: "2.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/in/pramod-panwar-568702224/?originalSubdomain=in"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#0095F6",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        textDecoration: "none",
                      }}
                    >
                      <LinkedInIcon /> LinkedIn
                    </a>
                  </Typography>

                  <Typography
                    sx={{
                      lineHeight: "2.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <a
                      href="https://www.instagram.com/tripmysoul.in/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#0095F6",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        textDecoration: "none",
                      }}
                    >
                      <InstagramIcon /> Instagram
                    </a>
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "1rem" }}>
                  <Typography>
                    Chat with Us and Get a Detailed Reply to Your Queries
                  </Typography>
                </Box>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="thank-you-modal"
        aria-describedby="thank-you-message"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 350,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
            borderRadius: 2,
          }}
        >
          <Typography
            id="thank-you-modal"
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            Thank You for Choosing Trip My Soul!
          </Typography>
          <Typography
            id="thank-you-message"
            sx={{ mt: 3, fontSize: "1.1rem", color: "text.secondary" }}
          >
            We’re thrilled to be part of your next adventure! Your message has
            been received, and our team will get back to you shortly. Until
            then, start dreaming about the unforgettable journeys that lie
            ahead. 🌍✈️
          </Typography>
          <Typography
            sx={{
              mt: 2,
              fontWeight: "bold",
              fontSize: "1rem",
              color: "primary.dark",
            }}
          >
            Wishing you safe travels and extraordinary experiences,
            <br />
            The Trip My Soul Team
          </Typography>
          <Button
            onClick={handleClose}
            sx={{
              mt: 3,
              background: "linear-gradient(93deg, #53b2fe, #065af3)",
            }}
            variant="contained"
            color="primary"
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ContactUs;
