import { Login, Registration } from "pages/Auth";
import { Routes, Route } from "react-router-dom";
import { ScreenRoute } from "utils/constant";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "themes/theme";
import { Stats } from "pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path={ScreenRoute.REGISTRATION} element={<Registration />} />
        <Route path={ScreenRoute.LOGIN} element={<Login />} />
        <Route path="" element={<Stats />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
