import { string } from "yup";

export type UserRegistration = {
  login: string;
  name: string;
  password: string;
};

export type UserAuthResponse = {
  createdAt: string;
  login: string;
  name: string;
  password: string;
  updateAt: string;
  timer: number;
  __v: string;
  _id: string;
};

export type UserLogin = {
  login: string;
  password: string;
};
