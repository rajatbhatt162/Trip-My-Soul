"use server"
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export const OverViewsTrek = ({ overviewsdetails1 }) => {
  return (
    <Grid sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;"}}>
      <Box sx={{ padding: "20px" }}>
        {overviewsdetails1 &&
          overviewsdetails1.map((detail, index) => {
            if (detail.type === "intro") {
              return detail.content.map((item, subIndex) => (
                <Box
                  key={`${index}-${subIndex}`}
                  sx={{
                    fontSize: "20px",
                    color: "#E3711A",
                    marginTop: subIndex === 0 ? 0 : "20px",
                  }}
                >
                  {item.label && (
                    <>
                      <Typography
                        variant="h2"
                        component="h2"
                        sx={{ fontWeight: 600, color: "#E3711A" , fontSize:"30px" }}
                      >
                        {item.label}
                      </Typography>
                      <Typography
                        component="span"
                        style={{ color: item.color }}
                      >
                        {" "}
                        {item.value}
                      </Typography>
                    </>
                  )}
                  {item.text && (
                    <Typography
                      sx={{
                        color: "#666666",
                        fontSize: { xs: "12px", sm: "15px" },
                      }}
                    >
                      {item.text}
                    </Typography>
                  )}
                </Box>
              ));
            }

            if (detail.type === "tour") {
              return (
                <Box sx={{ color: "#E3711A", marginTop: "25px" }} key={index}>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      color: "#E3711A",
                      fontWeight: 600,
                      fontSize: "20px",
                    }}
                  >
                    {detail.textheading}
                  </Typography>
                  <Box
                    sx={{
                      margin: { xs: "1rem 0" },
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 2,
                      color: "#E3711A",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: { xs: "12px", sm: "15px" },
                        width: { xs: "70%", md: "78%", sm: "70%" },
                      }}
                    >
                      {detail.text}
                      <Typography
                        sx={{ fontSize: { xs: "12px" } }}
                        component="span"
                        style={{ color: "#666666" }}
                      >
                        {" "}
                        {detail.text1}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        fontSize: { xs: "12px" },
                        width: { xs: "30%", md: "22%", sm: "30%" },
                      }}
                    >
                      {detail.text2}
                      <Typography
                        sx={{ fontSize: { xs: "12px" } }}
                        component="span"
                        style={{ color: "#666666" }}
                      >
                        {" "}
                        {detail.text3}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            }

            if (detail.type === "highlight") {
              return (
                <Box
                  key={index}
                  sx={{ marginTop: "25px", fontSize: { xs: "12px" } }}
                >
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{ color: "#E3711A", fontWeight: 400, fontSize: { xs: "20px" } }}
                  >
                    {detail.title}
                  </Typography>
                  <ul style={{ paddingLeft: 18, color: "#666666" }}>
                    {detail.items.map((item, subIndex) => (
                      <li key={subIndex}>{item}</li>
                    ))}
                  </ul>
                </Box>
              );
            }

            if (detail.type === "highlightText") {
              return (
                <Box sx={{ color: "#E3711A", marginTop: "25px" }} key={index}>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{ color: "#E3711A", fontWeight: 200, fontSize: "20px" }}
                  >
                    {detail.textheading}
                  </Typography>

                  <Box sx={{ color: "#E3711A", marginTop: "15px" }}>
                    {detail.text}
                    <Typography
                      component="span"
                      sx={{ color: "#666666", fontSize: { xs: "12px", sm: "15px" } }}
                    >
                      {" "}
                      {detail.text1}
                    </Typography>
                  </Box>
                </Box>
              );
            }

            return null;
          })}
      </Box>
    </Grid>
  );
};
