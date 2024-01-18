import { getSingleBeer } from "@/api/beers";
import Modal from "@/components/UI/Modal";
import Image from "next/image";

export default async function BeerPage({
  params,
}: {
  params: { slug: string };
}) {
  const { beer } = await getSingleBeer(params.slug);

  const selectedBeer = beer?.length && beer[0];
  return (
    <Modal>
      {selectedBeer ? (
        <>
          <div className="font-semibold text-xl text-center">
            {selectedBeer.name} -{" "}
            <span className="font-normal text-normal">
              {selectedBeer.srm && selectedBeer.srm + " $"}
            </span>
          </div>
          <div className="relative w-[6rem] mx-auto aspect-[3/10] mt-6 shadow-none">
            {selectedBeer.image_url && (
              <Image
                className="w-full h-full"
                alt={selectedBeer.image_url}
                src={selectedBeer.image_url}
                fill
              />
            )}
          </div>
          <div className="flex font-semibold text-lg my-4 justify-between">
            <span>{selectedBeer.tagline}</span>
            <span>ABV : {selectedBeer.abv}</span>
          </div>
          <p className="m-4 line-clamp-2">{selectedBeer.description}</p>
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Modal>
  );
}
