
const getWeatherDetails = (code) => {
  const mapping = {
    0: { text: "Clear Sky",                      icon: "WbSunnyIcon"  },
    1: { text: "Mainly Clear",                   icon: "WbSunnyIcon"  },
    2: { text: "Partly Cloudy",                  icon: "CloudIcon"    },
    3: { text: "Overcast",                       icon: "CloudIcon"    },
    45: { text: "Fog",                           icon: "GrainIcon"    },
    48: { text: "Depositing Fog",                icon: "GrainIcon"    },
    51: { text: "Light Drizzle",                 icon: "GrainIcon"    },
    53: { text: "Moderate Drizzle",              icon: "GrainIcon"    },
    55: { text: "Dense Drizzle",                 icon: "GrainIcon"    },
    56: { text: "Light Freezing Drizzle",        icon: "GrainIcon"    },
    57: { text: "Dense Freezing Drizzle",        icon: "GrainIcon"    },
    61: { text: "Light Rain",                    icon: "GrainIcon"    },
    63: { text: "Moderate Rain",                 icon: "GrainIcon"    },
    65: { text: "Heavy Rain",                    icon: "GrainIcon"    },
    66: { text: "Light Freezing Rain",           icon: "GrainIcon"    },
    67: { text: "Heavy Freezing Rain",           icon: "GrainIcon"    },
    71: { text: "Slight Snow Fall",              icon: "AcUnitIcon"   },
    73: { text: "Moderate Snow Fall",            icon: "AcUnitIcon"   },
    75: { text: "Heavy Snow Fall",               icon: "AcUnitIcon"   },
    77: { text: "Snow Grains",                   icon: "AcUnitIcon"   },
    80: { text: "Slight Rain showers",           icon: "GrainIcon"    },
    81: { text: "Moderate Rain showers",         icon: "GrainIcon"    },
    82: { text: "Violent Rain showers",          icon: "GrainIcon"    },
    85: { text: "Slight	Snow showers",           icon: "GrainIcon"    },
    86: { text: "Heavy Snow showers",            icon: "GrainIcon"    },
    95: { text: "Moderate Thunderstorm",         icon: "ThunderstormIcon" },
    96: { text: "Thunderstorm with Slight Hail", icon: "ThunderstormIcon" },
    99: { text: "Thunderstorm with Heavy Hail",  icon: "ThunderstormIcon" }
  };

  return mapping[code] || { text: "Unknown", icon: "CloudIcon"};
};

export default getWeatherDetails;