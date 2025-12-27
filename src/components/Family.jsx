"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pattern from "../assets/image/pattern.png";

export default function Family() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4
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
        delay: i * 0.15
      }
    })
  };

  return (
    <section className="py-20 px-6 md:px-20 relative overflow-hidden bg-[#141827]">
      {/* Animated pattern */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-repeat opacity-5"
        style={{
          backgroundImage: `url(${pattern})`,
          backgroundSize: "1000px 1000px",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />

      {/* Animated soft glow */}
      <motion.div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,231,213,0.18),transparent_60%)]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      <motion.div
        ref={ref}
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Animated heading */}
        <motion.h2 
          className="text-3xl md:text-4xl font-choco mb-12 text-[#F0E7D5]"
          variants={itemVariants}
          custom={0}
          whileHover={{ 
            textShadow: "0 0 20px rgba(240,231,213,0.5)",
            scale: 1.02
          }}
          transition={{ duration: 0.3 }}
        >
          With Blessings From
        </motion.h2>

        {/* Animated decorative line */}
        <motion.div 
          className="flex justify-center mb-12"
          variants={itemVariants}
          custom={1}
        >
          <motion.div 
            className="w-24 h-[2px] bg-gradient-to-r from-[#F0E7D5]/50 via-[#F0E7D5]/30 to-[#F0E7D5]/50 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Animated family cards */}
        <motion.div className="grid md:grid-cols-2 gap-10 text-center md:text-left" variants={containerVariants}>
          {/* Bride's Family */}
          <motion.div 
            className="relative bg-[#212842]/95 border border-[#F0E7D5]/20 rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)] group backdrop-blur-sm overflow-hidden"
            variants={itemVariants}
            custom={2}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(240,231,213,0.15)",
              borderColor: "#F0E7D5"
            }}
            transition={{ duration: 0.4 }}
          >
            {/* ✨ Card shine effect */}
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1.6, ease: "easeOut" }}
              />
            </motion.div>

            <motion.div 
              className="relative space-y-3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.p 
                className="font-choco text-lg text-[#F0E7D5]"
                whileHover={{ scale: 1.05 }}
              >
                Bride's Family
              </motion.p>
              <p className="opacity-80 font-para text-sm md:text-base text-[#F0E7D5]/85 leading-relaxed">
                Mr. & Mrs. Sharma <br />
                <span className="text-[#F0E7D5]/90 font-medium">Jaipur</span>
              </p>
            </motion.div>

            {/* ✅ FIXED Decorative dot - single animate only */}
            <motion.div 
              className="absolute top-1/2 -right-3 w-3 h-3 bg-[#F0E7D5] rounded-full shadow-md hidden md:block"
              initial={{ scale: 0 }}
              animate={{ 
                scale: [1, 1.15, 1],
                boxShadow: [
                  "0 0 0 0 rgba(240,231,213,0.4)",
                  "0 0 10px 3px rgba(240,231,213,0.6)",
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
          </motion.div>

          {/* Groom's Family */}
          <motion.div 
            className="relative bg-[#212842]/95 border border-[#F0E7D5]/20 rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)] group backdrop-blur-sm overflow-hidden"
            variants={itemVariants}
            custom={3}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(240,231,213,0.15)",
              borderColor: "#F0E7D5"
            }}
            transition={{ duration: 0.4 }}
          >
            {/* ✨ Card shine effect */}
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1.6, ease: "easeOut" }}
              />
            </motion.div>

            <motion.div 
              className="relative space-y-3"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.p 
                className="font-choco text-lg text-[#F0E7D5]"
                whileHover={{ scale: 1.05 }}
              >
                Groom's Family
              </motion.p>
              <p className="opacity-80 font-para text-sm md:text-base text-[#F0E7D5]/85 leading-relaxed">
                Mr. & Mrs. Mehta <br />
                <span className="text-[#F0E7D5]/90 font-medium">Mumbai</span>
              </p>
            </motion.div>

            {/* ✅ FIXED Decorative dot - single animate only */}
            <motion.div 
              className="absolute top-1/2 -left-3 w-3 h-3 bg-[#F0E7D5] rounded-full shadow-md hidden md:block"
              initial={{ scale: 0 }}
              animate={{ 
                scale: [1, 1.15, 1],
                boxShadow: [
                  "0 0 0 0 rgba(240,231,213,0.4)",
                  "0 0 10px 3px rgba(240,231,213,0.6)",
                  "0 0 0 0 rgba(240,231,213,0.4)"
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1.2
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
