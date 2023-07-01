/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FIREBASE_API_KEY: "AIzaSyC9jqcIiBFPHdOBfxC98VpLsWp7ozoHrro",
    FIREBASE_AUTH_DOMAIN: "jiant-bookshelf.firebaseapp.com",
    FIREBASE_PROJECT_ID: "jiant-bookshelf",
    FIREBASE_STORAGE_BUCKET: "jiant-bookshelf.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "270654662776",
    FIREBASE_APP_ID: "1:270654662776:web:da805d4f49aa48c656a58d",
    FIREBASE_MEASUREMENT_ID: "G-NLFH4QS2V4",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/**",
      },
    ],
  },
};

module.exports = nextConfig;
