import React  from 'react'
import { ButtonBaseProps } from 'utility/types';
import classes from "./ButtonDefault.module.scss";

const ButtonDefault = ({text,onClick,variant,disabled,children, type="button" }:ButtonBaseProps) => {
 
  return (
    <button  
        className={`${classes.container} ${(variant) && classes[variant!]} `}  
        onClick={onClick} 
        type={type}
    >
        {(children) && children} {text}
    </button>
  );
}

export default ButtonDefault;
