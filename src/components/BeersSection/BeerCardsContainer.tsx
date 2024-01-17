import { IBeer } from "@/models/general";
import { BeerCard } from "./BeerCard";

interface BeerCardsContainerProps {
  beers: IBeer[];
}

export function BeerCardsContainer({ beers }: BeerCardsContainerProps) {
  return (
    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4">
      {beers.map((beer: IBeer) => (
        <BeerCard
          id={beer.id}
          price={beer.srm}
          abv={beer.abv}
          key={beer.id}
          image={beer.image_url}
          name={beer.name}
        />
      ))}
    </div>
  );
}
