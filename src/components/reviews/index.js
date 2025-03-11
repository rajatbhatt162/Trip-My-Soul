"use client"
import {
    Container,
    Box,
    Typography,
    Grid,
    Divider,
    useTheme,
} from "@mui/material";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import nextt from "../../assests/nextt.png";
import youtube from "../../assests/youtube.svg";
import prevv from "../../assests/prevv.png";

// import required modules
import { Navigation, EffectCoverflow } from "swiper/modules";
import { useMediaQuery } from "@mui/system";

const ReviewsComponent = ({ reviewsection }) => {
    const theme = useTheme();
    const isScreenLg = useMediaQuery(theme.breakpoints.down("lg"));
    const isScreenMd = useMediaQuery(theme.breakpoints.down("md"));
    const isScreenSm = useMediaQuery(theme.breakpoints.down("sm"));

    // Define the number of slides based on screen size
    let slidesPerView = 4;
    if (isScreenSm) {
        slidesPerView = 1;
    } else if (isScreenMd) {
        slidesPerView = 2;
    } else if (isScreenLg) {
        slidesPerView = 3;
    } else {
        slidesPerView = 4;
    }

    if (!reviewsection || reviewsection.length === 0) {
        return null;
    }

    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <title>Trek Reviews | Hear From Our Adventurers</title>
                <meta
                    name="description"
                    content="Explore detailed trek reviews from adventurers who have conquered breathtaking trails. Watch videos and learn from their experiences."
                />
                <meta
                    name="keywords"
                    content="trek reviews, adventure reviews, hiking reviews, trekker feedback, trekker experiences"
                />
                <link rel="canonical" href="https://yourwebsite.com/trek-reviews" />
            </Head>

            <Box className="review-gallary" sx={{ py: 4 }}>
                <Container maxWidth="xl">
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: { xs: '28px', sm: '34px', md: '35px' },
                            fontWeight: '400',
                            mb: 2,
                        }}
                    >
                        Trek Reviews
                    </Typography>
                    <Typography
                        sx={{
                            color: "#878585",
                            marginBottom: 2,
                            fontSize: { xs: '16px', md: '18px' },
                        }}
                    >
                        Hear from Travelers Who've Conquered the Trails
                    </Typography>
                    <Divider sx={{ mb: 4 }} />

                    <Grid container>
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={reviewsection.length >= 3}
                            slidesPerView={"auto"}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            navigation={true}
                            modules={[Navigation, EffectCoverflow]}
                            className="mySwiper"
                        >
                            {reviewsection.map((review) => (
                                <SwiperSlide
                                    key={review.id}
                                    onClick={() => handleClick(review.link)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <Grid
                                        container
                                        sx={{
                                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${review.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            borderRadius: "10px",
                                            height: '100%',
                                            boxShadow: "0px 5px 16px -4px rgba(0,0,0,0.45)",
                                            p: 2,
                                        }}
                                        gap={6}
                                    >
                                        <Grid item xs={12} sx={{ position: 'relative' }}>
                                            <Box
                                                sx={{
                                                    borderLeft: "5px solid red",
                                                    paddingLeft: "10px",
                                                    marginLeft: '23px',
                                                    marginTop: '23px',
                                                }}
                                            >
                                                <Typography sx={{ fontSize: 16, color: "#fff" }}>
                                                    Trekker Review
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: { xs: 20, sm: 22, md: 24, lg: 26 },
                                                        fontWeight: 'bold',
                                                        color: "#fff",
                                                    }}
                                                >
                                                    {review.title}
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    left: '50%',
                                                    top: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    boxShadow: "0px 5px 16px -4px rgba(0,0,0,0.45)",
                                                }}
                                            >
                                                <Image
                                                    src={youtube}
                                                    alt="youtube logo"
                                                    width={80}
                                                    height={80}
                                                    loading="lazy" // Lazy load images for performance
                                                />
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    top: '85%',
                                                    position: 'absolute',
                                                    width: '100%',
                                                }}
                                            >
                                                <Divider
                                                    sx={{
                                                        background: 'red',
                                                        flexGrow: 1,
                                                        mr: 2,
                                                        height: '5px',
                                                    }}
                                                />
                                                <Typography
                                                    sx={{
                                                        color: '#fff',
                                                        marginRight: 2,
                                                        fontSize: { xs: 20, sm: 22, md: 24, lg: 24 },
                                                    }}
                                                >
                                                    {review.reviewer}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </SwiperSlide>
                            ))}

                            {/* Custom Next and Prev Buttons */}
                            <Box
                                className="custom-next"
                                sx={{
                                    right: { xs: "6%", sm: "4%", md: "2%" },
                                    position: "absolute",
                                    top: "45%",
                                    cursor: "pointer",
                                    zIndex: 10,
                                }}
                            >
                                <Image src={nextt} alt="next" loading="lazy" />
                            </Box>
                            <Box
                                className="custom-prev"
                                sx={{
                                    left: { xs: "6%", sm: "4%", md: "2%" },
                                    position: "absolute",
                                    top: "45%",
                                    cursor: "pointer",
                                    zIndex: 10,
                                }}
                            >
                                <Image src={prevv} alt="prev" loading="lazy" />
                            </Box>
                        </Swiper>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default ReviewsComponent;
