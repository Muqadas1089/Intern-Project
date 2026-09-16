import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import child3 from "../src/assets/child3.jpg";
import m1 from "../src/assets/m1.jpg";
import m2 from "../src/assets/m2.jpg";
import m3 from "../src/assets/m3.jpg";
import m4 from "../src/assets/m4.jpg";
import m5 from "../src/assets/m5.jpg";
import m6 from "../src/assets/m6.jpg";
import mam2 from "../src/assets/mam2.jpg";
import uncle1 from "../src/assets/uncle1.jpg";
import story1 from "../src/assets/story1.jpg";

import {
  FaGlobe,
  FaBookOpen,
  FaGraduationCap,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaAward,
  FaUsers,
  FaUserPlus,
  FaComments,
  FaChalkboardTeacher,
  FaLaptop,
  FaCheckCircle,
  FaStar,
  FaQuoteLeft,
  FaCalendarAlt,
  FaUserGraduate,
  FaUserTie,
  FaMapMarkerAlt,
  FaSmile,
  FaCertificate,
  FaBook,
  FaChild,
  FaQuoteRight,
  FaUserFriends,
} from "react-icons/fa";

import about1 from "../src/assets/about1.jpg";
import about2 from "../src/assets/about2.jpg";
import about3 from "../src/assets/about3.jpg";

/* =========================================================
   COMMON ANIMATION SETTINGS
========================================================= */

const smoothEase = [0.22, 1, 0.36, 1];

const viewSettings = {
  once: true,
  amount: 0.2,
};

/* =========================================================
   HERO SLIDES
========================================================= */

const slides = [
  {
    title: "One-on-One Classes",
    text: "Personalized Quran learning with dedicated attention from qualified teachers.",
    image: about1,
    icon: FaUserGraduate,
  },
  {
    title: "Worldwide Access",
    text: "Learn from anywhere, anytime with flexible scheduling options.",
    image: about2,
    icon: FaGlobe,
  },
  {
    title: "Learn Quran Online",
    text: "Connect with experienced Quran teachers through our modern online platform.",
    image: about3,
    icon: FaBookOpen,
  },
];

/* =========================================================
   OUR VALUES
========================================================= */

const values = [
  {
    icon: FaBookOpen,
    title: "Authenticity",
    text: "We maintain the authentic teachings of Quran with proper Tajweed and Tafsir.",
  },
  {
    icon: FaHeart,
    title: "Compassion",
    text: "We teach with patience and understanding, creating a supportive environment.",
  },
  {
    icon: FaAward,
    title: "Excellence",
    text: "We strive for excellence in Quranic education through continuous improvement.",
  },
  {
    icon: FaUsers,
    title: "Community",
    text: "We build a global community of Quran learners supporting each other.",
  },
];

/* =========================================================
   TEACHERS
========================================================= */

const teachers = [
  {
    name: "Dr. Ahmed Al-Misri",
    role: "Founder & Senior Quran Teacher",
    tag: "Tajweed and Qira'at",
    experience: "25+ years",
    image: m1,
    icon: FaBookOpen,
    text: "PhD in Islamic Studies from Al-Azhar University. Dedicated to teaching Quran with proper Tajweed for over two decades.",
  },
  {
    name: "Sister Fatima Khan",
    role: "Head of Women's Education",
    tag: "Quran Memorization",
    experience: "15+ years",
    image: m2,
    icon: FaBook,
    text: "Specializes in Hifz programs for women and children. Certified Quran teacher with Ijazah in Hafs 'an Asim.",
  },
  {
    name: "Sheikh Ibrahim Malik",
    role: "Senior Qari & Instructor",
    tag: "Advanced Tajweed",
    experience: "20+ years",
    image: m3,
    icon: FaGraduationCap,
    text: "Renowned Qari with participation in international Quran competitions. Expert in teaching proper pronunciation and melody.",
  },
  {
    name: "Sister Aisha Rahman",
    role: "Children's Program Director",
    tag: "Quran for Kids",
    experience: "12+ years",
    image: m4,
    icon: FaChild,
    text: "Develops engaging Quran learning programs for children. Specialized in child education psychology and Islamic pedagogy.",
  },
  {
    name: "Brother Yusuf Hassan",
    role: "Technology & Education Specialist",
    tag: "Digital Learning",
    experience: "8+ years",
    image: m5,
    icon: FaLaptop,
    text: "Combines traditional Quran teaching with modern technology. Manages our online learning platform and digital resources.",
  },
  {
    name: "Sister Zainab Ali",
    role: "Student Support Coordinator",
    tag: "Student Counseling",
    experience: "10+ years",
    image: m6,
    icon: FaUserFriends,
    text: "Provides guidance and support to students throughout their Quran learning journey. Ensures smooth learning experience.",
  },
];

