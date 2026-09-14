import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fixa a raiz do projeto: sem isso o Turbopack encontra um package-lock.json
  // fora do repositório e emite um aviso a cada build.
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
};

export default nextConfig;
