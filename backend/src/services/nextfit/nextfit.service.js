import axios from "axios";
import { env } from "../../config/env.js";

function getDefaultToken() {
  if (!env.nextfitAccessToken) {
    throw new Error("NEXTFIT_ACCESS_TOKEN não configurado");
  }

  try {
    const payload = JSON.parse(
      Buffer.from(env.nextfitAccessToken.split(".")[1], "base64").toString()
    );

    return {
      accessToken: env.nextfitAccessToken,
      codigoUnidade:
        payload.codigoUnidadePreferencial || env.nextfitCodigoUnidade,
    };
  } catch {
    return {
      accessToken: env.nextfitAccessToken,
      codigoUnidade: env.nextfitCodigoUnidade,
    };
  }
}

export async function nextfitGet(path, params) {
  const token = getDefaultToken();

  const { data } = await axios.get(
    `${env.nextfitBaseUrl}${path}`,
    {
      params,
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
        "codigo-unidade": token.codigoUnidade,
        "front-version": "1.1.5",
        Origin: "https://app.nextfit.com.br",
        Referer: "https://app.nextfit.com.br/",
        Accept: "application/json",
      },
    }
  );

  return data;
}
