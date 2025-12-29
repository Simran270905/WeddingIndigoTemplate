"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pattern from "../assets/image/pattern.png";

export default function Venue() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 px-6 md:px-20 lg:px-24 bg-gradient-to-b from-[#1a2035] via-[#141827] to-[#0e1220] flex justify-center overflow-hidden">

      {/* 🌙 SOFT TOP GLOW */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,231,213,0.14),transparent_60%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* 🌫️ VERY FAINT PATTERN */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url(${pattern})`,
          backgroundSize: "900px 900px",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 1.4 }}
      />

      <motion.div
        ref={ref}
        className="relative z-10 max-w-xl w-full group"
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="relative bg-[#212842]/95 border border-[#F0E7D5]/30 rounded-3xl px-8 md:px-12 py-10 md:py-12 shadow-[0_20px_60px_rgba(0,0,0,0.75)] backdrop-blur-sm text-center space-y-6 overflow-hidden"
          whileHover={{
            borderColor: "#F0E7D5",
            boxShadow:
              "0 30px 90px rgba(0,0,0,0.85), 0 0 0 1px rgba(240,231,213,0.15)",
          }}
          transition={{ duration: 0.4 }}
        >
          {/* ✨ VERY SUBTLE SHINE */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-120%" }}
              whileHover={{ x: "120%" }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />

            {/* 🌟 SINGLE SOFT PARTICLE */}
            <motion.span
              className="absolute top-4 right-4 w-1.5 h-1.5 bg-white/35 rounded-full blur-sm"
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0.6, 1, 0.6],
              }}
              transition={{ duration: 1.4 }}
            />
          </motion.div>

          {/* LABEL */}
          <motion.p
            className="text-[0.7rem] tracking-[0.35em] uppercase text-[#F0E7D5]/70 font-para font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Venue
          </motion.p>

          {/* TITLE */}
          <motion.h2
            className="text-3xl md:text-4xl font-choco text-[#F0E7D5]"
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 20px rgba(240,231,213,0.45)",
            }}
            transition={{ duration: 0.3 }}
          >
            Royal Heritage Palace
          </motion.h2>

          {/* LOCATION */}
          <motion.p
            className="text-lg md:text-xl text-[#F0E7D5]/85 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Jaipur, Rajasthan
          </motion.p>

          {/* NOTE */}
          <motion.p
            className="text-xs md:text-sm tracking-[0.18em] uppercase text-[#F0E7D5]/65 font-light"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Detailed directions will be shared with the invitation
          </motion.p>

          {/* MOTIF */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <motion.span
              className="h-px w-10 bg-gradient-to-r from-transparent via-[#F0E7D5]/60 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            />
            <motion.span
              className="w-2 h-2 rounded-full bg-[#F0E7D5]/85"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0 0 rgba(240,231,213,0.4)",
                  "0 0 8px 2px rgba(240,231,213,0.5)",
                  "0 0 0 0 rgba(240,231,213,0.4)",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.span
              className="h-px w-10 bg-gradient-to-r from-transparent via-[#F0E7D5]/60 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
