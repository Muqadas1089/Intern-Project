import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

import logo from "../src/assets/logo.png";

const Footer = () => {
  const quickLinks = [
    "Home",
    "About Us",
    "Services",
    "Contact Us",
    "Privacy Policy",
    "Terms of Service",
  ];

  const courses = [
    "Quran Memorization (Hifz)",
    "Tajweed",
    "Quran Tafsir",
  ];

  return (
    <footer
      className="
        
        w-full
        rounded-t-[18px]
        bg-gradient-to-r
        from-[#e7c28d]
        via-[#c8a36a]
        to-[#ab7b3d]
        text-white
      "
    >
      {/* ================= MAIN FOOTER ================= */}
      <div
        className="
          mx-auto
          max-w-[1220px]
          px-6
          pt-5
          pb-3
          md:px-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            lg:grid-cols-[1.25fr_1fr_1fr_1.25fr]
            lg:gap-10
          "
        >

          {/* ================= ABOUT / LOGO ================= */}
          <div>
            <div
              className="
                group
                flex
                items-center
                gap-2
                cursor-pointer
                transition-all
                duration-300
                hover:scale-105
              "
            >
              {/* LOGO */}
              <div
                className="
                  flex
                  h-[56px]
                  w-[56px]
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-md
                  bg-white
                  shadow-md
                  transition-all
                  duration-300
                  group-hover:shadow-lg
                "
              >
                <img
                  src={logo}
                  alt="Al Hafiz Online Quran Academy"
                  className="
                    h-full
                    w-full
                    object-contain
                    p-1
                  "
                />
              </div>

              {/* HEADING */}
              <h2
                className="
                  font-serif
                  text-[16px]
                  font-semibold
                  leading-[1.3]
                  text-white
                "
              >
                Al Hafiz-Online
                <br />
                Quran Academy
              </h2>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                mt-3
                max-w-[300px]
                text-[12px]
                leading-5
                text-white/90
              "
            >
              Learn Quran online with qualified teachers.
              Study Tajweed, Memorization, and Islamic
              studies from the comfort of your home.
            </p>

            {/* ================= SOCIAL ICONS ================= */}
            <div className="mt-3 flex items-center gap-3">

              {/* FACEBOOK */}
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#ab7b3d]
                  text-[13px]
                  text-white
                  transition-all
                  duration-300
                  hover:scale-125
                  hover:bg-[#ab7b3d]
                  hover:shadow-[0_8px_25px_#ab7b3d]
                "
              >
                <FaFacebookF />
              </a>

              {/* TWITTER */}
              <a
                href="#"
                aria-label="Twitter"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#ab7b3d]
                  text-[13px]
                  text-white
                  transition-all
                  duration-300
                  hover:scale-125
                  hover:bg-[#ab7b3d]
                  hover:shadow-[0_8px_25px_#ab7b3d]
                "
              >
                <FaTwitter />
              </a>

              {/* INSTAGRAM */}
              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#ab7b3d]
                  text-[13px]
                  text-white
                  transition-all
                  duration-300
                  hover:scale-125
                  hover:bg-[#ab7b3d]
                  hover:shadow-[0_8px_25px_#ab7b3d]
                "
              >
                <FaInstagram />
              </a>

              {/* YOUTUBE */}
              <a
                href="#"
                aria-label="Youtube"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#ab7b3d]
                  text-[13px]
                  text-white
                  transition-all
                  duration-300
                  hover:scale-125
                  hover:bg-[#ab7b3d]
                  hover:shadow-[0_8px_25px_#ab7b3d]
                "
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3
              className="
                font-serif
                text-[16px]
                font-semibold
                text-white
              "
            >
              Quick Links
            </h3>

            <div className="mt-2 h-px w-full bg-white/40" />

            <ul className="mt-2 space-y-1">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="
                      inline-block
                      text-[12px]
                      text-white/90
                      transition-all
                      duration-300
                      hover:translate-x-2
                      hover:text-white
                    "
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= OUR COURSES ================= */}
          <div>
            <h3
              className="
                font-serif
                text-[16px]
                font-semibold
                text-white
              "
            >
              Our Courses
            </h3>

            <div className="mt-2 h-px w-full bg-white/40" />

            <ul className="mt-2 space-y-1">
              {courses.map((course) => (
                <li key={course}>
                  <a
                    href="#"
                    className="
                      inline-block
                      text-[12px]
                      text-white/90
                      transition-all
                      duration-300
                      hover:translate-x-2
                      hover:text-white
                    "
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT US ================= */}
          <div>
            <h3
              className="
                font-serif
                text-[16px]
                font-semibold
                text-white
              "
            >
              Contact Us
            </h3>

            <div className="mt-2 h-px w-full bg-white/40" />

            <div className="mt-3 space-y-2">

              {/* ADDRESS */}
              <a
                href="#"
                className="
                  flex
                  items-start
                  gap-2
                  text-[12px]
                  leading-5
                  text-white/95
                  transition-all
                  duration-300
                  hover:translate-x-1
                "
              >
                <FaMapMarkerAlt
                  className="
                    mt-1
                    shrink-0
                    text-[12px]
                  "
                />

                <span>
                  Hassan Manzil,Street No-01,Bahawalpur
                </span>
              </a>

              {/* PHONE */}
              <a
                href="tel:+923006868033"
                className="
                  flex
                  items-center
                  gap-2
                  text-[12px]
                  text-white/95
                  transition-all
                  duration-300
                  hover:translate-x-1
                "
              >
                <FaPhoneAlt className="text-[11px]" />

                <span>
                  +92 300 6868033
                </span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:info@a-hafiz.com"
                className="
                  flex
                  items-center
                  gap-2
                  text-[12px]
                  text-white/95
                  transition-all
                  duration-300
                  hover:translate-x-1
                "
              >
                <FaEnvelope className="text-[11px]" />

                <span>
                  info@a-hafiz.com
                </span>
              </a>

            </div>

            {/* ================= NEWSLETTER ================= */}
            <div className="mt-3">

              <p className="mb-1 text-[12px]">
                Subscribe to Newsletter
              </p>

              <div
                className="
                  flex
                  h-[34px]
                  max-w-[300px]
                  overflow-hidden
                  rounded-lg
                  border
                  border-white/25
                  bg-white/5
                  transition-all
                  duration-300
                  focus-within:border-white/60
                "
              >
                {/* INPUT */}
                <input
                  type="email"
                  placeholder="Your email"
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    px-3
                    text-[12px]
                    text-white
                    outline-none
                    placeholder:text-white/60
                  "
                />

                {/* BUTTON */}
                <button
                  type="button"
                  className="
                    group
                    flex
                    items-center
                    gap-1
                    bg-[#9b6c31]/50
                    px-3
                    text-[12px]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#84571f]
                    hover:px-4
                  "
                >
                  Subscribe

                  <FaArrowRight
                    className="
                      text-[9px]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div
          className="
            my-4
            h-px
            w-full
            bg-white/50
          "
        />

        {/* ================= COPYRIGHT ================= */}
        <div className="text-center">
          <p
            className="
              text-[11px]
              text-white/95
            "
          >
            © 2026 Online Quran Academy. All rights reserved.
          </p>
        </div>
      </div>

      {/* ================= WHATSAPP BUTTON ================= */}
      <a
        href="https://wa.me/923006868033"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          fixed
          bottom-3
          right-4
          z-[100]
          flex
          h-[45px]
          w-[45px]
          items-center
          justify-center
          text-[37px]
          text-[#20d76a]
          transition-all
          duration-300
          hover:-translate-y-2
          hover:scale-110
          hover:drop-shadow-[0_6px_12px_#20d76a]
        "
      >
        <FaWhatsapp />
      </a>
    </footer>

    
  );
};

export default Footer;