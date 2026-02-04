import { Link } from "react-router-dom";
import MetaMaskLogin from "../metamask/MetamaskInLogin";

export default function Login() {
  return (
    <section className="relative h-screen">
      <div className="lg:flex lg:h-full">
        {/* Left */}
        <div className="relative text-center lg:w-1/2">
          <img
            src="/img/login.jpg"
            alt="login"
            className="absolute h-full w-full object-cover"
          />
          {/* Logo */}
          <Link to="/" className="relative inline-block py-36">
            <img
              src="/img/logo_white.png"
              className="inline-block max-h-7"
              alt="Xhibiter | NFT Marketplace"
            />
          </Link>
        </div>

        {/* Right */}
        <div className="relative flex items-center justify-center p-[10%] lg:w-1/2">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              src="/img/gradient_light.jpg"
              alt="gradient"
              className="h-full w-full"
            />
          </picture>

          <div className="w-full max-w-[25.625rem] text-center">
            <h1 className="mb-6 font-display text-4xl text-jacarta-700 dark:text-white">
              Sign in
            </h1>
            <p className="mb-10 text-lg leading-normal dark:text-jacarta-300">
              Choose one of available wallet providers or create a new wallet.
              <a href="#" className="text-accent">
                What is a wallet?
              </a>
            </p>

            {/* Tabs Nav */}
            <ul
              className="nav nav-tabs scrollbar-custom mb-12 flex items-center justify-start overflow-x-auto overflow-y-hidden border-b border-jacarta-100 pb-px dark:border-jacarta-600 md:justify-center"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                  id="ethereum-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#ethereum"
                  type="button"
                  role="tab"
                  aria-controls="ethereum"
                  aria-selected="true"
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    viewBox="0 0 1920 1920"
                    // xml:space="preserve"
                    className="mr-1 mb-[2px] h-4 w-4 fill-current"
                  >
                    <path
                      fill="#8A92B2"
                      d="M959.8 80.7L420.1 976.3 959.8 731z"
                    ></path>
                    <path
                      fill="#62688F"
                      d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                    ></path>
                    <path
                      fill="#454A75"
                      d="M959.8 1295.4l539.8-319.1L959.8 731z"
                    ></path>
                    <path
                      fill="#8A92B2"
                      d="M420.1 1078.7l539.7 760.6v-441.7z"
                    ></path>
                    <path
                      fill="#62688F"
                      d="M959.8 1397.6v441.7l540.1-760.6z"
                    ></path>
                  </svg>

                  <span className="font-display text-base font-medium">
                    Ethereum
                  </span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                  id="torus-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#torus"
                  type="button"
                  role="tab"
                  aria-controls="torus"
                  aria-selected="false"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 mb-[2px] h-4 w-4 fill-current"
                  >
                    <path d="M9.35098 3H4V5.93692H9.35098V3Z" fill="#0364FF" />
                    <path
                      d="M9.35028 3.00403H6.44531V12.74H9.35028V3.00403Z"
                      fill="#0364FF"
                    />
                    <path
                      d="M11.5221 5.93554C12.3239 5.93554 12.9739 5.27842 12.9739 4.46777C12.9739 3.65715 12.3239 3 11.5221 3C10.7203 3 10.0703 3.65715 10.0703 4.46777C10.0703 5.27842 10.7203 5.93554 11.5221 5.93554Z"
                      fill="#0364FF"
                    />
                  </svg>

                  <span className="font-display text-base font-medium">
                    Torus
                  </span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                  id="wallet-connect-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#wallet-connect"
                  type="button"
                  role="tab"
                  aria-controls="wallet-connect"
                  aria-selected="false"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 mb-[2px] h-4 w-4 fill-current"
                  >
                    <path
                      d="M4.08889 5.34343C6.30052 3.1588 9.8863 3.1588 12.0979 5.34343L12.3641 5.60635C12.4747 5.71559 12.4747 5.89269 12.3641 6.0019L11.4536 6.90132C11.3983 6.95594 11.3086 6.95594 11.2534 6.90132L10.8871 6.5395C9.34416 5.01545 6.84265 5.01545 5.29974 6.5395L4.90747 6.92698C4.85219 6.9816 4.76256 6.9816 4.70726 6.92698L3.79674 6.02756C3.68616 5.91835 3.68616 5.74125 3.79674 5.63201L4.08889 5.34343ZM13.981 7.20351L14.7914 8.00397C14.9019 8.11321 14.9019 8.29031 14.7914 8.39953L11.1374 12.009C11.0268 12.1182 10.8475 12.1182 10.7369 12.009C10.7369 12.009 10.7369 12.009 10.7369 12.009L8.14348 9.44724C8.11583 9.41995 8.07101 9.41995 8.04336 9.44724L5.45 12.009C5.33945 12.1182 5.16015 12.1182 5.04957 12.009C5.04957 12.009 5.04957 12.009 5.04957 12.009L1.39544 8.39947C1.28485 8.29026 1.28485 8.11316 1.39544 8.00392L2.2058 7.20346C2.31638 7.09422 2.49568 7.09422 2.60626 7.20346L5.1997 9.7652C5.22735 9.79253 5.27217 9.79253 5.29982 9.7652L7.89312 7.20346C8.00371 7.09422 8.183 7.09422 8.29359 7.20343C8.29359 7.20346 8.29359 7.20346 8.29359 7.20346L10.887 9.7652C10.9147 9.79253 10.9595 9.79253 10.9871 9.7652L13.5806 7.20351C13.6911 7.09427 13.8704 7.09427 13.981 7.20351Z"
                      fill="#3C99FC"
                    />
                  </svg>

                  <span className="font-display text-base font-medium">
                    Mobile Wallet
                  </span>
                </button>
              </li>
            </ul>

            {/* Tab Content */}
            <div className="tab-content">
              {/* Ethereum */}
              <div
                className="tab-pane fade show active"
                id="ethereum"
                role="tabpanel"
                aria-labelledby="ethereum-tab"
              >
                <MetaMaskLogin />

                <button className="mb-4 flex w-full items-center justify-center rounded-full border-2 border-jacarta-100 bg-white py-4 px-8 text-center font-semibold text-jacarta-700 transition-all hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                  <img
                    src="/img/wallets/torus_24.svg"
                    className="mr-2.5 inline-block h-6 w-6"
                    alt="image"
                  />
                  <span>Torus</span>
                </button>

                <button className="mb-4 flex w-full items-center justify-center rounded-full border-2 border-jacarta-100 bg-white py-4 px-8 text-center font-semibold text-jacarta-700 transition-all hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                  <img
                    src="/img/wallets/wallet_connect_24.svg"
                    className="mr-2.5 inline-block h-6 w-6"
                    alt="image"
                  />
                  <span>Mobile Wallet</span>
                </button>

                <button className="mb-4 flex w-full items-center justify-center rounded-full border-2 border-jacarta-100 bg-white py-4 px-8 text-center font-semibold text-jacarta-700 transition-all hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                  <span>Show more options</span>
                </button>
              </div>
              {/* end ethereum */}

              {/* Torus */}
              <div
                className="tab-pane fade"
                id="torus"
                role="tabpanel"
                aria-labelledby="torus-tab"
              >
                <button className="mb-4 flex w-full items-center justify-center rounded-full border-2 border-jacarta-100 bg-white py-4 px-8 text-center font-semibold text-jacarta-700 transition-all hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                  <img
                    src="/img/wallets/torus_24.svg"
                    className="mr-2.5 inline-block h-6 w-6"
                    alt="image"
                  />
                  <span>Torus</span>
                </button>

                <MetaMaskLogin />

                <button className="mb-4 flex w-full items-center justify-center rounded-full border-2 border-jacarta-100 bg-white py-4 px-8 text-center font-semibold text-jacarta-700 transition-all hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                  <img
                    src="/img/wallets/wallet_connect_24.svg"
                    className="mr-2.5 inline-block h-6 w-6"
                    alt="image"
                  />
                  <span>Mobile Wallet</span>
                </button>

                <button className="mb-4 flex w-full items-center justify-center rounded-full border-2 border-jacarta-100 bg-white py-4 px-8 text-center font-semibold text-jacarta-700 transition-all hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                  <span>Show more options</span>
                </button>
              </div>
              {/* end torus */}

              {/* Wallet Connect */}
              <div
                className="tab-pane fade"
                id="wallet-connect"
                role="tabpanel"
                aria-labelledby="wallet-connect-tab"
              >
                <button className="mb-4 flex w-full items-center justify-center rounded-full border-2 border-jacarta-100 bg-white py-4 px-8 text-center font-semibold text-jacarta-700 transition-all hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                  <img
                    src="/img/wallets/wallet_connect_24.svg"
                    className="mr-2.5 inline-block h-6 w-6"
                    alt="image"
                  />
                  <span>Mobile Wallet</span>
                </button>

                <button className="mb-4 flex w-full items-center justify-center rounded-full border-2 border-jacarta-100 bg-white py-4 px-8 text-center font-semibold text-jacarta-700 transition-all hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                  <img
                    src="/img/wallets/torus_24.svg"
                    className="mr-2.5 inline-block h-6 w-6"
                    alt="image"
                  />
                  <span>Torus</span>
                </button>

                <MetaMaskLogin />

                <button className="mb-4 flex w-full items-center justify-center rounded-full border-2 border-jacarta-100 bg-white py-4 px-8 text-center font-semibold text-jacarta-700 transition-all hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                  <span>Show more options</span>
                </button>
              </div>
              {/* end wallet connect */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
