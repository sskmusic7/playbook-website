import { partnars } from "@/data/partnars";

export default function Partners() {
  return (
    <div className="bg-light-base dark:bg-jacarta-800">
      <div className="container">
        <div className="grid grid-cols-2 py-8 sm:grid-cols-5">
          {partnars.map((elm, i) => (
            <a key={i} href={elm.link}>
              <img src={elm.img} alt="partner 1" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
