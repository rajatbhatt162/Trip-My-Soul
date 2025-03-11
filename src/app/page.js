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
    
    if (!res.data?.data?.items) {
      console.error('Invalid response structure:', res);
      throw new Error('Invalid response structure from API');
    }

    const trekCategories = transformTrekCategories(res.data.data.items);
    console.log('Transformed trek categories:', trekCategories.length);

    const filteredCategories = trekCategories.filter((category) =>
      [
        "uttarakhand-110",
        "kashmir-122",
        "himachal-pardesh-112",
        "trending-treks-on-tms-103",
      ].includes(category.id)
    );

    console.log('Filtered categories:', filteredCategories.length);

    const initialLimits = {};
    filteredCategories.forEach((category) => {
      initialLimits[category.id] = 6;
    });

    initialPageData = {
      treks: trekCategories[0]?.treks || [],
      trekLimits: initialLimits,
      regions: filteredCategories,
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
    throw new Error('Failed to fetch trek data. Please check server logs.');
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
