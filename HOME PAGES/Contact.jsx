import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaGraduationCap,
  FaUser,
  FaUserTie,
  FaPhoneAlt,
  FaGlobe,
  FaClock,
  FaBook,
  FaPaperPlane,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("My team will connect you later.");
    }, 2000);
  };

  return (
    <section className="relative bg-white w-full m-0 p-0 pb-0 mb-0 overflow-hidden block">

      {/* ================= TOP CIRCLE ================= */}

      <div className="absolute -top-40 -left-32 w-72 h-72 bg-[#effcf7] rounded-full pointer-events-none"></div>


      {/* ================= TOP BUTTON ================= */}

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
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="flex justify-center pt-11"
      >
        <button
          className="
            bg-[#009f6b]
            text-white
            text-[18px]
            font-semibold
            px-8
            py-4
            rounded-full
            shadow-md
            flex
            items-center
            gap-3
            hover:bg-[#008c5f]
            transition
            duration-200
          "
        >
          <FaBook />
          Start Your Quran Journey
        </button>
      </motion.div>


      {/* ================= HEADING ================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
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
          duration: 0.8,
          delay: 0.1,
          ease: "easeOut",
        }}
        className="text-center mt-7 px-4"
      >
        <h1 className="text-[40px] md:text-[56px] font-bold text-[#111827] leading-tight">
          Contact <span className="text-[#009f6b]">Our Academy</span>
        </h1>

        <p className="text-[18px] md:text-[21px] text-gray-600 mt-3">
          Get in touch with our certified Quran teachers and start your spiritual
        </p>

        <p className="text-[18px] md:text-[21px] text-gray-600">
          learning journey today
        </p>
      </motion.div>


      {/* ================= MAIN CONTENT ================= */}

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-14 mt-12 px-4 max-w-[1300px] mx-auto">


        {/* ================= LEFT SIDE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="w-full lg:w-1/2 max-w-[600px]"
        >


          {/* ================= CALL US ================= */}

          <motion.a
            href="tel:+923006868033"
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
              duration: 0.65,
              ease: "easeOut",
            }}
            className="
              h-[125px]
              bg-white
              rounded-xl
              shadow-[0_7px_27px_rgba(0,0,0,0.10)]
              border-l-[3px]
              border-[#b77d32]
              px-7
              flex
              items-center
              gap-6
              mb-6
              transition
              duration-200
              hover:scale-[1.02]
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]
              cursor-pointer
            "
          >
            <div className="w-14 h-14 rounded-xl bg-[#b6813b] flex items-center justify-center text-white shrink-0">
              <FaPhone className="text-xl" />
            </div>

            <div>
              <h3 className="text-[18px] font-bold text-gray-900">
                Call Us
              </h3>

              <p className="text-[18px] text-[#009f6b] font-medium">
                +92 300 6868033
              </p>

              <p className="text-[13px] text-gray-500">
                Available 24/7 for your queries
              </p>
            </div>
          </motion.a>


          {/* ================= WHATSAPP ================= */}

          <motion.a
            href="https://wa.me/923006868033"
            target="_blank"
            rel="noopener noreferrer"
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
              duration: 0.65,
              delay: 0.12,
              ease: "easeOut",
            }}
            className="
              h-[125px]
              bg-white
              rounded-xl
              shadow-[0_7px_27px_rgba(0,0,0,0.10)]
              border-l-[3px]
              border-[#b77d32]
              px-7
              flex
              items-center
              gap-6
              mb-6
              transition
              duration-200
              hover:scale-[1.02]
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]
              cursor-pointer
            "
          >
            <div className="w-14 h-14 rounded-xl bg-[#b6813b] flex items-center justify-center text-white shrink-0">
              <FaWhatsapp className="text-xl" />
            </div>

            <div>
              <h3 className="text-[18px] font-bold text-gray-900">
                WhatsApp
              </h3>

              <p className="text-[18px] text-[#009f6b] font-medium">
                +92 300 6868033
              </p>

              <p className="text-[13px] text-gray-500">
                Quick response within minutes
              </p>
            </div>
          </motion.a>


          {/* ================= EMAIL ================= */}

          <motion.a
            href="mailto:info@a-hafiz.com"
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
              duration: 0.65,
              delay: 0.24,
              ease: "easeOut",
            }}
            className="
              h-[125px]
              bg-white
              rounded-xl
              shadow-[0_7px_27px_rgba(0,0,0,0.10)]
              border-l-[3px]
              border-[#b77d32]
              px-7
              flex
              items-center
              gap-6
              mb-8
              transition
              duration-200
              hover:scale-[1.02]
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]
              cursor-pointer
            "
          >
            <div className="w-14 h-14 rounded-xl bg-[#b6813b] flex items-center justify-center text-white shrink-0">
              <FaEnvelope className="text-xl" />
            </div>

            <div>
              <h3 className="text-[18px] font-bold text-gray-900">
                Email Us
              </h3>

              <p className="text-[18px] text-[#009f6b] font-medium">
                info@a-hafiz.com
              </p>

              <p className="text-[13px] text-gray-500">
                We reply within 2 hours
              </p>
            </div>
          </motion.a>


          {/* ================= SMALL CARDS ROW 1 ================= */}

          <div className="flex gap-6 mb-6">

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
                duration: 0.6,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="w-1/2 h-[120px] bg-white rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center transition duration-200 hover:scale-[1.03] cursor-pointer text-center p-2"
            >
              <div className="w-11 h-11 bg-[#fff1c7] rounded-lg flex items-center justify-center text-[#b6813b] mb-2">
                <FaUserTie className="text-base" />
              </div>

              <h4 className="text-[15px] font-semibold text-gray-800">
                Certified Teachers
              </h4>

              <p className="text-[11px] text-gray-500">
                Learn from qualified Islamic scholars
              </p>
            </motion.div>


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
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="w-1/2 h-[120px] bg-white rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center transition duration-200 hover:scale-[1.03] cursor-pointer text-center p-2"
            >
              <div className="w-11 h-11 bg-[#fff1c7] rounded-lg flex items-center justify-center text-[#b6813b] mb-2">
                <FaClock className="text-base" />
              </div>

              <h4 className="text-[15px] font-semibold text-gray-800">
                24/7 Available
              </h4>

              <p className="text-[11px] text-gray-500">
                Flexible timing for all students
              </p>
            </motion.div>

          </div>


          {/* ================= SMALL CARDS ROW 2 ================= */}

          <div className="flex gap-6">

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
                duration: 0.6,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="w-1/2 h-[120px] bg-white rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center transition duration-200 hover:scale-[1.03] cursor-pointer text-center p-2"
            >
              <div className="w-11 h-11 bg-[#fff1c7] rounded-lg flex items-center justify-center text-[#b6813b] mb-2">
                <FaShieldAlt className="text-base" />
              </div>

              <h4 className="text-[15px] font-semibold text-gray-800">
                Safe Environment
              </h4>

              <p className="text-[11px] text-gray-500">
                Secure and comfortable learning
              </p>
            </motion.div>


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
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="w-1/2 h-[120px] bg-white rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center transition duration-200 hover:scale-[1.03] cursor-pointer text-center p-2"
            >
              <div className="w-11 h-11 bg-[#fff1c7] rounded-lg flex items-center justify-center text-[#b6813b] mb-2">
                <FaStar className="text-base" />
              </div>

              <h4 className="text-[15px] font-semibold text-gray-800">
                5-Star Rating
              </h4>

              <p className="text-[11px] text-gray-500">
                Highly rated by 1000+ students
              </p>
            </motion.div>

          </div>

        </motion.div>


        {/* ================= RIGHT FORM ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="w-full lg:w-1/2 max-w-[600px] bg-white rounded-3xl shadow-[0_12px_38px_rgba(0,0,0,0.14)] px-6 sm:px-9 py-9"
        >

          <div className="flex justify-center">
            <div className="w-[82px] h-[82px] bg-[#b6813b] rounded-2xl flex items-center justify-center text-white">
              <FaGraduationCap className="text-4xl" />
            </div>
          </div>

          <h2 className="text-center text-[30px] font-bold text-[#008f62] mt-4">
            Get Free Trial
          </h2>

          <p className="text-center text-[14px] text-gray-600 mt-2">
            Fill the form below to get your first free Quran class
          </p>


          <form onSubmit={handleSubmit}>

            {/* NAME */}

            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <div className="w-full sm:w-1/2 relative">

                <FaUser className="absolute left-4 top-5 text-gray-400 text-sm" />

                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full h-[58px] border border-gray-300 rounded-lg pl-10 pr-3 text-[14px] outline-none focus:border-[#009f6b]"
                />

              </div>


              <div className="w-full sm:w-1/2 relative">

                <FaUserTie className="absolute left-4 top-5 text-gray-400 text-sm" />

                <input
                  type="text"
                  placeholder="Father's Name"
                  required
                  className="w-full h-[58px] border border-gray-300 rounded-lg pl-10 pr-3 text-[14px] outline-none focus:border-[#009f6b]"
                />

              </div>

            </div>


            {/* PHONE */}

            <div className="relative mt-5">

              <FaPhoneAlt className="absolute left-4 top-5 text-gray-400 text-sm" />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full h-[58px] border border-gray-300 rounded-lg pl-10 pr-3 text-[14px] outline-none focus:border-[#009f6b]"
              />

            </div>


            {/* EMAIL */}

            <div className="relative mt-5">

              <FaEnvelope className="absolute left-4 top-5 text-gray-400 text-sm" />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full h-[58px] border border-gray-300 rounded-lg pl-10 pr-3 text-[14px] outline-none focus:border-[#009f6b]"
              />

            </div>


            {/* COUNTRY */}

            <div className="relative mt-5">

              <FaGlobe className="absolute left-4 top-5 text-gray-400 text-sm" />

              <input
                type="text"
                placeholder="Enter your country"
                required
                className="w-full h-[58px] border border-gray-300 rounded-lg pl-10 pr-3 text-[14px] outline-none focus:border-[#009f6b]"
              />

            </div>


            {/* TIME */}

            <div className="relative mt-5">

              <FaClock className="absolute left-4 top-5 text-gray-400 text-sm" />

              <input
                type="text"
                placeholder="Select preferred time"
                required
                className="w-full h-[58px] border border-gray-300 rounded-lg pl-10 pr-3 text-[14px] outline-none focus:border-[#009f6b]"
              />

            </div>


            {/* COURSE */}

            <div className="relative mt-5">

              <FaBook className="absolute left-4 top-5 text-gray-400 text-sm z-10" />

              <select
                required
                className="w-full h-[58px] border border-gray-300 rounded-lg pl-10 pr-3 text-[14px] outline-none focus:border-[#009f6b] bg-white appearance-none"
              >
                <option value="">
                  Select your course
                </option>

                <option value="Quran Reading">
                  Quran Reading
                </option>

                <option value="Quran With Tajweed">
                  Quran With Tajweed
                </option>

                <option value="Hifz-e-Quran">
                  Hifz-e-Quran
                </option>

                <option value="Islamic Studies">
                  Islamic Studies
                </option>
              </select>

            </div>


            {/* MESSAGE */}

            <textarea
              placeholder="Tell us about your Quran learning goals..."
              required
              className="w-full h-[120px] border border-gray-300 rounded-lg mt-5 p-4 text-[14px] resize-none outline-none focus:border-[#009f6b]"
            ></textarea>


            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                h-[58px]
                bg-[#009f6b]
                text-white
                rounded-lg
                mt-6
                text-[15px]
                font-semibold
                flex
                items-center
                justify-center
                gap-3
                shadow-md
                hover:bg-[#008c5f]
                transition
                duration-200
                cursor-pointer
                disabled:opacity-80
                disabled:cursor-not-allowed
              "
            >

              {loading ? (
                <>
                  <span className="w-5 h-5 border-[3px] border-white border-t-transparent rounded-full animate-spin"></span>
                  Processing...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Start Learning Now
                </>
              )}

            </button>


            {/* SECURITY */}

            <div className="flex justify-center items-center gap-2 mt-5">

              <FaShieldAlt className="text-[#00a36c] text-sm" />

              <p className="text-[12px] text-gray-600">
                Your information is 100% secure and confidential
              </p>

            </div>

          </form>

        </motion.div>

      </div>


      {/* ================= MAP ================= */}

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
          amount: 0.15,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="w-full flex justify-center mt-12 p-0 m-0 overflow-hidden"
      >

        <div className="w-full max-w-[1300px] h-[300px] md:h-[340px] px-4 p-0 m-0">

          <iframe
            src="https://www.google.com/maps?q=Qatar&output=embed"
            className="w-full h-full border-0 rounded-xl shadow-sm block m-0 p-0"
            style={{ display: "block" }}
            loading="lazy"
            title="Qatar Map"
          ></iframe>

        </div>

      </motion.div>

    </section>
  );
};

export default Contact;