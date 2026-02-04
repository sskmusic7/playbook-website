import { collections5 } from "@/data/item";

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative px-6 pb-8">
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="w-full lg:w-1/3">
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            {collections5.slice(0, 4).map((elm, i) => (
              <article key={i}>
                <div className="relative overflow-hidden rounded-2.5xl bg-white dark:bg-jacarta-700">
                  <figure className="relative">
                    <Link
                      to={`/item/${elm.id}`}
                      className="group block after:absolute after:inset-0 after:block after:bg-jacarta-900/20"
                    >
                      <img
                        src={elm.imageSrc}
                        alt="item 1"
                        className="w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                        height="470"
                        width="470"
                      />
                    </Link>
                  </figure>
                  <div className="pointer-events-none absolute bottom-0 w-full p-5">
                    <h2 className="font-display text-base leading-none text-white xl:text-lg">
                      {elm.title}
                    </h2>
                    <span className="text-2xs text-white">by {elm.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <article>
            <div className="relative overflow-hidden rounded-2.5xl bg-white dark:bg-jacarta-700">
              <figure className="relative">
                <Link
                  to={`/item/${collections5[4].id}`}
                  className="group block after:absolute after:inset-0 after:block after:bg-jacarta-900/20"
                >
                  <img
                    src={collections5[4].imageSrc}
                    alt="item 20"
                    className="w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                    height="959"
                    width="959"
                  />
                </Link>
              </figure>
              <div className="pointer-events-none absolute bottom-0 w-full p-5">
                <h2 className="font-display text-2xl leading-none text-white">
                  {collections5[4].title}
                </h2>
                <span className="text-2xs text-white">
                  {collections5[4].author}
                </span>
              </div>
            </div>
          </article>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            {collections5.slice(5, 9).map((elm, i) => (
              <article key={i}>
                <div className="relative overflow-hidden rounded-2.5xl bg-white dark:bg-jacarta-700">
                  <figure className="relative">
                    <Link
                      to={`/item/${elm.id}`}
                      className="group block after:absolute after:inset-0 after:block after:bg-jacarta-900/20"
                    >
                      <img
                        src={elm.imageSrc}
                        alt="item 1"
                        className="w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                        height="470"
                        width="470"
                      />
                    </Link>
                  </figure>
                  <div className="pointer-events-none absolute bottom-0 w-full p-5">
                    <h2 className="font-display text-base leading-none text-white xl:text-lg">
                      {elm.title}
                    </h2>
                    <span className="text-2xs text-white">by {elm.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
