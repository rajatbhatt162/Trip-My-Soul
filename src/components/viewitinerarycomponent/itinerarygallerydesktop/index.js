"use client";
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Box } from '@mui/material';

export default function ItineraryGalleryDesktop({ gallerysections }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section aria-labelledby="gallery-title">
      <h2 id="gallery-title" style={{ display: 'none' }}>Itinerary Gallery</h2> {/* Hidden heading for SEO */}
      <Box sx={{ height: { xs: "300px", md: "400px", sm: "400px" }, width: "auto", mb: '8rem' }}>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          loop={gallerysections.length >= 3}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {gallerysections && gallerysections.map((image, index) => (
            <SwiperSlide key={index}>
              <img 
                  src={`https:${image.fields.file.url}`} 
                  alt={`Image of ${image.fields.title || 'nature scene'}`} 
                  loading="lazy" 
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={gallerysections.length >= 3}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {gallerysections && gallerysections.map((image, index) => (
            <SwiperSlide key={index}>
              <img 
                  src={`https:${image.fields.file.url}`} 
                  alt={`Thumbnail of ${image.fields.title || 'nature scene'}`} 
                  loading="lazy" 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </section>
  );
}
