"use client";
import { Button, Tooltip } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

export const CommonButton = ({
  buttonname,
  route,
  handleclickquery,
  style,
  fontSize,
  tooltiptitle,
}) => {
  const router = useRouter();
  const handleBookNowClick = () => {
    if (route) {
      router.push(route);
    } else {
      handleclickquery();
    }
  };
  return (
    <Tooltip title={tooltiptitle}>
      <Button
        onClick={handleBookNowClick}
        size="small"
        sx={{
          boxShadow:
            " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",

          fontSize: fontSize,
          fontWeight: { xs: 400, sm: 500, md: 500 },
          padding: "8px 15px",
          background: "linear-gradient(93deg, #53b2fe, #065af3)",
          color: "#fff",
          ...(style && { width: style }),
        }}
      >
        {buttonname}
      </Button>
    </Tooltip>
  );
};
