import React from "react";
import Listings from "./../components/Listings";
import Listing from "./../components/Listing";
import ShowMap from "../components/ShowMap";

const Home = () => {
  return (
    <div>
      <Listings>
        <Listing />
      </Listings>
      <ShowMap />
    </div>
  );
};

export default Home;
