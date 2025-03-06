
import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { getTrekById } from "@/utils/alldata";
import { useTour } from "@/context/tourcontext/TourContaxt";

const PlaceDrawer = ({
  selectedPlace,
  categoryId,
  categortyname,
  categorytrek,
  handleDrawerToggle,
  onClose,
}) => {
  const router = useRouter();
  const { setTour, setCatagoryWise } = useTour();

  // const selectedTreks = categorytrek.map((id) => getTrekById(id)).flat();
  console.log("selectedTreks", categorytrek);

  const handleNavigation = (item) => {
    if (categorytrek.length > 0) {
      setCatagoryWise(categorytrek);
    }
    if (item) {
      setTour(item.tourDetails); // Set tour details
      const trekId = item.id || "defaultTrekId";
      const trekDescription = item.description || "No description available"; // Provide a default description
      const formattedCategoryName = categortyname || "defaultcategoryname";
      const routeUrl = `/${formattedCategoryName}/${categoryId}/${trekDescription}/${trekId}`;
      router.push(routeUrl);
    } else {
      alert("No details found!");
    }
    handleDrawerToggle();
  };

  return (
    <Box sx={{ textAlign: "left", ml: 2, mb: "90px" }}>
      {categorytrek.length > 0 ? (
        categorytrek.map((place, index) => (
          <Typography
            key={index}
            variant="body1"
            sx={{
              width: "100%",
              color: "#404040",
              fontWeight: "400",
              fontSize: "13px",
              marginBottom: "20px",
              cursor: "pointer",
              "&:hover": {
                color: "#E95400",
              },
            }}
            onClick={() => handleNavigation(place)}
          >
            {place?.description}
          </Typography>
        ))
      ) : (
        <Typography variant="body1" sx={{ color: "#404040", fontSize: "15px" }}>
          No places available
        </Typography>
      )}
    </Box>
  );
};

export default PlaceDrawer;
