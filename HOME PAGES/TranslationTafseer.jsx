import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaLanguage,
  FaBookOpen,
  FaHeadphones,
} from "react-icons/fa";

const TranslationTafseer = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          HERO / TITLE SECTION
      ===================================================== */}

      <section className="bg-white px-5 pb-14 pt-16 md:px-8 md:pb-16 md:pt-20">

        <div className="mx-auto max-w-6xl text-center">

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="text-3xl font-bold text-[#087f5b] md:text-4xl lg:text-5xl"
          >
            Qur’an Interpretation & Translation
          </motion.h1>

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
              duration: 0.6,
              delay: 0.2,
            }}
            className="mx-auto mt-4 h-[4px] w-28 rounded-full bg-[#b88925]"
          ></motion.div>

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
              duration: 0.7,
              delay: 0.2,
            }}
            className="mx-auto mt-7 max-w-4xl text-sm leading-7 text-[#344054] md:text-base"
          >
            Discover the true essence of the Qur’an through accurate
            translations, scholarly interpretations, and beautiful
            recitations all designed to help you understand and connect
            with Allah’s words deeply.
          </motion.p>

        </div>

      </section>

      {/* =====================================================
          THREE SERVICE CARDS
      ===================================================== */}

      <section className="bg-white px-5 pb-16 md:px-8">

        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row">

          {/* =================================================
              CARD 1
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
              duration: 0.6,
            }}
            className="group flex flex-1 flex-col overflow-hidden rounded-2xl border border-[#eaecf0] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
          >

            {/* IMAGE AREA */}

            <div className="h-[230px] bg-[#f3f5f4]">

              <div className="flex h-full w-full items-center justify-center">
                <FaLanguage className="text-7xl text-[#d9ad16]/30" />
              </div>

            </div>

            {/* CONTENT */}

            <div className="flex flex-1 flex-col p-7">

              <div className="flex items-center gap-3">

                <FaLanguage className="text-xl text-[#b88925]" />

                <h2 className="text-lg font-semibold text-[#087f5b]">
                  Translation & Meaning
                </h2>

              </div>

              <p className="mt-4 text-sm leading-7 text-[#475467]">
                Read authentic translations of the Holy Qur’an in
                multiple languages to understand the divine
                message clearly.
              </p>

            </div>

          </motion.div>

          {/* =================================================
              CARD 2
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
              duration: 0.6,
              delay: 0.1,
            }}
            className="group flex flex-1 flex-col overflow-hidden rounded-2xl border border-[#eaecf0] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
          >

            {/* IMAGE AREA */}

            <div className="h-[230px] bg-[#f3f5f4]">

              <div className="flex h-full w-full items-center justify-center">
                <FaBookOpen className="text-7xl text-[#d9ad16]/30" />
              </div>

            </div>

            {/* CONTENT */}

            <div className="flex flex-1 flex-col p-7">

              <div className="flex items-center gap-3">

                <FaBookOpen className="text-xl text-[#b88925]" />

                <h2 className="text-lg font-semibold text-[#087f5b]">
                  Tafsir (Interpretation)
                </h2>

              </div>

              <p className="mt-4 text-sm leading-7 text-[#475467]">
                Explore classical and modern Tafsir explaining the
                context, wisdom, and depth of each verse of the
                Qur’an.
              </p>

            </div>

          </motion.div>

          {/* =================================================
              CARD 3
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
              duration: 0.6,
              delay: 0.2,
            }}
            className="group flex flex-1 flex-col overflow-hidden rounded-2xl border border-[#eaecf0] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
          >

            {/* IMAGE AREA */}

            <div className="h-[230px] bg-[#f3f5f4]">

              <div className="flex h-full w-full items-center justify-center">
                <FaHeadphones className="text-7xl text-[#d9ad16]/30" />
              </div>

            </div>

            {/* CONTENT */}

            <div className="flex flex-1 flex-col p-7">

              <div className="flex items-center gap-3">

                <FaHeadphones className="text-xl text-[#b88925]" />

                <h2 className="text-lg font-semibold text-[#087f5b]">
                  Transliteration & Recitation
                </h2>

              </div>

              <p className="mt-4 text-sm leading-7 text-[#475467]">
                Follow transliteration to improve your pronunciation
                and listen to recitations by renowned Qaris.
              </p>

            </div>

          </motion.div>

        </div>

        {/* =================================================
            BACK TO SERVICES BUTTON
        ================================================= */}

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
            delay: 0.25,
          }}
          className="mt-14 flex justify-center"
        >

          <Link
            to="/services"
            className="rounded-lg bg-[#087f5b] px-8 py-4 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-[#e7bd26] hover:shadow-lg"
          >
            Explore Qur’an Online
          </Link>

        </motion.div>

      </section>

    </div>
  );
};

export default TranslationTafseer;