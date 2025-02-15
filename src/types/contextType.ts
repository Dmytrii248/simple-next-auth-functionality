import { User } from "./user";

export interface ContextType {
  user: User | null;
  login: (user: User) => void;
  logout: VoidFunction;
}
