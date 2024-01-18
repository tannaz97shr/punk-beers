import { addRemoveCookies } from "@/lib/actions";
import { IBeer } from "@/models/general";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
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
  const cookiesItems: RequestCookie | undefined = cookieStore.get(name);
  const itemsArray: number[] = cookiesItems?.value
    ? JSON.parse(cookiesItems?.value)
    : [];
  const itemIndex = itemsArray.indexOf(beer.id);
  const itemRemoved = itemsArray.filter((id: number) => id !== beer.id);

  return (
    <form
      action={async () => {
        "use server";
        if (itemIndex !== -1) {
          addRemoveCookies([...itemRemoved], name, time);
          return;
        }
        addRemoveCookies([...itemsArray, beer.id], name, time);
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
