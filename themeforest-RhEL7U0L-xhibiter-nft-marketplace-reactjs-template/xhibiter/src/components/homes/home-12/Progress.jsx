import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
const Completionist = () => (
  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 text-2xs font-medium">
    {" "}
    <span>This auction has ended</span>
  </div>
);

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <>
        {window !== undefined && (
          <div
            className="js-countdown-single-timer mb-10 flex space-x-2 text-center md:space-x-4"
            data-countdown="2023-12-07T19:40:30"
            data-expired="This auction has ended"
          >
            <span className="countdown-days flex h-[100px] w-[100px] flex-col justify-center rounded-2lg border border-jacarta-100 bg-white text-jacarta-700 dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white">
              <span className="js-countdown-days-number font-display text-xl font-medium md:text-3xl">
                {days}
              </span>
              <span className="text-md tracking-tight text-jacarta-500 dark:text-jacarta-300">
                Days
              </span>
            </span>
            <span className="countdown-hours flex h-[100px] w-[100px] flex-col justify-center rounded-2lg border border-jacarta-100 bg-white text-jacarta-700 dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white">
              <span className="js-countdown-hours-number font-display text-xl font-medium md:text-3xl">
                {hours}
              </span>
              <span className="text-md tracking-tight text-jacarta-500 dark:text-jacarta-300">
                Hrs
              </span>
            </span>
            <span className="countdown-minutes flex h-[100px] w-[100px] flex-col justify-center rounded-2lg border border-jacarta-100 bg-white text-jacarta-700 dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white">
              <span className="js-countdown-minutes-number font-display text-xl font-medium md:text-3xl">
                {minutes}
              </span>
              <span className="text-md tracking-tight text-jacarta-500 dark:text-jacarta-300">
                Min
              </span>
            </span>
            <span className="countdown-seconds flex h-[100px] w-[100px] flex-col justify-center rounded-2lg border border-jacarta-100 bg-white text-jacarta-700 dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white">
              <span className="js-countdown-seconds-number font-display text-xl font-medium md:text-3xl">
                {seconds}
              </span>
              <span className="text-md tracking-tight text-jacarta-500 dark:text-jacarta-300">
                Sec
              </span>
            </span>
          </div>
        )}
      </>
    );
  }
};
export default function Progress() {
  const [showTimer, setShowTimer] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [remainingTime, setRemainingTime] = useState(
    new Date(
      new Date().getTime() +
        Math.floor(Math.random() * 24 * 60 * 60 * 1000 * 365)
    ).toISOString()
  );
  useEffect(() => {
    setShowTimer(true);
  }, []);
  return (
    <div className="container -translate-y-24">
      <div className="rounded-2.5xl bg-light-base px-6 py-16 shadow-sm dark:bg-jacarta-700 md:px-16 lg:px-24">
        <div className="flex-wrap justify-between lg:flex">
          <div className="mb-14">
            <h2 className="mb-4 font-display text-3xl text-jacarta-700 dark:text-white">
              ICO Pre-Sale is <span className="text-accent">Alive!</span>
            </h2>
            <p className="mb-8 text-lg text-jacarta-500 dark:text-jacarta-300">
              Discount Tier: 40%
            </p>
            <Link
              to={`/item/${3}`}
              className="inline-block rounded-full bg-accent py-2.5 px-8 text-center text-sm font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              Buy Token Now
            </Link>
          </div>
          <div>
            {showTimer && (
              <Countdown date={remainingTime} renderer={renderer} />
            )}
            <div>
              <div className="mb-2 flex justify-between dark:text-jacarta-300">
                <span>
                  Reached: <span className="text-green">$19,550,000</span>
                </span>
                <span>$70,000,000</span>
              </div>
              <div className="rounded bg-accent-lighter">
                <div
                  className="h-4 rounded bg-accent"
                  style={{ width: "32%" }}
                ></div>
              </div>
              <div className="mt-2 flex justify-between dark:text-jacarta-300">
                <span>Softcap</span>
                <span>Hardcap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
