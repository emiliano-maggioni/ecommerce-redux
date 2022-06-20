import { useEffect, useState } from 'react';
import { FieldWrapperProps } from 'utility/types';
import classes from "./FieldWrapper.module.scss";

const FieldWrapper = ({ title, required = false, children, additionalClass }: FieldWrapperProps) => {

  return (
    <div className={`${classes.container} ${additionalClass || ""}`} > 
      <div className={classes.heading}><strong>{title}</strong> {(required) && <span>*</span>} </div>
      {children}
    </div>
  );
}

export default FieldWrapper;
