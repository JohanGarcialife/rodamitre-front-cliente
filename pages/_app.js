import React, { useMemo, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { ToastContainer } from "react-toastify";
import AuthContext from "../context/AuthContext.js";
import { setToken, getToken, removeToken } from "./api/token";
import { Provider } from "react-redux";
import { store } from "./store.js";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "../components/buscadores/BuscadorFamilia.scss";
import "../components/garantias/NuevaGarantia.scss";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";

export default function App({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined);
  const [reloadUser, setReloadUser] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setAuth({
        token,
        CLI_ID: jwtDecode(token).CLI_ID,
        LPP_ID: jwtDecode(token).LPP_ID,
        CLI_DESCUENTO_GRAL: jwtDecode(token).CLI_DESCUENTO_GRAL,
      });
    } else {
      setAuth(null);
    }
    setReloadUser(false);
  }, [reloadUser]);

  const login = (token) => {
    setToken(token);
    setAuth({
      token,
      CLI_ID: jwtDecode(token).CLI_ID,
      LPP_ID: jwtDecode(token).LPP_ID,
    });
  };

  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
      window.location = "/";
    }
  };

  const userData = useMemo(
    () => ({
      auth,
      login,
      logout,
      setReloadUser,
    }),
    [auth]
  );
  if (auth === undefined) return null;

  return (
    <>
      <AuthContext.Provider value={userData}>
        <Provider store={store}>
          <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
            <Component {...pageProps} />
            <ToastContainer
              position="top-right"
              autoClose={2000}
              /*  hideProgressBar
             newestOnTop
             closeOnClick
             rtl={false}
             pauseOnFocusLoss={false}
             draggable
             pauseOnHover */
            />
          </PrimeReactProvider>
        </Provider>
      </AuthContext.Provider>
    </>
  );
}
