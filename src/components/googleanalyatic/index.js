"use client";

import { useEffect } from 'react';
import Script from 'next/script';

export default function GoogleAnalytics() {
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16695192872/G7_7CPHln98ZEKja8Zg-',
      });
    }
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-QT405E6BQ6"
      />

      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          // Google Analytics config
          gtag('config', 'G-QT405E6BQ6');
          
          // Google Ads Conversion config (only if needed for conversion tracking)
          gtag('config', 'AW-16695192872');
        `}
      </Script>
      
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-16695192872/G7_7CPHln98ZEKja8Zg-',
          });
        `}
      </Script>
    </>
  );
}


// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-QT405E6BQ6"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-QT405E6BQ6');
// </script>