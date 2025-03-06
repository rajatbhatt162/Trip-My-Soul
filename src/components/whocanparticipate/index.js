
import { Box, Typography } from '@mui/material';
import React from 'react';

const WhoCanParticipate = () => {
  const participationDetails = {
    title: "Who Can Participate",
    details: [
      {
        label: "Age",
        value: "12 years +"
      },
      {
        label: "First Timers",
        value: "First timers can apply; previous trekking experience is more appreciated."
      },
      {
        label: "Fitness Requirement",
        value: "The climber must be fit and have sufficient stamina to cover 5 km of distance in 35 minutes without stress."
      },
      {
        label: "Backpack Requirement",
        value: "The climber should be able to carry a 10-15 kg backpack."
      }
    ]
  };

  return (
    <Box
      sx={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        padding: "20px",
      }}
    >
      <Typography variant="h2" sx={{ fontSize: "24px", color: "#E3711A" }}>
        {participationDetails.title}
      </Typography>
      <ul style={{ listStyleType: "disc", color: "black" }}>
        {participationDetails.details.map((detail, index) => (
          <li key={index} style={{ marginTop: "10px" }}>
            <span style={{ color: "#E3711A", fontWeight: "500" }}>{detail.label}:</span> {detail.value}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default WhoCanParticipate;
