import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <img
        src="/img/hero/hero_dao.jpg"
        alt="image"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="ml-auto mr-auto h-full max-w-[91rem] px-4">
        <div className="grid h-full items-center gap-4 md:grid-cols-12">
          <div className="col-span-5 flex h-full flex-col items-center justify-center py-10 md:items-start lg:py-20">
            <h1 className="mb-6 text-center font-display text-5xl text-white md:text-left lg:text-6xl">
              DAO-enabled NFT platforms or the NFT marketplaces
            </h1>
            <p className="mb-8 max-w-md text-center text-lg text-white md:text-left">
              Every digital creation available through MakersPlace is an
              authentic and truly unique.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/collections"
                className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
              >
                Get Started
              </Link>
              <Link
                to="/collections"
                className="rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative col-span-6 col-start-7 hidden h-full md:block">
            <div className="absolute bottom-[17%] left-12 animate-fly">
              <div className="flex items-center space-x-4 rounded-2lg bg-[#8247E5]/50 p-2.5 pr-6 pl-0 backdrop-blur-md">
                <div className="-ml-6 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <img
                    src="/img/chains/polygon@2x.png"
                    alt="image"
                    className="max-w-[50%]"
                  />
                </div>
                <span className="font-display text-sm text-white">Polygon</span>
                <span className="font-display text-sm text-white/40">PY</span>
              </div>
            </div>
            <div className="absolute right-8 top-1/2 animate-fly">
              <div className="flex items-center space-x-4 rounded-2lg bg-[#62688F]/50 p-2.5 pr-6 pl-0 backdrop-blur-md">
                <div className="-ml-6 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <img
                    src="/img/chains/ethereum@2x.png"
                    alt="image"
                    className="max-w-[50%]"
                  />
                </div>
                <span className="font-display text-sm text-white">
                  Ethereum
                </span>
                <span className="font-display text-sm text-white/40">ETH</span>
              </div>
            </div>
            <div className="absolute right-1/3 top-1/4 animate-fly">
              <div className="flex items-center space-x-4 rounded-2lg bg-[#000000]/50 p-2.5 pr-6 pl-0 backdrop-blur-md">
                <div className="-ml-6 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <img
                    src="/img/chains/bitcoin@2x.png"
                    alt="image"
                    className="max-w-[50%]"
                  />
                </div>
                <span className="font-display text-sm text-white">Bitcoin</span>
                <span className="font-display text-sm text-white/40">BTC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
