"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
        delay: i * 0.08
      }
    })
  };

  return (
    <section className="pattern-midnight relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 overflow-hidden">
      {/* Subtle Background Orbs */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-[#F0E7D5]/5 rounded-full blur-xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-20 h-20 sm:w-28 sm:h-28 bg-[#e8d9b8]/5 rounded-full blur-xl"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* content wrapper */}
      <motion.div
        ref={ref}
        className="relative z-10 text-center max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Subtle Label */}
        <motion.div 
          className="inline-flex items-center justify-center px-4 sm:px-7 py-2 sm:py-2.5 md:px-8 md:py-3 rounded-full border border-[#F0E7D5]/20 bg-[#101524]/60 text-[0.7rem] sm:text-xs md:text-sm tracking-[0.4em] uppercase text-[#F0E7D5]/85 backdrop-blur-md shadow-sm font-para font-bold"
          variants={itemVariants}
          custom={0}
          whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(240,231,213,0.15)" }}
          transition={{ duration: 0.3 }}
        >
          Wedding Invitation
        </motion.div>

        {/* Names */}
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          <motion.h1 
            className="font-head text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight"
            variants={itemVariants}
            custom={1}
            whileHover={{ scale: 1.01 }}
          >
            <motion.span 
              className="block bg-gradient-to-r from-[#F0E7D5] to-[#e8d9b8] bg-clip-text text-transparent drop-shadow-lg"
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8 }}
            >
              Vansh
            </motion.span>
          </motion.h1>

          <motion.div 
            className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6"
            variants={itemVariants}
            custom={2}
          >
            <motion.span 
              className="h-px w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-r from-transparent via-[#F0E7D5]/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.span 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-head text-[#F0E7D5]/90"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              &
            </motion.span>
            <motion.span 
              className="h-px w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-r from-transparent via-[#F0E7D5]/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            />
          </motion.div>

          <motion.h1 
            className="font-head text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight"
            variants={itemVariants}
            custom={3}
            whileHover={{ scale: 1.01 }}
          >
            <motion.span 
              className="block bg-gradient-to-r from-[#F0E7D5] to-[#e8d9b8] bg-clip-text text-transparent drop-shadow-lg"
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Mishti
            </motion.span>
          </motion.h1>
        </div>

        {/* Clean Subtitle */}
        <motion.p 
          className="font-para text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed text-[#F0E7D5]/90 px-4"
          variants={itemVariants}
          custom={4}
        >
          joyfully invite you to celebrate their union
        </motion.p>

        {/* Elegant Date Badge */}
        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
          custom={5}
        >
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-30 bg-[#F0E7D5]/20 transition-opacity duration-300"
            />
            <motion.div 
              className="font-font relative px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5 rounded-full text-[0.7rem] sm:text-xs md:text-sm tracking-[0.3em] uppercase font-medium border border-[#F0E7D5]/30 bg-[#151a2a]/70 text-[#F0E7D5]/95 shadow-lg backdrop-blur-md"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -2 }}
            >
              10 February 2026
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
