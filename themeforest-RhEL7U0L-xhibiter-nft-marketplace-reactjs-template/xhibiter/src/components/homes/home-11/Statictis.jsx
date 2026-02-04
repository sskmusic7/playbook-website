import { statistis3 } from "@/data/statictis";

export default function Statictis() {
  return (
    <section className="bg-light-base py-24 pb-14 dark:bg-jacarta-700">
      <div className="container">
        <div className="md:flex md:flex-nowrap md:space-x-6">
          {statistis3.map((elm, i) => (
            <div key={i} className="mb-10 text-center md:w-1/3">
              <span className="mb-3 block font-display text-3xl font-semibold text-jacarta-700 dark:text-white">
                {elm.value}
              </span>
              <span className="text-lg dark:text-jacarta-300">
                {elm.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
