export default function LoadingPage() {
  return (
    <div className="flex">
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
      <div>Fetching Beers ... </div>
    </div>
  );
}
