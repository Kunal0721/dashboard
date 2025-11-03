import React, { useEffect, useState } from "react";
import { csv, scaleLinear } from "d3";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const geoUrl = "/features.json";

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(["#cfdfea", "#cfdfea"]);

const MapChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/vulnerability.csv`).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <>
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147,
        }}
        className="mt-6"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const d = data.find((s) => s.ISO3 === geo.id);
              const tooltipText = `${geo.properties.name} : ${
                d ? d["2017"] : "N/A"
              }`;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d["2017"]) : "#F5F4F6"}
                  data-tooltip-id="map-tooltip"
                  data-tooltip-content={tooltipText}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#dbeafe", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>


      <Tooltip id="map-tooltip" />
    </>
  );
};

export default MapChart;
