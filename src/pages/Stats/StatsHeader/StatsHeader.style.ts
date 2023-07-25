import { makeStyles } from "@mui/styles";
import { theme } from "themes/theme";

export const useStyles = makeStyles(() => ({
  customCard: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
    padding: "1em",
    position: "relative",
    top: 0,
    marginTop: "1.5em",
    "& .MuiButton-root": {
      width: "max-content",
      backgroundColor: "#fff",
      zIndex: "1",
      textTransform: "unset",
      color: "#000",
      boxShadow: "none",
    },
    "& .MuiButton-root:hover": {
      backgroundColor: "#000",
      color: "#fff",
    },
  },
  cardTitle: {
    zIndex: "1",
    color: "#fff",
    textShadow: `2px 2px 10px ${theme.palette.primary.main}, 2px 2px 10px ${theme.palette.primary.main}, 2px 2px 10px ${theme.palette.primary.main}, 2px 2px 10px ${theme.palette.primary.main}`,
  },
  cardTime: {
    width: "auto",
    maxWidth: "max-content",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: `${theme.palette.grey[50]}90`,
    borderRadius: 15,
    padding: "8px",
    gap: "8px",
    zIndex: "1",
  },
  clockIcon: {
    width: 30,
    height: 30,
  },
  cardImage: {
    width: "170px",
    height: "auto",
    position: "absolute",
    right: "10px",
    bottom: "0px",
    zIndex: "0",
  },
}));
