import Categories from "../components/home/Categories";
import NavBar from "../components/main/navbar";
import Footer from "../components/main/footer";
import SingleCategory from "../components/products/singleCategory";

import categoriesData from "../components/products/categoryData";

export default function ProductsPage() {


  return (
    <>
      <section className="text-black bg-white">
        <NavBar />
        <Categories />
        {categoriesData.map(({ name, products }) => (
          <SingleCategory name={name} products={products} />
        ))}
        <Footer />
      </section>
    </>
  );
}
