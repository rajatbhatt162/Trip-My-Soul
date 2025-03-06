import { Box, Typography } from "@mui/material";
import React from "react";

const PrivacyPolicyBanner = () => {
  return (
    <Box className="Policy-banner-bg">
      <Box className="flex justify-center">
        <Typography
          sx={{
            color: "#FFFFFF",
            marginTop: "100px",
            fontSize: { xs: "35px", sm: "50px" },
          }}
        >
          Privacy Policy
        </Typography>
      </Box>
    </Box>
  );
};

export default PrivacyPolicyBanner;
