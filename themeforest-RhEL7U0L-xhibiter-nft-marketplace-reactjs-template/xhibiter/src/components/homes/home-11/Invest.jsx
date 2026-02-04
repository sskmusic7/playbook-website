import { investData } from "@/data/invest";

export default function Invest() {
  return (
    <section className="relative bg-light-base py-24 dark:bg-jacarta-900">
      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
            Invest and earn
          </h2>
          <p className="text-lg dark:text-jacarta-300">
            Simple & Secure. Search popular coins and start earning
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-4">
          {investData.map((elm, i) => (
            <a
              key={i}
              href="#"
              className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700"
            >
              <figure className="mr-4 shrink-0">
                <img
                  src={elm.imgSrc}
                  alt="image"
                  width="48"
                  height="48"
                  className="h-12 w-12 rounded-2lg"
                  loading="lazy"
                />
              </figure>
              <div>
                <span className="block font-display font-semibold text-jacarta-700 dark:text-white">
                  {elm.symbol}
                </span>
                <span className="text-sm dark:text-jacarta-300">
                  <span className="text-green">{elm.apr}</span> APR
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
          >
            Start Earning
          </a>
        </div>
      </div>
    </section>
  );
}
