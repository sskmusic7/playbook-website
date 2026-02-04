import { benefits3 } from "@/data/benefits";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";

export default function Benefits() {
  return (
    <section className="py-24 dark:bg-jacarta-900">
      <div className="container">
        <Swiper
          slidesPerGroupAuto
          modules={[Scrollbar, Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          autoplay={true}
          scrollbar={{
            el: ".ssb1",
          }}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            420: {
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
          }}
          className="swiper !pt-10 "
        >
          {benefits3.map((elm, i) => (
            <SwiperSlide className="swiper-slide !h-auto mb-16" key={i}>
              <div className="h-full rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700">
                <div className="mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-12 w-12 fill-accent"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d={elm.svgPath} />
                  </svg>
                </div>

                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                  {elm.title}
                </h3>
                <p className="dark:text-jacarta-300">{elm.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="ssb1 swiper-scrollbar swiper-scrollbar-horizontal !mt-0"></div>
      </div>
    </section>
  );
}
