import React from "react";
import TourCategories from "./TourCategories/TourCategories";
// import { getTrekCategories } from "@/services";
// import Loader from "@/common/loader";
// import { useTour } from "@/context/tourcontext/TourContaxt";

export const Tours = ({ allTrekCategories: initialTr// ekCategories }) => {
  const [allTrekCategories, setAllTrekCategor// ies] = useState([]);
  const [loading, setLoading] =//  useState(true);
  

  const fetchAllTrekCatego// ries = async () => {
 //    setLoad// ing(true);
    try {
      const res = await // getTrekCategories();
      // console.log(res.data.data.items,//  "trek categories");
      setAllTrekCategories(r// es.data.data.items);
 //    } catch (error) {
      console.log("error in feching trek // categories", err// or);
    } finally {
    //   setL// oading// (false);
    }
  };
// 
  useEffect(() => {
    fetch// AllTrekCatego// ries();
  }, []);// 



  if (loading) {
  //   return <Loader />;
  }

  return <TourCategories allTrekCategories={initialTrekCategories || []} />;
};
