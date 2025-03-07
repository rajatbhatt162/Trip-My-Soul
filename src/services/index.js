// import axios from "axios";
import { apiEndPointsConfig } from "./apiEndPointsConfig";
import { axiosInstance } from "./axiosInstance";

export const getTrekCategories = async () => {
  try {
    const res = await axiosInstance.get(apiEndPointsConfig.trekCategories);
    return res;
  } catch (err) {
    return err;
  }
};

export const getTreks = async () => {
  try {
    const res = await axiosInstance.get(apiEndPointsConfig.treks);
    return res;
  } catch (err) {
    return err;
  }
};

export const getTrekDetails = async () => {
  try {
    const res = await axiosInstance.get(apiEndPointsConfig.trekDetails);
    return res;
  } catch (err) {
    return err;
  }
};

export const getTrekDetailsById = async (categoryId) =>{
  try{
    const res = await axiosInstance.get(apiEndPointsConfig.trekDetails);
    return res.data.data.items.filter((item) => categoryId === item.fields.uid)
  } catch (err) {
    return err;
  }
}

export const getAllTrekByCategoryId = async(categoryId) => {
  const res = await axiosInstance.get(apiEndPointsConfig.trekCategories);
  const result = res.data?.data?.items.filter((item) => categoryId === item.fields.uid)
  return result[0]?.fields?.trekDetailId;
  
}

export const paymentByPhonepe = async(data) => {
  try {
    const res = await axiosInstance.post(apiEndPointsConfig.payment ,data);
    return res
  } catch (error) {
    return error;
  }
  
}

export const slackNotifier = async(data) => {
  try {
    const res = await axiosInstance.post(apiEndPointsConfig.slack ,data);
    return res
  } catch (error) {
    return error;
  }
  
}