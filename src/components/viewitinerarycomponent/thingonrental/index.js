

"use client";
import React, { useState } from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const ThingsOnRental = React.memo(({ thingtorental }) => {
  const [showAll, setShowAll] = useState(false);
  // const isLaptop = useMediaQuery("(min-width:1024px)");
  const itemsToShow = showAll ? thingtorental : thingtorental?.slice(0, 5) || [];

  const handleViewMoreClick = () => setShowAll(true);
  const handleViewLessClick = () => setShowAll(false);

  // Early return for empty array
  if (!thingtorental || thingtorental.length === 0) {
    return null; 
  }

  return (
    <Box paddingBottom="30px">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              sx={{
                padding: "20px 0",
                fontSize: "22px",
                fontWeight: 500,
                textAlign: "left",
                color: "#E3711A",
              }}
              component="h2" // Use semantic heading for SEO
            >
              Things On Rental
            </Typography>
            <Box
              sx={{
                padding: "20px",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                marginBottom: "30px",
              }}
              component="section" // Use semantic HTML
            >
              {itemsToShow.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between", 
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Image
                      src={item.img}
                      alt={item.title} // Ensure alt text is descriptive
                      width={50}
                      height={50}
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
                      {/* {isLaptop && ( */}
                        <Typography
                          sx={{
                            color: "#5B5B5B",
                            fontSize: "14px",
                            marginTop: "5px",
                          }}
                          className="thingToRent"
                        >
                          {item.description}
                        </Typography>
                      {/* )} */}
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      minWidth: "70px", 
                    }}
                  >
                    <CurrencyRupeeIcon
                      sx={{
                        fontSize: { xs: "16px", sm: "18px" },
                        marginRight: "2px", 
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", sm: "16px" },
                        fontWeight: 500,
                        color: "#000",
                      }}
                    >
                      {item.price}
                    </Typography>
                  </Box>
                </Box>
              ))}
              <Box sx={{ textAlign: "center", marginTop: "15px" }}>
                <Typography
                  onClick={showAll ? handleViewLessClick : handleViewMoreClick}
                  sx={{
                    color: "#FF912C",
                    fontSize: "18px",
                    fontWeight: 400,
                    cursor: "pointer",
                    textDecoration: "underline",
                    "&:hover": {
                      color: "#E67E22",
                    },
                  }}
                  role="button" // Indicates interactive element
                  tabIndex={0} // Makes it focusable
                  onKeyPress={(e) => e.key === 'Enter' && (showAll ? handleViewLessClick() : handleViewMoreClick())} // Allows keyboard interaction
                >
                  {showAll ? "View Less" : "View More"}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
});

export default ThingsOnRental;
