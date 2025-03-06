"use client";
import { Box, Button, Typography, Modal, Tooltip } from "@mui/material";
import React, { useState } from "react";
import phoneimage from "../../../assests/phoneicon.png";
import emailimage from "../../../assests/emailicon.png";
import Image from "next/image";
import SendYourQuery from "../../sendyourquiry";

const HelpAndSupport = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        padding: "20px",
      }}
    >
      <header>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: "15px", sm: "20px" },
            marginBottom: "10px",
          }}
          variant="h4"
        >
          Help & Support
        </Typography>
      </header>
      <Box
        sx={{
          border: "2px solid  #f1f1f1",
          height: "110px",
          borderRadius: "8px",
          marginTop: "20px",
        }}
      >
        <Box className="flex align-center justify-evenly mt-md">
          <Box display="flex" alignItems="center">
            <Image
              style={{ marginRight: "5px" }}
              width={20}
              src={emailimage}
              alt="Contact Email Icon"
            />
            <Typography
              sx={{
                borderBottom: "1px solid #4C4C4C",
                lineHeight: 1,
                color: "#4C4C4C",
                fontSize: { xs: "12px", sm: "14px", md: "14px" },
              }}
            >
              +91-90685 13438
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Image
              style={{ marginRight: "5px" }}
              width={20}
              src={phoneimage}
              alt="Contact Phone Icon"
            />
            <Typography
              sx={{
                borderBottom: "1px solid #4C4C4C",
                lineHeight: 1,
                color: "#4C4C4C",
                fontSize: { xs: "12px", sm: "13px", md: "13px" },
              }}
            >
              tripmysoulteam@gmail.com
            </Typography>
          </Box>
        </Box>
        <Box className="flex align-center justify-center mt-lg">
          <Tooltip title="Send Us Query">
            <Button
              size="small"
              variant="outlined"
              sx={{ fontWeight: 700 }}
              onClick={handleOpen}
              aria-label="Send your query"
            >
              Send Query
            </Button>
          </Tooltip>
        </Box>
      </Box>
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
  );
};

export default HelpAndSupport;
