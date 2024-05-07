import React, { useEffect, useState } from "react";
import Layout from "@/layout/Layout";
import BuscadorRapida from "../components/buscadores/BuscadorRapida";
import { viewConsulApi, marcaAutosApi } from "@/pages/api/productos";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";


export default function buscquedaRapida() {
  const { auth, login, setReloadUser } = useAuth()
  const [comparacion, setComparacion] = useState([]);
  const [buscar, setBuscar] = useState(null);
  const data = useRouter();
  

  return (
    <Layout>
      <BuscadorRapida
        auth={auth}
        comparacion={comparacion}
        buscar={buscar}
        setBuscar={setBuscar}
        data={data}
        setReloadUser={setReloadUser}
      />
    </Layout>
  );
}
