import { Card, CardContent, Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import GrainIcon from "@mui/icons-material/Grain";

import  getWeatherDetails from "../utils/weatherCodes.js";

const iconMap = {
  WbSunnyIcon: <WbSunnyIcon color="warning" />,
  CloudIcon: <CloudIcon />,
  AcUnitIcon: <AcUnitIcon color="primary" />,
  ThunderstormIcon: <ThunderstormIcon color="secondary" />,
  GrainIcon: <GrainIcon />,
};

const ForecastCard = ({ day, min, max, code,unit }) => {
  const details = getWeatherDetails(code);
  console.log(details);
  const convertTemp = (temp, unit) =>
  unit === "F" ? (temp * 9) / 5 + 32 : temp;

  return (
    <Card sx={{ width: 120, margin: "10px" }}>
      <CardContent sx={{ textAlign: "center" }}>
        {iconMap[details.icon]}
        <Typography variant="body2">
          {convertTemp(max, unit).toFixed(1)}° / {convertTemp(min, unit).toFixed(1)}°
        </Typography>
        <Typography variant="caption">{day}</Typography>
      </CardContent>
    </Card>
  );
};

export default ForecastCard;
