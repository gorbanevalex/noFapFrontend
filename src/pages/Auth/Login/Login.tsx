import { TextField, Typography } from "@mui/material";
import i18n from "i18nConfig";
import { FormProvider } from "react-hook-form";
import { useGetForm } from "./controllers/useGetForm";

const Login = () => {
  const { t } = i18n;

  const { methods, onSubmit, onChangeForm, serverErrorMessage } = useGetForm();
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        onChange={onChangeForm}
      >
        <TextField
          {...register("login")}
          label={t("auth.login")}
          helperText={errors.login?.message}
          error={!!errors.login}
        />
        <TextField
          {...register("password")}
          label={t("auth.password")}
          helperText={errors.password?.message}
          error={!!errors.password}
        />
        <button type="submit" disabled={!isDirty}>
          {t("common.send")}
        </button>
      </form>
      {serverErrorMessage && <Typography>{serverErrorMessage}</Typography>}
    </FormProvider>
  );
};

export default Login;
