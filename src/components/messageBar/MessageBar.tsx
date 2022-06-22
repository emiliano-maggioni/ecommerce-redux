import ButtonDefault from "components/button/ButtonDefault";
import classes from "./MessageBar.module.scss";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const MessageBar = () => {

  return (
      <div className={classes.container}>
        <div>
          <span className={classes.text}>start selling your products or buy them from anywhere!</span>
          <CloseRoundedIcon />
        </div>
      </div>
  );
}

export default MessageBar;
