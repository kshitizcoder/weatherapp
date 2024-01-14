import React, { useContext } from "react";
import weatherContext from "../context/weatherContext";
import { RiCelsiusFill } from "react-icons/ri";

const Weather = () => {
  const { weather, isLoading } = useContext(weatherContext);
  if (isLoading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  return (
    <section className="weather">
      <div>
        <div className="md:flex flex-col items-center mt-5">
          <div className="img flex justify-center">
            <img src={weather?.current?.condition?.icon} className="" />
          </div>
          <p className="text-primary ">
            Weather:
            <span className="ms-3 text-pure">
              {" "}
              {weather?.current?.condition?.text}
            </span>
          </p>

          <p className="text-primary ">
            Location:
            <span className="ms-3 text-pure">
              {weather?.location?.name} , {weather?.location?.country}
            </span>
          </p>
        </div>
      </div>
      <div className="full-repor lg:mx-auto  mt-14">
        <div className="md:flex md:justify-between lg:justify-around">
          <div className="">
            <p className="flex text-primary">
              Tempature:
              <span className="ms-3 text-pure flex">
                {weather?.current?.temp_c} <RiCelsiusFill className="ms-1" />
              </span>
            </p>
            <p className="text-primary">
              Gust:
              <span className="ms-3 text-pure">
                {weather?.current?.gust_kph} kph
              </span>
            </p>
            <p className="text-primary">
              Humidity:
              <span className="ms-3 text-pure">
                {weather?.current?.humidity}{" "}
              </span>
            </p>
            <p className="text-primary">
              Wind Degree:
              <span className="ms-3 text-pure">
                {weather?.current?.wind_degree} °
              </span>
            </p>
          </div>

          <div className=" mt-5 lg:mt-0">
            <p className="text-primary">
              Uv:
              <span className="ms-3 text-pure">{weather?.current?.uv} </span>
            </p>{" "}
            <p className="text-primary">
              Wind Speed:
              <span className="ms-3 text-pure">
                {weather?.current?.wind_kph} kph{" "}
              </span>
            </p>{" "}
            <p className="text-primary">
              Wind Direction:
              <span className="ms-3 text-pure">
                {weather?.current?.wind_dir}{" "}
              </span>
            </p>
            <p className="text-primary">
              Pressure:
              <span className="ms-3 text-pure">
                {weather?.current?.pressure_in} in{" "}
              </span>
            </p>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
