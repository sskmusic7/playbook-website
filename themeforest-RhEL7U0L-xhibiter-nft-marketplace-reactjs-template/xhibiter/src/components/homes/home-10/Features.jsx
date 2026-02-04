import { featuresData } from "@/data/feature";
import { features } from "@/data/service";

export default function Features() {
  return (
    <section className="pt-20 pb-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="rounded-2.5xl bg-light-base p-8 text-center dark:bg-jacarta-800"
            >
              <div
                className={`mb-6 inline-flex rounded-full bg-[${feature.backgroundColor}] p-3`}
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent ${feature.bgClass} `}
                >
                  <img src={feature.iconSrc} alt="feature" />
                </div>
              </div>
              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                {feature.amount}
              </h3>
              <p className="dark:text-jacarta-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
