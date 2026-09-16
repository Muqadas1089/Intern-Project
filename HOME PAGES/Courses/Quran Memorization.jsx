// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaCheck,
//   FaBookOpen,
//   FaClock,
//   FaUserGraduate,
//   FaCertificate,
//   FaLaptop,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import memo1 from "../../src/assets/memo1.jpg";
// import memo2 from '../../src/assets/memo2.jpg' 


// const QuranMemorization = () => {
//   return (
//     <div className="bg-white">

//       {/* =====================================================
//           HERO SECTION
//       ====================================================== */}
//       <section className="relative h-[630px] overflow-hidden">

//         {/* Background Image */}
//         <img
//           src={memo1}
//           alt="Quran Memorization"
//           className="absolute inset-0 h-full w-full object-cover"
//         />

//         {/* Green + Gold Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#087B5B]/90 via-[#526F4F]/80 to-[#B99152]/80"></div>

//         {/* Hero Content */}
//         <div className="relative flex h-full items-center justify-center px-10">

//           <div className="max-w-4xl text-center">

//             <h1
//               className="font-sans text-5xl font-bold leading-tight text-white md:text-6xl"
//             >
//               Quran Memorization
//               <br />
//               (Hifz-ul-Quran)
//             </h1>

//             <p
//               className="mx-auto mt-5 max-w-4xl font-sans text-xl leading-9 text-white"
//             >
//               Our online Hifz Quran course is designed for students of all
//               ages to memorize the Holy Quran efficiently and accurately.
//               With one-on-one classes, certified teachers, and flexible
//               schedules, we ensure a balanced approach to memorization and
//               revision.
//             </p>

//             <motion.div
        
//               className="mt-8"
//             >
//               <Link
//                 to="/contact"
//                 className="inline-flex rounded-lg bg-white px-8 py-4
//                 font-sans text-base font-medium text-[#087B5B]
//                 shadow-md transition duration-300
//                 hover:bg-[#F7F3EA] hover:shadow-xl"
//               >
//                 Start Your Hifz Journey
//               </Link>
//             </motion.div>

//           </div>

//         </div>
//       </section>


//       {/* =====================================================
//           SECOND SECTION
//       ====================================================== */}
//       <section className="relative overflow-hidden bg-[#F3F9F7] px-10 py-20">

//         <div className="mx-auto flex max-w-7xl items-center gap-16">

//           <div

//             className="relative w-1/2 overflow-hidden rounded-3xl shadow-lg md:flex-row"
//           >

//             <img
//               src={memo1}
//               alt="Master Quran Memorization"
//               className="h-[550px] w-full object-cover"
//             />

//             <div className="absolute inset-0 bg-black/60"></div>

//             <div className="absolute inset-0 flex flex-col justify-end p-10">

//               <div className="mb-6 w-fit rounded-full border border-white/50
//               bg-white/20 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">

//                 ✓ Trusted by Students Worldwide

//               </div>

//               {/* Heading */}
//               <h2 className="font-sans text-4xl font-bold leading-tight text-white">

//                 Master Quran Memorization
//                 <br />

//                 with{" "}
//                 <span className="text-[#B99152]">
//                   Expert Guidance
//                 </span>

//               </h2>

//               {/* Paragraph */}
//               <p className="mt-5 max-w-2xl font-sans text-lg leading-8 text-white">
//                 Our comprehensive Hifz program combines traditional teaching
//                 methods with modern technology to help you memorize the Quran
//                 effectively.
//               </p>

//             </div>

//           </div>


//           {/* RIGHT SIDE */}
//           <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">

//             {/* CARD 1 */}
//             <div
//               className="rounded-2xl bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl "
//             >

//               <FaUserGraduate className="text-3xl text-[#B99152]" />

//               <h3 className="mt-5 font-sans text-xl font-semibold text-[#172033]">
//                 Certified Huffaz & Teachers
//               </h3>

//               <p className="mt-3 font-sans text-base leading-7 text-[#566176]">
//                 Learn from qualified Quran instructors ensuring authentic
//                 memorization and recitation.
//               </p>

//             </div>


//             {/* CARD 2 */}
//             <div
//               className="rounded-2xl bg-white p-7 shadow-sm
//               transition-shadow duration-300 hover:shadow-xl"
//             >

//               <FaCertificate className="text-3xl text-[#B99152]" />

