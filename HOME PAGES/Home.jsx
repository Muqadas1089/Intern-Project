import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import home1 from "../src/assets/hom1.jpg";
import home2 from "../src/assets/hom2.jpg";
import home3 from "../src/assets/hom3.jpg";
import home4 from "../src/assets/hom4.jpg";
import home5 from "../src/assets/hom5.jpg";
import home6 from "../src/assets/hom6.jpg";
import home7 from "../src/assets/hom7.jpg";
import intro from "../src/assets/intro.mp4";

import {
  FaArrowRight,
  FaArrowLeft,
  FaBookOpen,
  FaClock,
  FaChalkboardTeacher,
  FaDesktop,
  FaHeadphones,
  FaStar,
  FaGlobe,
  FaUserGraduate,
  FaCalendarAlt,
  FaGraduationCap,
  FaShieldAlt,
  FaHeart,
  FaChartLine,
  FaChevronDown,
  FaChevronUp,
  FaSmile,
  FaArrowUp,
} from "react-icons/fa";




// =========================================================
// HERO SLIDER DATA
// =========================================================

const slides = [
  {
    title: "Online Noorani Qaida Course",
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    desc: "Start from the Arabic alphabet and master makharij with certified tutors.",
    bgImage: home1,
  },
  {
    title: "Hifz-ul-Quran Program",
    arabic: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ",
    desc: "Memorize the Holy Quran with proper Tajweed and expert guidance.",
    bgImage: home2,
  },
  {
    title: "Islamic Studies for Kids",
    arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    desc: "Learn basic duas, Islamic manners, and daily prayers in a fun way.",
    bgImage: home3,
  },
];


// =========================================================
// TESTIMONIAL DATA
// =========================================================

const testimonials = [
  {
    name: "Fatima Batool",
    role: "Student",
    course: "Advanced Tajweed",
    image: home7,
    text:
      "Learning the Quran online is so convenient! The teachers are patient and supportive, especially with Tajweed rules. The flexible scheduling allows me to balance my studies and work. Highly recommended for busy learners.",
  },
  {
    name: "Ayesha Khan",
    role: "Parent",
    course: "Quran Reading",
    image: home7,
    text:
      "The lessons are simple, friendly, and easy to follow. My child enjoys learning Quran and has become much more confident in reading.",
  },
  {
    name: "Ahmed Raza",
    role: "Student",
    course: "Quran Memorization",
    image: home7,
    text:
      "The teachers give personal attention and make every lesson easy to understand. Regular revision has helped me stay consistent with my learning.",
  },
  {
    name: "Maryam Ali",
    role: "Student",
    course: "Norani Qaida",
    image: home7,
    text:
      "I started from the basics and gradually learned how to read the Quran correctly. The online classes are comfortable and well organized.",
  },
  {
    name: "Usman Tariq",
    role: "Parent",
    course: "Tajweed Course",
    image: home7,
    text:
      "The teachers are supportive and explain pronunciation clearly. The flexible class timings make Quran learning easier for our family.",
  },
];


// =========================================================
// ANIMATED NUMBER
// =========================================================

function AnimatedNumber({ value }) {
  const [display, setDisplay] = useState("0");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    const match = value.match(/^([\d.]+)(.*)$/);

    if (!match) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2];

    let startTime;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / 1400, 1);

      const ease = 1 - Math.pow(1 - progress, 3);

      const current = target * ease;

      let formatted;

      if (target >= 1000000) {
        formatted = (current / 1000000).toFixed(1) + "M";
      } else if (target >= 1000) {
        formatted = Math.round(current / 1000) + "K";
      } else {
        formatted = Math.round(current);
      }

      setDisplay(formatted + suffix);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, value]);

  return (
    <motion.h3
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true }}
      className="mt-3 text-[34px] font-bold text-[#263449]"
    >
      {display}
    </motion.h3>
  );
}


// =========================================================
// HOME COMPONENT
// =========================================================

export default function Home() {

  const [openFaq, setOpenFaq] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedGuide, setSelectedGuide] = useState(null);


