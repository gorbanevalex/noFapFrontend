import { Typography } from "@mui/material";
import { useStyles } from "./Menu.style";

const Menu = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography>менюшка</Typography>
    </div>
  );
};

export default Menu;
