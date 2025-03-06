

"use client";
import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import Image from "next/image";

const Inclusion = ({ cardcontentinclusion }) => {
  return (
    <section
      style={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        padding: "20px",
      }}
    >
      <header>
        <Box sx={{ borderBottom: "1px solid #fdf6ca" }}>
          {/* Using an h2 tag for better SEO */}
          <Typography
            component="h2"
            sx={{ fontWeight: 600, fontSize: { xs: "15px", sm: "20px" }, marginBottom: "10px" }}
            variant="h4"
          >
            Inclusions
          </Typography>
        </Box>
      </header>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Box
            sx={{
              marginTop: "20px",
              width: "100%",
              height: { xs: "110px", md: "110px" },
              display: "flex",
              border: "3px solid #EFEFEF",
              borderRadius: "20px",
              padding: "13px",
              overflowX: "auto",  // For better responsiveness
            }}
          >
            {cardcontentinclusion && cardcontentinclusion.map((item, index) => (
              <Box
                key={item.id}
                sx={{
                  width:
                    index === 0 || index === 1
                      ? "22%"
                      : index === 2 || index === 3
                      ? "28%"
                      : "25%",
                  height: { xs: "75px", md: "85px" },
                  padding: "10px 4px",
                  borderRight:
                    index !== cardcontentinclusion.length - 1
                      ? "1px solid #D8D8D8"
                      : "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  backgroundColor: "white",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Image
                  src={item.img}
                  alt={`${item.title} Inclusion`}
                  height={30}
                  width={30}
                  layout="intrinsic" // Intrinsic for more control
                  priority={index < 2} // Priority for the first two images
                />
                <Typography
                  sx={{
                    fontSize: { xs: "10px", md: "12px", sm: "12px" },
                    color: "#343434",
                    fontWeight: 600,
                    marginTop: "4px",
                    textAlign: "center", // Align text centrally
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default Inclusion;
