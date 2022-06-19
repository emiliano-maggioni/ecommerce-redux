import ButtonDefault from "components/button/ButtonDefault";
import Menu from "components/menu/Menu";
import classes from "./Header.module.scss";

const Header = () => {

  return (
    <header className={classes.container} >
      <div className={classes.topBar}>
        <img src="/logo.png" />
        <ButtonDefault  text="ADD TO WISHLIST"  />
      </div>      
      <Menu />
    </header>
  );
}

export default Header;
