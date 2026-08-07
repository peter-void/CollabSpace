import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";
import type { auth } from "./auth";

const appUrl = process.env?.["NEXT_PUBLIC_APP_URL"];
const isValidAppUrl =
  appUrl && (appUrl.startsWith("http://") || appUrl.startsWith("https://"));

export const authClient = createAuthClient({
  baseURL: isValidAppUrl
    ? appUrl
    : typeof window !== "undefined"
      ? window.location.origin
      : "http://localhost:3000",
  plugins: [inferAdditionalFields<typeof auth>()],
  sessionOptions: {
    refetchOnWindowFocus: false,
    refetchInterval: 0,
  },
});
