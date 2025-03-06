import React from "react";
import { Modal, Box} from "@mui/material";
import OfferForm from "../offerform";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  outline: 'none',

};

const OfferModal = ({ open, onClose }) => {
  return (
    <Modal open={open}>
      <Box sx={modalStyle}>
        {/* <OfferForm onClose={onClose} /> */}
      </Box>
    </Modal>
  );
};

export default OfferModal;
