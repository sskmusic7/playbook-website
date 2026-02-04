import { mints } from "@/data/aggregator";
import BarComponent from "./BarComponent";

import { useState } from "react";
const intervals = ["24h", "6h", "1h", "30m", "15m"];
const labels = ["All", "Mintable", "Free Mints", "Paid Mints"];
export default function Mints() {
  const [selectedTime, setSelectedTime] = useState(intervals[0]);
  const [activeLavel, setActiveLavel] = useState(labels[0]);
  return (
    <div
      role="table"
      className="rounded-2lg border border-jacarta-100 bg-white text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"
    >
      <div className="flex flex-col gap-4 rounded-t-2lg border-b border-jacarta-100 bg-jacarta-50 p-4 dark:border-jacarta-600 dark:bg-jacarta-800 sm:gap-6 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col justify-between gap-4 md:flex-row md:items-center md:gap-10">
          <div className="hidden flex-shrink-0 flex-col space-y-1 md:flex">
            <div className="flex flex-shrink-0 items-center space-x-1">
              <span
                className="mr-1 inline-block h-4 w-4 animate-heartBeat bg-contain bg-center text-xl"
                style={{
                  backgroundImage:
                    "url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/2764-fe0f.png)",
                }}
              ></span>
              <div className="hidden flex-shrink-0 flex-col sm:flex">
                <div className="text-base font-medium uppercase text-jacarta-500 dark:text-jacarta-300 md:whitespace-nowrap">
                  Live View
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-jacarta-300 dark:text-jacarta-400">
              <div className="text-2xs text-jacarta-500 dark:text-jacarta-300">
                196 results
              </div>
              <span>|</span>
              <div className="text-2xs">10 min ago</div>
            </div>
          </div>

          <div className="relative flex w-full flex-1">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative w-full lg:w-5/6"
            >
              <input
                type="search"
                className="h-10 w-full rounded-lg border border-jacarta-100 py-2 px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                placeholder="Search"
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
        </div>

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center lg:justify-start">
          <div className="dropdown cursor-pointer">
            <div
              className="dropdown-toggle inline-flex h-10 w-[220px] items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white lg:w-[6rem]"
              role="button"
              id="sort"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="font-display">{activeLavel}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="h-4 w-4 fill-jacarta-500 dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
              </svg>
            </div>

            <div
              className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
              aria-labelledby="sort"
            >
              {labels.map((elm, i) => (
                <button
                  onClick={() => setActiveLavel(elm)}
                  key={i}
                  className={`dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm ${
                    elm == activeLavel ? "text-jacarta-700" : ""
                  } transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600`}
                >
                  {elm}
                  {activeLavel == elm && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="mb-[3px] h-4 w-4 fill-accent"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                    </svg>
                  )}
                </button>
              ))}
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

        <div className="flex flex-shrink-0 items-center gap-3 md:hidden">
          <div className="flex flex-col space-y-1">
            <div className="flex flex-shrink-0 items-center space-x-1">
              <span
                className="mr-1 inline-block h-4 w-4 animate-heartBeat bg-contain bg-center text-xl"
                style={{
                  backgroundImage:
                    "url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/2764-fe0f.png)",
                }}
              ></span>
              <div className="flex flex-shrink-0 flex-col">
                <div className="text-base font-medium uppercase text-jacarta-500 dark:text-jacarta-300 md:whitespace-nowrap">
                  Live View
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-jacarta-300 dark:text-jacarta-400">
              <div className="text-2xs text-jacarta-500 dark:text-jacarta-200">
                196 results
              </div>
              <span>|</span>
              <div className="text-2xs">10 min ago</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex items-center justify-between bg-jacarta-50 py-5 px-4 text-jacarta-700 dark:bg-jacarta-800 dark:text-jacarta-100"
        role="row"
      >
        <div
          className="w-1/2 truncate text-left sm:w-[30%] lg:w-[24%]"
          role="columnheader"
        >
          Collection Mint Date
        </div>
        <div
          className="hidden w-3/12 items-center justify-end md:w-[10%] lg:flex"
          role="columnheader"
        >
          Top Wallets
          <span
            className="ml-1 mt-1 inline-block"
            data-tippy-content="Sources wallets are verified OpenSea wallets and top profit making wallets."
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="mb-[2px] h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
            </svg>
          </span>
        </div>
        <div
          className="hidden w-[18%] cursor-pointer items-center justify-end text-right text-accent sm:flex md:w-[14%] lg:w-[10%]"
          role="columnheader"
        >
          30m Mints
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            className="ml-1 flex-shrink-0 fill-accent"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
          </svg>
        </div>
        <div
          className="flex w-1/4 items-center justify-end sm:w-[14%] lg:w-[11%]"
          role="columnheader"
        >
          Price
          <span
            className="ml-1 mt-1 inline-block"
            data-tippy-content="Mint price: Collections may have dynamic mint prices. We'll continually update prices accordingly"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="mb-[2px] h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
            </svg>
          </span>
        </div>
        <div
          className="hidden w-[14%] items-center justify-end text-right lg:flex"
          role="columnheader"
        >
          Unique Minters
          <span
            className="ml-1 mt-1 inline-block"
            data-tippy-content="Minters: # of unique wallets who minted. Holders: # of unique wallets holding the nft"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="mb-[2px] h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
            </svg>
          </span>
        </div>
        <div
          className="flex w-1/4 items-center justify-end text-right sm:w-[14%] lg:w-[12%]"
          role="columnheader"
        >
          Total Mints
        </div>
        <div
          className="hidden w-[14%] items-center justify-end text-right md:flex lg:w-[10%]"
          role="columnheader"
        >
          30m Trend
        </div>
        <div className="hidden w-[9%] sm:block" role="columnheader"></div>
      </div>
      {mints.map((elm, i) => (
        <div
          key={i}
          className="flex flex-wrap justify-between border-t border-jacarta-100 py-2 px-4 transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-900"
          role="row"
        >
          <div className="flex w-1/2 sm:w-[30%] lg:w-[24%]" role="cell">
            <figure className="relative mr-3 w-8 shrink-0 self-start lg:w-10">
              <img
                src={elm.imgSrc}
                alt="image"
                className="rounded-2lg"
                loading="lazy"
              />
            </figure>
            <div>
              <span className="block text-sm text-jacarta-700 dark:text-white">
                {" "}
                {elm.name}
              </span>
              <span className="text-xs text-jacarta-500 dark:text-jacarta-400">
                {elm.time}
              </span>
            </div>
          </div>
          <div
            className="hidden w-3/12 items-center justify-end whitespace-nowrap md:w-[10%] lg:flex"
            role="cell"
          >
            <div className="flex items-center -space-x-2">
              <img
                src={elm.creatorAvatar}
                alt="creator"
                className="h-6 w-6 rounded-full"
                data-tippy-content={`Creator: ${elm.creator}`}
              />
              <img
                src={elm.ownerAvatar}
                alt="owner"
                className="h-6 w-6 rounded-full"
                data-tippy-content={`Owner: ${elm.owner}`}
              />
            </div>
          </div>
          <div
            className="hidden w-[18%] text-right sm:block md:w-[14%] lg:w-[10%]"
            role="cell"
          >
            <span className="block">{elm.stats.count}</span>
            <span
              className={`text-xs text-${
                elm.stats.change?.includes("-") ? "red" : "green"
              }`}
            >
              {elm.stats.change}
            </span>
          </div>
          <div
            className="flex w-1/4 flex-col items-end justify-center text-right text-xs sm:w-[14%] lg:w-[11%]"
            role="cell"
          >
            <div className="flex items-center justify-end">
              <span>Mint {elm.stats.mint}</span>
              <span data-tippy-content="ETH">
                <img
                  src={elm.stats.floorEthIcon}
                  alt="image"
                  className="ml-0.5 h-3.5 w-3.5"
                />
              </span>
            </div>
            <div className="flex items-center justify-end">
              <span>Floor {elm.stats.floor}</span>
              <span data-tippy-content="ETH">
                <img
                  src={elm.stats.floorEthIcon}
                  alt="image"
                  className="ml-0.5 h-3.5 w-3.5"
                />
              </span>
            </div>
          </div>
          <div
            className="hidden w-[14%] flex-col items-end justify-center text-xs lg:flex"
            role="cell"
          >
            <div className="mb-1.5">
              <span className="text-sm text-jacarta-700 dark:text-white">
                {elm.stats.percentage}
              </span>
              <span>&nbsp;({elm.stats.uniqueMinters})</span>
            </div>
            <div className="w-24 overflow-hidden rounded-lg bg-jacarta-100 dark:bg-jacarta-600">
              <div
                className="h-1.5 rounded-lg bg-accent"
                style={{ width: elm.stats.percentageWidth }}
              ></div>
            </div>
          </div>
          <div
            className="flex w-1/4 flex-col items-end justify-center text-right text-xs sm:w-[14%] lg:w-[12%]"
            role="cell"
          >
            <div>
              <span className="text-sm text-jacarta-700">
                {elm.stats.total}
              </span>
              <span>(100%)</span>
            </div>
            <span>of {elm.stats.total}</span>
          </div>
          <div
            className="hidden w-[14%] items-center justify-end md:flex lg:w-[10%]"
            role="cell"
          >
            <div className="chart-container relative h-7 w-20">
              <BarComponent
                datapoints={elm.chartData.datapoints}
                labels={elm.chartData.labels}
              />
            </div>
          </div>
          <div
            className="mt-1 w-[9%] items-center justify-end sm:mt-0 sm:flex"
            role="columnheader"
          >
            <a
              href="#"
              className="inline-block rounded-full bg-accent py-1 px-4 text-center text-xs font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              Mint
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
