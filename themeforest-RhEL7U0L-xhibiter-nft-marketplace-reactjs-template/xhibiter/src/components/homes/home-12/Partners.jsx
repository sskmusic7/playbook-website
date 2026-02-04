import { partners2 } from "@/data/partnars";

export default function Partners2() {
  return (
    <section className="overflow-hidden pb-24 dark:bg-jacarta-900">
      <div className="container">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
            They trust Us
          </h2>
          <p className="text-lg dark:text-jacarta-300">
            NFTs can be used to represent items such as photos, videos, audio,
            and other types of digital files.
          </p>
        </div>
      </div>
      <div className="mb-8 flex animate-marqueeRight space-x-8">
        {partners2.slice(0, 14).map((elm, i) => (
          <div
            key={i}
            className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6"
          >
            <img src={elm.img} alt="image" />
          </div>
        ))}
      </div>
      <div className="flex animate-marquee space-x-8">
        {partners2.slice(14).map((elm, i) => (
          <div
            key={i}
            className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6"
          >
            <img src={elm.img} alt="image" />
          </div>
        ))}
      </div>
    </section>
  );
}
