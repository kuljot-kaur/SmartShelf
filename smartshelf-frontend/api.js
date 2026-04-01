import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const getInventory = () => API.get("/inventory");
export const getExpiryAlerts = () => API.get("/expiry-alerts");
export const getWasteScore = () => API.get("/waste-score");
export const getDiscounts = () => API.get("/discount-suggestions");
export const getRedistributionLog = () => API.get("/redistribution-log");

export const addItem = (data) => API.post("/inventory", data);
export const redistribute = (data) => API.post("/redistribute", data);