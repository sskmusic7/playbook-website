import { useEffect, useRef, useState } from "react";

const COINS = "bitcoin,ethereum,cardano,solana,xrp";
const API_URL_COINCAP = "https://api.coincap.io/v2";
const API_URL_SOCKET = "wss://ws.coincap.io";
const LIMIT = 5;

const CryptoPriceList = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const pricesWs = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_URL_COINCAP}/assets?limit=${LIMIT}&ids=${COINS}`
        );
        const { data } = await response.json();
        setCryptoData(data);

        subscribeToUpdates();
      } catch (error) {
        console.log("Request failed", error.message);
      }
    };

    fetchData();

    const subscribeToUpdates = () => {
      pricesWs.current = new WebSocket(
        `${API_URL_SOCKET}/prices?assets=${COINS}`
      );
      pricesWs.current.onmessage = function (msg) {
        updatePrices(msg.data);
      };
    };

    const updatePrices = (newPrices) => {
      const pricesJSON = JSON.parse(newPrices);
      const prices = document
        .getElementById("js-crypto-prices")
        ?.querySelectorAll(".crypto-price");
      if (prices) {
        prices.forEach((element) => {
          const id = element.dataset.currency;
          const price = element.querySelector(".crypto-price__price");

          if (id in pricesJSON) {
            if (price.getAttribute("data-price") < pricesJSON[id]) {
              price.classList.remove("!text-red");
              price.classList.add("!text-green");
            } else if (price.getAttribute("data-price") > pricesJSON[id]) {
              price.classList.remove("!text-green");
              price.classList.add("!text-red");
            } else if (price.getAttribute("data-price") === pricesJSON[id]) {
              price.classList.remove("text-green", "text-red");
            }
            price.setAttribute("data-price", pricesJSON[id]);
            price.textContent = formattedPrice(pricesJSON[id]);
          }
        });
      }
      setCryptoData((prevData) => {
        return prevData.map((element) => {
          const updatedElement = { ...element };
          if (updatedElement.id in pricesJSON) {
            updatedElement.priceUsd = pricesJSON[updatedElement.id];
          }
          return updatedElement;
        });
      });
    };

    return () => {
      // Clean up WebSocket connection when component unmounts
      // This is to prevent memory leaks

      pricesWs.current?.close();
    };
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const formattedPrice = (val) => {
    return new Intl.NumberFormat("default", {
      style: "currency",
      currency: "USD",
    }).format(val);
  };

  const formattedPriceChange = (val) => {
    if (isNaN(val)) {
      return "-";
    }

    const price = new Intl.NumberFormat("default", {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(val / 100);

    if (val > 0) {
      return <span className="text-green">{price}</span>;
    } else if (val < 0) {
      return <span className="text-red">{price}</span>;
    }
  };

  return (
    <div id="js-crypto-prices">
      {cryptoData.map((element, index) => (
        <div
          className="flex crypto-price items-center"
          data-currency={element.id}
          key={element.id}
        >
          <div className="crypto-price__index hidden sm:block lg:pl-10 pl-4 w-[6%] text-sm">
            {index + 1}
          </div>
          <div className="crypto-price__coin flex w-[36%] items-center px-3 py-5">
            <img
              src={`/img/coins/${element.symbol.toLowerCase()}.svg`}
              alt="image"
              width="24"
              height="24"
              className="mr-2 flex-shrink-0"
            />
            <div className="crypto-price__name flex-1 text-sm font-display font-semibold">
              <span className="text-jacarta-700 dark:text-white mr-3">
                {element.name}
              </span>
              <span className="text-jacarta-300">{element.symbol}</span>
            </div>
          </div>
          <div
            className="crypto-price__price lg:w-[16%] text-right w-[24%] px-3 py-5 text-jacarta-700 dark:text-white"
            data-price={element.priceUsd}
          >
            {formattedPrice(element.priceUsd)}
          </div>
          <div className="crypto-price__volume w-1/5 hidden text-right md:block px-3 py-5">
            {formattedPrice(element.volumeUsd24Hr)}
          </div>
          <div className="crypto-price__change lg:w-[12%] text-right w-[16%] px-3 py-5">
            {formattedPriceChange(element.changePercent24Hr)}
          </div>
          <div className="crypto-price__trade w-[10%] pl-3 pr-4 py-5 text-right">
            <a
              href="#"
              className="rounded-full hover:bg-jacarta-700 bg-green px-5 py-2 text-white font-display font-semibold text-sm"
            >
              Buy
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoPriceList;
