import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import makeRequest from "axiosConfig";
import i18n from "i18nConfig";
import { useForm } from "react-hook-form";
import { setUserData, setUserToken } from "storage/userStorage";
import { UserRegistration } from "types";
import { ApiRoute } from "utils/constant";
import { registerFormResolver } from "validation";

const initialStateForm: UserRegistration = {
  name: "",
  login: "",
  password: "",
};

export const useGetForm = () => {
  const { t } = i18n;
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm({
    defaultValues: {
      ...initialStateForm,
    },
    mode: "onChange",
    resolver: yupResolver(registerFormResolver(t)),
  });

  const { setError } = methods;

  const onSubmit = (data: UserRegistration) => {
    const date = new Date();
    setIsLoading(true);
    makeRequest
      .post(ApiRoute.REGISTRATION, { ...data, timer: date.valueOf() })
      .then((res) => {
        setUserData(res.data.user);
        setUserToken(res.data.token);
        setIsLoading(false);
      })
      .catch((error) => {
        const type = error.response.data?.type;
        if (type) {
          setError(type, { message: error.response.data.msg });
        }
        setIsLoading(false);
        //Тут добавить надо будет когда 500 ошибка, сервер лег если
      });
  };

  return { methods, onSubmit, isLoading };
};