//               <h3 className="mt-5 font-sans text-xl font-semibold text-[#172033]">
//                 Personalized Learning Plans
//               </h3>

//               <p className="mt-3 font-sans text-base leading-7 text-[#566176]">
//                 Customized one-on-one sessions with tailored memorization and
//                 revision strategies.
//               </p>

//             </div>


//             {/* CARD 3 */}
//             <div
//               className="rounded-2xl bg-white p-7 shadow-sm
//               transition-shadow duration-300 hover:shadow-xl"
//             >

//               <FaClock className="text-3xl text-[#B99152]" />

//               <h3 className="mt-5 font-sans text-xl font-semibold text-[#172033]">
//                 Flexible Scheduling
//               </h3>

//               <p className="mt-3 font-sans text-base leading-7 text-[#566176]">
//                 24/7 availability across time zones, perfect for students and
//                 professionals worldwide.
//               </p>

//             </div>


//             {/* CARD 4 */}
//             <div
//               className="rounded-2xl bg-white p-7 shadow-sm
//               transition-shadow duration-300 hover:shadow-xl"
//             >

//               <FaBookOpen className="text-3xl text-[#B99152]" />

//               <h3 className="mt-5 font-sans text-xl font-semibold text-[#172033]">
//                 Structured Curriculum
//               </h3>

//               <p className="mt-3 font-sans text-base leading-7 text-[#566176]">
//                 Progressive memorization methodology focused on long-term
//                 retention and fluency.
//               </p>

//             </div>


//             {/* CARD 5 */}
//             <div
//               className="rounded-2xl bg-white p-7 shadow-sm
//               transition-shadow duration-300 hover:shadow-xl"
//             >

//               <FaCheck className="text-3xl text-[#B99152]" />

//               <h3 className="mt-5 font-sans text-xl font-semibold text-[#172033]">
//                 Tajweed Excellence
//               </h3>

//               <p className="mt-3 font-sans text-base leading-7 text-[#566176]">
//                 Master proper pronunciation and recitation rules with expert
//                 guidance.
//               </p>

//             </div>


//             {/* BUTTON */}
//             <div className="flex items-center justify-center">

//               <Link
//                 to="/contact"
//                 className="rounded-xl bg-[#168765] px-8 py-4
//                 font-sans font-medium text-white shadow-md
//                 transition duration-300 hover:bg-[#087B5B]"
//               >
//                 Start Your Free Trial
//               </Link>

//             </div>

//           </div>

//         </div>
//       </section>


//       {/* =====================================================
//           IJAZAH PROGRAM
//       ====================================================== */}
//       <section className="bg-white px-10 py-20">

//         <div className="mx-auto max-w-7xl">

//           <div className="text-center">

//             <h2
//               className="font-sans text-4xl font-bold text-[#087F5B]"
//             >
//               Quran Memorization Ijazah Program
//             </h2>

//             <p className="mx-auto mt-5 max-w-5xl font-sans text-lg
//             leading-8 text-[#34415A]">
//               “Ijazah” is an official certification granted by a qualified
//               tutor, authorizing a student to recite and transmit the Quran
//               after mastering memorization and Tajweed.
//             </p>

//           </div>


//           <div className="mt-12 grid grid-cols-3 gap-10">

//             {/* CARD 1 */}
//             <motion.div
//               whileHover={{}}
//               className="rounded-2xl border border-gray-100 bg-white
//               p-10 shadow-sm transition-shadow duration-300
//               hover:shadow-xl"
//             >

//               <h3 className="flex items-center gap-4 font-sans
//               text-2xl font-medium text-[#087F5B]">
//                 <FaCertificate className="text-[#B99152]" />
//                 Ijazah Requirements
//               </h3>

//               <ul className="mt-7 space-y-5 font-sans text-lg
//               leading-8 text-[#34415A]">

//                 <li className="flex gap-3">
//                   <span className="text-[#B99152]">●</span>
//                   Complete memorization of the Holy Quran.
//                 </li>

//                 <li className="flex gap-3">
//                   <span className="text-[#B99152]">●</span>
//                   Pass the Tajweed rules examination with excellence.
//                 </li>

//                 <li className="flex gap-3">
//                   <span className="text-[#B99152]">●</span>
//                   Demonstrate accurate and fluent recitation.
//                 </li>

//               </ul>

//             </motion.div>


