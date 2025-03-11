// import axios from "axios";
import { apiEndPointsConfig } from "./apiEndPointsConfig";
import { axiosInstance } from "./axiosInstance";

export const getTrekCategories = async () => {
  try {
    console.log('Fetching trek categories from:', process.env.NEXT_PUBLIC_BASE_URL);
    const res = await axiosInstance.get(apiEndPointsConfig.trekCategories);
    console.log('Trek categories response:', {
      status: res.status,
      itemCount: res.data?.data?.items?.length || 0
    });
    return res;
  } catch (err) {
    console.error('Error fetching trek categories:', {
      message: err.message,
      response: err.response?.data,
      status: err.response?.status
    });
    throw err;
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