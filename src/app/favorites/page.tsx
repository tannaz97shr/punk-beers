import { BeerCardsContainer } from "@/components/BeersSection/BeerCardsContainer";
import SectionTitle from "@/components/SectionTitle";
import { getByIds } from "@/lib/beers";
import { cookies } from "next/headers";

export default async function FavoritesPage() {
  const cookieStore = cookies();
  const itemsCookies = cookieStore.get("favorites");
  const itemsArray: number[] = itemsCookies?.value
    ? JSON.parse(itemsCookies?.value)
    : [];
  const { beers } = await getByIds(...itemsArray);

  // console.log("cart items", itemsArray);
  console.log("cart items", beers);
  return (
    <>
      <SectionTitle>Favorites</SectionTitle>
      {beers.length ? (
        <BeerCardsContainer beers={beers} />
      ) : (
        <div>No Items yet</div>
      )}
    </>
  );
}
