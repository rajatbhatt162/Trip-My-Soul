import { getTrekDetailsById } from "@/services";
import ItineraryDetails from "./ItineraryDetails";

export async function generateMetadata({ params, searchParams }, parent) {
  const { trekId } = params;
  const trek = await getTrekDetailsById(trekId);
  return {
    title: trek[0]?.fields?.metatag?.metaTitle || 'Trip My Soul',
    description: trek[0]?.fields?.metatag?.metaDescription || 'Tripmysoul.in-one of the top India trekking companies in India .Experience adventure trekking & camping with expert guides & trusted experience |Book now ',
  };
}
  
  export default function ItineraryDetailsPage({ params }) {
  return (
    <div>
      <ItineraryDetails params={params} />
    </div>
  );
}
