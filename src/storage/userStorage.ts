import { UserRegistrationResponse } from "../types";

export const setUserData = (data: UserRegistrationResponse) => {
  const jsonData = JSON.stringify(data);
  localStorage.setItem("userData", jsonData);
};

export const setUserToken = (token: string) => {
  localStorage.setItem("token", token);
};
