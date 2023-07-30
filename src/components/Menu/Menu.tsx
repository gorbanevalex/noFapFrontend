import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useStyles } from "./Menu.style";
import { Link, useLocation } from "react-router-dom";
import { bottomMenuItems } from "utils/constant";

const Menu = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const currentMainPath = pathname.split("/");

  return (
    <BottomNavigation className={classes.container} value={currentMainPath[1]}>
      {bottomMenuItems.map((item) => (
        <BottomNavigationAction
          key={item.label}
          label={item.label}
          icon={item.icon}
          value={item.value}
          to={item.value}
          component={Link}
        />
      ))}
    </BottomNavigation>
  );
};

export default Menu;
