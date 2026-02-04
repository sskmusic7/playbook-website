import { benefits } from "@/data/benefits";

import { useState } from "react";

export default function Benefits() {
  const [currentTabItem, setCurrentTabItem] = useState(benefits[0]);
  return (
    <section className="py-24 dark:bg-jacarta-900">
      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
            How can DAO-enabled NFT platforms Benefit Users?
          </h2>
          <p className="text-lg dark:text-jacarta-300">
            We empower artists, creators, and players to build the platform they
            always envisioned, providing the means to unleash your creativity
            and earn income.
          </p>
        </div>
        <div className="lg:flex lg:flex-nowrap lg:space-x-10">
          <div className="lg:w-[43%]">
            <ul className="nav nav-tabs mb-12 space-y-2" role="tablist">
              {benefits.map((elm, i) => (
                <li
                  onClick={() => setCurrentTabItem(elm)}
                  key={i}
                  className="nav-item"
                  role="presentation"
                >
                  <button
                    className={`nav-link nav-link--style-2 group relative flex w-full border-b border-jacarta-100 p-6 text-left dark:border-jacarta-600 ${
                      currentTabItem == elm ? "active" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="mr-2 h-8 w-8 flex-shrink-0 fill-accent"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d={elm.svgPath} />
                    </svg>

                    <div>
                      <span className="mb-2 mt-1 block font-display text-xl font-medium group-hover:text-accent dark:text-white">
                        {elm.title}
                      </span>
                      <div className="nav-link-content hidden">
                        <p className="text-jacarta-500 dark:text-jacarta-300">
                          {elm.description}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center overflow-hidden lg:w-[57%] lg:overflow-visible">
            <div className="tab-content flex-1">
              <div
                className="tab-pane fade show active relative"
                id="ownership"
                role="tabpanel"
                aria-labelledby="ownership-tab"
              >
                <figure className="flex items-center justify-center">
                  <img
                    src={currentTabItem.img}
                    alt="image"
                    className="rounded-full border border-jacarta-100 p-14 dark:border-jacarta-600"
                  />
                  <img
                    src="/img/dao/3d_elements_circle.png"
                    alt="image"
                    className="absolute animate-spin-slow"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
