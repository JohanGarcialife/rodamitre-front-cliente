import { URL } from "@/utils/constantes";

//// garntias ///
export async function garantiasApi(CLI_ID) {
  try {
    const url = `${URL}/garantia/${CLI_ID}`;
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
