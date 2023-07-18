import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  form: {
    position: "relative",
    top: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5em",
  },
  title: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  textField: {
    width: "100%",
  },
  button: {
    alignSelf: "end"
  },
  bottomText: {
    position: "absolute",
    bottom: "1.5em",
    textAlign: "center",
    paddingLeft: "1.5em",
    paddingRight: "1.5em"
  }
}));

