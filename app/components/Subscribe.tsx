export default function Subscribe() {
  return (
    <article className="container mx-auto mb-24 lg:mb-36 pt-24 pb-20 px-4 lg:px-36">
      <h1 className="text-gray-700 font-bold text-3xl mb-12">
        Join our newsletter and get 20% off
      </h1>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
        <p className="text-gray-500 leading-7 lg:basis-1/2 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, veritatis?
        </p>

        <form className="lg:basis-1/2">
          <input
            type="email"
            placeholder="Enter Email"
            className="outline-none lg:w-2/3 border-y-2 border-l-2 border-clr-primary-8 rounded-l-md py-1.5 px-4"
          />
          <button className="outline-none lg:w-1/3 border-2 border-clr-primary-8 rounded-r-md py-1.5 px-4 bg-clr-primary-8 font-medium text-white tracking-widest transition hover:bg-clr-primary-5 hover:border-clr-primary-5">
            Subscribe
          </button>
        </form>
      </div>
    </article>
  );
}
