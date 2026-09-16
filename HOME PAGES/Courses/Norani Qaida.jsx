import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import lq1 from "../../src/assets/lq1.jpg";
import lq2 from "../../src/assets/lq2.jpg";
import lq3 from "../../src/assets/lq3.jpg";


const NoraniQaida = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-14 md:px-12 lg:px-20">

      {/* ================= MAIN CONTAINER ================= */}

      <div className="mx-auto max-w-[1350px]">

        {/* ================= HEADING ================= */}

        <motion.h1
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
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            text-center
            font-serif
            text-4xl
            font-bold
            text-[#B58A4A]
            md:text-5xl
            lg:text-[52px]
          "
        >
          Learn Norani Qaida
        </motion.h1>


        {/* ================= CONTENT ================= */}

        <div className="mt-16 flex flex-col items-center gap-12 lg:flex-row lg:items-start">

          {/* ================= LEFT IMAGE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              flex
              w-full
              justify-center
              lg:w-1/2
              lg:justify-start
            "
          >

            <div className="w-full max-w-[650px] overflow-hidden rounded-xl">

              <img
                src={lq1}
                alt="Norani Qaida"
                className="
                  h-[500px]
                  w-full
                  object-cover
                  shadow-sm
                  transition-transform
                  duration-500
                  ease-in-out
                  hover:scale-110
                "
              />

            </div>

          </motion.div>


          {/* ================= RIGHT CONTENT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-full lg:w-1/2"
          >

            {/* ================= INTRODUCTION ================= */}

            <div>

              <h2
                className="
                  font-serif
                  text-2xl
                  font-bold
                  text-[#075D47]
                  md:text-3xl
                "
              >
                Introduction
              </h2>

              <p
                className="
                  mt-4
                  font-serif
                  text-base
                  leading-8
                  text-[#172238]
                  md:text-lg
                "
              >
                The Norani Qaida Course is the foundation for anyone who
                wishes to learn how to read the Quran fluently. It introduces
                Arabic letters, pronunciation, and Tajweed rules in a simple,
                structured, and effective way – perfect for both children and
                adults starting their Quranic journey.
              </p>

            </div>


            {/* ================= WHY IMPORTANT ================= */}

            <div className="mt-8">

              <h2
                className="
                  font-serif
                  text-2xl
                  font-bold
                  text-[#075D47]
                  md:text-3xl
                "
              >
                Why It’s Important
              </h2>

              <p
                className="
                  mt-4
                  font-serif
                  text-base
                  leading-8
                  text-[#172238]
                  md:text-lg
                "
              >
                Learning Norani Qaida builds the base for correct Quran
                recitation. By mastering these basics, students can recognize
                every Arabic letter, understand its sound, and pronounce words
                accurately. This skill enhances fluency and brings confidence
                when reading the Quran.
              </p>

            </div>


            {/* ================= LEARN FROM ANYWHERE ================= */}

            <div className="mt-8">

              <h2
                className="
                  font-serif
                  text-2xl
                  font-bold
                  text-[#075D47]
                  md:text-3xl
                "
              >
                Learn From Anywhere
              </h2>

              <p
                className="
                  mt-4
                  font-serif
                  text-base
                  leading-8
                  text-[#172238]
                  md:text-lg
                "
              >
                Our certified tutors make learning flexible and personalized.
                Through online lessons on{" "}
                <span className="font-bold">Zoom</span> or{" "}
                <span className="font-bold">Skype</span>, students can join
                from any country and learn at their own pace. Our interactive
                classes make every class engaging and effective – no matter
                your age or background.
              </p>

            </div>


            {/* ================= BUTTONS ================= */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                justify-center
                gap-6
                lg:justify-end
              "
            >

              <Link to="/contact">

                <motion.button
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    rounded-xl
                    bg-[#B58A4A]
                    px-8
                    py-4
                    font-serif
                    text-base
                    font-bold
                    text-white
                    shadow-md
                    transition-all
                    duration-300
                    hover:bg-[#A77B3D]
                    hover:shadow-lg
                  "
                >
                  Start Learning Now
                </motion.button>

              </Link>


              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  rounded-xl
                  bg-[#075D47]
                  px-8
                  py-4
                  font-serif
                  text-base
                  font-bold
                  text-white
                  shadow-md
                  transition-all
                  duration-300
                  hover:bg-[#064D3B]
                  hover:shadow-lg
                "
              >
                Download Qaida
              </motion.button>

            </div>

          </motion.div>

        </div>


        {/* ========================================================= */}
        {/*                    INFORMATION CARDS                      */}
        {/* ========================================================= */}

        <div
          className="
            mt-20
            flex
            flex-col
            items-stretch
            justify-between
            gap-8
            lg:flex-row
          "
        >

          {/* ================================================= */}
          {/*                    CARD 1                         */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.75,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              w-full
              overflow-hidden
              rounded-tr-[60px]
              border
              border-[#B5E8D9]
              bg-white
              shadow-lg
              transition-shadow
              duration-500
              hover:shadow-2xl
              lg:w-[32%]
            "
          >

            {/* IMAGE */}

            <div className="overflow-hidden">

              <img
                src={lq2}
                alt="Quran Learning"
                className="
                  h-[255px]
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  ease-in-out
                  group-hover:scale-110
                "
              />

            </div>


            {/* CONTENT */}

            <div className="min-h-[180px] px-7 py-6">

              <h3
                className="
                  font-serif
                  text-[22px]
                  font-semibold
                  leading-tight
                  text-[#008060]
                "
              >
                You Can Get Your Own Teacher
              </h3>

              <p
                className="
                  mt-4
                  font-serif
                  text-[15px]
                  leading-7
                  text-[#B58A4A]
                "
              >
                Learn comfortably at home with your personal Quran tutor who
                will guide you step-by-step through every lesson with patience
                and care.
              </p>

            </div>

          </motion.div>


          {/* ================================================= */}
          {/*                    CARD 2                         */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.75,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              w-full
              overflow-hidden
              rounded-tr-[60px]
              border
              border-[#B5E8D9]
              bg-white
              shadow-lg
              transition-shadow
              duration-500
              hover:shadow-2xl
              lg:w-[32%]
            "
          >

            {/* IMAGE */}

            <div className="overflow-hidden">

              <img
                src={lq3}
                alt="Online Quran Class"
                className="
                  h-[255px]
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  ease-in-out
                  group-hover:scale-110
                "
              />

            </div>


            {/* CONTENT */}

            <div className="min-h-[180px] px-7 py-6">

              <h3
                className="
                  font-serif
                  text-[22px]
                  font-semibold
                  leading-tight
                  text-[#008060]
                "
              >
                How Long Are Classes?
              </h3>

              <p
                className="
                  mt-4
                  font-serif
                  text-[15px]
                  leading-7
                  text-[#B58A4A]
                "
              >
                Each class lasts between 20–30 minutes, designed to keep
                students focused and engaged without feeling overwhelmed.
                Duration can be adjusted to your schedule for maximum
                flexibility.
              </p>

            </div>

          </motion.div>


          {/* ================================================= */}
          {/*                    CARD 3                         */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.75,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              w-full
              overflow-hidden
              rounded-tr-[60px]
              border
              border-[#B5E8D9]
              bg-white
              shadow-lg
              transition-shadow
              duration-500
              hover:shadow-2xl
              lg:w-[32%]
            "
          >

            {/* IMAGE */}

            <div className="overflow-hidden">

              <img
                src={lq1}
                alt="Quran Learning Family"
                className="
                  h-[255px]
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  ease-in-out
                  group-hover:scale-110
                "
              />

            </div>


            {/* CONTENT */}

            <div className="min-h-[180px] px-7 py-6">

              <h3
                className="
                  font-serif
                  text-[22px]
                  font-semibold
                  leading-tight
                  text-[#008060]
                "
              >
                What Age Can I Start?
              </h3>

              <p
                className="
                  mt-4
                  font-serif
                  text-[15px]
                  leading-7
                  text-[#B58A4A]
                "
              >
                Children as young as 4 can begin! We also welcome beginners of
                all ages who wish to strengthen their Quran foundation in a
                supportive, peaceful environment.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default NoraniQaida;