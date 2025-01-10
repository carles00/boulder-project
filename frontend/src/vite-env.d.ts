/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_AUTH0_DOMAIN: string;
  readonly VITE_AUTH0_CLIENT: string;
  readonly VITE_AUTH0_LOGIN_REDIRECT: string;
  readonly VITE_AUTH0_AUDIENCE: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}