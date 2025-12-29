"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ---------------- CONFIG ---------------- */
const heroConfig = {
  brideName: "Vansh",
  groomName: "Mishti",
  subtitle: "joyfully invite you to celebrate their union",
  date: "10 February 2026",
  label: "Wedding Invitation",
  colors: {
    primary: "#F0E7D5",
    secondary: "#e8d9b8",
    background: "#101524",
    text: "#F0E7D5",
  },
};

/* ---------------- SUBTLE PARTICLES ---------------- */
const particles = Array.from({ length: 14 });

export default function Hero({ config = heroConfig }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.08 },
    }),
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-16 overflow-hidden"
      style={{ backgroundColor: config.colors.background }}
    >
      {/* ---------------- SUBTLE PARTICLES ---------------- */}
      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full blur-sm"
          style={{
            width: 6,
            height: 6,
            backgroundColor: config.colors.primary,
            opacity: 0.06,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -14, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ---------------- CONTENT ---------------- */}
      <motion.div
        ref={ref}
        className="relative z-10 text-center max-w-4xl mx-auto space-y-10"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Label */}
        <motion.div
          className="inline-flex px-7 py-2 rounded-full border text-xs tracking-[0.4em] uppercase backdrop-blur-md font-bold"
          style={{
            color: config.colors.text,
            borderColor: `${config.colors.text}33`,
            backgroundColor: "#101524aa",
          }}
          variants={item}
          custom={0}
        >
          {config.label}
        </motion.div>

        {/* Names */}
        <div className="space-y-6">
          <motion.h1
            className="font-head text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-tight"
            variants={item}
            custom={1}
          >
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${config.colors.primary}, ${config.colors.secondary})`,
              }}
            >
              {config.brideName}
            </span>
          </motion.h1>

          {/* Connector */}
          <motion.div
            className="flex items-center justify-center gap-6"
            variants={item}
            custom={2}
          >
            <span className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <motion.span
              className="text-4xl font-head text-white/90"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              &
            </motion.span>
            <span className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </motion.div>

          <motion.h1
            className="font-head text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-tight"
            variants={item}
            custom={3}
          >
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${config.colors.primary}, ${config.colors.secondary})`,
              }}
            >
              {config.groomName}
            </span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl xl:text-2xl max-w-2xl mx-auto tracking-wide font-light"
          style={{ color: `${config.colors.text}e6` }}
          variants={item}
          custom={4}
        >
          {config.subtitle}
        </motion.p>

        {/* Date */}
        <motion.div
          className="flex justify-center"
          variants={item}
          custom={5}
        >
          <motion.div
            className="px-12 py-4 rounded-full text-xs tracking-[0.3em] uppercase border backdrop-blur-md"
            style={{
              color: config.colors.text,
              borderColor: `${config.colors.text}55`,
              backgroundColor: "#151a2aaa",
            }}
            whileHover={{ y: -2, scale: 1.03 }}
          >
            {config.date}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
