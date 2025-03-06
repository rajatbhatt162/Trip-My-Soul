"use client";
import { createContext, useContext, useState } from "react";
const TourContext = createContext();
export const TourProvider = ({ children }) => {
  const [tour, setTour] = useState(null);
  const [catagorywise, setCatagoryWise] = useState(null);
  const [allTrekCategories, setAllTrekCategories] = useState([]);
  const [formdetails ,SetFormData] = useState("")


  return (
    <TourContext.Provider
      value={{ tour, setTour, setCatagoryWise, catagorywise, allTrekCategories, setAllTrekCategories ,SetFormData ,formdetails }}
    >
      {children}
    </TourContext.Provider>
  );
};

export const useTour = () => useContext(TourContext);
