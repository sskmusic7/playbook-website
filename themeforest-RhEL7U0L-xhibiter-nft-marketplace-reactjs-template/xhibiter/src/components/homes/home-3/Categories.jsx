import { Swiper, SwiperSlide } from "swiper/react";

import { categories2 } from "@/data/categories";

import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="max-w-[100%] overflow-hidden">
      <section className="py-24 max-w-[84%] mx-auto overflow-visible">
        <h2 className="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white">
          Browse by category
        </h2>

        <div className="relative">
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
      </section>
    </div>
  );
}
