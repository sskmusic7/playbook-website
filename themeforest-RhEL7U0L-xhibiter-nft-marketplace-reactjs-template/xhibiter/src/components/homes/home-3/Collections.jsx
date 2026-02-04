/* eslint-disable react/no-unescaped-entities */

import { useEffect } from "react";
import { collections } from "@/data/collections";
import tippy from "tippy.js";

import { Link } from "react-router-dom";

export default function Collections() {
  useEffect(() => {
    tippy("[data-tippy-content]");
  }, []);
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-7">
          <div className="rounded-2.5xl bg-light-base p-12 dark:bg-jacarta-800 lg:w-1/3">
            <h2 className="mb-8 text-center font-display text-3xl font-semibold text-jacarta-700 dark:text-white">
              Today's Drops
            </h2>
            <div className="flex flex-col space-y-5">
              {collections.slice(0, 4).map((elm, i) => (
                <div
                  key={i}
                  className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700"
                >
                  <figure className="mr-4 shrink-0">
                    <Link
                      to={`/collection/${elm.id}`}
                      className="relative block"
                    >
                      <img
                        src={elm.avatar}
                        alt="avatar 1"
                        className="rounded-2lg"
                        loading="lazy"
                      />
                      <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                        {i + 1}
                      </div>
                      {elm.verified && (
                        <div
                          className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                          data-tippy-content="Verified Collection"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="h-[.875rem] w-[.875rem] fill-white"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                          </svg>
                        </div>
                      )}
                    </Link>
                  </figure>
                  <div>
                    <Link to={`/collection/${elm.id}`} className="block">
                      <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                        {elm.name}
                      </span>
                    </Link>
                    <span className="text-sm dark:text-jacarta-300">
                      {elm.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to={`/collections`}
              className="mt-8 block text-center text-sm font-bold tracking-tight text-accent"
            >
              View All Drops
            </Link>
          </div>

          <div className="rounded-2.5xl bg-light-base p-12 dark:bg-jacarta-800 lg:w-1/3">
            <h2 className="mb-8 text-center font-display text-3xl font-semibold text-jacarta-700 dark:text-white">
              Top Sellers
            </h2>
            <div className="flex flex-col space-y-5">
              {collections.slice(4, 8).map((elm, i) => (
                <div
                  key={i}
                  className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700"
                >
                  <figure className="mr-4 shrink-0">
                    <Link
                      to={`/collection/${elm.id}`}
                      className="relative block"
                    >
                      <img
                        src={elm.avatar}
                        alt="avatar 1"
                        className="rounded-2lg"
                        loading="lazy"
                      />
                      <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                        {i + 1}
                      </div>
                      {elm.verified && (
                        <div
                          className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                          data-tippy-content="Verified Collection"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="h-[.875rem] w-[.875rem] fill-white"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                          </svg>
                        </div>
                      )}
                    </Link>
                  </figure>
                  <div>
                    <Link to={`/collection/${elm.id}`} className="block">
                      <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                        {elm.name}
                      </span>
                    </Link>
                    <span className="text-sm dark:text-jacarta-300">
                      {elm.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to={`/collections`}
              className="mt-8 block text-center text-sm font-bold tracking-tight text-accent"
            >
              View All Sellers
            </Link>
          </div>

          <div className="rounded-2.5xl bg-light-base p-12 dark:bg-jacarta-800 lg:w-1/3">
            <h2 className="mb-8 text-center font-display text-3xl font-semibold text-jacarta-700 dark:text-white">
              Top Buyers
            </h2>
            <div className="flex flex-col space-y-5">
              {collections.slice(8, 12).map((elm, i) => (
                <div
                  key={i}
                  className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700"
                >
                  <figure className="mr-4 shrink-0">
                    <Link
                      to={`/collection/${elm.id}`}
                      className="relative block"
                    >
                      <img
                        alt="avatar 1"
                        src={elm.avatar}
                        className="rounded-2lg"
                        loading="lazy"
                      />
                      <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                        {i + 1}
                      </div>
                      {elm.verified && (
                        <div
                          className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                          data-tippy-content="Verified Collection"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="h-[.875rem] w-[.875rem] fill-white"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                          </svg>
                        </div>
                      )}
                    </Link>
                  </figure>
                  <div>
                    <Link to={`/collection/${elm.id}`} className="block">
                      <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                        {elm.name}
                      </span>
                    </Link>
                    <span className="text-sm dark:text-jacarta-300">
                      {elm.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to={`/collections`}
              className="mt-8 block text-center text-sm font-bold tracking-tight text-accent"
            >
              View All Buyers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
