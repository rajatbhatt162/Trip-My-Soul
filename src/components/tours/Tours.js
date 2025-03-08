"use client";

import React, { useEffect, useState } from "react";
import TourCategories from "./TourCategories/TourCategories";
import { Box, Typography, CircularProgress } from "@mui/material";
// import { getTrekCategories } from "@/services";
// import Loader from "@/common/loader";
// import { useTour } from "@/context/tourcontext/TourContaxt";

export const Tours = ({ allTrekCategories }) => {
  const [mounted, setMounted] = useState(false);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setMounted(true);
      console.log('Tours component mounted, received categories:', allTrekCategories);
      
      if (!allTrekCategories) {
        console.log('No categories received');
        setError('No categories data available');
        return;
      }

      if (!Array.isArray(allTrekCategories)) {
        console.log('Categories is not an array:', allTrekCategories);
        setError('Invalid categories data');
        return;
      }

      if (allTrekCategories.length === 0) {
        console.log('Categories array is empty');
        setError('No categories found');
        return;
      }

      console.log('Setting categories:', allTrekCategories);
      setCategories(allTrekCategories);
      setError(null);
    } catch (err) {
      console.error('Error in Tours component:', err);
      setError('Error loading categories');
    }
  }, [allTrekCategories]);

  // Don't render anything until client-side
  if (!mounted) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  // Show error state
  if (error) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  // Don't render if no categories
  if (!Array.isArray(categories) || categories.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography>No trek categories available</Typography>
      </Box>
    );
  }

  // const [allTrekCategories, setAllTrekCategories] = useState([]);
  // const [loading, setLoading] = useState(true);
  

  // const fetchAllTrekCategories = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await getTrekCategories();
  //     // console.log(res.data.data.items, "trek categories");
  //     setAllTrekCategories(res.data.data.items);
  //   } catch (error) {
  //     console.log("error in feching trek categories", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchAllTrekCategories();
  // }, []);



  // if (loading) {
  //   return <Loader />;
  // }

  return <TourCategories allTrekCategories={categories} />;
};
