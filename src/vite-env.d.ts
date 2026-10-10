/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  glob<T = unknown>(pattern: string, opts?: {
    query?: string;
    import?: string;
    eager?: boolean;
  }): Record<string, T>;
}