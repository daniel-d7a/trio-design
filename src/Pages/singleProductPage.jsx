import Footer from "../components/main/footer";
import NavBar from "../components/main/navbar";
import SingleProduct from "../components/products/singleProduct";

export default function SingleProductPage() {
  return (
    <section className="text-white font-test bg-light-green">
      <NavBar />
      <SingleProduct />
      <Footer />
    </section>
  );
}
