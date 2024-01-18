import CookiesButton from "@/components/CookiesButtons";
import TextCollapse from "@/components/TextCollapse";
import Modal from "@/components/UI/Modal";
import { getSingleBeer } from "@/lib/beers";
import Image from "next/image";
import { FaShoppingBasket, FaStar } from "react-icons/fa";

export default async function BeerPage({
  params,
}: {
  params: { slug: string };
}) {
  const { beer } = await getSingleBeer(params.slug);
  const oneDay = 24 * 60 * 60 * 1000;
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
          <TextCollapse text={selectedBeer.description} />

          <div className="flex">
            <CookiesButton
              beer={selectedBeer}
              name="favorites"
              time={30 * oneDay}
              icon={<FaStar className="text-custom-orange mr-2" />}
            />
            <CookiesButton
              beer={selectedBeer}
              name="cart"
              time={7 * oneDay}
              icon={<FaShoppingBasket className="text-custom-orange mr-2" />}
            />
          </div>
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Modal>
  );
}
