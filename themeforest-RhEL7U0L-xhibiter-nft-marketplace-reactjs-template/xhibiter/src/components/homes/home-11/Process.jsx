import { process2 } from "@/data/process";

export default function Process() {
  return (
    <section className="py-24 dark:bg-jacarta-800">
      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
            Get started in a few minutes
          </h2>
          <p className="text-lg dark:text-jacarta-300">
            Supports a variety of the most popular digital currencies.
          </p>
        </div>

        <div className="mb-20 lg:flex lg:flex-nowrap lg:space-x-8">
          {process2.map((elm, i) => (
            <div
              key={i}
              className="relative mb-12 rounded-2.5xl border border-jacarta-100 bg-white p-12 transition-shadow hover:shadow-xl dark:border-jacarta-700 dark:bg-jacarta-700 lg:w-1/3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                className="absolute top-5 right-5 fill-accent/25 dark:fill-accent/50"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d={elm.svgPath} />
              </svg>
              <span className="mb-2 inline-block text-2xs font-medium text-accent">
                Step {elm.stepNumber}
              </span>
              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                {elm.title}
              </h3>
              <p className="dark:text-jacarta-300">{elm.description}</p>
              <div className="absolute -bottom-6 left-1/2 inline-flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-light-base dark:bg-jacarta-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  className="h-rotate fill-accent dark:fill-accent-lighter"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 overflow-hidden rounded-2.5xl px-16 py-24 lg:px-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 h-[150%] dark:hidden">
            <img
              src="/img/gradient.jpg"
              alt="gradient"
              className="h-full w-full"
            />
          </picture>
          <picture className="pointer-events-none absolute inset-0 -z-10 hidden h-[150%] dark:block">
            <img
              src="/img/gradient_dark.jpg"
              alt="gradient dark"
              className="h-full w-full"
            />
          </picture>
          <img
            src="/img/crypto-trading/crypto_trading_cta_icons.png"
            alt="image"
            className="pointer-events-none absolute top-1/2 right-1/4 -z-10 -translate-y-1/2"
            loading="lazy"
          />
          <div className="lg:flex lg:justify-between">
            <div className="mb-6 max-w-lg lg:mb-0">
              <h2 className="mb-5 font-display text-3xl text-jacarta-700 dark:text-white">
                Earn up to $13 worth of crypto
              </h2>
              <p className="text-lg leading-normal dark:text-jacarta-300">
                Discover how specific cryptocurrencies work — and get a bit of
                each crypto to try out for yourself.
              </p>
            </div>
            <a
              href="#"
              className="inline-block self-center rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              Start Earning
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
