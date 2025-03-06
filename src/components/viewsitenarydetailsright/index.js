import React from 'react';
import Batches from '../viewitinerarycomponent/batches';
import DetailsTrip from '../viewitinerarycomponent/detailstrip';
import Inclusion from '../viewitinerarycomponent/inclusion';
import { Grid, Typography } from '@mui/material';
import { BookingPriceTrip } from '../viewitinerarycomponent/bookingprice';
import { PriceDetails } from '../viewitinerarycomponent/pricecard';
import HelpAndSupoort from '../viewitinerarycomponent/helpandsupport';

export const ViewsItenaryDetails = ({
  cardcontent,
  cardcontentinclusion,
  batches,
  months,
  travelprice,
  tempopriceDetails,
  trekID,
}) => {
  return (
    <section>
      <Typography variant="h2" sx={{ margin: "20px 0" , fontSize:"22px"  , fontWeight:700}}>
        Itinerary Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Batches batchstart={batches} months={months} travelprice={travelprice} trekID={trekID} />
        </Grid>
        <Grid item xs={12}>
          <DetailsTrip cardcontent={cardcontent} />
        </Grid>
        <Grid item xs={12}>
          <Inclusion cardcontentinclusion={cardcontentinclusion} />
        </Grid>
        <Grid item xs={12}>
          <PriceDetails tempopriceDetails={tempopriceDetails} />
        </Grid>
        <Grid item xs={12}>
          <HelpAndSupoort />
        </Grid>
      </Grid>
    </section>
  );
};
