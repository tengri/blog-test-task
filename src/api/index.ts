import createClient from "openapi-fetch";
import type { paths } from "./generated/strapi";

const client = createClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_STRAPI_URL + '/api',
  headers: {
    'Content-Type': 'application/json',
  }
});
export { client };
