import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { bids } from "@/data/item";
import { useEffect, useState } from "react";
import tippy from "tippy.js";
import { Link } from "react-router-dom";

export default function Hotbids() {
  const [allBids, setAllBids] = useState(bids);
  useEffect(() => {
    tippy("[data-tippy-content]");
  }, []);

  const addLike = (index) => {
    const items = [...allBids];
    const item = items[index];
    if (!item.liked) {
      item.liked = true;
      item.totalLikes += 1;
      items[index] = item;
      setAllBids(items);
    } else {
      item.liked = false;
      item.totalLikes -= 1;
      items[index] = item;
      setAllBids(items);
    }
  };
  return (
    <section className="pt-20 pb-24">
      <div className="container">
        <h2 className="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white">
          <span
            className="mr-1 inline-block h-6 w-6 bg-contain bg-center text-xl"
            style={{
              backgroundImage:
                "url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/1f525.png)",
            }}
          ></span>
          Hot Bids
        </h2>

        <div className="relative">
          <Swiper
            slidesPerGroupAuto
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={5}
            // loop={true}
            breakpoints={{
              240: {
                slidesPerView: 1,
              },
              565: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1100: {
                slidesPerView: 4,
              },
            }}
            navigation={{
              nextEl: ".snbn1",
              prevEl: ".snbp1",
            }}
            className=" card-slider-4-columns !py-5"
          >
            {allBids.map((elm, i) => (
              <SwiperSlide key={i}>
                <article>
                  <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                    <figure>
                      <Link to={`/item/${elm.id}`}>
                        <img
                          src={elm.imageSrc}
                          alt="item"
                          width="230"
                          height="230"
                          className="w-full rounded-[0.625rem]"
                          loading="lazy"
                        />
                      </Link>
                    </figure>
                    <div className="mt-4 flex items-center justify-between">
                      <Link to={`/item/${elm.id}`}>
                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                          {elm.title}
                        </span>
                      </Link>
                      <span className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
                        <span data-tippy-content="ETH">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0"
                            y="0"
                            viewBox="0 0 1920 1920"
                            // xml:space="preserve"
                            className="h-4 w-4"
                          >
                            <path
                              fill="#8A92B2"
                              d="M959.8 80.7L420.1 976.3 959.8 731z"
                            />
                            <path
                              fill="#62688F"
                              d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                            />
                            <path
                              fill="#454A75"
                              d="M959.8 1295.4l539.8-319.1L959.8 731z"
                            />
                            <path
                              fill="#8A92B2"
                              d="M420.1 1078.7l539.7 760.6v-441.7z"
                            />
                            <path
                              fill="#62688F"
                              d="M959.8 1397.6v441.7l540.1-760.6z"
                            />
                          </svg>
                        </span>
                        <span className="text-sm font-medium tracking-tight text-green">
                          {elm.ethAmount}
                        </span>
                      </span>
                    </div>
                    <div className="mt-2 text-sm">
                      <span className="dark:text-jacarta-300">Current Bid</span>
                      <span className="text-jacarta-700 dark:text-jacarta-100">
                        {elm.currentBid}
                      </span>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      <button
                        type="button"
                        className="font-display text-sm font-semibold text-accent"
                        data-bs-toggle="modal"
                        data-bs-target="#placeBidModal"
                      >
                        Place bid
                      </button>

                      <div className="flex items-center space-x-1">
                        <span
                          onClick={() => addLike(i)}
                          className={`js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0 ${
                            elm.liked ? "js-likes--active" : ""
                          } `}
                          data-tippy-content="Favorite"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                          >
                            <path fill="none" d="M0 0H24V24H0z" />
                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                          </svg>
                        </span>
                        <span className="text-sm dark:text-jacarta-200">
                          {elm.totalLikes}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev swiper-button-prev-1 group absolute top-1/2 -left-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-left-6 snbp1">
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
          <div className="swiper-button-next swiper-button-next-1 group absolute top-1/2 -right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-right-6 snbn1">
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
