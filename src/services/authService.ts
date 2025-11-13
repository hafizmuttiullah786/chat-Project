/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { baseUrl } from "../utils/config";

export const getSessionToken = async () => {
  try {
    const response = await axios.post(`${baseUrl}/session.json`, {
      application_id: "9850",
      auth_key: "B35FA45F-B6BA-4063-90C4-425BB6957F57",
      user: {
        login: "testuser01",
        password: "test12345",
      },
    });

    const token = response.data.session.token;

    (globalThis as any).authToken = token;
    console.log("✅ Token fetched successfully:", token);
    return token;
  } catch (error: any) {
    console.error(
      "❌ Error fetching session token:",
      error.response?.data || error
    );
    throw error;
  }
};
