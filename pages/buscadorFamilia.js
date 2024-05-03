import React, { useEffect, useState } from "react";
import Layout from "@/layout/Layout";
import BuscadorFamilia from "../components/buscadores/BuscadorFamilia";
import { viewConsulApi, marcaAutosApi } from "@/pages/api/productos";
import useAuth from "@/hooks/useAuth";

export default function buscadorFamilia() {
  const { auth, login, setReloadUser } = useAuth();
  const [marcaAutos, setMarcaAutos] = useState([]);
  const [buscar, setBuscar] = useState();

  useEffect(() => {
    (async () => {
      const response = await marcaAutosApi();
      setMarcaAutos(response);
    })();
  }, []);

  return (
    <Layout>
      <BuscadorFamilia
        marcaAutos={marcaAutos}
        setMarcaAutos={setMarcaAutos}
        auth={auth}
        setReloadUser={setReloadUser}
        setBuscar={setBuscar}
        buscar={buscar}
        //setBuscador={setBuscador}
      />
    </Layout>
  );
}
