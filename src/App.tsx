import { Login, Registration } from "pages/Auth";
import { Routes, Route } from "react-router-dom";
import { ScreenRoute } from "utils/constant";

function App() {
  return (
    <Routes>
      <Route path={ScreenRoute.REGISTRATION} element={<Registration />} />
      <Route path={ScreenRoute.LOGIN} element={<Login />} />
    </Routes>
  );
}

export default App;
