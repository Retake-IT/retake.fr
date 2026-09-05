/** @type {import('next').NextConfig} */

// "export"     -> static site for GitHub Pages (default)
// "standalone" -> Node server for the Docker image (set NEXT_OUTPUT=standalone)
const output = process.env.NEXT_OUTPUT || "export";
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output,
  // Export each route as a folder with index.html so GitHub Pages resolves
  // deep links (e.g. /produits/) without a server. Kept off in `next dev`,
  // where the extra 308 redirects break internal asset requests.
  trailingSlash: isProd,
  images: {
    // GitHub Pages has no image optimization backend; keep dev identical to prod.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.leboncoin.fr",
        port: "",
      },
    ],
  },
};
