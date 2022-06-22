import ButtonDefault from "components/button/ButtonDefault";
import classes from "./ProductInfo.module.scss";
import FieldWrapper from "components/fieldWrapper/FieldWrapper";
import { useForm } from "react-hook-form";
import { FormControl, Select, MenuItem, FormHelperText, TextField } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CartElement, productInfo } from "utility/types";
import { addToCart } from "store/products";
import { useDispatch } from "react-redux";

const ProductInfo = (props: any) => {
  const dispatch = useDispatch();
  const { code, custom, description, isHoganByYou, largeSizeDress, name, price, salablestores, sizeType, stock, tag, additionalInfo, sizes, colorSizeOptions }: productInfo = props.info;

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onSubmit",
  });

  // const addProductToCart = (data: CartElement) => {    
  //     dispatch<any>(addToCart(data));
  // };
  

  const onSubmit = (data: any) => {
    console.log("data:", data);
    if (data) {
      dispatch<any>(addToCart(data));           
    }
  }
  const colorOptions = colorSizeOptions.split(",");
  const sizesOptions = sizes.split(",");
 
  return (
    <article className={classes.container}>
      <h2>{name}</h2>
      <span className={classes.price}>{price}€</span>
      <p className={classes.properties}><span className={classes.label}>Availability:</span><span>{stock.stockLevelStatus}</span></p>
      <p className={classes.properties}><span className={classes.label}>Product Code:</span><span>{code}</span></p>
      <p className={classes.properties}><span className={classes.label}>Tags:</span><span>{tag}</span></p>
      <p className={classes.description}>{description}</p>


      <ul>
        {Object.keys(additionalInfo).map((keyName, i) => (
          <li key={i}>{additionalInfo[keyName]}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.fieldsRow}>
          <FieldWrapper title="COLOR"  >
            <FormControl>
              <Select
                {...register("color", { required: "Select color" })}
                className={classes.input}
                size="small"
                displayEmpty
                label=""
                defaultValue=""
              >
                <MenuItem key="" value="" >Select color</MenuItem>
                {colorOptions.map((el, index) => <MenuItem key={el} value={el}>{el}</MenuItem>)}
              </Select>
              <FormHelperText>{!!errors.color ? errors.color.message : null}</FormHelperText>
            </FormControl>
          </FieldWrapper>
          <FieldWrapper title="SIZE" >
            <FormControl>
              <Select
                {...register("size", { required: "Select size" })}
                className={classes.input}
                size="small"
                displayEmpty
                label=""
                defaultValue=""
              >
                <MenuItem key="" value="" >Select</MenuItem>
                {sizesOptions.map((el, index) => <MenuItem key={el} value={el}>{el}</MenuItem>)}
              </Select>
              <FormHelperText>{!!errors.size ? errors.size.message : null}</FormHelperText>
            </FormControl>
          </FieldWrapper>
          <FieldWrapper title="QTY"  >
            <FormControl>
              <TextField
                {...register("quantity", { required: "Select qty" })}
                id="outlined-number"
                label=""
                size="small"
                type="number"
                className={classes.input} 
                inputProps={{ min: 1, max: stock.stockLevelAvailable}} 
              />
              <FormHelperText>{!!errors.quantity ? errors.quantity.message : null}</FormHelperText>
            </FormControl>
          </FieldWrapper>
        </div>
        <div className={classes.btContainer}>
          <ButtonDefault text="ADD TO CART" variant="black" type="submit" />
          <ButtonDefault text="ADD TO WISHLIST" type="button"  ><FavoriteBorderIcon /></ButtonDefault>
        </div>
      </form>

    </article>
  ); 
}

export default ProductInfo;
