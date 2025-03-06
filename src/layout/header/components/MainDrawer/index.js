

"use client";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Typography,
  ListItemIcon,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useEffect, useState } from "react";
import PlaceDrawer from "../PlacesDrawer";
import ClearIcon from "@mui/icons-material/Clear";
import { useRouter } from "next/navigation"; 
import { TrekCategory } from "@/utils/trekcategory";
import { useTour } from "@/context/tourcontext/TourContaxt";
import Loader from "@/common/loader";
import { getTrekCategories } from "@/services";
import Head from "next/head";  // Import Head for SEO metadata

const MainDrawer = ({
  handleDrawerToggle,
  navItems,
  isSecondaryDrawerOpen,
  setSecondaryDrawerOpen,
  selectedPlace,
  setSelectedPlace,
  activeItem,
}) => {
  const [render, setRender] = useState("Uttarakhand");
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [trek, setTrek] = useState();
  const [image, setImage] = useState();
  const router = useRouter();
  const [allTrekCategories, setAllTrekCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllTrekCategories = async () => {
    setLoading(true);
    try {
      const res = await getTrekCategories();
      setAllTrekCategories(res.data.data.items);
    } catch (error) {
      console.error("Error fetching trek categories", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllTrekCategories();
  }, []);

  const transformAllTrekCategories = allTrekCategories.map((category) => ({
    id: category.fields.uid,
    description: category.fields.description,
    name: category.fields.name,
    categoryimage: category.fields.categoryimage,
    treks: category.fields.trekDetailId.map((tour) => {
      const fields = tour.fields;
      return {
        description: fields.description,
        difficulty: fields.difficulty,
        location: fields.location,
        id: fields.uid,
      };
    }),
  }));

  const filteredTrekCategories = transformAllTrekCategories.filter((category) =>
    ["uttarakhand-110", "kashmir-122", "himachal-pardesh-112"].includes(category.id)
  );

  const handleCategoryClick = (name, id, trek, image) => {
    setSelectedPlace(name);
    setSecondaryDrawerOpen(false);
    setRender(name);
    setImage(image);
    setName(name);
    setId(id);
    setTrek(trek);
  };

  const handleNavItemClickWithSecondaryDrawer = (route, label) => {
    setRender(label);
    if (label === "Treks") {
      setSecondaryDrawerOpen(true);
      setSelectedPlace("");
    } else {
      router.push(route);
      handleDrawerToggle();
      setSecondaryDrawerOpen(false);
      setSelectedPlace("");
    }
  };

  useEffect(() => {
    if (filteredTrekCategories.length) {
      setName(filteredTrekCategories[0].name);
      setId(filteredTrekCategories[0].id);
      setTrek(filteredTrekCategories[0].treks);
      setImage(filteredTrekCategories[0].categoryimage);
    }
  }, [filteredTrekCategories.length]);

  const handleBackArrowClick = () => {
    if (selectedPlace) {
      setSelectedPlace("");
      setSecondaryDrawerOpen(true);
    } else {
      setSecondaryDrawerOpen(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Box sx={{ textAlign: "center" }}>
   


      <Divider />
      <Box sx={{ padding: "15px 15px 0px 0px", display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={handleDrawerToggle}>
          <ClearIcon sx={{ color: "#000", fontSize: "25px" }} />
        </IconButton>
      </Box>

      <List>
        {isSecondaryDrawerOpen ? (
          <>
            <Box sx={{ display: "flex", alignItems: "center", padding: 1, ml: 1 }}>
              <IconButton onClick={handleBackArrowClick} edge="start">
                <ArrowBackIcon sx={{ fontSize: "22px", color: "#000" }} />
              </IconButton>
              <Typography sx={{ fontWeight: 600, color: "#E95400", fontSize: "20px" }}>
                Treks
              </Typography>
            </Box>
            <Box padding={"0px 20px"}>
              {filteredTrekCategories.map((category) => (
                <ListItemButton
                  key={category.name}
                  selected={render === category.name}
                  sx={{ "&.Mui-selected": { backgroundColor: "#E6E6E6" } }}
                  onClick={() =>
                    handleCategoryClick(category.name, category.id, category.treks, category.categoryimage)
                  }
                >
                  <ListItemText
                    primary={category.name}
                    sx={{ fontSize: "16px", color: render === category.name ? "#E95400" : "#000" }}
                  />
                </ListItemButton>
              ))}
            </Box>
          </>
        ) : selectedPlace ? (
          <>
            <Box sx={{ display: "flex", alignItems: "center", padding: 2 }}>
              <IconButton onClick={handleBackArrowClick} edge="start">
                <ArrowBackIcon sx={{ fontSize: "22px", color: "#000" }} />
              </IconButton>
              <Typography sx={{ fontWeight: 600, color: "#E95400", fontSize: "20px" }}>
                {selectedPlace}
              </Typography>
            </Box>
            <Box ml={"25px"}>
              <PlaceDrawer
                catagoryimage={image}
                categoryId={id}
                categortyname={name}
                categorytrek={trek}
                handleDrawerToggle={handleDrawerToggle}
              />
            </Box>
          </>
        ) : (
          navItems.map((item) => (
            <ListItem key={item.label} disablePadding onClick={() => handleNavItemClickWithSecondaryDrawer(item.route, item.label)}>
              <ListItemButton sx={{ backgroundColor: activeItem === item.label ? "#F5F5F5" : "#fff" }}>
                <ListItemIcon
                  sx={{
                    color: activeItem === item.label ? "#60A5FA" : "#5d5a59",
                    minWidth: "20px",
                    fontSize: "28px",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    style: {
                      color: activeItem === item.label ? "#E95400" : "#E95400",
                      fontWeight: activeItem === item.label ? 600 : 600,
                      fontSize: "18px",
                      margin: "10px",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))
        )}
      </List>
    </Box>
  );
};

export default MainDrawer;
