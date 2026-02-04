import { items2 } from "@/data/item";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import tippy from "tippy.js";
const sortingOptions = ["Price: Low to High", "Price: High to Low"];
const categories = [
  {
    id: 1,
    name: "Art",
    icon: "M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86z",
  },
  {
    id: 2,
    name: "Collectibles",
    icon: "M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4zm6.085 15a1.5 1.5 0 0 1 2.83 0H20v-2.968a4.5 4.5 0 0 1 0-8.064V5h-9.085a1.5 1.5 0 0 1-2.83 0H4v14h4.085zM9.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z",
  },
  {
    id: 3,
    name: "Domain",
    icon: "M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.6l4.399-11h2zm-1 2.885L10.752 12h2.492l-1.245-3.115zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z",
  },
  { id: 4, name: "Music", icon: "M12 13.535V3h8v3h-6v11a4 4 0 1 1-2-3.465z" },
  {
    id: 5,
    name: "Photography",
    icon: "M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6zm2 1v12h16V7H4zm10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM4 2h6v2H4V2z",
  },
  {
    id: 6,
    name: "Virtual World",
    icon: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z",
  },
];
export default function Categories() {
  const [allItems, setAllItems] = useState(items2);
  const [activeCategory, setActiveCategory] = useState("all");
  const [filtered, setFiltered] = useState(allItems);
  const [activeSort, setActiveSort] = useState(sortingOptions[0]);
  const [onlyVarified, setOnlyVarified] = useState(false);
  const [onlyNFSW, setOnlyNFSW] = useState(false);
  const [onlyLazyMinted, setOnlyLazyMinted] = useState(false);
  useEffect(() => {
    tippy("[data-tippy-content]");
  }, []);
  const addLike = (id) => {
    const items = [...allItems];
    const item = items.filter((elm) => elm.id == id)[0];
    const indexToReplace = items.findIndex((item) => item.id === id);
    if (!item.liked) {
      item.liked = true;
      item.likes += 1;
      items[indexToReplace] = item;
      setAllItems(items);
    } else {
      item.liked = false;
      item.likes -= 1;
      items[indexToReplace] = item;
      setAllItems(items);
    }
  };
  useEffect(() => {
    let tempfiltered = [];
    if (activeCategory == "all") {
      tempfiltered = allItems;
    } else {
      tempfiltered = allItems.filter((elm) => elm.category == activeCategory);
    }
    if (activeSort == "Price: Low to High") {
      tempfiltered = [...tempfiltered.sort((a, b) => a.price - b.price)];
    }
    if (activeSort == "Price: High to Low") {
      tempfiltered = [...tempfiltered.sort((a, b) => b.price - a.price)];
    }
    if (onlyVarified) {
      tempfiltered = [...tempfiltered.filter((elm) => elm.varified)];
    }
    if (onlyNFSW) {
      tempfiltered = [...tempfiltered.filter((elm) => elm.NFSW)];
    }
    if (onlyLazyMinted) {
      tempfiltered = [...tempfiltered.filter((elm) => elm.LazyMinted)];
    }

    setFiltered(tempfiltered);
  }, [
    activeCategory,
    allItems,
    activeSort,
    onlyVarified,
    onlyNFSW,
    onlyLazyMinted,
  ]);

  return (
    <section className="py-24">
      <div className="container">
        <h2 className="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white">
          <span
            className="mr-1 inline-block h-6 w-6 bg-contain bg-center text-xl"
            style={{
              backgroundImage:
                "url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/26a1.png)",
            }}
          ></span>
          Trending categories
        </h2>
        <div className="mb-8 flex flex-wrap items-center justify-between">
          <ul className="flex flex-wrap items-center">
            <li className="my-1 mr-2.5">
              <div
                onClick={() => setActiveCategory("all")}
                className={`  ${
                  activeCategory == "all" ? "bg-jacarta-100" : "bg-white"
                }  ${
                  activeCategory == "all"
                    ? " dark:bg-jacarta-700"
                    : "dark:bg-jacarta-900"
                } cursor-pointer group flex h-9 items-center rounded-lg border border-jacarta-100  px-4 font-display text-sm font-semibold text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600  dark:text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white`}
              >
                All
              </div>
            </li>
            {categories.map((elm, i) => (
              <li
                onClick={() => setActiveCategory(elm.name)}
                key={i}
                className="my-1 mr-2.5"
              >
                <div
                  className={`  ${
                    activeCategory == elm.name ? "bg-jacarta-100" : "bg-white"
                  }  ${
                    activeCategory == elm.name
                      ? " dark:bg-jacarta-700"
                      : "dark:bg-jacarta-900"
                  } cursor-pointer group flex h-9 items-center rounded-lg border border-jacarta-100  px-4 font-display text-sm font-semibold text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600  dark:text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25 28"
                    width="24"
                    height="24"
                    className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d={elm.icon} />
                  </svg>
                  <span>{elm.name}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="dropdown my-1 cursor-pointer">
            <div
              className="dropdown-toggle inline-flex w-48 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"
              role="button"
              id="categoriesSort"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="font-display">{activeSort}</span>
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
              className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
              aria-labelledby="categoriesSort"
            >
              <span className="block px-5 py-2 font-display text-sm font-semibold text-jacarta-300">
                Sort By
              </span>
              {sortingOptions.map((elm, i) => (
                <button
                  onClick={() => setActiveSort(elm)}
                  key={i}
                  className={
                    activeSort == elm
                      ? "dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm text-jacarta-700 transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                      : "dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                  }
                >
                  {elm}
                  {activeSort == elm && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="mb-[3px] h-4 w-4 fill-accent"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                    </svg>
                  )}
                </button>
              ))}
              <span className="block px-5 py-2 font-display text-sm font-semibold text-jacarta-300">
                Options
              </span>
              <div className="dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                <span className="flex items-center justify-between">
                  <span>Verified Only</span>
                  <input
                    type="checkbox"
                    name="check"
                    checked={onlyVarified}
                    onChange={(e) => {
                      setOnlyVarified((pre) => !pre);
                    }}
                    className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 shadow-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent"
                  />
                </span>
              </div>
              <div className="dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                <span className="flex items-center justify-between">
                  <span>NFSW Only</span>
                  <input
                    type="checkbox"
                    checked={onlyNFSW}
                    onChange={(e) => {
                      setOnlyNFSW((pre) => !pre);
                    }}
                    name="check"
                    className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 shadow-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent"
                  />
                </span>
              </div>
              <div className="dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                <span className="flex items-center justify-between">
                  <span>Show Lazy Minted</span>
                  <input
                    type="checkbox"
                    checked={onlyLazyMinted}
                    onChange={(e) => {
                      setOnlyLazyMinted((pre) => !pre);
                    }}
                    name="check"
                    className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 shadow-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
          {filtered.map((elm, i) => (
            <article key={i}>
              <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                <figure className="relative">
                  <Link to={`/item/${elm.id}`}>
                    <img
                      src={elm.imageSrc}
                      alt="item 5"
                      className="w-full rounded-[0.625rem]"
                      loading="lazy"
                    />
                  </Link>
                  <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                    <span
                      onClick={() => addLike(elm.id)}
                      className={`js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0 ${
                        elm.liked ? "js-likes--active" : ""
                      }`}
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
                      {elm.likes}
                    </span>
                  </div>
                  <div className="absolute left-3 -bottom-3">
                    <div className="flex -space-x-2">
                      <a href="#">
                        <img
                          src={elm.creatorAvatar}
                          alt="creator"
                          className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                          data-tippy-content={`Creator: ${elm.creator}`}
                        />
                      </a>
                      <a href="#">
                        <img
                          src={elm.ownerAvatar}
                          alt="owner"
                          className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                          data-tippy-content={`Owner: ${elm.owner}`}
                        />
                      </a>
                    </div>
                  </div>
                </figure>
                <div className="mt-7 flex items-center justify-between">
                  <Link to={`/item/${elm.id}`}>
                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                      {elm.title}
                    </span>
                  </Link>
                  <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                    <a
                      href="#"
                      className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"
                      role="button"
                      id="itemActions"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        width="16"
                        height="4"
                        viewBox="0 0 16 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-jacarta-500 dark:fill-jacarta-200"
                      >
                        <circle cx="2" cy="2" r="2" />
                        <circle cx="8" cy="2" r="2" />
                        <circle cx="14" cy="2" r="2" />
                      </svg>
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                      aria-labelledby="itemActions"
                    >
                      <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                        New bid
                      </button>
                      <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                      <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                        Refresh Metadata
                      </button>
                      <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                        Share
                      </button>
                      <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                        Report
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-sm">
                  <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">
                    {elm.price} ETH
                  </span>
                  <span className="text-jacarta-500 dark:text-jacarta-300">
                    {elm.bidCount}
                  </span>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    className="font-display text-sm font-semibold text-accent"
                    data-bs-toggle="modal"
                    data-bs-target="#buyNowModal"
                  >
                    Buy now
                  </button>
                  <Link
                    to={`/item/${elm.id}`}
                    className="group flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200"
                    >
                      <path fill="none" d="M0 0H24V24H0z" />
                      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                    </svg>
                    <span className=" rtl:mr-1 font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">
                      View History
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
