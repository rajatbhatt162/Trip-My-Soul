import CommonTourCard from "@/common/common-card/CommonTourCard";
// import { useTour } from "@/context/tourcontext/TourContaxt";
import { Grid } from "@mui/material";
// import { useRouter } from "next/navigation";
import React from "react";


// this is the card list show component
const TourCategory = ({ tourDetails, categoryId, categoryName }) => {
  // const handleRedirect = (tourInfo) => {
  //   if (tourInfo) {
  //     const trekId = tourInfo.id || "defaultTrekId";
  //     const trek = tourInfo.description || "defaultTrekId";
  //     const formattedCategoryName = categoryName || "defaultcategoryname";

  //     const routeUrl = `/${formattedCategoryName}/${categoryId}/${trek}/${trekId}`;      
  //     router.push(routeUrl);
  //   } else {
  //     alert("No details found!");
  //   }
  // };
  const handleRedirect = (tourInfo) => {
    if (tourInfo) {
      const trekId = tourInfo.id || "defaultTrekId";
      const trek = tourInfo.description || "defaultTrekId";
      
      // Replace spaces with hyphens and convert to lowercase
      const formattedCategoryName = (categoryName || "defaultcategoryname").replace(/\s+/g, '-').toLowerCase();
      const formattedTrek = trek.replace(/\s+/g, '-').toLowerCase();
  
      // Construct the route URL
      const routeUrl = `/${formattedCategoryName}/${categoryId}/${formattedTrek}/${trekId}`;
      
      // Navigate to the constructed URL
      // router.push(routeUrl);
      return routeUrl;
    } else {
      alert("No details found!");
    }
  };
  
  return (
    <Grid
      container
      marginTop="15px"
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {tourDetails?.map((tourInfo, index) => (
        <Grid item xs={12} sm={6} md={3} lg={4} key={index}>
          <CommonTourCard
            cardData={tourInfo}
            onRedirect={handleRedirect(tourInfo)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TourCategory;
