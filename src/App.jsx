import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import Loader from "./components/Loader";
import ErrorAlert from "./components/ErrorAlert";
import { getCoordinates, getWeatherData } from "./services/weatherApi";

import {
  Typography,
  Box,
  Switch,
  FormControlLabel,
  CssBaseline,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const App = () => {
  // Weather states
  const [current, setCurrent] = useState(null);
  const [daily, setDaily] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Toggles
  const [unit, setUnit] = useState("C");
  const [darkMode, setDarkMode] = useState(false);

  // Theme for dark/light mode
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  // Search Handler
  const handleSearch = async (cityName) => {
    try {
      setLoading(true);
      setError("");
      setCurrent(null);
      setDaily(null);
      setCity(cityName);

      const { latitude, longitude } = await getCoordinates(cityName);
      const weatherData = await getWeatherData(latitude, longitude);

      setCurrent(weatherData.current);
      setDaily(weatherData.daily);
    } catch (err) {
      setError(err.message || "Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  // Unit toggle
  const toggleUnit = () => {
    setUnit(unit === "C" ? "F" : "C");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box textAlign="center" mt={4}>
        <Typography variant="h4" gutterBottom>
          Weather App
        </Typography>

        {/* Toggles Section */}
        <Box display="flex" justifyContent="center" gap={4} mb={2}>
          <FormControlLabel
            control={<Switch checked={unit === "F"} onChange={toggleUnit} />}
            label={unit === "C" ? "°C" : "°F"}
          />
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            }
            label={darkMode ? "Dark" : "Light"}
          />
        </Box>

        <SearchBar onSearch={handleSearch} />
        {loading && <Loader />}
        {error && <ErrorAlert message={error} />}
        {current && <WeatherCard city={city} current={current} unit={unit} />}
        {daily && <ForecastList daily={daily} unit={unit} />}
      </Box>
    </ThemeProvider>
  );
};

export default App;
