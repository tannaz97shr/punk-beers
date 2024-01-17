import { getBeers } from "@/api/beers";
import Tabs from "@/components/Tabs";

export default async function Home() {
  const beers = await getBeers();
  console.log("tannaz :", beers);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 pt-4 max-w-5xl w-full justify-between font-mono text-sm lg:flex flex-col">
        <h1 className="mt-6 font-bold text-2xl md:text-3xl text-text-primary">
          Browse All Beers
        </h1>
        <Tabs />
      </div>
    </main>
  );
}
