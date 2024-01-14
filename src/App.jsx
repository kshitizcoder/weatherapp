import React, { useContext } from "react";
import "./App.css";
import Search from "./compnents/Search";
import Weather from "./compnents/Weather";
import weatherContext from "./context/weatherContext";
const App = () => {
  const { isError } = useContext(weatherContext);

  return isError ? (
    <p className="text-pure text-center text-3xl">something went wrong!!</p>
  ) : (
    <div className="text-4xl text-pure mt-10 px-2">
      <h1 className="text-center bg-primary py-3 lg:w-[50rem] mx-auto rounded-lg">
        Weather App
      </h1>
      <div className="mt-10 px-3 shadow-[0_30px_50px_rgba(0,0,0,0.9)] py-5 lg:w-[70%] lg:mx-auto">
        <Search />
        <Weather />
      </div>
    </div>
  );
};

export default App;
