import { FormProvider } from "react-hook-form";
import {
  Typography,
  TextField,
  Link,
  Snackbar,
  IconButton,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import i18n from "i18nConfig";
import { useStyles } from "./Login.style";
import { useGetForm } from "./controllers/useGetForm";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowForward, Close } from "@mui/icons-material";

const Login = () => {
  const classes = useStyles();
  const { t } = i18n;

  const [isOpenErrorSnackbar, setIsOpenErrorSnackbar] = useState(false);
  const {
    methods,
    onSubmit,
    onChangeForm,
    serverErrorMessage,
    serverError,
    isLoading,
  } = useGetForm();

  useEffect(() => {
    if (serverErrorMessage) {
      setIsOpenErrorSnackbar(true);
    }
  }, [serverErrorMessage]);

  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = methods;

  const errorSnackbarAction = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={() => setIsOpenErrorSnackbar(false)}
    >
      <Close />
    </IconButton>
  );

  return (
    <FormProvider {...methods}>
      <form
        className={classes.form}
        onSubmit={handleSubmit((data) => onSubmit(data))}
        onChange={onChangeForm}
      >
        <div className={classes.title}>
          <Typography variant="h1" component="h2">
            {t("loginPage.title")}
          </Typography>
          <Typography variant="subtitle2" component="p">
            {t("loginPage.subtitle")}
          </Typography>
        </div>
        <TextField
          {...register("login")}
          label={t("auth.login")}
          helperText={errors.login?.message}
          error={!!errors.login}
          className={classes.textField}
          variant="standard"
        />
        <TextField
          {...register("password")}
          label={t("auth.password")}
          helperText={errors.password?.message}
          error={!!errors.password}
          className={classes.textField}
          type="password"
          variant="standard"
        />
        <LoadingButton
          type="submit"
          size="large"
          variant="contained"
          loading={isLoading}
          loadingPosition="end"
          endIcon={<ArrowForward />}
          disabled={!isDirty || !isValid || serverError}
          className={classes.button}
        >
          {t("loginPage.signIn")}
        </LoadingButton>
        <Typography className={classes.bottomText} component="p">
          {t("loginPage.account") + " "}
          <Link component={RouterLink} to="/registration" underline="none">
            {t("registrationPage.signUp")}
          </Link>
        </Typography>
      </form>
      <Snackbar
        open={isOpenErrorSnackbar}
        autoHideDuration={5000}
        onClose={() => {
          setIsOpenErrorSnackbar(false);
        }}
        message={serverErrorMessage}
        action={errorSnackbarAction}
      />
    </FormProvider>
  );
};

export default Login;
