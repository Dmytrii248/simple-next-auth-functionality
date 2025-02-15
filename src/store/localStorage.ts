import { User } from "@/types";

export const getUserFromLocalStorage = (): User | null => {
  const item = JSON.parse(localStorage.getItem("user") || "null");

  return item;
};

export const setUserToLocalStorage = (item: User | null) => {
  localStorage.setItem("user", JSON.stringify(item));

  return;
};