/* =========================================================
   TEACHING PROCEDURE
========================================================= */

const teachingSteps = [
  {
    icon: FaUserPlus,
    title: "Step 1: Registration",
    text: "Students register through our website or WhatsApp. We collect details such as age, time zone, and preferred schedule.",
  },
  {
    icon: FaComments,
    title: "Step 2: Free Trial Class",
    text: "We provide a free trial session to introduce our teaching style and ensure student comfort.",
  },
  {
    icon: FaUserTie,
    title: "Step 3: Teacher Assignment",
    text: "Based on the student's level and preference, we assign a qualified Quran teacher.",
  },
  {
    icon: FaLaptop,
    title: "Step 4: Online Classes",
    text: "Regular online Quran sessions begin through Zoom or Skype, with focus on Tajweed, memorization, and recitation.",
  },
  {
    icon: FaCertificate,
    title: "Step 5: Progress & Certification",
    text: "We track student progress and provide certificates upon successful course completion.",
  },
];

/* =========================================================
   MISSION
========================================================= */

const missionCards = [
  {
    icon: FaBookOpen,
    title: "Preserve Quranic Knowledge",
    text: "To preserve and propagate the authentic teachings of the Holy Quran through modern digital means while maintaining traditional values and accuracy.",
    points: ["Authentic Tajweed", "Original Arabic", "Traditional Methods"],
  },
  {
    icon: FaGraduationCap,
    title: "Quality Education for All",
    text: "To make quality Quranic education accessible to everyone regardless of age, location, or background through affordable online classes.",
    points: ["Affordable Pricing", "All Age Groups", "Flexible Scheduling"],
  },
  {
    icon: FaGlobe,
    title: "Global Reach",
    text: "To connect students worldwide with certified Quran teachers, breaking geographical barriers and creating a global Muslim learning community.",
    points: ["Worldwide Access", "Cultural Diversity", "24/7 Availability"],
  },
  {
    icon: FaHeart,
    title: "Spiritual Development",
    text: "To nurture spiritual growth and Islamic values through Quranic education, helping students develop a deeper connection with Allah.",
    points: ["Character Building", "Islamic Values", "Spiritual Guidance"],
  },
  {
    icon: FaUsers,
    title: "Community Building",
    text: "To create a supportive online community where students can learn, grow, and connect with fellow Muslims from around the world.",
    points: ["Group Sessions", "Community Events", "Peer Support"],
  },
  {
    icon: FaAward,
    title: "Excellence in Teaching",
    text: "To maintain the highest standards of teaching through continuous teacher training, curriculum development, and quality assurance.",
    points: ["Certified Teachers", "Regular Training", "Quality Control"],
  },
];

/* =========================================================
   VISION
========================================================= */

const visionCards = [
  {
    icon: FaGlobe,
    title: "Global Reach",
    text: "Spreading Quran education worldwide through online classes that break barriers of distance and language.",
  },
  {
    icon: FaBookOpen,
    title: "Authentic Knowledge",
    text: "Teaching the Quran with Tajweed, Tafseer, and Islamic values to nurture true understanding and love for the Book of Allah.",
    featured: true,
  },
  {
    icon: FaUsers,
    title: "Community Growth",
    text: "Building a strong Muslim community of learners who live by the Quran and Sunnah, guiding future generations.",
  },
];

/* =========================================================
   TESTIMONIALS
========================================================= */

const testimonials = [
  {
    name: "Fatima Zahra",
    role: "Parent",
    image: mam2,
    text: "The one-on-one classes are excellent. My daughter has memorized several surahs already and enjoys every session with her ustadha.",
  },
  {
    name: "Ahmed Hassan",
    role: "Student",
    image: uncle1,
    text: "My Quran learning journey has been truly life-changing. The teacher is patient and explains with Tajweed in a very clear way.",
  },
  {
    name: "Maryam Ali",
    role: "Student",
    image: child3,
    text: "The flexible online classes make it easy to continue learning Quran from home. I have improved my recitation significantly.",
  },
];

/* =========================================================
   REUSABLE HEADING ANIMATION
========================================================= */

