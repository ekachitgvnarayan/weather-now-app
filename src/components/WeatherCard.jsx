import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import GrainIcon from "@mui/icons-material/Grain";

import getWeatherDetails from "../utils/weatherCodes";

// map string names -> actual icons
const iconMap = {
  WbSunnyIcon: <WbSunnyIcon color="warning" fontSize="large" />,
  CloudIcon: <CloudIcon color="action" fontSize="large" />,
  AcUnitIcon: <AcUnitIcon color="primary" fontSize="large" />,
  ThunderstormIcon: <ThunderstormIcon color="secondary" fontSize="large" />,
  GrainIcon: <GrainIcon color="action" fontSize="large" />,
};

// helper to convert °C -> °F when needed
const convertTemp = (temp, unit) =>
  unit === "F" ? (temp * 9) / 5 + 32 : temp;

const WeatherCard = ({ city, current, unit = "C" }) => {
  if (!current) return null;

  const details = getWeatherDetails(current.weather_code);
  const temp = convertTemp(current.temperature_2m, unit);

  return (
    <Card sx={{ maxWidth: 500, margin: "20px auto", padding: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Weather in {city}
        </Typography>

        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>{iconMap[details.icon]}</Grid>
          <Grid item>
            <Typography variant="h4">
              {temp.toFixed(1)}°{unit}
            </Typography>
            <Typography>{details.text}</Typography>
          </Grid>
        </Grid>

        <Grid container justifyContent="space-around" mt={2}>
          <Typography>
            <OpacityIcon fontSize="small" /> {current.precipitation} mm
          </Typography>
          <Typography>
            <AirIcon fontSize="small" /> {current.wind_speed_10m} km/h
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
