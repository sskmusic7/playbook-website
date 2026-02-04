import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { slidesData } from "@/data/item";

export default function Hero() {
  const [activeThumb, setActiveThumb] = useState(null);
  return (
    <section className="relative h-screen">
      <Swiper
        slidesPerGroupAuto
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        loop={true}
        spaceBetween={10}
        // navigation={true}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="swiper full-slider h-screen"
      >
        {slidesData.map((elm, i) => (
          <SwiperSlide
            key={i}
            className="swiper-slide after:absolute after:inset-0 after:bg-jacarta-900/60"
          >
            <div className="container relative z-10 h-full pt-40">
              <h2 className="font-display text-2xl font-semibold text-white">
                <Link to={`/item/${elm.id}`}>{elm.title}</Link>
              </h2>
              <Link
                to={`/user/${elm.id}`}
                className="text-2xs font-medium text-white"
              >
                By {elm.author}
              </Link>
            </div>
            <img
              src={elm.imageSrc}
              className="absolute inset-0 h-full w-full object-cover"
              alt="slide 1"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-x-0 bottom-12">
        <div className="container">
          <Swiper
            slidesPerGroupAuto
            modules={[FreeMode, Navigation, Thumbs]}
            onSwiper={setActiveThumb}
            loop={false}
            // spaceBetween={10}
            slidesPerView="auto"
            breakpoints={{
              100: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            className="swiper full-slider-thumbs"
          >
            {slidesData.map((elm, i) => (
              <SwiperSlide
                key={i}
                className="swiper-slide cursor-pointer rounded p-5"
              >
                <img
                  src={elm.thumbImage}
                  className="w-full rounded-lg"
                  alt="thumb 1"
                />
                <div className="carousel-progress relative -bottom-5 z-10 -ml-5 -mr-5 h-0.5 bg-white/20">
                  <div className="progress absolute h-0.5 w-0 bg-accent"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
