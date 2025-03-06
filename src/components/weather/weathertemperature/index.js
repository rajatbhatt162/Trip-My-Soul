"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Card, CardContent, Divider } from '@mui/material';
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import Icon from '@mdi/react';
const WeatherTemperature = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = '39a570a7f18ae2d22fb9fdc5fc158d09'; // Replace with your actual API key
  const city = 'Auli';

  const getRainDescription = (rainVolume) => {
    if (rainVolume > 10) {
      return 'Heavy rain';
    } else if (rainVolume > 2.5) {
      return 'Moderate rain';
    } else if (rainVolume > 0) {
      return 'Light rain';
    } else {
      return 'No rain';
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(url);
      
        if (response.data && response.data.main && response.data.wind) {
            // console.log(response.data)
          const { temp } = response.data.main;
          const { speed } = response.data.wind;
          const { rain } = response.data;

          setWeatherData({
            temperature: temp,
            windSpeed: speed,
            rain: rain ? rain['1h'] : 0, // Rain volume for the last hour
            rainDescription: getRainDescription(rain ? rain['1h'] : 0),
            lastUpdated: new Date(response.data.dt * 1000).toLocaleTimeString(),
          });
          setError(null); // Clear previous errors if any
        } else {
          throw new Error('Invalid data received from API');
        }
      } catch (err) {
        setError(`Error fetching weather data: ${err.message}`);
        console.error('Error fetching weather data:', err);
      }
    };

    fetchWeather();
  }, [apiKey, city]);

  return (
    <Box>
      <Card sx={{ maxWidth: 250, width: '100%' , boxShadow:" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"  ,paddingLeft:"30px"  }}>
        <CardContent >
          {error ? (
            <Typography color="error">{error}</Typography>
          ) : weatherData ? (
            <>
              <Typography  variant="h5" sx={{fontSize:"18px" ,display:"flex" , paddingTop:"20px"  , alignItems:"center"}} component="div" gutterBottom>
              <PlaceOutlinedIcon
          sx={{ color: "#006FFF", fontSize: { xs: "17px", md: "25px" } }}
        />{city}{" "}(uttarakhand)
              </Typography>
        
              <Typography variant="h6" component="div"  sx={{fontSize:"18px" ,display:"flex"  , alignItems:"center"}}  >
         < DeviceThermostatIcon     sx={{ color: "#006FFF", fontSize: { xs: "17px", md: "25px" } }}/> {weatherData.temperature}°C
              </Typography>
              {/* <Typography variant="body1" sx={{textAlign:"center"}} >
                Wind Speed: {weatherData.windSpeed} m/s
              </Typography>
              <Typography variant="body1" sx={{textAlign:"center"}}>
                Rain (last hour): {weatherData.rain} mm
              </Typography>
           
              <Typography variant="caption" color="textSecondary" sx={{fontSize:"18px" ,display:"flex" , justifyContent:'center' ,textAlign:'center', paddingTop:"20px" }}>
                Last Updated: {weatherData.lastUpdated}
              </Typography> */}
            </>
          ) : (
            <Typography>Fetching weather data...</Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default WeatherTemperature;
