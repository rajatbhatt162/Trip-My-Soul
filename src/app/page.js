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
    console.log('Fetching trek categories from:', process.env.NEXT_PUBLIC_BASE_URL);
    const res = await getTrekCategories();
    
    if (!res?.data?.data?.items) {
      console.error('Invalid response structure:', res);
      return initialPageData; // Return empty data instead of throwing
    }

    const trekCategories = transformTrekCategories(res.data.data.items);
    console.log('Transformed trek categories:', trekCategories.length);

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

    initialPageData = {
      treks: orderedCategories[0]?.treks || [],
      trekLimits: initialLimits,
      regions: orderedCategories,
      allTrekCategories: res.data.data.items,
    };

    return initialPageData;
  } catch (e) {
    console.error("Error in getData:", e);
    console.error("Error details:", {
      message: e.message,
      response: e.response?.data,
      status: e.response?.status,
    });
    return initialPageData; // Return empty data instead of throwing
  }
};

export default async function Home() {
  let initialData = {
    treks: [],
    trekLimits: [],
    regions: [],
    allTrekCategories: [],
  };
  
  try {
    initialData = await getData();
  } catch (e) {
    console.error("Error in Home component:", e);
  }

  return (
    <Box>
      <TravelBanner />
      <Tours allTrekCategories={initialData.allTrekCategories || []} />
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

