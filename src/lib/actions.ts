"use server";

import { cookies } from "next/headers";

export async function addRemoveCookies(
  items: number[],
  name: string,
  time: number
) {
  "use server";
  cookies().set({
    name: name,
    value: JSON.stringify(items),
    expires: Date.now() + time,
  });
}
