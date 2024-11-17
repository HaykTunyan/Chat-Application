// Gemini API integration

import axios from "axios";

export const sendMessageToAI = async (message: string) => {
  const response = await axios.post("/api/v1/gemini", { message });
  return response.data;
};