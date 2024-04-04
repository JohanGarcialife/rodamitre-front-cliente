import { createContext } from "react";
const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null,
  SetReloadUser: () => null,
});
export default AuthContext;
