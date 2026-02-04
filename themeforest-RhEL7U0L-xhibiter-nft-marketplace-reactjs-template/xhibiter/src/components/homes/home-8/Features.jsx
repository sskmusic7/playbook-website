import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { service2 } from "@/data/service";

export default function Features() {
  return (
    <section className="bg-[#010107] py-12 lg:py-24">
      <div className="container relative overflow-hidden xl:left-[calc((100vw-1202px)/4)] xl:max-w-[calc(1202px+((100vw-1202px)/2))] xl:pr-[calc((100vw-1176px)/2)]">
        <div className="mx-auto mb-12 max-w-lg text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-white md:text-5xl">
            Fabulous Things To Enjoy
          </h2>
          <p className="text-lg text-jacarta-300">
            State-of-the-art technology to challenge global warming and trigger
            substantial change.
          </p>
        </div>
        <Swiper
          // slidesPerGroupAuto
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          // slidesPerView={3}
          autoplay={true}
          slidesPerGroupAuto
          slidesPerView={"auto"}
          rewind
          pagination={{
            el: ".spn5",
            clickable: true,
          }}
          breakpoints={{
            420: {
              slidesPerView: 1,
            },
            565: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
          className="swiper card-slider-3-columns-large-gap xl:!overflow-visible"
        >
          {service2.map((elm, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-2.5xl bg-jacarta-800 p-10">
                <div className="mb-4 md:mb-0">
                  <img src={elm.imageSrc} className="mb-6" alt="image" />
                  <h3 className="mb-4 font-display text-lg text-white">
                    {elm.title}
                  </h3>
                  <p className="text-jacarta-300">{elm.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className=" spn5 swiper-pagination-1 mt-10 text-center"></div>
      </div>
    </section>
  );
}
