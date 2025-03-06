"use client";
import React, { useState, useCallback } from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

const ThingsToPack = ({ thingtopack }) => {
  const [showAll, setShowAll] = useState(false);
  // const isLaptop = useMediaQuery("(min-width:1024px)");
  const itemsToShow = showAll 
    ? thingtopack 
    : Array.isArray(thingtopack) 
      ? thingtopack.slice(0, 5) 
      : [];

  const handleViewMoreClick = useCallback(() => setShowAll(true), []);
  const handleViewLessClick = useCallback(() => setShowAll(false), []);

  if (!thingtopack || thingtopack.length === 0) {
    return null;
  }

  return (
    <Box paddingBottom="30px">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              component="h2"
              sx={{
                padding: "20px 0px",
                fontSize: "22px",
                fontWeight: 500,
                textAlign: "left",
                color: "#E3711A",
              }}
            >
              Things To Pack
            </Typography>
            <Box
              sx={{
                padding: "20px",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                marginBottom: "30px",
              }}
            >
              {itemsToShow.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.title || "Thing to pack"} 
                    width={50}
                    height={50}
                    loading="lazy" 
                  />
                  <Box sx={{ marginLeft: "15px" }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", sm: "16px" },
                        fontWeight: 500,
                      }}
                    >
                      {item.title}
                    </Typography>
                    {/* {
                    // isLaptop 
                    // && 
                    ( */}
                      <Typography
                        sx={{
                          color: "#5B5B5B",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                        className="thingToPackDescription"
                      >
                        {item.description}
                      </Typography>
                    {/* )} */}
                  </Box>
                </Box>
              ))}
              <Box sx={{ textAlign: "center", marginTop: "15px" }}>
                <button
                  onClick={showAll ? handleViewLessClick : handleViewMoreClick}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#FF912C",
                    fontSize: "18px",
                    fontWeight: 400,
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  {showAll ? "View Less" : "View More"}
                </button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ThingsToPack;
