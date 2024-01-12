interface CategoryProps {
  params: {
    categories?: string;
  };
  searchParams?: {
    search?: string;
  };
}

export default function Category({
  params: { categories },
  searchParams,
}: CategoryProps) {
  const search = searchParams?.search;
  console.log(categories);
  console.log(searchParams);
  return (
    <div>
      <h2>Category: {categories}</h2>
      {search && <p>Search: {search}</p>}
    </div>
  );
}
