"use server";

import { IBeer } from "@/models/general";
import { cookies } from "next/headers";

export async function addRemoveCookies(
  items: IBeer[],
  name: string,
  time: number
) {
  "use server";
  cookies().set({
    name: name,
    value: JSON.stringify([...items]),
    httpOnly: true,
    path: "/",
    expires: Date.now() + time,
  });
}
