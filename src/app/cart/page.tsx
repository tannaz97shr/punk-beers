import { BeerCardsContainer } from "@/components/BeersSection/BeerCardsContainer";
import SectionTitle from "@/components/SectionTitle";
import { IBeer } from "@/models/general";
import { cookies } from "next/headers";

export default function CartPage() {
  const cookieStore = cookies();
  const itemsCookies = cookieStore.get("cart");
  const itemsArray: IBeer[] = itemsCookies?.value
    ? JSON.parse(itemsCookies?.value)
    : [];
  const sum = itemsArray.reduce((a, { srm }) => a + srm, 0);

  console.log("cart items", itemsArray);
  return (
    <>
      <SectionTitle>Shopping Cart</SectionTitle>
      <div>Sum of cart : {sum + "$"}</div>
      <BeerCardsContainer beers={itemsArray} />
    </>
  );
}
