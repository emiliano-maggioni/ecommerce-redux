import Cart from 'components/cart/Cart';
import classes from "./Menu.module.scss";

const Menu = () => {
  return (
    <section className={classes.container}>
      <Cart />
      <input className={classes.menuToggle} id="menu-toggle" type="checkbox" />
      <label className={classes.menuButtonContainer} htmlFor="menu-toggle">
        <div className={classes.menuButton}></div>
      </label>
      <ul className={classes.menu}>
        <li>HOME</li>
        <li>MEN</li>
        <li>WOMEN</li>
        <li>LOOKBOOK</li>
        <li>ABOUT</li>
        <li>BLOG</li>
      </ul>
    </section>
  );
}

export default Menu;
