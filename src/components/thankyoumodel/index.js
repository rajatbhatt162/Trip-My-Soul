
import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const ThankYouModal = ({ open, handleModalClose }) => {
   
  return (
    <Modal
      open={open}
      aria-labelledby="thank-you-modal-title"
      aria-describedby="thank-you-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <Typography id="thank-you-modal-title" variant="h6" component="h2">
          Thank You!
        </Typography>
        <Typography id="thank-you-modal-description" sx={{ mt: 2 }}>
          Thank you for submitting your information.
        </Typography>
        <Button
          onClick={handleModalClose}
          sx={{ mt: 3 }}
          variant="contained"
          color="primary"
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default ThankYouModal;
