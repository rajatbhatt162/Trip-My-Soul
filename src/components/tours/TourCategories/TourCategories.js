import React from "react";
import { Box, Container } from "@mui/material";
import {TourCategoryHeader} from "./tourCategoryHeader/TourCategoryHeader";
import TourCategory from "./tourCategory/TourCategory";
import { transformTrekCategories } from "@/utils/transformTrekCategories";


// this is the card show component with viewMore Header 
const TourCategories = ({ allTrekCategories }) => {

  const trekCategoriesOrder = [
    "Spiritual Journey", 
    "Upcoming Winter Treks",
    "Trending Treks on TMS", 
    "Upcoming Winter Road Trips",
    "Weekend Getaways", 
    "Mansoon Treks", 
    "Summer Treks", 
    
  ];
  
  const trekCategories = transformTrekCategories(allTrekCategories).sort((a, b) => {
    const aIndex = trekCategoriesOrder.indexOf(a.name);
    const bIndex = trekCategoriesOrder.indexOf(b.name);
  
  
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }
  

    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
  
   
    return 0;
  });
  

  const filteredTrekCategories = trekCategories.filter(
    (category) =>
      !["uttarakhand-110", "kashmir-122", "himachal-pardesh-112"].includes(
        category.id
      )
  );

  const handleViewMoreClick = (categoryId, categoryName) => {
    const formattedCategoryName = categoryName.replace(/\s+/g, '-').toLowerCase();
    return (`/${formattedCategoryName}/${categoryId}`);
  };
  

  return (
    <Container maxWidth="xl">
      {filteredTrekCategories.map((category, index) => (
        <Box key={index} mb={4}>
          <TourCategoryHeader
            categories={category}
            onViewMoreClick={ handleViewMoreClick(category.id, category.name)}
          />
          <TourCategory
            tourDetails={category.treks.slice(0, 4)}
            categoryId={category.id}
            categoryName={category.name}
          />
        </Box>
      ))}
    </Container>
  );
};

export default TourCategories;
