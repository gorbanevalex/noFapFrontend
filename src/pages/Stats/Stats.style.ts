import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  stack: {
    width: "100%",
    alignItems: "center",
    "& .MuiPaper-root": {
      width: "100%",
    },
  },
  box: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
    overflowX: "hidden",
    backgroundColor: "#f2f2f2",
  },
}));