import { teamMembers } from "@/data/team";

export default function Team() {
  return (
    <section className="relative py-24">
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <img
          src="/img/gradient_light.jpg"
          alt="gradient"
          className="h-full w-full"
        />
      </picture>
      <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <img
          src="/img/gradient_dark.jpg"
          alt="gradient dark"
          className="h-full w-full"
        />
      </picture>
      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
            Meet our Crypto Experts
          </h2>
          <p className="text-lg dark:text-jacarta-200">
            NFTs can be used to represent items such as photos, videos, audio,
            and other types of digital files.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-[1.875rem] lg:grid-cols-5">
          {teamMembers.slice(0, 5).map((elm, i) => (
            <div
              key={i}
              className="rounded-2lg border border-jacarta-100 bg-white p-8 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700"
            >
              <img
                src={elm.imageSrc}
                className="mx-auto mb-6 h-[8.125rem] w-[8.125rem] rounded-2.5xl"
                alt="team"
              />
              <h3 className="font-display text-md text-jacarta-700 dark:text-white">
                {elm.name}
              </h3>
              <span className="text-2xs font-medium tracking-tight text-jacarta-400">
                {elm.position}
              </span>

              <div className="mt-3 flex justify-center space-x-5">
                {elm.socials.map((elm2, i2) => (
                  <a key={i2} href="#" className="group">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="linkedin"
                      className="h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d={elm2.svgPath}></path>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
