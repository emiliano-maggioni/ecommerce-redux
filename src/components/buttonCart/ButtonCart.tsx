import classes from "./ButtonCart.module.scss";

const ButtonCart = (props:any) => {
  return (
    <button  
        className={`${classes.container} ${(props.variant) && classes[props.variant!]} `}  
        onClick={props.onClick} {...props}
        >{props.text} ({props.cart.length})
    </button>
  );
}

export default ButtonCart;
