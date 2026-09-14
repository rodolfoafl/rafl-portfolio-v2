import type { MetadataRoute } from "next";

import { profile } from "@/content/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.role}`,
    short_name: profile.name,
    start_url: "/",
    display: "browser",
    background_color: "#14191A",
    theme_color: "#14191A",
    icons: [
      { src: "/icon1.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
