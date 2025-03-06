import PrivacyPolicyBanner from "@/components/privacypolicybanner";
import PrivacyPolicyContent from "@/components/privacypolicycontent";
import { Box } from "@mui/material";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <Box>
      <PrivacyPolicyBanner />
      <PrivacyPolicyContent />
    </Box>
  );
};

export default PrivacyPolicy;

export async function generateMetadata({ params }) {
  return {
    title: 'TripMySoul Privacy Policy: Transparency in data usage',
    description: 'TripMySoul Privacy Policy: Get information on our practices regarding personal data collection, usage, and the security measures we implement.',
  };
}
