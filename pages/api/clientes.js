import { ToastContainer, toast } from "react-toastify";
import { URL } from "@/utils/constantes";

////login // 


export async function loginApi(formData) {
  try {
    const url = `${URL}/clientes/sing-in`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
          Accept: "*/*",
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(url, params);
   if (response.status === 500 ){
    toast.error("Usuario o contraseña invalido");
   } if (response.status === 501){
    toast.error("Usuario no activo");
   } else{
     const result = await response.json();
     return result;
   }
  } catch (error) {
    console.log(error);
  }
}
