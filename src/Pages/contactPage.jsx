import Contact from "../components/contact/contact";
import NavBar from "../components/main/navbar";
import Footer from "./../components/main/footer";

export default function ContactPage() {
  return (    <section className="text-black bg-white">
      <NavBar />
      <Contact />
      <Footer />
    </section>

  );
}
