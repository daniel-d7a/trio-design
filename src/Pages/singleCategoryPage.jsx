import Footer from "../components/main/footer";
import NavBar from "../components/main/navbar";
import SingleCategory from "../components/products/singleCategory";

export default function SingleCategoryPage() {


  return (
    <section className="text-white font-test bg-light-green">
      <NavBar />
      <SingleCategory />
      <Footer />
    </section>
  );
}