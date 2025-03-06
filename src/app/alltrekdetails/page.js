import { AllTraksDetails } from "@/components/alltraksdetailswithsearch";
import { Grid } from "@mui/material";
import React from "react";
const AlltraksPage = ({params}) => {
  const  {categoryId}  = params; 

  return (
    <>
      <Grid sx={{ marginTop: "60px" }}>
        <AllTraksDetails categoryId={categoryId} />
      </Grid>
    </>
  );
};
export default AlltraksPage;
