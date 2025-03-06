"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
// import { getTrekById } from "@/utils/alldata";
import { useTour } from "@/context/tourcontext/TourContaxt";
import Link from "next/link";

const chunkArray = (array, size) => {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

const MegaMenuCatogory = ({
  onClose,
  categoryId,
  categorytrek,
  categortyname,
  catagoryimage,
}) => {
  const { setTour, setCatagoryWise } = useTour();


  const trekChunks = chunkArray(categorytrek, 8);

  // const handleNavigation = (item) => {
  //   if (categorytrek) {
  //     setCatagoryWise(categorytrek);
  //   }
  //   if (item) {
  //     setTour(item.tourDetails);
  //     const trekId = item.id || "defaultTrekId";
  //     const trek = item.description || "defaultTrekId";
  //     const formattedCategoryName = categortyname || "defaultcategoryname";
  //     const routeUrl = `/${formattedCategoryName}/${categoryId}/${trek}/${trekId}`;
  //     router.push(routeUrl);
  //   } else {
  //     alert("No details found!");
  //   }
  //   onClose();
  // };
  const handleNavigation = (item) => {
    if (categorytrek) {
      setCatagoryWise(categorytrek);
    }
    
    if (item) {
      setTour(item.tourDetails);
      const trekId = item.id || "defaultTrekId";
      const trek = item.description || "defaultTrekId";
      
      // Replace spaces with hyphens and convert to lowercase
      const formattedCategoryName = (categortyname || "defaultcategoryname").replace(/\s+/g, '-').toLowerCase();
      const formattedTrek = trek.replace(/\s+/g, '-').toLowerCase();
  
      // Construct the route URL
      const routeUrl = `/${formattedCategoryName}/${categoryId}/${formattedTrek}/${trekId}`;
      
      // Navigate to the constructed URL
      return routeUrl;
    } else {
      alert("No details found!");
    }
  };
  
  return (
    <Box
      sx={{
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Box className="Meganavigation">
          <Image
            src={`https:${catagoryimage?.fields?.file?.url}`}
            alt={catagoryimage?.fields?.file?.fileName}
            width={300}
            height={300}
            style={{ margin: "auto 0" }}
          />
          <Box className="Meganavigation_link">
            <Grid>
              <Typography
                variant="h6"
                sx={{
                  color: "#E95400",
                  fontWeight: 600,
                  fontSize: "25px",
                  marginBottom: "20px",
                }}
              >
                {categortyname}
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              {trekChunks.map((trekChunk, chunkIndex) => (
                <Grid item xs={12} sm={4} md={3} key={chunkIndex}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    {trekChunk.map((item, index) => (
                      <Box sx={{ marginTop: "15px" }} key={index}>
                        <Link style={{textDecoration :"none"}} href={handleNavigation(item)} onClick={onClose}>
                        <Typography
                          sx={{
                            textDecoration: "none",
                            color: "#404040",
                            cursor: "pointer",
                            fontSize: { md: "12px", sm: "14px" },
                            fontWeight: 500,
                            "&:hover": {
                              color: "#ea5400",
                            },
                          }}
                        >
                          {item.description}
                        </Typography>
                        </Link>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MegaMenuCatogory;
