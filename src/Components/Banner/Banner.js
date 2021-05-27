import React from 'react'

import BannerImage from "../../static/banner.jpg"

import './Banner.css'

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <img src={BannerImage} alt="banner" />
    </div>
  );
}

export default Banner
