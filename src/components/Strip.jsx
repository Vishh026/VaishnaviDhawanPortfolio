import React from "react";
import {
  SiWix,
  SiStripe,
  SiFigma,
  SiBlender,
  SiNotion,
  SiAdobe,
  SiReact,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

const tech = [
  { icon: SiReact, label: "React" },
  { icon: SiNodedotjs, label: "Node" },
  { icon: SiExpress, label: "Express" },
  { icon: SiStripe, label: "Stripe" },
  { icon: SiFigma, label: "Figma" },
  { icon: SiAdobe, label: "Adobe" },
  { icon: SiNotion, label: "Notion" },
  { icon: SiBlender, label: "Blender" },
];

const Strip = () => {
  return (
    <section className="bg-black py-8 text-white">
      <div className="max-w-140 mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-6  place-items-center text-white">
        {tech.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-3 text-xl hover:opacity-100 transition"
            >
              <Icon size={26} />
              <span className="font-medium tracking-wide">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Strip;
