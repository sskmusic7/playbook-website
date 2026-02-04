/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import FileUpload from "./FileUpload";

const collcections = [
  {
    id: 1,
    src: "/img/avatars/collection_ava_2.jpg",
    alt: "avatar",
    text: "KaijuKings",
  },
  {
    id: 2,
    src: "/img/avatars/collection_ava_3.png",
    alt: "avatar",
    text: "Kumo x World",
  },
  {
    id: 3,
    src: "/img/avatars/collection_ava_4.jpg",
    alt: "avatar",
    text: "Irene DAO",
  },
  {
    id: 4,
    src: "/img/avatars/collection_ava_5.png",
    alt: "avatar",
    text: "GenerativeDungeon",
  },
  {
    id: 5,
    src: "/img/avatars/collection_ava_6.jpg",
    alt: "avatar",
    text: "ENS Domains",
  },
  {
    id: 6,
    src: "/img/avatars/collection_ava_7.png",
    alt: "avatar",
    text: "Cozy Penguin",
  },
];
const currencies = [
  {
    id: 1,
    src: "/img/chains/ETH.png",
    alt: "eth",
    text: "Ethereum",
  },
  {
    id: 2,
    src: "/img/chains/FLOW.png",
    alt: "flow",
    text: "Flow",
  },
  {
    id: 3,
    src: "/img/chains/FUSD.png",
    alt: "fusd",
    text: "FUSD",
  },
];
export default function Create() {
  const [currcentCollection, setCurrcentCollection] = useState(collcections[0]);
  const [currentCurrency, setCurrentCurrency] = useState(currencies[0]);
  return (
    <section className="relative py-24">
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <img
          src="/img/gradient_light.jpg"
          alt="gradient"
          className="h-full w-full"
        />
      </picture>
      <div className="container">
        <h1 className="py-16 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
          Create
        </h1>

        <div className="mx-auto max-w-[48.125rem]">
          {/* File Upload */}
          <FileUpload />

          {/* Name */}
          <div className="mb-6">
            <label
              htmlFor="item-name"
              className="mb-2 block font-display text-jacarta-700 dark:text-white"
            >
              Name<span className="text-red">*</span>
            </label>
            <input
              type="text"
              id="item-name"
              className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
              placeholder="Item name"
              required
            />
          </div>

          {/* External Link */}
          <div className="mb-6">
            <label
              htmlFor="item-external-link"
              className="mb-2 block font-display text-jacarta-700 dark:text-white"
            >
              External link
            </label>
            <p className="mb-3 text-2xs dark:text-jacarta-300">
              We will include a link to this URL on this item's detail page, so
              that users can click to learn more about it. You are welcome to
              link to your own webpage with more details.
            </p>
            <input
              type="url"
              id="item-external-link"
              className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
              placeholder="https://yoursite.io/item/123"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label
              htmlFor="item-description"
              className="mb-2 block font-display text-jacarta-700 dark:text-white"
            >
              Description
            </label>
            <p className="mb-3 text-2xs dark:text-jacarta-300">
              The description will be included on the item's detail page
              underneath its image. Markdown syntax is supported.
            </p>
            <textarea
              id="item-description"
              className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
              rows="4"
              required
              placeholder="Provide a detailed description of your item."
            ></textarea>
          </div>

          {/* Collection */}
          <div className="relative">
            <div>
              <label className="mb-2 block font-display text-jacarta-700 dark:text-white">
                Collection
              </label>
              <div className="mb-3 flex items-center space-x-2">
                <p className="text-2xs dark:text-jacarta-300">
                  This is the collection where your item will appear.
                  <span
                    className="inline-block"
                    data-tippy-content="Moving items to a different collection may take up to 30 minutes."
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="ml-1 -mb-[3px] h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
                    </svg>
                  </span>
                </p>
              </div>
            </div>

            <div className="dropdown my-1 cursor-pointer">
              <div
                className="dropdown-toggle flex items-center justify-between rounded-lg border border-jacarta-100 bg-white py-3 px-3 dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-jacarta-300"
                role="button"
                id="item-collection"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="">Select collection</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-4 w-4 fill-jacarta-500 dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                </svg>
              </div>

              <div
                className="dropdown-menu z-10 hidden w-full whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                aria-labelledby="item-collection"
              >
                <ul className="scrollbar-custom flex max-h-48 flex-col overflow-y-auto">
                  {collcections.map((elm, i) => (
                    <li key={i} onClick={() => setCurrcentCollection(elm)}>
                      <div
                        className={
                          elm == currcentCollection
                            ? "cursor-pointer dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            : " cursor-pointer dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                        }
                      >
                        <span className="flex items-center space-x-3">
                          <img
                            src={elm.src}
                            className="h-8 w-8 rounded-full"
                            loading="lazy"
                            alt="avatar"
                          />
                          <span className="text-jacarta-700 dark:text-white">
                            KaijuKings
                          </span>
                        </span>
                        {currcentCollection == elm && (
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
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Properties */}
          <div className="relative border-b border-jacarta-100 py-6 dark:border-jacarta-600">
            <div className="flex items-center justify-between">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="mr-2 mt-px h-4 w-4 shrink-0 fill-jacarta-700 dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M8 4h13v2H8V4zM5 3v3h1v1H3V6h1V4H3V3h2zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1H3zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2v-.5zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" />
                </svg>

                <div>
                  <label className="block font-display text-jacarta-700 dark:text-white">
                    Properties
                  </label>
                  <p className="dark:text-jacarta-300">
                    Textual traits that show up as rectangles.
                  </p>
                </div>
              </div>
              <button
                className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-accent bg-white hover:border-transparent hover:bg-accent dark:bg-jacarta-700"
                type="button"
                id="item-properties"
                data-bs-toggle="modal"
                data-bs-target="#propertiesModal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-accent group-hover:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Levels */}
          <div className="relative border-b border-jacarta-100 py-6 dark:border-jacarta-600">
            <div className="flex items-center justify-between">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="mr-2 mt-px h-4 w-4 shrink-0 fill-jacarta-700 dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
                </svg>

                <div>
                  <label className="block font-display text-jacarta-700 dark:text-white">
                    Levels
                  </label>
                  <p className="dark:text-jacarta-300">
                    Numerical traits that show as a progress bar.
                  </p>
                </div>
              </div>
              <button
                className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-accent bg-white hover:border-transparent hover:bg-accent dark:bg-jacarta-700"
                type="button"
                id="item-levels"
                data-bs-toggle="modal"
                data-bs-target="#levelsModal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-accent group-hover:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="relative border-b border-jacarta-100 py-6 dark:border-jacarta-600">
            <div className="flex items-center justify-between">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="mr-2 mt-px h-4 w-4 shrink-0 fill-jacarta-700 dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M2 13h6v8H2v-8zM9 3h6v18H9V3zm7 5h6v13h-6V8z" />
                </svg>

                <div>
                  <label className="block font-display text-jacarta-700 dark:text-white">
                    Stats
                  </label>
                  <p className="dark:text-jacarta-300">
                    Numerical traits that just show as numbers.
                  </p>
                </div>
              </div>
              <button
                className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-accent bg-white hover:border-transparent hover:bg-accent dark:bg-jacarta-700"
                type="button"
                id="item-stats"
                data-bs-toggle="modal"
                data-bs-target="#levelsModal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-accent group-hover:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Unlockable Content */}
          <div className="relative border-b border-jacarta-100 py-6 dark:border-jacarta-600">
            <div className="flex items-center justify-between">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="mr-2 mt-px h-4 w-4 shrink-0 fill-accent"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M7 10h13a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 13.262-3.131l-1.789.894A5 5 0 0 0 7 9v1zm-2 2v8h14v-8H5zm5 3h4v2h-4v-2z" />
                </svg>

                <div>
                  <label className="block font-display text-jacarta-700 dark:text-white">
                    Unlockable Content
                  </label>
                  <p className="dark:text-jacarta-300">
                    Include unlockable content that can only be revealed by the
                    owner of the item.
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                value="checkbox"
                name="check"
                className="relative h-6 w-[2.625rem] cursor-pointer appearance-none rounded-full border-none bg-jacarta-100 after:absolute after:top-[0.1875rem] after:left-[0.1875rem] after:h-[1.125rem] after:w-[1.125rem] after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-[1.3125rem] checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent"
              />
            </div>
          </div>

          {/* Explicit & Sensitive Content */}
          <div className="relative mb-6 border-b border-jacarta-100 py-6 dark:border-jacarta-600">
            <div className="flex items-center justify-between">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="mr-2 mt-px h-4 w-4 shrink-0 fill-jacarta-700 dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zM11 16v2h2v-2h-2zm0-7v5h2V9h-2z" />
                </svg>

                <div>
                  <label className="font-display text-jacarta-700 dark:text-white">
                    Explicit & Sensitive Content
                  </label>

                  <p className="dark:text-jacarta-300">
                    Set this item as explicit and sensitive content.
                    <span
                      className="inline-block"
                      data-tippy-content="Setting your asset as explicit and sensitive content, like pornography and other not safe for work (NSFW) content, will protect users with safe search while browsing Xhibiter."
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="ml-2 -mb-[2px] h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
                      </svg>
                    </span>
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                value="checkbox"
                name="check"
                className="relative h-6 w-[2.625rem] cursor-pointer appearance-none rounded-full border-none bg-jacarta-100 after:absolute after:top-[0.1875rem] after:left-[0.1875rem] after:h-[1.125rem] after:w-[1.125rem] after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-[1.3125rem] checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent"
              />
            </div>
          </div>

          {/* Supply */}
          <div className="mb-6">
            <label
              htmlFor="item-supply"
              className="mb-2 block font-display text-jacarta-700 dark:text-white"
            >
              Supply
            </label>

            <div className="mb-3 flex items-center space-x-2">
              <p className="text-2xs dark:text-jacarta-300">
                The number of items that can be minted. No gas cost to you!
                <span
                  className="inline-block"
                  data-tippy-content="Setting your asset as explicit and sensitive content, like pornography and other not safe for work (NSFW) content, will protect users with safe search while browsing Xhibiter."
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="ml-1 -mb-[3px] h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
                  </svg>
                </span>
              </p>
            </div>

            <input
              type="text"
              id="item-supply"
              className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
              placeholder="1"
            />
          </div>

          {/* Blockchain */}
          <div className="mb-6">
            <label
              htmlFor="item-supply"
              className="mb-2 block font-display text-jacarta-700 dark:text-white"
            >
              Blockchain
            </label>

            <div className="dropdown relative mb-4 cursor-pointer">
              <div
                className="dropdown-toggle flex items-center justify-between rounded-lg border border-jacarta-100 bg-white py-3.5 px-3 text-base dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"
                role="button"
                id="item-blockchain"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="flex items-center">
                  <img
                    src={currentCurrency.src}
                    alt="eth"
                    className="mr-2 h-5 w-5 rounded-full"
                  />
                  {currentCurrency.text}
                </span>
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
                className="dropdown-menu z-10 hidden w-full whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                aria-labelledby="item-blockchain"
              >
                {currencies.map((elm, i) => (
                  <button
                    onClick={() => setCurrentCurrency(elm)}
                    key={i}
                    className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-base text-jacarta-700 transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                  >
                    <span className="flex items-center">
                      <img
                        src={elm.src}
                        alt="eth"
                        className="mr-2 h-5 w-5 rounded-full"
                      />
                      {elm.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Freeze metadata */}
          <div className="mb-6">
            <div className="mb-2 flex items-center space-x-2">
              <label
                htmlFor="item-freeze-metadata"
                className="block font-display text-jacarta-700 dark:text-white"
              >
                Freeze metadata
              </label>
              <span
                className="inline-block"
                data-tippy-content="Setting your asset as explicit and sensitive content, like pornography and other not safe for work (NSFW) content, will protect users with safe search while browsing Xhibiter."
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="mb-[2px] h-5 w-5 fill-jacarta-500 dark:fill-jacarta-300"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
                </svg>
              </span>
            </div>

            <p className="mb-3 text-2xs dark:text-jacarta-300">
              Freezing your metadata will allow you to permanently lock and
              store all of this item's content in decentralized file storage.
            </p>

            <input
              type="text"
              disabled
              id="item-freeze-metadata"
              className="w-full rounded-lg border-jacarta-100 bg-jacarta-50 py-3 dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
              placeholder="To freeze your metadata, you must create your item first."
            />
          </div>

          {/* Submit */}
          <button
            disabled
            className="cursor-default rounded-full bg-accent-lighter py-3 px-8 text-center font-semibold text-white transition-all"
          >
            Create
          </button>
        </div>
      </div>
    </section>
  );
}
