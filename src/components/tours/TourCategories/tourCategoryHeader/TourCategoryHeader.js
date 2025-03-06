// import React from "react";
// import { Box, Button, Typography } from "@mui/material";

// const TourCategoryHeader = ({ categories  ,onViewMoreClick }) => {
//   const handleViewMore = () => {
//     if (onViewMoreClick) {
//       onViewMoreClick(categories.id); // Pass the categoryId to the function
//     }
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         marginTop: "60px",
//       }}
//     >
//       <Box>
//         <Typography
//           variant="h6"
//           sx={{
//             // fontSize: { xs: '22px', sm: '36px' },
//             fontWeight: "700",
//             color: "black",
//           }}
//         >
//           {categories.name}
//         </Typography>

//         <Typography
//           variant="body2"
//           sx={{
//             // fontSize: { xs: '12px', sm: '18px' },
//             fontWeight: "400",
//             color: "black",
//           }}
//         >
//           {categories.description}
//         </Typography>
//       </Box>

//       <Box  onClick={handleViewMore}  sx={{ cursor: "pointer" }}>
//         <Button
//           variant="text"
//           sx={{
//             color: "#FF8A00",
//             fontSize: { xs: "12px", sm: "12px" },
//             fontWeight: "500",
//           }}
//         >
//            {categories.button} 
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default TourCategoryHeader;


// ------ this component is used above the  cards list show (view more button)  
import React from "react";
import { Box, Button, Typography} from "@mui/material";
import Link from "next/link";

const TourCategoryHeader = ({ categories, onViewMoreClick }) => {

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "60px",
      }}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "700",
            color: "black",
          }}
        >
          {categories.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontWeight: "400",
            color: "black",
          }}
        >
          {categories.description}
        </Typography>
      </Box>
      <Link style={{textDecoration : "none"}} href={onViewMoreClick}>
      <Box 
     
      sx={{ cursor: "pointer" }}>
        <Button
          variant="text"
          sx={{
            color: "#FF8A00",
            fontSize: { xs: "12px", sm: "12px" },
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
          }}
        >
          View More
        </Button>
      </Box>
      </Link>
    </Box>
  );
}


export  {TourCategoryHeader};
