export type LoginRequest = {
  username: string;
  password: string;
};

export type JwtTokenResponse = {
  accessToken: string;
  refreshToken: string;
};
