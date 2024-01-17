"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // This is use if you need to do some "server stuff" when logging out (e.g. removing user etc.)
  await signOut();
};
