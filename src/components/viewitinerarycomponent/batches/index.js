

"use client";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Typography, Chip, Button, Tooltip } from "@mui/material";
import { CommonButton } from "@/components/commonbutton";
import React, { useState, useEffect } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(month, selectedMonth, theme) {
  return {
    fontWeight:
      selectedMonth === month
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

const Batches = ({ batchstart, months, trekID, travelprice }) => {
  const theme = useTheme();
  const router = useRouter();
  const pricePerPerson =
    typeof travelprice === "object" ? travelprice.priceperperson : travelprice;

  const [currency, setCurrency] = useState("INR");
  const [amount, setAmount] = useState(pricePerPerson);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [showError, setShowError] = useState(false); // Error state

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

  const handleRedirect = () => {
    router.push("/customizeyourtrip");
  };

  const handleChange = (event) => {
    setSelectedMonth(event.target.value);
    setSelectedBatch(null);
    setShowError(false); // Reset error when selecting month
  };

  const handleBatchSelect = (batch) => {
    setSelectedBatch(batch);
    setShowError(false); // Reset error when batch is selected
  };

  const handleBookNowClick = () => {
    if (selectedBatch && selectedMonth) {
      router.push(
        `/payment/${trekID}?month=${selectedMonth}&batch=${encodeURIComponent(
          JSON.stringify(selectedBatch)
        )}`
      );
    } else {
      setShowError(true); // Show error if no batch is selected
    }
  };

  const getStatusChip = (status) => {
    let color;
    let backgroundColor;
    let label;

    switch (status) {
      case "Open":
        color = "white";
        backgroundColor = "#FF7A00";
        label = "Open";
        break;
      case "Close":
        color = "white";
        backgroundColor = "#FFCCB3";
        label = "Closed";
        break;
      case "Full":
        color = "#FF7A00";
        backgroundColor = "transparent";
        label = "Full";
        break;
      default:
        color = "#000";
        backgroundColor = "transparent";
        label = status;
    }

    return (
      <Chip
        label={label}
        sx={{
          height: 25,
          width: 80,
          fontSize: "0.875rem",
          backgroundColor: backgroundColor,
          color: color,
          border: `1px solid ${color}`,
        }}
      />
    );
  };

  const renderbatchstart = (selectedMonth) => {
    const trips = batchstart[selectedMonth] || [];
    return trips.length ? (
      trips.map((trip, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            borderBottom: "1px solid #ddd",
            borderRadius: "10px",
            cursor: "pointer",
            backgroundColor: selectedBatch === trip ? "#FF7A00" : "transparent",
            "&:hover": {
              backgroundColor: "#FF7A00",
            },
          }}
          onClick={() => handleBatchSelect(trip)}
        >
          <Typography>{`${trip.startDate} - ${trip.endDate}`}</Typography>
          <Box>{getStatusChip(trip.status)}</Box>
        </Box>
      ))
    ) : (
      <Typography>No trips available</Typography>
    );
  };

  return (
    <Box>
      <Box
        sx={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        <Box sx={{ borderBottom: "1px solid #fdf6ca", paddingBottom: "10px" }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "15px", sm: "20px" },
              marginBottom: "10px",
            }}
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

        <Box sx={{ marginTop: "20px" }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "15px", sm: "20px" },
              marginBottom: "10px",
            }}
            variant="h4"
          >
            Batches
          </Typography>
        </Box>

        {/* Month and Batch Selection */}
        <FormControl sx={{ width: "100%", marginTop: 3 }}>
          <InputLabel id="demo-single-month-label">Month</InputLabel>
          <Select
            labelId="demo-single-month-label"
            id="demo-single-month"
            value={selectedMonth}
            onChange={handleChange}
            input={<OutlinedInput label="Month" />}
            MenuProps={MenuProps}
          >
            {months.length > 0 ? (
              months.map((month) => (
                <MenuItem
                  key={month}
                  value={month}
                  style={getStyles(month, selectedMonth, theme)}
                >
                  {month}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>No data available</MenuItem>
            )}
          </Select>
        </FormControl>

        {selectedMonth && (
          <Box mt={2} mb={5}>
            <Typography variant="h5">Upcoming Batches</Typography>
            {renderbatchstart(selectedMonth)}
          </Box>
        )}

        {/* Book Now */}
        <Box className="flex align-center gap-2 mt-xl">
          <Box sx={{ flex: 1 }}>
            <CommonButton
              handleclickquery={handleBookNowClick}
              buttonname={"Book Now"}
              style={"200px"}
              tooltiptitle={"Book Now"}
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

        {/* Error message */}
        {showError && (
          <Typography
            sx={{
              color: "red",
              marginTop: "10px",
              fontSize: "17px",
            }}
          >
            Please select a batch to proceed.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Batches;