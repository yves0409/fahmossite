const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://deployment-url.ow.sh"
    : "http://localhost:3000";

export default baseUrl;
