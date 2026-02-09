import "dotenv/config";

export const env = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "nextfit-secret-key-change-in-production",
  nextfitBaseUrl: process.env.NEXTFIT_BASE_URL,
  nextfitUser: process.env.NEXTFIT_USER,
  nextfitPassword: process.env.NEXTFIT_PASSWORD,
  nextfitCodigoUnidade: process.env.NEXTFIT_CODIGO_UNIDADE,
  nextfitAccessToken: process.env.NEXTFIT_ACCESS_TOKEN,
};