
import React, { useState } from "react";
import { motion } from "framer-motion";
import t1 from "../src/assets/t1.jpg";
import t2 from "../src/assets/t2.jpg";
import t3 from "../src/assets/t3.jpg";

import {
  FaVideo,
  FaBookOpen,
  FaCheckCircle,
  FaTimesCircle,
  FaWhatsapp,
} from "react-icons/fa";

/* =========================================================
   EXAMPLE VIDEOS
========================================================= */

const exampleVideos = [
  {
    title: "Islamic Studies Instructor",
    description:
      "Our teachers demonstrate a calm, confident, and respectful approach. Speak slowly and clearly while maintaining eye contact with the camera. Begin with a short introduction and highlight your experience in teaching Islamic Studies.",
    image: t2,
    position: "left",
    borderColor: "green",
  },

  {
    title: "Qur’an Teacher",
    description:
      "Present yourself with warmth and professionalism. Begin with the greeting “Assalamu Alaikum,” mention your qualifications, and showcase your fluency in Qur’an recitation. Keep the tone humble, and use a simple, distraction-free background.",
    image: t3,
    position: "right",
    borderColor: "gold",
  },
];

/* =========================================================
   SIMPLE ANIMATION
========================================================= */

const simpleAnimation = {
  initial: {
    opacity: 0,
    y: 50,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  transition: {
    duration: 0.6,
  },

  viewport: {
    once: true,
  },
};

/* =========================================================
   INPUT FIELD
========================================================= */

const InputField = ({
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}) => {
  return (
    <motion.div
      initial={simpleAnimation.initial}
      whileInView={simpleAnimation.whileInView}
      transition={simpleAnimation.transition}
      viewport={simpleAnimation.viewport}
      className="flex w-full flex-col gap-2"
    >
      <label className="text-[15px] font-medium text-gray-800">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="
          h-[55px]
          w-full
          rounded-[10px]
          border
          border-gray-300
          bg-white
          px-[18px]
          text-[16px]
          text-gray-800
          outline-none
          transition
          duration-300
          placeholder:text-gray-400
          focus:border-[#16865d]
          focus:ring-2
          focus:ring-[#16865d]/10
        "
      />
    </motion.div>
  );
};

/* =========================================================
   FILE FIELD
========================================================= */

const FileField = ({
  label,
  name,
  accept,
  onChange,
}) => {
  return (
    <motion.div
      initial={simpleAnimation.initial}
      whileInView={simpleAnimation.whileInView}
      transition={simpleAnimation.transition}
      viewport={simpleAnimation.viewport}
      className="flex w-full flex-col gap-2"
    >
      <label className="text-[15px] font-medium text-gray-800">
        {label}
      </label>

      <input
        type="file"
        name={name}
        accept={accept}
        onChange={onChange}
        required
        className="
          h-[55px]
          w-full
          cursor-pointer
          rounded-[10px]
          border
          border-gray-300
          bg-white
          px-[14px]
          py-[14px]
          text-[15px]
          text-gray-700
          outline-none
          transition
          duration-300
          file:mr-4
          file:cursor-pointer
          file:border-0
          file:bg-transparent
          file:text-[15px]
          file:font-medium
          file:text-gray-800
          focus:border-[#16865d]
        "
      />
    </motion.div>
  );
};

/* =========================================================
   TEACHERS PAGE
========================================================= */

const Teachers = () => {

  /* =======================================================
     FORM DATA
  ======================================================= */

  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    whatsapp: "",
    email: "",
    address: "",
    country: "",
    education: "",
    specialization: "",
    experience: "",
    introVideo: "",
    gender: "",
    about: "",
  });

  /* =======================================================
     FORM SUBMITTED
  ======================================================= */

  const [isSubmitted, setIsSubmitted] = useState(false);

  /* =======================================================
     COURSES
  ======================================================= */

  const [courses, setCourses] = useState([]);

  /* =======================================================
     FILES
  ======================================================= */

  const [files, setFiles] = useState({
    certificate: null,
    cnic: null,
    cv: null,
  });

  /* =======================================================
     INPUT CHANGE
  ======================================================= */

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /* =======================================================
     COURSE CHANGE
  ======================================================= */

  const handleCourseChange = (course) => {

    if (courses.includes(course)) {

      const newCourses = courses.filter(
        (item) => item !== course
      );

      setCourses(newCourses);

    } else {

      setCourses([...courses, course]);

    }
  };

  /* =======================================================
     FILE CHANGE
  ======================================================= */

  const handleFileChange = (e) => {
    const name = e.target.name;
    const selectedFile = e.target.files[0];

    setFiles({
      ...files,
      [name]: selectedFile || null,
    });
  };

  /* =======================================================
     FORM SUBMIT
  ======================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    /* COURSE VALIDATION */

    if (courses.length === 0) {
      alert("Please select at least one course.");
      return;
    }

    /* FORM DATA */

    console.log("Teacher Application:", {
      ...formData,
      courses,
      files,
    });

    /* SUCCESS */

    setIsSubmitted(true);
  };

  return (
    <main className="m-0 w-full overflow-hidden bg-[#fdfdfd] p-0 text-gray-800">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section
        className="
          relative
          m-0
          flex
          min-h-[350px]
          w-full
          items-center
          justify-center
          bg-cover
          bg-center
        "
        style={{
          backgroundImage:`linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.58)), url(${t1})`,
        }}
      >

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
          }}
          className="px-5 text-center"
        >

          <h1
            className="
              text-[40px]
              font-bold
              tracking-wide
              text-[#c49b55]
              sm:text-[48px]
              md:text-[54px]
            "
          >
            Become a Teacher
          </h1>

        </motion.div>

      </section>

      {/* =====================================================
          REQUIREMENTS SECTION
      ===================================================== */}

      <section className="m-0 w-full bg-white px-5 py-[55px] sm:px-8 md:px-12 lg:px-16">

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            mx-auto
            max-w-[900px]
            text-center
            text-[18px]
            leading-[1.8]
            text-[#176f55]
            sm:text-[20px]
          "
        >
          Join our global teaching community and inspire students around the
          world. Complete the following requirements to begin your journey with
          us.
        </motion.p>

        <div
          className="
            mx-auto
            mt-[42px]
            flex
            w-full
            max-w-[1080px]
            flex-col
            gap-[28px]
            md:flex-row
          "
        >

          {/* VIDEO REQUIREMENT */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="
              flex
              min-h-[300px]
              w-full
              flex-col
              items-center
              rounded-[18px]
              bg-white
              px-7
              py-8
              text-center
              shadow-[0_8px_30px_rgba(0,0,0,0.07)]
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_15px_35px_rgba(0,0,0,0.10)]
              md:w-1/2
            "
          >

            <div
              className="
                flex
                h-[80px]
                w-[80px]
                items-center
                justify-center
                rounded-full
                bg-[#e8f4ef]
                text-[#16865d]
              "
            >
              <FaVideo className="text-[34px]" />
            </div>

            <h2 className="mt-6 text-[23px] font-semibold text-[#16865d]">
              Prepare a Video Introduction
            </h2>

            <p className="mt-5 max-w-[430px] text-[16px] leading-[1.8] text-gray-600">
              Intl requires a short video introduction to showcase your
              teaching style and personality. This helps students know their
              teacher before starting lessons.
            </p>

          </motion.div>

          {/* CERTIFICATION REQUIREMENT */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="
              flex
              min-h-[300px]
              w-full
              flex-col
              items-center
              rounded-[18px]
              bg-white
              px-7
              py-8
              text-center
              shadow-[0_8px_30px_rgba(0,0,0,0.07)]
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_15px_35px_rgba(0,0,0,0.10)]
              md:w-1/2
            "
          >

            <div
              className="
                flex
                h-[80px]
                w-[80px]
                items-center
                justify-center
                rounded-full
                bg-[#e8f4ef]
                text-[#16865d]
              "
            >
              <FaBookOpen className="text-[36px]" />
            </div>

            <h2 className="mt-6 text-[23px] font-semibold text-[#16865d]">
              Teaching Certifications
            </h2>

            <p className="mt-5 max-w-[430px] text-[16px] leading-[1.8] text-gray-600">
              Intl requires valid teaching certifications to ensure quality
              education and maintain high standards across our teaching
              community.
            </p>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          EXAMPLE VIDEOS
      ===================================================== */}

      <section className="m-0 w-full bg-white px-5 pb-[75px] sm:px-8 md:px-12 lg:px-16">

        <div className="mx-auto w-full max-w-[1080px]">

          <motion.h2
            initial={{
              opacity: 0,
              x: -70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="
              inline-block
              border-b-[5px]
              border-[#b48b4d]
              pb-1
              text-[30px]
              font-semibold
              text-[#16865d]
              sm:text-[34px]
            "
          >
            Example Videos
          </motion.h2>

          <div className="mt-[38px] flex w-full flex-col gap-[70px]">

            {exampleVideos.map((video) => {

              const isLeftImage = video.position === "left";

              return (
                <div
                  key={video.title}
                  className={`
                    flex
                    w-full
                    flex-col
                    overflow-hidden
                    rounded-[20px]
                    bg-white
                    shadow-[0_8px_28px_rgba(0,0,0,0.08)]
                    ${
                      video.borderColor === "green"
                        ? "border-t-[6px] border-[#16865d]"
                        : "border-t-[6px] border-[#b48b4d]"
                    }
                    md:flex-row
                    ${isLeftImage ? "" : "md:flex-row-reverse"}
                  `}
                >

                  {/* TEXT */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isLeftImage ? 70 : -70,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="
                      flex
                      w-full
                      flex-col
                      justify-center
                      px-[25px]
                      py-[35px]
                      md:w-1/2
                      md:px-[35px]
                      lg:px-[40px]
                    "
                  >

                    <h3
                      className={`
                        text-[22px]
                        font-semibold
                        ${
                          video.borderColor === "green"
                            ? "text-[#16865d]"
                            : "text-[#b48b4d]"
                        }
                        sm:text-[25px]
                      `}
                    >
                      {video.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        text-[16px]
                        leading-[1.75]
                        text-gray-600
                        sm:text-[17px]
                      "
                    >
                      {video.description}
                    </p>

                  </motion.div>

                  {/* IMAGE */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isLeftImage ? -70 : 70,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="h-[300px] w-full md:h-auto md:w-1/2"
                  >

                    <img
                      src={video.image}
                      alt={video.title}
                      className="h-full min-h-[300px] w-full object-cover"
                    />

                  </motion.div>

                </div>
              );
            })}

          </div>
        </div>

      </section>

      {/* =====================================================
          GUIDELINES
      ===================================================== */}

      <section className="m-0 w-full bg-[#fafafa] px-5 py-[65px] sm:px-8 md:px-12 lg:px-16">

        <div className="mx-auto w-full max-w-[1080px]">

          <motion.h2
            initial={{
              opacity: 0,
              x: -70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="
              inline-block
              border-b-[5px]
              border-[#b48b4d]
              pb-1
              text-[30px]
              font-semibold
              text-[#16865d]
              sm:text-[34px]
            "
          >
            Guidelines
          </motion.h2>

          <div className="mt-[42px] flex w-full flex-col gap-[28px] md:flex-row">

            {/* DO */}

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
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
              className="
                w-full
                rounded-[20px]
                border-t-[5px]
                border-[#16865d]
                bg-white
                px-[30px]
                py-[35px]
                shadow-[0_7px_22px_rgba(0,0,0,0.07)]
                md:w-1/2
              "
            >

              <div className="flex items-center justify-center gap-3">

                <FaCheckCircle className="text-[30px] text-[#16865d]" />

                <h3 className="text-[25px] font-medium text-[#16865d]">
                  DO
                </h3>

              </div>

              <div className="mt-7 flex flex-col gap-5">

                <div className="flex items-start gap-3">
                  <span className="mt-[2px] text-[20px] font-semibold text-green-500">
                    ✓
                  </span>

                  <p className="text-[16px] leading-[1.6] text-gray-700">
                    Appear clearly in your video (face visible).
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-[2px] text-[20px] font-semibold text-green-500">
                    ✓
                  </span>

                  <p className="text-[16px] leading-[1.6] text-gray-700">
                    Duration should be between 1–3 minutes.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-[2px] text-[20px] font-semibold text-green-500">
                    ✓
                  </span>

                  <p className="text-[16px] leading-[1.6] text-gray-700">
                    Speak all the languages you plan to teach.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-[2px] text-[20px] font-semibold text-green-500">
                    ✓
                  </span>

                  <p className="text-[16px] leading-[1.6] text-gray-700">
                    Ensure good lighting and clarity.
                  </p>
                </div>

              </div>

            </motion.div>

            {/* DO NOT */}

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
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
              className="
                w-full
                rounded-[20px]
                border-t-[5px]
                border-[#df2044]
                bg-white
                px-[30px]
                py-[35px]
                shadow-[0_7px_22px_rgba(0,0,0,0.07)]
                md:w-1/2
              "
            >

              <div className="flex items-center justify-center gap-3">

                <FaTimesCircle className="text-[30px] text-[#df2044]" />

                <h3 className="text-[25px] font-medium text-[#df2044]">
                  DO NOT
                </h3>

              </div>

              <div className="mt-7 flex flex-col gap-5">

                <div className="flex items-start gap-3">
                  <span className="mt-[2px] text-[20px] font-semibold text-[#df2044]">
                    X
                  </span>

                  <p className="text-[16px] leading-[1.6] text-gray-700">
                    Share personal contact details.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-[2px] text-[20px] font-semibold text-[#df2044]">
                    X
                  </span>

                  <p className="text-[16px] leading-[1.6] text-gray-700">
                    Advertise or promote other services.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-[2px] text-[20px] font-semibold text-[#df2044]">
                    X
                  </span>

                  <p className="text-[16px] leading-[1.6] text-gray-700">
                    Use copyrighted background music.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-[2px] text-[20px] font-semibold text-[#df2044]">
                    X
                  </span>

                  <p className="text-[16px] leading-[1.6] text-gray-700">
                    Record vertical or square videos.
                  </p>
                </div>

              </div>

            </motion.div>

          </div>
        </div>

      </section>

      {/* =====================================================
          APPLICATION FORM
      ===================================================== */}

      <section
        className="
          m-0
          w-full
          bg-white
          px-5
          py-[65px]
          sm:px-8
          md:px-12
          lg:px-16
        "
      >

        <form
          onSubmit={handleSubmit}
          className="
            mx-auto
            w-full
            max-w-[1080px]
            rounded-[25px]
            border-t-[10px]
            border-[#16865d]
            bg-white
            px-[25px]
            py-[45px]
            shadow-[0_10px_35px_rgba(184,145,75,0.22)]
            sm:px-[40px]
            md:px-[55px]
            lg:px-[70px]
          "
        >

          <h2
            className="
              text-center
              text-[32px]
              font-bold
              text-[#16865d]
              sm:text-[38px]
            "
          >
            Teacher Application Form
          </h2>

          {/* BASIC INFORMATION */}

          <div className="mt-[55px] flex flex-col gap-[35px]">

            {/* ROW 1 */}

            <div className="flex w-full flex-col gap-[25px] md:flex-row">

              <InputField
                label="Full Name"
                placeholder="Enter your full name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
              />

              <InputField
                label="Father Name"
                placeholder="Enter your father's name"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
              />

              <InputField
                label="Your WhatsApp"
                placeholder="03xx-xxxxxxx"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
              />

            </div>

            {/* ROW 2 */}

            <div className="flex w-full flex-col gap-[25px] md:flex-row">

              <InputField
                label="Email"
                placeholder="example@gmail.com"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />

              <InputField
                label="Address"
                placeholder="Enter your address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />

              <InputField
                label="Country"
                placeholder="Enter your country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              />

            </div>

            {/* ROW 3 */}

            <div className="flex w-full flex-col gap-[25px] md:flex-row">

              <InputField
                label="Education"
                placeholder="Your highest qualification"
                name="education"
                value={formData.education}
                onChange={handleInputChange}
              />

              <InputField
                label="Specialization"
                placeholder="Your area of expertise"
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
              />

              <InputField
                label="Experience"
                placeholder="e.g., 3 years of Quran teaching"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
              />

            </div>

            {/* VIDEO LINK */}

            <InputField
              label="Intro Video Link (YouTube)"
              placeholder="Paste intro video link"
              name="introVideo"
              value={formData.introVideo}
              onChange={handleInputChange}
            />

            {/* COURSES */}

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
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
              className="flex w-full flex-col gap-4"
            >

              <label className="text-[15px] font-medium text-gray-800">
                Courses You Can Teach
              </label>

              <div className="flex w-full flex-wrap gap-x-[45px] gap-y-[18px]">

                <label className="flex cursor-pointer items-center gap-2 text-[15px] text-gray-700">

                  <input
                    type="checkbox"
                    checked={courses.includes("Nazra Quran Course")}
                    onChange={() =>
                      handleCourseChange("Nazra Quran Course")
                    }
                    className="h-4 w-4 accent-[#16865d]"
                  />

                  Nazra Quran Course

                </label>

                <label className="flex cursor-pointer items-center gap-2 text-[15px] text-gray-700">

                  <input
                    type="checkbox"
                    checked={courses.includes("Quran Recitation Course")}
                    onChange={() =>
                      handleCourseChange("Quran Recitation Course")
                    }
                    className="h-4 w-4 accent-[#16865d]"
                  />

                  Quran Recitation Course

                </label>

                <label className="flex cursor-pointer items-center gap-2 text-[15px] text-gray-700">

                  <input
                    type="checkbox"
                    checked={courses.includes("Quran Translation Course")}
                    onChange={() =>
                      handleCourseChange("Quran Translation Course")
                    }
                    className="h-4 w-4 accent-[#16865d]"
                  />

                  Quran Translation Course

                </label>

                <label className="flex cursor-pointer items-center gap-2 text-[15px] text-gray-700">

                  <input
                    type="checkbox"
                    checked={courses.includes("Quran Reading Course")}
                    onChange={() =>
                      handleCourseChange("Quran Reading Course")
                    }
                    className="h-4 w-4 accent-[#16865d]"
                  />

                  Quran Reading Course

                </label>

              </div>

            </motion.div>

            {/* GENDER */}

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
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
              className="flex w-full flex-col gap-3"
            >

              <label className="text-[15px] font-medium text-gray-800">
                Gender
              </label>

              <div className="flex items-center gap-8">

                <label className="flex cursor-pointer items-center gap-2 text-[15px] text-gray-700">

                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleInputChange}
                    required
                    className="h-4 w-4 accent-[#16865d]"
                  />

                  Male

                </label>

                <label className="flex cursor-pointer items-center gap-2 text-[15px] text-gray-700">

                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleInputChange}
                    className="h-4 w-4 accent-[#16865d]"
                  />

                  Female

                </label>

              </div>

            </motion.div>

            {/* FILE UPLOADS */}

            <div className="flex w-full flex-col gap-[25px] md:flex-row">

              <FileField
                label="Upload Certificate"
                name="certificate"
                accept=".png,.jpg,.jpeg,.pdf"
                onChange={handleFileChange}
              />

              <FileField
                label="Upload CNIC (png, jpg, pdf)"
                name="cnic"
                accept=".png,.jpg,.jpeg,.pdf"
                onChange={handleFileChange}
              />

              <FileField
                label="Upload CV (png, jpg, pdf)"
                name="cv"
                accept=".png,.jpg,.jpeg,.pdf"
                onChange={handleFileChange}
              />

            </div>

            {/* ABOUT */}

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
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
              className="flex w-full flex-col gap-2"
            >

              <label className="text-[15px] font-medium text-gray-800">
                Write About Yourself (100+ words)
              </label>

              <textarea
                name="about"
                value={formData.about}
                onChange={handleInputChange}
                placeholder="Describe your experience, goals, and personality..."
                rows="7"
                required
                className="
                  w-full
                  resize-y
                  rounded-[10px]
                  border
                  border-gray-300
                  bg-white
                  px-[18px]
                  py-[16px]
                  text-[16px]
                  leading-[1.6]
                  text-gray-800
                  outline-none
                  transition
                  duration-300
                  placeholder:text-gray-400
                  focus:border-[#16865d]
                  focus:ring-2
                  focus:ring-[#16865d]/10
                "
              />

            </motion.div>

            {/* SUBMIT BUTTON */}

            <div className="flex w-full justify-center pt-[10px]">

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  rounded-full
                  bg-[#168f61]
                  px-[45px]
                  py-[16px]
                  text-[17px]
                  font-medium
                  text-white
                  shadow-[0_8px_22px_rgba(22,143,97,0.25)]
                  transition
                  duration-300
                  hover:bg-[#117a52]
                "
              >

                {isSubmitted ? (
                  <>
                    <FaCheckCircle className="mr-2 inline" />
                    Submitted Successfully
                  </>
                ) : (
                  "Submit Application"
                )}

              </motion.button>

            </div>

          </div>

        </form>

      </section>

    </main>
  );
};

export default Teachers;
