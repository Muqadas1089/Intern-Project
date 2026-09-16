import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaGlobe, FaDesktop } from "react-icons/fa";
import mq1 from "../../src/assets/mq1.jpg"

const MadaniQaida = () => {
  return (
    <div className="bg-white">

      {/* Main Madani Qaida Section */}
      <section className="px-10 py-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="font-serif text-5xl font-bold">
            <span className="text-[#B99152]">Learn </span>
            <span className="text-[#007A55]">Madani Qaida</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mx-auto mt-8 max-w-5xl font-serif text-xl leading-9 text-[#26344A]"
          >
            The <b>Madani Qaida</b> is your first step toward mastering the
            sacred art of Quranic recitation. With expert guidance, you’ll
            learn Tajweed, correct pronunciation, and the spiritual essence
            of each verse — creating a deep connection with the Divine words.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="mx-auto mt-16 flex max-w-6xl items-start gap-5">

          {/* Left Green Box */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="w-[620px] rounded-3xl bg-[#087255] p-11"
          >

            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border-l-4 border-[#C0924D] bg-[#277F69] px-6 py-5"
            >
              <h2 className="font-serif text-2xl font-bold text-[#F5D77B]">
                Personalized Learning Path
              </h2>

              <p className="mt-3 font-serif text-lg leading-8 text-white">
                Our teachers customize your lessons according to your pace
                and level, ensuring that every concept is understood with
                clarity and confidence.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="mt-8 rounded-2xl border-l-4 border-[#C0924D] bg-[#277F69] px-6 py-5"
            >
              <h2 className="font-serif text-2xl font-bold text-[#F5D77B]">
                Learn with Ease and Comfort
              </h2>

              <p className="mt-3 font-serif text-lg leading-8 text-white">
                Enjoy structured online classes that fit your daily routine.
                Learn peacefully from your home while staying spiritually
                connected.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mt-8 rounded-2xl border-l-4 border-[#C0924D] bg-[#277F69] px-6 py-5"
            >
              <h2 className="font-serif text-2xl font-bold text-[#F5D77B]">
                Build a Strong Foundation
              </h2>

              <p className="mt-3 font-serif text-lg leading-8 text-white">
                Start your journey with proper pronunciation, Tajweed,
                correct recitation, and lifelong spiritual excellence and
                Quranic proficiency.
              </p>
            </motion.div>

          </motion.div>

          {/* Gold Line */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-10 h-[520px] w-[3px] bg-[#B99152]"
          />

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="w-[530px]"
          >

            {/* Buttons */}
            <div className="flex gap-6">

              {/* Start Learning Button */}
              <button
                className="h-[85px] w-[265px] rounded-xl bg-[#B99152] px-8 font-serif text-xl font-bold leading-8 text-white shadow-md transition duration-300 hover:scale-105 hover:bg-[#056047] hover:shadow-lg"
              >
                Start Learning
                <br />
                Now
              </button>

              {/* Download Button */}
              <button
                className="h-[85px] w-[265px] rounded-xl bg-[#056047] px-8 font-serif text-xl font-bold leading-8 text-white shadow-md transition duration-300 hover:scale-105 hover:bg-[#B99152] hover:shadow-lg"
              >
                Download
                <br />
                Qaida
              </button>

            </div>

            {/* Image */}
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
                className="h-[430px] w-full object-cover transition duration-500 hover:scale-105"
              />
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Three Information Cards */}
      <section className="px-10 py-16">

        <div className="mx-auto flex max-w-7xl gap-10">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 rounded-3xl bg-[#EAFBF5] px-10 py-10 text-center shadow-md transition duration-300 hover:shadow-xl"
          >
            <FaBookOpen className="mx-auto text-5xl text-[#009E6F]" />

            <h2 className="mt-7 font-serif text-2xl font-bold text-[#B99152]">
              Who Will Teach Me?
            </h2>

            <p className="mt-5 font-serif text-lg leading-8 text-[#26344A]">
              Our certified Quran tutors are professionals in Tajweed and
              Arabic phonetics, offering one-on-one mentorship with care and
              dedication.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex-1 rounded-3xl bg-[#D5F9E9] px-10 py-10 text-center shadow-md transition duration-300 hover:shadow-xl"
          >
            <FaGlobe className="mx-auto text-5xl text-[#009E6F]" />

            <h2 className="mt-7 font-serif text-2xl font-bold text-[#B99152]">
              Multilingual Teachers
            </h2>

            <p className="mt-5 font-serif text-lg leading-8 text-[#26344A]">
              You can learn in English, Urdu, or Arabic — we ensure everyone
              across the world can access authentic Quranic learning easily.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 rounded-3xl bg-[#EAFBF5] px-10 py-10 text-center shadow-md transition duration-300 hover:shadow-xl"
          >
            <FaDesktop className="mx-auto text-5xl text-[#009E6F]" />

            <h2 className="mt-7 font-serif text-2xl font-bold text-[#B99152]">
              How Do Online Classes
              <br />
              Work?
            </h2>

            <p className="mt-5 font-serif text-lg leading-8 text-[#26344A]">
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