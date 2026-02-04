import { faqs3 } from "@/data/faq";

export default function Faq() {
  return (
    <section className="bg-light-base py-24 dark:bg-jacarta-800">
      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
            What Is an Initial Coin Offering (ICO)?
          </h2>
          <p className="text-lg dark:text-jacarta-300">
            An initial coin offering (ICO) is the{" "}
            <a href="#" className="underline">
              cryptocurrency
            </a>{" "}
            industry’s equivalent of an{" "}
            <a href="#" className="underline">
              initial public offering (IPO)
            </a>
            .
          </p>
        </div>
        <div className="lg:flex lg:flex-nowrap">
          <div className="lg:w-[59%]">
            <figure className="relative mb-8 overflow-hidden rounded-3xl">
              <img
                src="/img/ico-landing/ico_landing_promo.png"
                className=""
                alt="image"
              />
            </figure>
          </div>
          <div className="lg:w-[41%] lg:pl-24">
            <p className="mt-10 mb-5 dark:text-jacarta-300">
              A company seeking to raise money to create a new coin, app, or
              service can launch an ICO as a way to raise funds.
            </p>
            <a
              href="#"
              className="mb-10 inline-block text-sm font-bold text-accent"
            >
              Learn More
            </a>

            <div className="accordion mx-auto max-w-[35rem]" id="accordionFAQ">
              {faqs3.map((elm, i) => (
                <div
                  key={i}
                  className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
                >
                  <h2 className="accordion-header" id={`faq-heading-${elm.id}`}>
                    <button
                      className={`accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-sm text-jacarta-700 dark:bg-jacarta-700 dark:text-white`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq-${elm.id}`}
                      aria-expanded={true}
                      aria-controls={`faq-${elm.id}`}
                    >
                      <span>{elm.question}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id={`faq-${elm.id}`}
                    className={`accordion-collapse collapse  visible`}
                    aria-labelledby={`faq-heading-${elm.id}`}
                    data-bs-parent="#accordionFAQ"
                  >
                    <div className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                      <p className="dark:text-jacarta-200">{elm.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
