
"use client";
import { Box, Typography, Grid, Tooltip } from "@mui/material";
import React, { useState } from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SportsScoreOutlinedIcon from "@mui/icons-material/SportsScoreOutlined";

const iconMap = {
  PlaceOutlinedIcon,
  TimerOutlinedIcon,
  BusinessCenterOutlinedIcon,
  SportsScoreOutlinedIcon,
};

const DetailsTrip = ({ cardcontent }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleBoxClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section>
      <Box
        sx={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          padding: "20px",
        }}
      >
        <Box sx={{ borderBottom: "1px solid #fdf6ca" }}>
          <Typography
            variant="h3" // Change to an appropriate heading level
            sx={{
              fontWeight: 600,
              fontSize: { xs: "15px", sm: "20px" },
              marginBottom: "10px",
            }}
          >
            Details
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                marginTop: "20px",
                width: "100%",
                height: "auto",
                display: "flex",
                border: "3px solid #EFEFEF",
                borderRadius: "20px",
                padding: "8px",
              }}
            >
              {cardcontent && cardcontent.map((item, index) => {
                const IconComponent = iconMap[item.iconName];
                return (
                  <Box
                    key={index}
                    onClick={() => handleBoxClick(index)}
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "25%",
                      },
                      height: { xs: "auto", md: "85px" },
                      borderRight:
                        index !== cardcontent.length - 1
                          ? "1px solid #D8D8D8"
                          : "none",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        flexDirection: "column",
                      }}
                    >
                      {IconComponent && (
                        <Tooltip title={item.title} arrow>
                          <IconComponent
                            sx={{
                              color: item.color || "#006FFF",
                              fontSize: {
                                xs: "20px",
                                sm: "30px",
                              },
                            }}
                          />
                        </Tooltip>
                      )}
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "8px",
                            sm: "10px",
                          },
                          color: "black",
                          fontWeight: 600,
                          textAlign: "center",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        width: "100%",
                        padding: "5px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#343434",
                          fontSize: {
                            xs: "8px",
                            sm: "10px",
                          },
                          fontWeight: "400",
                          marginTop: "10px",
                          textAlign: "center",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default DetailsTrip;
