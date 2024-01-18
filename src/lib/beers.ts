import { IBeersResponse, ISingleBeerResponse } from "@/models/general";

const endpoint: string = process.env.PUNK_ROOT_ENDPOINT as string;

export const getBeers = async (
  food: string,
  page: string
): Promise<IBeersResponse> => {
  try {
    setTimeout(() => {}, 3000);
    const res = await fetch(
      `${endpoint}beers?page=${page}&per_page=24${food ? "&food=" + food : ""}`
    );
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

export const getSingleBeer = async (
  id: string
): Promise<ISingleBeerResponse> => {
  try {
    setTimeout(() => {}, 3000);
    const res = await fetch(`${endpoint}beers/${id}`);
    const beer = await res.json();
    return { beer: beer };
  } catch (e) {
    console.error("fetching error", e);
    return {
      message: "fetching error",
    };
  }
};

export const getByIds = async (...rest: number[]): Promise<IBeersResponse> => {
  try {
    setTimeout(() => {}, 3000);
    const stringIds = rest.toString();
    const res = await fetch(
      `${endpoint}beers?ids=${stringIds.replaceAll(",", "|")}`
    );
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
