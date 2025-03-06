"use server"
import React from "react";
import ItineraryBannerComponent from "@/components/itinerarybannercomponent";
import Itinerarydays from "@/components/itinerarydays";
import InclusionExclusionTab from "@/components/viewitinerarycomponent/inclusionexclusiontab";
import ItineraryGalleryDesktop from "@/components/viewitinerarycomponent/itinerarygallerydesktop";
import ThingsToPack from "@/components/viewitinerarycomponent/thingstopack";
import { ViewsItenaryDetails } from "@/components/viewsitenarydetailsright";
import { Box, Container, Grid } from "@mui/material";
import { OverViewsTrek } from "@/components/overviewstrip";
import FaQ from "@/components/faq";
import { getAllTrekByCategoryId, getTrekDetailsById } from "@/services";
import Loader from "@/common/loader";
import ThingsOnRental from "@/components/viewitinerarycomponent/thingonrental";
import WhoCanParticipate from "@/components/whocanparticipate";
import CancellationPolicyTable from "@/components/viewitinerarycomponent/cancellationpolicy";
import PaymentPolicyTable from "@/components/viewitinerarycomponent/paymentpolicy";
import ReviewsComponent from "@/components/reviews";

const fetchAllTrekCategories = async (params) => {
  try {
    const res = await getTrekDetailsById(params.trekId);
    return res;
  } catch (error) {
    console.error("Error fetching trek details:", error);
  }
};

const fetchAllTrekByCategoryId = async (params) => {
  try {
    const res = await getAllTrekByCategoryId(params.categoryId);
  } catch (error) {
    console.error("Error fetching trek details:", error);
  }
};

const ItineraryDetails = async ({ params, metatag }) => {
  const trekID = params.trekId;

  let transformTourDetails;

  if (!transformTourDetails?.length < 1) {
    return (
      <Box
        className="flex justify-center w-full mt-xxl mb-xxl"
        style={{ marginTop: "20px" }}
      >
        No Data Found
      </Box>
    );
  }


  let trek = {};
  try {
    trek = await fetchAllTrekCategories(params);
  } catch (e) {
    throw e;
  }
  

  if (trek) {
    transformTourDetails =
      trek?.length > 0 &&
      trek.map((item) => {
        const fields = item.fields;
        return {
          FaQDetails: fields.FaQDetails,
          reviewsection: fields.reviewsection,
          amount: fields.amount,
          batches: fields.batches,
          cardcontent: fields.cardcontent,
          cardcontentinclusion: fields.cardcontentinclusion,
          description: fields.description,
          difficulty: fields.difficulty,
          exclusion: fields.exclusion,
          gallery: fields.gallery,
          image: fields.image,
          inclusion: fields.inclusion,
          itenariesdetails: fields.itenariesdetails,
          location: fields.location,
          month: fields.month,
          months: fields.months,
          overviewsdetails1: fields.overviewsdetails1,
          places: fields.places,
          region: fields.region,
          regions: fields.regions,
          season: fields.season,
          tempoPriceDetails: fields.tempoPriceDetails,
          theme: fields.theme,
          thingtopack: fields.thingtopack,
          thingtorental: fields.thingtorental,
          title: fields.title,
          title1: fields.title1,
          travelbanner: fields.travelbanner,
          travelprice: fields.travelprice,
          id: fields.uid,
          metatag: fields.metatag,
        };
      });
  }

   
  let allTour = {};
  try {
    allTour = await fetchAllTrekByCategoryId(params);
  } catch (e) {
    throw e;
  }

  const [tourDetail] = transformTourDetails;
  return (
    <>
      {transformTourDetails?.length > 0 ? (
        <Box>
          <ItineraryBannerComponent
            travelbanner={tourDetail?.travelbanner}
            regions={tourDetail?.regions}
          />
          <Container maxWidth="xl">
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                sx={{
                  order: { xs: 1, sm: 1, md: 2 },
                  top: { sm: "6vh" },
                  right: { sm: 0 },
                  bottom: { xs: 0, sm: "10vh", md: "15vh" },
                  width: { sm: "50%" },
                  height: { xs: "auto", sm: "10%", md: "10%" },
                  marginBottom: { sm: "50px", md: "50px" },
                }}
              >
                <ViewsItenaryDetails
                  trekID={trekID}
                  cardcontent={tourDetail?.cardcontent}
                  cardcontentinclusion={tourDetail?.cardcontentinclusion}
                  months={tourDetail?.months}
                  batches={tourDetail?.batches}
                  travelprice={tourDetail?.travelprice}
                  tempopriceDetails={tourDetail?.tempoPriceDetails}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={8}
                sx={{ order: { xs: 2, sm: 1 } }}
              >
                <Box>
                  <ItineraryGalleryDesktop
                    gallerysections={tourDetail?.gallery}
                  />
                  <OverViewsTrek
                    overviewsdetails1={tourDetail?.overviewsdetails1}
                  />
                  <InclusionExclusionTab
                    inclusion={tourDetail?.inclusion}
                    exclusion={tourDetail?.exclusion}
                  />
                  <Itinerarydays
                    itenariesdetails={tourDetail?.itenariesdetails}
                  />
                  <WhoCanParticipate />
                  <PaymentPolicyTable />

                  <ThingsToPack thingtopack={tourDetail?.thingtopack} />
                  <ThingsOnRental thingtorental={tourDetail?.thingtorental} />
                  <CancellationPolicyTable />
                </Box>
              </Grid>
            </Grid>
            <FaQ FaQDetails={tourDetail?.FaQDetails} />
            {tourDetail?.reviewsection && <ReviewsComponent reviewsection={tourDetail?.reviewsection} /> }
          </Container>
        </Box>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ItineraryDetails;
