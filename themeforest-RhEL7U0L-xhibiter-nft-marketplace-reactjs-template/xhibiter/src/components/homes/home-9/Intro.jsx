import { statistis2 } from "@/data/statictis";

export default function Intro() {
  return (
    <section className="bg-gradient-to-r from-[transparent_33%] to-[#F5F8FA_33%] py-36 dark:to-[#101436_33%]">
      <div className="container">
        <div className="lg:flex lg:justify-between">
          <div className="relative lg:w-[45%]">
            <figure className="relative">
              <img
                src="/img/dao/intro_dao.jpg"
                className="rounded-2.5xl"
                alt="image"
              />
            </figure>
          </div>

          <div className="py-10 lg:w-[55%] lg:pl-24">
            <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
              Evolution of NFT Platforms Web3 Social Impact Protocol
            </h2>
            <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
              NFTs are implemented on blockchains using smart contracts. Each
              token minted on the blockchain protocol carries unique information
              called Metadata.
            </p>
            <p className="dark:text-jacarta-300">
              Therefore, NFT platforms or the NFT marketplace cannot be
              centralized. However, the founders of the blockchain protocol have
              sovereignty over decisions such as launching features on the
              blockchain, establishing rules, and unveiling upgrades.
            </p>
            <div className="mt-11 flex space-x-8">
              {statistis2.map((elm, i) => (
                <div key={i} className="w-1/2">
                  <div>
                    <span className="inline-block font-display text-4xl font-semibold text-accent">
                      {elm.value}
                    </span>
                  </div>
                  <span className="text-lg text-jacarta-700 dark:text-white">
                    {elm.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
