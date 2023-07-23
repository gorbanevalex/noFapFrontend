import { Box } from "@mui/system";
import { Menu } from "components";
import { Stats } from "pages";
import { Route, Routes } from "react-router-dom";
import { ScreenRoute } from "utils/constant";

export const MainRoute = () => {
  return (
    <Box sx={{ position: "relative", paddingBottom: "30px" }}>
      <Routes>
        <Route path={ScreenRoute.STATS} element={<Stats />} />
        <Route path="*" element={<Stats />} />
      </Routes>
      <Menu />
    </Box>
  );
};

export default MainRoute;
