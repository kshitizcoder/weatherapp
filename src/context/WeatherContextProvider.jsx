import React, { useEffect, useState } from "react";
import weatherContext from "./weatherContext";
import axios from "axios";
import { Base_Url } from "./api";
const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("kathmandu");
  const handleWeartherData = async () => {
    try {
      setIsLoading(true);
      const { data: response } = await axios.get(
        `${Base_Url}&q=${query}&aqi=no`
      );
      setWeather(response);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    handleWeartherData();
  }, [query]);
  return (
    <weatherContext.Provider value={{ weather, setQuery, isLoading, isError }}>
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherContextProvider;
