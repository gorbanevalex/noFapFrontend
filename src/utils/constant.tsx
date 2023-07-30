import i18n from "i18nConfig";
import { Favorite, LocationCity, Restore } from "@mui/icons-material";

const { t } = i18n;

export enum ApiRoute {
  REGISTRATION = "user/register",
  LOGIN = "user/login",
}

export enum ScreenRoute {
  REGISTRATION = "registration",
  LOGIN = "login",
  STATS = "stats",
  HEALTH = "health",
  ACHIEVEMENTS = "achievements",
}

interface BottomMenuItem {
  label: string;
  value: ScreenRoute;
  icon: JSX.Element;
}

export const bottomMenuItems: BottomMenuItem[] = [
  {
    label: t("bottomMenu.stats"),
    value: ScreenRoute.STATS,
    icon: <Restore />,
  },
  {
    label: t("bottomMenu.health"),
    value: ScreenRoute.HEALTH,
    icon: <Favorite />,
  },
  {
    label: t("bottomMenu.achievements"),
    value: ScreenRoute.ACHIEVEMENTS,
    icon: <LocationCity />,
  },
];
