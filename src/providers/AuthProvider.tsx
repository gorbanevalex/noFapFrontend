import MainRoute from "containers/MainRoute";
import UnLoginRoute from "containers/UnLoginRoute";
import { getUserToken } from "storage/userStorage";

const AuthProvider = () => {
  const userToken = getUserToken();

  if (userToken) {
    return <MainRoute />;
  } else {
    return <UnLoginRoute />;
  }
};

export default AuthProvider;
