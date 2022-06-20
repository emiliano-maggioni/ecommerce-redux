import React, { useState, useEffect} from 'react'
import classes from "./HomeView.module.scss";
import Loader from 'components/loader/Loader';
import ProductInfo from './components/productInfo/ProductInfo';

const HomeView = () => {
  let prodInfo = {
    title:"The Atelier Tailored Coat",
    price:"$499.00",
    availability :"n stock",
    productcode:"#4657",
    tags:"acascascascasc",
    description:"Sleek, polished, and boasting an impeccably modern fit, this blue, 2-button Lazio suit features a notch lapel, flap pockets, and accompanying flat front trousers—all in pure wool by Vitale Barberis Canonico.",
  
  }
  return (
     <section className={classes.container} >     
          <div  className={classes.carouselContainer}>
            <img src="/carousel.jpg" alt="" />
          </div>
          <ProductInfo info={prodInfo} />
     </section>
  );
}

export default HomeView;