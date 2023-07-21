import { StepConnector, stepConnectorClasses } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { theme } from "themes/theme";

export const useStyles = makeStyles(() => ({
  box: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    overflowX: "hidden",
    backgroundColor: "#f2f2f2",
  },
  stack: {
    width: "100%",
    alignItems: "center",
    "& .MuiPaper-root": {
      width: "100%",
    },
  },
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
      boxShadow: "none"
    },
    "& .MuiButton-root:hover": {
      backgroundColor: "#000",
      color: "#fff"
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


export const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 18,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#faa233",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#faa233",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));