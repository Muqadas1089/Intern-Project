
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ObligatoryScience = () => {
  /* ================= QURANIC SCIENCE TOPICS ================= */

  const topics = [
    {
      icon: "🌍",
      title: "Earth & Creation",
      description:
        "Discover how the Quran describes mountains, seas, and balance on Earth — linking divine words with geological realities.",
    },
    {
      icon: "🌙",
      title: "Astronomy & Cosmos",
      description:
        "Study the Quranic mentions of stars, orbits, and cosmic expansion that align with modern astronomy.",
    },
    {
      icon: "💧",
      title: "Water & Life",
      description:
        "And We made from water every living thing — explore how life scientifically confirms this divine truth.",
    },
    {
      icon: "🧬",
      title: "Human Creation & Genetics",
      description:
        "Understand the Quranic stages of human creation through modern embryology and genetic studies.",
    },
  ];

  /* ================= OBLIGATORY SCIENCE COURSES ================= */

  const courses = [
    {
      number: "1",
      title: "Quranic Cosmology & Modern Physics",
      subtitle: "Understanding the Universe Through Revelation",
      description:
        "Dive deep into the Quranic verses that describe the cosmos — from the Big Bang to the expansion of the universe. Learn how revelation predates discovery, aligning divine guidance with astrophysical laws.",
      duration: "Duration: 8 Weeks",
      level: "Level: Intermediate – Advanced",
    },
    {
      number: "2",
      title: "The Science of Human Creation",
      subtitle: "Embryology, Genetics & the Quranic Process",
      description:
        "Uncover the divine precision in the stages of human creation mentioned in the Quran. This course bridges Quranic descriptions with modern embryology and molecular genetics for a holistic understanding of life.",
      duration: "Duration: 6 Weeks",
      level: "Level: Beginner – Intermediate",
    },
    {
      number: "3",
      title: "Environmental Harmony in Islam",
      subtitle: "Divine Balance Between Nature & Humanity",
      description:
        "Explore the Quran’s ecological wisdom — from sustainable living to the preservation of Earth’s balance. Learn how environmental science aligns with the Islamic responsibility of stewardship (Khilafah).",
      duration: "Duration: 5 Weeks",
      level: "Level: All Levels",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#001F19] px-5 py-12 text-white md:px-10 lg:px-20">

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute bottom-[-120px] left-[-80px] h-[400px] w-[400px] rounded-full bg-[#b48a4b]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* ====================================================== */}
        {/*                  QURANIC SCIENCE HERO                  */}
        {/* ====================================================== */}

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
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto max-w-4xl text-center"
        >

          {/* ================= SMALL BADGE ================= */}

          <div className="mb-5 flex justify-center">
            <div
              className="
                rounded-full
                border
                border-[#8F6A2F]
                px-4
                py-2
                text-xs
                tracking-widest
                text-[#C39A58]
              "
            >
              <span className="mr-2">●</span>
              DIVINE KNOWLEDGE PROGRAM
            </div>
          </div>

          {/* ================= MAIN HEADING ================= */}

          <h1
            className="
              text-4xl
              font-bold
              leading-tight
              text-[#C39A58]
              md:text-5xl
              lg:text-6xl
            "
          >
            Science in the Light of the Quran
          </h1>

          {/* ================= SUBTITLE ================= */}

          <p
            className="
              mt-5
              text-base
              text-[#D7DDD9]
              md:text-lg
            "
          >
            Bridging Divine Revelation with Modern Discovery
          </p>

          {/* ================= DESCRIPTION ================= */}

          <p
            className="
              mx-auto
              mt-5
              max-w-4xl
              text-sm
              leading-6
              text-[#C7D0CC]
              md:text-base
              md:leading-7
            "
          >
            Explore how Quranic guidance inspires scientific curiosity —
            merging divine revelation with human intellect to understand the
            universe, nature, and life itself. This program connects spiritual
            knowledge with scientific research, helping you see science not as
            contradiction, but as confirmation of Allah's signs.
          </p>

        </motion.div>


        {/* ====================================================== */}
        {/*                    TOPIC CARDS                          */}
        {/* ====================================================== */}

        <div
          className="
            mx-auto
            mt-16
            flex
            max-w-7xl
            flex-wrap
            justify-center
            gap-8
          "
        >

          {topics.map((topic, index) => (

            <motion.div
              key={index}

              /* ================= SCROLL ANIMATION ================= */

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
                amount: 0.15,
              }}

              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut",
              }}

              className="
                group
                relative
                w-full
                overflow-hidden
                rounded-xl
                border
                border-[#075548]
                bg-[#032D26]
                px-6
                py-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#00A878]
                hover:shadow-[0_8px_25px_rgba(0,168,120,0.28)]
                sm:w-[45%]
                lg:w-[23%]
              "
            >

              {/* ================= ICON ================= */}

              <div
                className="
                  text-4xl
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                {topic.icon}
              </div>

              {/* ================= TITLE ================= */}

              <h3
                className="
                  mt-4
                  text-xl
                  font-semibold
                  leading-7
                  text-[#C39A58]
                "
              >
                {topic.title}
              </h3>

              {/* ================= DESCRIPTION ================= */}

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-[#D0D8D4]
                "
              >
                {topic.description}
              </p>

              {/* ================= 70% BOTTOM HOVER LINE ================= */}

              <div
                className="
                  absolute
                  bottom-5
                  left-1/2
                  h-[2px]
                  w-[70%]
                  -translate-x-1/2
                  rounded-full
                  bg-[#00A878]
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

            </motion.div>

          ))}

        </div>


        {/* ====================================================== */}
        {/*              FEATURED COURSES HEADING                  */}
        {/* ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mx-auto mt-24 max-w-4xl text-center"
        >

          <h2
            className="
              text-3xl
              font-bold
              text-[#C39A58]
              md:text-4xl
            "
          >
            Featured Courses in Quranic Science
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-[#D0D8D4]
              md:text-base
            "
          >
            Unlock the depth of divine wisdom through science — where revelation
            inspires exploration, and knowledge strengthens faith. Each course
            is carefully designed for thinkers, seekers, and believers who wish
            to merge faith with factual understanding.
          </p>

        </motion.div>


        {/* ====================================================== */}
        {/*                  COURSE LIST                           */}
        {/* ====================================================== */}

        <div className="mt-16 flex flex-col gap-12">

          {courses.map((course, index) => (

            <motion.div
              key={course.number}

              initial={{
                opacity: 0,
                y: 50,
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
                delay: index * 0.15,
                ease: "easeOut",
              }}

              className="group"
            >

              {/* ================= COURSE CONTENT ================= */}

              <div
                className="
                  relative
                  border-l-[4px]
                  border-[#b99251]
                  pl-6
                  transition-all
                  duration-500
                  ease-out
                  group-hover:translate-x-2
                "
              >

                {/* ================= TITLE ================= */}

                <div className="flex flex-wrap items-center gap-3">

                  {/* NUMBER */}

                  <motion.div
                    whileHover={{
                      scale: 1.15,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-sm
                      bg-[#0799df]
                      text-sm
                      font-bold
                      text-white
                      transition-all
                      duration-300
                      group-hover:shadow-[0_0_15px_rgba(7,153,223,0.45)]
                    "
                  >
                    {course.number}
                  </motion.div>

                  {/* TITLE */}

                  <h2
                    className="
                      origin-left
                      text-xl
                      font-bold
                      tracking-wide
                      text-[#c39a5a]
                      transition-all
                      duration-500
                      ease-out
                      group-hover:scale-[1.025]
                      group-hover:text-[#d5ad6b]
                      md:text-2xl
                    "
                  >
                    {course.title}
                  </h2>

                </div>


                {/* ================= SUBTITLE ================= */}

                <p
                  className="
                    mt-3
                    font-serif
                    text-base
                    italic
                    text-white
                    transition-all
                    duration-500
                    group-hover:translate-x-1
                    md:text-lg
                  "
                >
                  {course.subtitle}
                </p>


                {/* ================= DESCRIPTION ================= */}

                <p
                  className="
                    mt-4
                    max-w-[1050px]
                    text-sm
                    leading-7
                    text-gray-300
                    transition-all
                    duration-500
                    group-hover:text-gray-200
                    md:text-[15px]
                  "
                >
                  {course.description}
                </p>


                {/* ================= INFO PILLS ================= */}

                <div className="mt-4 flex flex-wrap gap-5">

                  {/* DURATION */}

                  <div
                    className="
                      rounded-full
                      border
                      border-emerald-700/60
                      bg-emerald-950/30
                      px-4
                      py-1.5
                      text-xs
                      text-gray-300
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:border-emerald-500/70
                      group-hover:bg-emerald-900/40
                    "
                  >
                    {course.duration}
                  </div>


                  {/* LEVEL */}

                  <div
                    className="
                      rounded-full
                      border
                      border-[#80642e]
                      bg-[#5b4720]/10
                      px-4
                      py-1.5
                      text-xs
                      text-gray-300
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:border-[#b99251]
                      group-hover:bg-[#80642e]/20
                    "
                  >
                    {course.level}
                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>


        {/* ====================================================== */}
        {/*                    ENROLL BUTTON                        */}
        {/* ====================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-16 flex justify-center"
        >

<Link to="/contact">
  <motion.button
    whileHover={{
      scale: 1.07,
    }}
    whileTap={{
      scale: 0.97,
    }}
    transition={{
      duration: 0.3,
    }}
    className="
      rounded-full
      bg-[#0b936f]
      px-10
      py-4
      text-sm
      font-semibold
      text-white
      shadow-lg
      transition-all
      duration-300
      hover:bg-[#10a47d]
      hover:shadow-[0_0_30px_rgba(16,164,125,0.35)]
    "
  >
    Enroll Now & Begin Your Journey
  </motion.button>
</Link>

        </motion.div>

      </div>

    </section>
  );
};

export default ObligatoryScience;

