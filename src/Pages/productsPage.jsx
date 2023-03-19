import Categories from "../components/home/Categories";
import NavBar from "../components/main/navbar";
import Footer from "../components/main/footer";
import SingleCategory from "../components/products/singleCategory";

import categoriesData from "../components/products/categoryData";

export default function ProductsPage() {


  return (
    <>
      <section className="text-white font-test bg-light-green">
        <NavBar />
        <Categories />
        {categoriesData.map(({ name, products }, i) => (
          <SingleCategory key={`asdf${i}`} name={name} products={products} />
        ))}
        <Footer />
      </section>
    </>
  );
}
