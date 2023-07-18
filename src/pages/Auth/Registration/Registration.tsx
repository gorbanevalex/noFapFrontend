import { FormProvider } from "react-hook-form";
import { Typography, Button, TextField, Link } from "@mui/material";
import {
  LoadingButton
} from "@mui/lab"
import i18n from "i18nConfig";
import { useStyles } from "./Registration.style";
import { useGetForm } from "./controllers/useGetForm";
import { Link as RouterLink } from "react-router-dom";
import {ArrowForward} from "@mui/icons-material";

const Registration = () => {
  const classes = useStyles();
  const { t } = i18n;

  const { methods, onSubmit, isLoading } = useGetForm();

  const {
    formState: { isDirty, errors, isValid },
    register,
    handleSubmit,
  } = methods;

  return (
    <FormProvider {...methods}>
      <form
        className={classes.form}
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <div className={classes.title}>
          <Typography variant="h1" component="h2">
            {t("registrationPage.title")}
          </Typography>
          <Typography variant="subtitle2" component="p">
            {t("registrationPage.subtitle")}
          </Typography>
        </div>
        <TextField
          {...register("name")}
          label={t("auth.name")}
          helperText={errors.name?.message}
          error={!!errors.name}
          className={classes.textField}
          variant="standard"
        />
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
          disabled={!isDirty || !isValid}
          className={classes.button}
        >
          {t("registrationPage.signUp")}
        </LoadingButton>
        <Typography className={classes.bottomText} component="p">
          {t("registrationPage.account") + " "}
          <Link component={RouterLink} to="/login" underline="none">
            {t("loginPage.signIn")}
          </Link>
        </Typography>
      </form>
    </FormProvider>
  );
};

export default Registration;
