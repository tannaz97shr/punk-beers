import { BeerCardsContainer } from "@/components/BeersSection/BeerCardsContainer";
import SectionTitle from "@/components/SectionTitle";
import { getByIds } from "@/lib/beers";
import { cookies } from "next/headers";

export default async function CartPage() {
  const cookieStore = cookies();
  const itemsCookies = cookieStore.get("cart");
  const itemsArray: number[] = itemsCookies?.value
    ? JSON.parse(itemsCookies?.value)
    : [];
  const { beers } = await getByIds(...itemsArray);
  const sum = [...beers].reduce((a, { srm }) => a + srm, 0);

  return (
    <>
      <SectionTitle>Shopping Cart</SectionTitle>
      <div>Sum of cart : {sum + "$"}</div>
      {beers.length ? (
        <BeerCardsContainer beers={beers} />
      ) : (
        <div>No Items yet</div>
      )}
    </>
  );
}
