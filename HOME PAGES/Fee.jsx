import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fees from "../src/assets/fees.jpg";
import bi1 from "../src/assets/bi1.jpg";

import {
  FaCheck,
  FaCreditCard,
  FaGlobe,
  FaPlus,
  FaChevronDown,
  FaCalendarAlt,
  FaShieldAlt,
  FaUsers,
  FaTimesCircle,
} from "react-icons/fa";

const FeeStructure = () => {
  // =========================================================
  // STATES
  // =========================================================

  const [currency, setCurrency] = useState("PKR");
  const [openIndex, setOpenIndex] = useState(null);

  const [showPlanModal, setShowPlanModal] = useState(false);

  const [country, setCountry] = useState("");
  const [customFee, setCustomFee] = useState("");
  const [planType, setPlanType] = useState("Weekly");

  const [customPlans, setCustomPlans] = useState([]);

  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  // =========================================================
  // CURRENCY DATA
  // =========================================================

  const currencies = ["PKR", "USD", "GBP"];

  /*
    PKR is our main/base currency.

    6000 PKR = £17.14
    9000 PKR = £25.71

    Approximate conversion rates are used for display.
  */

  const currencyRates = {
    PKR: 1,
    USD: 1 / 280,
    GBP: 1 / 350,
  };

  // =========================================================
  // PRICING TABLE DATA
  // =========================================================

  const plans = [
    {
      name: "Basic",
      classesWeek: "3",
      classesMonth: "12",
      feePKR: 6000,
    },
    {
      name: "Premium",
      classesWeek: "5",
      classesMonth: "20",
      feePKR: 9000,
    },
  ];

  // =========================================================
  // FAQ DATA
  // =========================================================

  const faqData = [
    {
      question: "What type of payments do you accept?",
      answer:
        "We accept secure payments through Debit Cards, Credit Cards, and PayPal. Our payment options are designed to make the enrollment process simple and convenient.",
      icon: <FaCreditCard />,
    },
    {
      question: "When should I pay my monthly fee?",
      answer:
        "Monthly fees should be paid at the beginning of each monthly learning period to ensure uninterrupted Quran classes.",
      icon: <FaCalendarAlt />,
    },
    {
      question: "Do I have to give credit card information to anyone?",
      answer:
        "No. You should only enter payment information through the secure payment process. Our teachers do not require students to share card information directly.",
      icon: <FaShieldAlt />,
    },
    {
      question: "Is there any discount for family members?",
      answer:
        "Yes. Families enrolling multiple children can receive a sibling discount. Please contact us for the current family pricing options.",
      icon: <FaUsers />,
    },
    {
      question: "What if I want to cancel my classes?",
      answer:
        "If you need to cancel your classes, please contact our support team so we can guide you through the cancellation process.",
      icon: <FaTimesCircle />,
    },
  ];

  // =========================================================
  // FORMAT CURRENCY
  // =========================================================

  const formatFee = (feePKR) => {
    if (currency === "PKR") {
      return `${feePKR.toFixed(2)} PKR`;
    }

    if (currency === "USD") {
      const usd = feePKR * currencyRates.USD;
      return `$${usd.toFixed(2)}`;
    }

    if (currency === "GBP") {
      const gbp = feePKR * currencyRates.GBP;
      return `£${gbp.toFixed(2)}`;
    }

    return `${feePKR.toFixed(2)} PKR`;
  };

  // =========================================================
  // CUSTOM PLAN FEE
  // =========================================================

  const formatCustomFee = (feeGBP) => {
    const numericFee = Number(feeGBP);

    if (!numericFee) {
      return "";
    }

    if (currency === "GBP") {
      return `£${numericFee.toFixed(2)}`;
    }

    if (currency === "PKR") {
      const pkr = numericFee * 350;
      return `${pkr.toFixed(2)} PKR`;
    }

    if (currency === "USD") {
      const usd = numericFee * (350 / 280);
      return `$${usd.toFixed(2)}`;
    }

    return `£${numericFee.toFixed(2)}`;
  };

  // =========================================================
  // FAQ OPEN / CLOSE
  // =========================================================

  const handleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  // =========================================================
  // SHOW NOTIFICATION
  // =========================================================

  const showNotification = (message) => {
    setNotification({
      show: true,
      message,
    });

    setTimeout(() => {
      setNotification({
        show: false,
        message: "",
      });
    }, 3000);
  };

  // =========================================================
  // ENROLL NOW
  // =========================================================

  const handleEnroll = () => {
    showNotification("You are selected for this course.");
  };

  // =========================================================
  // CONTACT US
  // =========================================================

  const handleContact = () => {
    showNotification("My team will connect you soon.");
  };

  // =========================================================
  // CREATE CUSTOM PLAN
  // =========================================================

  const handleAddPlan = () => {
    if (!country.trim()) {
      showNotification("Please enter your country.");
      return;
    }

    if (!customFee || Number(customFee) < 35) {
      showNotification("Please enter a fee of at least £35.");
      return;
    }

    const newPlan = {
      name: `${planType} Plan`,
      classesWeek:
        planType === "Weekly"
          ? "Custom"
          : planType === "Monthly"
            ? "Custom"
            : "Custom",
      classesMonth: "Custom",
      feeGBP: Number(customFee),
      country: country,
      planType: planType,
    };

    setCustomPlans((previousPlans) => [...previousPlans, newPlan]);

    setCountry("");
    setCustomFee("");
    setPlanType("Weekly");

    setShowPlanModal(false);

    showNotification("Your custom plan has been added.");
  };

  // =========================================================
  // CLOSE MODAL
  // =========================================================

  const handleCloseModal = () => {
    setShowPlanModal(false);
  };

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <div className="w-full">

      {/* =====================================================
          SUCCESS / INFO NOTIFICATION
      ===================================================== */}

      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="fixed left-1/2 top-6 z-[200] w-[90%] max-w-md -translate-x-1/2"
          >
            <div className="rounded-xl bg-[#087f5b] px-6 py-4 text-center text-sm font-semibold text-white shadow-xl md:text-base">
              {notification.message}
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* =====================================================
          CREATE PLAN MODAL
      ===================================================== */}

      <AnimatePresence>
        {showPlanModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/50 px-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-[560px] rounded-2xl bg-white p-7 shadow-2xl md:p-8"
            >

              {/* MODAL HEADING */}

              <h2 className="font-serif text-3xl font-bold text-[#087f5b]">
                Create Your Self Plan
              </h2>


              {/* COUNTRY */}

              <div className="mt-6">

                <label className="mb-2 block text-base font-medium text-[#27364d]">
                  Country
                </label>

                <input
                  type="text"
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                  placeholder="Enter your country"
                  className="w-full rounded-xl border border-[#ccd3dc] px-3 py-3 text-base text-[#27364d] outline-none transition duration-300 placeholder:text-gray-400 focus:border-[#087f5b] focus:ring-2 focus:ring-[#087f5b]/10"
                />

              </div>


              {/* FEE */}

              <div className="mt-6">

                <label className="mb-2 block text-base font-medium text-[#27364d]">
                  Choose Fee (min $35)
                </label>

                <input
                  type="number"
                  min="35"
                  value={customFee}
                  onChange={(event) => setCustomFee(event.target.value)}
                  placeholder="Enter amount in GBP"
                  className="w-full rounded-xl border border-[#ccd3dc] px-3 py-3 text-base text-[#27364d] outline-none transition duration-300 placeholder:text-gray-400 focus:border-[#087f5b] focus:ring-2 focus:ring-[#087f5b]/10"
                />

              </div>


              {/* PLAN TYPE */}

              <div className="mt-6">

                <label className="mb-2 block text-base font-medium text-[#27364d]">
                  Plan Type
                </label>

                <select
                  value={planType}
                  onChange={(event) => setPlanType(event.target.value)}
                  className="w-full rounded-xl border border-[#ccd3dc] bg-white px-3 py-3 text-base text-[#27364d] outline-none transition duration-300 focus:border-[#087f5b] focus:ring-2 focus:ring-[#087f5b]/10"
                >
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Flexible">Flexible</option>
                </select>

              </div>


              {/* MODAL BUTTONS */}

              <div className="mt-8 flex justify-end gap-4">

                <motion.button
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={handleCloseModal}
                  className="rounded-xl border border-[#9eabbc] bg-white px-7 py-3 text-sm font-semibold text-[#4b5870] shadow-sm transition duration-300 hover:bg-gray-50"
                >
                  Cancel
                </motion.button>


                <motion.button
                  whileHover={{
                    y: -2,
                    boxShadow: "0 8px 20px rgba(8, 127, 91, 0.22)",
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={handleAddPlan}
                  className="rounded-xl bg-[#087f5b] px-7 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-[#066b4c]"
                >
                  Add Plan
                </motion.button>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* =====================================================
          SECTION 1
          QURAN LEARNING FEE STRUCTURE
      ===================================================== */}

      <section className="w-full bg-white px-4 py-16 md:px-8 lg:px-12">

        {/* SECTION HEADING */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mx-auto max-w-3xl text-center"
        >

          <h1 className="font-serif text-4xl font-extrabold tracking-tight text-[#087f5b] md:text-5xl lg:text-6xl">
            Quran Learning Fee Structure
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#27364d] md:text-lg">
            Learn Quran with certified tutors at affordable rates. Flexible
            plans designed for every student across the world.
          </p>

        </motion.div>


        {/* MAIN FEE CARD */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          whileHover={{
            boxShadow: "0 22px 45px rgba(0, 0, 0, 0.13)",
          }}
          className="mx-auto mt-14 flex max-w-[1270px] flex-col overflow-hidden rounded-2xl border border-[#eadbc2] bg-white p-5 shadow-md transition-shadow duration-300 md:p-7 lg:flex-row lg:gap-8 lg:p-10"
        >

          {/* LEFT CONTENT */}

          <div className="flex w-full flex-col justify-center lg:w-1/2">

            <h2 className="font-serif text-3xl font-bold text-[#b08343] md:text-4xl">
              Affordable Plans for Every Family
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#27364d] md:text-lg">
              Choose between flexible schedules — 3 or 5 days per week — with
              live 1-on-1 Quran classes. Families enrolling multiple children
              receive{" "}
              <span className="font-semibold text-[#087f5b]">
                a 20% sibling discount.
              </span>
            </p>


            {/* FEATURES */}

            <div className="mt-6 space-y-3">

              <div className="flex items-start gap-3 text-[#27364d]">

                <span className="mt-1 text-sm text-[#087f5b]">
                  <FaCheck />
                </span>

                <p className="text-sm md:text-base">
                  Live one-on-one Quran sessions
                </p>

              </div>


              <div className="flex items-start gap-3 text-[#27364d]">

                <span className="mt-1 text-sm text-[#087f5b]">
                  <FaCheck />
                </span>

                <p className="text-sm md:text-base">
                  Flexible timings — learn from anywhere
                </p>

              </div>


              <div className="flex items-start gap-3 text-[#27364d]">

                <span className="mt-1 text-sm text-[#087f5b]">
                  <FaCheck />
                </span>

                <p className="text-sm md:text-base">
                  Secure payments via Debit, Credit, or PayPal
                </p>

              </div>

            </div>


            {/* BUTTONS */}

            <div className="mt-9 flex flex-wrap gap-4">

              {/* ENROLL NOW */}

              <motion.button
                whileHover={{
                  y: -2,
                  boxShadow: "0 8px 20px rgba(8, 127, 91, 0.25)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{ duration: 0.25 }}
                onClick={handleEnroll}
                className="rounded-lg bg-[#087f5b] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-[#066b4c]"
              >
                Enroll Now
              </motion.button>


              {/* CONTACT US */}

              <motion.button
                whileHover={{
                  y: -2,
                  boxShadow: "0 8px 20px rgba(176, 131, 67, 0.18)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{ duration: 0.25 }}
                onClick={handleContact}
                className="rounded-lg border border-[#b08343] bg-white px-7 py-3.5 text-sm font-semibold text-[#b08343] transition duration-300 hover:bg-[#faf5eb]"
              >
                Contact Us
              </motion.button>

            </div>

          </div>


          {/* RIGHT IMAGE */}

          <div className="mt-8 flex w-full items-center lg:mt-0 lg:w-1/2">

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="h-[280px] w-full overflow-hidden rounded-2xl md:h-[330px] lg:h-[350px]"
            >

              <img
                src={fees}
                alt="Secure Quran learning payment"
                className="h-full w-full object-cover"
              />

            </motion.div>

          </div>

        </motion.div>


        {/* =================================================
            CURRENCY BUTTONS
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-center gap-4"
        >

          {/* CURRENCIES */}

          {currencies.map((item) => (

            <motion.button
              key={item}
              whileHover={{
                y: -2,
                boxShadow:
                  currency === item
                    ? "0 8px 18px rgba(8, 127, 91, 0.20)"
                    : "0 6px 15px rgba(8, 127, 91, 0.10)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{ duration: 0.25 }}
              onClick={() => setCurrency(item)}
              className={`rounded-lg px-7 py-3 text-sm font-semibold transition-all duration-300 ${
                currency === item
                  ? "bg-[#087f5b] text-white shadow-md"
                  : "border border-[#087f5b] bg-white text-[#087f5b] hover:bg-[#f1f8f5]"
              }`}
            >
              {item}
            </motion.button>

          ))}


          {/* CREATE PLAN */}

          <motion.button
            whileHover={{
              y: -2,
              boxShadow: "0 8px 18px rgba(176, 131, 67, 0.22)",
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{ duration: 0.25 }}
            onClick={() => setShowPlanModal(true)}
            className="flex items-center gap-2 rounded-lg bg-[#b08343] px-7 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-[#9d7438]"
          >

            <FaPlus className="text-xs" />

            Create Your Plan

          </motion.button>

        </motion.div>


        {/* SUPPORT TEXT */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="mx-auto mt-6 flex items-center justify-center gap-2 text-center text-xs text-gray-500"
        >

          <FaCreditCard className="text-[#087f5b]" />

          <span>
            Secure and flexible payment options available worldwide
          </span>

          <FaGlobe className="ml-1 text-[#b08343]" />

        </motion.div>

      </section>


      {/* =====================================================
          SECTION 2
          PRICING TABLE
      ===================================================== */}

      <section className="w-full bg-white px-4 py-10 md:px-8 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mx-auto max-w-[1310px] overflow-hidden rounded-2xl border border-[#eadbc2] bg-white shadow-lg"
        >

          {/* TABLE HEADER */}

          <div className="flex items-center bg-[#b58a4b] px-4 py-5 text-center text-white md:px-6">

            <div className="w-[22%] text-sm font-semibold md:text-lg">
              Plan
            </div>

            <div className="w-[26%] text-sm font-semibold md:text-lg">
              Classes/Week
            </div>

            <div className="w-[26%] text-sm font-semibold md:text-lg">
              Classes/Month
            </div>

            <div className="w-[26%] text-sm font-semibold md:text-lg">
              Fee ({currency})
            </div>

          </div>


          {/* DEFAULT PLANS */}

          {plans.map((plan, index) => (

            <motion.div
              key={plan.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                backgroundColor: "#fcfaf6",
              }}
              className="flex items-center border-b border-[#e4e4e4] px-4 py-5 text-center transition-colors duration-300 md:px-6"
            >

              <div className="w-[22%] text-sm font-medium text-[#1f2d43] md:text-lg">
                {plan.name}
              </div>

              <div className="w-[26%] text-sm text-[#27364d] md:text-lg">
                {plan.classesWeek}
              </div>

              <div className="w-[26%] text-sm text-[#27364d] md:text-lg">
                {plan.classesMonth}
              </div>

              <div className="w-[26%] text-sm font-medium text-[#087f5b] md:text-lg">
                {formatFee(plan.feePKR)}
              </div>

            </motion.div>

          ))}


          {/* =================================================
              CUSTOM PLANS
          ================================================= */}

          <AnimatePresence>
            {customPlans.map((plan, index) => (

              <motion.div
                key={`${plan.name}-${index}`}
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="flex items-center border-b border-[#e4e4e4] px-4 py-5 text-center md:px-6"
              >

                <div className="w-[22%] text-sm font-medium text-[#b08343] md:text-lg">
                  {plan.name}
                </div>

                <div className="w-[26%] text-sm text-[#27364d] md:text-lg">
                  {plan.planType}
                </div>

                <div className="w-[26%] text-sm text-[#27364d] md:text-lg">
                  {plan.country}
                </div>

                <div className="w-[26%] text-sm font-medium text-[#087f5b] md:text-lg">
                  {formatCustomFee(plan.feeGBP)}
                </div>

              </motion.div>

            ))}
          </AnimatePresence>


          {/* BOTTOM TEXT */}

          <div className="flex items-center justify-center bg-[#faf7f2] px-5 py-6 text-center">

            <p className="font-serif text-lg font-medium text-[#b08343] md:text-2xl">
              Affordable — Flexible — Trusted by Hundreds of Families
            </p>

          </div>

        </motion.div>

      </section>


      {/* =====================================================
          SECTION 3
          FEE & PAYMENT FAQs
      ===================================================== */}

      <section className="w-full bg-[#f7f8f9] px-4 py-16 md:px-8 lg:px-12">

        <div className="mx-auto flex max-w-[1350px] items-center justify-center gap-12 lg:justify-between">

          {/* LEFT FAQ IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="hidden w-[45%] items-center justify-center lg:flex"
          >

            <div className="h-[360px] w-full max-w-[650px] overflow-hidden rounded-2xl">

              <img
                src={bi1}
                alt="FAQ Illustration"
                className="h-full w-full object-cover"
              />

            </div>

          </motion.div>


          {/* RIGHT FAQ CARD */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="w-full rounded-2xl bg-white p-6 shadow-lg md:p-8 lg:w-[48%] lg:p-10"
          >

            {/* FAQ HEADING */}

            <h2 className="text-center font-serif text-3xl font-bold text-[#087f5b] md:text-4xl">
              Fee & Payment FAQs
            </h2>


            {/* FAQ LIST */}

            <div className="mt-10 space-y-5">

              {faqData.map((faq, index) => {

                const isOpen = openIndex === index;

                return (

                  <motion.div
                    key={faq.question}
                    layout
                    className="overflow-hidden rounded-xl"
                  >

                    {/* QUESTION BUTTON */}

                    <button
                      onClick={() => handleFAQ(index)}
                      className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-white transition-all duration-300 md:text-base ${
                        isOpen
                          ? "bg-[#066f50]"
                          : "bg-[#087f5b] hover:bg-[#066f50]"
                      }`}
                    >

                      <span>
                        {faq.question}
                      </span>


                      <motion.span
                        animate={{
                          rotate: isOpen ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="shrink-0"
                      >
                        <FaChevronDown />
                      </motion.span>

                    </button>


                    {/* ANSWER */}

                    <AnimatePresence initial={false}>

                      {isOpen && (

                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                          className="overflow-hidden bg-[#f3f7f5]"
                        >

                          <div className="flex gap-3 px-6 py-5">

                            {/* ICON */}

                            <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e3eee9] text-[#087f5b]">
                              {faq.icon}
                            </div>


                            {/* ANSWER TEXT */}

                            <p className="text-sm leading-6 text-gray-600">
                              {faq.answer}
                            </p>

                          </div>

                        </motion.div>

                      )}

                    </AnimatePresence>

                  </motion.div>

                );

              })}

            </div>

          </motion.div>

        </div>

      </section>

    </div>
  );
};

export default FeeStructure;