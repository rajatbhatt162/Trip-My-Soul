

"use client";
import { Box, Container, Grid, Modal, Rating, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import "@fontsource/aclonica";
import Image from "next/image";
import SendYourQuery from "../sendyourquiry";

const ItineraryBannerComponent = ({ travelbanner, regions }) => {
  const [value, setValue] = useState(travelbanner?.starts);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleclickquery = () => {
    setOpen(true);
  };

  return (
    <Box component="section">
      <Grid
        sx={{
          position: "relative",
          background: `url(${travelbanner?.travelimage}) no-repeat center center`,
          minHeight: { xs: "40vh", sm: "80vh" },
          backgroundSize: "cover",
        }}
        role="img"
        aria-label={`Banner image for ${travelbanner?.travelimagefirsttext}`}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 1,
          }}
        />
        <Container maxWidth="xl" disableGutters>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            sx={{ paddingLeft: 2 }}
            component="header"
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "28vh", sm: "50vh" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: { xs: 400, sm: 700, md: 700 },
                  fontSize: { xs: "32px", sm: "70px", md: "90px" },
                  color: "#fcfcfc",
                  fontFamily: "Aclonica, sans-serif",
                  zIndex: 2,
                }}
              >
                {travelbanner?.travelimagefirsttext}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: { xs: 400, sm: 700, md: 700 },
                  fontSize: { xs: "32px", sm: "70px", md: "90px" },
                  color: "#fcfcfc",
                  fontFamily: "Aclonica, sans-serif",
                  zIndex: 2,
                }}
              >
                {travelbanner?.travelimagesecondtext}
              </Typography>
            </Box>

            <Box
              className="flex justify-between align-center w-full"
              sx={{
                marginTop: { md: "90px", sm: "100px", xs: "5px", lg: "60px" },
              }}
              component="article"
            >
              <Box
                onClick={handleclickquery}
                className="flex align-center"
                sx={{
                  background: 'url("/transparent.png") no-repeat',
                  backgroundSize: "200px",
                  width: { sm: "170px", xs: "77px" },
                  borderRadius: "3px",
                  cursor: "pointer",
                  padding: 0.5,
                  transition: "transform 0.2s ease-in-out",
                  zIndex: 2,
                  "&:hover": {
                    transform: "scaleY(1.05)",
                  },
                  "&:active": {
                    transform: "scaleY(0.95)",
                  },
                }}
                aria-label="Help & Support button"
              >
                <PhoneIcon
                  sx={{
                    color: "white",
                    padding: { xs: "5px" },
                    marginLeft: { xs: "0px", sm: "25px" },
                    fontSize: { xs: "15px", sm: "25px", md: "25px" },
                  }}
                />
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Aclonica, sans-serif",
                    fontWeight: "bold",
                    fontSize: { xs: "5px", sm: "10px", md: "10px" },
                    zIndex: 2,
                  }}
                >
                  Help & Support
                </Typography>
              </Box>

              <Box
                className="flex align-center justify-center"
                sx={{
                  background: 'url("/transparent.png") no-repeat center center',
                  backgroundSize: "200px",
                  padding: 1,
                  width: { sm: "100px", xs: "80px" },
                  borderRadius: "3px",
                  marginLeft: { xs: "20px" },
                  zIndex: 2,
                }}
                aria-label="Travel days"
              >
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Aclonica, sans-serif",
                    fontWeight: "bold",
                    fontSize: { xs: "6px", sm: "10px", md: "10px" },
                    zIndex: 2,
                  }}
                >
                  {travelbanner?.traveldays}
                </Typography>
              </Box>

              <Box
                className="flex align-center justify-left"
                sx={{
                  background: 'url("/transparent.png") no-repeat center center',
                  backgroundSize: "200px",
                  width: { xs: "165px", sm: "200px" },
                  borderRadius: "3px",
                  padding: 1,
                  zIndex: 2,
                }}
                aria-label="Ratings and reviews"
              >
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  size="small"
                />
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "6px", sm: "10px", md: "10px" },
                    fontWeight: 700,
                    zIndex: 2,
                  }}
                >
                  {travelbanner?.reviwsoftrip}+ Reviews
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Grid>

      <Container maxWidth="xl" disableGutters>
        <Box className="flex justify-evenly mb-lg" component="nav">
          {regions &&
            regions.map((item, index) => (
              <Tooltip title={item.description} key={index}>
                <Box
                  className="flex align-center justify-center"
                  sx={{
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                    padding: "10px",
                    marginTop: "10px",
                    borderRight: index !== regions.length - 1 ? "1px solid #ccc" : "none",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: 1,
                      width: { xs: 30, sm: 50 },
                      height: { xs: 30, sm: 50 },
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={`Image of ${item.title}`}
                      width={40}
                      height={40}
                      layout="fixed"
                      style={{ width: "100%", height: "100%" }}
                      loading="lazy"
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#e47927",
                        fontSize: { xs: "6px", sm: "15px", md: "12px", lg: "20px" },
                        fontWeight: 600,
                        lineHeight: "initial",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#5E5E5E",
                        fontWeight: 500,
                        fontSize: { xs: "6px", sm: "15px", md: "12px", lg: "16px" },
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Tooltip>
            ))}
        </Box>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="send-query-modal-title"
        aria-describedby="send-query-modal-description"
      >
        <SendYourQuery travelbanner={travelbanner} onClose={handleClose} />
      </Modal>
    </Box>
  );
};

export default ItineraryBannerComponent;
