const layerConfigs = {
  "pop_served":{
    "metric":"Population Served",
    "description":"This metric is the total population living within the service area of a public water system. This data comes from the U.S. Environmental Protection Agency (EPA) Safe Drinking Water Information System.",
    "source":"",
    "paint":{
      'fill-color': [
        "interpolate",
        ["linear"],
        ["get", "pop_served"],
        1000,
        "#174e87",
        10000,
        "#5ca3ea",
        50000,
        "#f7d694",
        100000,
        "#e8aa44",
        1000000,
        "#fb3939"
      ],
      'fill-opacity': ["case", ["boolean", ["feature-state", "hover"], false], 1, 0.5],
    },
  },
  "lead_rate":{
    "metric":"Lead Service Line Rate",
    "description":"This metric is the estimated proportion of water service connections that contain lead. Lead is a toxic material that may contaminate drinking water.",
    "source":"",
    "paint":{
    'fill-color': [
          "interpolate",
          ["linear"],
          ["get", "lead_rate"],
          0,
          "#174e87",
          0.1,
          "#5ca3ea",
          0.2,
          "#f7d694",
          0.3,
          "#e8aa44",
          0.4,
          "#fb3939"
     ],
    'fill-opacity': ["case", ["boolean", ["feature-state", "hover"], false], 1, 0.5],
  },
  },
  "lcr_safety":{
    "metric":"Safety Score",
    "description":"This metric is indicates the amount of time a water system has been in violation of the EPA Lead and Copper Rule's health-based requirements since it has been in effect. This data comes from the U.S. Environmental Protection Agency (EPA) Safe Drinking Water Information System.",
    "source":"",
    "paint":{
    'fill-color': [
          "interpolate",
          ["linear"],
          ["get", "lcr_safety"],
          0,
          "#174e87",
          0.2,
          "#5ca3ea",
          0.4,
          "#f7d694",
          0.6,
          "#e8aa44",
          0.8,
          "#fb3939"
     ],
    'fill-opacity': ["case", ["boolean", ["feature-state", "hover"], false], 1, 0.5],
  },
  },
  "lcr_transp":{
    "metric":"Transparency Score",
    "description":"This metric is indicates the amount of time a water system has been in violation of the EPA Lead and Copper Rule's monitoring and reporting requirements since it has been in effect. This data comes from the U.S. Environmental Protection Agency (EPA) Safe Drinking Water Information System.",
    "source":"",
    "paint":{
      'fill-color': [
          "interpolate",
          ["linear"],
          ["get", "lcr_transp"],
          0,
          "#174e87",
          0.2,
          "#5ca3ea",
          0.4,
          "#f7d694",
          0.6,
          "#e8aa44",
          0.8,
          "#fb3939"
        ],
    'fill-opacity': ["case", ["boolean", ["feature-state", "hover"], false], 1, 0.5],
  },
  },

};
