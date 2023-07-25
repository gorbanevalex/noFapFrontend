import { ReactNode } from "react";
import { useStyles } from "./AuthContainer.style";
import { Container } from "@mui/material";

type Props = {
  children: ReactNode;
};

const AuthContainer = ({ children }:Props) => {
    const classes = useStyles()
  return <Container className={classes.container}>{children}</Container>;
};

export default AuthContainer;
