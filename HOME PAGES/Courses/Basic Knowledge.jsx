import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bi1 from '../../src/assets/bi1.jpg';
import bi2 from "../../src/assets/bi2.jpg";
import bi3 from "../../src/assets/bi3.jpg";
import bi4 from "../../src/assets/bi4.jpg";
import bi5 from "../../src/assets/bi5.jpg";
import bi6 from "../../src/assets/bi6.jpg";
import bi7 from "../../src/assets/bi7.jpg";

import {
  FaBookOpen,
  FaComments,
  FaMosque,
  FaMusic,
  FaSun,
  FaBook,
  FaTimes,
} from "react-icons/fa";

const BasicIslamicKnowledge = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  /* ================= COURSES DATA ================= */

  const courses = [
    {
      title: "Arabic Grammar Course",
      image: bi1,
      duration: "8 weeks",
      icon: <FaBookOpen />,
      description:
        "Master Arabic grammar fundamentals for Quranic understanding with expert guidance.",
      detail:
        "Learn essential Arabic grammar rules and sentence structures. Build strong foundation for Quranic comprehension. Interactive lessons with practical exercises.",
    },

    {
      title: "Arabic Language Course",
      image: bi2,
      duration: "12 weeks",
      icon: <FaComments />,
      description:
        "Learn to speak Arabic easily with our comprehensive language program.",
      detail:
        "Develop your Arabic speaking, reading, and understanding skills through simple and practical lessons designed for learners.",
    },

    {
      title: "Hadith Course",
      image: bi3,
      duration: "10 weeks",
      icon: <FaMosque />,
      description:
        "Study authentic sayings of Prophet Muhammad (peace be upon him).",
      detail:
        "Explore authentic Hadith and learn about the teachings, guidance, and examples of Prophet Muhammad (peace be upon him).",
    },

    {
      title: "Tajweed Course",
      image: bi4,
      duration: "6 weeks",
      icon: <FaMusic />,
      description:
        "Learn Quran recitation with proper pronunciation and beauty.",
      detail:
        "Learn the rules of Tajweed and improve your Quran recitation with correct pronunciation, rhythm, and proper articulation.",
    },

    {
      title: "Fundamentals of Islam Course",
      image: bi5,
      duration: "8 weeks",
      icon: <FaSun />,
      description:
        "Understand essential Islamic beliefs and practices.",
      detail:
        "Learn the essential beliefs, practices, values, and principles of Islam in a simple and beginner-friendly way.",
    },

    {
      title: "Islamic Studies Course",
      image: bi6,
      duration: "16 weeks",
      icon: <FaBook />,
      description:
        "Explore Quran, Hadith, and Seerah in integrated program.",
      detail:
        "Explore the Quran, Hadith, Seerah, Islamic history, and important Islamic teachings through a structured learning program.",
    },
  ];

  return (
    <div className="w-full bg-white">

      {/* ================= TOP SECTION ================= */}

      <section className="px-5 py-10 md:px-10 lg:px-20">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="text-4xl font-bold text-[#B78A4A] md:text-5xl">
            Basic Islamic Knowledge Program
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#344054] md:text-lg">
            Discover the beauty of Islam through our structured learning
            journey — designed to help you strengthen your faith, understand
            Islamic values, and live by the teachings of the Quran and Sunnah.
          </p>
        </motion.div>


        {/* ================= INTRO SECTION ================= */}

        <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center gap-10 lg:flex-row">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-full lg:w-1/2"
          >
            <p className="text-base leading-6 text-[#344054]">
              The{" "}
              <span className="font-semibold text-[#00805F]">
                Basic Islamic Knowledge Course
              </span>{" "}
              at{" "}
              <span className="font-semibold text-[#B78A4A]">
                International Quran Academy
              </span>{" "}
              introduces learners to the essential principles of Islam —
              including faith, prayer, moral conduct, and community life. The
              course simplifies deep concepts, making it easy for beginners and
              curious learners alike.
            </p>

            <p className="mt-5 text-base leading-6 text-[#344054]">
              Guided by qualified teachers, you'll explore how Islamic
              teachings shape character, encourage peace, and connect believers
              with Allah in daily life. By the end of this course, you'll gain
              both understanding and spiritual growth that help you walk the
              path of faith.
            </p>

            <Link
              to="/contact"
              className="
                mt-7
                inline-block
                rounded-lg
                bg-[#00805F]
                px-7
                py-3
                text-sm
                font-medium
                text-white
                transition
                duration-300
                hover:bg-[#006B4F]
              "
            >
              Enroll for Free
            </Link>
          </motion.div>


          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-full lg:w-1/2"
          >
            <img
              src={bi4}
              alt="Basic Islamic Knowledge"
              className="
                h-[310px]
                w-full
                rounded-2xl
                object-cover
                shadow-2xl
              "
            />
          </motion.div>

        </div>


        {/* ================= UNDERSTANDING SECTION ================= */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mx-auto mt-14 max-w-5xl"
        >
          <h2 className="text-center text-2xl font-bold text-[#00805F] md:text-3xl">
            Understanding the Essence of Islam
          </h2>

          <p className="mt-4 text-base leading-7 text-[#344054]">
            Islam is a religion of peace that calls humanity to the worship of
            one true God — Allah — and guides mankind toward a life of justice,
            mercy, and purpose. It is built upon divine revelation delivered to
            Prophet Muhammad (peace be upon him) through the Angel Jibreel,
            compiled in the Holy Quran.
          </p>

          <p className="mt-7 text-base leading-7 text-[#344054]">
            Alongside the Quran, Muslims follow the Sunnah — the Prophet's
            actions and teachings — which provide a living example of faith in
            practice. Together, these sources teach believers how to lead a
            meaningful life, rooted in devotion, compassion, and integrity.
          </p>
        </motion.div>


        {/* ================= QUOTE + FOLLOWERS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto mt-16 max-w-5xl"
        >
          {/* QUOTE */}

          <div
            className="
              rounded-r-xl
              border-l-2
              border-[#B78A4A]
              bg-[#F8F9FA]
              px-6
              py-4
            "
          >
            <p className="text-sm italic leading-6 text-[#536074]">
              "Whoever follows My guidance will never go astray, nor fall into
              misery."
              <span className="ml-2 text-[#B78A4A]">
                — [Surah Ta-Ha, 20:123]
              </span>
            </p>
          </div>


          {/* HEADING */}

          <h2 className="mt-14 text-center text-2xl font-bold text-[#B78A4A] md:text-3xl">
            Who Are the Followers of Islam?
          </h2>


          {/* PARAGRAPH 1 */}

          <p className="mt-5 text-base leading-7 text-[#344054]">
            Muslims are those who surrender their will to Allah and follow His
            divine guidance. They view life as a sacred trust and strive to
            live righteously — reflecting honesty, patience, humility, and
            compassion in all interactions.
          </p>


          {/* PARAGRAPH 2 */}

          <p className="mt-8 text-base leading-7 text-[#344054]">
            Regardless of nationality or language, Muslims are united by the
            declaration of faith —
            <span className="font-semibold">
              {" "}
              "There is no god but Allah, and Muhammad is His Messenger."
            </span>{" "}
            This unity transcends borders, forming a global brotherhood of
            believers connected through worship and purpose.
          </p>


          {/* PARAGRAPH 3 */}

          <p className="mt-8 text-base leading-7 text-[#344054]">
            Central to Islamic life are the Five Pillars: faith, prayer,
            charity, fasting, and pilgrimage. These pillars strengthen one's
            relationship with Allah and build a compassionate and balanced
            society.
          </p>
        </motion.div>


        {/* ========================================================= */}
        {/* ================= EXPLORE MORE COURSES ================== */}
        {/* ========================================================= */}

        <section className="mx-auto mt-20 max-w-5xl">

          {/* SECTION HEADING */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-[#00805F] md:text-4xl">
              Explore More Courses
            </h2>
          </motion.div>


          {/* ================= COURSE CARDS ================= */}

          <div
            className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-7
            "
          >

            {courses.map((course, index) => (

              <motion.div
                key={index}

                /* ================= SMOOTH 0.8 SECOND ZOOM ================= */

                initial={{
                  opacity: 0,
                  scale: 0.85,
                }}

                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}

                viewport={{
                  once: true,
                  amount: 0.15,
                }}

                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}

                className="
                  w-full
                  overflow-hidden
                  rounded-xl
                  bg-white
                  shadow-lg
                  sm:w-[45%]
                  lg:w-[31%]
                "
              >

                {/* IMAGE AREA */}

                <div className="relative">

                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-[180px] w-full object-cover"
                  />

                  {/* COURSE ICON */}

                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      border-white
                      bg-[#B78A4A]
                      text-white
                      shadow-md
                    "
                  >
                    {course.icon}
                  </div>

                  {/* DURATION */}

                  <div
                    className="
                      absolute
                      right-3
                      top-3
                      rounded-full
                      bg-black/70
                      px-3
                      py-1
                      text-xs
                      text-white
                    "
                  >
                    {course.duration}
                  </div>

                </div>


                {/* CARD CONTENT */}

                <div className="p-5">

                  <h3 className="text-xl font-semibold text-[#00805F]">
                    {course.title}
                  </h3>

                  <p className="mt-3 h-[48px] overflow-hidden text-sm leading-6 text-[#344054]">
                    {course.description}
                  </p>


                  {/* READ MORE */}

                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="
                      mt-5
                      w-full
                      rounded-lg
                      bg-[#B78A4A]
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-white
                      transition
                      duration-300
                      hover:bg-[#9C723C]
                    "
                  >
                    Read More
                  </button>

                </div>

              </motion.div>

            ))}

          </div>


          {/* ================= BOTTOM CONTACT BUTTON ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
              ease: "easeOut",
            }}
            className="mt-14 flex justify-center"
          >
            <Link
              to="/contact"
              className="
                rounded-full
                bg-[#00805F]
                px-10
                py-4
                text-center
                text-sm
                font-medium
                text-white
                shadow-lg
                transition
                duration-300
                hover:bg-[#006B4F]
                hover:shadow-xl
              "
            >
              Begin Your Faithful Learning Journey
            </Link>
          </motion.div>

        </section>

      </section>


      {/* ========================================================= */}
      {/* ================= COURSE POPUP / MODAL ================== */}
      {/* ========================================================= */}

      {selectedCourse && (

        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/70
            px-5
            backdrop-blur-sm
          "
          onClick={() => setSelectedCourse(null)}
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-[430px]
              rounded-2xl
              bg-white
              p-5
              shadow-2xl
            "
          >

            {/* ICON */}

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-[#B78A4A]
                text-white
                shadow-md
              "
            >
              {selectedCourse.icon}
            </div>


            {/* CLOSE BUTTON */}

            <button
              onClick={() => setSelectedCourse(null)}
              className="
                absolute
                right-5
                top-7
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-[#00805F]
                text-sm
                text-white
                transition
                duration-300
                hover:bg-[#006B4F]
              "
            >
              <FaTimes />
            </button>


            {/* COURSE TITLE */}

            <h2 className="mt-4 text-xl font-semibold text-[#B78A4A]">
              {selectedCourse.title}
            </h2>


            {/* DURATION */}

            <div
              className="
                mt-3
                flex
                items-center
                justify-between
                rounded-lg
                bg-[#F7F8F9]
                px-3
                py-3
                text-sm
              "
            >
              <span className="text-[#344054]">
                Course Duration:
              </span>

              <span className="font-medium text-[#00805F]">
                {selectedCourse.duration}
              </span>
            </div>


            {/* DETAIL */}

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-[#344054]
              "
            >
              {selectedCourse.detail}
            </p>


            {/* ENROLL BUTTON */}

            <Link
              to="/contact"
              onClick={() => setSelectedCourse(null)}
              className="
                mt-5
                block
                w-full
                rounded-lg
                bg-[#00805F]
                px-5
                py-3
                text-center
                text-sm
                font-medium
                text-white
                transition
                duration-300
                hover:bg-[#B78A4A]
              "
            >
              Enroll Now
            </Link>

          </motion.div>

        </div>
      )}

    </div>
  );
};

export default BasicIslamicKnowledge;