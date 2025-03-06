import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

import Certification2 from "../../assests/certification2.png";
import Certification3 from "../../assests/certification3.png";

const certificationData = [ Certification2, Certification3];

const Certifications = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5rem 0rem",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h1"
          className="h4-variant1"
          sx={{
            color: "black",
            margin: "0rem 0rem 1rem 0rem",
          }}
        >
          Certifications
        </Typography>
 </Box>

      <Container maxWidth="xl">
        <Grid
          xs={12}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            marginTop: "25px",
            // backgroundColor:"black",
          }}
        >
          {certificationData.map((src, index) => (
            <Box
              className="flex align-center justify-center"
              key={index}
              sx={{
                boxShadow: 3,
                borderRadius: 1,
                overflow: "hidden",
                padding: 1,
                height: "200px",
                width: "200px",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <Image
                src={src}
                alt={`Certification ${index + 1}`}
                height={150}
              />
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Certifications;
