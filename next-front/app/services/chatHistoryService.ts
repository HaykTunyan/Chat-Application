import baseApi from "./baseAPI";

export const fetchChatHistory = async () => {
  try {
    // Use baseApi to make the GET request
    const response = await baseApi.get('/api/v1/chat-history');
    return response; // Return the response data
  } catch (error) {
    console.error('Error fetching chat history:', error);
    throw error; // Propagate the error
  }
};