//             {/* CARD 2 */}
//             <div
//               className="rounded-2xl border border-gray-100 bg-white
//               p-10 shadow-sm transition-shadow duration-300
//               hover:shadow-xl"
//             >

//               <h3 className="flex items-center gap-4 font-sans
//               text-2xl font-medium text-[#087F5B]">
//                 <FaBookOpen className="text-[#B99152]" />
//                 Learning Goals
//               </h3>

//               <ul className="mt-7 space-y-5 font-sans text-lg
//               leading-8 text-[#34415A]">

//                 <li className="flex gap-3">
//                   <span className="text-[#B99152]">●</span>
//                   Achieve accurate memorization of the Book of Allah.
//                 </li>

//                 <li className="flex gap-3">
//                   <span className="text-[#B99152]">●</span>
//                   Understand the general meanings of the verses.
//                 </li>

//                 <li className="flex gap-3">
//                   <span className="text-[#B99152]">●</span>
//                   Learn the reasons for revelation.
//                 </li>

//               </ul>

//             </div>


//             {/* CARD 3 */}
//             <div
//               className="rounded-2xl border border-gray-100 bg-white
//               p-10 shadow-sm transition-shadow duration-300
//               hover:shadow-xl"
//             >

//               <h3 className="flex items-center gap-4 font-sans
//               text-2xl font-medium text-[#087F5B]">
//                 <FaBookOpen className="text-[#B99152]" />
//                 Available Memorization Options
//               </h3>

//               <ul className="mt-7 space-y-5 font-sans text-lg
//               leading-8 text-[#34415A]">

//                 <li className="flex gap-3">
//                   <span className="text-[#B99152]">●</span>
//                   Memorizing the last Juz (30).
//                 </li>

//                 <li className="flex gap-3">
//                   <span className="text-[#B99152]">●</span>
//                   Memorizing the short Surahs.
//                 </li>

//                 <li className="flex gap-3">
//                   <span className="text-[#B99152]">●</span>
//                   Memorizing selected Surahs chosen by the student.
//                 </li>

//                 <li className="flex gap-3">
//                   <span className="text-[#B99152]">●</span>
//                   Memorizing the entire Quran.
//                 </li>

//               </ul>

//             </div>

//           </div>

//         </div>
//       </section>


//       {/* =====================================================
//           HIFZ ONLINE COURSE
//       ====================================================== */}
//       <section className="bg-white px-10 py-20">

//         <div className="mx-auto flex max-w-7xl items-center gap-16">

//           {/* LEFT CONTENT */}
//           <div
//             className="w-1/2"
//           >

//             <h2 className="font-sans text-4xl font-bold text-[#087F5B]">
//               Hifz Quran Online Course
//             </h2>

//             <p className="mt-5 font-sans text-lg leading-8 text-[#34415A]">
//               The Hifz Quran online course enables students to memorize the
//               entire Quran from the comfort of their homes. With the guidance
//               of qualified Huffaz and proven memorization techniques, learners
//               progress verse by verse until they reach full completion.
//               Memorizing the Quran is an honor that elevates one’s rank in
//               this life and the Hereafter.
//             </p>

//             <div className="mt-8 space-y-6">

//               <div className="flex gap-4">
//                 <FaBookOpen className="mt-1 text-xl text-[#B99152]" />

//                 <p className="font-sans text-lg text-[#34415A]">
//                   Structured and guided memorization program designed for
//                   steady progress.
//                 </p>
//               </div>

//               <div className="flex gap-4">
//                 <FaLaptop className="mt-1 text-xl text-[#B99152]" />

//                 <p className="font-sans text-lg text-[#34415A]">
//                   Learn and memorize from home through interactive online
//                   sessions.
//                 </p>
//               </div>

//               <div className="flex gap-4">
//                 <FaUserGraduate className="mt-1 text-xl text-[#B99152]" />

//                 <p className="font-sans text-lg text-[#34415A]">
//                   Qualified tutors with experience in online Quran teaching
//                   for all age groups.
//                 </p>
//               </div>

//               <div className="flex gap-4">
//                 <FaCheck className="mt-1 text-xl text-[#B99152]" />

//                 <p className="font-sans text-lg text-[#34415A]">
//                   Personalized guidance that helps every student steadily
//                   achieve memorization excellence.
//                 </p>
//               </div>

//             </div>


