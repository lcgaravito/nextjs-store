import styles from "./page.module.css";

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
  return (
    <div className={styles.main}>
      <h2>Category: {categories}</h2>
      {search && <p>Search: {search}</p>}
    </div>
  );
}
