import { getSingleBeer } from "@/api/beers";
import Modal from "@/components/UI/Modal";

export default async function BeerPage({
  params,
}: {
  params: { slug: string };
}) {
  const { beer } = await getSingleBeer(Number(params.slug));
  console.log("beer ", beer);
  return (
    <Modal>
      <div>This is beer page: {params.slug}</div>
    </Modal>
  );
}
