
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IdealTravel1 from "../../assests/idealtravel1.png";
import IdealTravel2 from "../../assests/idealtravel2.png";
import IdealTravel3 from "../../assests/idealtravel3.png";
import IdealTravel4 from "../../assests/idealtravel4.png";
import IdealTravel5 from "../../assests/idealtravel5.png";
import IdealTravel6 from "../../assests/idealtravel6.png";
import Image from "next/image";

const IdealTravelCompanion = () => {
  const cardContent = [
    {
      img: IdealTravel1,
      title: "Small Groups",
      description:
        "Join a small group of like-minded travellers that, like you, are eager to safely and confidently experience all the things that make our world worth exploring.",
    },
    {
      img: IdealTravel2,
      title: "100% Guaranteed Departures",
      description:
        "Pack those bags and don't break a sweat because we guarantee every single one of our departures. As long as it's safe, you're going!",
    },
    {
      img: IdealTravel3,
      title: "Locally Based Guides",
      description:
        "At Trip My Soul, we don’t have tour guides — we have Chief Experience Officers. And they are all locally based, meaning they know the area you’re exploring like the back of their well-travelled hand.",
    },
    {
      img: IdealTravel4,
      title: "Built To Support Local Communities",
      description:
        "We have always created our tours by building meaningful relationships with local communities, directly benefiting the people and places we visit.",
    },
    {
      img: IdealTravel5,
      title: "Flexibility, Freedom, Fun",
      description:
        "No matter the Travel Style, our tours balance well-planned itineraries with the flexibility to do your own thing and make the experience your own.",
    },
    {
      img: IdealTravel6,
      title: "Travel Responsibly",
      description:
        "At Trip My Soul, we are dedicated to responsible travel practices. When you journey with us, you'll witness firsthand our commitment to making travel a force for positive change in everything we do.",
    },
  ];

  return (
    <Box className="ideal-travel" sx={{ padding: "20px 0" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            component="h2" // Use h2 for better structure
            sx={{ margin: "6rem 0rem 1rem 0rem" }}
          >
            What Makes Trip My Soul Your Ideal Travel Companion?
          </Typography>
          <Box sx={{ color: "#7F7F7F", marginBottom: "1rem" }}>
            <Typography variant="body1" component="p">
              We’re the leader in small group adventure travel for more than 4 years. How’d we get here? By redefining the way travellers see the world.
            </Typography>
            <Typography variant="body1" component="p">
              Check out how we’re creating the future of travel.
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {cardContent.map((post, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: "100%",
                  minHeight: "250px",
                  marginTop: "45px",
                  padding: "30px",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  borderRadius: "10px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05) translateY(-10px)",
                    boxShadow: "rgba(0, 0, 0, 0.2) 0px 15px 45px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Image src={post.img} alt={`Image illustrating ${post.title}`} height={65} />
                    <Typography gutterBottom className="ideal-title" variant="h6">
                      {post.title}
                    </Typography>
                  </Box>
                  <Box sx={{ marginTop: "15px" }} className="ideal-description">
                    <Typography variant="body2">{post.description}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default IdealTravelCompanion;

