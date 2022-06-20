import ButtonDefault from "components/button/ButtonDefault";
import classes from "./Disclaimer.module.scss";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Disclaimer = () => {

  return (
      <div className={classes.container}>
        <div>
          <span className={classes.text}>start selling your products or buy them from anywhere!</span>
          <CloseRoundedIcon />
        </div>
      </div>
  );
}

export default Disclaimer;
