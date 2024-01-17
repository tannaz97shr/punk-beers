import { IBeersResponse } from "@/models/general";

const endpoint: string = process.env.PUNK_ROOT_ENDPOINT as string;

export const getBeers = async (food: string): Promise<IBeersResponse> => {
  try {
    const res = await fetch(`${endpoint}beers${food ? "?food=" + food : ""}`);
    const beers = await res.json();
    return { beers: beers };
  } catch (e) {
    console.error("fetching error", e);
    return {
      message: "fetching error",
      beers: [],
    };
  }
};
