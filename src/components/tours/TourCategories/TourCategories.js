import React from "react";
import { Box, Container } from "@mui/material";
import {TourCategoryHeader} from "./tourCategoryHeader/TourCategoryHeader";
import TourCategory from "./tourCategory/TourCategory";
import { transformTrekCategories } from "@/utils/transformTrekCategories";

// this is the card show component with viewMore Header 
const TourCategories = ({ allTrekCategories }) => {
  const categoryOrder = [
    "Spirituals-Journey-101",
    "south-trip-511",
    "weekend-gateway-104",
    "mansoon-treks-110",
    "summer-trek-109",
    "trending-treks-on-tms-103",
    "uttarakhand-110",
    "kashmir-122",
    "upcoming-winter-trek-102",
    "himachal-pardesh-112",
    "Explore-the-open-road-104"
  ];
  
  const trekCategories = transformTrekCategories(allTrekCategories);
  
  // Filter and sort categories based on the defined order
  const filteredTrekCategories = categoryOrder
    .map(id => trekCategories.find(cat => cat.id === id))
    .filter(Boolean); // Remove any undefined entries

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
            onViewMoreClick={handleViewMoreClick(category.id, category.name)}
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

// import React from "react";
// import { Box, Container } from "@mui/material";
// import {TourCategoryHeader} from "./tourCategoryHeader/TourCategoryHeader";
// import TourCategory from "./tourCategory/TourCategory";
// import { transformTrekCategories } from "@/utils/transformTrekCategories";


// // this is the card show component with viewMore Header 
// const TourCategories = ({ allTrekCategories }) => {

//   const trekCategoriesOrder = [
//     "Spiritual Journey", 
//     "Upcoming Winter Treks",
//     "Trending Treks on TMS", 
//     "Upcoming Winter Road Trips",
//     "Weekend Getaways", 
//     "Mansoon Treks", 
//     "Summer Treks", 
    
//   ];
  
//   const trekCategories = transformTrekCategories(allTrekCategories).sort((a, b) => {
//     const aIndex = trekCategoriesOrder.indexOf(a.name);
//     const bIndex = trekCategoriesOrder.indexOf(b.name);
  
  
//     if (aIndex !== -1 && bIndex !== -1) {
//       return aIndex - bIndex;
//     }
  

//     if (aIndex !== -1) return -1;
//     if (bIndex !== -1) return 1;
  
   
//     return 0;
//   });
  
// // "uttarakhand-110", "kashmir-122", "himachal-pardesh-112"
//   const filteredTrekCategories = trekCategories.filter(
//     (category) =>
//       ![""].includes(
//         category.id
//       )
//   );

//   const handleViewMoreClick = (categoryId, categoryName) => {
//     const formattedCategoryName = categoryName.replace(/\s+/g, '-').toLowerCase();
//     return (`/${formattedCategoryName}/${categoryId}`);
//   };
  

//   return (
//     <Container maxWidth="xl">
//       {filteredTrekCategories.map((category, index) => (
//         <Box key={index} mb={4}>
//           <TourCategoryHeader
//             categories={category}
//             onViewMoreClick={ handleViewMoreClick(category.id, category.name)}
//           />
//           <TourCategory
//             tourDetails={category.treks.slice(0, 4)}
//             categoryId={category.id}
//             categoryName={category.name}
//           />
//         </Box>
//       ))}
//     </Container>
//   );
// };

// export default TourCategories;

