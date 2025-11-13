import { JwtTokenResponse, LoginRequest } from "@/types/auth";
import { apiClient } from "../apiClient";
import { AUTH_API_URLS } from "@/constants/AUTH_API_URLS";

export const login = async (
  loginReq: LoginRequest
): Promise<JwtTokenResponse> => {
  const response = await apiClient.post(AUTH_API_URLS.login, loginReq);
  return response.data;
};
