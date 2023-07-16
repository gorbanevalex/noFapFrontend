import { FormProvider } from "react-hook-form";
import { TextField } from "@mui/material";
import i18n from "i18n";
import { useStyles } from "./Registration.style";
import { useGetForm } from "./controllers/useGetForm";

const Registration = () => {
  const classes = useStyles();
  const { t } = i18n;

  const { methods, onSubmit } = useGetForm();

  const {
    formState: { isDirty, errors },
    register,
    handleSubmit,
  } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <TextField
          {...register("name")}
          label={t("auth.name")}
          helperText={errors.name?.message}
          error={!!errors.name}
        />
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
    </FormProvider>
  );
};

export default Registration;