function AnimatedHeading({ children, className = "" }) {
  return (
    <motion.h2
      initial={{
        opacity: 0,
        y: -50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: smoothEase,
      }}
      viewport={viewSettings}
      className={className}
    >
      {children}
    </motion.h2>
  );
}

/* =========================================================
   REUSABLE PARAGRAPH ANIMATION
========================================================= */

function AnimatedParagraph({ children, className = "" }) {
  return (
    <motion.p
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.12,
        ease: smoothEase,
      }}
      viewport={viewSettings}
      className={className}
    >
      {children}
    </motion.p>
  );
}

/* =========================================================
   TESTIMONIAL SLIDER
========================================================= */

function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);

      setCurrent((previous) => {
        return (previous + 1) % testimonials.length;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[current];

  return (
    <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
      <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
        <motion.div
          key={current}
          initial={{
            opacity: 0,
            x: direction === 1 ? 180 : -180,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.65,
            ease: smoothEase,
          }}
          className="flex min-h-[420px] flex-col md:min-h-[255px] md:flex-row"
        >
          <div className="flex w-full flex-col items-center justify-center border-b border-[#eadfc9] p-6 text-center md:w-[32%] md:border-b-0 md:border-r">
            <div
              className="relative"
              style={{
                perspective: "1000px",
              }}
            >
              <motion.img
                key={`student-image-${current}`}
                src={testimonial.image}
                alt={testimonial.name}
                initial={{
                  opacity: 0,
                  rotateY: 180,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  rotateY: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  ease: smoothEase,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
                className="h-28 w-28 rounded-full border-4 border-[#b58a48] object-cover shadow-md"
              />

              <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#b58a48] to-[#6d5433] text-white shadow-md">
                <FaQuoteLeft className="text-sm" />
              </div>
            </div>

            <motion.h3
              initial={{
                opacity: 0,
                x: direction === 1 ? 40 : -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.45,
                ease: smoothEase,
              }}
              className="mt-4 text-lg font-bold text-[#684e32]"
            >
              {testimonial.name}
            </motion.h3>

            <motion.p
              initial={{
                opacity: 0,
                x: direction === 1 ? 35 : -35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.45,
                delay: 0.03,
                ease: smoothEase,
              }}
              className="mt-1 text-xs text-gray-500"
            >
              {testimonial.role}
            </motion.p>
          </div>

          <div className="flex w-full flex-col justify-center p-7 md:w-[68%] md:p-10">
            <motion.div
              initial={{
                opacity: 0,
                x: direction === 1 ? 50 : -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.45,
                ease: smoothEase,
              }}
              className="mb-4 flex gap-1 text-[#b5873e]"
            >
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: direction === 1 ? 40 : -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.45,
                ease: smoothEase,
              }}
            >
              <FaQuoteLeft className="mb-2 text-xl text-[#c39a59]/50" />
            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
                x: direction === 1 ? 60 : -60,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.02,
                ease: smoothEase,
              }}
              className="text-base italic leading-7 text-gray-700 md:text-lg"
            >
              {testimonial.text}
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                x: direction === 1 ? 35 : -35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.45,
                delay: 0.04,
                ease: smoothEase,
              }}
            >
              <FaQuoteRight className="ml-auto mt-2 text-xl text-[#c39a59]/50" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="mt-7 flex justify-center gap-3">
        {testimonials.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              if (index > current) {
                setDirection(1);
              } else if (index < current) {
                setDirection(-1);
              }

              setCurrent(index);
            }}
            className={`h-3 w-3 rounded-full border border-white transition-all duration-300 ${
              current === index
                ? "scale-110 bg-[#d1a54f]"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide((previous) => {
      return (previous + 1) % slides.length;
    });
  }

  function previousSlide() {
    setCurrentSlide((previous) => {
      return (previous - 1 + slides.length) % slides.length;
    });
  }

  return (
    <main className="overflow-hidden bg-[#fffdf9] text-gray-800">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="px-4 pb-10 pt-10 md:px-8 md:pb-14 md:pt-12">

        <div className="mx-auto max-w-4xl text-center">

          <motion.h1
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: smoothEase,
            }}
            className="font-serif text-3xl font-bold leading-tight text-[#197b59] md:text-5xl"
          >
            Discover the Beauty of Quranic
            <span className="block">Learning</span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: smoothEase,
            }}
            className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 md:text-base"
          >
            Embark on a transformative journey with our expert teachers and
            innovative learning platform designed for spiritual growth.
          </motion.p>

        </div>

        {/* ===================================================
            HERO SLIDER
        =================================================== */}

        <div
          className="
            group
            relative
            mx-auto
            mt-10
            h-[400px]
            w-full
            max-w-[1315px]
            overflow-hidden
            rounded-[25px]
            shadow-xl
            md:h-[580px]
          "
        >

          <AnimatePresence initial={false}>
            <motion.img
              key={currentSlide}
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              initial={{
                opacity: 0,
                scale: 1.03,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.01,
              }}
              transition={{
                opacity: {
                  duration: 0.45,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 0.7,
                  ease: smoothEase,
                },
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#13825d]/95 via-[#3c7959]/75 to-[#a98248]/65" />

          <div className="absolute inset-0 z-20 flex items-center justify-center px-8 text-center">

            <motion.div
              key={`content-${currentSlide}`}
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.35,
                ease: smoothEase,
              }}
              className="max-w-3xl text-white"
            >

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: smoothEase,
                }}
              >
                {React.createElement(slides[currentSlide].icon, {
                  className:
                    "mx-auto mb-5 text-4xl text-white drop-shadow-md md:text-5xl",
                })}
              </motion.div>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.03,
                  ease: smoothEase,
                }}
                className="text-3xl font-bold md:text-5xl"
              >
                {slides[currentSlide].title}
              </motion.h2>

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
                  duration: 0.3,
                  delay: 0.06,
                  ease: smoothEase,
                }}
                className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/90 md:text-xl md:leading-8"
              >
                {slides[currentSlide].text}
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.09,
                  ease: smoothEase,
                }}
                className="mt-8 flex flex-wrap justify-center gap-4"
              >

                <button
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#b8893f]
                    px-8
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:bg-[#a57935]
                    hover:shadow-xl
                  "
                >
                  Start Learning
                  <FaArrowRight />
                </button>

                <button
                  className="
                    rounded-full
                    border
                    border-white/70
                    bg-white/10
                    px-8
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-[#176c50]
                  "
                >
                  Learn More
                </button>

              </motion.div>

            </motion.div>

          </div>

          <button
            onClick={previousSlide}
            aria-label="Previous slide"
            className="
              absolute
              left-4
              top-1/2
              z-30
              flex
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-black/20
              text-2xl
              text-white
              backdrop-blur-sm
              transition-all
              duration-300
              hover:bg-black/40
              md:left-5
              md:h-14
              md:w-14
            "
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="
              absolute
              right-4
              top-1/2
              z-30
              flex
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-black/20
              text-2xl
              text-white
              backdrop-blur-sm
              transition-all
              duration-300
              hover:bg-black/40
              md:right-5
              md:h-14
              md:w-14
            "
          >
            <FaChevronRight />
          </button>

          <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 gap-3">

            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`
                  h-2.5
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    currentSlide === index
                      ? "w-8 bg-[#f4b51b]"
                      : "w-2.5 bg-white/50 hover:bg-white/80"
                  }
                `}
              />
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section className="px-4 py-12 md:px-8 md:py-16">

        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">

            <div className="mx-auto mb-3 flex justify-center gap-2">
              <span className="h-[3px] w-10 bg-[#b48a48]" />
              <span className="h-[3px] w-10 bg-[#21845f]" />
            </div>

            <AnimatedHeading className="font-serif text-3xl font-bold text-[#197b59] md:text-5xl">
              Who We Are
            </AnimatedHeading>

            <AnimatedParagraph className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
              Meet the dedicated team behind Online Quran Academy, passionate
              educators committed to spreading Quranic knowledge with
              authenticity and love.
            </AnimatedParagraph>

          </div>

          <div className="flex flex-wrap justify-center gap-5">

            {[
              {
                icon: FaUserGraduate,
                number: "5,000+",
                text: "Students Taught",
              },
              {
                icon: FaCalendarAlt,
                number: "20+",
                text: "Years Experience",
              },
              {
                icon: FaGlobe,
                number: "15+",
                text: "Countries Served",
              },
              {
                icon: FaChalkboardTeacher,
                number: "50+",
                text: "Qualified Teachers",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.75,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.12,
                    ease: smoothEase,
                  }}
                  viewport={viewSettings}
                  className="group w-full rounded-2xl border border-[#efe2c2] bg-white p-7 text-center shadow-md transition-shadow duration-300 hover:shadow-xl sm:w-[47%] lg:w-[23%]"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fbf5df] text-2xl text-[#ae8547] transition-all duration-300 group-hover:bg-[#ae8547] group-hover:text-white">
                    <Icon />
                  </div>

                  <h3 className="mt-4 text-3xl font-bold text-[#21825e]">
                    {item.number}
                  </h3>

                  <p className="mt-1 text-sm text-gray-600">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}

          </div>

          <div className="mt-14 flex flex-col overflow-hidden rounded-3xl border border-[#eee1c6] bg-white shadow-lg md:flex-row">

            <motion.div
              initial={{
                opacity: 0,
                x: -80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                ease: smoothEase,
              }}
              viewport={viewSettings}
              className="flex w-full items-center p-7 md:w-[50%] md:p-10"
            >
              <div>

                <div className="mb-5 flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fbf2cc] text-[#ae8547]">
                    <FaStar />
                  </div>

                  <h3 className="font-serif text-3xl font-bold text-[#19805b]">
                    Our Story
                  </h3>

                </div>

                <p className="text-sm leading-7 text-gray-600 md:text-base">
                  Founded in 2003, Online Quran Academy began with a simple
                  mission: to make authentic Quranic education accessible to
                  Muslims worldwide. Our vision was to bridge the gap between
                  traditional Islamic education and modern technology.
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                  Our founder, Dr. Ahmed Al-Misri, recognized the challenges
                  many Muslims faced in accessing qualified Quran teachers.
                  With dedication and divine guidance, we've grown into a
                  global institution serving thousands of students.
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                  Today, we take pride in our team of certified teachers who
                  carry the legacy of authentic Islamic knowledge while
                  embracing innovative teaching methodologies.
                </p>

              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.75,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                ease: smoothEase,
              }}
              viewport={viewSettings}
              className="h-[280px] w-full overflow-hidden md:h-auto md:w-[50%]"
            >
              <img
                src={story1}
                alt="Our Story"
                className="h-full w-full object-cover transition-transform duration-700 ease-out"
              />
            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          OUR VALUES
      ===================================================== */}

      <section className="px-4 py-12 md:px-8 md:py-16">

        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">

            <AnimatedHeading className="font-serif text-3xl font-bold text-[#197b59] md:text-5xl">
              Our Values
            </AnimatedHeading>

            <AnimatedParagraph className="mt-4 text-sm text-gray-600 md:text-base">
              The principles that guide our mission and shape our educational
              approach
            </AnimatedParagraph>

          </div>

          <div className="flex flex-wrap justify-center gap-6">

            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 70,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: smoothEase,
                  }}
                  viewport={viewSettings}
                  className="group w-full rounded-2xl border border-[#efe2c2] bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-[#d7bb78] hover:shadow-xl sm:w-[47%] lg:w-[23%]"
                >

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fcf7e7] text-2xl text-[#ae8547] transition-all duration-300 group-hover:shadow-lg">
                    <Icon />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-[#182333]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {value.text}
                  </p>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          MEET OUR TEAM
      ===================================================== */}

      <section className="px-4 py-12 md:px-8 md:py-16">

        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">

            <AnimatedHeading className="font-serif text-3xl font-bold text-[#197b59] md:text-5xl">
              Meet Our Team
            </AnimatedHeading>

            <AnimatedParagraph className="mt-4 text-sm text-gray-600 md:text-base">
              Dedicated educators committed to your Quranic learning journey
            </AnimatedParagraph>

          </div>

          <div
            className="flex flex-wrap justify-center gap-6"
            style={{ perspective: "1200px" }}
          >

            {teachers.map((teacher, index) => {
              const Icon = teacher.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -100,
                    rotateY: -90,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 2,
                    delay: index * 0.1,
                    ease: smoothEase,
                  }}
                  viewport={viewSettings}
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    willChange: "transform, opacity",
                  }}
                  className="group w-full overflow-hidden rounded-2xl border border-[#eee2c7] bg-white shadow-md transition-shadow duration-300 hover:shadow-2xl sm:w-[47%] lg:w-[31.5%]"
                >

                  <div className="relative h-[255px] overflow-hidden">

                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out hover:shadow-lg"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />

                    <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-[#b3894a] px-3 py-2 text-xs font-semibold text-white shadow-md">
                      <FaCalendarAlt />
                      {teacher.experience}
                    </div>

                  </div>

                  <div className="p-6">

                    <div className="flex items-center gap-4">

                      <motion.div
                        whileHover={{
                          rotate: 360,
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.8,
                          ease: "easeInOut",
                        }}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fcf5df] text-[#b48643] transition-colors duration-300 group-hover:bg-[#b48643] group-hover:shadow-lg"
                      >
                        <Icon />
                      </motion.div>

                      <div>

                        <h3 className="text-lg font-bold text-[#1c2736]">
                          {teacher.name}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-[#16805b]">
                          {teacher.role}
                        </p>

                      </div>

                    </div>

                    <div className="mt-5 inline-flex rounded-full bg-[#fbf5e5] px-3 py-2 text-xs font-medium text-[#9a753c]">
                      {teacher.tag}
                    </div>

                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {teacher.text}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          TEACHING PROCEDURE
      ===================================================== */}

      <section className="bg-gradient-to-b from-[#a88445] via-[#777748] to-[#18835a] px-4 py-14 md:px-8 md:py-16">

        <div className="mx-auto max-w-6xl">

          <div className="mb-14 text-center text-white">

            <AnimatedHeading className="text-3xl font-bold text-white md:text-5xl">
              Our Online Quran Teaching
              <span className="block">Procedure</span>
            </AnimatedHeading>

            <AnimatedParagraph className="mt-5 text-sm text-white/90 md:text-base">
              We follow a structured process to ensure smooth learning for
              every student.
            </AnimatedParagraph>

          </div>

          <div
            className="flex flex-wrap justify-center gap-x-6 gap-y-16"
            style={{ perspective: "1200px" }}
          >

            {teachingSteps.map((step, index) => {
              const Icon = step.icon;

              const cardAnimations = [
                {
                  opacity: 0,
                  x: -100,
                  rotateY: -25,
                },
                {
                  opacity: 0,
                  y: 100,
                  scale: 0.9,
                },
                {
                  opacity: 0,
                  x: 100,
                  rotateY: 25,
                },
                {
                  opacity: 0,
                  scale: 0.65,
                  rotate: -8,
                },
                {
                  opacity: 0,
                  x: 100,
                  rotateY: 90,
                  scale: 0.85,
                },
              ];

              return (
                <motion.div
                  key={index}
                  initial={cardAnimations[index]}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    rotateY: 0,
                  }}
                  transition={{
                    duration: 1.3,
                    delay: index * 0.1,
                    ease: smoothEase,
                  }}
                  viewport={viewSettings}
                  whileHover={{
                    scale: 1.015,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    willChange: "transform, opacity",
                  }}
                  className="group relative w-full rounded-2xl border border-[#e8d29c] bg-white px-7 pb-7 pt-12 text-center shadow-lg transition-shadow duration-300 hover:shadow-2xl sm:w-[47%] lg:w-[31%]"
                >

                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      flex
                      h-16
                      w-16
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border-4
                      border-white
                      bg-gradient-to-br
                      from-white
                      to-[#eadcc1]
                      text-2xl
                      text-[#a77c3c]
                      shadow-lg
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:rotate-[30deg]
                    "
                  >
                    <Icon />
                  </div>

                  <h3 className="text-lg font-bold text-[#30281e]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {step.text}
                  </p>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          OUR MISSION
      ===================================================== */}

      <section className="bg-[#fffdf8] px-4 py-14 md:px-8 md:py-16">

        <div className="mx-auto max-w-6xl">

          <div className="mb-14 text-center">

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 2,
                ease: smoothEase,
              }}
              viewport={viewSettings}
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-[#16825c] to-[#b78a45] text-3xl text-white shadow-md"
            >
              <FaBookOpen />
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: -40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: smoothEase,
              }}
              viewport={viewSettings}
              className="mt-7 font-serif text-4xl font-bold md:text-6xl"
            >
              <span className="text-[#202b3b]">Our </span>

              <span className="text-[#b17e3d]">
                Mission
              </span>
            </motion.h2>

            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              whileInView={{
                opacity: 1,
                scaleX: 3,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: smoothEase,
              }}
              viewport={viewSettings}
              className="mx-auto mt-5 h-[4px] w-28 origin-center bg-[#c49655]"
            />

            <motion.p
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: smoothEase,
              }}
              viewport={viewSettings}
              className="mx-auto mt-8 max-w-4xl text-sm leading-7 text-[#4d5b70] md:text-xl md:leading-9"
            >
              Dedicated to spreading the light of Quranic knowledge through
              innovative online education that respects tradition while
              embracing technology.
            </motion.p>

          </div>

          <div
            className="flex flex-wrap justify-center gap-6"
            style={{ perspective: "1200px" }}
          >

            {missionCards.map((card, index) => {
              const Icon = card.icon;

              let cardInitial = {};

              if (index === 0) {
                cardInitial = {
                  opacity: 0,
                  x: -120,
                };
              }

              if (index === 1) {
                cardInitial = {
                  opacity: 0,
                  scale: 0.65,
                };
              }

              if (index === 2) {
                cardInitial = {
                  opacity: 0,
                  x: 120,
                };
              }

              if (index === 3) {
                cardInitial = {
                  opacity: 0,
                  scale: 0.65,
                };
              }

              if (index === 4) {
                cardInitial = {
                  opacity: 0,
                  rotateX: -100,
                };
              }

              if (index === 5) {
                cardInitial = {
                  opacity: 0,
                  scale: 0.65,
                };
              }

              return (
                <div
                  key={index}
                  className="w-full sm:w-[47%] lg:w-[31.5%]"
                  style={{
                    perspective: "1000px",
                  }}
                >

                  <motion.div
                    initial={cardInitial}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                      rotateX: 0,
                    }}
                    transition={{
                      duration: 0.75,
                      delay: 0,
                      ease: smoothEase,
                    }}
                    viewport={viewSettings}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin:
                        index === 4
                          ? "top center"
                          : "center center",
                      backfaceVisibility: "hidden",
                      willChange: "transform, opacity",
                    }}
                    className="group relative w-full overflow-hidden rounded-2xl border border-[#ece0c5] bg-white p-7 shadow-md transition-shadow duration-300 hover:shadow-xl"
                  >

                    <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[80px] bg-[#f9fcf3]" />

                    <div className="relative">

                      <motion.div
                        whileHover={{
                          rotate: 360,
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.7,
                          ease: "easeInOut",
                        }}
                        className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f7f9e9] text-xl text-[#aa7f3f] transition-all duration-300 group-hover:bg-[#aa7f3f] group-hover:text-white"
                      >
                        <Icon />
                      </motion.div>

                      <h3 className="mt-6 text-xl font-bold text-[#1c2736]">
                        {card.title}
                      </h3>

                      <p className="mt-4 text-sm leading-6 text-gray-600">
                        {card.text}
                      </p>

                      {/* MISSION POINTS */}

                      <div className="mt-6 flex flex-col gap-3">

                        {card.points.map((point, pointIndex) => (
                          <motion.div
                            key={pointIndex}
                            initial={{
                              opacity: 0,
                              x: -45,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              duration: 0.9,
                              delay: pointIndex * 0.15,
                              ease: smoothEase,
                            }}
                            viewport={viewSettings}
                            className="flex items-center gap-3 text-sm text-gray-700"
                          >

                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#b48643] text-white">
                              <FaCheckCircle className="text-xs" />
                            </span>

                            <span>{point}</span>

                          </motion.div>
                        ))}

                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}

          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            {[
              {
                icon: FaUserGraduate,
                number: "5,000+",
                text: "Students Enrolled",
              },
              {
                icon: FaChalkboardTeacher,
                number: "50+",
                text: "Certified Teachers",
              },
              {
                icon: FaMapMarkerAlt,
                number: "15+",
                text: "Countries Served",
              },
              {
                icon: FaSmile,
                number: "99%",
                text: "Satisfaction Rate",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.65,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: smoothEase,
                  }}
                  viewport={viewSettings}
                  className="w-full rounded-2xl bg-white p-7 text-center shadow-md transition-all duration-300 hover:shadow-lg sm:w-[47%] lg:w-[23%]"
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f7fbe9] text-xl text-[#19825b]">
                    <Icon />
                  </div>

                  <h3 className="mt-5 text-3xl font-bold text-[#ad8242]">
                    {item.number}
                  </h3>

                  <p className="mt-1 text-sm text-gray-600">
                    {item.text}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          OUR VISION
      ===================================================== */}

      <section className="bg-[#f8f1df] px-4 py-14 md:px-8 md:py-16">

        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">

            <div className="mx-auto mb-3 flex justify-center">
              <span className="h-[3px] w-28 bg-gradient-to-r from-[#b38a4b] to-[#e3c889]" />
            </div>

            <AnimatedHeading className="font-serif text-3xl font-bold text-[#ad8a4f] md:text-5xl">
              Our Vision
            </AnimatedHeading>

            <AnimatedParagraph className="mx-auto mt-5 max-w-5xl rounded-xl bg-white/70 px-6 py-4 text-sm font-medium leading-7 text-[#ad8a4f] md:text-base">
              Our vision is to make the Holy Quran accessible to every Muslim
              around the globe, regardless of age, location, or background. We
              aim to connect students with qualified Quran teachers who guide
              them with love, patience, and authentic knowledge.
            </AnimatedParagraph>

          </div>

          <div className="flex flex-wrap justify-center gap-6">

            {visionCards.map((card, index) => {
              const Icon = card.icon;

              let visionInitial = {};

              if (index === 0) {
                visionInitial = {
                  opacity: 0,
                  x: -120,
                };
              }

              if (index === 1) {
                visionInitial = {
                  opacity: 0,
                  scale: 0.75,
                };
              }

              if (index === 2) {
                visionInitial = {
                  opacity: 0,
                  x: 120,
                };
              }

              return (
                <motion.div
                  key={index}
                  initial={visionInitial}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: index === 1 ? 0.45 : 0.7,
                    delay: 0,
                    ease: smoothEase,
                  }}
                  viewport={viewSettings}
                  className="group relative w-full rounded-2xl border-2 border-[#c5a667] bg-white px-7 pb-8 pt-10 text-center shadow-md transition-all duration-300 hover:shadow-xl sm:w-[47%] lg:w-[31%]"
                >

                  {card.featured && (
                    <span className="absolute right-0 top-0 rounded-bl-xl rounded-tr-xl bg-[#ad8a4f] px-4 py-2 text-xs font-semibold text-white">
                      Featured
                    </span>
                  )}

                  <span className="absolute left-6 top-7 h-4 w-4 rounded-full border-4 border-[#b8955b]" />

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#b28b50] to-[#e1c27f] text-3xl text-white shadow-md">
                    <Icon />
                  </div>

                  <div className="mt-6 flex justify-center gap-1 text-sm text-[#b18b52]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <h3 className="mt-5 font-serif text-2xl font-bold text-[#aa874f]">
                    {card.title}
                  </h3>

                  <div className="mx-auto mt-2 h-[2px] w-14 bg-[#b28b50]" />

                  <p className="mt-5 text-sm leading-7 text-[#a58a5b]">
                    {card.text}
                  </p>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#654e39] via-[#927650] to-[#b28e5c] px-4 py-14 md:px-8 md:py-16">

        <div className="absolute left-10 top-10 h-28 w-28 rounded-full bg-white/5" />

        <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-white/5" />

        <div className="relative z-10 mx-auto max-w-6xl">

          <div className="mb-10 text-center text-white">

            <AnimatedHeading className="text-3xl font-bold text-white md:text-5xl">
              What Our Students Say
            </AnimatedHeading>

            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease: smoothEase,
              }}
              viewport={viewSettings}
              className="mt-4 flex items-center justify-center gap-4"
            >

              <span className="h-[2px] w-20 bg-[#c59b54]" />

              <span className="text-sm font-medium uppercase tracking-[2px]">
                Student Testimonials
              </span>

              <span className="h-[2px] w-20 bg-[#c59b54]" />

            </motion.div>

          </div>

          <TestimonialSlider />

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#fffdf9] px-4 py-12 md:px-8 md:py-16">

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#b38a49] to-[#d1a55f] p-8 shadow-xl md:p-10">

          <div className="flex flex-col items-center justify-between gap-7 md:flex-row">

            <motion.div
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                ease: smoothEase,
              }}
              viewport={viewSettings}
              className="text-center md:text-left"
            >

              <div className="mb-3 flex items-center justify-center gap-3 md:justify-start">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-xl text-white">
                  <FaBookOpen />
                </div>

                <span className="text-xs font-semibold uppercase tracking-[2px] text-white/80">
                  Start Your Journey
                </span>

              </div>

              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Ready to Start Your Quran
                <span className="block">Learning Journey?</span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/85">
                ⭐Join hundreds of satisfied students⭐
              </p>

            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0,
                ease: smoothEase,
              }}
              viewport={viewSettings}
              className="shrink-0"
            >

              <Link
                to="/contact"
                className="flex items-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#a57d40] shadow-lg transition-all duration-300 hover:bg-[#fff9ec] hover:shadow-xl"
              >
                Contact Us
                <FaArrowRight />
              </Link>

            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}