import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  grid: {
    "& .MuiGrid-root": {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      alignItems: "center",
    },
    "& p": {
      fontSize: "12px",
    },
    "& .MuiTypography-subtitle2": {
      fontSize: "10px",
    },
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    width: "min-content",
    alignItems: "center",
    textAlign: "center",
  },
}));
