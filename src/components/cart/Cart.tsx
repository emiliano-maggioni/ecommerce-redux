import React, { useState } from 'react'
import classes from "./Cart.module.scss";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Modal from "components/modal/Modal";
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state: any) => state.mainReducer.cart);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (<>
    <div className={classes.container} onClick={() => handleClickOpen()}  >      
      <ShoppingCartOutlinedIcon />({cart.length})
    </div>
    <Modal open={open} onClose={handleClose} cart={cart}  />
  </>
  );
}

export default Cart;
