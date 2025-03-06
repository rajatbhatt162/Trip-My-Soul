import React, { Suspense } from "react";
import { Box } from "@mui/material";
import "../sass/style.scss";
// import Header from "@/layout/header";
import CombinedProvider from "@/context/combinecontext";
import Footer from "@/layout/fotter";
import FixedContactButtons from "@/components/fixedbuttonwhatappphone";
import { TourProvider } from "@/context/tourcontext/TourContaxt";
import Loader from "@/common/loader";
import GoogleAnalytics from "@/components/googleanalyatic";
import { MegaHeaderSSr } from "@/layout/megaHeaderSsr";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          property="og:title"
          content="Trip My Soul | Unforgettable Travel, Trekking & Adventure Tours"
        />
        <meta
          property="og:description"
          content="Tripmysoul.in-one of the top India trekking companies in India .Experience adventure trekking & camping with expert guides & trusted experience |Book now"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/df5ojocl4/image/upload/fl_preserve_transparency/v1722680692/og_img_nigejc.jpg?_s=public-apps"
        />
        <meta property="og:url" content="https://tripmysoul.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Trip My Soul" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trip My Soul" />
        <meta
          name="twitter:description"
          content="Trip My Soul. Yatra Phulara Ridge Trekking Tours ; Kasmir Lakes Trek. Weekend Getaways Adi Kailash Trekking Experience ; Phulara Ridge Trek. Trek Travel Packages."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/df5ojocl4/image/upload/fl_preserve_transparency/v1722680692/og_img_nigejc.jpg?_s=public-apps"
        />
        <meta name="twitter:url" content="https://tripmysoul.vercel.app/" />
        <GoogleAnalytics />
      </head>
      <body>
        <CombinedProvider>
          <TourProvider>
            <Suspense fallback={<Loader />}>
              {/* <Header /> */}
              <MegaHeaderSSr />
              <Box className="pt-xxxl">{children}</Box>
              <FixedContactButtons />
              <Footer />
            </Suspense>
          </TourProvider>
        </CombinedProvider>
      </body>
    </html>
  );
}
