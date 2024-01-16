import Image from "next/image";
import BeerIcon from "./beer.png";

export default function Logo() {
  return (
    <div className="flex items-center font-semibold text-2xl mb-4">
      <Image
        src={BeerIcon}
        width={50}
        height={50}
        alt="Picture of the author"
      />
      <span className="ml-4">Punk Beers</span>
    </div>
  );
}
