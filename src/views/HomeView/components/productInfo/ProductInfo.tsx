import ButtonDefault from "components/button/ButtonDefault";
import classes from "./ProductInfo.module.scss";
import FieldWrapper from "components/fieldWrapper/FieldWrapper";
import { useForm } from "react-hook-form";
import { FormControl, Select, MenuItem, FormHelperText } from "@mui/material";

const ProductInfo = (props: any) => {

  const { register, handleSubmit, formState: { errors }, watch, } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data: any) => {
    console.log("data:", data);
    if (data) {
      // saveOrder(data);      
    }
  }
  const defValues = [{ id: 1, value: "Valore 1" }, { id: 2, value: "Valore 2" }, { id: 3, value: "Valore 3" }];

  return (
    <article className={classes.container}>
      <h2>{props.info.title}</h2>
      <span className={classes.price}>{props.info.price}</span>
      <p className={classes.properties}><span className={classes.label}>Availability:</span><span>{props.info.price}</span></p>
      <p className={classes.properties}><span className={classes.label}>Product Code:</span><span>{props.info.price}</span></p>
      <p className={classes.properties}><span className={classes.label}>Tags:</span><span>{props.info.price}</span></p>
      <p className={classes.description}>{props.info.description}</p>
      <ul>
        <li>Dark blue suit for a tone-on-tone look</li>
        <li>Regular fit</li>
        <li>100% Cotton</li>
        <li>Free shipping with 4 days delivery</li>
      </ul>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.fieldsRow}>
        <FieldWrapper title="COLOR" required={true} >
            <FormControl>
              <Select
                {...register("color", { required: "Select color" })}
                className={classes.input}
                size="small"
                displayEmpty
                label=""
              >
                <MenuItem key="" value="" >Select</MenuItem>
                {defValues.map((el, index) => <MenuItem key={el.id} value={el.id}>{el.value}</MenuItem>)}
              </Select>
              <FormHelperText>{!!errors.color ? errors.color.message : null}</FormHelperText>
            </FormControl>
          </FieldWrapper>
          <FieldWrapper title="SIZE" required={true} >
            <FormControl>
              <Select
                {...register("color", { required: "Select color" })}
                className={classes.input}
                size="small"
                displayEmpty
                label=""
              >
                <MenuItem key="" value="" >Select</MenuItem>
                {defValues.map((el, index) => <MenuItem key={el.id} value={el.id}>{el.value}</MenuItem>)}
              </Select>
              <FormHelperText>{!!errors.color ? errors.color.message : null}</FormHelperText>
            </FormControl>
          </FieldWrapper>
          <FieldWrapper title="QTY" required={true} >
            <FormControl>
              <Select
                {...register("color", { required: "Select color" })}
                className={classes.input}
                size="small"
                displayEmpty
                label=""
              >
                <MenuItem key="" value="" >Select</MenuItem>
                {defValues.map((el, index) => <MenuItem key={el.id} value={el.id}>{el.value}</MenuItem>)}
              </Select>
              <FormHelperText>{!!errors.color ? errors.color.message : null}</FormHelperText>
            </FormControl>
          </FieldWrapper>
        </div>
        <div className={classes.btContainer}>
        <ButtonDefault  text="ADD TO WISHLIST"  />
        <ButtonDefault  text="ADD TO WISHLIST"  />
        </div>
      </form>

    </article>
  );
}

export default ProductInfo;
