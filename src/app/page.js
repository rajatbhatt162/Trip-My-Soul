import { Box } from "@mui/material";
import dynamic from 'next/dynamic';
import TravelBanner from "../components/travelbannermainpage";
import IdealTravelCampanion from "../components/idealtravelcampanion";
import Certifications from "../components/certifications";
import { Tours } from "../components/tours/Tours";
import HomePageFaQ from "@/components/homepagefaq";
import ThankYouModal from "@/components/thankyoumodel";
import { getTrekCategories } from "@/services";
import { transformTrekCategories } from "@/utils/transformTrekCategories";
import ErrorBoundary from '@/components/ErrorBoundary';

// Dynamically import components that use client-side features
const DynamicTravelBanner = dynamic(() => import("../components/travelbannermainpage"), {
  ssr: false
});

const getData = async () => {
  let initialPageData = {
    treks: [],
    trekLimits: [],
    regions: [],
    allTrekCategories: [],
  };

  try {
    console.log('Fetching trek categories...');
    const res = await getTrekCategories();
    console.log('API Response:', res);
    
    // Validate API response
    if (!res) {
      console.error('No response from API');
      return initialPageData;
    }

    if (!res.data) {
      console.error('No data in API response');
      return initialPageData;
    }

    if (!res.data.data) {
      console.error('Invalid data structure in API response');
      return initialPageData;
    }

    const items = res.data.data.items;
    console.log('Items from API:', items);
    
    // Validate items is an array
    if (!Array.isArray(items)) {
      console.error('API items is not an array:', items);
      return initialPageData;
    }

    if (items.length === 0) {
      console.error('API items array is empty');
      return initialPageData;
    }

    console.log('Transforming categories...');
    const trekCategories = transformTrekCategories(items);
    console.log('Transformed categories:', trekCategories);
    
    // Validate transformed categories
    if (!Array.isArray(trekCategories)) {
      console.error('Transformed categories is not an array:', trekCategories);
      return initialPageData;
    }

    if (trekCategories.length === 0) {
      console.error('Transformed categories array is empty');
      return initialPageData;
    }

    const categoryOrder = [
      "spiritual-101",
      "trending-treks-on-tms-103",
      "uttarakhand-110",
      "kashmir-122",
      "himachal-pardesh-112",
      "Spirituals-Journey-101",
      "south-trip-511",
      "weekend-gateway-104",
      "mansoon-treks-110",
      "summer-trek-109",
      "upcoming-winter-trek-102",
      "Explore-the-open-road-104"
    ];

    console.log('Ordering categories...');
    const orderedCategories = categoryOrder
      .map(id => {
        const category = trekCategories.find(cat => cat?.id === id);
        if (!category) {
          console.log(`No category found for ID: ${id}`);
        }
        return category;
      })
      .filter(Boolean);

    console.log('Ordered categories:', orderedCategories);

    const initialLimits = {};
    orderedCategories.forEach((category) => {
      if (category?.id) {
        initialLimits[category.id] = 6;
      }
    });

    const result = {
      treks: orderedCategories[0]?.treks || [],
      trekLimits: initialLimits,
      regions: orderedCategories,
      allTrekCategories: items
    };

    console.log('Final result:', result);
    return result;
  } catch (error) {
    console.error("Error fetching trek categories:", error);
    return initialPageData;
  }
};

export default async function Home() {
  const initialData = await getData().catch(error => {
    console.error("Error in Home component:", error);
    return {
      treks: [],
      trekLimits: {},
      regions: [],
      allTrekCategories: []
    };
  });

  // Ensure we have valid data before rendering
  const hasValidData = Array.isArray(initialData.allTrekCategories) && initialData.allTrekCategories.length > 0;

  return (
    <Box>
      <DynamicTravelBanner />
      <ErrorBoundary>
        {hasValidData ? (
          <Tours allTrekCategories={initialData.allTrekCategories} />
        ) : (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            Loading trek categories...
          </Box>
        )}
      </ErrorBoundary>
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
