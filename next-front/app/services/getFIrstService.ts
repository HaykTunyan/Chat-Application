import baseApi from "./baseAPI";

/**
 * Sends user input to the Gemini API via Flask backend.
 * @param {string} input - The user's input message.
 * @returns {Promise<object>} The response from the backend API.
 */

export const sendMessageToAI = async (message: string) => {
  try {
    const response = await baseApi.post('/api/v1/gemini', { message });
    
    return response;
  } catch (error) {
    console.error('Error sending message to AI:', error);
    throw error; 
  }
};

export const sendInputToGemini = async (input: string) => {
  try {
    const response = await baseApi.post('/api/v1/gemini', { input });
    // @ts-ignore
    return response; // Assuming the Flask API returns the response in `.data`
  } catch (error: any) {
    console.error('Error sending input to Gemini API:', error);
    throw error.response?.data || error.message; // Provide detailed error info
  }
};
