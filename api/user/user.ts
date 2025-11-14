import { USER_API_URLS } from "@/constants/USER_API_URLS";
import { UserResponse } from "@/types/user";

export const getCurrentUser = async (token: string): Promise<UserResponse> => {
  let user;
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + USER_API_URLS.me,
      {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }),
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error(`Kullanıcı bulunamadı : ${response.status}`);
    }

    user = await response.json();
  } catch (error) {
    console.error(error);
  }
  return user;
};
