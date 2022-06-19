import ButtonDefault from "components/button/ButtonDefault";
import classes from "./Disclaimer.module.scss";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Disclaimer = () => {

  return (
      <div className={classes.container}>
        <span>start selling your products or buy them from anywhere!</span>
        <CloseRoundedIcon />
      </div>
  );
}

export default Disclaimer;
