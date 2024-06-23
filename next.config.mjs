/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MYSQL_HOST: "localhost",
    MYSQL_PORT: "3306",
    MYSQL_DATABASE: "products",
    MYSQL_USER: "root",
    MYSQL_PASSWORD: "",
  },
  images: {
    domains: ["static7.depositphotos.com"],
  },
};

export default nextConfig;
