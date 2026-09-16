import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ser1 from "../src/assets/ser1.jpg";
import ser2 from "../src/assets/ser2.jpg";
import ser3 from "../src/assets/ser3.jpg";
import ser4 from "../src/assets/ser4.jpg";
import ser5 from "../src/assets/ser5.jpg";
import ser6 from "../src/assets/ser6.jpg";
import ser7 from "../src/assets/ser7.jpg";
import ser8 from "../src/assets/ser8.jpg";
import ser9 from "../src/assets/ser9.jpg";


import {
  FaQuran,
  FaBookOpen,
  FaChalkboardTeacher,
  FaLanguage,
  FaChild,
  FaClock,
  FaFemale,
  FaMosque,
  FaCertificate,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";

/* =========================================================
   HERO IMAGE
========================================================= */

const image = "";

/* =========================================================
   SERVICES DATA
========================================================= */

const services = [
  {
    id: 1,
    title: "One-on-One Quran Classes",
    description:
      "Personalized Quran learning with qualified teachers and flexible class timings.",
    icon: <FaChalkboardTeacher />,
    image: ser1,
    link: "/Contact",
  },

  {
    id: 2,
    title: "Tajweed and Pronunciation",
    description:
      "Learn correct Quran pronunciation and beautiful recitation with proper Tajweed.",
    icon: <FaQuran />,
    image: ser2,
    link: "/Tajweed",
  },

  {
    id: 3,
    title: "Quran Memorization",
    description:
      "Memorize the Holy Quran with a structured learning plan and experienced teachers.",
    icon: <FaBookOpen />,
    image: ser3,
    link: "/Hifz",
  },

  {
    id: 4,
    title: "Translation and Tafseer",
    description:
      "Understand the meanings and messages of the Holy Quran through Tafseer.",
    icon: <FaLanguage />,
    image: ser4,
    link: "/Translation-tafseer",
  },

  {
    id: 5,
    title: "Kids Quran Classes",
    description:
      "Easy and interactive Quran lessons specially designed for children.",
    icon: <FaChild />,
    image: ser5,
    link: "/Contact",
  },

  {
    id: 6,
    title: "Free Trial Class",
    description:
      "Take a free trial class and experience our Quran teaching method.",
    icon: <FaCertificate />,
    image: ser6,
    link: "/Contact",
  },

  {
    id: 7,
    title: "Flexible Scheduling",
    description:
      "Choose class timings according to your daily routine and availability.",
    icon: <FaClock />,
    image: ser7,
    link: "/Contact",
  },

  {
    id: 8,
    title: "Female Quran Tutors",
    description:
      "Learn Quran from qualified female tutors in a comfortable online environment.",
    icon: <FaFemale />,
    image: ser8,
    link: "/Contact",
  },

  {
    id: 9,
    title: "Islamic Studies",
    description:
      "Learn Islamic studies, duas and essential Islamic knowledge.",
    icon: <FaMosque />,
    image: ser9,
    link: "/Contact",
  },
];

/* =========================================================
   SERVICES PAGE
========================================================= */

const Services = () => {
  const [search, setSearch] = useState("");

  /* =======================================================
     SEARCH FILTER
  ======================================================= */

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section
        className="relative flex min-h-[770px] items-center justify-center overflow-hidden bg-black bg-cover bg-center"
        style={{
          backgroundImage: image ? `url(${image})` : "none",
        }}
      >

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-black/75"></div>

        {/* GRADIENT */}

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>

        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 text-center">

          {/* BADGE */}

          <motion.div
            initial={{
              opacity: 0,
              y: -70,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mb-6 flex justify-center"
          >

            <div className="flex items-center gap-2 rounded-full border border-[#d8b52a] bg-black/40 px-4 py-2 text-xs font-medium text-[#e4c329]">
              <FaQuran />
              Premium Quran Education
            </div>

          </motion.div>

          {/* HEADING */}

          <motion.h1
            initial={{
              opacity: 0,
              y: -70,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="whitespace-nowrap text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            Discover The Beauty Of{" "}
            <span className="text-[#e4c329]">
              Quran Learning
            </span>
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 md:text-base"
          >
            Transform your spiritual journey with certified teachers,
            flexible schedules, and personalized Quran learning programs
            tailored for every age and level.
          </motion.p>

          {/* BUTTONS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 70,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >

            {/* START LEARNING */}

            <Link
              to="/Contact"
              className="rounded-md bg-[#e4c329] px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#c9a91d] hover:shadow-lg"
            >
              Start Learning Today
            </Link>

            {/* EXPLORE SERVICES */}

            <a
              href="#services"
              className="rounded-md border border-[#e4c329] px-7 py-3 text-sm font-medium text-[#e4c329] transition-all duration-300 hover:bg-[#e4c329] hover:text-black"
            >
              Explore Services
            </a>

          </motion.div>

        </div>

        {/* =================================================
            GOLD WAVE
        ================================================= */}

        <div className="absolute bottom-0 left-0 z-20 w-full overflow-hidden">

          <div className="relative h-16 w-full">

            {/* DARK GOLD WAVE */}

            <div
              className="absolute -bottom-8 left-[-5%] h-12 w-[110%] bg-[#8c7315]"
              style={{
                borderRadius: "50% 50% 0 0",
                transform: "rotate(2deg)",
              }}
            ></div>

            {/* MAIN GOLD WAVE */}

            <div
              className="absolute -bottom-7 left-[-5%] h-14 w-[110%] bg-[#e4c329]"
              style={{
                borderRadius: "50% 50% 0 0",
                transform: "rotate(-1deg)",
              }}
            ></div>

            {/* FRONT GOLD WAVE */}

            <div
              className="absolute -bottom-5 left-[-5%] h-10 w-[110%] bg-[#e4c329]"
              style={{
                borderRadius: "50% 50% 0 0",
                transform: "rotate(-1deg)",
              }}
            ></div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES SECTION
      ===================================================== */}

      <section
        id="services"
        className="bg-[#fafafa] px-5 py-16"
      >

        <div className="mx-auto max-w-6xl">

          {/* =================================================
              SECTION HEADING
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center"
          >

            <h2 className="text-3xl font-bold text-[#101828] md:text-4xl">
              Our{" "}
              <span className="text-[#d9ad16]">
                Quran Services
              </span>
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#475467]">
              Comprehensive Quran learning solutions designed to meet
              your spiritual and educational needs
            </p>

          </motion.div>

          {/* =================================================
              SEARCH BAR
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto mt-10 max-w-md"
          >

            <div className="flex h-11 items-center rounded-lg border border-[#e4e7ec] bg-white px-3 shadow-sm">

              <FaSearch className="mr-3 text-sm text-[#cbd0d8]" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search services..."
                className="w-full bg-transparent text-xs text-[#344054] outline-none placeholder:text-[#98a2b3]"
              />

            </div>

          </motion.div>

          {/* =================================================
              SERVICE CARDS
          ================================================= */}

          <div className="mt-9 flex flex-wrap gap-6">

            {filteredServices.map((service, index) => (

              <motion.div
                key={service.id}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group w-full overflow-hidden rounded-xl border border-[#eaecf0] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >

                {/* =================================================
                    IMAGE AREA
                ================================================= */}

                <div className="relative h-[168px] overflow-hidden bg-[#eeeeee]">

                  {service.image ? (

                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                  ) : (

                    <div className="flex h-full w-full items-center justify-center">
                      <FaQuran className="text-5xl text-[#d9ad16]/30" />
                    </div>

                  )}

                  {/* =================================================
                      GOLD ICON
                  ================================================= */}

                  <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#E4B820] text-white shadow-sm">
                    {service.icon}
                  </div>

                </div>

                {/* =================================================
                    CARD CONTENT
                ================================================= */}

                <div className="p-5">

                  {/* TITLE */}

                  <h3 className="text-[16px] font-bold leading-6 text-[#101828]">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="mt-2 min-h-[52px] text-xs leading-6 text-[#475467]">
                    {service.description}
                  </p>

                  {/* =================================================
                      EXPLORE BUTTON
                  ================================================= */}

                  <Link
                    to={service.link}
                    className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#087f5b] text-xs font-medium text-white transition-all duration-300 hover:bg-[#e7bd26] hover:text-white"
                  >
                    Explore more
                    <FaArrowRight className="text-[10px]" />
                  </Link>

                </div>

              </motion.div>

            ))}

          </div>

          {/* =================================================
              NO SEARCH RESULT
          ================================================= */}

          {filteredServices.length === 0 && (

            <div className="py-16 text-center">

              <p className="text-sm text-gray-500">
                No service found.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          CONTACT CTA
      ===================================================== */}

      <section className="bg-[#f7fffb] px-5 py-20">

        <div className="mx-auto max-w-5xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="flex flex-col items-center justify-between gap-7 rounded-3xl bg-[#087f5b] px-8 py-10 text-center shadow-xl md:flex-row md:px-12 md:text-left"
          >

            {/* CTA TEXT */}

            <div>

              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Ready To Start Your Quran Journey?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
                Contact us today and get connected with our qualified
                Quran teachers.
              </p>

            </div>

            {/* CTA BUTTON */}

            <Link
              to="/Contact"
              className="flex shrink-0 items-center gap-2 rounded-lg bg-[#f3c51e] px-7 py-3 text-sm font-bold text-gray-900 transition-all duration-300 hover:bg-white hover:text-[#087f5b] hover:shadow-lg"
            >
              Contact Us
              <FaArrowRight />
            </Link>

          </motion.div>

        </div>

      </section>

    </div>
  );
};

export default Services;