"use server";

import { getCurrentUser } from "@/api/user/user";
import { UserResponse } from "@/types/user";
import { cookies } from "next/headers";

export async function getUsername(): Promise<UserResponse | null> {
  const cookieStore = await cookies();
  const tokenStr = cookieStore.get("tokens")?.value;

  if (!tokenStr) return null;

  let user = null;

  try {
    const { accessToken } = JSON.parse(tokenStr);
    user = await getCurrentUser(accessToken);
  } catch (err) {
    console.error("Token JSON parse error", err);
  }
  return user;
}
