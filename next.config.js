/** @type {import('next').NextConfig} */

// "export"     -> static site for GitHub Pages (default)
// "standalone" -> Node server for the Docker image (set NEXT_OUTPUT=standalone)
const output = process.env.NEXT_OUTPUT || "export";
const isExport = output === "export";

module.exports = {
  output,
  // Serve every route as a folder with index.html so GitHub Pages resolves
  // deep links (e.g. /produits) without a server.
  trailingSlash: true,
  images: {
    // GitHub Pages has no image optimization backend.
    unoptimized: isExport,
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.leboncoin.fr",
        port: "",
      },
    ],
  },
};
