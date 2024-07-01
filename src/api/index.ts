import createClient from "openapi-fetch";
import type { paths } from "./generated/strapi";

const client = createClient<paths>({
  baseUrl: "http://localhost:1337/api",
  headers: {
    'Content-Type': 'application/json',
  }
});
export { client };
