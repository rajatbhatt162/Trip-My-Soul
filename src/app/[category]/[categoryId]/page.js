import { AllTraksDetails } from "@/components/alltraksdetailswithsearch";

import { Grid } from "@mui/material";
// import { useParams } from "next/navigation";
import React from "react";
const AlltraksPage = ({params}) => {
  const  {categoryId, category}  = params; 
  console.log("params" , params);
  // console.log("thiw is id ---------" , categoryId, category);
  
  return (
    <>
      <Grid sx={{ marginTop: "60px" }}>
        <AllTraksDetails categoryId={categoryId} categoryName = {category} />
      </Grid>
    </>
  );
};
export default AlltraksPage;
