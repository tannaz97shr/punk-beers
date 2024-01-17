import { IBeersResponse } from "@/models/general";

const endpoint: string = process.env.PUNK_ROOT_ENDPOINT as string;

export const getBeers = async (): Promise<IBeersResponse> => {
  try {
    const res = await fetch(`${endpoint}beers`);
    const beers = await res.json();
    console.log("get beers tt", beers);
    return beers;
  } catch (e) {
    console.error("fetching error", e);
    return {
      message: "fetching error",
      beers: [],
    };
  }
};
