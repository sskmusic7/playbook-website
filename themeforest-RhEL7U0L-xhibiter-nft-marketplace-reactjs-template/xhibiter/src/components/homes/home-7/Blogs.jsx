import { testimonialsData } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { blogs } from "@/data/blogs";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <section className="bg-light-base py-24 pb-80 dark:bg-jacarta-900">
      <div className="container">
        <div className="mx-auto mb-12 max-w-sm text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
            Financial News
          </h2>
          <p className="text-lg dark:text-jacarta-300">
            Here are the best features that makes Xhibiter the most powerful,
            and fast.
          </p>
        </div>
        <Swiper
          slidesPerGroupAuto
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            420: {
              slidesPerView: 1,
            },
            565: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 2,
            },
            1100: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            el: ".spb2",
            clickable: true,
          }}
          className="swiper card-slider-3-columns-large-gap"
        >
          {blogs.map((elm, i) => (
            <SwiperSlide key={i}>
              <article className="rounded-2.5xl bg-white p-12 dark:bg-jacarta-700">
                <div className="mb-4 flex flex-wrap gap-4 text-2xs dark:text-jacarta-300">
                  <div className="flex flex-wrap items-center space-x-2">
                    <span className="text-accent">
                      <Link to={`/single-post/${elm.id}`} className="uppercase">
                        {elm.category}
                      </Link>
                    </span>
                  </div>
                  <span>
                    <time>{new Date(elm.date).toDateString()}</time>
                  </span>
                </div>

                <h2 className="mb-5 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
                  <Link to={`/single-post/${elm.id}`}>{elm.title}</Link>
                </h2>
                <p className="mb-8 dark:text-jacarta-300">{elm.content}</p>
                <div className="overflow-hidden">
                  <Link
                    to={`/single-post/${elm.id}`}
                    className="h-rotate inline-block transition-transform will-change-transform hover:translate-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="fill-accent"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                    </svg>
                  </Link>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className=" spb2 swiper-pagination-1 mt-10 text-center"></div>
      </div>
    </section>
  );
}
