import React, { useContext, useState } from "react";
import weatherContext from "../context/weatherContext";

const Search = () => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.length > 0) {
      setQuery(city);
    }
  };
  const { setQuery } = useContext(weatherContext);
  return (
    <section className="search py-10">
      <div className="wrapper">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex  justify-center items-center"
        >
          <input
            type="text"
            value={city}
            placeholder="Enter City . . . "
            onChange={(e) => setCity(e.target.value)}
            className="transparent text-pure w-[65%] placeholder:text-[1.7rem] px-2 py-1 lg:w-[40%] lg:placeholder:text-[2.5rem] "
          />
          <button
            className="bg-primary px-7 py-[0.73rem] rounded-tr-[1rem] text-lg  rounded-br-[1rem] lg:px-8  lg:py-[0.73rem]"
            type="sumbit"
          >
            Sumbit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;
