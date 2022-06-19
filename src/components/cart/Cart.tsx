import React, { useContext } from 'react'
import classes from "./Cart.module.scss";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Context } from "contexts/Context";
import Modal from "components/modal/Modal";

const Cart = (props:any) => {
  //const defcontext = useContext(Context);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (<>
    <div className={classes.container} onClick={() => handleClickOpen()}  >
      CART 
      {/* {defcontext.cart?.length} */}
      <ShoppingCartIcon />
    </div>
    <Modal open={open} onClose={handleClose} 
    // cart={defcontext.cart} 
    />
  </>
  );
}

export default Cart;
