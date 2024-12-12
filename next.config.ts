import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    FIREBASE_APIKEY: process.env.FIREBASE_APIKEY,
  },
};

export default nextConfig;
