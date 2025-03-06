

"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NestedMenu from "../nestedmenu";
import { getTrekById, getTrekCategoryById } from "@/utils/alldata";
import TourCategory from "../tours/TourCategories/tourCategory/TourCategory";
import { getAllTrekByCategoryId } from "@/services";
import Loader from "@/common/loader";

export const AllTraksDetails = ({ categoryId, categoryName }) => {
  const [trekData, setTrekData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTrekData, setFilteredTrekData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [allTour, setAllTour] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllTrekByCategoryId = async () => {
    setLoading(true);
    try {
      const res = await getAllTrekByCategoryId(categoryId);
 
      const transformTourDetails = res && res.map((tour) => {
        const fields = tour.fields;
    
        return {
          FaQDetails: fields.FaQDetails,
          reviewsection:fields.reviewsection,
          amount: fields.amount,
          batches: fields.batches,
          cardcontenttour: fields.cardcontenttour,
          cardcontentinclusion: fields.cardcontentinclusion,
          description: fields.description,
          difficulty: fields.difficulty,
          exclusion: fields.exclusion,
          gallery: fields.gallery,
          image: fields.image,
          inclusion: fields.inclusion,
          itenariesdetails: fields.itenariesdetails,
          location: fields.location,
          month: fields.month,
          months: fields.months,
          overviewsdetails1: fields.overviewsdetails1,
          places: fields.places,
          region: fields.region,
          regions: fields.regions,
          season: fields.season,
          tempoPriceDetails: fields.tempoPriceDetails,
          theme: fields.theme,
          thingtopack: fields.thingtopack,
          metatag:fields.metatag,
          thingtorental: fields.thingtorental,
          title: fields.title,
          title1: fields.title1,
          travelBanner: fields.travelBanner,
          travelprice: fields.travelprice,
          id: fields.uid,
        };
      });
      setTrekData(transformTourDetails);
      setFilteredTrekData(transformTourDetails);
    } catch (error) {
      console.error("Error fetching trek details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllTrekByCategoryId();
  }, []);


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    const filteredTreks = trekData.filter((trek) => {
      const query = searchQuery.toLowerCase();
      const isQueryMatch =
        (trek.title && trek.title.toLowerCase().includes(query)) ||
        (trek.description && trek.description.toLowerCase().includes(query)) ||
        (trek.location && trek.location.toLowerCase().includes(query)) ||
        (trek.region && trek.region.toLowerCase().includes(query)) ||
        (trek.places &&
          trek.places.some((place) => place.toLowerCase().includes(query)));

      const isFilterMatch =
        selectedValue === "" ||
        trek.month === selectedValue ||
        trek.difficulty === selectedValue ||
        trek.season === selectedValue ||
        (trek.theme && trek.theme.includes(selectedValue));

      return isQueryMatch && isFilterMatch;
    });
    setFilteredTrekData(filteredTreks);
  }, [searchQuery, selectedValue, trekData]);

  if(loading){
    return <Loader />
  }

  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontFamily: "Aclonica, sans-serif", marginTop: "-90px" }}
            >
              Search Your Dream Place
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontFamily: "Aclonica, sans-serif", color: "black" }}
            >
              Find the perfect tour and embark on an unforgettable journey.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: "center", md: "left", sm: "left" },
              display: "flex",
              justifyContent: "left",
            }}
          >
            <Box
              sx={{
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <TextField
                placeholder="Search Treks"
                value={searchQuery}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  classes: {
                    notchedOutline: "",
                  },
                  sx: {
                    "& .MuiInputBase-input::placeholder": {
                      color: "#006EFF",
                    },
                  },
                }}
                sx={{
                  width: { xs: "320px", sm: "740px", md: "670px" },
                  margin: "10px 0",
                  borderBottom: "1px solid #efefef",
                }}
              />
              <Box
                sx={{
                  marginLeft: "20px",
                  backgroundColor: "#f8f8f8",
                  borderRadius: "8px",
                }}
              >
                <NestedMenu onSelect={handleSelect} />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ marginTop: "20px" }}>
          <Grid item xs={12} sm={12} md={12}>
            {filteredTrekData && filteredTrekData.length > 0 ? (
              <TourCategory tourDetails={filteredTrekData} categoryId={categoryId} categoryName={categoryName} />
            ) : (
              <Typography variant="h6" color="textSecondary">
                No treks found for this category.
              </Typography>
            )}
            {/* <TourCategory tourDetails={allTour} categoryId={categoryId} /> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};


