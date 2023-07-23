import { Registration, Login } from "pages/Auth";
import { Route, Routes } from "react-router-dom";
import { ScreenRoute } from "utils/constant";

const UnLoginRoute = () => {
  return (
    <Routes>
      <Route path={ScreenRoute.REGISTRATION} element={<Registration />} />
      <Route path={ScreenRoute.LOGIN} element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default UnLoginRoute;
