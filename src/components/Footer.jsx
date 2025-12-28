import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import blurLogo from "../../assets/3VBlurLight.png";

const Footer = () => {
  return (
    <div className="pt-20 px-10  text-white">
      <div className="text-center pb-28 flex flex-col">
        <div className="foot-h1">
          <h1>Create Bold.</h1>
          <h1>Deliver better.</h1>
        </div>
        <div className="pt-8 flex items-center justify-center gap-3">
          <button className="px-5 py-2 rounded-3xl text-[#ffffff] text-[16px] bg-[#1A1A1A]">
            see our work
          </button>
          <button className="px-5 py-2 rounded-3xl bg-white text-black text-[16px]">
            start project
          </button>
        </div>
      </div>
      <section className="relative h-full ">
        {/* Background Blur Image */}
        <div className="absolute top-0 left-0 w-full h-[60%] flex justify-center pointer-events-none">
          <img
            src={blurLogo}
            alt="blur logo"
            className="w-[70%] translate-y-[-30%] opacity-90"
          />
        </div>
        {/* Footer Content */}
        <footer className="relative z-10 bg-transparent backdrop-blur-[3.9rem]">
          {/* Social Row */}
          <div className="grid grid-cols-4 border border-[#464646] ">
            {[
              { icon: <FaInstagram />, label: "Instagram" },
              { icon: <FaFacebookF />, label: "Facebook" },
              { icon: <FaTwitter />, label: "Twitter" },
              { icon: <FaLinkedinIn />, label: "LinkedIn" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex border border-[#464646] items-center gap-3 px-10 py-3 last:border-none text-white/70 hover:bg-white/5 transition"
              >
                {item.icon}
                <span className="flex-1">{item.label}</span>
                <HiArrowUpRight />
              </div>
            ))}
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-4 gap-10 px-20 py-8 border border-[#464646] text-white/60 text-[0.8rem]">
            <FooterCol
              title="Company"
              items={["About", "Approach", "Work", "Privacy Policy"]}
            />
            <FooterCol
              title="Services"
              items={[
                "Crafted Websites",
                "Website Redesign",
                "eCommerce Design",
                "CMS & Dynamic Sites",
              ]}
            />
            <FooterCol
              title="Resources"
              items={["Blog", "Templates", "Process", "FAQs"]}
            />
            <FooterCol
              title="Contact"
              items={[
                "Email: contact@visuvate.com",
                "Phone: +91 9278388499",
                "WhatsApp",
                "India – Working globally",
              ]}
            />
          </div>

          {/* Bottom */}
          <div className="text-center py-3 text-white/40 text-sm">
            © 2025 Visuvate. All rights reserved.
          </div>
        </footer>
      </section>
    </div>
  );
};

const FooterCol = ({ title, items }) => (
  <div>
    <h4 className="text-white mb-4">{title}</h4>
    {items.map((item, i) => (
      <p key={i} className="mb-2 hover:text-white transition cursor-pointer">
        {item}
      </p>
    ))}
  </div>
);

export default Footer;
