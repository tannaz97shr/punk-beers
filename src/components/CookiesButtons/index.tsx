import { addRemoveCookies } from "@/lib/actions";
import { IBeer } from "@/models/general";
import { cookies } from "next/headers";

interface AddToListButtonsProps {
  beer: IBeer;
  name: string;
  time: number;
  icon?: React.ReactNode;
}

export default async function CookiesButton({
  beer,
  name,
  time,
  icon,
}: AddToListButtonsProps) {
  const cookieStore = cookies();
  const itemsCookies = cookieStore.get(name);
  const itemsArray: IBeer[] = itemsCookies?.value
    ? JSON.parse(itemsCookies?.value)
    : [];
  const itemIndex = [...itemsArray.map((item: IBeer) => item.id)].indexOf(
    beer.id
  );
  const itemRemoved: false | IBeer[] =
    itemIndex > -1
      ? [
          ...itemsArray.filter((item: IBeer) => {
            return item.id !== itemsArray[itemIndex].id;
          }),
        ]
      : false;

  return (
    <form
      action={async () => {
        "use server";
        if (itemRemoved) {
          addRemoveCookies([...itemRemoved], name, time);
          return;
        }
        addRemoveCookies([...itemsArray, beer], name, time);
      }}
    >
      <button
        type="submit"
        className="flex items-center border border-custom-orange mx-3 p-2"
      >
        {icon}
        <span>{itemIndex === -1 ? "Add to " : "Remove from "}</span>
        <span className="capitalize ml-2">{name}</span>
      </button>
    </form>
  );
}
