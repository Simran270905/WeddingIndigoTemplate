"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pattern from "../assets/image/pattern.png";

const closingConfig = {
  brideName: "Vansh",
  groomName: "Mishti",
  message: "We look forward to celebrating love, laughter, and a lifetime of togetherness with you. Your presence will make our day truly unforgettable.",
  pattern: pattern,
  colors: {
    primary: "#F0E7D5",
    background: "#141827",
  },
  layout: {
    padding: { py: "24", px: "6" },
    maxWidth: "2xl",
    margins: {
      line: "12",
      message: "10",
      names: "6",
      dots: "6",
    },
  },
  animations: {
    staggerChildren: 0.12,
    delayChildren: 0.6,
    itemDuration: 0.8,
    itemEase: [0.25, 0.46, 0.45, 0.94],
    overlayDuration: 1.2,
    glowDuration: 1.5,
    lineDuration: 0.8,
    namesHoverDuration: 0.4,
    dots: {
      size: "4",
      scale1: [0.8, 1.3, 0.8],
      scale2: [0.8, 1.2, 0.8],
      opacity1: [0.6, 1, 0.6],
      opacity2: [0.4, 0.9, 0.4],
      y1: [0, -12, 0],
      y2: [0, -10, 0],
      duration1: 2.2,
      duration2: 2.5,
      delays: [0, 0.4, 0.8],
      opacities: [60, 40, 60],
      shadows: ["lg", "md", "lg"],
    },
  },
};

export default function Closing({ config = closingConfig }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: config.animations.staggerChildren,
        delayChildren: config.animations.delayChildren
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: config.animations.itemDuration,
        ease: config.animations.itemEase,
        delay: i * 0.2
      }
    })
  };

  return (
    <section
      className={`py-${config.layout.padding.py} px-${config.layout.padding.px} text-center relative overflow-hidden bg-[${config.colors.background}]`}
      style={{
        backgroundImage: `url(${config.pattern})`,
        backgroundSize: "1000px 1000px",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#181d30]/95 via-[#141827]/95 to-[#0e1220]/98 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: config.animations.overlayDuration }}
      />

      <motion.div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,231,213,0.18),transparent_60%)]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: config.animations.glowDuration }}
      />

      <motion.div
        ref={ref}
        className={`relative z-10 max-w-${config.layout.maxWidth} mx-auto px-4`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="mx-auto w-24 h-[2px] bg-gradient-to-r from-[#F0E7D5]/50 via-[#F0E7D5]/30 to-[#F0E7D5]/50 rounded-full pointer-events-none mb-12"
          variants={itemVariants}
          custom={0}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: config.animations.lineDuration }}
        />

        <motion.p 
          className="text-lg font-para md:text-xl leading-relaxed opacity-90 mb-10 text-[#F0E7D5]"
          variants={itemVariants}
          custom={1}
        >
          {config.message}
        </motion.p>

        <motion.p 
          className="font-chopin text-3xl md:text-4xl tracking-widest mb-6 text-[#F0E7D5] relative"
          variants={itemVariants}
          custom={2}
          whileHover={{ 
            scale: 1.03,
            textShadow: [
              "0 0 20px rgba(240,231,213,0.5)",
              "0 0 30px rgba(240,231,213,0.7)",
              "0 0 20px rgba(240,231,213,0.5)"
            ]
          }}
          transition={{ duration: config.animations.namesHoverDuration }}
        >
          {config.brideName} & {config.groomName}
        </motion.p>

        <motion.div 
          className="flex justify-center space-x-4 mt-6"
          variants={itemVariants}
          custom={3}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div 
              key={i}
              className={`w-${config.animations.dots.size} h-${config.animations.dots.size} rounded-full bg-[#F0E7D5]/${config.animations.dots.opacities[i]} shadow-${config.animations.dots.shadows[i]}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: i === 1 ? config.animations.dots.scale2 : config.animations.dots.scale1,
                opacity: i === 1 ? config.animations.dots.opacity2 : config.animations.dots.opacity1,
                y: i === 1 ? config.animations.dots.y2 : config.animations.dots.y1
              }}
              transition={{ 
                duration: i === 1 ? config.animations.dots.duration2 : config.animations.dots.duration1,
                repeat: Infinity, 
                ease: "easeInOut",
                delay: config.animations.dots.delays[i]
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
