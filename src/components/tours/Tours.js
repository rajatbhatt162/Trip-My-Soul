"use client";

import React, { useEffect, useState } from "react";
import TourCategories from "./TourCategories/TourCategories";
// import { getTrekCategories } from "@/services";
// import Loader from "@/common/loader";
// import { useTour } from "@/context/tourcontext/TourContaxt";

export const Tours = ({ allTrekCategories }) => {
  const [mounted, setMounted] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setMounted(true);
    if (Array.isArray(allTrekCategories)) {
      setCategories(allTrekCategories);
    }
  }, [allTrekCategories]);

  // Don't render anything until client-side
  if (!mounted) {
    return null;
  }

  // Don't render if no categories
  if (!Array.isArray(categories) || categories.length === 0) {
    return null;
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
