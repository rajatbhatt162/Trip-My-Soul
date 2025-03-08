// import { Box } from "@mui/material";
// import TravelBanner from "../components/travelbannermainpage";
// import IdealTravelCampanion from "../components/idealtravelcampanion";
// import Certifications from "../components/certifications";
// import { Tours } from "../components/tours/Tours";
// import HomePageFaQ from "@/components/homepagefaq";
// import ThankYouModal from "@/components/thankyoumodel";
// import { getTrekCategories } from "@/services";
// import { transformTrekCategories } from "@/utils/transformTrekCategories";

// const getData = async () => {
//   let initialPageData = {
//     treks: [],
//     trekLimits: [],
//     regions: [],
//     allTrekCategories: [],
//   };

//   try {
//     let res = {};
//     try {
//       res = await getTrekCategories();
//     } catch (e) {
//       throw e;
//     }

//     const trekCategories = transformTrekCategories(res.data.data.items);
//     const filteredCategories = trekCategories.filter((category) =>
//       [
//         "uttarakhand-110",
//         "kashmir-122",
//         "himachal-pardesh-112",
//         "trending-treks-on-tms-103",
//       ].includes(category.id)
//     );
//     const initialLimits = {};
//     filteredCategories.forEach((category) => {
//       initialLimits[category.id] = 6;
//     });

//     initialPageData.treks = trekCategories[0].treks;
//     initialPageData.trekLimits = initialLimits;
//     initialPageData.regions = filteredCategories;
//     initialPageData.allTrekCategories = res.data.data.items;
//     return initialPageData;
//   } catch (e) {
//     console.log("Error in initial rendering", e);
//     return initialPageData;
//   }
// };

// export default async function Home() {
//   let initialData = {};
//   try {
//     initialData = await getData();
//   } catch (e) {
//     throw e;
//   }

//   console.log("initial data in tms in home page", initialData);
//   return (
//     <Box>
//       <TravelBanner />
//       <Tours allTrekCategories={initialData.allTrekCategories} />
//       <IdealTravelCampanion />
//       <HomePageFaQ />
//       <Certifications />

//       <ThankYouModal />
//     </Box>
//   );
// }

// export async function generateMetadata({ params }) {
//   return {
//     title: "Trip My Soul | Unforgettable Travel, Trekking & Adventure Tours",
//     description:
//       "Tripmysoul.in-one of the top India trekking companies in India .Experience adventure trekking & camping with expert guides & trusted experience |Book now",
//   };
// }
import { Box } from "@mui/material";
import TravelBanner from "../components/travelbannermainpage";
import IdealTravelCampanion from "../components/idealtravelcampanion";
import Certifications from "../components/certifications";
import { Tours } from "../components/tours/Tours";
import HomePageFaQ from "@/components/homepagefaq";
import ThankYouModal from "@/components/thankyoumodel";
import { getTrekCategories } from "@/services";
import { transformTrekCategories } from "@/utils/transformTrekCategories";

const getData = async () => {
  let initialPageData = {
    treks: [],
    trekLimits: [],
    regions: [],
    allTrekCategories: [],
  };

  try {
    let res = {};
    try {
      res = await getTrekCategories();
    } catch (e) {
      throw e;
    }

    const trekCategories = transformTrekCategories(res.data.data.items);
    
    // Define the same category order as in TourCategories.js
    const categoryOrder = [
      "Spirituals-Journey-101",
      "south-trip-511",
      "weekend-gateway-104",
      "mansoon-treks-110",
      "summer-trek-109",
      "trending-treks-on-tms-103",
      "uttarakhand-110",
      "kashmir-122",
      "upcoming-winter-trek-102",
      "himachal-pardesh-112",
      "Explore-the-open-road-104"
    ];

    // Filter and sort categories based on the defined order
    const orderedCategories = categoryOrder
      .map(id => trekCategories.find(cat => cat.id === id))
      .filter(Boolean); // Remove any undefined entries

    const initialLimits = {};
    orderedCategories.forEach((category) => {
      initialLimits[category.id] = 6;
    });

    initialPageData.treks = orderedCategories[0]?.treks || [];
    initialPageData.trekLimits = initialLimits;
    initialPageData.regions = orderedCategories;
    initialPageData.allTrekCategories = res.data.data.items;
    return initialPageData;
  } catch (e) {
    console.log("Error in initial rendering", e);
    return initialPageData;
  }
};

export default async function Home() {
  let initialData = {};
  try {
    initialData = await getData();
  } catch (e) {
    throw e;
  }

  console.log("initial data in tms in home page", initialData);
  return (
    <Box>
      <TravelBanner />
      <Tours allTrekCategories={initialData.allTrekCategories} />
      <IdealTravelCampanion />
      <HomePageFaQ />
      <Certifications />

      <ThankYouModal />
    </Box>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: "Trip My Soul | Unforgettable Travel, Trekking & Adventure Tours",
    description:
      "Tripmysoul.in-one of the top India trekking companies in India .Experience adventure trekking & camping with expert guides & trusted experience |Book now",
  };
}

