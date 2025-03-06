
"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  useMediaQuery,
  Collapse,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../assests/logo.png";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OfferModal from "@/components/modelforclose";

const footerSections = [
  {
    title: "Company",
    links: [
      { title: "Home", href: "/" },
      { title: "About us", href: "/aboutus" },
      { title: "Contact Us", href: "/contactus" },
    ],
  },
  {
    title: "Treks",
    links: [
      { title: "Uttarakhand", href: "/Uttarakhand/uttarakhand-110" },
      { title: "Himachal Pradesh", href: "/Himachal%20Pardesh/himachal-pardesh-112" },
      { title: "Jammu & Kashmir", href: "/Kashmir/kashmir-122" },
    ],
  },
  {
    title: "Trips",
    links: [
      { title: "Ladakh", href: "/Kashmir/kashmir-122/Leh-Ladakh/Leh-Ladakh-details-502" },
      { title: "Spiti", href: "/Himachal%20Pardesh/himachal-pardesh-112/Spiti%20Valley/spiti-vallley-111" },
    ],
  },
  {
    title: "Useful Links",
    links: [
      { title: "Payment Policy", href: "/paymentpolicy" },
      { title: "Terms & Conditions", href: "/termcondition" },
      { title: "Privacy Policy", href: "/privacypolicy" },
      { title: "Cancellation Policy", href: "/cancellationpolicy" },
    ],
  },
];

const Footer = () => {
  const [expandedSections, setExpandedSections] = useState(
    Array(footerSections.length).fill(false)
  );
  const [openModal, setOpenModal] = useState(false);
  const [hasModalBeenShown, setHasModalBeenShown] = useState(false);

  const sectionTitleStyles = {
    color: "#FF6E1D",
    marginTop: "25px",
    display: "flex",
    cursor: "pointer",
  };

  const itemTextStyles = {
    color: "#D5D5D5",
    marginTop: "6px",
  };

  const linkItemStyles = {
    ...itemTextStyles,
    marginTop: "10px",
  };

  const dividerStyles = { backgroundColor: "#ADD8E6", marginTop: "10px" };

  const privacyPolicyStyles = {
    textAlign: "center",
    color: "#D5D5D5",
    fontSize: "12px",
    marginTop: "7px",
  };

  const isDesktop = useMediaQuery("(min-width: 750px)");

  const toggleSection = (index) => {
    if (!isDesktop) {
      const newExpandedSections = [...expandedSections];
      newExpandedSections[index] = !newExpandedSections[index];
      setExpandedSections(newExpandedSections);
    }
  };

  useEffect(() => {
    const handleMouseLeave = (event) => {
      if (event.clientY <= 0 && !hasModalBeenShown) {
        setOpenModal(true);
        setHasModalBeenShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasModalBeenShown]);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box className="FooterSection">
      <Container maxWidth="xl">
        <Box className="Footer-Links">
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <Link href="/">
                <Image
                  style={{ height: "auto", width: "180px", color: "#fff" }}
                  src={Logo}
                  alt="Trip My Soul Logo"
                />
              </Link>
              <Typography sx={{ color: "white", fontSize: "14px", fontWeight: "500", marginTop: "10px" }}>
                Visit us at
              </Typography>
              <Box
                sx={{
                  gap: "10px",
                  display: "flex",
                  fontSize: "1.2rem",
                  padding: "10px 0px",
                }}
              >
                <Link href="https://www.instagram.com/tripmysoul.in/?hl=en" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                  <FaInstagram />
                </Link>
                <Link href="https://www.facebook.com/tripmysoul.in/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                  <FaFacebook />
                </Link>
                <Link href="https://www.youtube.com/@tripmysoul" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                  <IoLogoYoutube />
                </Link>
                <Link href="https://www.linkedin.com/in/pramod-panwar-568702224/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                  <FaLinkedin />
                </Link>
              </Box>
              <Typography variant="body1" sx={itemTextStyles}>
                Address:
              </Typography>
              <Typography variant="caption" component="span" sx={itemTextStyles}>
                Block E, Ln 8, Saraswati Vihar, Ajabpur<br /> Khurd, Dehradun, Uttarakhand, 248001
              </Typography>
              <Typography variant="body1" display="block" margin="normal" sx={itemTextStyles}>
                Contact:
              </Typography>
              <Typography variant="caption" component="span" sx={itemTextStyles}>
                +91-90685 13438
              </Typography>
              <Typography variant="caption" component="p" sx={itemTextStyles}>
                tripmysoulteam@gmail.com
              </Typography>
            </Grid>
            {footerSections.map((section, index) => (
              <Grid item xs={12} sm={3} md={3} lg={2.25} key={index}>
                <Box>
                  <Box
                    variant="body1"
                    sx={sectionTitleStyles}
                    onClick={() => toggleSection(index)}
                  >
                    {section.title}
                    {!isDesktop && (
                      <Box>
                        {expandedSections[index] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                      </Box>
                    )}
                  </Box>
                  <Collapse in={expandedSections[index] || isDesktop}>
                    <Box>
                      {section.links.map((link, idx) => (
                        <Typography sx={linkItemStyles} variant="body2" key={idx}>
                          <Link href={link.href} style={{ color: "#CECECE", textDecoration: "none" }}>
                            {link.title}
                          </Link>
                        </Typography>
                      ))}
                    </Box>
                  </Collapse>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Divider sx={dividerStyles} />
          <Typography sx={privacyPolicyStyles}>
            <Link href="/" style={{ color: "#CECECE", textDecoration: "none" }}>
            <p>Powered by <span style={{color: "#FF6E1D"}}>iifetech</span> for innovative solutions.</p>
              © 2015-2024 Tripmysoul Pvt. Ltd.
            </Link>
          </Typography>
        </Box>
        {/* <OfferModal open={openModal} onClose={handleCloseModal} /> */}
      </Container>
    </Box>
  );
};

export default Footer;
