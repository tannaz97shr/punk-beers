import Image from "next/image";
import Link from "next/link";

interface BeerCardProps {
  image?: string;
  name: string;
  price: number;
  abv: number;
  id: number;
}

export function BeerCard({ image, name, price, abv, id }: BeerCardProps) {
  return (
    <Link
      href={`/beer/${id}`}
      className="flex flex-col px-2 py-4 w-[96%] mx-auto max-w-[330px] custom-shadow hover:bg-bg-secondary"
    >
      <div className="relative w-[30%] mx-auto aspect-[2/5] shadow-none">
        {image && (
          <Image className="w-full h-full" alt={name} src={image} fill />
        )}
      </div>
      <h2 className="mt-4 max-w-full mx-auto font-semibold text-xl truncate">
        {name}
      </h2>
      <div className="flex w-full font-semibold mt-6 mb-4 text-text-secondary justify-between px-6">
        <span>{price}$</span>
        <span>ABV: {abv}</span>
      </div>
    </Link>
  );
}
