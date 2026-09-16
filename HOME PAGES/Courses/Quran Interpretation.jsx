import React from "react";
import { motion } from "framer-motion";
import { FaLanguage, FaBookOpen, FaHeadphones } from "react-icons/fa";
import { Link } from "react-router-dom";

import intro1 from "../../src/assets/intro1.jpg";
import intro2 from "../../src/assets/intro2.jpg";
import intro3 from "../../src/assets/intro3.jpg";

const QuranInterpretation = () => {
  return (
    <div className="bg-white py-20">

      {/* Heading */}
      <div className="mx-auto max-w-4xl px-6 text-center">

        <h1 className="font-sans text-5xl font-bold text-[#07805F]">
          Qur’an Interpretation & Translation
        </h1>

        <div className="mx-auto mt-4 h-1 w-24 bg-[#B99152]"></div>

        <p className="mt-7 font-sans text-lg leading-8 text-[#35415A]">
          Discover the true essence of the Qur’an through accurate translations,
          scholarly interpretations, and beautiful recitations all designed to
          help you understand and connect with Allah’s words deeply.
        </p>

      </div>


      {/* Cards */}
      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3">

        {/* Card 1 */}
        <motion.div
          whileHover={{
            boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
        >
          <img
            src={intro1}
            alt="Translation and Meaning"
            className="h-52 w-full object-cover"
          />

          <div className="p-7">

            <div className="flex items-center gap-3">
              <FaLanguage className="text-3xl text-[#B99152]" />

              <h2 className="font-sans text-2xl font-semibold text-[#07805F]">
                Translation & Meaning
              </h2>
            </div>

            <p className="mt-5 font-sans text-base leading-7 text-[#35415A]">
              Read authentic translations of the Holy Qur’an in multiple
              languages to understand the divine message clearly.
            </p>

          </div>
        </motion.div>


        {/* Card 2 */}
        <motion.div
          whileHover={{
            boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
        >
          <img
            src={intro2}
            alt="Tafsir Interpretation"
            className="h-52 w-full object-cover"
          />

          <div className="p-7">

            <div className="flex items-center gap-3">
              <FaBookOpen className="text-3xl text-[#B99152]" />

              <h2 className="font-sans text-2xl font-semibold text-[#07805F]">
                Tafsir (Interpretation)
              </h2>
            </div>

            <p className="mt-5 font-sans text-base leading-7 text-[#35415A]">
              Explore classical and modern Tafsir explaining the context,
              wisdom, and depth of each verse of the Qur’an.
            </p>

          </div>
        </motion.div>


        {/* Card 3 */}
        <motion.div
          whileHover={{
            boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
        >
          <img
            src={intro3}
            alt="Transliteration and Recitation"
            className="h-52 w-full object-cover"
          />

          <div className="p-7">

            <div className="flex items-center gap-3">
              <FaHeadphones className="text-3xl text-[#B99152]" />

              <h2 className="font-sans text-2xl font-semibold text-[#07805F]">
                Transliteration & Recitation
              </h2>
            </div>

            <p className="mt-5 font-sans text-base leading-7 text-[#35415A]">
              Follow transliteration to improve your pronunciation and listen
              to recitations by renowned Qaris.
            </p>

          </div>
        </motion.div>

      </div>


      {/* Button */}
      <div className="mt-12 flex justify-center">

        <Link
          to="/Services"
          className="inline-block rounded-lg bg-[#07805F] px-8 py-4 font-sans text-base font-medium text-white transition duration-300 hover:bg-[#066B50]"
        >
          Explore Qur’an Online
        </Link>

      </div>

    </div>
  );
};

export default QuranInterpretation;