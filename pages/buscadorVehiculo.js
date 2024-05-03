import React, { useEffect, useState } from "react";
import Layout from "@/layout/Layout";
import BuscadorVehiculo from "../components/buscadores/BuscadorVehiculo";
import { viewConsulApi, marcaAutosApi } from "@/pages/api/productos";
import useAuth from "@/hooks/useAuth";

export default function buscadorVehiculo() {
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
      <BuscadorVehiculo
        marcaAutos={marcaAutos}
        setMarcaAutos={setMarcaAutos}
        auth={auth}
        setBuscar={setBuscar}
        buscar={buscar}
        //setBuscador={setBuscador}
      />
    </Layout>
  );
}
