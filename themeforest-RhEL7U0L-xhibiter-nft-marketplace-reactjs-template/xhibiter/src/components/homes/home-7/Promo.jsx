import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Promo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="relative py-24 dark:bg-jacarta-800">
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <img
          src="/img/gradient_light.jpg"
          alt="gradient"
          className="h-full w-full"
        />
      </picture>
      <div className="container">
        <div className="lg:flex lg:justify-between">
          <div className="relative lg:w-[55%]">
            <img
              src="/img/patterns/pattern_circle_1.png"
              className="absolute -bottom-4 -left-8 animate-fly dark:opacity-10"
              alt="image"
            />
            <img
              src="/img/patterns/pattern_circle_2.png"
              className="absolute -top-14 right-0 animate-fly dark:opacity-10 md:-right-12"
              alt="image"
            />
            <div className="flex items-center space-x-7">
              <figure className="relative">
                <img
                  src="/img/crypto-consultant/promo_1.jpg"
                  className="rounded-3xl"
                  alt="image"
                />
              </figure>
              <figure className="relative overflow-hidden rounded-3xl before:absolute before:inset-0 before:bg-jacarta-900/25">
                <span
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer js-video-modal-trigger absolute top-1/2 left-1/2 flex h-16 w-16 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white transition-transform will-change-transform hover:scale-90"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-8 w-8 fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" />
                  </svg>
                </span>
                <img src="/img/crypto-consultant/promo_2.jpg" alt="image" />
              </figure>
            </div>
          </div>

          <div className="py-10 lg:w-[45%] lg:pl-28">
            <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
              You Can Save Time & Money In Your Business
            </h2>
            <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="mb-8 flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="h-8 w-8 shrink-0 fill-accent"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
              </svg>
              <div>
                <span className="mb-3 block font-display text-base font-semibold text-jacarta-700 dark:text-white">
                  Team Management
                </span>
                <span className="dark:text-jacarta-300">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit sed quia.
                </span>
              </div>
            </div>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="h-8 w-8 shrink-0 fill-accent"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
              </svg>
              <div>
                <span className="mb-3 block font-display text-base font-semibold text-jacarta-700 dark:text-white">
                  Revenue-based payments
                </span>
                <span className="dark:text-jacarta-300">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit sed quia.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="dQw4w9WgXcQ"
        onClose={() => setIsOpen(false)}
      />
    </section>
  );
}
