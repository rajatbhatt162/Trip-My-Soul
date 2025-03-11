"use client";
import {
  Box,
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import MegaMenuCatogory from "../megamenucomponents";
// import { getTrekCategories } from "@/services";
// import MegaMenuSkelton from "../megamenuskelton";
import { transformTrekCategories } from "@/utils/transformTrekCategories";

export const MegaMenu = ({ onClose, allTrekCategories }) => {
  const [render, setRender] = useState("Uttarakhand");
  const [name, setName] = useState();
  const [id, setId] = useState("uttarakhand-110");
  const [trek, setTrek] = useState([]);
  const [image, setImage] = useState();
  const [showmegamenuData, setShowmegamenuData] = useState(false);

  // const [allTrekCategories, setAllTrekCategories] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const fetchAllTrekCategories = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await getTrekCategories();
  //     setAllTrekCategories(res.data.data.items);
  //   } catch (error) {
  //     console.log("error in fetching trek categories", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useMemo(() => {
  //   fetchAllTrekCategories();
  // }, []);
// "uttarakhand-110", "kashmir-122", "himachal-pardesh-112"
  const trekCategories = transformTrekCategories(allTrekCategories);

  const filteredTrekCategories = trekCategories?.filter((category) =>
    [""].includes(
      category.id
    )
  );

  const handleCategoryClick = (e, name, id, trek, image) => {
    e.stopPropagation();
    setRender(name);
    setImage(image);
    setName(name);
    setId(id);
    setTrek(trek);
    setShowmegamenuData(true);
  };

  // useEffect(() => {
  //   if (filteredTrekCategories.length) {
  //     const defaultCategory = filteredTrekCategories.find(category => category.id === "uttarakhand-110");
  //     if (defaultCategory) {
  //       setName(defaultCategory.name);
  //       setId(defaultCategory.id);
  //       setTrek(defaultCategory.treks);
  //       setImage(defaultCategory.categoryimage);
  //       setShowmegamenuData(true);
  //     }
  //   }
  // }, [filteredTrekCategories.length]);

  const LeftTesks = () => {
    if (filteredTrekCategories?.length) {
      const defaultCategory = filteredTrekCategories?.find(
        (category) => category.id === "uttarakhand-110"
      );
      if (defaultCategory) {
        setName(defaultCategory.name);
        setId(defaultCategory.id);
        setTrek(defaultCategory.treks);
        setImage(defaultCategory.categoryimage);
        setShowmegamenuData(true);
      }
    }
  };

  !name && LeftTesks();

  // if (loading) {
  //   return <MegaMenuSkelton />;
  // }

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#ffffff",
        overflow: "hidden",
        marginTop: "65px",
      }}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sm={9.5}>
            <Box>
              {showmegamenuData && (
                <MegaMenuCatogory
                  catagoryimage={image}
                  onClose={onClose}
                  categoryId={id}
                  categortyname={name}
                  categorytrek={trek}
                />
              )}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={2.5}
            md={2.5}
            sx={{ backgroundColor: "#1976d2c2" }}
          >
            <Box sx={{ marginTop: "40px" }}>
              <List component="nav">
                {filteredTrekCategories
                  ?.slice()
                  ?.reverse()
                  ?.map((category) => (
                    <ListItemButton
                      disableRipple
                      key={category.id}
                      selected={id === category.id}
                      onClick={(e) =>
                        handleCategoryClick(
                          e,
                          category.name,
                          category.id,
                          category.treks,
                          category.categoryimage
                        )
                      }
                      sx={{
                        position: "relative",
                        "&.Mui-selected": {
                          backgroundColor:
                            id === category.id ? "#ffffff" : "transparent",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: "50%",
                          width: "50%",
                          height: "3px",
                          backgroundColor: "#e07323",
                          transform: "translateX(-50%)",
                          display: id === category.id ? "block" : "none",
                        },
                      }}
                    >
                      <ListItemText
                        className="flex justify-center align-center"
                        primary={category.name}
                        sx={{
                          color: id === category.id ? "black" : "#fff",
                        }}
                      />
                    </ListItemButton>
                  ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
