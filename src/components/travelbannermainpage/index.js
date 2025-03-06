"use client";
import { Box, Container, Grid, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "@fontsource/aclonica";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { CommonButton } from "../commonbutton";
import { useMediaQuery, useTheme } from "@mui/material";
import SendYourQuery from "../sendyourquiry";

const TravelBanner = () => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleclickquery = () => {
    setOpen(true);
  };
  let fontSize;

  if (isMdUp) {
    fontSize = "90px";
  } else if (isSmUp) {
    fontSize = "50px";
  } else {
    fontSize = "30px";
  }

  const data = [
    {
      backgroundimage: "./kalpeshwarhd.png",
      title: "Book Your",
      titlecolour: "#5d5a59",
      title1: "Trip to",
      title1colour: "#5d5a59",
      title2: [
        { text: "Uttarakhand", color: "#ffd600" },
        { text: "Himachal", color: "#5864ff" },
        { text: "Leh Ladakh", color: "#00c4a7" },
        { text: "Kashmir", color: "#fd4b8f" },
      ],
      title2colour: "#FFD600",
      description: "Where Adventure Meets Community",
      descriptioncolour: "#5d5a59",
      hashtag: "#TripMysoul",
      bannerTexts: ["Explore", "Journey", "Connect", "Repeat"],
      bannertextcolours: "#fdfdfd",
      rightbordertext: "3px solid #fdfdfd ",
    },
  ];

  const colors = ["#5864ff", "#fd4b8f", "#00c4a7", "#5d5a59"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [colors.length]);
  return (
    <Box>
      <Grid container>
        <Swiper
          className="swiper"
          spaceBetween={30}
          centeredSlides={true}
          grabCursor
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  position: "relative",
                  paddingBottom: "60px",

                  background: `url(${item.backgroundimage}) no-repeat center center`,
                  backgroundSize: "cover",

                  height: {
                    xs: "50vh",
                    sm: "100vh",
                    md: "100vh",
                    lg: "80vh",
                  },
                }}
              >
                <Container maxWidth="xl">
                  <Grid container>
                    <Grid
                      container
                      sx={{ justifyContent: "center", display: "flex" }}
                    >
                      <Grid item xs={12} sm={12} md={12}>
                        <Box
                          sx={{
                            marginTop: { xs: "100px" },
                            marginLeft: { xs: "10px", sm: "70px", lg: "0px" },
                          }}
                        >
                          <Typography
                            component="h1"
                            sx={{
                              width: "100%",
                              color: item.titlecolour,
                              textAlign: "left",
                              lineHeight: "60.06px",
                              fontSize: { xs: "40px", sm: "53px" },

                              fontWeight: 400,
                              fontFamily: "Aclonica, sans-serif",
                            }}
                          >
                            {item.title}
                          </Typography>

                          <Typography
                            component="h1"
                            sx={{
                              width: "100%",
                              color: item.title1colour,
                              textAlign: "left",

                              fontSize: { xs: "30px", md: "53px" },
                              fontWeight: 400,
                              fontFamily: "Aclonica, sans-serif",
                              display: "flex",
                              alignItems: "center",
                              flexWrap: "wrap",
                              marginTop: { xs: "0", sm: "5px" },
                            }}
                          >
                            {item.title1}
                            <Swiper
                              className="swiper"
                              spaceBetween={30}
                              centeredSlides={true}
                              grabCursor
                              loop={true}
                              autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                              }}
                              modules={[Autoplay, Pagination]}
                              style={{
                                display: "inline-block",
                                flex: 1,
                                marginLeft: "10px",
                              }}
                            >
                              {item.title2.map((title, idx) => {
                                return (
                                  <SwiperSlide
                                    key={idx}
                                    style={{
                                      display: "inline-flex",
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: title.color,
                                        fontSize: fontSize,
                                        fontFamily: "Aclonica, sans-serif",
                                      }}
                                    >
                                      {title.text}
                                    </span>
                                  </SwiperSlide>
                                );
                              })}
                            </Swiper>
                          </Typography>

                          <Box sx={{ display: "flex", gap: "10px" }}>
                            {item.bannerTexts.map((text, index) => (
                              <Typography
                                sx={{
                                  borderRight: item.rightbordertext,
                                  color: item.bannertextcolours,
                                  fontWeight: 700,
                                  fontSize: {
                                    xs: "13px",
                                    md: "18px",
                                    sm: "20px",
                                  },
                                  paddingRight: "5px",
                                  marginLeft: "5px",
                                  marginTop: { xs: "10px", sm: "0", md: "0" },
                                }}
                                key={index}
                              >
                                {text}
                              </Typography>
                            ))}
                          </Box>
                          <Typography
                            sx={{
                              color: {
                                xs: colors[colorIndex],
                                md: colors[colorIndex],
                                sm: colors[colorIndex],
                              },
                              marginTop: { xs: "10px", sm: "30px" },
                              fontSize: "14px",
                              fontWeight: 700,
                              textAlign: "left",
                              marginLeft: "5px",
                            }}
                          >
                            {item.description}
                          </Typography>
                          <Typography
                            sx={{
                              // color: "#FFD600",
                              color: {
                                xs: colors[colorIndex],
                                md: colors[colorIndex],
                                sm: colors[colorIndex],
                              },
                              fontSize: "20px",
                              fontWeight: 700,
                              textAlign: "left",
                              marginLeft: "5px",
                            }}
                          >
                            {item.hashtag}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "left",
                              marginTop: { xs: "30px", sm: "50px" },
                              marginLeft: "5px",
                            }}
                          >
                            <CommonButton
                              buttonname={"Get In Touch"}
                              handleclickquery={handleclickquery}
                              fontSize={{ xs: "12px", sm: "15px", md: "17px" }}
                              tooltiptitle={"Get In Touch"}
                            />
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="send-query-modal-title"
        aria-describedby="send-query-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: { xs: 400, sm: 600, md: 600, lg: 600 },
          }}
        >
          <SendYourQuery onClose={handleClose} />
        </Box>
      </Modal>
    </Box>
  );
};

export default TravelBanner;
