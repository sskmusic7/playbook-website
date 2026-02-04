/* eslint-disable react/no-unescaped-entities */
import { heroItems } from "@/data/item";

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative py-20 md:pt-32">
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <img src="/img/gradient.jpg" alt="gradient" className="h-full" />
      </picture>
      <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <img
          src="/img/gradient_dark.jpg"
          alt="gradient dark"
          className="h-full"
        />
      </picture>

      <div className="h-full px-6 xl:px-20">
        <div className="grid h-full items-center gap-4 lg:grid-cols-12">
          <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-5 xl:pl-[20%] xl:pr-[10%]">
            <div className="mb-10 w-full sm:flex sm:space-x-4">
              <div className="mb-4 flex-1 rounded-2lg bg-white p-4 text-center dark:bg-white/[.15]">
                <span className="block font-display text-3xl text-[#8DD059]">
                  10,568
                </span>
                <span className="block font-display text-sm text-jacarta-500 dark:text-white">
                  Collectibles
                </span>
              </div>
              <div className="mb-4 flex-1 rounded-2lg bg-white p-4 text-center dark:bg-white/[.15]">
                <span className="block font-display text-3xl text-[#737EF2]">
                  1,200
                </span>
                <span className="block font-display text-sm text-jacarta-500 dark:text-white">
                  Auctions
                </span>
              </div>
              <div className="mb-4 flex-1 rounded-2lg bg-white p-4 text-center dark:bg-white/[.15]">
                <span className="block font-display text-3xl text-[#F35BC7]">
                  6,897
                </span>
                <span className="block font-display text-sm text-jacarta-500 dark:text-white">
                  Artists
                </span>
              </div>
            </div>
            <h1 className="mb-6 text-center font-display text-5xl text-jacarta-700 dark:text-white md:text-left lg:text-5xl xl:text-6xl">
              Buy and Sell Digital Art and NFT’s
            </h1>
            <p className="mb-8 text-center text-lg dark:text-jacarta-200 md:text-left">
              The world's largest digital marketplace for crypto collectibles
              and non-fungible tokens
            </p>
            <div className="flex space-x-4">
              <Link
                to="/create"
                className="w-36 rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
              >
                Upload
              </Link>
              <Link
                to="/collections"
                className="w-36 rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
              >
                Explore
              </Link>
            </div>
          </div>

          <div className="relative col-span-6 xl:col-span-6 xl:col-start-7">
            <img
              src="/img/hero/badge.png"
              className="absolute top-0 z-10 -ml-16 animate-spin-slow md:top-[12%]"
              alt="image"
            />
            <div className="md:flex md:space-x-6 xl:space-x-12">
              <div className="mb-6 md:flex md:w-1/2 md:items-center">
                <article>
                  <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                    <figure className="relative">
                      <Link to={`/item/${heroItems[0].id}`}>
                        <img
                          src={heroItems[0].imageSrc}
                          alt="item 1"
                          className="w-full object-cover"
                          height="437"
                          width="406"
                        />
                      </Link>
                    </figure>
                    <div className="p-6">
                      <div className="flex">
                        <Link to={`/user/2`} className="shrink-0">
                          <img
                            src={heroItems[0].userImgSrc}
                            alt="avatar"
                            className="mr-4 h-10 w-10 rounded-full"
                          />
                        </Link>
                        <div>
                          <Link
                            to={`/item/${heroItems[0].id}`}
                            className="block"
                          >
                            <span className="font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">
                              {heroItems[0].title}
                            </span>
                          </Link>
                          <a href="#" className="text-2xs text-accent">
                            {heroItems[0].userName}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="space-y-6 md:w-1/2 xl:space-y-12">
                <article>
                  <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                    <figure className="relative">
                      <Link to={`/item/${heroItems[1].id}`}>
                        <img
                          src={heroItems[1].imageSrc}
                          alt="item 1"
                          height="437"
                          width="406"
                          className="w-full object-cover"
                        />
                      </Link>
                    </figure>
                    <div className="p-6">
                      <div className="flex">
                        <Link to={`/user/3`} className="shrink-0">
                          <img
                            src={heroItems[1].userImgSrc}
                            alt="avatar"
                            className="mr-4 h-10 w-10 rounded-full"
                          />
                        </Link>
                        <div>
                          <Link
                            to={`/item/${heroItems[1].id}`}
                            className="block"
                          >
                            <span className="font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">
                              {heroItems[1].title}
                            </span>
                          </Link>
                          <a href="#" className="text-2xs text-accent">
                            {heroItems[1].userName}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <div className="md:w-3/4">
                  <article>
                    <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                      <figure className="relative">
                        <Link to={`/item/${heroItems[2].id}`}>
                          <img
                            src={heroItems[2].imageSrc}
                            alt="item 1"
                            className="w-full object-cover"
                            height="300"
                            width="300"
                          />
                        </Link>
                      </figure>
                      <div className="p-6">
                        <div className="flex">
                          <Link to={`/user/3`} className="shrink-0">
                            <img
                              src={heroItems[2].userImgSrc}
                              alt="avatar"
                              className="mr-4 h-10 w-10 rounded-full"
                            />
                          </Link>
                          <div>
                            <Link
                              to={`/item/${heroItems[2].id}`}
                              className="block"
                            >
                              <span className="font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">
                                {heroItems[2].title}
                              </span>
                            </Link>
                            <a href="#" className="text-2xs text-accent">
                              {heroItems[2].userName}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
