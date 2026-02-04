/* eslint-disable react/no-unescaped-entities */

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { collections2 } from "@/data/item";

export default function Hero() {
  return (
    <section className="hero relative py-20 md:pt-32">
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
        <img src="/img/gradient.jpg" alt="gradient" className="w-full" />
      </picture>
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
        <img
          src="/img/gradient_dark.jpg"
          alt="gradient dark"
          className="w-full"
        />
      </picture>

      <div className="container">
        <div className="py-24 text-center">
          <h1 className="mb-6 font-display text-5xl text-jacarta-700 dark:text-white lg:text-6xl xl:text-7xl">
            Collect Digital Art.
          </h1>
          <p className="mb-8 text-lg dark:text-jacarta-200">
            Buy and sell NFTs from the world's top artists
          </p>
          <div className="inline-flex space-x-4">
            <Link
              to="/create"
              className="w-36 rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              Create
            </Link>
            <Link
              to="/collections"
              className="w-36 rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
            >
              Explore
            </Link>
          </div>
        </div>

        <div className="relative">
          <Swiper
            slidesPerGroupAuto
            modules={[Navigation, Pagination]}
            spaceBetween={15}
            slidesPerView={5}
            breakpoints={{
              100: {
                slidesPerView: 1,
              },
              565: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1100: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              nextEl: ".snbn3",
              prevEl: ".snbp3",
            }}
            className="swiper card-slider-3-columns !pb-5"
          >
            {collections2.map((elm, i) => (
              <SwiperSlide key={i}>
                <article>
                  <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                    <figure className="relative">
                      <Link to={`/item/${elm.id}`}>
                        <img
                          src={elm.imageSrc}
                          alt="item 1"
                          className="swiper-lazy h-[430px] w-full object-cover"
                          height="430"
                          width="379"
                        />
                        <div className="swiper-lazy-preloader"></div>
                      </Link>
                    </figure>
                    <div className="p-6">
                      <div className="flex">
                        <Link to={`/user/${elm.id}`} className="shrink-0">
                          <img
                            src={elm.avatarSrc}
                            alt="avatar"
                            className="mr-4 h-10 w-10 rounded-full"
                          />
                        </Link>
                        <div>
                          <Link to={`/item/${elm.id}`} className="block">
                            <span className="font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">
                              {elm.title}
                            </span>
                          </Link>
                          <a href="#" className="text-2xs text-accent">
                            {elm.subTitle}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev swiper-button-prev-3 group absolute top-1/2 -left-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-left-6 snbp3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-jacarta-700 group-hover:fill-accent"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
            </svg>
          </div>
          <div className="swiper-button-next swiper-button-next-3 group absolute top-1/2 -right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-right-6 snbn3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-jacarta-700 group-hover:fill-accent"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
