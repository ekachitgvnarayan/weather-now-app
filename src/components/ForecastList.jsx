import { Box, Typography } from "@mui/material";
import ForecastCard from "./ForecastCard.jsx";

const ForecastList = ({ daily,unit }) => {
    console.log(daily);
  return (
    <Box mt={2}>
      <Typography variant="h6" gutterBottom>
        Daily Forecast
      </Typography>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {daily.time.map((date, index) => (
          <ForecastCard
            key={index}
            day={date}
            min={daily.temperature_2m_min[index]}
            max={daily.temperature_2m_max[index]}
            code={daily.weather_code[index]}
            unit={unit}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ForecastList;
