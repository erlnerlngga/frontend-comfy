import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";
import aboutImage from "../../public/aboutImage.jpeg";

export default function About() {
  return (
    <main>
      <NavBar />

      <article className="container mx-auto my-24 lg:my-36  px-4 lg:px-36 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        <Image
          src={aboutImage}
          height={500}
          width={500}
          alt="about image"
          className="rounded-md"
        />

        <div>
          <h1 className="relative mb-8 lg:mb-12 capitalize text-3xl font-bold inline-block text-gray-700 after:absolute after:top-[40px] after:border-b-4 after:border-clr-primary-6 after:w-1/2 after:left-0">
            our story
          </h1>

          <p className="text-gray-500 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  );
}
