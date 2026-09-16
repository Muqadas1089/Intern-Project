
import React from "react";
import { motion } from "framer-motion";

import {
  FaChalkboardTeacher,
  FaClock,
  FaCalendarAlt,
  FaCheckCircle,
  FaSmile,
  FaShieldAlt,
  FaGift,
} from "react-icons/fa";

const FreeTrial = () => {
  /* =========================================================
     SCROLL ANIMATION
  ========================================================= */

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#b28a4a]
        via-[#17845d]
        to-[#1d2935]
        px-6
        py-20
        md:px-12
        md:py-24
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          absolute
          -left-24
          -top-24
          h-52
          w-52
          rounded-full
          bg-white/5
        "
      />

      <div
        className="
          absolute
          -right-24
          -bottom-28
          h-64
          w-64
          rounded-full
          bg-white/5
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===================================================
            HEADING
        =================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          className="mx-auto max-w-5xl text-center"
        >
          {/* OFFER BADGE */}

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="
              mx-auto
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#d7b14b]/60
              bg-[#d4a93d]/10
              px-5
              py-2.5
              text-sm
              font-medium
              text-[#e6bd4d]
            "
          >
            <FaGift className="text-xs" />
            Limited Time Offer
          </motion.div>

          {/* TITLE */}

          <h1
            className="
              mt-5
              font-serif
              text-5xl
              font-bold
              text-[#e5b93e]
              md:text-6xl
            "
          >
            3-Day Free Trial
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-4
              max-w-4xl
              text-base
              leading-7
              text-white/75
              md:text-lg
            "
          >
            Experience our premium Quran teaching style with zero obligation
            and discover why thousands choose us
          </p>
        </motion.div>

        {/* ===================================================
            CONTENT AREA
        =================================================== */}

        <div
          className="
            mt-14
            flex
            flex-col
            items-center
            justify-center
            gap-10
            lg:flex-row
            lg:items-start
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={fadeLeft}
            className="w-full max-w-[500px]"
          >

            {/* FEATURE 1 */}

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.015,
              }}
              className="
                flex
                items-start
                gap-6
                rounded-2xl
                bg-[#174d3d]/75
                p-5
                shadow-lg
                backdrop-blur-sm
              "
            >
              <div
                className="
                  flex
                  h-13
                  w-13
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#e6bb38]
                  text-lg
                  text-white
                  shadow-md
                "
              >
                <FaChalkboardTeacher />
              </div>

              <div>
                <h3
                  className="
                    text-base
                    font-bold
                    text-[#e8bb3c]
                  "
                >
                  Meet Your Teacher
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-white/75
                  "
                >
                  Get matched with a certified Quran teacher who understands
                  your learning goals
                </p>
              </div>
            </motion.div>

            {/* FEATURE 2 */}

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.015,
              }}
              className="
                mt-6
                flex
                items-start
                gap-6
                rounded-2xl
                bg-[#174d3d]/75
                p-5
                shadow-lg
                backdrop-blur-sm
              "
            >
              <div
                className="
                  flex
                  h-13
                  w-13
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#e6bb38]
                  text-lg
                  text-white
                  shadow-md
                "
              >
                <FaClock />
              </div>

              <div>
                <h3
                  className="
                    text-base
                    font-bold
                    text-[#e8bb3c]
                  "
                >
                  Flexible Timing
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-white/75
                  "
                >
                  Choose class times that perfectly fit your schedule and
                  lifestyle
                </p>
              </div>
            </motion.div>

            {/* FEATURE 3 */}

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.015,
              }}
              className="
                mt-6
                flex
                items-start
                gap-6
                rounded-2xl
                bg-[#174d3d]/75
                p-5
                shadow-lg
                backdrop-blur-sm
              "
            >
              <div
                className="
                  flex
                  h-13
                  w-13
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#e6bb38]
                  text-lg
                  text-white
                  shadow-md
                "
              >
                <FaCalendarAlt />
              </div>

              <div>
                <h3
                  className="
                    text-base
                    font-bold
                    text-[#e8bb3c]
                  "
                >
                  No Commitment
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-white/75
                  "
                >
                  Continue only if you're completely satisfied with the
                  teaching style
                </p>
              </div>
            </motion.div>

            {/* WHAT'S INCLUDED */}

            <motion.div
              whileHover={{
                y: -5,
              }}
              className="
                mt-6
                rounded-2xl
                bg-[#124e3d]/90
                p-6
                shadow-lg
              "
            >
              <h3
                className="
                  flex
                  items-center
                  gap-3
                  text-base
                  font-semibold
                  text-white
                "
              >
                <span className="text-[#e7b934]">✦</span>
                What's Included:
              </h3>

              <div className="mt-5 flex flex-col gap-3">

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    text-xs
                    text-white/80
                  "
                >
                  <FaCheckCircle className="text-[#e5b932]" />
                  30-minute personalized session
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    text-xs
                    text-white/80
                  "
                >
                  <FaCheckCircle className="text-[#e5b932]" />
                  Level assessment & learning plan
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    text-xs
                    text-white/80
                  "
                >
                  <FaCheckCircle className="text-[#e5b932]" />
                  Interactive teaching methods
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    text-xs
                    text-white/80
                  "
                >
                  <FaCheckCircle className="text-[#e5b932]" />
                  Q&A with teacher
                </div>

              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE — FREE TRIAL CARD
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={fadeRight}
            className="w-full max-w-[500px]"
          >

            <motion.div
              className="
                relative
                rounded-2xl
                border
                border-[#e1b52d]
                px-7
                pb-7
                pt-12
                shadow-xl
                backdrop-blur-sm
              "
            >

              {/* FREE TRIAL BADGE */}

              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#e5b82f]
                  px-7
                  py-2.5
                  text-sm
                  font-bold
                  text-[#17231d]
                  shadow-md
                "
              >
                FREE TRIAL
              </div>

              {/* SMILE ICON */}

              <motion.div
                whileHover={{
                  scale: 1.12,
                  rotate: 8,
                }}
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f0bd32]
                  text-3xl
                  text-[#17231d]
                  shadow-md
                "
              >
                <FaSmile />
              </motion.div>

              {/* TITLE */}

              <h2
                className="
                  mt-6
                  text-center
                  text-xl
                  font-bold
                  text-[#e8b935]
                "
              >
                Start Your Journey Today
              </h2>

              {/* REGULAR PRICE */}

              <div
                className="
                  mt-7
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/20
                  pb-5
                "
              >
                <span className="text-sm text-white">
                  Regular Price
                </span>

                <span
                  className="
                    text-sm
                    text-white/60
                    line-through
                  "
                >
                  $29/month
                </span>
              </div>

              {/* TRIAL PRICE */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/20
                  py-5
                "
              >
                <span className="text-sm text-white">
                  Trial Offer
                </span>

                <span
                  className="
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  FREE
                </span>
              </div>

              {/* SECURITY TEXT */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-xs
                  text-white/75
                "
              >
                <FaShieldAlt className="text-[#e5b72e]" />

                No credit card required · 100% Risk-Free
              </div>

              {/* DECORATIVE STAR */}

              <div
                className="
                  absolute
                  bottom-3
                  right-3
                  text-3xl
                  text-[#d6aa38]/30
                "
              >
                ★
              </div>

            </motion.div>
          </motion.div>
        </div>

        {/* ===================================================
            DIVIDER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mx-auto
            mt-12
            max-w-5xl
            border-t
            border-[#172d2a]/70
          "
        />

        {/* ===================================================
            SATISFACTION GUARANTEE
        =================================================== */}

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
            delay: 0.1,
          }}
          className="
            mx-auto
            mt-7
            flex
            w-fit
            items-center
            gap-5
            rounded-2xl
            border
            border-[#c8a43e]/60
            bg-white/5
            px-7
            py-4
            backdrop-blur-sm
          "
        >
          <FaShieldAlt
            className="
              text-lg
              text-[#e1b634]
            "
          />

          <div>
            <p
              className="
                text-center
                text-xs
                font-semibold
                text-[#e4b936]
              "
            >
              100% Satisfaction Guarantee
            </p>

            <p
              className="
                mt-1
                text-center
                text-[11px]
                text-white/70
              "
            >
              Love it or pay nothing · no questions asked
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FreeTrial;

