import React  from 'react'
import classes from "./ButtonDefault.module.scss";

const ButtonDefault = (props:any) => {
 
  return (
    <button  className={classes.container} onClick={props.onClick} {...props} > {props.text}</button>
  );
}

export default ButtonDefault;