//             {/* Quran Quote */}
//             <div className="mt-8 rounded-r-xl border-l-4
//             border-[#087F5B] bg-[#E7F4F0] p-6">

//               <p className="font-serif text-2xl text-[#087F5B]">
//                 وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ
//               </p>

//               <p className="mt-2 italic text-[#34415A]">
//                 “And We have certainly made the Quran easy for remembrance.”
//               </p>

//             </div>

//           </div>


//           {/* RIGHT IMAGE */}
//           <div
//             className="w-1/2"
//           >

//             <div className="overflow-hidden rounded-3xl shadow-md">

//               <img
//                 src={memo2}
//                 alt="Hifz Quran Online Course"
//                 className="h-[500px] w-full object-cover"
//               />

//             </div>

//           </div>

//         </div>

//       </section>

//     </div>
//   );
// };

// export default QuranMemorization;






import React from "react";
import { motion } from "framer-motion";
import {
  FaCheck,
  FaBookOpen,
  FaClock,
  FaUserGraduate,
  FaCertificate,
  FaLaptop,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import memo1 from "../../src/assets/memo1.jpg";
import memo2 from "../../src/assets/memo2.jpg";

const QuranMemorization = () => {
  return (
    <div className="bg-white">

      {/*  HERO SECTION */}
      <section className="relative min-h-[630px] overflow-hidden">

        <img
          src={memo1}
          alt="Quran Memorization"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#087B5B]/90 via-[#526F4F]/80 to-[#B99152]/80"></div>

        <div className="relative flex min-h-[630px] items-center justify-center px-5 sm:px-10">

          <div className="max-w-4xl text-center">

            <h1
              className="font-sans text-4xl font-bold leading-tight text-white
              sm:text-5xl md:text-6xl"
            >
              Quran Memorization
              <br />
              (Hifz-ul-Quran)
            </h1>

            <p
              className="mx-auto mt-5 max-w-4xl font-sans text-base leading-7
              text-white sm:text-xl sm:leading-9"
            >
              Our online Hifz Quran course is designed for students of all
              ages to memorize the Holy Quran efficiently and accurately.
              With one-on-one classes, certified teachers, and flexible
              schedules, we ensure a balanced approach to memorization and
              revision.
            </p>

            <motion.div
              className="mt-8"
            >
              <Link
                to="/contact"
                className="inline-flex rounded-lg bg-white px-8 py-4
                font-sans text-base font-medium text-[#087B5B]
                shadow-md transition duration-300
                hover:bg-[#F7F3EA] hover:shadow-xl"
              >
                Start Your Hifz Journey
              </Link>
            </motion.div>

          </div>

        </div>
      </section>


      {/* SECOND SECTION */}
      <section className="relative overflow-hidden bg-[#F3F9F7] px-5 py-20 sm:px-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-16">

          {/* LEFT IMAGE */}
          <div
            className="relative w-full overflow-hidden rounded-3xl shadow-lg lg:w-1/2"
          >

            <img
              src={memo1}
              alt="Master Quran Memorization"
              className="h-[500px] w-full object-cover sm:h-[550px]"
            />

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">

              <div
                className="mb-6 w-fit rounded-full border border-white/50
                bg-white/20 px-5 py-2 text-sm font-medium text-white
                backdrop-blur-sm"
              >
                ✓ Trusted by Students Worldwide
              </div>

              {/* Heading */}
              <h2
                className="font-sans text-3xl font-bold leading-tight
                text-white sm:text-4xl"
              >
                Master Quran Memorization
                <br />
                with{" "}
                <span className="text-[#B99152]">
                  Expert Guidance
                </span>
              </h2>

              {/* Paragraph */}
              <p
                className="mt-5 max-w-2xl font-sans text-base leading-7
                text-white sm:text-lg sm:leading-8"
              >
                Our comprehensive Hifz program combines traditional teaching
                methods with modern technology to help you memorize the Quran
                effectively.
              </p>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:w-1/2">

            {/* CARD 1 */}
            <div
              className="rounded-2xl bg-white p-7 shadow-sm
              transition-shadow duration-300 hover:shadow-xl"
            >

              <FaUserGraduate className="text-3xl text-[#B99152]" />

              <h3 className="mt-5 font-sans text-xl font-semibold text-[#172033]">
                Certified Huffaz & Teachers
              </h3>

              <p className="mt-3 font-sans text-base leading-7 text-[#566176]">
                Learn from qualified Quran instructors ensuring authentic
                memorization and recitation.
              </p>

            </div>


            {/* CARD 2 */}
            <div
              className="rounded-2xl bg-white p-7 shadow-sm
              transition-shadow duration-300 hover:shadow-xl"
            >

              <FaCertificate className="text-3xl text-[#B99152]" />

              <h3 className="mt-5 font-sans text-xl font-semibold text-[#172033]">
                Personalized Learning Plans
              </h3>

              <p className="mt-3 font-sans text-base leading-7 text-[#566176]">
                Customized one-on-one sessions with tailored memorization and
                revision strategies.
              </p>

            </div>


            {/* CARD 3 */}
            <div
              className="rounded-2xl bg-white p-7 shadow-sm
              transition-shadow duration-300 hover:shadow-xl"
            >

              <FaClock className="text-3xl text-[#B99152]" />

              <h3 className="mt-5 font-sans text-xl font-semibold text-[#172033]">
                Flexible Scheduling
              </h3>

              <p className="mt-3 font-sans text-base leading-7 text-[#566176]">
                24/7 availability across time zones, perfect for students and
                professionals worldwide.
              </p>

            </div>


            {/* CARD 4 */}
            <div
              className="rounded-2xl bg-white p-7 shadow-sm
              transition-shadow duration-300 hover:shadow-xl"
            >

              <FaBookOpen className="text-3xl text-[#B99152]" />

              <h3 className="mt-5 font-sans text-xl font-semibold text-[#172033]">
                Structured Curriculum
              </h3>

              <p className="mt-3 font-sans text-base leading-7 text-[#566176]">
                Progressive memorization methodology focused on long-term
                retention and fluency.
              </p>

            </div>


            {/* CARD 5 */}
            <div
              className="rounded-2xl bg-white p-7 shadow-sm
              transition-shadow duration-300 hover:shadow-xl"
            >

              <FaCheck className="text-3xl text-[#B99152]" />

              <h3 className="mt-5 font-sans text-xl font-semibold text-[#172033]">
                Tajweed Excellence
              </h3>

              <p className="mt-3 font-sans text-base leading-7 text-[#566176]">
                Master proper pronunciation and recitation rules with expert
                guidance.
              </p>

            </div>


            {/* BUTTON */}
            <div className="flex items-center justify-center">

              <Link
                to="/contact"
                className="rounded-xl bg-[#168765] px-8 py-4
                font-sans font-medium text-white shadow-md
                transition duration-300 hover:bg-[#087B5B]"
              >
                Start Your Free Trial
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/*  IJAZAH PROGRA */}
      <section className="bg-white px-5 py-20 sm:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <h2
              className="font-sans text-3xl font-bold text-[#087F5B]
              sm:text-4xl"
            >
              Quran Memorization Ijazah Program
            </h2>

            <p
              className="mx-auto mt-5 max-w-5xl font-sans text-base
              leading-7 text-[#34415A] sm:text-lg sm:leading-8"
            >
              “Ijazah” is an official certification granted by a qualified
              tutor, authorizing a student to recite and transmit the Quran
              after mastering memorization and Tajweed.
            </p>

          </div>


          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

            {/* CARD 1 */}
            <motion.div
              whileHover={{}}
              className="rounded-2xl border border-gray-100 bg-white
              p-7 shadow-sm transition-shadow duration-300
              hover:shadow-xl sm:p-10"
            >

              <h3
                className="flex items-center gap-4 font-sans text-xl
                font-medium text-[#087F5B] sm:text-2xl"
              >
                <FaCertificate className="text-[#B99152]" />
                Ijazah Requirements
              </h3>

              <ul
                className="mt-7 space-y-5 font-sans text-base
                leading-7 text-[#34415A] sm:text-lg sm:leading-8"
              >

                <li className="flex gap-3">
                  <span className="text-[#B99152]">●</span>
                  Complete memorization of the Holy Quran.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#B99152]">●</span>
                  Pass the Tajweed rules examination with excellence.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#B99152]">●</span>
                  Demonstrate accurate and fluent recitation.
                </li>

              </ul>

            </motion.div>


            {/* CARD 2 */}
            <div
              className="rounded-2xl border border-gray-100 bg-white
              p-7 shadow-sm transition-shadow duration-300
              hover:shadow-xl sm:p-10"
            >

              <h3
                className="flex items-center gap-4 font-sans text-xl
                font-medium text-[#087F5B] sm:text-2xl"
              >
                <FaBookOpen className="text-[#B99152]" />
                Learning Goals
              </h3>

              <ul
                className="mt-7 space-y-5 font-sans text-base
                leading-7 text-[#34415A] sm:text-lg sm:leading-8"
              >

                <li className="flex gap-3">
                  <span className="text-[#B99152]">●</span>
                  Achieve accurate memorization of the Book of Allah.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#B99152]">●</span>
                  Understand the general meanings of the verses.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#B99152]">●</span>
                  Learn the reasons for revelation.
                </li>

              </ul>

            </div>


            {/* CARD 3 */}
            <div
              className="rounded-2xl border border-gray-100 bg-white
              p-7 shadow-sm transition-shadow duration-300
              hover:shadow-xl sm:p-10"
            >

              <h3
                className="flex items-center gap-4 font-sans text-xl
                font-medium text-[#087F5B] sm:text-2xl"
              >
                <FaBookOpen className="text-[#B99152]" />
                Available Memorization Options
              </h3>

              <ul
                className="mt-7 space-y-5 font-sans text-base
                leading-7 text-[#34415A] sm:text-lg sm:leading-8"
              >

                <li className="flex gap-3">
                  <span className="text-[#B99152]">●</span>
                  Memorizing the last Juz (30).
                </li>

                <li className="flex gap-3">
                  <span className="text-[#B99152]">●</span>
                  Memorizing the short Surahs.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#B99152]">●</span>
                  Memorizing selected Surahs chosen by the student.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#B99152]">●</span>
                  Memorizing the entire Quran.
                </li>

              </ul>

            </div>

          </div>

        </div>
      </section>


      {/* HIFZ ONLINE COURSE */}
      <section className="bg-white px-5 py-20 sm:px-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2">

            <h2
              className="font-sans text-3xl font-bold text-[#087F5B]
              sm:text-4xl"
            >
              Hifz Quran Online Course
            </h2>

            <p
              className="mt-5 font-sans text-base leading-7
              text-[#34415A] sm:text-lg sm:leading-8"
            >
              The Hifz Quran online course enables students to memorize the
              entire Quran from the comfort of their homes. With the guidance
              of qualified Huffaz and proven memorization techniques, learners
              progress verse by verse until they reach full completion.
              Memorizing the Quran is an honor that elevates one’s rank in
              this life and the Hereafter.
            </p>

            <div className="mt-8 space-y-6">

              <div className="flex gap-4">
                <FaBookOpen className="mt-1 shrink-0 text-xl text-[#B99152]" />

                <p className="font-sans text-base text-[#34415A] sm:text-lg">
                  Structured and guided memorization program designed for
                  steady progress.
                </p>
              </div>

              <div className="flex gap-4">
                <FaLaptop className="mt-1 shrink-0 text-xl text-[#B99152]" />

                <p className="font-sans text-base text-[#34415A] sm:text-lg">
                  Learn and memorize from home through interactive online
                  sessions.
                </p>
              </div>

              <div className="flex gap-4">
                <FaUserGraduate className="mt-1 shrink-0 text-xl text-[#B99152]" />

                <p className="font-sans text-base text-[#34415A] sm:text-lg">
                  Qualified tutors with experience in online Quran teaching
                  for all age groups.
                </p>
              </div>

              <div className="flex gap-4">
                <FaCheck className="mt-1 shrink-0 text-xl text-[#B99152]" />

                <p className="font-sans text-base text-[#34415A] sm:text-lg">
                  Personalized guidance that helps every student steadily
                  achieve memorization excellence.
                </p>
              </div>

            </div>


            {/* Quran Quote */}
            <div
              className="mt-8 rounded-r-xl border-l-4
              border-[#087F5B] bg-[#E7F4F0] p-5 sm:p-6"
            >

              <p className="font-serif text-xl text-[#087F5B] sm:text-2xl">
                وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ
              </p>

              <p className="mt-2 italic text-[#34415A]">
                “And We have certainly made the Quran easy for remembrance.”
              </p>

            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2">

            <div className="overflow-hidden rounded-3xl shadow-md">

              <img
                src={memo2}
                alt="Hifz Quran Online Course"
                className="h-[400px] w-full object-cover sm:h-[500px]"
              />

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default QuranMemorization;


