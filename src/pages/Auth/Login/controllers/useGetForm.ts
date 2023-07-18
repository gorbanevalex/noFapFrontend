import { yupResolver } from "@hookform/resolvers/yup";
import makeRequest from "axiosConfig";
import i18n from "i18nConfig";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { setUserData, setUserToken } from "storage/userStorage";
import { UserLogin } from "types";
import { ApiRoute } from "utils/constant";
import { loginFormResolver } from "validation";

const initialStateForm: UserLogin = {
  login: "",
  password: "",
};

export const useGetForm = () => {
  const { t } = i18n;
  const [serverErrorMessage, setServerErrorMessage] = useState<null | string>(
    null
  );
  const [serverError, setServerError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm({
    defaultValues: {
      ...initialStateForm,
    },
    mode: "onChange",
    resolver: yupResolver(loginFormResolver(t)),
  });

  const onSubmit = (data: UserLogin) => {
    setIsLoading(true);
    makeRequest
      .post(ApiRoute.LOGIN, { ...data })
      .then((res) => {
        setUserData(res.data.user);
        setUserToken(res.data.token);
        setIsLoading(false);
      })
      .catch((error) => {
        setServerErrorMessage(error.response.data.msg);
        setServerError(true);
        setIsLoading(false);
      });
  };

  const onChangeForm = () => {
    if (serverErrorMessage) {
      setServerErrorMessage(null);
      setServerError(false);
    }
  };

  return {
    methods,
    onSubmit,
    onChangeForm,
    serverErrorMessage,
    serverError,
    isLoading,
  };
};
