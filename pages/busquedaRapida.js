import React, { useEffect, useState } from "react";
import Layout from "@/layout/Layout";
import BuscadorRapida from "../components/buscadores/BuscadorRapida";
import { viewConsulApi, marcaAutosApi } from "@/pages/api/productos";
import useAuth from "@/hooks/useAuth";

export default function buscquedaRapida() {
  const { auth, login, setReloadUser } = useAuth();
  const [comparacion, setComparacion] = useState([]);
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
      <BuscadorRapida
        auth={auth}
        comparacion={comparacion}
        buscar={buscar}
        setBuscar={setBuscar}
        // setBuscador={setBuscador}
      />
    </Layout>
  );
}
