"use client";
import { Box, Button, Modal, Tooltip, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useRouter } from "next/navigation";
import { CommonButton } from "@/components/commonbutton";

export const BookingPriceTrip = ({ travelprice ,trekID }) => {

  
  const pricePerPerson =
    typeof travelprice === "object" ? travelprice.priceperperson : travelprice;

  const [currency, setCurrency] = useState("INR");
  const [amount, setAmount] = useState(pricePerPerson);
  
 

  useEffect(() => {
    if (currency === "INR") {
      setAmount(pricePerPerson);
    } else {
      setAmount((pricePerPerson * 0.012).toFixed(2));
    }
  }, [currency, pricePerPerson]);

  const convertCurrency = () => {
    setCurrency(currency === "INR" ? "USD" : "INR");
  };

  const router = useRouter();
  const handleRedirect = () => {
    router.push("/customizeyourtrip");
  };

  const handleBookNowClick = () => {
    router.push(`/payment/${trekID}`);

  };

  return (
    <Box>
      <Box
        sx={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          padding: "10px ",
        }}
      >
        <Box sx={{ borderBottom: "1px solid #fdf6ca", paddingBottom: "10px" }}>
          <Typography
            sx={{ fontWeight: 600,fontSize:{xs:"15px" ,sm:"20px"},  marginBottom: "10px" }}
            variant="h4"
          >
            Starting From
          </Typography>
          <Box className="flex align-center" sx={{ color: "#006EFF" }}>
            {currency === "INR" ? (
              <CurrencyRupeeIcon
                sx={{ fontSize: { xs: "25px", sm: "30px" } }}
              />
            ) : (
              <AttachMoneyIcon sx={{ fontSize: { xs: "25px", sm: "30px" } }} />
            )}
            <Typography
              sx={{ fontWeight: 600, fontSize: { xs: "24px", sm: "30px" } }}
            >
              {amount}
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "10px", sm: "14px", md: "15px" }, ml: 1 }}
            >
              <span style={{ color: "#ff7e08" }}>(+5% gst)</span> per person
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Tooltip title="Click to convert currency">
              <Button
                onClick={convertCurrency}
                sx={{
      
                  width: { xs: "30%", sm: "30%", md: "30%" },
                  color: "#ff7e08",
                  border: "2px solid #e8e8e8",
                  fontSize: { xs: "10px", sm: "10px", md: "12px" },
                  textTransform: "none",
                
                }}
              >
                Convert to {currency === "INR" ? "USD" : "INR"}
              </Button>
            </Tooltip>
          </Box>
        </Box>
        <Box className="flex align-center gap-2 mt-md">
   
            <Box sx={{ flex: 1 }}>
              <CommonButton
                handleclickquery={handleBookNowClick}
                buttonname={"Book Now"}
                style={"200px"}
                tooltiptitle ={"Book Now"}
              />
            </Box>
      
          <Tooltip title="Customize your Tour">
            <Button
              onClick={handleRedirect}
              sx={{
                flex: 1,
                fontWeight: "bold",
                border: "2px solid",
                fontSize: { xs: "10px", sm: "15px" },
                marginLeft: { xs: "8px", sm: "16px" },
              }}
            >
              Customize Tour
            </Button>
          </Tooltip>
        </Box>
      </Box>
 
    </Box>
  );
};
