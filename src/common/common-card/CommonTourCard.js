
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Image from "next/image";
// import loading from "../../assests/loading.gif";
import Link from "next/link";

const CommonTourCard = ({ cardData, onRedirect }) => {

  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Link style={{textDecoration : "none"}} href={onRedirect}>  
      <Card
        role="button"
        aria-label={`Redirect to ${cardData?.title}`}
        sx={{
          cursor: "pointer",
          maxWidth: "100%",
          minHeight: { xs: "200px", sm: "300px", md: "300px" },
          marginTop: "30px",
          borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          position: "relative",
          "@media (min-width: 600px)": {
            "&:hover": {
              transform: "scale(1.05) translateY(-10px)",
              boxShadow: "rgba(0, 0, 0, 0.2) 0px 15px 45px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            },
          },
        }}
      >
        {/* {(
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              zIndex: 2,
              borderRadius: "10px",
            }}
          >
            <Image src={loading} width={30} height={30} alt="Loading" />
          </Box>
        )} */}

        <Box
          sx={{
            height: { xs: "200px", sm: "200px" },
            width: "100%",
            borderRadius: "10px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={`https:${cardData?.image?.fields?.file?.url}`}
            alt={`Image for ${cardData?.title}`}
            layout="fill"
            objectFit="cover"
            loading="lazy" 
          />
        </Box>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 15px 10px 15px",
            }}
          >
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "black",
                margin: "0px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {cardData?.title}
            </Typography>

            <Button
              size="small"
              sx={{
                color: "#E07323",
                textTransform: "capitalize",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* {loadingOnClick ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                cardData?.title1
              )} */}
              {cardData?.title1}
            </Button>
          </Box>

          <Box sx={{ padding: "0px 15px" }}>
            <Typography
              variant="body1" // Change to body1 for consistency
              color="text.secondary"
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#000000",
              }}
            >
              {cardData?.description}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              padding: "10px 14px 4px",
            }}
          >
            <Typography
              variant="body2"
              component="div"
              color="text.secondary"
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#595BD4",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CurrencyRupeeIcon
                sx={{
                  fontSize: "16px",
                }}
              />
              {cardData?.amount} Per person
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: "12px",
                fontWeight: "500",
                color: "#E07323",
                paddingLeft: "16px",
              }}
            >
              {cardData?.location}
            </Typography>
          </Box>
        </CardContent>
      </Card>
      </Link>
    </Grid>
  );
};

export default CommonTourCard;
