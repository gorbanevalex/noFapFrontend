import * as yup from "yup";

export const registerFormResolver = (t: any) =>
  yup.object().shape({
    name: yup.string().required(t("yup.requiredField")),
    login: yup.string().required(t("yup.requiredField")),
    password: yup
      .string()
      .required(t("yup.requiredField"))
      .min(8, t("yup.passwordLength")),
  });
