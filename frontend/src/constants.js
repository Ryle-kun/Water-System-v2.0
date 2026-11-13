// Same-origin API works with the Vite proxy in development and FastAPI static hosting in production.
export const API = import.meta.env.VITE_API_URL || "";
export const BASE_URL = API;

const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
export const WS_URL = import.meta.env.VITE_WS_URL || `${protocol}//${window.location.host}/ws`;
