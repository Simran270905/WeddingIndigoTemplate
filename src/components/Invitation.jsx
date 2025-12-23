"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pattern from "../assets/image/pattern.png";

export default function Invitation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: i * 0.1
      }
    })
  };

  return (
    <section
      className="py-24 px-6 md:px-20 lg:px-32 relative overflow-hidden bg-[#141827]"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundSize: "1000px 1000px",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#181d30]/95 via-[#141827]/95 to-[#0e1220]/98"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Animated top glow */}
      <motion.div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,231,213,0.28),transparent_55%)]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />

      {/* Animated top accent line */}
      <motion.div 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-28 h-[2px] bg-gradient-to-r from-transparent via-[#F0E7D5]/70 to-transparent rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />

      <motion.div
        ref={ref}
        className="relative z-10 max-w-3xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Animated Card */}
        <motion.div 
          className="rounded-3xl bg-[#1b2136]/80 border border-[#F0E7D5]/12 shadow-[0_18px_60px_rgba(0,0,0,0.55)] px-6 sm:px-10 lg:px-14 py-12 sm:py-14 text-center backdrop-blur-sm space-y-7 group"
          variants={itemVariants}
          custom={0}
          whileHover={{ 
            scale: 1.01, 
            boxShadow: "0 25px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(240,231,213,0.1)" 
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-[2.6rem] font-choco tracking-tight text-[#F0E7D5]"
            variants={itemVariants}
            custom={1}
            whileHover={{ scale: 1.02 }}
          >
            With Great Joy
          </motion.h2>

          <motion.p 
            className="text-base md:text-lg lg:text-xl font-light font-para text-[#F0E7D5]/80"
            variants={itemVariants}
            custom={2}
          >
            Together with our families,
          </motion.p>

          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl font-choco  text-[#F0E7D5]"
            variants={itemVariants}
            custom={3}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Vansh &amp; Mishti
          </motion.p>

          <motion.p 
            className="text-base md:text-lg lg:text-xl font-para  leading-relaxed text-[#F0E7D5]/85"
            variants={itemVariants}
            custom={4}
          >
            invite you to share in the beginning of their journey as they unite in love and
            devotion.{" "}
            <motion.span 
              className="font-bold text-[#F0E7D5]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Your presence will grace the occasion with blessings and warmth.
            </motion.span>
          </motion.p>

          {/* Animated Motif */}
          <motion.div 
            className="pt-4 flex items-center justify-center gap-4"
            variants={itemVariants}
            custom={5}
          >
            <motion.span 
              className="h-px w-10 bg-gradient-to-r from-transparent via-[#F0E7D5]/60 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="flex gap-2">
              <motion.div 
                className="w-3.5 h-3.5 rounded-full bg-[#F0E7D5]/85 shadow-md"
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(240,231,213,0.4)",
                    "0 0 8px 2px rgba(240,231,213,0.3)",
                    "0 0 0 0 rgba(240,231,213,0.4)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="w-2.5 h-2.5 rounded-full bg-[#F0E7D5]/55 translate-y-1"
                animate={{ 
                  y: [0, -2, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div 
                className="w-3.5 h-3.5 rounded-full bg-[#F0E7D5]/85 shadow-md"
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(240,231,213,0.4)",
                    "0 0 8px 2px rgba(240,231,213,0.3)",
                    "0 0 0 0 rgba(240,231,213,0.4)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
            <motion.span 
              className="h-px w-10 bg-gradient-to-r from-transparent via-[#F0E7D5]/60 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
