import { URL } from "@/utils/constantes";

//// todos los productos con sus precios segun su id ///
export async function productosApi(CLI_ID, LPP_ID) {
  try {
    const url = `${URL}/productos/${CLI_ID}/${LPP_ID}`;
    const params = {
      headers: {
        Accept: "*/*",
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

//// todos los productos de viewconsult para comparar con sus marcas y modelos ///
export async function viewConsulApi() {
  try {
    const url = `${URL}/viewconsul`;
    const params = {
      headers: {
        Accept: "*/*",
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
//todas las marcas de los vehiculos///
export async function marcaAutosApi() {
  try {
    const url = `${URL}/marcautos`;
    const params = {
      headers: {
        Accept: "*/*",
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
}
///////////////// rubros segun la marca del vehiculo y productos/////
export async function superrubrosMarcId(Dato) {
  try {
    const url = `${URL}/superubrosAuto`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(Dato),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
////////// productos segun la marca del auto //////
export async function productosMarcAuto(CLI_ID, LPP_ID, Dato) {
  try {
    const url = `${URL}/productomarcauto/${CLI_ID}/${LPP_ID}`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(Dato),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

/////// busqueda segun la marca del producto y select////

export async function pMarcarticulo(Dato) {
  try {
    const url = `${URL}/marcarticulo`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(Dato),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
////////// rubros segun el super rubro o marca select////////
export async function rubrosP(Dato) {
  try {
    const url = `${URL}/rubro`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(Dato),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

///// modelos de vehiculos segun el id del vehiculo

export async function modelosVeApi(id) {
  try {
    const url = `${URL}/modelos/${id}`;
    const params = {
      headers: {
        Accept: "*/*",
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
////////////////productos por modelo

export async function productosMarModelo(CLI_ID, LPP_ID, Dato) {
  try {
    const url = `${URL}/productomodeloautos/${CLI_ID}/${LPP_ID}`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(Dato),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

//////rubro por modelo///

export async function rubroModeloS(Dato) {
  try {
    const url = `${URL}/rubromod`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(Dato),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
////////////// motor/////////

export async function motorRM(Dato) {
  try {
    const url = `${URL}/motorud`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(Dato),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

//////////productps por codigo/////

export async function productosCodigo(CLI_ID, LPP_ID, Dato) {
  try {
    const url = `${URL}/buscador/${CLI_ID}/${LPP_ID}`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(Dato),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
////////////////

export async function codigoP(Dato) {
  console.log("vine aqui a consultar")
  try {
    const url = `${URL}/codigo`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(Dato),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function marcaP(Dato) {
  try {
    const url = `${URL}/marcaproduct`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(Dato),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function motorVeApi(id) {
  try {
    const url = `${URL}/motorcar/${id}`;
    const params = {
      headers: {
        Accept: "*/*",
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}