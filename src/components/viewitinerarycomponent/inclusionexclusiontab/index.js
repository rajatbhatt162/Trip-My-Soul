

"use client";
import * as React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Image from "next/image";

// Custom TabPanel component with proper a11y attributes
function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ padding: { xs: "5px", sm: "24px" } }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Memoized TabContent to avoid unnecessary re-renders
const TabContent = React.memo(({ data, iconSrc, altPrefix }) => (
  data.map((item) => (
    <Box
      key={item.id}  // Ensure each item has a unique ID
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        marginBottom: "15px",
      }}
    >
      <Image
        src={iconSrc}
        alt={`${altPrefix}: ${item.title}`}  // Descriptive alt text for SEO and accessibility
        width={15}
        height={15}
      />
      <Typography
        sx={{
          fontSize: { xs: "12px", md: "15px", sm: "15px" },
          color: "black",
          fontWeight: altPrefix === "Exclusion" ? 400 : 500,  // Lighter font weight for Exclusions
          marginLeft: "5px",
        }}
      >
        {item.title}
        {item.description && <span> {item.description}</span>}
      </Typography>
    </Box>
  ))
));

TabContent.propTypes = {
  data: PropTypes.array.isRequired,
  iconSrc: PropTypes.string.isRequired,
  altPrefix: PropTypes.string.isRequired,
};

export default function InclusionExclusionTab({ inclusion, exclusion }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container sx={{ marginTop: "30px" }}>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Inclusions and Exclusions tabs"
                TabIndicatorProps={{ style: { backgroundColor: "black" } }}
              >
                <Tab label="Inclusions" {...a11yProps(0)} sx={{ fontSize: { xs: "14px", md: "18px", sm: "15px" } }} />
                <Tab label="Exclusions" {...a11yProps(1)} sx={{ fontSize: { xs: "14px", md: "18px", sm: "15px" } }} />
              </Tabs>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} marginTop="20px">
            <Box
              sx={{
                boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              }}
            >
              <CustomTabPanel value={value} index={0}>
                <TabContent data={inclusion} iconSrc="/rightsign.png" altPrefix="Inclusion" />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <TabContent data={exclusion} iconSrc="/crossSign.png" altPrefix="Exclusion" />
              </CustomTabPanel>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

InclusionExclusionTab.propTypes = {
  inclusion: PropTypes.array.isRequired,
  exclusion: PropTypes.array.isRequired,
};
