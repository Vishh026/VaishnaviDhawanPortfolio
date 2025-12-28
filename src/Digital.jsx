import React from "react";

const Digital = () => {

    const services = [
  { icon: "🌐", title: "Crafted\nWebsites" },
  { icon: "✏️", title: "Website\nRedesign" },
  { icon: "🛒", title: "eCommerce\nWebsite Design" },
  { icon: "📋", title: "CMS &\nDynamic Websites" },
  { icon: "✈️", title: "Landing Pages\n& Microsites" },
  { icon: "🧩", title: "Consistent\nIdentity" },
  { icon: "⚡", title: "Motion &\nInteraction Design" },
  { icon: "📐", title: "UX Centric\nStrategy" },
  { icon: "🚀", title: "Performance\nOptimization" },
  { icon: "🛠️", title: "Maintenance &\nOngoing Support" },
];
  return (
    <div className="bg-black py-24 text-white mx-10">
      <div className="flex justify-between items-end py-5">
        <div className="">
          <h1 className="d-h1">Elevate your</h1>
          <h1 className="d-h1">digital footprint.</h1>
        </div>
        <div className="flex gap-5">
          <button className="px-5 py-2 rounded-3xl bg-white text-black text-[16px]">
            start project
          </button>
          <button className="px-5 py-2 rounded-3xl text-[#ffffff] text-[16px] bg-[#1A1A1A]">see our work</button>
        </div>
      </div>

      <section className="services-section">
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card cursor-pointer" key={index}>
            <div className="service-icon">{service.icon}</div>
            <p className="service-title">
              {service.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Digital;
