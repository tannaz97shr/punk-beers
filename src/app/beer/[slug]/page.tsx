export default function BeerPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <div>This is beer page: {params.slug}</div>
    </>
  );
}
