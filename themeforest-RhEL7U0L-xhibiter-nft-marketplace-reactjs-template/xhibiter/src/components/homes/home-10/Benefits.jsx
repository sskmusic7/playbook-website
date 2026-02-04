import { benefits2 } from "@/data/benefits";

export default function Benefits() {
  return (
    <section className="relative bg-light-base py-24 dark:bg-jacarta-800">
      <div className="container">
        <div className="mx-auto mb-20 max-w-xl text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
            Wallet security is unlike every other wallet: It’s better.
          </h2>
          <p className="text-lg dark:text-jacarta-300">
            Your account is secured by private facial biometrics and
            industry-leading encryption to keep you safe from account takeover
            attacks and phishing. Discover total control and true peace of mind.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {benefits2.map((elm, i) => (
            <div
              key={i}
              className="mb-12 rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700"
            >
              <div className="mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-12 w-12 fill-accent"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d={elm.svgPath} />
                </svg>
              </div>

              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                {elm.title}
              </h3>
              <p className="dark:text-jacarta-300">{elm.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-lg dark:text-jacarta-300">
          Your funds will always be safe with Xhibiter.{" "}
          <a href="#" className="text-accent">
            Learn More.
          </a>
        </p>
      </div>
    </section>
  );
}
