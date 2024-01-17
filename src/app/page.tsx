import { getBeers } from "@/api/beers";
import { BeerCardsContainer } from "@/components/BeersSection/BeerCardsContainer";
import Pagination from "@/components/Pagination";
import Tabs from "@/components/Tabs";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { beers } = await getBeers(
    searchParams.food ? (searchParams.food as string) : "",
    searchParams.page ? (searchParams.page as string) : "1"
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 pt-4 max-w-5xl w-full justify-between font-mono text-sm lg:flex flex-col">
        <h1 className="mt-6 mb-4 font-bold text-2xl md:text-3xl text-text-primary">
          Browse All Beers
        </h1>
        <p>
          Indulge your taste buds in a symphony of flavors with our curated
          selection of craft beers. From bold IPAs to rich stouts, explore a
          spectrum of ABV (Alcohol By Volume) levels, each bottle telling a
          unique story of craftsmanship. Elevate your beer experience with our
          diverse collection, where every sip is a journey into the world of
          exceptional brews.
        </p>
        <Tabs />
        <BeerCardsContainer beers={beers} />
        <Pagination
          current={searchParams.page ? Number(searchParams.page) : 1}
        />
      </div>
    </main>
  );
}
