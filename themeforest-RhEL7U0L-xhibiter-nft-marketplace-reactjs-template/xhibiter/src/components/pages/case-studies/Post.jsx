/* eslint-disable react/no-unescaped-entities */
import { caseStudies } from "@/data/caseStudies";

import { Link } from "react-router-dom";

export default function Post({ id }) {
  const item = caseStudies.filter((elm) => elm.id == id)[0] || caseStudies[0];
  return (
    <section className="relative py-16 md:py-24">
      <div className="container">
        <header className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-3 inline-flex flex-wrap items-center space-x-1 text-xs">
            <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
              <Link to="/case-studies">CONTENT MARKETING</Link>
              <Link to="/case-studies">PPC</Link>
            </span>
          </div>

          <h1 className="mb-4 font-display text-2xl text-jacarta-700 dark:text-white sm:text-5xl">
            {item.title
              ? item.title
              : "Which cryptocurrency has highest potential in future growth?"}
          </h1>
        </header>

        <figure className="mb-4">
          <img
            src={
              item.imgSrc || "/img/case-studies/single_case_study_featured.jpg"
            }
            alt="post 1"
            className="w-full rounded-2.5xl max-h-[90vh] object-contain"
          />
        </figure>

        <article>
          <div className="lg:flex lg:space-x-8">
            <div className="mt-12 lg:w-1/3">
              <div className="mb-7">
                <h3 className="font-display text-md font-semibold text-jacarta-700 dark:text-white">
                  Industry
                </h3>
                <span className="text-2xs font-medium dark:text-jacarta-300">
                  Cryptocurency, Digital
                </span>
              </div>
              <div className="mb-7">
                <h3 className="font-display text-md font-semibold text-jacarta-700 dark:text-white">
                  Services Provided
                </h3>
                <span className="text-2xs font-medium dark:text-jacarta-300">
                  Content Marketing, PPC
                </span>
              </div>
              <div className="mb-7">
                <h3 className="font-display text-md font-semibold text-jacarta-700 dark:text-white">
                  Area Served
                </h3>
                <span className="text-2xs font-medium dark:text-jacarta-300">
                  Worldwide
                </span>
              </div>
            </div>

            <div className="article-content lg:w-2/3">
              <h2 className="text-3xl">The Challenge</h2>
              <p className="text-lg leading-normal">
                As you may already know, there are an infinite number of things
                you can test on your site to help you increase sales.
              </p>
              <p>
                From layout to copy to design, there are limitless combinations
                of changes that may improve your visitor-to-sale conversion
                rate. But what's "enough" when you're just starting out? What
                elements should you focus on testing before rolling out your
                traffic campaign? Changes that may improve your visitor-to-sale
                conversion rate. But what's "enough" when you're just starting
                out? What elements should you focus on testing before rolling
                out your traffic campaign?
              </p>
              <p>
                Enthusiasm, commitment and a long list of satisfied clients
                wasn’t enough for Reborn to achieve the growth they wanted. To
                get ahead of the competition, they partnered with OMG on a
                digital solution engineered for market success.
              </p>
              <h3 className="text-xl">Key problems</h3>
              <ul>
                <li>
                  Wanting to boost domain authority to dominate fierce market
                  competition
                </li>
                <li>Create a site structure that will enhance SEO</li>
                <li>
                  Onsite optimisation to make their website appeal to both
                  search engines and users
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
