import { Box, Typography } from "@mui/material";
import React from "react";

export const PriceDetails = React.memo(({ tempopriceDetails }) => {
  return (
    <Box
      sx={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        padding: "20px",
      }}
      component="section" 
      aria-labelledby="price-heading" // Accessible label for screen readers
    >
      <Box sx={{ borderBottom: "1px solid  #fdf6ca" }}>
        <Typography
          id="price-heading" // ID for accessibility
          sx={{ fontWeight: 600, fontSize: { xs: "15px", sm: "20px" }, marginBottom: "10px" }}
          variant="h4"
        >
          Price
        </Typography>
      </Box>

      {tempopriceDetails && tempopriceDetails.map((detail, index) => (
        <Box
          key={index}
          className="flex align-center justify-between mt-md"
          sx={{
            border: "2px solid  #f1f1f1",
            height: "60px",
            padding: "10px",
            borderRadius: "8px",
            color: "#4C4C4C",
            marginTop: "15px",
          }}
        >
          <Typography>
            <Box
              component="span"
              sx={{ fontWeight: 700, fontSize: { xs: "13px", sm: "15px", md: "15px" } }}
            >
              {detail.occupancyType} {" - "}
            </Box>
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "13px", sm: "15px", md: "15px" },
            }}
          >
            ₹ {detail.pricePerPerson}
          </Typography>
        </Box>
      ))}
    </Box>
  );
});
