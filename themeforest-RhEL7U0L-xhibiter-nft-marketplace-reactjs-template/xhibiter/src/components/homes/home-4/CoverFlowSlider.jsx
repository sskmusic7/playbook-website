import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { collections4 } from "@/data/item";
import { Link } from "react-router-dom";

export default function CoverFlowSlider() {
  return (
    <div className="relative px-6 pb-16 sm:px-0">
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          100: {
            // width: 640,
            slidesPerView: 1,
          },
          575: {
            // width: 640,
            slidesPerView: 3,
          },
          // when window width is >= 768px
          992: {
            // width: 768,
            slidesPerView: 5,
          },
        }}
        slidesPerGroupAuto
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={70}
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation]}
        navigation={{
          nextEl: ".snbn7",
          prevEl: ".snbp7",
        }}
        className="swiper coverflow-slider !py-5"
      >
        {collections4.map((elm, i) => (
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
                    {/* <div className="swiper-lazy-preloader"></div> */}
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

      <div className=" snbp7 swiper-button-prev swiper-button-prev-4 group absolute top-1/2 left-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume">
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
      <div className="snbn7 swiper-button-next swiper-button-next-4 group absolute top-1/2 right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume">
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
  );
}
