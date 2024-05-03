import React, { useEffect, useState } from "react";
import Layout from "@/layout/Layout";
import BuscadorRapida from "../components/buscadores/BuscadorRapida";
import { viewConsulApi, marcaAutosApi } from "@/pages/api/productos";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";


export default function buscquedaRapida() {
  const { auth, login, setReloadUser } = useAuth();
  const [comparacion, setComparacion] = useState([]);
  const [marcaAutos, setMarcaAutos] = useState([]);
  const [buscar, setBuscar] = useState(false);

  const data = useRouter();
  
  
  console.log(data.query.query, "valor bucador")


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
        data={data}
        //data = {data.query.query}
        // setBuscador={setBuscador}
      />
    </Layout>
  );
}
