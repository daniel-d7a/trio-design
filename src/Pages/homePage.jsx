import About from "../components/home/aboutUs";
import Carousel from "../components/home/Carousel";
import Categories from "../components/home/Categories";
import Contact from "../components/contact/contact";
import NavBar from "../components/main/navbar";
import Footer from './../components/main/footer';

export default function HomePage() {
  return (
    <main className="bg-light-green font-test text-white">
      <NavBar/>
      <Carousel />
      <About />
      <Categories />
      <Contact />
      <Footer/>
    </main>
  );
}
