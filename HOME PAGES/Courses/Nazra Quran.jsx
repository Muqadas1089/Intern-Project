import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import image1 from "../../src/assets/Noran1.jpg";

const NazraQuran = () => {

  const [activeSection, setActiveSection] = useState("learn");

  useEffect(() => {

    const handleScroll = () => {

      const learn = document.getElementById("learn");
      const benefits = document.getElementById("benefits");
      const material = document.getElementById("material");

      const scrollPosition = window.scrollY + 250;

      if (
        material &&
        scrollPosition >= material.offsetTop
      ) {
        setActiveSection("material");
      }
      else if (
        benefits &&
        scrollPosition >= benefits.offsetTop
      ) {
        setActiveSection("benefits");
      }
      else if (
        learn &&
        scrollPosition >= learn.offsetTop
      ) {
        setActiveSection("learn");
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  return (
    <div className="bg-white">

      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}

      <section className="relative h-[630px] overflow-hidden">

        {/* Background Image */}
        <img
          src={image1}
          alt="Nazra Quran"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Hero Content */}
        <div className="relative flex h-full items-center justify-center px-10">

          <div className="text-center">

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-sans text-6xl font-bold leading-tight text-white"
            >
              Learn{" "}

              <span className="text-[#B99152]">
                Nazra Quran
              </span>{" "}

              with

              <br />

              Tajweed
            </motion.h1>


            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto mt-5 max-w-3xl font-sans text-xl leading-8 text-white"
            >
              Begin your journey to recite the Holy Quran beautifully and
              accurately with expert tutors guiding you step-by-step.
            </motion.p>


            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 flex justify-center gap-5"
            >

              {/* Start Free Trial */}
              <Link
                to="/contact"
                className="flex h-14 items-center justify-center rounded-full border-2 border-[#009E6F] bg-[#009E6F] px-9 font-sans text-base font-medium text-white transition duration-300 hover:scale-105 hover:bg-transparent hover:text-[#009E6F]"
              >
                Start Free Trial
              </Link>


              {/* View Course Details */}
              <Link
                to="/Services"
                className="flex h-14 items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-9 font-sans text-base font-medium text-white transition duration-300 hover:scale-105 hover:border-[#B99152] hover:text-[#B99152]"
              >
                <FaPlayCircle className="text-lg" />

                View Course Details
              </Link>

            </motion.div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* SECOND PORTION */}
      {/* ================================================= */}

      <section className="px-8 py-12">

        <div className="mx-auto flex max-w-[1450px] gap-8">


          {/* ============================================= */}
          {/* LEFT SIDEBAR */}
          {/* ============================================= */}

          <div className="w-[270px] flex-shrink-0">

            <div className="sticky top-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">

              {/* Sidebar Heading */}
              <h2 className="font-sans text-xl font-bold text-[#087255]">
                Course Sections
              </h2>

              {/* Green Line */}
              <div className="mt-3 h-[1px] w-full bg-[#087255]"></div>


              {/* Introduction */}
              <div className="mt-5 px-4 py-3 font-sans text-base font-medium text-[#26344A]">
                Introduction
              </div>


              {/* What You'll Learn */}
              <button
                onClick={() => {
                  document
                    .getElementById("learn")
                    .scrollIntoView({ behavior: "smooth" });

                  setActiveSection("learn");
                }}
                className={`mt-1 w-full rounded-lg px-4 py-3 text-left font-sans text-base font-medium transition duration-300 ${
                  activeSection === "learn"
                    ? "border-l-4 border-[#087255] bg-[#E5F4EF] text-[#087255]"
                    : "text-[#26344A] hover:bg-[#F3F8F6]"
                }`}
              >
                What You'll Learn
              </button>


              {/* Benefits */}
              <button
                onClick={() => {
                  document
                    .getElementById("benefits")
                    .scrollIntoView({ behavior: "smooth" });

                  setActiveSection("benefits");
                }}
                className={`mt-1 w-full rounded-lg px-4 py-3 text-left font-sans text-base font-medium transition duration-300 ${
                  activeSection === "benefits"
                    ? "border-l-4 border-[#087255] bg-[#E5F4EF] text-[#087255]"
                    : "text-[#26344A] hover:bg-[#F3F8F6]"
                }`}
              >
                Benefits
              </button>


              {/* Course Material */}
              <button
                onClick={() => {
                  document
                    .getElementById("material")
                    .scrollIntoView({ behavior: "smooth" });

                  setActiveSection("material");
                }}
                className={`mt-1 w-full rounded-lg px-4 py-3 text-left font-sans text-base font-medium transition duration-300 ${
                  activeSection === "material"
                    ? "border-l-4 border-[#087255] bg-[#E5F4EF] text-[#087255]"
                    : "text-[#26344A] hover:bg-[#F3F8F6]"
                }`}
              >
                Course Material
              </button>

            </div>

          </div>


          {/* ============================================= */}
          {/* RIGHT CONTENT */}
          {/* ============================================= */}

          <div className="flex-1">


            {/* ========================================= */}
            {/* WHAT YOU'LL LEARN */}
            {/* ========================================= */}

            <motion.div
              id="learn"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-gray-200 bg-white px-7 py-7 shadow-sm"
            >

              <h2 className="font-sans text-2xl font-bold text-[#087255]">
                What You'll Learn
              </h2>

              <ul className="mt-4 list-disc space-y-3 pl-6 font-sans text-base leading-6 text-[#26344A]">

                <li>
                  Recognize and pronounce Arabic letters accurately
                </li>

                <li>
                  Understand the rules of Tajweed for better recitation
                </li>

                <li>
                  Read short Surahs with confidence and fluency
                </li>

                <li>
                  Improve accuracy through guided listening and practice
                </li>

              </ul>

            </motion.div>


            {/* ========================================= */}
            {/* BENEFITS */}
            {/* ========================================= */}

            <motion.div
              id="benefits"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-10 rounded-2xl border border-gray-200 bg-white px-7 py-7 shadow-sm"
            >

              <h2 className="font-sans text-2xl font-bold text-[#087255]">
                Benefits
              </h2>

              <ul className="mt-4 list-disc space-y-3 pl-6 font-sans text-base leading-6 text-[#26344A]">

                <li>
                  Gain confidence in Quran recitation
                </li>

                <li>
                  Learn at your own pace with personalized feedback
                </li>

                <li>
                  Structured journey from alphabets to fluent recitation
                </li>

                <li>
                  24/7 access to learning resources and tutor support
                </li>

              </ul>

            </motion.div>


            {/* ========================================= */}
            {/* COURSE MATERIAL */}
            {/* ========================================= */}

            <motion.div
              id="material"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-10 rounded-2xl border border-gray-200 bg-white px-7 py-7 shadow-sm"
            >

              <h2 className="font-sans text-2xl font-bold text-[#087255]">
                Course Material
              </h2>

              <p className="mt-4 font-sans text-base leading-7 text-[#26344A]">
                Students receive a full learning package designed to build
                skills gradually and effectively. Materials are available
                online and downloadable for offline review.
              </p>


              <ul className="mt-4 list-disc space-y-3 pl-6 font-sans text-base leading-6 text-[#26344A]">

                <li>
                  Lesson PDFs with visual guides
                </li>

                <li>
                  Audio recitations for pronunciation practice
                </li>

                <li>
                  Short video demonstrations
                </li>

                <li>
                  Practice worksheets and mini-quizzes
                </li>

              </ul>

            </motion.div>


          </div>

        </div>

      </section>

    </div>
  );
};

export default NazraQuran;