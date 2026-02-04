import { wallets } from "@/data/wallets";

export default function Wallets() {
  return (
    <section className="relative pb-20 pt-28 dark:bg-jacarta-800">
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <img
          src="/img/gradient_light.jpg"
          alt="gradient"
          className="h-full w-full"
        />
      </picture>
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-[1.875rem]">
          {wallets.map((elm, i) => (
            <a
              key={i}
              href="#"
              className="mb-8 rounded-2.5xl border border-jacarta-100 bg-white p-8 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700"
            >
              <img
                src={elm.imgSrc}
                className="mx-auto mb-7 -mt-[3.5rem] h-[5.5rem] w-[5.5rem] rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700"
                alt="wallet"
              />
              <h3 className="mb-3 font-display text-md text-jacarta-700 dark:text-white">
                {elm.name}
              </h3>
              <p className="dark:text-jacarta-300">{elm.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
