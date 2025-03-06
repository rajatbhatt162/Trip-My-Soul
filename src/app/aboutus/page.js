// components/About.js
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AboutUsComponent from "@/components/aboutuscomponent";

const AboutUs = () => {
  return (
    <>
      <AboutUsComponent />
    </>
  );
};

export default AboutUs;

export async function generateMetadata({ params }) {
  return {
    title: 'About Trip My Soul | Passionate Travel Experts & Treks',
    description: 'Explore Trip My Soul’s commitment to providing exceptional travel experiences. Learn about our history, mission, and what sets us apart in the travel industry.',
  };
}
