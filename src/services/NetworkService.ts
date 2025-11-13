/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseUrl } from "../utils/config";
import axios from "axios";

export const ApiRequest = async (
  endPoint: string,
  method: string,
  data?: any
) => {
  const url = `${baseUrl}${endPoint}`;
  const token =
    (typeof globalThis !== "undefined" && (globalThis as any).authToken) || "";

  const headers = {
    "CB-Token": token, // ConnectyCube expects this header
    "Content-Type": "application/json",
  };

  const response = await axios({
    url,
    method,
    headers,
    data,
  });

  return response;
};
