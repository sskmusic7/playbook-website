import { useState } from "react";
import { trending } from "@/data/aggregator";

import { Link } from "react-router-dom";
const intervals = ["All Time", "30d", "7d", "24h"];
export default function Trending() {
  const [selectedTime, setSelectedTime] = useState(intervals[0]);
  return (
    <div
      role="table"
      className="rounded-2lg border border-jacarta-100 bg-white text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"
    >
      <div className="flex flex-col justify-between gap-4 rounded-t-2lg border-b border-jacarta-100 bg-jacarta-50 p-4 dark:border-jacarta-600 dark:bg-jacarta-800 md:flex-row md:items-center md:gap-6">
        <div className="hidden flex-shrink-0 items-center gap-3 md:flex">
          <div className="flex h-10 w-10 group cursor-pointer items-center justify-center rounded-2lg dark:bg-jacarta-700 dark:border-jacarta-600 border border-jacarta-100 bg-white dark:hover:bg-accent hover:bg-accent hover:border-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              className="h-4 w-4 fill-jacarta-700 dark:fill-white group-hover:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z" />
            </svg>
          </div>
          <div className="flex flex-shrink-0 flex-col">
            <div className="text-base font-medium text-jacarta-500 dark:text-jacarta-300 md:whitespace-nowrap">
              196 results
            </div>
            <div className="text-2xs text-jacarta-300 dark:text-jacarta-400">
              10 min ago
            </div>
          </div>
        </div>
        <div className="relative flex w-full flex-1">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative w-full md:w-2/3"
          >
            <input
              type="search"
              className="h-10 w-full rounded-lg border border-jacarta-100 py-2 px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
              placeholder="Search collections"
            />
            <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="h-4 w-4 fill-jacarta-500 dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
              </svg>
            </span>
          </form>
        </div>
        <div className="flex flex-wrap justify-between gap-2">
          <div className="flex flex-shrink-0 items-center gap-3 md:hidden">
            <div className="flex h-10 w-10 group cursor-pointer items-center justify-center rounded-2lg dark:bg-jacarta-700 dark:border-jacarta-600 border border-jacarta-100 bg-white dark:hover:bg-accent hover:bg-accent hover:border-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                className="h-4 w-4 fill-jacarta-700 dark:fill-white group-hover:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z" />
              </svg>
            </div>
            <div className="flex flex-shrink-0 flex-col">
              <div className="text-left text-base font-medium text-jacarta-500 dark:text-jacarta-300 md:whitespace-nowrap">
                196 results
              </div>
              <div className="text-left text-2xs text-jacarta-300 dark:text-jacarta-400">
                10 min ago
              </div>
            </div>
          </div>
          <div className="flex flex-shrink-0 items-center text-xs font-medium text-jacarta-500 dark:text-jacarta-300 sm:text-sm">
            {intervals.map((elm, i) => (
              <div
                onClick={() => setSelectedTime(elm)}
                key={i}
                className={
                  elm == selectedTime
                    ? "flex h-10 w-full cursor-pointer items-center justify-center whitespace-nowrap border border-r-0 border-accent bg-accent p-3 text-white first:rounded-l-lg last:rounded-r-lg hover:border-transparent hover:bg-accent hover:text-white sm:px-4 sm:py-2"
                    : "flex h-10 w-full cursor-pointer items-center justify-center whitespace-nowrap border border-r-0 border-jacarta-100 bg-white p-3 first:rounded-l-lg last:rounded-r-lg hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 sm:px-4 sm:py-2"
                }
              >
                {elm}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="flex items-center bg-jacarta-50 py-5 px-4 text-jacarta-700 dark:bg-jacarta-800 dark:text-jacarta-100"
        role="row"
      >
        <div
          className="w-6/12 truncate text-left md:w-6/12 lg:w-4/12"
          role="columnheader"
        >
          Collection
        </div>
        <div
          className="flex w-3/12 cursor-pointer items-center justify-end text-accent md:w-2/12"
          role="columnheader"
        >
          24h Volume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            className="ml-1 flex-shrink-0 fill-accent"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
          </svg>
        </div>
        <div
          className="hidden w-2/12 cursor-pointer items-center justify-end text-right md:flex"
          role="columnheader"
        >
          24h
          <svg
            width="16"
            height="25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1"
          >
            <g clipPath="url(#clip0_2135_22855)">
              <path
                d="M8 7.219l-3.3 3.3-.942-.943L8 5.333l4.243 4.243-.943.943-3.3-3.3z"
                fill="currentColor"
              />
            </g>
            <g clipPath="url(#clip1_2135_22855)">
              <path
                d="M8 17.781l3.3-3.3.943.943L8 19.667l-4.242-4.243.942-.943 3.3 3.3z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_2135_22855">
                <path fill="#fff" d="M0 0h16v16H0z" />
              </clipPath>
              <clipPath id="clip1_2135_22855">
                <path
                  fill="#fff"
                  transform="translate(0 9)"
                  d="M0 0h16v16H0z"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          className="flex w-3/12 cursor-pointer items-center justify-end md:w-2/12"
          role="columnheader"
        >
          Floor Price
          <svg
            width="16"
            height="25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1"
          >
            <g clipPath="url(#clip0_2135_22855)">
              <path
                d="M8 7.219l-3.3 3.3-.942-.943L8 5.333l4.243 4.243-.943.943-3.3-3.3z"
                fill="currentColor"
              />
            </g>
            <g clipPath="url(#clip1_2135_22855)">
              <path
                d="M8 17.781l3.3-3.3.943.943L8 19.667l-4.242-4.243.942-.943 3.3 3.3z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_2135_22855">
                <path fill="#fff" d="M0 0h16v16H0z" />
              </clipPath>
              <clipPath id="clip1_2135_22855">
                <path
                  fill="#fff"
                  transform="translate(0 9)"
                  d="M0 0h16v16H0z"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          className="hidden w-1/12 cursor-pointer items-center justify-end text-right lg:flex"
          role="columnheader"
        >
          Owners
          <svg
            width="16"
            height="25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1"
          >
            <g clipPath="url(#clip0_2135_22855)">
              <path
                d="M8 7.219l-3.3 3.3-.942-.943L8 5.333l4.243 4.243-.943.943-3.3-3.3z"
                fill="currentColor"
              />
            </g>
            <g clipPath="url(#clip1_2135_22855)">
              <path
                d="M8 17.781l3.3-3.3.943.943L8 19.667l-4.242-4.243.942-.943 3.3 3.3z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_2135_22855">
                <path fill="#fff" d="M0 0h16v16H0z" />
              </clipPath>
              <clipPath id="clip1_2135_22855">
                <path
                  fill="#fff"
                  transform="translate(0 9)"
                  d="M0 0h16v16H0z"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          className="hidden w-1/12 cursor-pointer items-center justify-end text-right lg:flex"
          role="columnheader"
        >
          Supply
          <svg
            width="16"
            height="25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1"
          >
            <g clipPath="url(#clip0_2135_22855)">
              <path
                d="M8 7.219l-3.3 3.3-.942-.943L8 5.333l4.243 4.243-.943.943-3.3-3.3z"
                fill="currentColor"
              />
            </g>
            <g clipPath="url(#clip1_2135_22855)">
              <path
                d="M8 17.781l3.3-3.3.943.943L8 19.667l-4.242-4.243.942-.943 3.3 3.3z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_2135_22855">
                <path fill="#fff" d="M0 0h16v16H0z" />
              </clipPath>
              <clipPath id="clip1_2135_22855">
                <path
                  fill="#fff"
                  transform="translate(0 9)"
                  d="M0 0h16v16H0z"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      {trending.map((elm, i) => (
        <Link
          key={i}
          to="/collections"
          className="flex border-t border-jacarta-100 py-2 px-4 transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-900"
          role="row"
        >
          <div
            className="flex w-6/12 items-center md:w-6/12 lg:w-4/12"
            role="cell"
          >
            <figure className="relative mr-5 w-8 shrink-0 self-start lg:w-10">
              <img
                src={elm.image}
                alt="image"
                className="rounded-2lg"
                loading="lazy"
              />
              {elm.varified && (
                <div
                  className="absolute -right-3 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                  data-tippy-content="Verified Collection"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-[.875rem] w-[.875rem] fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                </div>
              )}
            </figure>
            <span className="text-sm text-jacarta-700 dark:text-white">
              {elm.name}
            </span>
          </div>
          <div
            className="flex w-3/12 items-center justify-end whitespace-nowrap md:w-2/12"
            role="cell"
          >
            <span>{elm.price}</span>
            <span data-tippy-content={elm.collection}>
              <img
                src="/img/chains/eth-icon.svg"
                alt="image"
                className="ml-0.5 h-4 w-4"
              />
            </span>
          </div>
          <div
            className="hidden w-2/12 items-center justify-end md:flex"
            role="cell"
          >
            <span
              className={`text-${
                elm.percentageChange?.includes("+") ? "green" : "red"
              }`}
            >
              {elm.percentageChange}
            </span>
          </div>
          <div
            className="flex w-3/12 items-center justify-end md:w-2/12"
            role="cell"
          >
            <span>{elm.quantity}</span>
            <span data-tippy-content={elm.collection}>
              <img
                src="/img/chains/eth-icon.svg"
                alt="image"
                className="ml-0.5 h-4 w-4"
              />
            </span>
          </div>
          <div
            className="hidden w-1/12 items-center justify-end lg:flex"
            role="cell"
          >
            <span>{elm.owner}</span>
          </div>
          <div
            className="hidden w-1/12 items-center justify-end lg:flex"
            role="cell"
          >
            <span>{elm.supply}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
