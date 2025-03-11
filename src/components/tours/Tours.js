import React from "react";
import TourCategories from "./TourCategories/TourCategories";
import { getTrekCategories } from "@/services";
import Loader from "@/common/loader";
import { useTour } from "@/context/tourcontext/TourContaxt";

export const Tours = ({ allTrekCategories }) => {
  if (!allTrekCategories || !Array.isArray(allTrekCategories)) {
    console.warn('Tours: allTrekCategories is not an array or is undefined', allTrekCategories);
    return null;
  }

  return <TourCategories allTrekCategories={allTrekCategories} />;
};
