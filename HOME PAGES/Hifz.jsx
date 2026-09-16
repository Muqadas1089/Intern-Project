import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaCheckCircle,
  FaUserGraduate,
  FaGraduationCap,
  FaClock,
  FaBookOpen,
  FaCheck,
} from "react-icons/fa";

const image =
  "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=2000&q=80";

const Hifz = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          HIFZ HERO SECTION
      ===================================================== */}

      <section
        className="relative flex h-[645px] w-full items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >

        {/* GREEN + GOLD OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#087f5b]/90 via-[#315f48]/75 to-[#a57935]/75"></div>


        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 text-center">

          {/* TITLE */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            Quran Memorization (Hifz-ul-
            <br />
            Quran)
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
              delay: 0.15,
            }}
            className="mx-auto mt-6 max-w-4xl text-sm font-medium leading-8 text-white md:text-lg"
          >
            Our online Hifz Quran course is designed for students of all ages
            to memorize the Holy Quran efficiently and accurately. With
            one-on-one classes, certified teachers, and flexible schedules,
            we ensure a balanced approach to memorization and revision.
          </motion.p>


          {/* BUTTON */}

          <motion.div
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
              delay: 0.3,
            }}
            className="mt-9"
          >

            <button
              type="button"
              className="rounded-lg bg-white px-7 py-4 text-sm font-semibold text-[#087f5b] shadow-md transition-all duration-300 hover:bg-[#e7bd26] hover:text-white hover:shadow-lg md:text-base"
            >
              Start Your Hifz Journey
            </button>

          </motion.div>

        </div>
      </section>



      {/* =====================================================
          HIFZ FEATURES SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f4faf8] px-5 py-16 md:px-8 md:py-20">

        {/* BACKGROUND CIRCLES */}

        <div className="absolute right-8 top-0 h-36 w-36 rounded-full bg-[#087f5b]/10"></div>

        <div className="absolute bottom-0 left-12 h-28 w-28 rounded-full bg-[#d9ad16]/10"></div>


        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row">


          {/* =================================================
              LEFT IMAGE CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -45,
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
            }}
            className="relative h-[570px] w-full overflow-hidden rounded-2xl shadow-xl lg:w-[48%]"
          >

            {/* IMAGE */}

            <img
              src={image}
              alt="Quran Memorization"
              className="absolute inset-0 h-full w-full object-cover"
            />


            {/* DARK OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10"></div>


            {/* CONTENT */}

            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">

              {/* BADGE */}

              <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-2 backdrop-blur-sm">

                <FaCheckCircle className="text-sm text-white" />

                <span className="text-xs font-medium text-white md:text-sm">
                  Trusted by Students Worldwide
                </span>

              </div>


              {/* TITLE */}

              <motion.h2
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
                  duration: 0.7,
                }}
                className="text-4xl font-bold leading-tight text-white md:text-5xl"
              >
                Master Quran Memorization
                <br />

                with{" "}
                <span className="text-[#d9ad16]">
                  Expert Guidance
                </span>
              </motion.h2>


              {/* DESCRIPTION */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
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
                  delay: 0.1,
                }}
                className="mt-5 max-w-2xl text-sm leading-7 text-white md:text-base"
              >
                Our comprehensive Hifz program combines traditional teaching
                methods with modern technology to help you memorize the Quran
                effectively.
              </motion.p>

            </div>

          </motion.div>



          {/* =================================================
              RIGHT FEATURE CARDS
          ================================================= */}

          <div className="flex w-full flex-col lg:w-[52%]">

            <div className="flex flex-wrap gap-6">


              {/* =================================================
                  CARD 1
              ================================================= */}

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
                }}
                className="group w-full rounded-2xl border border-[#e4e9e7] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#087f5b] hover:shadow-lg sm:w-[calc(50%-12px)]"
              >

                <div className="flex items-start gap-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5f0e7] text-xl text-[#b88925] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#e7bd26] group-hover:text-white">
                    <FaUserGraduate />
                  </div>

                  <div>

                    <h3 className="text-lg font-bold leading-7 text-[#101828]">
                      Certified Huffaz & Teachers
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#475467]">
                      Learn from Ijaza-certified Quran instructors ensuring
                      authentic memorization and recitation.
                    </p>

                  </div>

                </div>

              </motion.div>



              {/* =================================================
                  CARD 2
              ================================================= */}

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
                  delay: 0.1,
                }}
                className="group w-full rounded-2xl border border-[#e4e9e7] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#087f5b] hover:shadow-lg sm:w-[calc(50%-12px)]"
              >

                <div className="flex items-start gap-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5f0e7] text-xl text-[#b88925] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#e7bd26] group-hover:text-white">
                    <FaGraduationCap />
                  </div>

                  <div>

                    <h3 className="text-lg font-bold leading-7 text-[#101828]">
                      Personalized Learning Plans
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#475467]">
                      Customized one-on-one sessions with tailored
                      memorization and revision strategies.
                    </p>

                  </div>

                </div>

              </motion.div>



              {/* =================================================
                  CARD 3
              ================================================= */}

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
                  delay: 0.15,
                }}
                className="group w-full rounded-2xl border border-[#e4e9e7] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#087f5b] hover:shadow-lg sm:w-[calc(50%-12px)]"
              >

                <div className="flex items-start gap-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5f0e7] text-xl text-[#b88925] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#e7bd26] group-hover:text-white">
                    <FaClock />
                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-[#101828]">
                      Flexible Scheduling
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#475467]">
                      24/7 availability across time zones, perfect for
                      students and professionals worldwide.
                    </p>

                  </div>

                </div>

              </motion.div>



              {/* =================================================
                  CARD 4
              ================================================= */}

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
                  delay: 0.2,
                }}
                className="group w-full rounded-2xl border border-[#e4e9e7] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#087f5b] hover:shadow-lg sm:w-[calc(50%-12px)]"
              >

                <div className="flex items-start gap-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5f0e7] text-xl text-[#b88925] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#e7bd26] group-hover:text-white">
                    <FaBookOpen />
                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-[#101828]">
                      Structured Curriculum
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#475467]">
                      Progressive memorization methodology focused on
                      long-term retention and fluency.
                    </p>

                  </div>

                </div>

              </motion.div>



              {/* =================================================
                  CARD 5
              ================================================= */}

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
                  delay: 0.25,
                }}
                className="group w-full rounded-2xl border border-[#e4e9e7] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#087f5b] hover:shadow-lg sm:w-[calc(50%-12px)]"
              >

                <div className="flex items-start gap-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5f0e7] text-xl text-[#b88925] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#e7bd26] group-hover:text-white">
                    <FaCheck />
                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-[#101828]">
                      Tajweed Excellence
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#475467]">
                      Master proper pronunciation and recitation rules
                      with expert guidance.
                    </p>

                  </div>

                </div>

              </motion.div>

            </div>



            {/* =================================================
                START FREE TRIAL
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
                duration: 0.7,
                delay: 0.3,
              }}
              className="mt-8"
            >

              <Link
                to="/contact"
                className="flex w-fit items-center justify-center rounded-xl bg-[#087f5b] px-9 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#d9ad16] hover:shadow-lg md:text-base"
              >
                Start Your Free Trial
              </Link>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
    HIFZ QURAN ONLINE COURSE SECTION
===================================================== */}

<section className="bg-white px-5 py-16 md:px-8 md:py-20">

  <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row">

    {/* =================================================
        LEFT CONTENT
    ================================================= */}

    <motion.div
      initial={{
        opacity: 0,
        x: -40,
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
      }}
      className="w-full lg:w-[52%]"
    >

      {/* TITLE */}

      <h2 className="text-4xl font-bold leading-tight text-[#087f5b] md:text-5xl">
        Hifz Quran Online Course
      </h2>

      {/* DESCRIPTION */}

      <p className="mt-5 text-sm leading-7 text-[#334155] md:text-base">
        The Hifz Quran online course enables students to memorize the entire
        Quran from the comfort of their homes. With the guidance of qualified
        Huffaz and proven memorization techniques, learners progress verse by
        verse until they reach full completion. Memorizing the Quran is an
        honor that elevates one’s rank in this life and the Hereafter.
      </p>


      {/* POINTS */}

      <div className="mt-7 space-y-5">

        <div className="flex items-start gap-4">

          <FaBookOpen className="mt-1 shrink-0 text-xl text-[#b88925]" />

          <p className="text-sm leading-6 text-[#334155] md:text-base">
            Structured and guided memorization program designed for steady progress.
          </p>

        </div>


        <div className="flex items-start gap-4">

          <FaUserGraduate className="mt-1 shrink-0 text-xl text-[#b88925]" />

          <p className="text-sm leading-6 text-[#334155] md:text-base">
            Learn and memorize from home through interactive online sessions.
          </p>

        </div>


        <div className="flex items-start gap-4">

          <FaGraduationCap className="mt-1 shrink-0 text-xl text-[#b88925]" />

          <p className="text-sm leading-6 text-[#334155] md:text-base">
            Qualified tutors with experience in online Quran teaching for all age groups.
          </p>

        </div>


        <div className="flex items-start gap-4">

          <FaCheckCircle className="mt-1 shrink-0 text-xl text-[#b88925]" />

          <p className="text-sm leading-6 text-[#334155] md:text-base">
            Personalized guidance that helps every student steadily achieve memorization excellence.
          </p>

        </div>

      </div>


      {/* QURAN VERSE BOX */}

      <div className="mt-8 rounded-lg border-l-4 border-[#087f5b] bg-[#e8f4f0] px-6 py-5">

        <p className="text-xl leading-8 text-[#087f5b] md:text-2xl">
          وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ
        </p>

        <p className="mt-2 text-sm italic leading-6 text-[#334155] md:text-base">
          “And We have certainly made the Qur’an easy for remembrance,
          so is there any who will remember?”
          <span className="font-medium"> (Qur’an 54:17)</span>
        </p>

      </div>

    </motion.div>


    {/* =================================================
        RIGHT IMAGE
    ================================================= */}

    <motion.div
      initial={{
        opacity: 0,
        x: 40,
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
      }}
      className="w-full lg:w-[48%]"
    >

      <div className="overflow-hidden rounded-2xl shadow-xl">

        <img
          src={image}
          alt="Hifz Quran Online Course"
          className="h-[430px] w-full object-cover"
        />

      </div>

    </motion.div>

  </div>

</section>

    </div>
  );
};

export default Hifz;