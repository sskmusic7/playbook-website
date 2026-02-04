/* eslint-disable react/no-unescaped-entities */

const images = [
  { id: 1, src: "/img/nft-game/robot_large_2.png" },
  {
    id: 2,
    src: "/img/nft-game/robot_large_3.png",
  },
  {
    id: 3,
    src: "/img/nft-game/robot_large_4.png",
  },
];
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { Link } from "react-router-dom";

export default function Promo() {
  return (
    <section className="bg-[#010107] py-12 lg:pb-32">
      <div className="container">
        <div className="items-center justify-between lg:flex">
          <div className="mb-12 lg:w-[45%] lg:pr-16">
            <h2 className="mb-6 font-display text-2xl text-white">
              Find and Fight rare Creatures and Collect Stunning Pieces
            </h2>
            <p className="mb-8 text-lg leading-normal text-jacarta-200">
              Employees are our number-one priority, so we like to take care of
              them!
            </p>
            <p className="mb-12 text-jacarta-200">
              Every digital creation available through MakersPlace is an
              authentic and truly unique digital creation, signed and issued by
              the creator — made possible by blockchain technology. Even if the
              digital creation is copied, it won't be the authentic and
              originally signed version.
            </p>
            <Link
              to="/collections"
              className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              Create Avatar
            </Link>
          </div>
          <div className="relative text-center lg:w-1/2">
            <img
              src="/img/nft-game/gradient_glow_large_2.png"
              loading="lazy"
              alt="image"
              className="pointer-events-none absolute scale-150"
            />
            <Swiper
              slidesPerGroupAuto
              modules={[Navigation, Autoplay]}
              spaceBetween={15}
              autoplay={true}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: ".snbn10",
                prevEl: ".snbp10",
              }}
              className="swiper single-slider"
            >
              {images.map((elm, i) => (
                <SwiperSlide key={i}>
                  <img src={elm.src} alt="image" className="inline-block" />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-6 flex justify-center space-x-3">
              <div className="snbp10 swiper-button-prev swiper-button-prev-5 group z-10 !flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume">
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
              <div className="snbn10 swiper-button-next swiper-button-next-5 group z-10 !flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume">
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

            <img
              src="/img/nft-game/crypto_icons_1.png"
              alt="image"
              loading="lazy"
              className="pointer-events-none absolute -top-10 z-10 animate-fly"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
