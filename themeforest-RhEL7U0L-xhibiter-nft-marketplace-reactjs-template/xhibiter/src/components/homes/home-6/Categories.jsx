/* eslint-disable react/no-unescaped-entities */

import { Swiper, SwiperSlide } from "swiper/react";

import { categories2 } from "@/data/categories";

import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <section className="relative py-24">
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <img
          src="/img/gradient_light.jpg"
          alt="gradient"
          className="h-full w-full"
        />
      </picture>
      <h2 className="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white">
        Browse by category
      </h2>
      <div className="max-w-[100%] overflow-hidden">
        <div className="relative  max-w-[84%] mx-auto overflow-visible">
          <Swiper
            slidesPerGroupAuto
            spaceBetween={30}
            slidesPerView={5}
            initialSlide={2}
            loop={true}
            breakpoints={{
              100: {
                slidesPerView: 1,
              },
              420: {
                slidesPerView: 2,
              },
              565: {
                slidesPerView: 3,
              },
              1000: {
                slidesPerView: 4,
              },
              1100: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            //   style={{ transform: "scaleX(1.2)" }}
            className="swiper centered-slider !pb-5  "
            style={{ overflow: "visible" }}
          >
            {categories2.map((elm, i) => (
              <SwiperSlide key={i}>
                <article>
                  <Link
                    to="/collections"
                    className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                  >
                    <figure className={`rounded-t-[0.625rem] ${elm.bgColor}`}>
                      <img
                        src={elm.imgSrc}
                        alt="item 1"
                        className="w-full rounded-[0.625rem]"
                        loading="lazy"
                      />
                    </figure>
                    <div className="mt-4 text-center">
                      <span className="font-display text-lg text-jacarta-700 dark:text-white">
                        {elm.name}
                      </span>
                    </div>
                  </Link>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="container pt-20">
        <div className="flex flex-wrap rounded-2.5xl bg-white p-10 dark:bg-jacarta-700 md:flex-nowrap md:space-x-8 md:p-[4.25rem] lg:space-x-16">
          <div className="mb-8 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent md:mb-0 md:w-16">
            <svg
              width="22"
              height="19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white"
            >
              <path d="M6.027 18.096c-.997 0-1.813-.204-2.448-.612a5.147 5.147 0 01-1.564-1.564 5.729 5.729 0 01-.952-2.38C.927 12.679.86 11.976.86 11.432c0-2.221.567-4.239 1.7-6.052C3.693 3.567 5.461 2.093 7.863.96l.612 1.224c-1.405.59-2.606 1.519-3.604 2.788-1.042 1.27-1.564 2.561-1.564 3.876 0 .544.068 1.02.204 1.428a3.874 3.874 0 012.516-.884c1.179 0 2.199.385 3.06 1.156.862.77 1.292 1.836 1.292 3.196 0 1.27-.43 2.312-1.292 3.128-.861.816-1.881 1.224-3.06 1.224zm11.56 0c-.997 0-1.813-.204-2.448-.612a5.148 5.148 0 01-1.564-1.564 5.73 5.73 0 01-.952-2.38c-.136-.861-.204-1.564-.204-2.108 0-2.221.567-4.239 1.7-6.052 1.134-1.813 2.902-3.287 5.304-4.42l.612 1.224c-1.405.59-2.606 1.519-3.604 2.788-1.042 1.27-1.564 2.561-1.564 3.876 0 .544.068 1.02.204 1.428a3.874 3.874 0 012.516-.884c1.179 0 2.199.385 3.06 1.156.862.77 1.292 1.836 1.292 3.196 0 1.27-.43 2.312-1.292 3.128-.861.816-1.881 1.224-3.06 1.224z" />
            </svg>
          </div>

          <div className="mb-4 md:mb-0">
            <p className="text-lg leading-normal text-jacarta-700 dark:text-white">
              Xhibiter is one of the most exciting, important companies in the
              world right now because it's the portal to the new digital
              economy. If you're interested in shaping a new business model for
              creators, this is the team to join.
            </p>
            <span className="mt-12 block font-display text-md font-medium text-jacarta-700 dark:text-white">
              Katie Smith
            </span>
            <span className="text-2xs font-medium tracking-tight dark:text-jacarta-400">
              General Partner at Entrepreneur
            </span>
          </div>

          <img
            src="/img/testimonials.jpg"
            alt="image"
            className="w-28 self-start rounded-2.5xl lg:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
