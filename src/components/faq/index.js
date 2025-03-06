"use client"

import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SendYourQuery from "../sendyourquiry";
const FaQ = ({FaQDetails}) => {

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleclickquery = () => {
    setOpen(true)
  };
  return (
    <>
      <Box sx={{ padding: "4rem 0", background: "#3F51B5" }}>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h4"
                  component="h4"
                  className="h4-variant1"
                  sx={{
                    color: "white",
                    margin: "0rem 0rem 1rem 0rem",
                  }}
                >
                  Frequently Asked Questions
                </Typography>
                <Box sx={{ color: "white", marginBottom: "4rem" }}>
                  <Typography
                    variant="body1"
                    component="p"
                    className="p-variant1"
                  >
                    We ensure your trip is flawless and hassle-free, answering
                    all your questions so you can enjoy every moment.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                margin: "1rem 0",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                padding: "3rem 2rem",
                borderRadius: "10px",
                background: 'url("/faqimg.png")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Box>
                <Box sx={{ color: "#fff" }}>
                  <Typography variant="body2">
                    For any additional questions or personalized assistance,
                    drop us a message or reach out directly.
                  </Typography>
                  <Typography sx={{ padding: "1rem 0" }}>
                    We’re here to help you!
                  </Typography>
                </Box>
                <Box    onClick={handleclickquery} sx={{ margin: "1rem 0" }}>
                  <Stack spacing={2} direction="row">
                    <Button
                      sx={{
                        fontWeight: "600",
                        borderRadius: "5px",
                        color: "#000",
                        padding: "0.5rem 2rem",
                        backgroundColor: "#fff",
                        "&:hover": {
                          backgroundColor: "#e3711a",
                          color: "#fff",
                        },
                      }}
                    >
                      Send Query
                    </Button>
                  </Stack>
                </Box>
                <Box
                  variant="body1"
                  sx={{
                    display: { xs: "flex", sm: "flex" },
                    flexDirection: { xs: "column" },
                    padding: "1rem 0",
                    justifyContent: "center",
                    gap: "1rem",
                  }}
                >
                  <Box
                    sx={{
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <CallIcon />{" "}
                    <Link style={{ color: "#fff" }}> +91-90685 13438</Link>
                  </Box>
                  <Box
                    sx={{
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <MarkunreadIcon />{" "}
                    <Link style={{ color: "#fff" }}>
                      {" "}
                      tripmysoulteam@gmail.com
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              sx={{
                backgroundColor: "#EBEBEB",
                borderRadius: "10px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
              }}
            >
              <Box
                sx={{
                  //   maxHeight: "537px",
                  overflowY: "auto",
                  padding: "1.5rem",
                  //   "&::-webkit-scrollbar": {
                  //     width: "8px",
                  //   },
                  //   "&::-webkit-scrollbar-track": {
                  //     backgroundColor: "#EBEBEB",
                  //   },
                  //   "&::-webkit-scrollbar-thumb": {
                  //     backgroundColor: "#000",
                  //     borderRadius: "10px",
                  //   },
                  //   scrollbarColor: "#7F7F7F #EBEBEB",
                  //   scrollbarWidth: "thin",
                }}
              >
                {FaQDetails && FaQDetails.map((item, index) => (
                  <Box key={index} sx={{ marginBottom: ".4rem" }}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: "500" }}
                        >
                          {item.title}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant="body2">{item.answer}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
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
    </>
  );
};

export default FaQ;
