export const transformTrekDetails = (trekDetails) => {
 return trekDetails.map((item) => {
    const fields = item.fields;
    return {
      FaQDetails: fields.FaQDetails,
      reviewsection:fields.reviewsection,
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
      metatag:fields.metatag,
      thingtorental: fields.thingtorental,
      title: fields.title,
      title1: fields.title1,
      travelbanner: fields.travelbanner,
      travelprice: fields.travelprice,
      id: fields.uid,
    };
  });
};
