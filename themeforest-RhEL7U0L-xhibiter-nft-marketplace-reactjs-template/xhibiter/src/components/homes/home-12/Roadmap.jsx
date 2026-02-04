import { roadmap } from "@/data/roadmap";
import { useState } from "react";

export default function Roadmap() {
  const [activeTab, setActiveTab] = useState(roadmap[0]);
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 after:absolute after:inset-0 after:bg-jacarta-900/60"
      style={{
        backgroundImage: "url(/img/ico-landing/ico_landing_roadmap.jpg)",
      }}
    >
      <div className="container relative z-10">
        <h2 className="mb-6 font-display text-3xl text-white">Roadmap</h2>
        <p className="mb-12 max-w-xl text-lg text-jacarta-300">
          This timeline details our funding and development goals. Connect our
          AI to your exchange account and invest crypto automatically.
        </p>
        <div className="flex">
          <ul
            className="nav nav-tabs w-1/3 space-y-9 self-start border-l-2 border-jacarta-200 py-2 pl-2 md:pl-8"
            role="tablist"
          >
            {roadmap.map((elm, i) => (
              <li key={i} className="nav-item" role="presentation">
                <button
                  onClick={() => setActiveTab(elm)}
                  className={`nav-link nav-link--style-3 ${
                    activeTab == elm ? "active" : ""
                  } relative flex items-center whitespace-nowrap text-jacarta-300 hover:text-white`}
                >
                  <span className="px-2 font-display text-lg font-medium md:text-2xl">
                    {elm.quarter}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div className="tab-content w-full pl-4 md:mt-16 md:w-2/4">
            <div
              className="tab-pane fade active show"
              id="q3-2021"
              role="tabpanel"
              aria-labelledby="q3-2021-tab"
            >
              <p className="text-lg text-white">{activeTab.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
