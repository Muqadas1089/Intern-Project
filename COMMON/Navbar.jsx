import React, { useState } from "react";
import logo from "../src/assets/logo.png";
import profile from "../src/assets/profile.png";

import { FaEye, FaEyeSlash, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {

  /* =========================================================
     LOGIN CARD
  ========================================================= */

  const [Card, SetCard] = useState(false);

  /* =========================================================
     PASSWORD VISIBILITY
  ========================================================= */

  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  /* =========================================================
     LOGIN / SIGNUP / FORGOT
  ========================================================= */

  const [showForgot, setShowForgot] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  /* =========================================================
     LOGIN STATES
  ========================================================= */

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [processing, setProcessing] = useState(false);

  /* =========================================================
     SIGNUP STATES
  ========================================================= */

  const [fullName, setFullName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [signupEmailError, setSignupEmailError] = useState("");
  const [signupPasswordError, setSignupPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [signupProcessing, setSignupProcessing] = useState(false);

  /* =========================================================
     FORGOT PASSWORD
  ========================================================= */

  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotEmailError, setForgotEmailError] = useState("");
  const [otpProcessing, setOtpProcessing] = useState(false);

  /* =========================================================
     LOGIN FUNCTION
  ========================================================= */

  const handleLogin = () => {

    setEmailError("");
    setPasswordError("");

    if (email === "") {

      setEmailError("Email is required");
      return;

    }

    else if (!email.includes("@")) {

      setEmailError("Please enter a valid email address");
      return;

    }

    else if (password === "") {

      setPasswordError("Password is required");
      return;

    }

    else {

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

    }

    else if (signupEmail === "") {

      setSignupEmailError("Email is required");
      return;

    }

    else if (!signupEmail.includes("@")) {

      setSignupEmailError("Please enter a valid email address");
      return;

    }

    else if (signupPassword === "") {

      setSignupPasswordError("Password is required");
      return;

    }

    else if (confirmPassword === "") {

      setConfirmPasswordError("Please confirm your password");
      return;

    }

    else if (signupPassword !== confirmPassword) {

      setConfirmPasswordError("Passwords do not match");
      return;

    }

    else {

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

    }

    else if (!forgotEmail.includes("@")) {

      setForgotEmailError("Please enter a valid email address");
      return;

    }

    else {

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
            bg-gradient-to-r
            from-[#F3D5A3]
            to-[#A37B3F]
            flex
            items-center
            justify-around
            h-[62px]
            px-[60px]
          "
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <div className="flex justify-around items-center gap-2 ml-[175px]">

            <img
              src={logo}
              alt="Al Hafiz Online Quran Academy"
              className="h-[45px] w-[45px] rounded"
            />

            <h1 className="font-bold text-white text-xs">

              Al Hafiz-Online
              <br />

              Quran Academy

            </h1>

          </div>

          {/* =================================================
              NAVBAR LINKS
          ================================================= */}

          <div
            className="
              flex
              items-center
              gap-3
              text-sm
              font-semibold
              text-white
              ml-[0px]
            "
          >

            {/* HOME */}

            <Link
              to="/"
              className="px-3 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              Home
            </Link>

            {/* ABOUT */}

            <Link
              to="/about"
              className="px-3 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              About
            </Link>

            {/* SERVICES */}

            <Link
              to="/services"
              className="px-3 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              Services
            </Link>

            {/* COURSES */}

{/* COURSES */}

<div className="relative group">

  {/* COURSES BUTTON */}

<Link to= "/"> 
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


  {/* =====================================================
      FIRST DROPDOWN
  ===================================================== */}

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

    {/* =================================================
        QURAN COURSES + SECOND DROPDOWN
    ================================================= */}

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

        <span>
          Quran Courses
        </span>

        <FaChevronRight className="text-[11px]" />

      </div>


      {/* =================================================
          SECOND DROPDOWN
      ================================================= */}

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


    {/* =================================================
        NAMAZ DUAA KALMA
    ================================================= */}

{/* =================================================
    NAMAZ DUAA KALMA
================================================= */}

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

    {/* =================================================
        BASIC ISLAMIC KNOWLEDGE
    ================================================= */}

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


    {/* =================================================
        OBLIGATORY SCIENCE COURSE
    ================================================= */}

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

            {/* FEES */}

            <Link
              to="/Fee"
              className="px-3 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              Fee
            </Link>

            {/* TO BE TEACHER */}

            <Link
              to="/Teacher"
              className="px-3 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              To Be Teacher
            </Link>

            {/* CONTACT */}

            <Link
              to="/contact"
              className="px-3 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              Contact
            </Link>

          </div>

          {/* =================================================
              SIGN IN BUTTON
          ================================================= */}

          <button
            onClick={() => {

              SetCard(true);
              setShowSignup(false);
              setShowForgot(false);

            }}
            className="
              h-[32px]
              w-[75px]
              mr-[190px]
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

        </section>

      )}

      {/* =====================================================
          LOGIN / SIGNUP / FORGOT PASSWORD SCREEN
      ===================================================== */}

      {Card && (

        <div>

          <section
            className="
              bg-[rgb(255,251,232)]
              h-screen
              w-full
              flex
              items-center
              justify-center
            "
          >

            {/* =================================================
                LOGIN CARD
            ================================================= */}

            {!showSignup && !showForgot && (

              <motion.div
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  border-[#ebcf72]
                  shadow-lg
                  bg-white
                  h-[470px]
                  w-[400px]
                  border-3
                  rounded-xl
                "
              >

                {/* PROFILE ICON */}

                <div
                  className="
                    bg-[#F2E7C2]
                    rounded-full
                    h-[50px]
                    w-[50px]
                    flex
                    items-center
                    p-[10px]
                    ml-[170px]
                    mt-[20px]
                  "
                >

                  <img
                    className="h-[30px] w-[30px]"
                    src={profile}
                    alt=""
                  />

                </div>

                {/* TITLE */}

                <h1
                  className="
                    text-2xl
                    ml-[120px]
                    mt-[19px]
                    font-extrabold
                  "
                >
                  Welcome Back
                </h1>

                {/* LINE */}

                <p
                  className="
                    h-[7px]
                    w-[80px]
                    ml-[160px]
                    mt-[8px]
                    bg-gradient-to-r
                    from-[#B38A2E]
                    to-[#0E7C5A]
                    rounded-xl
                  "
                ></p>

                {/* DESCRIPTION */}

                <p
                  className="
                    ml-[70px]
                    mt-[10px]
                    mb-[20px]
                    text-sm
                  "
                >
                  Login to continue your{" "}

                  <b className="text-[#d4af37]">
                    Quranic
                  </b>

                  {" "}journey
                </p>

                {/* EMAIL LABEL */}

                <label
                  className="
                    text-xs
                    font-bold
                    ml-[20px]
                  "
                >
                  Email Address
                </label>

                <br />

                {/* EMAIL INPUT */}

                <input
                  className={`
                    ml-[20px]
                    text-xs
                    pl-[5px]
                    mb-[5px]
                    bg-[#FAF9F6]
                    outline-none
                    h-[30px]
                    w-[354px]
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

                {/* EMAIL ERROR */}

                {emailError && (

                  <p className="ml-[20px] text-red-500 text-[11px]">
                    {emailError}
                  </p>

                )}

                {/* PASSWORD LABEL */}

                <label
                  className="
                    text-xs
                    font-bold
                    ml-[20px]
                    mt-[10px]
                    block
                  "
                >
                  Password
                </label>

                {/* PASSWORD */}

                <div className="relative ml-[20px]">

                  <input
                    className={`
                      text-xs
                      pl-[5px]
                      pr-[25px]
                      bg-[#FAF9F6]
                      outline-none
                      h-[30px]
                      w-[354px]
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

                  {/* SHOW PASSWORD */}

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="
                      absolute
                      right-[30px]
                      top-1/2
                      -translate-y-1/2
                      text-[#d4af37]
                      cursor-pointer
                    "
                  >

                    {showPassword ? (
                      <FaEye />
                    ) : (
                      <FaEyeSlash />
                    )}

                  </button>

                </div>

                {/* PASSWORD ERROR */}

                {passwordError && (

                  <p
                    className="
                      ml-[20px]
                      text-red-500
                      text-[11px]
                      mt-[3px]
                    "
                  >
                    {passwordError}
                  </p>

                )}

                {/* LOGIN BUTTON */}

                <button
                  onClick={handleLogin}
                  disabled={processing}
                  className={`
                    h-[35px]
                    w-[345px]
                    text-white
                    rounded-xl
                    ml-[20px]
                    mt-[20px]
                    font-semibold
                    ${
                      processing
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#B38A2E] to-[#0E7C5A] cursor-pointer"
                    }
                  `}
                >

                  {processing
                    ? "Processing..."
                    : "Login"}

                </button>

                <br />

                {/* FORGOT PASSWORD */}

                <button
                  onClick={() => {

                    setShowForgot(true);
                    setShowSignup(false);

                  }}
                  className="
                    ml-[140px]
                    text-green-800
                    font-semibold
                    text-xs
                    hover:underline
                    cursor-pointer
                  "
                >
                  Forget your password?
                </button>

                {/* SIGNUP */}

                <p
                  className="
                    ml-[100px]
                    mt-[20px]
                    text-xs
                  "
                >

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
                      ml-[2px]
                      cursor-pointer
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
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  bg-white
                  w-[465px]
                  min-h-[610px]
                  rounded-2xl
                  border
                  border-[#ebcf72]
                  shadow-xl
                  px-[25px]
                  py-[25px]
                "
              >

                {/* ICON */}

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

                {/* TITLE */}

                <h1
                  className="
                    text-[26px]
                    font-extrabold
                    text-center
                    mt-[12px]
                    text-[#26364B]
                  "
                >
                  Create Your Account
                </h1>

                {/* LINE */}

                <p
                  className="
                    h-[6px]
                    w-[88px]
                    mx-auto
                    mt-[10px]
                    rounded-full
                    bg-gradient-to-r
                    from-[#B38A2E]
                    to-[#0E7C5A]
                  "
                ></p>

                {/* DESCRIPTION */}

                <p
                  className="
                    text-center
                    text-sm
                    text-gray-500
                    mt-[10px]
                    mb-[24px]
                  "
                >
                  Sign up to start your Quranic journey
                </p>

                {/* FULL NAME */}

                <label
                  className="
                    block
                    text-xs
                    font-bold
                    text-[#26364B]
                    mb-[6px]
                  "
                >
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
                    h-[38px]
                    rounded-lg
                    bg-[#FAF9F6]
                    text-xs
                    pl-[10px]
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

                  <p className="text-red-500 text-[11px] mt-[3px]">
                    {nameError}
                  </p>

                )}

                {/* EMAIL */}

                <label
                  className="
                    block
                    text-xs
                    font-bold
                    text-[#26364B]
                    mt-[17px]
                    mb-[6px]
                  "
                >
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
                    h-[38px]
                    rounded-lg
                    bg-[#FAF9F6]
                    text-xs
                    pl-[10px]
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

                  <p className="text-red-500 text-[11px] mt-[3px]">
                    {signupEmailError}
                  </p>

                )}

                {/* PASSWORD */}

                <label
                  className="
                    block
                    text-xs
                    font-bold
                    text-[#26364B]
                    mt-[17px]
                    mb-[6px]
                  "
                >
                  Password
                </label>

                <div className="relative">

                  <input
                    type={
                      showSignupPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="••••••••"
                    value={signupPassword}
                    onChange={(e) => {

                      setSignupPassword(e.target.value);
                      setSignupPasswordError("");

                    }}
                    className={`
                      w-full
                      h-[38px]
                      rounded-lg
                      bg-[#FAF9F6]
                      text-xs
                      pl-[10px]
                      pr-[35px]
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
                      setShowSignupPassword(
                        !showSignupPassword
                      )
                    }
                    className="
                      absolute
                      right-[10px]
                      top-1/2
                      -translate-y-1/2
                      text-[#d4af37]
                      cursor-pointer
                    "
                  >

                    {showSignupPassword ? (
                      <FaEye />
                    ) : (
                      <FaEyeSlash />
                    )}

                  </button>

                </div>

                {signupPasswordError && (

                  <p className="text-red-500 text-[11px] mt-[3px]">
                    {signupPasswordError}
                  </p>

                )}

                {/* CONFIRM PASSWORD */}

                <label
                  className="
                    block
                    text-xs
                    font-bold
                    text-[#26364B]
                    mt-[17px]
                    mb-[6px]
                  "
                >
                  Confirm Password
                </label>

                <div className="relative">

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => {

                      setConfirmPassword(e.target.value);
                      setConfirmPasswordError("");

                    }}
                    className={`
                      w-full
                      h-[38px]
                      rounded-lg
                      bg-[#FAF9F6]
                      text-xs
                      pl-[10px]
                      pr-[35px]
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
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="
                      absolute
                      right-[10px]
                      top-1/2
                      -translate-y-1/2
                      text-[#d4af37]
                      cursor-pointer
                    "
                  >

                    {showConfirmPassword ? (
                      <FaEye />
                    ) : (
                      <FaEyeSlash />
                    )}

                  </button>

                </div>

                {confirmPasswordError && (

                  <p className="text-red-500 text-[11px] mt-[3px]">
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
                    mt-[18px]
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

                  {signupProcessing
                    ? "Processing..."
                    : "Sign Up"}

                </button>

                {/* LOGIN */}

                <p
                  className="
                    text-center
                    text-xs
                    text-[#4B5563]
                    mt-[20px]
                  "
                >

                  Already have an account?

                  <button
                    onClick={() => {

                      setShowSignup(false);
                      setShowForgot(false);

                    }}
                    className="
                      text-[#d4af37]
                      ml-[4px]
                      font-bold
                      hover:underline
                      cursor-pointer
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
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  bg-gradient-to-r
                  from-[#EAF3EF]
                  to-[#F6F2E2]
                  w-[368px]
                  h-[270px]
                  rounded-2xl
                  shadow-xl
                  border
                  border-[#ebcf72]
                  p-[25px]
                  relative
                "
              >

                {/* CLOSE */}

                <button
                  onClick={() => setShowForgot(false)}
                  className="
                    absolute
                    right-[17px]
                    top-[15px]
                    text-gray-400
                    font-bold
                    cursor-pointer
                  "
                >
                  ×
                </button>

                {/* TITLE */}

                <h1
                  className="
                    text-xl
                    font-extrabold
                    text-center
                    text-[#26364B]
                    mt-[10px]
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
                    pl-[12px]
                    mt-[15px]
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

                  <p className="text-red-500 text-[11px] mt-[3px]">
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
                    mt-[12px]
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

                  {otpProcessing
                    ? "Processing..."
                    : "Send OTP"}

                </button>

                {/* CANCEL */}

                <button
                  onClick={() => setShowForgot(false)}
                  className="
                    block
                    mx-auto
                    mt-[15px]
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

        </div>

      )}

    </div>

  );
};

export default Navbar;