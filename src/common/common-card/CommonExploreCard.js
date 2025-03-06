import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
const object = [
  { image: "harkidunbanner.jpg)", text: "Corporate Trip" },
  { image: "harkidunbanner.jpg)", text: "Romantic Trip" },
];
export const CommonExploreCard = () => {
  return (
    <Box sx={{ marginTop: "50px" }}>
      <Container maxWidth="xl">
        <Divider sx={{ marginBottom: "20px" }} />
        <Box></Box>
        
        <Box
          sx={{
            position: "relative",
            width: "300px",
            height: "400px",
            backgroundImage: "url(/harkidunbanner.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "200px",
              height: "200px",
              border: "5px  black",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              //   borderStyle: "dashed",
              borderWidth: "5px",
              borderSpacing: "20px",
              filter: "blur(0)",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: "25px", fontWeight: "bold", color: "white" }}
            >
              CommonExploreCard
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
