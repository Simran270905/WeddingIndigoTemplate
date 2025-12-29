"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pattern from "../assets/image/pattern.png";

/* ---------------- CONFIG ---------------- */
const invitationConfig = {
  brideName: "Vansh",
  groomName: "Mishti",
  title: "With Great Joy",
  intro: "Together with our families,",
  names: "Vansh & Mishti",
  message:
    "invite you to share in the beginning of their journey as they unite in love and devotion. ",
  messageHighlight:
    "Your presence will grace the occasion with blessings and warmth.",
  colors: {
    primary: "#F0E7D5",
    background: "#141827",
  },
};

/* ---------------- COMPONENT ---------------- */
export default function Invitation({ config = invitationConfig }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1 },
    }),
  };

  return (
    <section
      className="relative overflow-hidden py-24 px-6 md:px-20 lg:px-32"
      style={{
        backgroundColor: config.colors.background,
        backgroundImage: `url(${pattern})`,
        backgroundRepeat: "repeat",
        backgroundSize: "1000px 1000px",
      }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#181d30]/95 via-[#141827]/95 to-[#0e1220]/98"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,231,213,0.28),transparent_55%)]"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />

      {/* Accent line */}
      <motion.div
        className="absolute top-10 left-1/2 -translate-x-1/2 h-[2px] w-28 rounded-full bg-gradient-to-r from-transparent via-[#F0E7D5]/70 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />

      <motion.div
        ref={ref}
        className="relative z-10 max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Card */}
        <motion.div
          className="rounded-3xl bg-[#1b2136]/80 border border-[#F0E7D5]/12 shadow-[0_18px_60px_rgba(0,0,0,0.55)] px-6 sm:px-10 lg:px-14 py-12 sm:py-14 text-center backdrop-blur-sm space-y-7"
          variants={item}
          custom={0}
          whileHover={{
            scale: 1.01,
            boxShadow:
              "0 25px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(240,231,213,0.1)",
          }}
        >
          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-[2.6rem] font-choco text-[#F0E7D5]"
            variants={item}
            custom={1}
          >
            {config.title}
          </motion.h2>

          {/* Intro */}
          <motion.p
            className="text-base font-font md:text-lg lg:text-xl font-light text-[#F0E7D5]/80"
            variants={item}
            custom={2}
          >
            {config.intro}
          </motion.p>

          {/* Names */}
          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl font-choco text-[#F0E7D5]"
            variants={item}
            custom={3}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {config.names}
          </motion.p>

          {/* Message */}
          <motion.p
            className="text-base font-font md:text-lg lg:text-xl leading-relaxed text-[#F0E7D5]/85"
            variants={item}
            custom={4}
          >
            {config.message}
            <motion.span
              className="font-bold text-[#F0E7D5] font-font"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {config.messageHighlight}
            </motion.span>
          </motion.p>

          {/* Motif */}
          <motion.div
            className="pt-4 flex items-center justify-center gap-4"
            variants={item}
            custom={5}
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-[#F0E7D5]/60 to-transparent" />

            <div className="flex gap-2">
              <motion.span
                className="w-3.5 h-3.5 rounded-full bg-[#F0E7D5]/85"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.span
                className="w-2.5 h-2.5 rounded-full bg-[#F0E7D5]/55 translate-y-1"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <motion.span
                className="w-3.5 h-3.5 rounded-full bg-[#F0E7D5]/85"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </div>

            <span className="h-px w-10 bg-gradient-to-r from-transparent via-[#F0E7D5]/60 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
