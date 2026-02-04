import { services } from "@/data/service";

export default function Service() {
  return (
    <section className="py-24 dark:bg-jacarta-900">
      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
            Start Improving Your Business Today
          </h2>
          <p className="text-lg dark:text-jacarta-300">
            Connect our AI to your exchange account and invest crypto
            automatically. Xhibiter app work while you just live.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((elm, i) => (
            <div
              key={i}
              className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 pt-12 transition-shadow hover:shadow-xl dark:border-jacarta-700 dark:bg-jacarta-700"
            >
              <span className="absolute top-10 left-12 block h-10 w-10 rounded-full bg-[#DCD0FF] dark:bg-accent"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="relative mb-6 h-8 w-8 fill-accent-dark dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d={elm.svgPath} />
              </svg>
              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                {elm.title}
              </h3>
              <p className="dark:text-jacarta-300">{elm.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
