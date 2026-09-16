import React, { useState, useEffect } from "react";
import logo from "../src/assets/logo.png";
import profile from "../src/assets/profile.png";

import {
  FaEye,
  FaEyeSlash,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [Card, SetCard] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showForgot, setShowForgot] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [processing, setProcessing] = useState(false);

  const [fullName, setFullName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [signupEmailError, setSignupEmailError] = useState("");
  const [signupPasswordError, setSignupPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [signupProcessing, setSignupProcessing] = useState(false);

  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotEmailError, setForgotEmailError] = useState("");
  const [otpProcessing, setOtpProcessing] = useState(false);

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    if (Card) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [Card]);

  /* =========================================================
     OPEN LOGIN
  ========================================================= */

  const openLogin = () => {
    SetCard(true);
    setShowSignup(false);
    setShowForgot(false);
    setMenuOpen(false);
  };

  /* =========================================================
     LOGIN FUNCTION
  ========================================================= */

  const handleLogin = () => {
    setEmailError("");
    setPasswordError("");

    if (email === "") {
      setEmailError("Email is required");
      return;
    } else if (!email.includes("@")) {
      setEmailError("Please enter a valid email address");
      return;
    } else if (password === "") {
      setPasswordError("Password is required");
      return;
    } else {
      setProcessing(true);
    }

    setTimeout(() => {
      setProcessing(false);

      alert("Successfully Login!");

      setEmail("");
      setPassword("");
    }, 2000);
  };

  /* =========================================================
     SIGN UP FUNCTION
  ========================================================= */

  const handleSignup = () => {
    setNameError("");
    setSignupEmailError("");
    setSignupPasswordError("");
    setConfirmPasswordError("");

    if (fullName === "") {
      setNameError("Full name is required");
      return;
    } else if (signupEmail === "") {
      setSignupEmailError("Email is required");
      return;
    } else if (!signupEmail.includes("@")) {
      setSignupEmailError("Please enter a valid email address");
      return;
    } else if (signupPassword === "") {
      setSignupPasswordError("Password is required");
      return;
    } else if (confirmPassword === "") {
      setConfirmPasswordError("Please confirm your password");
      return;
    } else if (signupPassword !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    } else {
      setSignupProcessing(true);
    }

    setTimeout(() => {
      setSignupProcessing(false);

      alert("Successfully Signed Up!");

      setFullName("");
      setSignupEmail("");
      setSignupPassword("");
      setConfirmPassword("");

      setShowSignup(false);
    }, 2000);
  };

  /* =========================================================
     SEND OTP FUNCTION
  ========================================================= */

  const handleSendOTP = () => {
    setForgotEmailError("");

    if (forgotEmail === "") {
      setForgotEmailError("Email is required");
      return;
    } else if (!forgotEmail.includes("@")) {
      setForgotEmailError("Please enter a valid email address");
      return;
    } else {
      setOtpProcessing(true);
    }

    setTimeout(() => {
      setOtpProcessing(false);

      alert("Check your inbox!");

      setForgotEmail("");
    }, 1500);
  };

  return (
    <div>
      {/* =====================================================
          NORMAL NAVBAR
      ===================================================== */}

      {!Card && (
        <section
          className="
            relative
            z-50
            w-full
            min-h-[62px]
            bg-gradient-to-r
            from-[#F3D5A3]
            to-[#A37B3F]
            flex
            items-center
            justify-between
            px-4
            sm:px-6
            lg:px-[60px]
            py-2
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <div
            className="
              flex
              items-center
              gap-2
              lg:ml-[175px]
            "
          >
            <img
              src={logo}
              alt="Al Hafiz Online Quran Academy"
              className="
                h-[42px]
                w-[42px]
                sm:h-[45px]
                sm:w-[45px]
                rounded
                object-cover
              "
            />

            <h1
              className="
                font-bold
                text-white
                text-[10px]
                sm:text-xs
                leading-tight
                whitespace-nowrap
              "
            >
              Al Hafiz-Online
              <br />
              Quran Academy
            </h1>
          </div>

          {/* =================================================
              DESKTOP NAVBAR LINKS
          ================================================= */}

          <div
            className="
              hidden
              lg:flex
              items-center
              gap-3
              text-sm
              font-semibold
              text-white
            "
          >
            {/* HOME */}

            <Link
              to="/"
              className="
                px-3
                py-2
                rounded-lg
                hover:bg-white/30
                transition-all
                duration-300
              "
            >
              Home
            </Link>

            {/* ABOUT */}

            <Link
              to="/about"
              className="
                px-3
                py-2
                rounded-lg
                hover:bg-white/30
                transition-all
                duration-300
              "
            >
              About
            </Link>

            {/* SERVICES */}

            <Link
              to="/services"
              className="
                px-3
                py-2
                rounded-lg
                hover:bg-white/30
                transition-all
                duration-300
              "
            >
              Services
            </Link>

            {/* COURSES DROPDOWN */}

            <div className="relative group">
              <Link to="/">
                <button
                  type="button"
                  className="
                    px-3
                    py-2
                    rounded-lg
                    hover:bg-white/30
                    transition-all
                    duration-300
                    text-white
                    font-semibold
                    text-sm
                  "
                >
                  Courses
                </button>
              </Link>

              {/* FIRST DROPDOWN */}

              <div
                className="
                  absolute
                  top-full
                  left-1/2
                  -translate-x-1/2
                  mt-2
                  w-[280px]
                  bg-white
                  rounded-lg
                  shadow-xl
                  opacity-0
                  invisible
                  translate-y-2
                  group-hover:opacity-100
                  group-hover:visible
                  group-hover:translate-y-0
                  transition-all
                  duration-200
                  z-50
                  py-1
                "
              >
                {/* QURAN COURSES */}

                <div className="relative group/quran">
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      px-5
                      py-4
                      text-[#006b55]
                      text-[16px]
                      font-medium
                      cursor-pointer
                      hover:bg-gray-100
                      transition-all
                      duration-200
                    "
                  >
                    <span>Quran Courses</span>

                    <FaChevronRight className="text-[11px]" />
                  </div>

                  {/* SECOND DROPDOWN */}

                  <div
                    className="
                      absolute
                      left-full
                      top-0
                      ml-1
                      w-[320px]
                      bg-white
                      rounded-lg
                      shadow-xl
                      opacity-0
                      invisible
                      translate-x-2
                      group-hover/quran:opacity-100
                      group-hover/quran:visible
                      group-hover/quran:translate-x-0
                      transition-all
                      duration-200
                      z-50
                      py-1
                    "
                  >
                    <Link
                      to="/NoraniQaida"
                      className="
                        block
                        px-5
                        py-4
                        text-[#006b55]
                        text-[16px]
                        font-medium
                        hover:bg-gray-100
                        transition-all
                        duration-200
                      "
                    >
                      Norani Qaida Course
                    </Link>

                    <Link
                      to="/MadaniQaida"
                      className="
                        block
                        px-5
                        py-4
                        text-[#006b55]
                        text-[16px]
                        font-medium
                        hover:bg-gray-100
                        transition-all
                        duration-200
                      "
                    >
                      Madni Qaida
                    </Link>

                    <Link
                      to="/NazraQuran"
                      className="
                        block
                        px-5
                        py-4
                        text-[#006b55]
                        text-[16px]
                        font-medium
                        hover:bg-gray-100
                        transition-all
                        duration-200
                      "
                    >
                      Nazra Quran
                    </Link>

                    <Link
                      to="/QuranMemorization"
                      className="
                        block
                        px-5
                        py-4
                        text-[#006b55]
                        text-[16px]
                        font-medium
                        hover:bg-gray-100
                        transition-all
                        duration-200
                      "
                    >
                      Quran Memorization
                    </Link>

                    <Link
                      to="/QuranInterpretation"
                      className="
                        block
                        px-5
                        py-4
                        text-[#006b55]
                        text-[16px]
                        font-medium
                        hover:bg-gray-100
                        transition-all
                        duration-200
                      "
                    >
                      Quran Interpretation & Translation
                    </Link>
                  </div>
                </div>

                <Link
                  to="/Namaz"
                  className="
                    block
                    px-5
                    py-4
                    text-[#006b55]
                    text-[16px]
                    font-medium
                    hover:bg-gray-100
                    transition-all
                    duration-200
                  "
                >
                  Namaz-Dua-Kalma
                </Link>

                <Link
                  to="/BasicIslamicKnowledge"
                  className="
                    block
                    px-5
                    py-4
                    text-[#006b55]
                    text-[16px]
                    font-medium
                    hover:bg-gray-100
                    transition-all
                    duration-200
                  "
                >
                  Basic Islamic Knowledge
                </Link>

                <Link
                  to="/QuranicScience"
                  className="
                    block
                    px-5
                    py-4
                    text-[#006b55]
                    text-[16px]
                    font-medium
                    hover:bg-gray-100
                    transition-all
                    duration-200
                  "
                >
                  Obligatory Science Course
                </Link>
              </div>
            </div>

            {/* FEE */}

            <Link
              to="/Fee"
              className="
                px-3
                py-2
                rounded-lg
                hover:bg-white/30
                transition-all
                duration-300
              "
            >
              Fee
            </Link>

            {/* TEACHER */}

            <Link
              to="/Teacher"
              className="
                px-3
                py-2
                rounded-lg
                hover:bg-white/30
                transition-all
                duration-300
              "
            >
              To Be Teacher
            </Link>

            {/* CONTACT */}

            <Link
              to="/contact"
              className="
                px-3
                py-2
                rounded-lg
                hover:bg-white/30
                transition-all
                duration-300
              "
            >
              Contact
            </Link>
          </div>

          {/* =================================================
              DESKTOP SIGN IN BUTTON
          ================================================= */}

          <button
            onClick={openLogin}
            className="
              hidden
              lg:block
              h-[32px]
              w-[75px]
              lg:mr-[190px]
              bg-white
              rounded-md
              text-[#0E7C5A]
              text-xs
              font-semibold
              transition-all
              duration-300
              hover:bg-green-100
              hover:-translate-y-0.5
            "
          >
            Sign In
          </button>

          {/* =================================================
              MOBILE HAMBURGER
          ================================================= */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              flex
              lg:hidden
              items-center
              justify-center
              text-white
              text-2xl
              p-2
              rounded-md
              hover:bg-white/20
              transition
            "
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* =================================================
              MOBILE MENU
          ================================================= */}

          {menuOpen && (
            <div
              className="
                absolute
                top-full
                left-0
                right-0
                lg:hidden
                bg-white
                shadow-xl
                border-t
                border-[#A37B3F]
                px-5
                py-4
                space-y-2
                max-h-[calc(100vh-62px)]
                overflow-y-auto
              "
            >
              {/* HOME */}

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="
                  block
                  px-4
                  py-3
                  rounded-lg
                  text-[#006b55]
                  font-semibold
                  hover:bg-[#F3D5A3]
                  transition
                "
              >
                Home
              </Link>

              {/* ABOUT */}

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="
                  block
                  px-4
                  py-3
                  rounded-lg
                  text-[#006b55]
                  font-semibold
                  hover:bg-[#F3D5A3]
                  transition
                "
              >
                About
              </Link>

              {/* SERVICES */}

              <Link
                to="/services"
                onClick={() => setMenuOpen(false)}
                className="
                  block
                  px-4
                  py-3
                  rounded-lg
                  text-[#006b55]
                  font-semibold
                  hover:bg-[#F3D5A3]
                  transition
                "
              >
                Services
              </Link>

              {/* MOBILE COURSES */}

              <div>
                <button
                  onClick={() =>
                    setMobileCoursesOpen(!mobileCoursesOpen)
                  }
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    px-4
                    py-3
                    rounded-lg
                    text-[#006b55]
                    font-semibold
                    hover:bg-[#F3D5A3]
                    transition
                  "
                >
                  <span>Courses</span>

                  {mobileCoursesOpen ? (
                    <FaChevronUp size={13} />
                  ) : (
                    <FaChevronDown size={13} />
                  )}
                </button>

                {mobileCoursesOpen && (
                  <div
                    className="
                      ml-5
                      mt-1
                      border-l-2
                      border-[#A37B3F]
                      pl-3
                      space-y-1
                    "
                  >
                    <Link
                      to="/NoraniQaida"
                      onClick={() => setMenuOpen(false)}
                      className="
                        block
                        px-3
                        py-2
                        text-[#006b55]
                        text-sm
                        hover:bg-gray-100
                        rounded
                      "
                    >
                      Norani Qaida Course
                    </Link>

                    <Link
                      to="/MadaniQaida"
                      onClick={() => setMenuOpen(false)}
                      className="
                        block
                        px-3
                        py-2
                        text-[#006b55]
                        text-sm
                        hover:bg-gray-100
                        rounded
                      "
                    >
                      Madni Qaida
                    </Link>

                    <Link
                      to="/NazraQuran"
                      onClick={() => setMenuOpen(false)}
                      className="
                        block
                        px-3
                        py-2
                        text-[#006b55]
                        text-sm
                        hover:bg-gray-100
                        rounded
                      "
                    >
                      Nazra Quran
                    </Link>

                    <Link
                      to="/QuranMemorization"
                      onClick={() => setMenuOpen(false)}
                      className="
                        block
                        px-3
                        py-2
                        text-[#006b55]
                        text-sm
                        hover:bg-gray-100
                        rounded
                      "
                    >
                      Quran Memorization
                    </Link>

                    <Link
                      to="/QuranInterpretation"
                      onClick={() => setMenuOpen(false)}
                      className="
                        block
                        px-3
                        py-2
                        text-[#006b55]
                        text-sm
                        hover:bg-gray-100
                        rounded
                      "
                    >
                      Quran Interpretation & Translation
                    </Link>

                    <Link
                      to="/Namaz"
                      onClick={() => setMenuOpen(false)}
                      className="
                        block
                        px-3
                        py-2
                        text-[#006b55]
                        text-sm
                        hover:bg-gray-100
                        rounded
                      "
                    >
                      Namaz-Dua-Kalma
                    </Link>

                    <Link
                      to="/BasicIslamicKnowledge"
                      onClick={() => setMenuOpen(false)}
                      className="
                        block
                        px-3
                        py-2
                        text-[#006b55]
                        text-sm
                        hover:bg-gray-100
                        rounded
                      "
                    >
                      Basic Islamic Knowledge
                    </Link>

                    <Link
                      to="/QuranicScience"
                      onClick={() => setMenuOpen(false)}
                      className="
                        block
                        px-3
                        py-2
                        text-[#006b55]
                        text-sm
                        hover:bg-gray-100
                        rounded
                      "
                    >
                      Obligatory Science Course
                    </Link>
                  </div>
                )}
              </div>

              {/* FEE */}

              <Link
                to="/Fee"
                onClick={() => setMenuOpen(false)}
                className="
                  block
                  px-4
                  py-3
                  rounded-lg
                  text-[#006b55]
                  font-semibold
                  hover:bg-[#F3D5A3]
                  transition
                "
              >
                Fee
              </Link>

              {/* TO BE TEACHER */}

              <Link
                to="/Teacher"
                onClick={() => setMenuOpen(false)}
                className="
                  block
                  px-4
                  py-3
                  rounded-lg
                  text-[#006b55]
                  font-semibold
                  hover:bg-[#F3D5A3]
                  transition
                "
              >
                To Be Teacher
              </Link>

              {/* CONTACT */}

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="
                  block
                  px-4
                  py-3
                  rounded-lg
                  text-[#006b55]
                  font-semibold
                  hover:bg-[#F3D5A3]
                  transition
                "
              >
                Contact
              </Link>

              {/* SIGN IN INSIDE MOBILE LIST */}

              <button
                onClick={openLogin}
                className="
                  w-full
                  text-left
                  px-4
                  py-3
                  rounded-lg
                  bg-[#0E7C5A]
                  text-white
                  font-semibold
                  hover:bg-[#095b43]
                  transition
                "
              >
                Sign In
              </button>
            </div>
          )}
        </section>
      )}

      {/* =====================================================
          LOGIN / SIGNUP / FORGOT SECTION
      ===================================================== */}

      {Card && (
        <section
          className="
            fixed
            inset-0
            z-[9999]
            bg-[rgb(255,251,232)]
            min-h-screen
            w-full
            flex
            items-center
            justify-center
            px-4
            py-8
            overflow-hidden
          "
        >
          {/* =================================================
              LOGIN CARD
          ================================================= */}

          {!showSignup && !showForgot && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="
                border
                border-[#ebcf72]
                shadow-lg
                bg-white
                min-h-[470px]
                w-full
                max-w-[400px]
                rounded-xl
                p-5
              "
            >
              <div
                className="
                  bg-[#F2E7C2]
                  rounded-full
                  h-[50px]
                  w-[50px]
                  flex
                  items-center
                  justify-center
                  mx-auto
                  mt-1
                "
              >
                <img
                  className="h-[30px] w-[30px]"
                  src={profile}
                  alt="Profile"
                />
              </div>

              <h1 className="text-2xl text-center mt-5 font-extrabold">
                Welcome Back
              </h1>

              <p
                className="
                  h-[7px]
                  w-[80px]
                  mx-auto
                  mt-2
                  bg-gradient-to-r
                  from-[#B38A2E]
                  to-[#0E7C5A]
                  rounded-xl
                "
              ></p>

              <p className="mt-3 mb-5 text-sm text-center">
                Login to continue your{" "}
                <b className="text-[#d4af37]">Quranic</b> journey
              </p>

              {/* EMAIL */}

              <label className="text-xs font-bold">
                Email Address
              </label>

              <input
                className={`
                  mt-2
                  text-xs
                  pl-2
                  bg-[#FAF9F6]
                  outline-none
                  h-[38px]
                  w-full
                  rounded-sm
                  border
                  ${
                    emailError
                      ? "border-red-500"
                      : "border-[#d1d5dc] focus:border-[#d4af37]"
                  }
                `}
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
              />

              {emailError && (
                <p className="text-red-500 text-[11px] mt-1">
                  {emailError}
                </p>
              )}

              {/* PASSWORD */}

              <label className="text-xs font-bold mt-4 block">
                Password
              </label>

              <div className="relative mt-2">
                <input
                  className={`
                    text-xs
                    pl-2
                    pr-10
                    bg-[#FAF9F6]
                    outline-none
                    h-[38px]
                    w-full
                    rounded-sm
                    border
                    ${
                      passwordError
                        ? "border-red-500"
                        : "border-[#d1d5dc] focus:border-[#d4af37]"
                    }
                  `}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-[#d4af37]
                  "
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>

              {passwordError && (
                <p className="text-red-500 text-[11px] mt-1">
                  {passwordError}
                </p>
              )}

              {/* LOGIN BUTTON */}

              <button
                onClick={handleLogin}
                disabled={processing}
                className={`
                  h-[40px]
                  w-full
                  text-white
                  rounded-xl
                  mt-6
                  font-semibold
                  ${
                    processing
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#B38A2E] to-[#0E7C5A] cursor-pointer"
                  }
                `}
              >
                {processing ? "Processing..." : "Login"}
              </button>

              {/* FORGOT */}

              <button
                onClick={() => {
                  setShowForgot(true);
                  setShowSignup(false);
                }}
                className="
                  block
                  mx-auto
                  mt-4
                  text-green-800
                  font-semibold
                  text-xs
                  hover:underline
                "
              >
                Forget your password?
              </button>

              {/* SIGNUP */}

              <p className="text-center mt-5 text-xs">
                Don't have an account?

                <button
                  onClick={() => {
                    setShowSignup(true);
                    setShowForgot(false);
                  }}
                  className="
                    text-[#d4af37]
                    hover:text-[#886902]
                    font-bold
                    ml-1
                  "
                >
                  Sign up here
                </button>
              </p>
            </motion.div>
          )}

          {/* =================================================
              SIGNUP CARD
          ================================================= */}

          {showSignup && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="
                bg-white
                w-full
                max-w-[465px]
                rounded-2xl
                border
                border-[#ebcf72]
                shadow-xl
                px-5
                sm:px-7
                py-6
              "
            >
              <div
                className="
                  h-[55px]
                  w-[55px]
                  mx-auto
                  rounded-full
                  bg-[#F2E7C2]
                  border-2
                  border-[#d4af37]
                  flex
                  items-center
                  justify-center
                  shadow-md
                "
              >
                <span className="text-[#d4af37] text-[25px]">
                  ☹
                </span>
              </div>

              <h1
                className="
                  text-2xl
                  sm:text-[26px]
                  font-extrabold
                  text-center
                  mt-3
                  text-[#26364B]
                "
              >
                Create Your Account
              </h1>

              <p
                className="
                  h-[6px]
                  w-[88px]
                  mx-auto
                  mt-2
                  rounded-full
                  bg-gradient-to-r
                  from-[#B38A2E]
                  to-[#0E7C5A]
                "
              ></p>

              <p className="text-center text-sm text-gray-500 mt-3 mb-6">
                Sign up to start your Quranic journey
              </p>

              {/* FULL NAME */}

              <label className="block text-xs font-bold text-[#26364B] mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  setNameError("");
                }}
                className={`
                  w-full
                  h-[40px]
                  rounded-lg
                  bg-[#FAF9F6]
                  text-xs
                  pl-3
                  outline-none
                  border
                  ${
                    nameError
                      ? "border-red-500"
                      : "border-[#d1d5dc] focus:border-[#d4af37]"
                  }
                `}
              />

              {nameError && (
                <p className="text-red-500 text-[11px] mt-1">
                  {nameError}
                </p>
              )}

              {/* SIGNUP EMAIL */}

              <label className="block text-xs font-bold text-[#26364B] mt-4 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={signupEmail}
                onChange={(e) => {
                  setSignupEmail(e.target.value);
                  setSignupEmailError("");
                }}
                className={`
                  w-full
                  h-[40px]
                  rounded-lg
                  bg-[#FAF9F6]
                  text-xs
                  pl-3
                  outline-none
                  border
                  ${
                    signupEmailError
                      ? "border-red-500"
                      : "border-[#d1d5dc] focus:border-[#d4af37]"
                  }
                `}
              />

              {signupEmailError && (
                <p className="text-red-500 text-[11px] mt-1">
                  {signupEmailError}
                </p>
              )}

              {/* SIGNUP PASSWORD */}

              <label className="block text-xs font-bold text-[#26364B] mt-4 mb-2">
                Password
              </label>

              <div className="relative">
                <input
                  type={showSignupPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={signupPassword}
                  onChange={(e) => {
                    setSignupPassword(e.target.value);
                    setSignupPasswordError("");
                  }}
                  className={`
                    w-full
                    h-[40px]
                    rounded-lg
                    bg-[#FAF9F6]
                    text-xs
                    pl-3
                    pr-10
                    outline-none
                    border
                    ${
                      signupPasswordError
                        ? "border-red-500"
                        : "border-[#d1d5dc] focus:border-[#d4af37]"
                    }
                  `}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowSignupPassword(!showSignupPassword)
                  }
                  className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-[#d4af37]
                  "
                >
                  {showSignupPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>

              {signupPasswordError && (
                <p className="text-red-500 text-[11px] mt-1">
                  {signupPasswordError}
                </p>
              )}

              {/* CONFIRM PASSWORD */}

              <label className="block text-xs font-bold text-[#26364B] mt-4 mb-2">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setConfirmPasswordError("");
                  }}
                  className={`
                    w-full
                    h-[40px]
                    rounded-lg
                    bg-[#FAF9F6]
                    text-xs
                    pl-3
                    pr-10
                    outline-none
                    border
                    ${
                      confirmPasswordError
                        ? "border-red-500"
                        : "border-[#d1d5dc] focus:border-[#d4af37]"
                    }
                  `}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-[#d4af37]
                  "
                >
                  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>

              {confirmPasswordError && (
                <p className="text-red-500 text-[11px] mt-1">
                  {confirmPasswordError}
                </p>
              )}

              {/* SIGNUP BUTTON */}

              <button
                onClick={handleSignup}
                disabled={signupProcessing}
                className={`
                  block
                  mx-auto
                  mt-6
                  h-[42px]
                  w-[180px]
                  rounded-xl
                  text-white
                  font-bold
                  shadow-md
                  ${
                    signupProcessing
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#B38A2E] to-[#0E7C5A] cursor-pointer"
                  }
                `}
              >
                {signupProcessing ? "Processing..." : "Sign Up"}
              </button>

              {/* LOGIN LINK */}

              <p className="text-center text-xs text-[#4B5563] mt-5">
                Already have an account?

                <button
                  onClick={() => {
                    setShowSignup(false);
                    setShowForgot(false);
                  }}
                  className="
                    text-[#d4af37]
                    ml-1
                    font-bold
                    hover:underline
                  "
                >
                  Login
                </button>
              </p>
            </motion.div>
          )}

          {/* =================================================
              FORGOT PASSWORD CARD
          ================================================= */}

          {showForgot && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="
                bg-gradient-to-r
                from-[#EAF3EF]
                to-[#F6F2E2]
                w-full
                max-w-[368px]
                rounded-2xl
                shadow-xl
                border
                border-[#ebcf72]
                p-6
                relative
              "
            >
              {/* CLOSE */}

              <button
                onClick={() => setShowForgot(false)}
                className="
                  absolute
                  right-4
                  top-3
                  text-gray-400
                  font-bold
                  cursor-pointer
                  text-xl
                "
              >
                ×
              </button>

              <h1
                className="
                  text-xl
                  font-extrabold
                  text-center
                  text-[#26364B]
                  mt-2
                "
              >
                Forgot Password
              </h1>

              {/* EMAIL */}

              <input
                type="email"
                placeholder="Enter your email"
                value={forgotEmail}
                onChange={(e) => {
                  setForgotEmail(e.target.value);
                  setForgotEmailError("");
                }}
                className={`
                  w-full
                  h-[42px]
                  rounded-lg
                  bg-[#FAF9F6]
                  text-xs
                  pl-3
                  mt-5
                  outline-none
                  border
                  ${
                    forgotEmailError
                      ? "border-red-500"
                      : "border-[#d1d5dc] focus:border-[#d4af37]"
                  }
                `}
              />

              {forgotEmailError && (
                <p className="text-red-500 text-[11px] mt-1">
                  {forgotEmailError}
                </p>
              )}

              {/* SEND OTP */}

              <button
                onClick={handleSendOTP}
                disabled={otpProcessing}
                className={`
                  w-full
                  h-[43px]
                  mt-3
                  rounded-xl
                  text-white
                  font-bold
                  ${
                    otpProcessing
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#d4af37] to-[#B38A2E] cursor-pointer"
                  }
                `}
              >
                {otpProcessing ? "Processing..." : "Send OTP"}
              </button>

              {/* CANCEL */}

              <button
                onClick={() => setShowForgot(false)}
                className="
                  block
                  mx-auto
                  mt-4
                  text-xs
                  font-semibold
                  text-[#26364B]
                  cursor-pointer
                "
              >
                Cancel
              </button>
            </motion.div>
          )}
        </section>
      )}
    </div>
  );
};

export default Navbar;
