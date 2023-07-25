import { makeStyles } from "@mui/styles";
import { theme } from "themes/theme";

export const useStyles = makeStyles(() => ({
  stack: {
    width: "100%",
    alignItems: "center",
  },
  achievmentList: {
    width: "calc(100% + 30px)",
    padding: "8px 16px",
    marginLeft: "-15px",
  },
  achievmentCard: {
    "& .MuiCard-root": {
      display: "flex",
      width: "120px",
      height: "120px",
      backgroundColor: theme.palette.common.white,
      boxShadow: "0 0 15px 0px rgba(0, 0, 0, 0.10)",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "1em",
      borderRadius: 20,
    },
    "& .MuiSvgIcon-root": {
      width: "50px",
      height: "50px",
      backgroundColor: "#faa23360",
      borderRadius: "50%",
      padding: "5px",
      marginBottom: "10px",
    },
    "& p": {
      fontSize: "12px",
    },
    "& .MuiTypography-subtitle2": {
      fontSize: "10px",
    },
  },
}));
