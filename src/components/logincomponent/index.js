"use client";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import XIcon from "@mui/icons-material/X";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginComponent = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Address is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  return (
    <Box sx={{ margin: { xs: "4rem 0", sm: "2rem 0" } }}>
      <Container>
        <Grid
          container
          sx={{
            padding: "1rem",
            borderRadius: "10px",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; ",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              background: 'url("/login3.png")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              display: "flex",
            }}
          >
            <Box
              sx={{
                color: "#fff",
                padding: { xs: "3rem 1rem ", sm: "3rem" },
              }}
            >
              <Typography sx={{ fontWeight: "600" }} variant="h4">
                Welcome
              </Typography>
              <Typography
                sx={{ fontWeight: "600", color: "#FFD500" }}
                variant="h4"
              >
                To Your Travel Gateway!
              </Typography>
              <Typography sx={{ padding: "3rem 0", textAlign: "justify" }}>
                <span style={{ fontWeight: 700 }}>Log In</span> to view your
                itineraries, update your travel plans, and uncover new
                destinations.
              </Typography>
              <Box
                sx={{
                  padding: "1rem",
                  backgroundColor: "#0000008C",
                  borderRadius: "20px",
                  boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                }}
              >
                <Typography
                  sx={{
                    color: "#63DDFF",
                    fontWeight: "600",
                    padding: "1rem 0",
                  }}
                  variant="h6"
                >
                  Festival Offers
                </Typography>
                <Typography sx={{ padding: "1rem 0", textAlign: "justify" }}>
                  Special packages and discounts during major festivals and
                  holidays.
                </Typography>
                <Box
                  sx={{
                    justifyContent: "end",
                    color: "#63DDFF",
                    display: "flex",
                  }}
                >
                  <ArrowForwardIosIcon />
                </Box>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  margin: "2rem 0",
                  padding: " 0 1rem  ",
                }}
              >
                <Typography
                  sx={{ fontWeight: "600", fontSize: { xs: "1.1rem" } }}
                  variant="h6"
                >
                  Don’t have an account?{" "}
                  <a style={{ color: "#63DDFF" }} href="#">
                    Sign Up
                  </a>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ padding: "1rem" }}>
              <Box
                sx={{
                  padding: "1rem 1rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontWeight: 600 }} variant="h5">
                  Log In
                </Typography>
                <Box sx={{ color: "#E07323" }}>
                  <CancelRoundedIcon fontSize="large" />
                </Box>
              </Box>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ touched, errors }) => (
                  <Form>
                    <Box>
                      <Box
                        sx={{
                          padding: { xs: "0rem  ", sm: "1rem 0" },
                          marginTop: { xs: "0rem", sm: "3rem" },
                          display: "flex",
                          alignItems: "center",
                          "& > :not(style)": { m: 1 },
                        }}
                      >
                        <Field
                          as={TextField}
                          fullWidth
                          name="email"
                          label="Email Address"
                          error={touched.email && !!errors.email}
                          helperText={touched.email && errors.email}
                        />
                      </Box>
                      <Box
                        sx={{
                          padding: { xs: "0rem  ", sm: "1rem 0" },
                          display: "flex",
                          alignItems: "center",
                          "& > :not(style)": { m: 1 },
                        }}
                      >
                        <FormControl
                          sx={{ m: 1, width: "100%" }}
                          variant="outlined"
                        >
                          <InputLabel htmlFor="outlined-adornment-password">
                            Password
                          </InputLabel>
                          <Field
                            as={OutlinedInput}
                            name="password"
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="Password"
                            error={touched.password && !!errors.password}
                          />
                          {touched.password && errors.password && (
                            <Box
                              sx={{
                                color: "red",
                                fontSize: "0.75rem",
                                marginTop: "0.25rem",
                              }}
                            >
                              {errors.password}
                            </Box>
                          )}
                        </FormControl>
                      </Box>
                    </Box>
                    <Box sx={{ textAlign: "center", margin: "2rem 0" }}>
                      <Typography
                        sx={{ marginBottom: "1rem", textAlign: "center" }}
                      >
                        <span style={{ color: "#E07323", fontWeight: "600" }}>
                          Log in{" "}
                        </span>
                        with Phone Number
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "center",
                          color: "#E07323",
                          fontWeight: "600",
                        }}
                      >
                        Forgot Password
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        padding: "1rem",
                        marginTop: { xs: "2rem", sm: "3rem" },
                        justifyContent: "center",
                        display: "flex",
                      }}
                    >
                      <Stack spacing={2} direction="row">
                        <Button
                          type="submit"
                          sx={{
                            fontWeight: "600",
                            borderRadius: "5px",
                            color: "#fff",
                            padding: "0.5rem 3rem",
                            backgroundColor: "#006FFF",
                            "&:hover": { backgroundColor: "#e3711a" },
                          }}
                        >
                          Log In
                        </Button>
                      </Stack>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LoginComponent;
