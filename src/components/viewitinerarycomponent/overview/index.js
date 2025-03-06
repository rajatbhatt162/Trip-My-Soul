
"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { keyframes } from '@emotion/react';
import { styled } from '@mui/system';

const expand = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 1000px; /* Adjust based on your content */
    opacity: 1;
  }
`;

const collapse = keyframes`
  from {
    max-height: 1000px; /* Adjust based on your content */
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
`;

const AnimatedBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded'
})(({ isExpanded }) => ({
  overflow: 'hidden',
  animation: `${isExpanded ? expand : collapse} 0.5s ease-in-out`,
  maxHeight: isExpanded ? '1000px' : '0',
  opacity: isExpanded ? '1' : '0',
}));

const Overview = ({ overviewsdetails }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggleClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container sx={{ display: "flex" }}>
          <Grid item xs={12}>
            <Typography
              sx={{
                padding: "20px 0",
                fontSize: "22px",
                fontWeight: 500,
              }}
            >
              Overview
            </Typography>
            {overviewsdetails.map((content, contentIndex) => (
              <Box
                key={contentIndex}
                sx={{
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  marginBottom: "30px",
                }}
              >
                <Typography
                  sx={{
                    color: "#4F4F4F",
                    fontSize: { xs: "16px", sm: "18px", md: "18px" },
                    fontWeight: 400,
                    padding: "15px",
                    lineHeight: "30px",
                  }}
                >
                  {content.description}
                  <AnimatedBox isExpanded={expandedIndex === contentIndex}>
                    <Typography sx={{ marginTop: "15px", fontWeight: "bold" }}>
                      {content.title}
                    </Typography>
                    {content.subContent.map((item, index) => (
                      <Box key={index} sx={{ marginTop: "15px" }}>
                        <Typography sx={{ fontWeight: 600, color: 'black' }}>
                          {item.heading}
                        </Typography>
                        <Typography sx={{ color: '#4F4F4F' }}>
                          {item.description}
                        </Typography>
                      </Box>
                    ))}
                  </AnimatedBox>
                </Typography>
                <Box 
                  sx={{ 
                    textAlign: "center", 
                    marginTop: "15px", 
                    paddingBottom: "30px" 
                  }}
                >
                  <Typography
                    onClick={() => handleToggleClick(contentIndex)}
                    aria-expanded={expandedIndex === contentIndex}
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
                  >
                    {expandedIndex === contentIndex ? "View less" : "View more"}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Overview;
