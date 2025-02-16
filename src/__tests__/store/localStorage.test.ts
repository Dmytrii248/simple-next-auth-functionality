import {
  getUserFromLocalStorage,
  setUserToLocalStorage,
} from "@/store/localStorage";
import { User } from "@/types";

describe("localStorage functions", () => {
  const user: User = {
    id: "1",
    name: "John Doe",
    email: "john.doe@gmail.com",
  };

  beforeEach(() => {
    localStorage.clear();
  });

  test("setUserToLocalStorage should store the user in localStorage", () => {
    setUserToLocalStorage(user);
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");
    expect(storedUser).toEqual(user);
  });

  test("getUserFromLocalStorage should return the user from localStorage", () => {
    localStorage.setItem("user", JSON.stringify(user));
    const retrievedUser = getUserFromLocalStorage();
    expect(retrievedUser).toEqual(user);
  });

  test("getUserFromLocalStorage should return null if no user is stored", () => {
    const retrievedUser = getUserFromLocalStorage();
    expect(retrievedUser).toBeNull();
  });

  test("setUserToLocalStorage should handle null input", () => {
    setUserToLocalStorage(null);
    const storedUser = localStorage.getItem("user");
    expect(storedUser).toBe("null");
  });
});
