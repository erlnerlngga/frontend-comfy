import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Featured from "./components/Freatured";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      {/* @ts-expect-error  */}
      <NavBar />
      <Hero />
      {/* @ts-expect-error  */}
      <Featured />
      <Services />
      <Subscribe />
      <Footer />
    </main>
  );
}
