"use client";

import { IBeer } from "@/models/general";
import { useEffect, useState } from "react";
import { BeerCard } from "./BeerCard";

interface BeerCardsContainerProps {
  beers: IBeer[];
}

export function BeerCardsContainer({ beers }: BeerCardsContainerProps) {
  const [sortedBeers, setSortedBeers] = useState<IBeer[]>(beers);
  const [sortValue, setSortValue] = useState<string>("");

  useEffect(() => {
    console.log("sort value", sortValue);

    switch (sortValue) {
      case "name_asc":
        setSortedBeers(
          [...beers].sort((a: IBeer, b: IBeer) => (a.name < b.name ? -1 : 1))
        );
        break;
      case "name_des":
        setSortedBeers(
          [...beers].sort((a: IBeer, b: IBeer) => (a.name > b.name ? -1 : 1))
        );
        break;
      case "abv_asc":
        setSortedBeers(
          [...beers].sort((a: IBeer, b: IBeer) => (a.abv < b.abv ? -1 : 1))
        );
        break;
      case "abv_des":
        setSortedBeers(
          [...beers].sort((a: IBeer, b: IBeer) => (a.abv > b.abv ? -1 : 1))
        );
        break;
      default:
        setSortedBeers([...beers]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortValue]);

  const onSortSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    setSortValue(event.currentTarget.value);
  };
  return (
    <>
      <label className="my-4">
        sort by
        <select
          value={sortValue}
          onChange={(e) => onSortSelect(e)}
          className="py-2 border rounded border-border-brown ml-2 bg-bg-primary focus-visible:outline-0"
        >
          <option value=""></option>
          <option value="name_asc">Name (asc)</option>
          <option value="name_des">Name (des)</option>
          <option value="abv_asc">ABV (asc)</option>
          <option value="abv_des">ABV (des)</option>
        </select>
      </label>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4">
        {sortedBeers.map((beer: IBeer) => (
          <BeerCard
            id={beer.id}
            price={beer.srm}
            abv={beer.abv}
            key={beer.id}
            image={beer.image_url && beer.image_url}
            name={beer.name}
          />
        ))}
      </div>
    </>
  );
}
