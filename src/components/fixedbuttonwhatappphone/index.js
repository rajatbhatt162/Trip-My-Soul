"use client";
import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const FixedContactButtons = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const inputRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [number, setNumber] = useState("");

  const trackingId = Cookies.get("be_tracking_id");

  const beTrackContactForm = async (data) => {
    try {
      const response = await fetch(
        "https://tracker.broadengage.com/api/v1/contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Tracking response:", result);
    } catch (error) {
      console.error("Error tracking data:", error);
    }
  };

  const handleWhatsAppClick = () => {
    setModalType("whatsapp");
    setIsModalOpen(true);
  };

  const handleCallClick = () => {
    setModalType("call");
    setIsModalOpen(true);
  };

  const closeModals = () => {
    setIsModalOpen(false);
    setNumber("");
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setNumber(value);
  };

  const handleSubmit = async () => {
    const phoneNumber = "9068513438";
    let messageforapi = "";
    let event_type = "";

    if (modalType === "whatsapp") {
      const message =
        "Hi, I’m interested in your travel packages. Can you share more details?";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
      messageforapi = "WhatsApp";
      event_type = "whatsapp-button-clicked";
    } else if (modalType === "call") {
      window.location.href = `tel:${phoneNumber}`;
      messageforapi = "Phone";
      event_type = "call-button-clicked";
    }

    const data = {
      mobile: number,
      message: messageforapi,
      tracking_id: trackingId,
      sdk_id: "tripmysoul",
    };

    await beTrackContactForm(data);
    closeModals();
  };

  // const handleWhatsappInputChange = (e) => {
  //   const input = e.target.value;
  //   const whatsappRegex = /^[0-9]{0,10}$/; 

  //   if (whatsappRegex.test(input)) {
  //     setWhatsappNumber(input);
  //     setWhatsappError(false);
  //   } else {
  //     setWhatsappError(true);
  //     setWhatsappNumber("");
  //   }
  // };
  // const handlePhoneInputChange = (e) => {
  //   const input = e.target.value;
  //   const phoneRegex = /^[0-9]{0,10}$/; 

  //   if (phoneRegex.test(input)) {
  //     setPhoneNumber(input);
  //     setPhoneError(false);
  //   } else {
  //     setPhoneError(true);
  //     setPhoneNumber("");
  //   }
  // };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsInputWhatsapp(false);
      setIsInputPhone(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <Stack
      spacing={2}
      position="fixed"
      bottom={isSmallScreen ? 60 : 80}
      right={20}
      zIndex={1000}
    >
      <Button
        variant="contained"
        color="success"
        onClick={handleWhatsAppClick}
        sx={{ borderRadius: "50%", minWidth: 0, p: 1 }}
      >
        <WhatsAppIcon fontSize="large" />
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={handleCallClick}
        sx={{ borderRadius: "50%", minWidth: 0, p: 1 }}
      >
        <PhoneIcon fontSize="large" />
      </Button>

      <Modal open={isModalOpen} onClose={closeModals} disableScrollLock>
        <Box
          sx={{
            position: "fixed",
            right: { xs: 20, sm: 75 },
            bottom: { xs: 50, sm: 75 },
            width: { xs: "90%", sm: 350 },
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 24,
            p: {xs:2,sm:3},
            transition: "all 0.3s ease",
          }}
        >
          <span
            onClick={closeModals}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: 10,
              right: 10,
              fontSize: 20,
            }}
          >
            &times;
          </span>
          <Typography
            sx={{ fontSize: "15px" }}
            color="success.main"
            gutterBottom
          >
            Please Enter Your Number
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
            }}
          >
            <TextField
              type="tel"
              size="small"
              placeholder={`Enter your ${
                modalType === "whatsapp" ? "WhatsApp" : "Phone"
              } Number`}
              value={number}
              onChange={handleInputChange}
              inputProps={{ maxLength: 10 }}
              variant="outlined"
              sx={{ flexGrow: 1, mr: 1}}
            />
            <Button
              variant="contained"
              color="success"
              onClick={handleSubmit}
              disabled={number.length !== 10}
              sx={{ padding: "8px" }}
            >
              {modalType === "whatsapp" ? <WhatsAppIcon /> : <PhoneIcon />}
            </Button>
          </Box>
        </Box>
      </Modal>
    </Stack>
  );
};

export default FixedContactButtons;
