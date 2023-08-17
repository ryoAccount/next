import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "blog-ryoaccount",
  apiKey: process.env.API_KEY ?? "",
});
