import React, { useState, useEffect } from 'react'
import classes from "./HomeView.module.scss";
import Loader from 'components/loader/Loader';
import ProductInfo from './components/productInfo/ProductInfo';
import { useDispatch, useSelector } from 'react-redux';
import { getProductData } from 'store/products';
import CarouselBase from 'components/carousel/CarouselBase';

const HomeView = () => {
  const prodInfo = useSelector((state: any) => state.mainReducer.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(getProductData());
  }, []);
  
  return (
    <section className={classes.container} >
      {(prodInfo) ? (<>
          <div className={classes.carouselContainer}>
            {/* <img src="/carousel.jpg" alt="" /> */} 
           <CarouselBase images={prodInfo.urlImages} />
          </div>
          <ProductInfo info={prodInfo} />
        </>)
        : <Loader />}

    </section>
  );
}

export default HomeView;