import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { slidesData2 } from "@/data/item";
import { Link } from "react-router-dom";

export default function CharecterSlider() {
  return (
    <section className="relative pb-12 pt-24 lg:py-36">
      <picture className="pointer-events-none absolute inset-0 -z-10">
        <img
          src="/img/gradient_creative.jpg"
          alt="gradient"
          className="h-full w-full"
        />
      </picture>
      <div className="container">
        <h2 className="mx-auto mb-16 max-w-md text-center font-display text-3xl text-white">
          Collect Them All. Be the True Ownership for Players
        </h2>
      </div>
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
          modules={[EffectCoverflow, Pagination]}
          pagination={{ el: ".spb3", clickable: true }}
          className="swiper coverflow-slider !py-5"
        >
          {slidesData2.map((elm, i) => (
            <SwiperSlide key={i}>
              <article>
                <Link
                  to={`/item/${elm.id}`}
                  className="animate-gradient--no-text-fill block animate-gradient overflow-hidden rounded-2.5xl !bg-clip-border p-[2px] text-center shadow-md transition-shadow hover:shadow-lg"
                >
                  <div className="rounded-[1.125rem] bg-jacarta-900 p-8">
                    <img
                      src="/img/nft-game/gradient_glow_small.png"
                      alt="image"
                      className="absolute inset-0"
                    />
                    <figure className="relative my-4 mb-14">
                      <img
                        src={elm.imageSrc}
                        alt="item 1"
                        className="swiper-lazy inline-block"
                        height="212"
                        width="182"
                      />
                      {/* <div className="swiper-lazy-preloader"></div> */}
                    </figure>
                    <div className="relative rounded-2lg bg-jacarta-700 p-5">
                      <h3 className="mb-3 text-lg font-semibold leading-none text-white">
                        {elm.title}
                      </h3>
                      <div className="flex justify-center space-x-5">
                        <div className="flex items-center">
                          <div className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-jacarta-900">
                            <svg
                              width="16"
                              height="16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_1739_6537)">
                                <path
                                  d="M10.666 1.333v1.334H10v2.162c0 .772.167 1.534.49 2.234l2.855 6.184a1 1 0 01-.908 1.42H3.563a1 1 0 01-.909-1.42L5.51 7.063c.323-.7.49-1.462.49-2.234V2.667h-.666V1.333h5.333zm-2 1.334H7.333v2.666h1.333V2.667z"
                                  fill="url(#paint0_linear_1739_6537)"
                                />
                              </g>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_1739_6537"
                                  x1="8"
                                  y1="14.667"
                                  x2="7.735"
                                  y2="1.641"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#8054FF" />
                                  <stop offset="1" stopColor="#FF68D5" />
                                </linearGradient>
                                <clipPath id="clip0_1739_6537">
                                  <path fill="#fff" d="M0 0h16v16H0z" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <span className="font-display text-sm font-semibold text-white">
                            {elm.category1}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <div className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-jacarta-900">
                            <svg
                              width="16"
                              height="16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_1739_6544)">
                                <path
                                  d="M9.334 12V9.338h-7.95a5.333 5.333 0 019.588-4.605A3.667 3.667 0 1111.667 12H9.334zm-5.333 1.333h6.666v1.334H4.001v-1.334zm-2.667-2.666h6.667V12H1.334v-1.333z"
                                  fill="url(#paint0_linear_1739_6544)"
                                />
                              </g>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_1739_6544"
                                  x1="8.174"
                                  y1="14.667"
                                  x2="7.994"
                                  y2="2.348"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#C5FFFB" />
                                  <stop offset="1" stopColor="#39FFF3" />
                                </linearGradient>
                                <clipPath id="clip0_1739_6544">
                                  <path fill="#fff" d="M0 0h16v16H0z" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <span className="font-display text-sm font-semibold text-white">
                            {elm.category2}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>{" "}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="spb3 swiper-pagination-2 mt-4 text-center"></div>
      </div>
    </section>
  );
}
