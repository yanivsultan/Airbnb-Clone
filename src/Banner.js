import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Banner.css";
import Search from "./Search"; 
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"

import { DateRangePicker } from "react-date-range"

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='banner'>
      <div className='banner__search'>
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          varient='outlined'
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className='banner__info'>
        <h1>Get out and strech your imagination</h1>
        <h5>
          Plan a different kind of gateaway to cover the hidden gems near you.
        </h5>
        <Button varient='outlined'>Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
