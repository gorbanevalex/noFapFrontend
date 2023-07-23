import { UserAuthResponse } from "../types";

export const setUserData = (data: UserAuthResponse) => {
  const jsonData = JSON.stringify(data);
  localStorage.setItem("userData", jsonData);
};

export const getUserData = (): UserAuthResponse | null => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (userData) {
    return userData as UserAuthResponse;
  }
  return null;
};

export const getUserToken = (): string | undefined => {
  const userToken = localStorage.getItem("token");
  if (userToken) {
    return userToken as string;
  }
  return undefined;
};

export const setUserToken = (token: string) => {
  localStorage.setItem("token", token);
};
