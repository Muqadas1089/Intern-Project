import React from "react";
import { motion } from "framer-motion";
import Taj from "../src/assets/Taj.jpg"

import {
  FaBookOpen,
  FaListAlt,
  FaChalkboardTeacher,
  FaDownload,
} from "react-icons/fa";

/* =========================================================
   TAJWEED HERO IMAGE
========================================================= */

const image = Taj;

/* =========================================================
   TAJWEED PAGE
========================================================= */

const Tajweed = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          TAJWEED HERO SECTION
      ===================================================== */}

      <section
        className="relative flex h-[660px] w-full items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: image ? `url(${image})` : "none",
          backgroundColor: "#063c2e",
        }}
      >
        {/* DARK GREEN OVERLAY */}

        <div className="absolute inset-0 bg-[#003d2d]/65"></div>

        {/* EXTRA OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-b from-[#003d2d]/30 via-[#003d2d]/50 to-[#003d2d]/80"></div>

        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center">

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
          >
            <span className="text-[#d5a82a]">
              Recite
            </span>

            <span className="text-white">
              {" "}and Rise
            </span>
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-white md:text-base"
          >
            Tajweed is the art of proper recitation,
            preserving the beauty and precision of the Qur’an.
          </motion.p>

          {/* GOLD LINE */}

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            animate={{
              opacity: 1,
              scaleX: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mx-auto mt-5 h-[3px] w-20 rounded-full bg-[#d5a82a]"
          ></motion.div>

        </div>
      </section>


      {/* =====================================================
          OUR MISSION
      ===================================================== */}

      <section className="bg-white px-5 py-16 md:py-20">

        <div className="mx-auto flex max-w-5xl flex-col items-center">

          {/* HEADING */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center"
          >

            <h2 className="text-3xl font-bold text-[#087f5b] md:text-4xl">
              Our Mission
            </h2>

            <div className="mx-auto mt-2 h-[3px] w-14 rounded-full bg-[#d5a82a]"></div>

            <p className="mx-auto mt-5 max-w-3xl text-xs leading-6 text-gray-700 md:text-base md:leading-7">
              Our goal is to explain the principles of
              <span className="text-[#087f5b]"> Tajweed </span>
              and help non-Arabs recite the Qur’an beautifully and correctly.
              We share short, practical Tajweed lessons and answer student
              questions with clarity and care.
            </p>

          </motion.div>


          {/* =================================================
              HADITH CARD
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="relative mt-9 w-full max-w-3xl rounded-2xl border border-[#b9ddd2] bg-gradient-to-r from-[#edf7f3] to-[#f7f2e9] px-6 py-8 text-center shadow-md md:px-10 md:py-9"
          >

            {/* BADGE */}

            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#087f5b] px-5 py-1.5 text-[10px] font-medium text-white shadow-sm md:text-xs">
              Hadith on Recitation
            </div>


            <p className="mt-3 text-xs italic leading-6 text-gray-700 md:text-sm md:leading-7">
              "The one who was devoted to the Qur'an will be told on the Day
              of Resurrection: Recite and ascend in ranks as you used to
              recite in the world. Your rank will be at the last Ayah you recite."
            </p>


            <p className="mt-5 text-xs font-medium text-[#b88925] md:text-sm">
              — Prophet Muhammad ﷺ
            </p>


            <p className="mt-1 text-[10px] text-gray-600 md:text-xs">
              (Reported by Abdullah bin 'Amr bin Al-As)
            </p>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          WHAT IS TAJWEED
      ===================================================== */}

      <section className="bg-white px-5 pb-10">

        <div className="mx-auto max-w-5xl text-center">

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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
          >

            <h2 className="text-2xl font-bold text-[#087f5b] md:text-3xl">
              What is Tajweed?
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-xs leading-6 text-gray-700 md:text-sm">
              The word <b>"Tajweed"</b> means to improve or make better.
              It is the knowledge and application of rules of recitation
              so that the Qur’an is read as it was revealed to Prophet
              Muhammad ﷺ with clarity and beauty.
            </p>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          TAJWEED RULES CHEAT SHEET
      ===================================================== */}

      <section className="bg-white px-5 pb-16">

        <div className="mx-auto max-w-5xl">

          {/* SECTION HEADING */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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

            <h2 className="text-2xl font-bold text-[#087f5b] md:text-3xl">
              Tajweed Rules Cheat Sheet
            </h2>

            <div className="mx-auto mt-2 h-[3px] w-14 rounded-full bg-[#d5a82a]"></div>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-gray-700 md:text-sm">
              A simple guide to help learners understand, remember,
              and apply the core pronunciation and stopping rules
              of Tajweed effectively.
            </p>

          </motion.div>


          {/* =================================================
              THREE CARDS
          ================================================= */}

          <div className="mt-7 flex flex-col gap-5 md:flex-row">

            {/* =================================================
                CARD 1
            ================================================= */}

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
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
              }}
              className="flex flex-1 flex-col rounded-xl border-t-2 border-[#087f5b] bg-white p-4 shadow-md"
            >

              <div className="flex items-center gap-3">

                <FaBookOpen className="text-xl text-[#b88925]" />

                <h3 className="text-sm font-medium text-[#087f5b]">
                  Tajweed Rules Cheat Sheet
                </h3>

              </div>


              <p className="mt-3 text-xs leading-5 text-gray-700">
                A quick overview of essential Tajweed symbols
                and pronunciation rules:
              </p>


              <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px] leading-4 text-gray-700">

                <li>
                  Zabar, Zer, Pesh
                </li>

                <li>
                  Standing Zabar, Standing Zer, Reverse Pesh
                </li>

                <li>
                  Double Zabar, Double Zer, Double Pesh
                </li>

                <li>
                  Jazm and Qalqala letters
                </li>

                <li>
                  Wao Leen, Wao Maad, Yaa Leen, Yaa-e Maad
                </li>

              </ul>


              <button
                type="button"
                className="mt-4 flex w-fit items-center gap-2 rounded-md bg-[#087f5b] px-3 py-2 text-[10px] font-medium text-white transition-all duration-300 hover:bg-[#e7bd26]"
              >
                <FaDownload />
                Download PDF
              </button>

            </motion.div>


            {/* =================================================
                CARD 2
            ================================================= */}

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
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="flex flex-1 flex-col rounded-xl border-t-2 border-[#087f5b] bg-white p-4 shadow-md"
            >

              <div className="flex items-center gap-3">

                <FaListAlt className="text-xl text-[#b88925]" />

                <h3 className="text-sm font-medium text-[#087f5b]">
                  Signs and Stopping Rules
                </h3>

              </div>


              <p className="mt-3 text-xs leading-5 text-gray-700">
                Mastering Tajweed requires understanding
                how to stop and continue correctly:
              </p>


              <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px] leading-4 text-gray-700">

                <li>
                  Recognize signs of stopping (Waqf symbols)
                </li>

                <li>
                  Practice stopping on Madd and Leen letters properly
                </li>

                <li>
                  Maintain correct Ghunnah and nasal sounds when pausing
                </li>

                <li>
                  Understand when to stop on Small Meem and Double Zabar
                </li>

              </ul>


              <button
                type="button"
                className="mt-4 flex w-fit items-center gap-2 rounded-md bg-[#087f5b] px-3 py-2 text-[10px] font-medium text-white transition-all duration-300 hover:bg-[#e7bd26]"
              >
                <FaDownload />
                Download PDF
              </button>

            </motion.div>


            {/* =================================================
                CARD 3
            ================================================= */}

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
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="flex flex-1 flex-col rounded-xl border-t-2 border-[#087f5b] bg-white p-4 shadow-md"
            >

              <div className="flex items-center gap-3">

                <FaChalkboardTeacher className="text-xl text-[#b88925]" />

                <h3 className="text-sm font-medium text-[#087f5b]">
                  Four Rules of Learning Tajweed
                </h3>

              </div>


              <p className="mt-3 text-xs leading-5 text-gray-700">
                Every student should remember these
                guiding principles:
              </p>


              <ol className="mt-3 space-y-1 text-[11px] leading-4 text-gray-700">

                <li>
                  1. Learn the foundations well.
                </li>

                <li>
                  2. Practice consistently and correctly.
                </li>

                <li>
                  3. Admit it and correct mistakes without hesitation.
                </li>

                <li>
                  4. Stay motivated and keep improving — don't get discouraged.
                </li>

              </ol>


              <button
                type="button"
                className="mt-4 flex w-fit items-center gap-2 rounded-md bg-[#087f5b] px-3 py-2 text-[10px] font-medium text-white transition-all duration-300 hover:bg-[#e7bd26]"
              >
                <FaDownload />
                Download PDF
              </button>

            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          BOTTOM SPACE
      ===================================================== */}

      <section className="h-8 bg-white"></section>

    </div>
  );
};

export default Tajweed;