/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVICE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
