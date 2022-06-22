import { createSlice, configureStore, PayloadAction  } from '@reduxjs/toolkit';
import { getAPI, postAPI } from 'utility/callsAPI';
import { productInfo, defState } from 'utility/types';


export const initialState: defState = {
  products: null,
  cart: [],
  searchString: "",
}

// Slice
const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductInfo: (state, action) =>  {
      state.products = action.payload;
    },
    cartAdded: (state, action) =>  {
      state.cart = [...state.cart,action.payload];
    },
  },
});

export default slice.reducer

// Actions
const { getProductInfo, cartAdded } = slice.actions

export const getProductData = () => async (dispatch:any) => {
  try {
    const res:any = await getAPI("articleData.json");
    let prodInfo:productInfo | null = null;

    if(res?.success){
      prodInfo = res.response;      
    }

    dispatch(getProductInfo(prodInfo));
  } catch (e:any) {
    return console.error(e.message);
  }
}
export const addToCart = (dataProd:any) => async (dispatch:any) => {
  try {
    dispatch(cartAdded(dataProd));
  } catch (e:any) {
    return console.error(e.message);
  }
}
  