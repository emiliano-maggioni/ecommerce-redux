import ButtonCart from "components/buttonCart/ButtonCart";
import Menu from "components/menu/Menu";
import classes from "./Header.module.scss";
import Modal from "components/modal/Modal";
import { useSelector } from 'react-redux';
import { useState } from "react";

const Header = () => {
  const cart = useSelector((state: any) => state.mainReducer.cart);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (<>   
    <header className={classes.container} >
      <div className={classes.topBar}>
        <img src="/logo.png" />
        <ButtonCart  text="CART" cart={cart} onClick={() => handleClickOpen()}  />
      </div>      
      <Menu />
    </header>
    <Modal open={open} onClose={handleClose} cart={cart}  />
    </>
  );
}

export default Header;
