const getProducts = async () => {
  const response = await fetch(
    `${process.env.SHOPIFY_HOSTNAME}/admin/api/2025-04/products.json`,
    {
      method: "GET",
      headers: {
        "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
};
export const MainProducts = async () => {
  const products = await getProducts();
  console.log("products", products);
  return (
    <section>
      <h1>Main Products</h1>
      {products.products.map((product: any) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img width={200} src={product.images[0].src} alt={product.title} />

          {product.body_html}
          <p>Price: {product.variants[0].price}</p>
        </div>
      ))}
    </section>
  );
};
