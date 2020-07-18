import React from "react";
import defaultImg from "../images/M_7_1.png";
import PropTypes from "prop-types";
import { memo } from "react";
import { Link } from "react-router-dom";
const House = memo(({ house }) => {
  const { name, slug, images, price } = house;
  // console.log(name);
  return (
    <article className="house">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/houses/${slug}`} className="btn-primary house-link">
          features
        </Link>
      </div>
      <p className="house-info">{name}</p>
    </article>
  );
});

House.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default House;
