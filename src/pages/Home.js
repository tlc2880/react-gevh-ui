import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedHouses from "../components/FeaturedHouses";
const home = () => {
   return (
    <>
      <Hero>
        <Banner
          title="Great Vacation Homes"
          subtitle="large homes starting at $200"
        >
          <Link to="/houses" className="btn-primary">
            our houses
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedHouses />
    </>
  );
};

export default home;
