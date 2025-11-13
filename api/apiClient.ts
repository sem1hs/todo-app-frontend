import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import Cookies from "js-cookie";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const logOnDev = (
  message: string,
  log?: AxiosResponse | InternalAxiosRequestConfig | AxiosError
) => {
  if (process.env.NODE_ENV === "development") {
    console.log(message, log);
  }
};

// Tüm isteklere header ekleme
apiClient.interceptors.request.use((request) => {
  const { method, url } = request;
  const token = Cookies.get("tokens");

  if (token) {
    const { accessToken } = JSON.parse(token);
    request.headers.Authorization = `Bearer ${accessToken}`;
  }

  logOnDev(`🚀 [${method?.toUpperCase()}] ${url} | Request`, request);

  return request;
});

// Refresh token ile access token oluşturma
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const cookie = Cookies.get("tokens");
      if (!cookie) return Promise.reject(error);

      const { refreshToken } = JSON.parse(cookie);

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh-token`,
        { refreshToken }
      );

      Cookies.set("tokens", JSON.stringify(data), { expires: 1 });

      originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
      return axios(originalRequest);
    }

    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    const { method, url } = response.config;
    const { status } = response;

    logOnDev(
      `✨ [${method?.toUpperCase()}] ${url} | Response ${status}`,
      response
    );

    return response;
  },
  (error) => {
    const { message } = error;
    const { status, data } = error.response;
    const { method, url } = error.config;

    logOnDev(
      `🚨 [${method?.toUpperCase()}] ${url} | Error ${status} ${
        data?.message || ""
      } | ${message}`,
      error
    );

    return Promise.reject(error);
  }
);
