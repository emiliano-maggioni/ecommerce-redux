import React from 'react'
import classes from "./Modal.module.scss";
import Dialog from '@mui/material/Dialog';
import Grow from "@mui/material/Grow";
import CloseIcon from "@mui/icons-material/Close";
import { CartElement } from 'utility/types';

const Modal = (props:any) => {

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="form-dialog-title"
      TransitionComponent={Grow}
      maxWidth={false}
    >
      <div className={classes.container} >
        <h2>CART  <CloseIcon onClick={() => props.onClose()} /></h2>
        {(props.cart?.length > 0) ? (<ul>
          {props.cart.map((el:CartElement,index:any)=> <li key={index} ><strong>Color:</strong> {el.color} - <strong>Size:</strong> {el.size} - <strong>Quantity:</strong> {el.quantity}</li>)}
          </ul>)
          : <p>Your cart is empty</p>}
      </div>
    </Dialog>
  );
}

export default Modal;
