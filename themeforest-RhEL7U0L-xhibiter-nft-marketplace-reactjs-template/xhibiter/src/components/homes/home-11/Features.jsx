import { features3 } from "@/data/service";

export default function Features() {
  return (
    <section className="relative pt-24 pb-10 dark:bg-jacarta-800">
      <div className="container">
        <div className="lg:flex lg:flex-nowrap">
          <div className="mb-16 lg:w-1/2 lg:pr-20">
            <img
              src="/img/crypto-trading/crypto_trading_feature.jpg"
              alt="image"
              loading="lazy"
              className="rounded-2.5xl"
            />
          </div>

          <div className="mb-16 lg:w-1/2 lg:pl-5">
            <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
              Create your cryptocurrency portfolio today
            </h2>
            <p className="mb-12 text-lg leading-normal dark:text-jacarta-300">
              Start your first trade with these easy steps.
            </p>
            {features3.map((elm, i) => (
              <div key={i} className="mb-6 flex space-x-6">
                <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-2xl dark:bg-jacarta-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-6 w-6 fill-accent"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d={elm.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-3 mt-2 block font-display text-xl font-semibold text-jacarta-700 dark:text-white">
                    {elm.title}
                  </h3>
                  <p className="dark:text-jacarta-300">{elm.description}</p>
                </div>
              </div>
            ))}

            <div className="mt-10">
              <a
                href="#"
                className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
