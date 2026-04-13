const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "http://localhost:4444").replace(/\/$/, "");

export default apiBaseUrl;
