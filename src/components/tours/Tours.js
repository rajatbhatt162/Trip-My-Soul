// import React from "react";
// import TourCategories from "./TourCategories/TourCategories";

// export const Tours = ({ allTrekCategories }) => {

//   return <TourCategories allTrekCategories={allTrekCategories} />;
// };




import React from "react";
import TourCategories from "./TourCategories/TourCategories";
// import { getTrekCategories } from "@/services";
// import Loader from "@/common/loader";
// import { useTour } from "@/context/tourcontext/TourContaxt";

export const Tours = ({ allTrekCategories }) => {
  // const [allTrekCategories, setAllTrekCategories] = useState([]);
  // const [loading, setLoading] = useState(true);
  

  // const fetchAllTrekCategories = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await getTrekCategories();
  //     // console.log(res.data.data.items, "trek categories");
  //     setAllTrekCategories(res.data.data.items);
  //   } catch (error) {
  //     console.log("error in feching trek categories", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchAllTrekCategories();
  // }, []);



  // if (loading) {
  //   return <Loader />;
  // }

  return <TourCategories allTrekCategories={allTrekCategories} />;
};
