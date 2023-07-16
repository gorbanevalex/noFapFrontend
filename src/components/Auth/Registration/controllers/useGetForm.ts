import { yupResolver } from "@hookform/resolvers/yup";
import makeRequest from "axiosConfig";
import i18n from "i18n";
import { useForm } from "react-hook-form";
import { setUserData, setUserToken } from "storage/userStorage";
import { UserRegistration } from "types";
import { ScreenRoute } from "utils/constant";
import { registerFormResolver } from "validation";

const initialStateForm: UserRegistration = {
  name: "",
  login: "",
  password: "",
};

export const useGetForm = () => {
  const { t } = i18n;

  const methods = useForm({
    defaultValues: {
      ...initialStateForm,
    },
    mode: "onChange",
    resolver: yupResolver(registerFormResolver(t)),
  });

  const { setError } = methods;

  const onSubmit = (data: UserRegistration) => {
    makeRequest
      .post(ScreenRoute.REGISTRATION, { ...data })
      .then((res) => {
        setUserData(res.data.user);
        setUserToken(res.data.token);
      })
      .catch((error) => {
        const type = error.response.data?.type;
        if (type) {
          setError(type, { message: error.response.data.msg });
        }
        //Тут добавить надо будет когда 500 ошибка, сервер лег если
      });
  };

  return { methods, onSubmit };
};
