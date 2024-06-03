import React, { useEffect, useState } from "react";
import Layout from "@/layout/Layout";
import BuscadorFamilia from "../components/buscadores/BuscadorFamilia";
import { viewConsulApi, marcaAutosApi } from "@/pages/api/productos";
import useAuth from "@/hooks/useAuth";

export default function buscadorFamilia() {
  const { auth, setReloadUser } = useAuth();

  return (
    <Layout>
      <BuscadorFamilia auth={auth} setReloadUser={setReloadUser} />
    </Layout>
  );
}
