"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Logo from "../../assests/logo.png";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Container, Grid, Modal, Tooltip, Typography } from "@mui/material";
import MainDrawer from "./components/MainDrawer";
// import { MegaM } from "@/components/megamenu";
// import { MegaMenuSSr } from "@/components/megamenu/megaMenuSSr";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiPhone } from "@mdi/js";
import SendYourQuery from "@/components/sendyourquiry";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import axios from "axios";
import { CommonButton } from "@/components/commonbutton";
import HomeIcon from "@mui/icons-material/Home";
import HikingIcon from "@mui/icons-material/Hiking";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useTour } from "@/context/tourcontext/TourContaxt";
import { MegaMenu } from "@/components/megamenu";

const drawerWidth = "70%";

const navItems = [
  { label: "Home", route: "/", icon: <HomeIcon /> },
  { label: "Treks", route: "#", icon: <HikingIcon /> },
  { label: "About", route: "/aboutus", icon: <InfoIcon /> },
  { label: "Contact us", route: "/contactus", icon: <ContactMailIcon /> },
];

const Header = ({ allTrekCategories }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showIndustryMenu, setShowIndustryMenu] = React.useState(false);
  const [isIndustryMenuOpen, setIsIndustryMenuOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("");
  const router = useRouter();
  const [isSecondaryDrawerOpen, setSecondaryDrawerOpen] = React.useState(false);
  const [selectedPlace, setSelectedPlace] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const hasTrackedRef = React.useRef(false);
  const searchParams = useSearchParams();
  const { tour } = useTour();

  // Tracking code start
  const BeTrackData = async (data) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_TRACKING_BASE_URL}/api/vi/add-track-data`,
        data
      );
    } catch (error) {
      console.error("Error tracking data:", error);
    }
  };

  React.useEffect(() => {
    let trackingId = Cookies.get("be_tracking_id");

    if (!trackingId) {
      trackingId = uuidv4();
      Cookies.set("be_tracking_id", trackingId, { expires: 365 });
    }

    let utmId = searchParams.get("utm_id") || "organic";
    if (utmId?.startsWith('"') && utmId?.endsWith('"')) {
      utmId = utmId?.substring(1, utmId?.length - 1);
    }

    let utmAccount = searchParams.get("utm_account");
    if (utmAccount?.startsWith('"') && utmAccount?.endsWith('"')) {
      utmAccount = utmAccount?.substring(1, utmAccount?.length - 1);
    }

    const data = {
      id: trackingId,
      sdk_id: "tripmysoul",
      utm_id: utmId ? utmId : "organic",
      utm_account: utmAccount,
      url: typeof window !== "undefined" ? window.location.href : "",
      json: {},
    };

    if (!hasTrackedRef.current) {
      BeTrackData(data);
      hasTrackedRef.current = true;
    }
  }, []);
  // Tracking code end

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    setSecondaryDrawerOpen(false);
    setSelectedPlace("");
  };

  const showIndustry = () => {
    setShowIndustryMenu(true);
    setIsIndustryMenuOpen(true);
  };
  const hideIndustry = () => {
    setShowIndustryMenu(false);
    setIsIndustryMenuOpen(false);
  };

  const handleNavItemClick = (route, label) => {
    setActiveItem(label);
    if (label === "Treks") {
      showIndustry();
    } else {
      router.push(route);
    }
  };

  const handleBookNowClick = () => {
    setOpen(true);
  };

  return (
    <>
      <Box className="Mainheader">
        <CssBaseline />

        <AppBar component="nav" className="navigation-row">
          <Container maxWidth="xl">
            <Toolbar className="nav-toolbar">
              <Box className="logoArea" aria-label="Logo Area">
                <Link href="/" className="logotms">
                  <Image src={Logo} alt="Trip My Soul" />
                </Link>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ display: { sm: "flex", lg: "none", md: "none" } }}
                >
                  <MenuIcon sx={{ color: "#000000", fontSize: "30px" }} />
                </IconButton>
              </Box>

              <Box
                className="desktop_navigation"
                role="navigation"
                aria-label="Main Navigation"
              >
                {navItems.map((item) => (
                  <Link
                    href={item.route}
                    key={item.label}
                    onClick={(event) => {
                      if (item.label === "Treks") {
                        isIndustryMenuOpen ? hideIndustry() : showIndustry();
                      }
                    }}
                    aria-haspopup={item.label === "Treks"}
                    aria-expanded={isIndustryMenuOpen ? "true" : "false"}
                  >
                    {item.label}
                    {item.label === "Treks" &&
                      (isIndustryMenuOpen ? (
                        <KeyboardArrowUpIcon style={{ fontSize: "18px" }} />
                      ) : (
                        <KeyboardArrowDownIcon style={{ fontSize: "18px" }} />
                      ))}
                  </Link>
                ))}
              </Box>

              <Box
                sx={{
                  margin: { xs: "0.5rem 0" },
                  justifyContent: { xs: "right" },
                  display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
                }}
              >
                <CommonButton
                  fontSize={{ xs: "12px", sm: "14px", md: "14px" }}
                  buttonname={"Enquiry Now"}
                  handleclickquery={handleBookNowClick}
                  tooltiptitle={"Enquiry Now"}
                />
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="send-query-modal-title"
                  aria-describedby="send-query-modal-description"
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      minWidth: { xs: 400, sm: 600, md: 600, lg: 600 },
                    }}
                  >
                    <SendYourQuery onClose={handleClose} />
                  </Box>
                </Modal>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <Box aria-label="Mobile Navigation">
          <Drawer
            anchor="right"
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            Modal={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                height: "100%",
              },
            }}
          >
            <MainDrawer
              handleDrawerToggle={handleDrawerToggle}
              navItems={navItems}
              handleNavItemClick={handleNavItemClick}
              activeItem={activeItem}
              isSecondaryDrawerOpen={isSecondaryDrawerOpen}
              setSecondaryDrawerOpen={setSecondaryDrawerOpen}
              selectedPlace={selectedPlace}
              setSelectedPlace={setSelectedPlace}
            />
          </Drawer>
        </Box>
      </Box>

      {/* <Modal
         sx={{visibility : showIndustryMenu ? "visible" : "hidden"}}
        open={showIndustryMenu}
        onClose={hideIndustry}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > */}
      <Box
        onClick={(e) => {
          e.stopPropagation();
          hideIndustry();
        }}
        sx={{
          display: showIndustryMenu ? "block" : "none",
          height: "100vh",
          position: "fixed",
          zIndex: "10001",
          width: "100%",
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.5) 100%, rgba(0,0,0,0.5) 100%)",
        }}
      >
        <MegaMenu
          onClose={hideIndustry}
          allTrekCategories={allTrekCategories}
        />
      </Box>
      {/* </Modal> */}
    </>
  );
};

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
