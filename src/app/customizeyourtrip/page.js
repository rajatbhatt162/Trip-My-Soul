import TrekFrom from "@/components/trekform";
import { Grid } from "@mui/material";
import React from "react";

const CustomizePage = () => {
  return (
    <>
      <Grid sx={{ marginTop: "50px" }}>
        <TrekFrom />
      </Grid>
    </>
  );
};
export default CustomizePage;
