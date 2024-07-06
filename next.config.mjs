/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MYSQL_HOST: "viaduct.proxy.rlwy.net",
    MYSQL_PORT: "38093",
    MYSQL_DATABASE: "railway",
    MYSQL_USER: "root",
    MYSQL_PASSWORD: "rWDLQfLcXISplKwZVSyKOFVayLzDawoP",
  },
  images: {
    domains: ["static7.depositphotos.com"],
  },
};

export default nextConfig;
