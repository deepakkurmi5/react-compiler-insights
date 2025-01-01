/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENDPOINT: string;
  readonly VITE_DOGS_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
