import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaGlobe, FaDesktop } from "react-icons/fa";
import mq1 from "../../src/assets/mq1.jpg";

const MadaniQaida = () => {
  return (
    <div className="bg-white">

      {/* MAIN MADANI QAIDA SECTION */}
      <section className="px-5 py-16 sm:px-8 md:px-10">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >

          <h1
            className="font-serif text-4xl font-bold sm:text-5xl"
          >
            <span className="text-[#B99152]">Learn </span>
            <span className="text-[#007A55]">Madani Qaida</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mx-auto mt-8 max-w-5xl font-serif text-base
            leading-7 text-[#26344A] sm:text-lg sm:leading-8 md:text-xl
            md:leading-9"
          >
            The <b>Madani Qaida</b> is your first step toward mastering the
            sacred art of Quranic recitation. With expert guidance, you’ll
            learn Tajweed, correct pronunciation, and the spiritual essence
            of each verse — creating a deep connection with the Divine words.
          </motion.p>

        </motion.div>


        {/* MAIN CONTENT */}
        <div
          className="mx-auto mt-12 flex max-w-6xl flex-col items-center
          gap-8 lg:mt-16 lg:flex-row lg:items-start lg:gap-5"
        >

          {/* ================= LEFT GREEN BOX ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="w-full rounded-3xl bg-[#087255] p-6
            sm:p-8 md:p-11 lg:w-[620px]"
          >

            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border-l-4 border-[#C0924D]
              bg-[#277F69] px-5 py-5 sm:px-6"
            >

              <h2
                className="font-serif text-xl font-bold text-[#F5D77B]
                sm:text-2xl"
              >
                Personalized Learning Path
              </h2>

              <p
                className="mt-3 font-serif text-base leading-7
                text-white sm:text-lg sm:leading-8"
              >
                Our teachers customize your lessons according to your pace
                and level, ensuring that every concept is understood with
                clarity and confidence.
              </p>

            </motion.div>


            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="mt-6 rounded-2xl border-l-4 border-[#C0924D]
              bg-[#277F69] px-5 py-5 sm:mt-8 sm:px-6"
            >

              <h2
                className="font-serif text-xl font-bold text-[#F5D77B]
                sm:text-2xl"
              >
                Learn with Ease and Comfort
              </h2>

              <p
                className="mt-3 font-serif text-base leading-7
                text-white sm:text-lg sm:leading-8"
              >
                Enjoy structured online classes that fit your daily routine.
                Learn peacefully from your home while staying spiritually
                connected.
              </p>

            </motion.div>


            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mt-6 rounded-2xl border-l-4 border-[#C0924D]
              bg-[#277F69] px-5 py-5 sm:mt-8 sm:px-6"
            >

              <h2
                className="font-serif text-xl font-bold text-[#F5D77B]
                sm:text-2xl"
              >
                Build a Strong Foundation
              </h2>

              <p
                className="mt-3 font-serif text-base leading-7
                text-white sm:text-lg sm:leading-8"
              >
                Start your journey with proper pronunciation, Tajweed,
                correct recitation, and lifelong spiritual excellence and
                Quranic proficiency.
              </p>

            </motion.div>

          </motion.div>


          {/* ================= GOLD LINE ================= */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="hidden h-[520px] w-[3px] bg-[#B99152] lg:block"
          />


          {/* ================= RIGHT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="w-full lg:w-[530px]"
          >

            {/* ================= BUTTONS ================= */}
            <div
              className="flex flex-col gap-4 sm:flex-row sm:gap-6"
            >

              {/* START LEARNING BUTTON */}
              <button
                className="h-[85px] w-full rounded-xl bg-[#B99152]
                px-8 font-serif text-xl font-bold leading-8 text-white
                shadow-md transition duration-300 hover:scale-105
                hover:bg-[#056047] hover:shadow-lg sm:w-[265px]"
              >
                Start Learning
                <br />
                Now
              </button>


              {/* DOWNLOAD BUTTON */}
              <button
                className="h-[85px] w-full rounded-xl bg-[#056047]
                px-8 font-serif text-xl font-bold leading-8 text-white
                shadow-md transition duration-300 hover:scale-105
                hover:bg-[#B99152] hover:shadow-lg sm:w-[265px]"
              >
                Download
                <br />
                Qaida
              </button>

            </div>


            {/* ================= IMAGE ================= */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="mt-8 overflow-hidden rounded-3xl"
            >

              <img
                src={mq1}
                alt="Madani Qaida"
                className="h-[350px] w-full object-cover
                transition duration-500 hover:scale-105
                sm:h-[400px] md:h-[430px]"
              />

            </motion.div>

          </motion.div>

        </div>
      </section>


      {/* THREE INFORMATION CARDS */}
      <section className="px-5 py-16 sm:px-8 md:px-10">

        <div
          className="mx-auto flex max-w-7xl flex-col gap-8
          lg:flex-row lg:gap-10"
        >

          {/* ================= CARD 1 ================= */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 rounded-3xl bg-[#EAFBF5]
            px-6 py-10 text-center shadow-md transition duration-300
            hover:shadow-xl sm:px-10"
          >

            <FaBookOpen
              className="mx-auto text-5xl text-[#009E6F]"
            />

            <h2
              className="mt-7 font-serif text-2xl font-bold
              text-[#B99152]"
            >
              Who Will Teach Me?
            </h2>

            <p
              className="mt-5 font-serif text-base leading-7
              text-[#26344A] sm:text-lg sm:leading-8"
            >
              Our certified Quran tutors are professionals in Tajweed and
              Arabic phonetics, offering one-on-one mentorship with care and
              dedication.
            </p>

          </motion.div>


          {/* ================= CARD 2 ================= */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex-1 rounded-3xl bg-[#D5F9E9]
            px-6 py-10 text-center shadow-md transition duration-300
            hover:shadow-xl sm:px-10"
          >

            <FaGlobe
              className="mx-auto text-5xl text-[#009E6F]"
            />

            <h2
              className="mt-7 font-serif text-2xl font-bold
              text-[#B99152]"
            >
              Multilingual Teachers
            </h2>

            <p
              className="mt-5 font-serif text-base leading-7
              text-[#26344A] sm:text-lg sm:leading-8"
            >
              You can learn in English, Urdu, or Arabic — we ensure everyone
              across the world can access authentic Quranic learning easily.
            </p>

          </motion.div>


          {/* ================= CARD 3 ================= */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 rounded-3xl bg-[#EAFBF5]
            px-6 py-10 text-center shadow-md transition duration-300
            hover:shadow-xl sm:px-10"
          >

            <FaDesktop
              className="mx-auto text-5xl text-[#009E6F]"
            />

            <h2
              className="mt-7 font-serif text-2xl font-bold
              text-[#B99152]"
            >
              How Do Online Classes
              <br />
              Work?
            </h2>

            <p
              className="mt-5 font-serif text-base leading-7
              text-[#26344A] sm:text-lg sm:leading-8"
            >
              Classes are conducted live via Zoom or Google Meet with screen
              sharing, recitation practice, and real-time corrections by
              teachers.
            </p>

          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default MadaniQaida;

