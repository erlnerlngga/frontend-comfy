import heroImage from "../../public/hero-image.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <article className="container mx-auto my-24 lg:my-36  px-4 lg:px-28 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
      <div className="">
        <h1 className="capitalize text-5xl font-bold mb-6 leading-tight text-gray-700">
          design your <br /> comfort zone
        </h1>
        <p className="text-base text-gray-500 leading-7 mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <Link href="/products">
          <button className="uppercase py-1.5 px-4 bg-clr-primary-8 font-medium text-white tracking-widest rounded-md transition hover:bg-clr-primary-5">
            shop now
          </button>
        </Link>
      </div>

      <div className="lg:justify-self-center">
        <Image src={heroImage} alt="Hero Image" height={500} width={500} />
      </div>
    </article>
  );
}
