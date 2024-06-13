/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, "public", "css", "*.scss")],
  },
};

export default nextConfig;