const [showReviewModal, setShowReviewModal] = useState(false);
const [reviewRating, setReviewRating] = useState(0);
const [reviewName, setReviewName] = useState("");
const [reviewText, setReviewText] = useState("");


  // =========================================================
  // FAQ FUNCTION
  // =========================================================

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };


  // =========================================================
  // HERO AUTO SLIDER
  // =========================================================

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);


  // =========================================================
  // TESTIMONIAL AUTO SLIDER
  // =========================================================

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);


  return (

    <div className="w-full overflow-hidden font-sans">

 {/* =========================================================
    1. HERO SECTION
========================================================= */}

<section className="relative h-screen overflow-hidden bg-slate-950">

  {/* BACKGROUND IMAGE */}

  <div
    className="absolute inset-0 bg-cover bg-center transition-all duration-700"
    style={{
      backgroundImage: `url(${slides[currentIndex].bgImage})`,
    }}
  ></div>


  {/* DARK GREEN OVERLAY */}

  <div className="absolute inset-0 bg-emerald-950/55"></div>


  {/* HERO CONTENT */}

  <div className="relative z-10 flex h-full items-center justify-center px-5">

    <motion.div
      key={currentIndex}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mx-auto max-w-[900px] text-center text-white"
    >

      {/* SMALL TITLE */}

      <p className="mb-5 text-sm font-semibold tracking-[4px] text-[#d8ad38]">
        ONLINE QURAN ACADEMY
      </p>


      {/* MAIN TITLE */}

      <h1 className="text-4xl font-bold leading-tight md:text-6xl">
        {slides[currentIndex].title}
      </h1>


      {/* ARABIC */}

      <p className="mt-6 text-2xl leading-relaxed text-[#f4d27a] md:text-4xl">
        {slides[currentIndex].arabic}
      </p>


      {/* DESCRIPTION */}

      <p className="mx-auto mt-6 max-w-[700px] text-sm leading-7 text-white/90 md:text-lg">
        {slides[currentIndex].desc}
      </p>


      {/* BUTTONS */}

      <div className="mt-9 flex flex-wrap justify-center gap-4">

        <Link
          to="/services"
          className="
            inline-flex
            items-center
            gap-3
            rounded-lg
            bg-[#07805d]
            px-7
            py-3.5
            text-sm
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#d3a72a]
          "
        >
          Explore Our Courses
          <FaArrowRight />
        </Link>


        <Link
          to="/FreeTrial"
          className="
            inline-flex
            items-center
            gap-3
            rounded-lg
            border
            border-[#d9ad39]
            bg-transparent
            px-7
            py-3.5
            text-sm
            font-semibold
            text-[#f4cf72]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#d3a72a]
            hover:text-white
          "
        >
          Free Trial Class
          <FaGraduationCap />
        </Link>

      </div>

    </motion.div>

  </div>


  {/* DOTS */}

  <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">

    {slides.map((slide, index) => (
      <button
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`
          h-2.5
          rounded-full
          transition-all
          duration-300
          ${
            currentIndex === index
              ? "w-8 bg-[#d9ad38]"
              : "w-2.5 bg-white/50"
          }
        `}
      ></button>
    ))}

  </div>

</section>


{/* =========================================================
    2. BEGIN YOUR QURANIC JOURNEY
========================================================= */}

<section className="bg-[#f8f5e8] px-5 py-20 md:py-24">

  <div className="mx-auto max-w-[1170px]">

    {/* ================= HEADING ================= */}

    <motion.div
      initial={{ opacity: 0, y: 85 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.08 }}
      className="text-center"
    >

      <h2 className="text-[38px] font-bold leading-tight text-[#07805d] md:text-[52px]">
        Begin Your{" "}
        <span className="text-[#d3a72a]">
          Quranic Journey
        </span>
      </h2>


      <div className="mx-auto mt-5 flex justify-center">

        <span className="h-[6px] w-[90px] rounded-full bg-[#eadfae]"></span>

      </div>


      <p className="mt-5 text-[16px] text-[#46546a] md:text-[18px]">
        Just 3 Simple Steps to Get Started
      </p>

    </motion.div>


    {/* ================= INTRO CARD ================= */}

    <motion.div
      initial={{ opacity: 0, y: 85 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.08 }}
      className="
        mx-auto
        mt-10
        max-w-[730px]
        rounded-2xl
        border
        border-[#e6dfc8]
        bg-white
        px-6
        py-6
        text-center
        shadow-[0_6px_15px_rgba(0,0,0,0.06)]
      "
    >

      <p className="text-[14px] leading-7 text-[#46546a] md:text-[15px]">
        At Quran Learn Academy, we make Quran learning simple,
        flexible, and accessible for everyone. Start your journey
        with experienced teachers and personalized online classes.
      </p>

    </motion.div>


    {/* ================= MAIN CONTENT ================= */}

    <div className="mt-14 flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-[65px]">


      {/* ================= LEFT SIDE ================= */}

      <div className="relative w-full lg:w-[50%]">

        {/* VERTICAL LINE */}

        <div
          className="
            absolute
            left-[29px]
            top-8
            hidden
            h-[390px]
            w-[2px]
            bg-[#d8cfae]
            md:block
          "
        ></div>


        {/* ================= STEP 1 ================= */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.35 }}
          className="
            group
            relative
            mb-6
            flex
            items-start
            gap-5
            rounded-2xl
            border-l-4
            border-[#d3a72a]
            bg-white
            p-5
            shadow-[0_6px_15px_rgba(0,0,0,0.07)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_10px_22px_rgba(0,0,0,0.10)]
          "
        >

          {/* ICON */}

          <div
            className="
              relative
              z-10
              flex
              h-[60px]
              w-[60px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#e7f4ef]
              text-[#07805d]
              transition-all
              duration-300
              group-hover:bg-[#07805d]
              group-hover:text-white
            "
          >
            <FaUserGraduate className="text-xl" />

            <span
              className="
                absolute
                -right-1
                -top-1
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-[#d3a72a]
                text-[11px]
                font-bold
                text-white
              "
            >
              1
            </span>

          </div>


          {/* CONTENT */}

          <div className="flex-1">

            <h3 className="text-[17px] font-bold text-[#101a2b]">
              Complete Your{" "}
              <span className="text-[#07805d]">
                Online Registration
              </span>
            </h3>

            <p className="mt-2 text-[13px] leading-6 text-[#46546a]">
              Fill out our simple registration form and provide
              the necessary information to begin your Quran
              learning journey.
            </p>

          </div>

          <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#d3a72a] transition-all duration-300 group-hover:w-full"></span>

        </motion.div>


        {/* ================= STEP 2 ================= */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.35 }}
          className="
            group
            relative
            mb-6
            flex
            items-start
            gap-5
            rounded-2xl
            border-l-4
            border-[#d3a72a]
            bg-white
            p-5
            shadow-[0_6px_15px_rgba(0,0,0,0.07)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_10px_22px_rgba(0,0,0,0.10)]
          "
        >

          {/* ICON */}

          <div
            className="
              relative
              z-10
              flex
              h-[60px]
              w-[60px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#e7f4ef]
              text-[#07805d]
              transition-all
              duration-300
              group-hover:bg-[#07805d]
              group-hover:text-white
            "
          >
            <FaCalendarAlt className="text-xl" />

            <span
              className="
                absolute
                -right-1
                -top-1
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-[#d3a72a]
                text-[11px]
                font-bold
                text-white
              "
            >
              2
            </span>

          </div>


          {/* CONTENT */}

          <div className="flex-1">

            <h3 className="text-[17px] font-bold text-[#101a2b]">
              Schedule Your{" "}
              <span className="text-[#07805d]">
                Free Trial Class
              </span>
            </h3>

            <p className="mt-2 text-[13px] leading-6 text-[#46546a]">
              Choose a convenient time for your free trial
              class and experience our personalized teaching
              approach.
            </p>

          </div>

          <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#d3a72a] transition-all duration-300 group-hover:w-full"></span>

        </motion.div>


        {/* ================= STEP 3 ================= */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.35 }}
          className="
            group
            relative
            flex
            items-start
            gap-5
            rounded-2xl
            border-l-4
            border-[#d3a72a]
            bg-white
            p-5
            shadow-[0_6px_15px_rgba(0,0,0,0.07)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_10px_22px_rgba(0,0,0,0.10)]
          "
        >

          {/* ICON */}

          <div
            className="
              relative
              z-10
              flex
              h-[60px]
              w-[60px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#e7f4ef]
              text-[#07805d]
              transition-all
              duration-300
              group-hover:bg-[#07805d]
              group-hover:text-white
            "
          >
            <FaGraduationCap className="text-xl" />

            <span
              className="
                absolute
                -right-1
                -top-1
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-[#d3a72a]
                text-[11px]
                font-bold
                text-white
              "
            >
              3
            </span>

          </div>


          {/* CONTENT */}

          <div className="flex-1">

            <h3 className="text-[17px] font-bold text-[#101a2b]">
              Begin Your{" "}
              <span className="text-[#07805d]">
                Learning Journey
              </span>
            </h3>

            <p className="mt-2 text-[13px] leading-6 text-[#46546a]">
              Start your regular online Quran classes and
              learn at your own pace with expert guidance.
            </p>

          </div>

          <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#d3a72a] transition-all duration-300 group-hover:w-full"></span>

        </motion.div>


        {/* REGISTRATION BUTTON */}

        <div className="mt-7">

          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-[#07805d]
              px-6
              py-3
              text-[13px]
              font-medium
              text-white
              shadow-[0_6px_14px_rgba(7,128,93,0.20)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#d3a72a]
            "
          >
            Begin Your Registration Now
            <FaArrowRight />
          </Link>

        </div>

      </div>


      {/* ================= RIGHT VIDEO ================= */}

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.35 }}
        className="group w-full lg:w-[50%]"
      >

        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-[#dfd5b7]
            bg-white
            p-2
            shadow-[0_12px_25px_rgba(0,0,0,0.12)]
          "
        >

          <video
            className="
              aspect-video
              w-full
              rounded-xl
              object-cover
              transition-transform
              duration-700
              group-hover:scale-[1.02]
            "
            autoPlay
            muted
            loop
            controls
            playsInline
            poster="/quran-teacher.jpg"
          >
            <source src={intro} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </div>

      </motion.div>

    </div>

  </div>

</section>

{/* =========================================================
    3. OUR KEY FEATURES
========================================================= */}

<section
  className="
    relative
    overflow-hidden
    bg-cover
    bg-center
    px-5
    py-20
    md:py-24
  "
  style={{
    backgroundImage: `url(${home4})`,
  }}
>

  {/* TRANSPARENT GREEN OVERLAY */}

  <div className="absolute inset-0 bg-[#075c4e]/75"></div>


  {/* CONTENT */}

  <div className="relative z-10 mx-auto max-w-[1120px]">

    {/* ================= HEADING ================= */}

    <motion.div
      initial={{ opacity: 0, y: 85 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.08 }}
      className="text-center"
    >

      <div
        className="
          mx-auto
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-white/20
          bg-white/10
          px-4
          py-2
          text-[12px]
          font-medium
          text-[#f2c94c]
          backdrop-blur-sm
        "
      >
        <FaStar />
        WHY CHOOSE US
      </div>


      <h2
        className="
          mt-6
          text-[39px]
          font-bold
          leading-tight
          text-white
          md:text-[54px]
        "
      >
        Our{" "}
        <span className="text-[#d9aa25]">
          Key Features
        </span>
      </h2>


      <div className="mx-auto mt-5 flex justify-center">

        <span
          className="
            h-[4px]
            w-[88px]
            rounded-full
            bg-[#d5aa28]
          "
        ></span>

      </div>

    </motion.div>


    {/* ================= MAIN CONTENT ================= */}

    <div
      className="
        mt-14
        flex
        flex-col
        items-center
        gap-12
        lg:flex-row
        lg:items-center
      "
    >

      {/* ================= CENTER CIRCLE ================= */}

      <motion.div
        initial={{ opacity: 0, scale: 0.82 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.03 }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="
          relative
          flex
          h-[310px]
          w-[310px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border-[5px]
          border-[#d7ad28]
          bg-[#075c4e]/65
          shadow-[0_12px_30px_rgba(0,0,0,0.18)]
          backdrop-blur-sm
        "
      >

        {/* DECORATIVE DOTS */}

        <span className="absolute left-1/2 top-[36px] h-3 w-3 -translate-x-1/2 rounded-full bg-[#d7ad28]"></span>

        <span className="absolute left-[38px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#d7ad28]"></span>

        <span className="absolute right-[38px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#d7ad28]"></span>

        <span className="absolute bottom-[36px] left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#d7ad28]"></span>

        {/* CIRCLE TEXT */}

        <div className="text-center">
          <h3 className="text-[27px] font-bold leading-tight text-white">
            KEY
            <br />
            FEATURES
          </h3>
        </div>

      </motion.div>


      {/* ================= FEATURE CARDS ================= */}

      <div className="flex w-full flex-wrap gap-5">

        {/* CARD 1 */}

        <motion.div
          initial={{ opacity: 0, y: 85 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.08 }}
          className="
            group
            relative
            flex
            h-[112px]
            w-full
            items-center
            gap-5
            overflow-hidden
            rounded-[16px]
            border
            border-white/25
            bg-white/10
            px-6
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-white/15
            lg:w-[calc(50%-10px)]
          "
        >

          <div
            className="
              flex
              h-[60px]
              w-[60px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#07805d]
              text-white
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:bg-[#d7ad28]
            "
          >
            <FaBookOpen className="text-[23px]" />
          </div>

          <h3 className="text-[16px] font-semibold text-white">
            One-on-One Quran Classes
          </h3>

          <span
            className="
              absolute
              bottom-0
              left-0
              h-[3px]
              w-0
              bg-[#d7ad28]
              transition-all
              duration-300
              group-hover:w-full
            "
          ></span>

        </motion.div>


        {/* CARD 2 */}

        <motion.div
          initial={{ opacity: 0, y: 85 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.08 }}
          className="
            group
            relative
            flex
            h-[112px]
            w-full
            items-center
            gap-5
            overflow-hidden
            rounded-[16px]
            border
            border-white/25
            bg-white/10
            px-6
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-white/15
            lg:w-[calc(50%-10px)]
          "
        >

          <div
            className="
              flex
              h-[60px]
              w-[60px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#07805d]
              text-white
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:bg-[#d7ad28]
            "
          >
            <FaChalkboardTeacher className="text-[23px]" />
          </div>

          <h3 className="text-[16px] font-semibold text-white">
            Qualified Male & Female Tutors
          </h3>

          <span
            className="
              absolute
              bottom-0
              left-0
              h-[3px]
              w-0
              bg-[#d7ad28]
              transition-all
              duration-300
              group-hover:w-full
            "
          ></span>

        </motion.div>


        {/* CARD 3 */}

        <motion.div
          initial={{ opacity: 0, y: 85 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.08 }}
          className="
            group
            relative
            flex
            h-[112px]
            w-full
            items-center
            gap-5
            overflow-hidden
            rounded-[16px]
            border
            border-white/25
            bg-white/10
            px-6
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-white/15
            lg:w-[calc(50%-10px)]
          "
        >

          <div
            className="
              flex
              h-[60px]
              w-[60px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#07805d]
              text-white
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:bg-[#d7ad28]
            "
          >
            <FaClock className="text-[23px]" />
          </div>

          <h3 className="text-[16px] font-semibold text-white">
            Flexible Timings & Time Zones
          </h3>

          <span
            className="
              absolute
              bottom-0
              left-0
              h-[3px]
              w-0
              bg-[#d7ad28]
              transition-all
              duration-300
              group-hover:w-full
            "
          ></span>

        </motion.div>


        {/* CARD 4 */}

        <motion.div
          initial={{ opacity: 0, y: 85 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.08 }}
          className="
            group
            relative
            flex
            h-[112px]
            w-full
            items-center
            gap-5
            overflow-hidden
            rounded-[16px]
            border
            border-white/25
            bg-white/10
            px-6
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-white/15
            lg:w-[calc(50%-10px)]
          "
        >

          <div
            className="
              flex
              h-[60px]
              w-[60px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#07805d]
              text-white
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:bg-[#d7ad28]
            "
          >
            <FaDesktop className="text-[23px]" />
          </div>

          <h3 className="text-[16px] font-semibold text-white">
            Interactive Online Learning
          </h3>

          <span
            className="
              absolute
              bottom-0
              left-0
              h-[3px]
              w-0
              bg-[#d7ad28]
              transition-all
              duration-300
              group-hover:w-full
            "
          ></span>

        </motion.div>


        {/* CARD 5 */}

        <motion.div
          initial={{ opacity: 0, y: 85 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.08 }}
          className="
            group
            relative
            flex
            h-[112px]
            w-full
            items-center
            gap-5
            overflow-hidden
            rounded-[16px]
            border
            border-white/25
            bg-white/10
            px-6
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-white/15
            lg:w-[calc(50%-10px)]
          "
        >

          <div
            className="
              flex
              h-[60px]
              w-[60px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#07805d]
              text-white
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:bg-[#d7ad28]
            "
          >
            <FaHeadphones className="text-[23px]" />
          </div>

          <h3 className="text-[16px] font-semibold text-white">
            Free Trial Classes Available
          </h3>

          <span
            className="
              absolute
              bottom-0
              left-0
              h-[3px]
              w-0
              bg-[#d7ad28]
              transition-all
              duration-300
              group-hover:w-full
            "
          ></span>

        </motion.div>


        {/* CARD 6 */}

        <motion.div
          initial={{ opacity: 0, y: 85 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.08 }}
          className="
            group
            relative
            flex
            h-[112px]
            w-full
            items-center
            gap-5
            overflow-hidden
            rounded-[16px]
            border
            border-white/25
            bg-white/10
            px-6
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-white/15
            lg:w-[calc(50%-10px)]
          "
        >

          <div
            className="
              flex
              h-[60px]
              w-[60px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#07805d]
              text-white
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:bg-[#d7ad28]
            "
          >
            <FaStar className="text-[23px]" />
          </div>

          <h3 className="text-[16px] font-semibold text-white">
            Monthly Progress Reports
          </h3>

          <span
            className="
              absolute
              bottom-0
              left-0
              h-[3px]
              w-0
              bg-[#d7ad28]
              transition-all
              duration-300
              group-hover:w-full
            "
          ></span>

        </motion.div>

      </div>

    </div>


    {/* ================= BOTTOM TEXT ================= */}

    <motion.p
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.08 }}
      className="
        mx-auto
        mt-12
        max-w-[650px]
        text-center
        text-[15px]
        leading-7
        text-white/90
      "
    >
      Experience the difference with our comprehensive Quran
      learning platform
    </motion.p>


    {/* ================= BUTTON ================= */}

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.08 }}
      className="mt-7 flex justify-center"
    >

      <Link
        to="/services"
        className="
          inline-flex
          items-center
          gap-3
          rounded-lg
          bg-[#d7ad28]
          px-7
          py-3.5
          text-[13px]
          font-semibold
          text-white
          shadow-[0_8px_18px_rgba(0,0,0,0.18)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-white
          hover:text-[#07805d]
        "
      >
        Start Learning Today
        <FaArrowRight />
      </Link>

    </motion.div>

  </div>

</section>


{/* =====================================================
    OUR CORE VALUES
===================================================== */}

<section className="relative overflow-hidden bg-[#f7f3e5] px-5 py-20 md:py-24">

  {/* Background Decorations */}
  <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#d3a72a]/5"></div>

  <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#075c4e]/5"></div>


  <div className="relative z-10 mx-auto max-w-[1120px]">

    <div className="flex flex-col items-center gap-12 lg:flex-row">


      {/* =================================================
          LEFT SIDE - CONTENT
      ================================================= */}

      <motion.div
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.08 }}
        className="w-full lg:w-[52%]"
      >

        {/* Small Heading */}
        <p className="text-sm font-bold uppercase tracking-[3px] text-[#a37b3f]">
          OUR FOUNDATION
        </p>


        {/* Main Heading */}
        <h2 className="mt-2 text-[38px] font-bold leading-tight md:text-[46px]">

          <span className="text-[#a37b3f]">
            Our
          </span>{" "}

          <span className="text-[#075c4e]">
            Core Values
          </span>

        </h2>


        {/* Heading Lines */}
        <div className="mt-5 flex gap-2">

          <span className="h-[4px] w-[65px] rounded-full bg-[#d3a72a]"></span>

          <span className="h-[4px] w-[28px] rounded-full bg-[#075c4e]"></span>

        </div>


        {/* Description */}
        <p className="mt-6 max-w-[600px] text-[16px] leading-7 text-gray-600">

          The foundation of our Quranic journey - guiding every lesson
          with purpose and devotion.

        </p>


        {/* =================================================
            VALUE CARDS
        ================================================= */}

        <div className="mt-8 flex flex-col gap-4">


          {/* ================= FAITH & INTEGRITY ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.08 }}
            className="group flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
          >

            {/* Icon */}
            <div className="relative flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-xl bg-[#075c4e]/15">

              <FaShieldAlt className="text-[25px] text-[#075c4e]" />

              {/* Star Badge */}
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#d3a72a] text-[11px] text-white shadow-md">
                <FaStar />
              </span>

            </div>


            {/* Content */}
            <div>

              <h3 className="text-[18px] font-bold text-[#263449]">
                Faith & Integrity
              </h3>

              <p className="mt-1 text-[14px] leading-6 text-gray-500">
                Teaching Quran with sincerity, honesty, and strong Islamic values.
              </p>

            </div>

          </motion.div>


          {/* ================= TRUST & RESPECT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.08 }}
            className="group flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
          >

            {/* Icon */}
            <div className="relative flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-xl bg-[#075c4e]/15">

              <FaHeart className="text-[25px] text-[#075c4e]" />

              {/* Star Badge */}
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#d3a72a] text-[11px] text-white shadow-md">
                <FaStar />
              </span>

            </div>


            {/* Content */}
            <div>

              <h3 className="text-[18px] font-bold text-[#263449]">
                Trust & Respect
              </h3>

              <p className="mt-1 text-[14px] leading-6 text-gray-500">
                Building meaningful relationships with students and their families.
              </p>

            </div>

          </motion.div>


          {/* ================= EXCELLENCE IN TEACHING ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.08 }}
            className="group flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
          >

            {/* Icon */}
            <div className="relative flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-xl bg-[#075c4e]/15">

              <FaBookOpen className="text-[25px] text-[#075c4e]" />

              {/* Star Badge */}
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#d3a72a] text-[11px] text-white shadow-md">
                <FaStar />
              </span>

            </div>


            {/* Content */}
            <div>

              <h3 className="text-[18px] font-bold text-[#263449]">
                Excellence in Teaching
              </h3>

              <p className="mt-1 text-[14px] leading-6 text-gray-500">
                Providing quality Quran education through experienced and caring tutors.
              </p>

            </div>

          </motion.div>


          {/* =================================================
              TESTIMONIAL
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.08 }}
            className="mt-2 rounded-2xl border-l-4 border-[#d3a72a] bg-white/70 p-5"
          >

            <p className="text-[15px] italic leading-7 text-gray-600">
              "Quran Learn Academy embodies these values in every lesson,
              creating a truly authentic Islamic learning environment."
            </p>

            <p className="mt-3 text-[13px] font-bold text-[#075c4e]">
              Parent Testimonial
            </p>

          </motion.div>

        </div>

      </motion.div>


      {/* =================================================
          RIGHT SIDE - IMAGE WITH 2 LAYERS
      ================================================= */}

      <motion.div
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.08 }}
        className="group relative w-full lg:w-[48%]"
      >

        {/* OUTER SQUARE */}
        <div
          className="
            absolute
            -inset-6
            rounded-[32px]
            bg-[#075c4e]/[0.07]
            rotate-6
            transition-transform
            duration-700
            ease-out
            group-hover:rotate-0
          "
        ></div>


        {/* INNER SQUARE */}
        <div
          className="
            absolute
            -inset-3
            rounded-[30px]
            bg-[#b28a4a]/[0.08]
            rotate-0
            transition-transform
            duration-700
            ease-out
            group-hover:rotate-0
          "
        ></div>


        {/* MAIN IMAGE */}
        <div className="relative z-10 overflow-hidden rounded-3xl">

          <img
            src={home5}
            alt="Authentic Islamic Education"
            className="h-[430px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />


          {/* Image Overlay */}
          <div className="absolute inset-0 bg-[#075c4e]/15"></div>


          {/* Bottom Text */}
          <div className="absolute inset-x-0 bottom-0 p-7">

            <div className="rounded-2xl bg-[#075c4e]/75 p-5 backdrop-blur-sm">

              <p className="text-[20px] font-bold text-white">
                Authentic Islamic Education
              </p>

              <p className="mt-2 text-[13px] text-white/80">
                Teaching with devotion since 2010
              </p>

            </div>

          </div>

        </div>

      </motion.div>

    </div>

  </div>

</section>


{/* =========================================================
    OUR PROGRESS
========================================================= */}

<section
  className="
    bg-[#f7f8f9]
    px-5
    py-20
    md:py-24
  "
>
  <div className="mx-auto max-w-[1120px]">

    {/* HEADING */}

    <motion.div
      initial={{ opacity: 0, y: 85 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.08 }}
      className="text-center"
    >

      <h2
        className="
          text-[34px]
          font-bold
          md:text-[42px]
        "
      >
        <span className="text-[#111827]">
          Our{" "}
        </span>

        <span className="text-[#07805d]">
          Progress
        </span>
      </h2>


      {/* GOLD LINE */}

      <div className="mx-auto mt-4 flex justify-center">
        <span className="h-[4px] w-[70px] rounded-full bg-[#d3a72a]"></span>
      </div>


      {/* QURAN QUOTE */}

      <p
        className="
          mx-auto
          mt-6
          max-w-[750px]
          font-serif
          text-[18px]
          italic
          leading-7
          text-[#d3a72a]
          md:text-[20px]
        "
      >
        "And that there is not for man except that [good] for which he strives."
      </p>


      {/* SURAH */}

      <p
        className="
          mt-2
          text-[13px]
          font-medium
          text-[#07805d]
        "
      >
        (Surah An-Najm 53:39)
      </p>

    </motion.div>


    {/* DESCRIPTION */}

    <motion.div
      initial={{ opacity: 0, y: 85 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.08 }}
      className="
        mx-auto
        mt-8
        max-w-[850px]
        rounded-2xl
        bg-white
        px-6
        py-6
        text-center
        shadow-[0_6px_18px_rgba(0,0,0,0.06)]
      "
    >

      <p
        className="
          text-[13px]
          leading-6
          text-[#46546a]
          md:text-[14px]
        "
      >
        TOJO GLOBAL connects your business directly to your target audience,
        eliminating the need to search for clients. With us, they'll find
        their way to you.
      </p>

    </motion.div>


    {/* =====================================================
        PROGRESS CARDS
    ===================================================== */}

    <div
      className="
        mt-10
        flex
        flex-wrap
        justify-center
        gap-5
      "
    >

      {/* =================================================
          CARD 1
      ================================================= */}

      <motion.div
        initial={{ opacity: 0, y: 85 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.08 }}
        className="
          group
          relative
          min-h-[154px]
          w-full
          overflow-hidden
          rounded-2xl
          bg-white
          px-6
          pt-6
          pb-8
          text-center
          shadow-[0_6px_18px_rgba(0,0,0,0.07)]
          transition-shadow
          duration-300
          hover:shadow-[0_12px_25px_rgba(0,0,0,0.13)]
          sm:w-[180px]
        "
      >

        <div
          className="
            absolute
            left-0
            top-0
            h-[4px]
            w-full
            bg-gradient-to-r
            from-[#07805d]
            to-[#d3a72a]
          "
        ></div>


        {/* ICON */}

        <div
          className="
            mx-auto
            flex
            h-[42px]
            w-[42px]
            items-center
            justify-center
            rounded-full
            bg-[#07805d]/10
            text-[#07805d]
            transition-transform
            duration-300
            group-hover:scale-125
          "
        >
          <FaCalendarAlt className="text-[19px]" />
        </div>


        <AnimatedNumber value="12+" />


        <p
          className="
            mt-2
            text-[12px]
            font-medium
            text-[#46546a]
          "
        >
          Years of Experience
        </p>

      </motion.div>


      {/* =================================================
          CARD 2
      ================================================= */}

      <motion.div
        initial={{ opacity: 0, y: 85 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.08 }}
        className="
          group
          relative
          min-h-[154px]
          w-full
          overflow-hidden
          rounded-2xl
          bg-white
          px-6
          pt-6
          pb-8
          text-center
          shadow-[0_6px_18px_rgba(0,0,0,0.07)]
          transition-shadow
          duration-300
          hover:shadow-[0_12px_25px_rgba(0,0,0,0.13)]
          sm:w-[180px]
        "
      >

        <div
          className="
            absolute
            left-0
            top-0
            h-[4px]
            w-full
            bg-gradient-to-r
            from-[#07805d]
            to-[#d3a72a]
          "
        ></div>


        {/* ICON */}

        <div
          className="
            mx-auto
            flex
            h-[42px]
            w-[42px]
            items-center
            justify-center
            rounded-full
            bg-[#07805d]/10
            text-[#07805d]
            transition-transform
            duration-300
            group-hover:scale-125
          "
        >
          <FaSmile className="text-[20px]" />
        </div>


        <AnimatedNumber value="50+" />


        <p
          className="
            mt-2
            text-[12px]
            font-medium
            text-[#46546a]
          "
        >
          Satisfied Clients
        </p>

      </motion.div>


      {/* =================================================
          CARD 3
      ================================================= */}

      <motion.div
        initial={{ opacity: 0, y: 85 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.08 }}
        className="
          group
          relative
          min-h-[154px]
          w-full
          overflow-hidden
          rounded-2xl
          bg-white
          px-6
          pt-6
          pb-8
          text-center
          shadow-[0_6px_18px_rgba(0,0,0,0.07)]
          transition-shadow
          duration-300
          hover:shadow-[0_12px_25px_rgba(0,0,0,0.13)]
          sm:w-[180px]
        "
      >

        <div
          className="
            absolute
            left-0
            top-0
            h-[4px]
            w-full
            bg-gradient-to-r
            from-[#07805d]
            to-[#d3a72a]
          "
        ></div>


        {/* ICON */}

        <div
          className="
            mx-auto
            flex
            h-[42px]
            w-[42px]
            items-center
            justify-center
            rounded-full
            bg-[#07805d]/10
            text-[#07805d]
            transition-transform
            duration-300
            group-hover:scale-125
          "
        >
          <FaGlobe className="text-[20px]" />
        </div>


        <AnimatedNumber value="17+" />


        <p
          className="
            mt-2
            text-[12px]
            font-medium
            text-[#46546a]
          "
        >
          Countries We Operate
        </p>

      </motion.div>


      {/* =================================================
          CARD 4
      ================================================= */}

      <motion.div
        initial={{ opacity: 0, y: 85 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.08 }}
        className="
          group
          relative
          min-h-[154px]
          w-full
          overflow-hidden
          rounded-2xl
          bg-white
          px-6
          pt-6
          pb-8
          text-center
          shadow-[0_6px_18px_rgba(0,0,0,0.07)]
          transition-shadow
          duration-300
          hover:shadow-[0_12px_25px_rgba(0,0,0,0.13)]
          sm:w-[180px]
        "
      >

        <div
          className="
            absolute
            left-0
            top-0
            h-[4px]
            w-full
            bg-gradient-to-r
            from-[#07805d]
            to-[#d3a72a]
          "
        ></div>


        {/* ICON */}

        <div
          className="
            mx-auto
            flex
            h-[42px]
            w-[42px]
            items-center
            justify-center
            rounded-full
            bg-[#07805d]/10
            text-[#07805d]
            transition-transform
            duration-300
            group-hover:scale-125
          "
        >
          <FaChartLine className="text-[20px]" />
        </div>


        <AnimatedNumber value="200K+" />


        <p
          className="
            mt-2
            text-[12px]
            font-medium
            text-[#46546a]
          "
        >
          Managed Marketing
        </p>

      </motion.div>


      {/* =================================================
          CARD 5
      ================================================= */}

      <motion.div
        initial={{ opacity: 0, y: 85 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.08 }}
        className="
          group
          relative
          min-h-[154px]
          w-full
          overflow-hidden
          rounded-2xl
          bg-white
          px-6
          pt-6
          pb-8
          text-center
          shadow-[0_6px_18px_rgba(0,0,0,0.07)]
          transition-shadow
          duration-300
          hover:shadow-[0_12px_25px_rgba(0,0,0,0.13)]
          sm:w-[180px]
        "
      >

        <div
          className="
            absolute
            left-0
            top-0
            h-[4px]
            w-full
            bg-gradient-to-r
            from-[#07805d]
            to-[#d3a72a]
          "
        ></div>


        {/* ICON */}

        <div
          className="
            mx-auto
            flex
            h-[42px]
            w-[42px]
            items-center
            justify-center
            rounded-full
            bg-[#07805d]/10
            text-[#07805d]
            transition-transform
            duration-300
            group-hover:scale-125
          "
        >
          <FaArrowUp className="text-[20px]" />
        </div>


        <AnimatedNumber value="2.9M+" />


        <p
          className="
            mt-2
            text-[12px]
            font-medium
            text-[#46546a]
          "
        >
          Clients Gain
        </p>

      </motion.div>

    </div>

  </div>

</section>




{/* =========================================================
    PREMIUM QURAN COURSES
========================================================= */}

<section className="bg-[#fbfdfc] px-5 py-20 md:py-24">

  <div className="mx-auto max-w-[1150px]">

    {/* ================= HEADING ================= */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center"
    >

      <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#e9f5f1] px-5 py-2 text-[13px] font-medium text-[#07805d]">
        <FaStar className="text-[13px]" />
        Premium Quran Courses
      </div>

      <h2 className="mt-7 text-[38px] font-bold leading-tight text-[#07805d] md:text-[56px]">
        Learn Quran with{" "}
        <span className="text-[#d3a72a]">Expert Guidance</span>
      </h2>

      <div className="mx-auto mt-5 h-[6px] w-[100px] rounded-full bg-[#d3a72a]"></div>

      <p className="mx-auto mt-7 max-w-[760px] text-[16px] leading-7 text-[#46546a] md:text-[18px]">
        Discover our comprehensive Quran learning programs designed for all ages and
        levels. Start your spiritual journey with certified teachers and flexible scheduling.
      </p>

    </motion.div>


    {/* ================= COURSES ================= */}

    <div className="mt-16 flex flex-wrap gap-8">

      {/* ================= COURSE 1 ================= */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full rounded-2xl border border-[#d8eee7] bg-white p-8 shadow-[0_8px_20px_rgba(0,0,0,0.08)] lg:w-[calc(50%-16px)]"
      >

        <div className="flex items-start gap-6">

          <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-xl bg-[#e3f3ee] text-[25px] font-bold text-[#07805d]">
            1
          </div>

          <div className="flex-1">

            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[19px] font-bold text-[#101a2b]">
                Basic Quran Reading Course
              </h3>

              <span className="shrink-0 rounded-full bg-[#fbf4dd] px-3 py-1 text-[11px] font-medium text-[#d3a72a]">
                Beginner
              </span>
            </div>

            <p className="mt-4 text-[14px] leading-7 text-[#46546a]">
              Learn the fundamentals of Quranic Arabic and proper pronunciation
            </p>

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-[14px] text-[#46546a]">
                <FaClock className="mr-2 inline text-[12px]" />
                3-6 months
              </p>

              <button
                onClick={() => setSelectedCourse({
                  title: "Basic Quran Reading Course",
                  description:
                    "This course is designed for beginners who want to learn how to read the Quran correctly. You'll start with Arabic letters, their proper pronunciation, and gradually progress to reading complete words and verses. Our certified teachers provide personalized attention to ensure you develop a strong foundation in Quranic reading.",
                  duration: "3-6 months",
                  level: "Beginner",
                })}
                className="rounded-full bg-gradient-to-r from-[#16865f] to-[#d3a72a] px-6 py-3 text-[14px] font-semibold text-white shadow-md transition-all duration-300 hover:scale-105"
              >
                Explore Course
              </button>
            </div>

          </div>
        </div>
      </motion.div>


      {/* ================= COURSE 2 ================= */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full rounded-2xl border border-[#d8eee7] bg-white p-8 shadow-[0_8px_20px_rgba(0,0,0,0.08)] lg:w-[calc(50%-16px)]"
      >

        <div className="flex items-start gap-6">

          <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-xl bg-[#e3f3ee] text-[25px] font-bold text-[#07805d]">
            2
          </div>

          <div className="flex-1">

            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[19px] font-bold text-[#101a2b]">
                Quran Reading with Tajweed
              </h3>

              <span className="shrink-0 rounded-full bg-[#fbf4dd] px-3 py-1 text-[11px] font-medium text-[#d3a72a]">
                Intermediate
              </span>
            </div>

            <p className="mt-4 text-[14px] leading-7 text-[#46546a]">
              Master the rules of Tajweed for beautiful and correct recitation
            </p>

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-[14px] text-[#46546a]">
                <FaClock className="mr-2 inline text-[12px]" />
                6-12 months
              </p>

              <button
                onClick={() => setSelectedCourse({
                  title: "Quran Reading with Tajweed",
                  description:
                    "This course helps students improve their Quran recitation by learning the essential rules of Tajweed. Students learn correct pronunciation, articulation points, stopping rules, and proper recitation techniques with expert guidance.",
                  duration: "6-12 months",
                  level: "Intermediate",
                })}
                className="rounded-full bg-gradient-to-r from-[#16865f] to-[#d3a72a] px-6 py-3 text-[14px] font-semibold text-white shadow-md transition-all duration-300 hover:scale-105"
              >
                Explore Course
              </button>
            </div>

          </div>
        </div>
      </motion.div>


      {/* ================= COURSE 3 ================= */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full rounded-2xl border border-[#d8eee7] bg-white p-8 shadow-[0_8px_20px_rgba(0,0,0,0.08)] lg:w-[calc(50%-16px)]"
      >

        <div className="flex items-start gap-6">

          <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-xl bg-[#e3f3ee] text-[25px] font-bold text-[#07805d]">
            3
          </div>

          <div className="flex-1">

            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[19px] font-bold text-[#101a2b]">
                Quran Memorization Course
              </h3>

              <span className="shrink-0 rounded-full bg-[#fbf4dd] px-3 py-1 text-[11px] font-medium text-[#d3a72a]">
                Advanced
              </span>
            </div>

            <p className="mt-4 text-[14px] leading-7 text-[#46546a]">
              Systematic approach to memorizing the Holy Quran (Hifz)
            </p>

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-[14px] text-[#46546a]">
                <FaClock className="mr-2 inline text-[12px]" />
                2-5 years (depending on pace)
              </p>

              <button
                onClick={() => setSelectedCourse({
                  title: "Quran Memorization Course",
                  description:
                    "Our Quran Memorization Course provides a systematic and supportive approach to Hifz. Students receive personalized guidance, regular revision, and structured memorization plans according to their learning pace.",
                  duration: "2-5 years",
                  level: "Advanced",
                })}
                className="rounded-full bg-gradient-to-r from-[#16865f] to-[#d3a72a] px-6 py-3 text-[14px] font-semibold text-white shadow-md transition-all duration-300 hover:scale-105"
              >
                Explore Course
              </button>
            </div>

          </div>
        </div>
      </motion.div>


      {/* ================= COURSE 4 ================= */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full rounded-2xl border border-[#d8eee7] bg-white p-8 shadow-[0_8px_20px_rgba(0,0,0,0.08)] lg:w-[calc(50%-16px)]"
      >

        <div className="flex items-start gap-6">

          <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-xl bg-[#e3f3ee] text-[25px] font-bold text-[#07805d]">
            4
          </div>

          <div className="flex-1">

            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[19px] font-bold text-[#101a2b]">
                Quran With Tafseer Course
              </h3>

              <span className="shrink-0 rounded-full bg-[#fbf4dd] px-3 py-1 text-[11px] font-medium text-[#d3a72a]">
                Intermediate to Advanced
              </span>
            </div>

            <p className="mt-4 text-[14px] leading-7 text-[#46546a]">
              Understand the meanings and explanations of Quranic verses
            </p>

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-[14px] text-[#46546a]">
                <FaClock className="mr-2 inline text-[12px]" />
                1-2 years
              </p>

              <button
                onClick={() => setSelectedCourse({
                  title: "Quran With Tafseer Course",
                  description:
                    "This course focuses on understanding the meanings, context, and explanations of Quranic verses. Students learn Tafseer with qualified teachers and develop a deeper understanding of the message of the Holy Quran.",
                  duration: "1-2 years",
                  level: "Intermediate to Advanced",
                })}
                className="rounded-full bg-gradient-to-r from-[#16865f] to-[#d3a72a] px-6 py-3 text-[14px] font-semibold text-white shadow-md transition-all duration-300 hover:scale-105"
              >
                Explore Course
              </button>
            </div>

          </div>
        </div>
      </motion.div>

    </div>

  </div>

</section>




{/* =========================================================
    QURAN LEARNING GUIDE
========================================================= */}

<section className="bg-[#f8fcfb] px-5 py-16 md:px-10 md:py-20">
  <div className="mx-auto max-w-[1280px] rounded-[24px] border border-[#d8eee7] bg-white px-6 py-12 shadow-[0_12px_30px_rgba(0,0,0,0.08)] md:px-10 lg:px-12">

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="text-center"
    >
      <h2 className="text-[38px] font-bold text-[#07805d] md:text-[46px]">
        Quran Learning Guide
      </h2>
      <p className="mt-3 text-[15px] text-[#46546a] md:text-[16px]">
        Answers to common questions about Quran education and learning methodologies
      </p>
    </motion.div>

    <div className="mt-12 flex flex-wrap gap-6">
      {[
        { title: "How to learn Norani Qaida?", short: "Step-by-step guide to mastering the foundation of Quranic reading", description: "Norani Qaida provides a strong foundation for Quranic reading. Start with Arabic letters, learn their correct pronunciation, understand basic joining rules, and gradually practice reading words and short Quranic verses. Regular practice with a qualified teacher helps build confidence and accuracy." },
        { title: "How to learn Quran online?", short: "Comprehensive approach to effective online Quran learning", description: "Online Quran learning has made Islamic education accessible to everyone. Our process includes: 1) Free trial session to assess level, 2) Customized learning plan, 3) One-on-one sessions with qualified teachers, 4) Interactive digital whiteboard, 5) Regular assessments, 6) Flexible scheduling. All you need is a device with internet connection and dedication to learn." },
        { title: "Why memorize (Hifz) the Holy Quran?", short: "Benefits and spiritual rewards of memorizing the Quran", description: "Memorizing the Holy Quran is a meaningful learning journey that develops consistency, discipline, and a deeper connection with the Quran. A structured schedule, regular revision, and guidance from a qualified teacher can help students progress step by step." },
        { title: "How to memorize the Holy Quran?", short: "Proven techniques for successful Quran memorization", description: "Successful Quran memorization requires regular practice and revision. Students can begin with manageable portions, repeat new lessons regularly, revise previously memorized portions, and maintain a consistent daily routine with teacher guidance." },
        { title: "How Will We Bridge The Difference Between The Traditional and Online Learning?", short: "Our approach to combining traditional values with modern technology", description: "Online learning can combine traditional Quran education with modern technology. Students receive direct teacher guidance while using digital tools for lessons, practice, communication, and regular assessment." },
        { title: "What is Tajweed?", short: "Understanding the rules of proper Quranic recitation", description: "Tajweed refers to the rules used for correct Quranic recitation. It helps learners understand how Arabic letters and words should be pronounced during recitation and supports accurate and respectful reading of the Quran." },
        { title: "How to teach Tajweed to Kids?", short: "Child-friendly methods for teaching Tajweed effectively", description: "Children can learn Tajweed through simple explanations, repetition, visual examples, short practice sessions, and positive encouragement. Lessons should be suitable for the child's learning level and progress gradually." },
        { title: "What is Tafseer?", short: "Exploring the science of Quranic interpretation", description: "Tafseer is the study and explanation of the meanings and context of Quranic verses. Learning Tafseer can help students understand the message of the Quran more deeply while studying through reliable sources and qualified teachers." },
        { title: "When Should I Start Learning Tafseer?", short: "Guidance on the right time to begin studying Quranic explanations", description: "Students can begin learning Tafseer according to their Quran reading ability, existing knowledge, and learning goals. A teacher can help select material that matches the student's level and gradually introduce deeper explanations." },
      ].map((guide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
          onClick={() => setSelectedGuide(guide)}
          className="group min-h-[195px] w-full cursor-pointer rounded-[14px] border border-[#cfeee3] bg-[#fbfefd] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(7,128,93,0.10)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
        >
          <div className="flex items-center justify-between">
            <span className="flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-[#e8f4f0] text-[17px] font-bold text-[#07805d] transition-transform duration-300 group-hover:scale-105">?</span>
            <span className="text-[29px] font-light text-[#91a3ae] transition-transform duration-300 group-hover:translate-x-1">›</span>
          </div>
          <h3 className="mt-6 text-[16px] font-semibold leading-6 text-[#111827]">{guide.title}</h3>
          <p className="mt-3 text-[13px] leading-6 text-[#46546a]">{guide.short}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* ================= QURAN LEARNING GUIDE MODAL ================= */}

{selectedGuide && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-5 backdrop-blur-[5px]" onClick={() => setSelectedGuide(null)}>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-[625px] rounded-[22px] bg-white px-7 py-8 shadow-2xl md:px-8 md:py-9"
    >
      <button onClick={() => setSelectedGuide(null)} className="absolute right-6 top-5 text-[32px] font-light leading-none text-[#667085] transition-colors duration-300 hover:text-[#07805d]">×</button>
      <h2 className="pr-8 text-center text-[22px] font-bold text-[#07805d] md:text-[24px]">{selectedGuide.title}</h2>
      <p className="mt-2 text-center text-[14px] italic text-[#46546a]">{selectedGuide.short}</p>
      <div className="mx-auto mt-4 h-[4px] w-[60px] rounded-full bg-[#d8ad25]"></div>
      <p className="mt-7 text-[14px] leading-6 text-[#46546a]">{selectedGuide.description}</p>
      <Link to="/Contact" onClick={() => setSelectedGuide(null)} className="mt-8 flex w-full items-center justify-center rounded-[10px] bg-gradient-to-r from-[#07805d] to-[#d8ad25] px-6 py-4 text-[14px] font-semibold text-white shadow-[0_6px_18px_rgba(7,128,93,0.18)] transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
        Start Learning Today
      </Link>
    </motion.div>
  </div>
)}

{/* ================= WHY CHOOSE US SECTION ================= */}

<section className="relative overflow-hidden bg-[#fdfcf8] px-6 py-20 md:px-12 lg:px-20">

  {/* Background Dots */}
  <div className="pointer-events-none absolute inset-0 opacity-40">
    <div
      className="h-full w-full"
      style={{
        backgroundImage: "radial-gradient(#e8eadb 2px, transparent 2px)",
        backgroundSize: "28px 28px",
      }}
    ></div>
  </div>

  {/* MAIN CONTAINER */}
  <div className="relative mx-auto max-w-[1250px]">

    {/* ================= HEADING ================= */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mb-14 text-center"
    >

      {/* Small Badge */}
      <span className="inline-block rounded-full border border-[#dfb62c] px-5 py-2 text-[11px] font-medium tracking-[1.5px] text-[#c99f19]">
        EXCELLENCE IN QURAN EDUCATION
      </span>

      {/* Heading */}
      <h2 className="mt-4 text-[42px] font-bold leading-tight text-[#24384d] md:text-[60px]">
        Why{" "}
        <span className="text-[#d7ad28]">
          Choose Our Quran Courses
        </span>
      </h2>

      {/* Lines */}
      <div className="mt-4 flex flex-col items-center">
        <div className="h-[4px] w-[85px] rounded-full bg-[#d7ad28]"></div>
        <div className="mt-2 h-[4px] w-[55px] rounded-full bg-[#168562]"></div>
      </div>

    </motion.div>


    {/* ================= CONTENT ================= */}

    <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">


      {/* ================= LEFT IMAGE ================= */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full lg:w-[45%]"
      >

        <div className="relative mx-auto w-full max-w-[570px] overflow-hidden rounded-[10px] border-2 border-[#e1e7d5]">

          <img
            src={home6}
            alt="Quran Learning"
            className="h-[430px] w-full object-cover md:h-[500px]"
          />

        </div>


        {/* Floating Icon */}

        <div className="absolute bottom-[-20px] right-[8%] flex h-[85px] w-[85px] items-center justify-center rounded-full bg-[#07845f] text-3xl text-white shadow-lg">
          📖
        </div>

      </motion.div>


      {/* ================= RIGHT CONTENT ================= */}

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full lg:w-[55%]"
      >

        {/* ================= PARAGRAPH 1 ================= */}

        <div className="rounded-[16px] border border-[#e0e6d7] bg-white p-6 shadow-sm">

          <p className="text-[16px] leading-7 text-[#34495e]">
            At{" "}
            <span className="font-semibold text-[#07845f]">
              Quran Learn Academy
            </span>
            , we strive to enlighten Muslims with the teachings of the Holy
            Quran, guiding lives according to the principles of Islam. With a
            step-by-step process and focus on{" "}
            <span className="font-semibold text-[#d5a91f]">
              Tajweed
            </span>
            , we ensure a comprehensive learning experience for every student.
          </p>

        </div>


        {/* ================= PARAGRAPH 2 ================= */}

        <div className="mt-5 rounded-[16px] border border-[#e0e6d7] bg-white p-6 shadow-sm">

          <p className="text-[16px] leading-7 text-[#34495e]">
            Our flexible online classes allow you to learn at your own pace,
            from the comfort of your home—anytime, anywhere. Whether at home
            or traveling, your connection with the Quran continues without
            interruption.
          </p>

        </div>


        {/* ================= FEATURES ================= */}

        <div className="mt-5 flex flex-col gap-4 md:flex-row">


          {/* LEFT FEATURES */}

          <div className="flex w-full flex-col gap-4 md:w-1/2">

            {/* Feature 1 */}

            <div className="flex items-center gap-4 rounded-[14px] border border-[#dfe6d8] bg-white px-4 py-4 transition-all duration-300 hover:shadow-md">

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#07845f] text-white">
                ◉
              </span>

              <p className="text-[15px] font-medium text-[#24384d]">
                Free Trial Classes
              </p>

            </div>


            {/* Feature 2 */}

            <div className="flex items-center gap-4 rounded-[14px] border border-[#dfe6d8] bg-white px-4 py-4 transition-all duration-300 hover:shadow-md">

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#07845f] text-white">
                ★
              </span>

              <p className="text-[15px] font-medium text-[#24384d]">
                Special focus on slow learners
              </p>

            </div>


            {/* Feature 3 */}

            <div className="flex items-center gap-4 rounded-[14px] border border-[#dfe6d8] bg-white px-4 py-4 transition-all duration-300 hover:shadow-md">

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#07845f] text-white">
                ♀
              </span>

              <p className="text-[15px] font-medium text-[#24384d]">
                Female Quran teachers for women & children
              </p>

            </div>

          </div>


          {/* RIGHT FEATURES */}

          <div className="flex w-full flex-col gap-4 md:w-1/2">

            {/* Feature 4 */}

            <div className="flex items-center gap-4 rounded-[14px] border border-[#dfe6d8] bg-white px-4 py-4 transition-all duration-300 hover:shadow-md">

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#07845f] text-white">
                ▤
              </span>

              <p className="text-[15px] font-medium text-[#24384d]">
                Word by word Quran learning with Tajweed
              </p>

            </div>


            {/* Feature 5 */}

            <div className="flex items-center gap-4 rounded-[14px] border border-[#dfe6d8] bg-white px-4 py-4 transition-all duration-300 hover:shadow-md">

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#07845f] text-white">
                ◐
              </span>

              <p className="text-[15px] font-medium text-[#24384d]">
                Online Quran memorization
              </p>

            </div>


            {/* Feature 6 */}

            <div className="flex items-center gap-4 rounded-[14px] border border-[#dfe6d8] bg-white px-4 py-4 transition-all duration-300 hover:shadow-md">

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#07845f] text-white">
                ◉
              </span>

              <p className="text-[15px] font-medium text-[#24384d]">
                Expert Quran teachers with English fluency
              </p>

            </div>

          </div>

        </div>


        {/* ================= BUTTON ================= */}

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 rounded-[7px] bg-[#d9ad27] px-7 py-3 text-[15px] font-medium text-white transition-all duration-300 hover:bg-[#07845f]"
        >
          Start Your Journey
          <span className="ml-3">
            →
          </span>
        </motion.button>

      </motion.div>

    </div>

  </div>

</section>



{/* =========================================================
    FREQUENTLY ASKED QUESTIONS
========================================================= */}

<section className="bg-gradient-to-r from-[#effcf6] via-[#f8fff9] to-[#fffdf2] px-5 py-16 md:px-10 md:py-20">

  {/* ================= HEADING ================= */}

  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, ease: "easeOut" }}
    className="mx-auto max-w-[850px] text-center"
  >

    <h2 className="inline-block rounded-md bg-white px-4 py-1 text-[30px] font-bold text-[#087653] shadow-[0_4px_12px_rgba(0,0,0,0.08)] md:text-[38px]">
      Frequently Asked <span className="text-[#d3a72a]">Questions</span>
    </h2>

    {/* ================= TWO LINES ================= */}

    <motion.div
      initial={{ opacity: 0, y: 15, scaleX: 0 }}
      whileInView={{ opacity: 1, y: 0, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
      className="mx-auto mt-3 flex w-fit items-center gap-1"
    >
      <div className="h-[4px] w-[45px] rounded-full bg-[#087653]" />
      <div className="h-[4px] w-[20px] rounded-full bg-[#d3a72a]" />
    </motion.div>

    <p className="mx-auto mt-5 max-w-[650px] text-[13px] leading-5 text-[#46546a]">
      Find answers to common questions about our Quranic education programs. We're here to
      guide you on your spiritual learning journey.
    </p>

  </motion.div>


  {/* ================= MAIN CONTENT ================= */}

  <div className="mx-auto mt-10 flex max-w-[1120px] flex-col gap-7 lg:flex-row">

    {/* ================= LEFT FAQS ================= */}

    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="w-full lg:w-[52%]"
    >

      <div className="flex flex-col gap-4">

        {[
          {
            icon: <FaBookOpen />,
            question: "How to learn Norani Qaida?",
            answer:
              "Our Norani Qaida course is designed for beginners to learn the Arabic alphabet and basic pronunciation rules. We use interactive methods, visual aids, and gradual progression to ensure students master the fundamentals before moving to Quranic reading.",
          },
          {
            icon: <FaDesktop />,
            question: "How to learn Quran online effectively?",
            answer:
              "Online Quran learning provides flexible access to qualified teachers from home. Students can learn through one-on-one classes, interactive lessons, regular practice, and personalized learning plans according to their level.",
          },
          {
            icon: <FaHeart />,
            question: "Why memorize (Hifz) the Holy Quran?",
            answer:
              "Hifz is a meaningful journey that helps students build a strong connection with the Holy Quran. With regular revision, consistent practice, and teacher guidance, students can gradually progress in Quran memorization.",
          },
          {
            icon: <FaHeadphones />,
            question: "What is Tajweed and why is it important?",
            answer:
              "Tajweed teaches the correct pronunciation and recitation rules of the Holy Quran. Learning Tajweed helps students recite Quranic verses accurately and with proper pronunciation.",
          },
          {
            icon: <FaUserGraduate />,
            question: "How do you teach Tajweed to children?",
            answer:
              "We use simple explanations, repetition, visual learning, and child-friendly lessons to make Tajweed easy and engaging for children. Lessons are adjusted according to each child's learning level.",
          },
          {
            icon: <FaChartLine />,
            question: "What is Tafseer and when should I study it?",
            answer:
              "Tafseer helps students understand the meanings and explanations of Quranic verses. Students can begin studying Tafseer according to their Quran reading ability and learning level with guidance from a qualified teacher.",
          },
        ].map((faq, index) => {

          const isOpen = openFaq === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="overflow-hidden rounded-[12px] bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08)]"
            >

              {/* ================= QUESTION ================= */}

              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >

                <div className="flex min-w-0 items-center gap-4">

                  <span className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full bg-[#edf9dc] text-[#087653]">
                    {faq.icon}
                  </span>

                  <span className="text-[14px] font-medium leading-5 text-[#182638]">
                    {faq.question}
                  </span>

                </div>

                <span className="shrink-0 text-[13px] text-[#087653]">
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>

              </button>

              {/* ================= ANSWER ================= */}

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="border-t border-[#edf0ec]"
                  >
                    <p className="px-5 py-4 text-[12px] leading-5 text-[#46546a]">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          );
        })}

      </div>

    </motion.div>


    {/* ================= RIGHT SIDE ================= */}

    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="w-full lg:w-[48%]"
    >

      {/* ================= IMAGE ================= */}

      <div className="relative overflow-hidden rounded-[12px] shadow-[0_8px_20px_rgba(0,0,0,0.10)]">

        <img
          src={home7}
          alt="Quran Learning"
          className="h-[320px] w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* ================= NEED MORE HELP ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-[-10px] left-4 w-[190px] rounded-[12px] bg-white px-4 py-4 shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
        >

          <h3 className="text-[13px] font-bold text-[#087653]">
            Need More Help?
          </h3>

          <p className="mt-2 text-[10px] leading-4 text-[#46546a]">
            Our support team is available 24/7 to answer your questions.
          </p>

          <Link
            to="/Contact"
            className="mt-2 inline-flex items-center text-[10px] font-medium text-[#d3a72a]"
          >
            Contact Support
            <FaArrowRight className="ml-1 text-[8px]" />
          </Link>

        </motion.div>

        {/* ================= ROUND ARROW ================= */}

        <div className="absolute bottom-4 right-4 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-gradient-to-r from-[#087653] to-[#d3a72a] text-white shadow-md">
          <FaArrowRight className="text-[11px]" />
        </div>

      </div>


      {/* ================= STILL HAVE QUESTIONS ================= */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        className="mt-7 rounded-[12px] bg-white px-5 py-5 shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
      >

        <h3 className="text-[14px] font-bold text-[#087653]">
          Still Have Questions?
        </h3>

        <p className="mt-2 text-[10px] leading-5 text-[#46546a]">
          We understand that every learner's journey is unique. If you have specific questions
          not covered here, don't hesitate to reach out.
        </p>

        <Link
          to="/Contact"
          className="mt-3 inline-flex rounded-[6px] bg-[#087653] px-4 py-2 text-[10px] font-medium text-white transition-all duration-300 hover:bg-[#d3a72a]"
        >
          Contact Us
        </Link>

      </motion.div>

    </motion.div>

  </div>

</section>


{/* =========================================================
    WHAT OUR STUDENTS SAY
========================================================= */}

<section className="bg-gradient-to-br from-[#f4ead7] via-[#faf3e7] to-[#fffdf8] px-5 py-16 md:px-10 md:py-20 lg:px-16">

  {/* ================= HEADING ================= */}

  <motion.h2
    initial={{ opacity: 0, y: -35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="text-center text-[36px] font-bold leading-tight text-[#075c4e] md:text-[48px] lg:text-[54px]"
  >
    What Our <span className="text-[#d3a72a]">Students Say</span>
  </motion.h2>


  {/* ================= DESCRIPTION ================= */}

  <motion.p
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{
      duration: 0.6,
      delay: 0.05,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="mx-auto mt-7 max-w-[650px] text-center text-[13px] leading-6 text-[#334155] md:text-[15px] md:leading-7"
  >
    Hear real stories from our students and families about their Quran learning journey
    <br />
    with us.
  </motion.p>


  {/* ================= TESTIMONIAL CARD ================= */}

  <div className="mx-auto mt-12 max-w-[900px]">

    <AnimatePresence mode="wait">

      <motion.div
        key={testimonialIndex}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="rounded-[18px] border border-[#d5eee5] bg-white px-7 py-7 shadow-[0_10px_25px_rgba(0,0,0,0.10)] md:px-10 md:py-8"
      >

        <div className="flex items-start gap-5">

          {/* STUDENT IMAGE */}

          <div className="h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full border-[3px] border-[#d3a72a] shadow-md">

            <img
              src={testimonials[testimonialIndex].image}
              alt={testimonials[testimonialIndex].name}
              className="h-full w-full object-cover"
            />

          </div>


          {/* STUDENT INFO */}

          <div className="min-w-0">

            <h3 className="text-[17px] font-bold text-[#075c4e] md:text-[18px]">
              {testimonials[testimonialIndex].name}
            </h3>

            <p className="mt-1 text-[12px] text-[#64748b]">
              {testimonials[testimonialIndex].role}
            </p>

            <span className="mt-2 inline-flex rounded-full bg-[#d9b46c] px-3 py-1 text-[9px] font-medium text-white md:text-[10px]">
              {testimonials[testimonialIndex].course}
            </span>

          </div>

        </div>


        {/* ================= TESTIMONIAL TEXT ================= */}

        <p className="mt-7 text-[13px] italic leading-6 text-[#263449] md:text-[15px] md:leading-7">
          &quot;{testimonials[testimonialIndex].text}&quot;
        </p>


        {/* ================= RATING BAR ================= */}

        <div className="mt-7 flex flex-wrap items-center gap-3 rounded-[10px] bg-[#effbf3] px-4 py-4 md:gap-4">

          <div className="flex items-center gap-1 text-[#b57b28]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <span className="text-[11px] font-medium text-[#087653]">
            Rated 5/5
          </span>

          <span className="text-[11px] text-[#334155]">
            Leave us a quick
          </span>


          {/* ================= REVIEW BUTTON ================= */}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowReviewModal(true);
            }}
            className="rounded-[7px] bg-[#b78332] px-4 py-2 text-[10px] font-medium text-white transition-all duration-300 hover:bg-[#087653]"
          >
            Review
          </button>

        </div>

      </motion.div>

    </AnimatePresence>


    {/* ================= DOTS ================= */}

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mt-5 flex justify-center gap-2"
    >

      {testimonials.map((_, index) => (

        <button
          key={index}
          type="button"
          onClick={() => setTestimonialIndex(index)}
          aria-label={`Show testimonial ${index + 1}`}
          className={`h-[9px] w-[9px] rounded-full transition-all duration-300 ${
            testimonialIndex === index
              ? "bg-[#d3a72a]"
              : "bg-[#d6cdbd]"
          }`}
        />

      ))}

    </motion.div>

  </div>


  {/* ================= START YOUR QURANIC JOURNEY ================= */}

  <motion.div
    initial={{ opacity: 0, scale: 0.94 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{
      duration: 0.6,
      delay: 0.05,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="mx-auto mt-10 max-w-[1120px] rounded-[16px] border border-[#d5eee5] bg-white px-6 py-7 text-center shadow-[0_8px_20px_rgba(0,0,0,0.10)] md:px-10 md:py-8"
  >

    <h3 className="text-[18px] font-bold text-[#075c4e] md:text-[21px]">
      Start Your Quranic Journey Today
    </h3>

    <p className="mx-auto mt-4 max-w-[620px] text-[12px] leading-5 text-[#46546a] md:text-[13px] md:leading-6">
      Join our community of learners who are connecting with the Quran from the comfort of their
      <br className="hidden md:block" />
      homes.
    </p>

    <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">

      <Link
        to="/Contact"
        className="rounded-[8px] bg-[#087653] px-7 py-3 text-[11px] font-medium text-white shadow-md transition-all duration-300 hover:bg-[#d3a72a] hover:shadow-lg md:text-[12px]"
      >
        Book Free Trial
      </Link>

      <Link
        to="/services"
        className="rounded-[8px] border border-[#e1bd73] bg-white px-7 py-3 text-[11px] font-medium text-[#b78332] transition-all duration-300 hover:bg-[#d3a72a] hover:text-white md:text-[12px]"
      >
        View All Courses
      </Link>

    </div>

  </motion.div>


  {/* ====================================================== */}
  {/* ================= REVIEW MODAL ======================= */}
  {/* ====================================================== */}

  <AnimatePresence>

    {showReviewModal && (

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-5 backdrop-blur-[3px]"
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) {
            setShowReviewModal(false);
          }
        }}
      >

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.96,
          }}
          transition={{
            duration: 0.22,
            ease: [0.22, 1, 0.36, 1],
          }}
          onMouseDown={(e) => e.stopPropagation()}
          className="relative z-[10000] w-full max-w-[550px] overflow-hidden rounded-[18px] bg-white shadow-2xl"
        >

          {/* ================= MODAL HEADER ================= */}

          <div className="flex items-center justify-between bg-[#00a83b] px-6 py-5">

            <h2 className="text-[20px] font-bold text-white">
              Leave a Review
            </h2>

            <button
              type="button"
              onClick={() => setShowReviewModal(false)}
              className="cursor-pointer text-[30px] leading-none text-white transition-transform duration-200 hover:scale-110"
            >
              ×
            </button>

          </div>


          {/* ================= MODAL BODY ================= */}

          <div className="px-6 py-7 md:px-7">

            {/* ================= STARS ================= */}

            <div className="mb-7 flex justify-center gap-3">

              {[1, 2, 3, 4, 5].map((star) => (

                <button
                  key={star}
                  type="button"
                  onClick={() => setReviewRating(star)}
                  className="cursor-pointer text-[38px] leading-none transition-transform duration-200 hover:scale-110"
                >

                  <FaStar
                    className={
                      star <= reviewRating
                        ? "text-[#d3a72a]"
                        : "text-[#d1d5db]"
                    }
                  />

                </button>

              ))}

            </div>


            {/* ================= NAME ================= */}

            <div className="mb-6">

              <label className="mb-2 block text-[14px] font-medium text-[#263449]">
                Your Name
              </label>

              <input
                type="text"
                value={reviewName}
                onChange={(e) => setReviewName(e.target.value)}
                placeholder="(optional)"
                autoComplete="off"
                className="pointer-events-auto w-full cursor-text rounded-[9px] border border-[#333] bg-white px-4 py-4 text-[15px] text-[#263449] outline-none transition-all duration-200 focus:border-[#00a83b]"
              />

            </div>


            {/* ================= REVIEW ================= */}

            <div className="mb-7">

              <label className="mb-2 block text-[14px] font-medium text-[#263449]">
                Your Review
              </label>

              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your feedback..."
                rows={5}
                className="pointer-events-auto w-full cursor-text resize-none rounded-[9px] border border-[#333] bg-white px-4 py-4 text-[15px] text-[#263449] outline-none transition-all duration-200 focus:border-[#00a83b]"
              />

            </div>


            {/* ================= MODAL BUTTONS ================= */}

            <div className="flex justify-end gap-3">

              <button
                type="button"
                onClick={() => {
                  setShowReviewModal(false);
                }}
                className="cursor-pointer rounded-[9px] border border-[#d1d5db] bg-white px-6 py-3 text-[14px] text-[#263449] transition-all duration-300 hover:bg-[#f3f4f6]"
              >
                Cancel
              </button>


              <button
                type="button"
                onClick={() => {

                  if (!reviewText.trim()) {
                    return;
                  }

                  setShowReviewModal(false);
                  setReviewRating(0);
                  setReviewName("");
                  setReviewText("");

                }}
                className="cursor-pointer rounded-[9px] bg-[#00a83b] px-6 py-3 text-[14px] text-white transition-all duration-300 hover:bg-[#087653]"
              >
                Submit Review
              </button>

            </div>

          </div>

        </motion.div>

      </motion.div>

    )}

  </AnimatePresence>

</section>


{/* ================= COURSE MODAL ================= */}

{selectedCourse && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5 backdrop-blur-sm">

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative w-full max-w-[670px] rounded-[25px] bg-white p-7 shadow-2xl md:p-8"
    >

      {/* Close Button */}

      <button
        onClick={() => setSelectedCourse(null)}
        className="absolute right-6 top-5 text-3xl text-[#657080] transition-colors duration-300 hover:text-[#07845f]"
      >
        ×
      </button>


      {/* Title */}

      <div className="text-center">

        <h2 className="text-2xl font-bold text-[#07845f] md:text-3xl">
          {selectedCourse.title}
        </h2>

        <div className="mx-auto mt-3 h-[3px] w-[80px] bg-[#d7ad28]"></div>

      </div>


      {/* Description */}

      <p className="mt-7 text-[16px] leading-7 text-[#263b50]">
        {selectedCourse.description}
      </p>


      {/* Course Features */}

      <div className="mt-6">

        <h3 className="text-[17px] font-semibold text-[#d4a925]">
          Course Features
        </h3>

        <div className="mt-4 flex flex-col gap-3 md:flex-row">

          <div className="w-full md:w-1/2">
            <p className="text-[15px] text-[#34475b]">
              <span className="mr-2 text-[#07845f]">●</span>
              Arabic alphabet and pronunciation
            </p>

            <p className="mt-3 text-[15px] text-[#34475b]">
              <span className="mr-2 text-[#07845f]">●</span>
              Practice with short surahs
            </p>
          </div>


          <div className="w-full md:w-1/2">
            <p className="text-[15px] text-[#34475b]">
              <span className="mr-2 text-[#07845f]">●</span>
              Basic reading rules
            </p>

            <p className="mt-3 text-[15px] text-[#34475b]">
              <span className="mr-2 text-[#07845f]">●</span>
              One-on-one sessions with teachers
            </p>
          </div>

        </div>

      </div>


      {/* Duration + Level */}

      <div className="mt-8 flex justify-center gap-14 text-center">

        <div>
          <h3 className="text-2xl font-bold text-[#07845f]">
            {selectedCourse.duration}
          </h3>

          <p className="text-sm text-[#657080]">
            Duration
          </p>
        </div>


        <div>
          <h3 className="text-2xl font-bold text-[#07845f]">
            {selectedCourse.level}
          </h3>

          <p className="text-sm text-[#657080]">
            Level
          </p>
        </div>

      </div>


      {/* Contact Button */}

      <Link
        to="/Contact"
        onClick={() => setSelectedCourse(null)}
        className="mt-7 block w-full rounded-[12px] bg-gradient-to-r from-[#16865f] to-[#d7ad28] py-4 text-center font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
      >
        Enroll Now - Start Your Free Trial
      </Link>

    </motion.div>

  </div>
)}



    </div>
  );
}


