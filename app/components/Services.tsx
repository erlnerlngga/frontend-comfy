import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

export default function Services() {
  return (
    <article className="container mx-auto mb-24 lg:mb-36 pt-24 pb-20 px-4 lg:px-36 bg-clr-primary-1">
      <div className="mb-16 lg:mb-0 flex flex-col gap-6 lg:items-center lg:flex-row lg:justify-between">
        <h1 className="capitalize font-bold text-3xl text-gray-700 lg:basis-1/2">
          custom furniture <br /> built only for you
        </h1>
        <p className="text-gray-500 leading-7 lg:basis-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          debitis consectetur reprehenderit non aliquam voluptates dolore aut
          vero consequuntur. Lorem ipsum dolor sit.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 mx-1 lg:mx-0 lg:grid-cols-3 lg:translate-y-1/2">
        <div className="bg-clr-primary-4 rounded-md flex flex-col gap-2 items-center p-6">
          <div className="p-4 bg-clr-primary-1 rounded-full mb-4">
            <GiCompass className="w-10 h-10 text-clr-primary-10" />
          </div>
          <h2 className="text-gray-700 font-bold text-2xl">Mission</h2>
          <p className="text-center text-gray-700 leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </div>

        <div className="bg-clr-primary-4 rounded-md flex flex-col gap-2 items-center p-6">
          <div className="p-4 bg-clr-primary-1 rounded-full mb-4">
            <GiDiamondHard className="w-10 h-10 text-clr-primary-10" />
          </div>
          <h2 className="text-gray-700 font-bold text-2xl">Vision</h2>
          <p className="text-center text-gray-700 leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </div>

        <div className="bg-clr-primary-4 rounded-md flex flex-col gap-2 items-center p-6">
          <div className="p-4 bg-clr-primary-1 rounded-full mb-4">
            <GiStabbedNote className="w-10 h-10 text-clr-primary-10" />
          </div>
          <h2 className="text-gray-700 font-bold text-2xl">History</h2>
          <p className="text-center text-gray-700 leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </div>
      </div>
    </article>
  );
}
