import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import nam1 from "../../src/assets/nam1.jpg";
import nam2 from "../../src/assets/nam2.jpg";
import nam3 from "../../src/assets/nam3.jpg";
import nam4 from "../../src/assets/nam4.jpg";
import nam5 from "../../src/assets/nam5.jpg";
import nam6 from "../../src/assets/nam6.jpg";
import nam7 from "../../src/assets/nam7.jpg";
import nam8 from "../../src/assets/nam8.jpg";
import nam9 from "../../src/assets/nam9.jpg";
import namlast from "../../src/assets/namlast.jpg";


const Namaz = () => {
  const [selectedKalma, setSelectedKalma] = useState(null);

  /* =========================================================
     HERO SLIDER IMAGES
  ========================================================= */

  const heroImages = [
    nam1,
    nam2,
    nam3,
    nam4,
    nam5,
    nam6,
    nam7,
    nam8,
    nam9,
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  /* =========================================================
     HERO IMAGE AUTO CHANGE
  ========================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prevIndex) =>
        (prevIndex + 1) % heroImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const kalmas = [
    {
      title: "Kalma Tayyibah",
      image: nam1,
      description:
        "The foundation of Islamic belief declaring the oneness of Allah and acceptance of Prophet Muhammad ﷺ as His final messenger. This...",
      detail:
        "The First Kalma, Kalma Tayyibah, is the foundation of Islamic belief. It declares the oneness of Allah and confirms that Muhammad ﷺ is His final messenger.",
    },
    {
      title: "Kalma Shahadat",
      image: nam2,
      description:
        "A testimony of faith emphasizing Allah's absolute oneness without partners. It establishes the believer's commitment to Islamic principles and t...",
      detail:
        "A testimony of faith emphasizing Allah's absolute oneness without partners. It establishes the believer's commitment to Islamic principles and the prophethood of Muhammad ﷺ.",
    },
    {
      title: "Kalma Tamjeed",
      image: nam3,
      description:
        "Focuses on glorifying and praising Allah's perfection and majesty. It reminds Muslims to acknowledge Allah's greatness in every aspect of...",
      detail:
        "The Third Kalma focuses on glorifying and praising Allah's perfection, greatness, and majesty.",
    },
    {
      title: "Kalma Tawheed",
      image: nam4,
      description:
        "Reinforces the concept of absolute monotheism, affirming that Allah alone deserves worship. It protects against shirk and strengthens spiritual...",
      detail:
        "The Fourth Kalma reinforces the belief that Allah is One and that He alone deserves worship.",
    },
    {
      title: "Kalma Astaghfar",
      image: nam5,
      description:
        "Teaches humility through seeking forgiveness from Allah. It serves as a means of spiritual cleansing and returning to Allah's mercy after mistakes.",
      detail:
        "The Fifth Kalma teaches believers to seek forgiveness from Allah and return to His mercy with humility.",
    },
    {
      title: "Kalma Radd-e-Kufr",
      image: nam6,
      description:
        "Protects faith by seeking refuge from disbelief and reaffirming Islamic beliefs. It strengthens the believer's commitment to Islamic principles.",
      detail:
        "The Sixth Kalma reaffirms Islamic beliefs and seeks protection from disbelief.",
    },
  ];

  return (
    <div className="w-full bg-white">

      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[800px] w-full overflow-hidden">

        {/* ================= HERO IMAGE SLIDER ================= */}

        {heroImages.map((image, index) => (

          <motion.img
            key={index}
            src={image}
            alt="Islamic Spiritual Guide"
            initial={{
              opacity: 0,
              scale: 1.08,
            }}
            animate={{
              opacity: index === heroIndex ? 1 : 0,
              scale: index === heroIndex ? 1 : 1.08,
            }}
            transition={{
              opacity: {
                duration: 1.5,
                ease: "easeInOut",
              },
              scale: {
                duration: 4,
                ease: "easeOut",
              },
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />

        ))}

        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center"
        >

          <h1 className="text-4xl font-bold text-emerald-500 md:text-6xl">
            Islamic Spiritual Guide
          </h1>

          <p className="mt-5 text-lg text-white md:text-2xl">
            Master Namaz, Understand Kalmas, and Connect with Allah through Dua
          </p>

          <Link
            to="/contact"
            className="mt-10 rounded-full bg-[#c58b3c] px-9 py-5 text-lg font-bold text-white transition duration-300 hover:bg-[#a97029]"
          >
            Enroll Now
          </Link>

        </motion.div>

      </section>


      {/* ================= SPIRITUAL JOURNEY SECTION ================= */}

      <section className="w-full bg-white px-5 py-10 md:px-10 lg:px-20">

        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="w-full lg:w-1/2"
          >

            <img
              src={nam6}
              alt="The Spiritual Journey of Namaz"
              className="
                h-[480px]
                w-full
                rounded-2xl
                object-cover
                shadow-2xl
              "
            />

          </motion.div>


          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="
              w-full
              border-l-2
              border-[#B78A4A]
              pl-8
              lg:w-1/2
            "
          >

            <h2
              className="
                text-4xl
                font-bold
                leading-tight
                text-[#006B55]
                md:text-5xl
              "
            >
              The Spiritual Journey of
              <br />
              Namaz
            </h2>

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-9
                text-[#3F4A5F]
              "
            >
              Namaz represents the fundamental pillar of Islamic worship,
              performed five times daily as an act of submission to Allah.
              This spiritual practice strengthens faith, promotes discipline,
              purifies the soul, and maintains constant connection with the Creator.
            </p>

            <a
              href="/pdfs/namaz.pdf"
              download
              className="
                mt-5
                inline-block
                rounded-lg
                bg-[#B78A4A]
                px-8
                py-4
                text-lg
                font-medium
                text-white
                transition
                duration-300
                hover:bg-[#9C723C]
              "
            >
              Download PDF
            </a>

          </motion.div>

        </div>


        {/* ================= SIX KALMAS HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mt-24 text-center"
        >

          <h2
            className="
              text-4xl
              font-bold
              text-[#006B55]
              md:text-5xl
            "
          >
            The Six Kalmas
          </h2>

          <p
            className="
              mt-5
              text-lg
              text-[#536074]
              md:text-xl
            "
          >
            Foundation of Islamic Belief and Spirituality
          </p>

        </motion.div>


        {/* ================= SIX KALMAS CARDS ================= */}

        <div
          className="
            mx-auto
            mt-12
            flex
            max-w-[1100px]
            flex-wrap
            justify-center
            gap-7
          "
        >

          {kalmas.map((kalma, index) => (

            <motion.div
              key={index}

              /* ================= FAST TOP TO BOTTOM FLIP ================= */

              initial={{
                opacity: 0,
                rotateX: -90,
                transformPerspective: 1000,
              }}

              whileInView={{
                opacity: 1,
                rotateX: 0,
              }}

              viewport={{
                once: true,
                amount: 0.15,
              }}

              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}

              className="
                w-full
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-lg
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
                sm:w-[45%]
                lg:w-[31%]
              "
            >

              <img
                src={kalma.image}
                alt={kalma.title}
                className="h-[180px] w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold text-[#006B55]">
                  {kalma.title}
                </h3>

                <p
                  className="
                    mt-4
                    h-[72px]
                    overflow-hidden
                    text-sm
                    leading-6
                    text-[#B17D35]
                  "
                >
                  {kalma.description}
                </p>

                <button
                  onClick={() => setSelectedKalma(kalma)}
                  className="
                    mt-5
                    w-full
                    rounded-lg
                    bg-[#009F70]
                    px-5
                    py-3
                    text-white
                    transition
                    duration-300
                    hover:bg-[#00845D]
                  "
                >
                  Learn More
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </section>


      {/* ================= KALMA POPUP ================= */}

      {selectedKalma && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/60
            px-5
          "
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
            className="
              relative
              w-full
              max-w-[670px]
              rounded-2xl
              bg-white
              p-8
              shadow-2xl
            "
          >

            <button
              onClick={() => setSelectedKalma(null)}
              className="
                absolute
                right-6
                top-5
                text-3xl
                font-light
                text-[#344054]
                hover:text-black
              "
            >
              ×
            </button>

            <h2
              className="
                border-b
                border-[#A9DEC9]
                pb-3
                pr-10
                text-3xl
                font-bold
                text-[#00805F]
              "
            >
              {selectedKalma.title}
            </h2>

            <p
              className="
                mt-5
                text-base
                leading-7
                text-[#344054]
              "
            >
              {selectedKalma.detail}
            </p>

            <p
              className="
                mt-5
                text-base
                italic
                leading-7
                text-[#344054]
              "
            >
              This Kalma serves as a spiritual anchor, strengthening faith
              and providing divine guidance in daily life.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">

              <a
                href="/pdfs/namaz.pdf"
                download
                className="
                  flex-1
                  rounded-lg
                  bg-[#B78A4A]
                  px-6
                  py-4
                  text-center
                  text-white
                  transition
                  duration-300
                  hover:bg-[#9C723C]
                "
              >
                Download PDF
              </a>

              <button
                onClick={() => setSelectedKalma(null)}
                className="
                  flex-1
                  rounded-lg
                  border
                  border-[#009F70]
                  px-6
                  py-4
                  text-[#009F70]
                  transition
                  duration-300
                  hover:bg-[#009F70]
                  hover:text-white
                "
              >
                Close
              </button>

            </div>

          </motion.div>

        </motion.div>

      )}


      {/* ================= THE POWER OF DUA ================= */}

      <section className="w-full bg-white px-5 py-16 md:px-10 lg:px-20">

        <div
          className="
            mx-auto
            flex
            max-w-6xl
            flex-col
            items-center
            gap-12
            lg:flex-row
          "
        >

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="w-full lg:w-1/2"
          >

            <h2
              className="
                text-4xl
                font-bold
                text-[#B78A4A]
                md:text-5xl
              "
            >
              The Power of Dua
            </h2>

            <p
              className="
                mt-7
                max-w-xl
                text-lg
                leading-8
                text-[#009F70]
              "
            >
              Dua represents the essence of worship — a personal, heartfelt
              conversation with Allah. Through sincere supplication, believers
              acknowledge Allah's power and mercy, strengthening their spiritual
              connection and finding peace through divine communication.
            </p>

            <a
              href="/pdfs/dua.pdf"
              download
              className="
                mt-5
                inline-block
                rounded-lg
                bg-[#B78A4A]
                px-8
                py-4
                text-white
                transition
                duration-300
                hover:bg-[#9C723C]
              "
            >
              Download PDF
            </a>

          </motion.div>


          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="
              flex
              w-full
              items-center
              gap-10
              lg:w-1/2
            "
          >

            <div
              className="
                h-[290px]
                w-[3px]
                rounded-full
                bg-[#009F70]
              "
            ></div>

            <div className="w-full">

              <img
                src={namlast}
                alt="Dua"
                className="
                  h-[380px]
                  w-full
                  rounded-2xl
                  border-2
                  border-[#B9DDD3]
                  object-cover
                  shadow-2xl
                "
              />

            </div>

          </motion.div>

        </div>

      </section>

    </div>
  );
};

export default Namaz;