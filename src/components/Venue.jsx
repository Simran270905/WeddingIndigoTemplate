"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pattern from "../assets/image/pattern.png";

const venueConfig = {
  name: "Royal Heritage Palace",
  location: "Jaipur, Rajasthan",
  note: "Detailed directions will be shared with the invitation",
  label: "Venue",
  pattern: pattern,
  colors: {
    primary: "#F0E7D5",
    background: {
      from: "#1a2035",
      via: "#141827",
      to: "#0e1220",
    },
    card: {
      bg: "#212842",
      border: "#F0E7D5",
    },
  },
  layout: {
    padding: { py: "20", px: { default: "6", md: "20", lg: "24" } },
    maxWidth: "xl",
    card: {
      padding: { px: { default: "8", md: "12" }, py: { default: "10", md: "12" } },
      spaceY: "6",
      motif: { gap: "3" },
    },
  },
  typography: {
    label: { size: "[0.7rem]", tracking: "[0.35em]" },
    title: { default: "3xl", md: "4xl" },
    location: { default: "lg", md: "xl" },
    note: { default: "xs", md: "sm", tracking: "[0.18em]" },
  },
  animations: {
    container: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
    item: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.15,
    },
    glow: { duration: 1.2 },
    pattern: { duration: 1.5, delay: 0.2 },
    card: {
      hover: 0.4,
      shine: 0.4,
      shineSweep: { duration: 1.8, ease: "easeOut" },
      sparkle1: { duration: 1.4, repeatDelay: 0.5, delay: 0.3 },
      sparkle2: { duration: 1.5, delay: 0.6 },
      title: { hover: 0.3 },
    },
    motif: {
      line: { duration: 0.7, leftDelay: 0.3, rightDelay: 0.35 },
      dot: { 
        duration: 2.5, 
        repeat: Infinity, 
        ease: "easeInOut" 
      },
    },
  },
  sizes: {
    motif: {
      line: { w: "10" },
      dot: { w: "2", h: "2" },
    },
    sparkle: {
      topRight: { w: "1.5", h: "1.5" },
      bottomLeft: { w: "2", h: "2" },
    },
  },
};

export default function Venue({ config = venueConfig }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: config.animations.container.duration,
        ease: config.animations.container.ease
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: config.animations.item.duration,
        ease: config.animations.item.ease,
        delay: i * config.animations.item.delay
      }
    })
  };

  return (
    <section className={`relative py-${config.layout.padding.py} px-${config.layout.padding.px.default} md:px-${config.layout.padding.px.md} lg:px-${config.layout.padding.px.lg} bg-gradient-to-b from-[${config.colors.background.from}] via-[${config.colors.background.via}] to-[${config.colors.background.to}] flex justify-center overflow-hidden`}>
      <motion.div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,231,213,0.18),transparent_60%)]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: config.animations.glow.duration }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 bg-repeat opacity-5"
        style={{
          backgroundImage: `url(${config.pattern})`,
          backgroundSize: "1000px 1000px",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: config.animations.pattern.duration, delay: config.animations.pattern.delay }}
      />

      <motion.div
        ref={ref}
        className={`relative z-10 max-w-${config.layout.maxWidth} w-full group`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 30px 90px rgba(0,0,0,0.85), 0 0 0 1px rgba(240,231,213,0.15)"
        }}
        transition={{ duration: config.animations.card.hover }}
      >
        <motion.div 
          className={`bg-[${config.colors.card.bg}]/95 border border-[${config.colors.card.border}]/35 rounded-3xl px-${config.layout.card.padding.px.default} md:px-${config.layout.card.padding.px.md} py-${config.layout.card.padding.py.default} md:py-${config.layout.card.padding.py.md} shadow-[0_20px_60px_rgba(0,0,0,0.75)] backdrop-blur-sm text-center space-y-${config.layout.card.spaceY} relative overflow-hidden`}
          variants={itemVariants}
          custom={0}
          whileHover={{ 
            borderColor: "#F0E7D5",
            backgroundColor: "rgba(33,40,66,0.98)"
          }}
        >
          <motion.div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: config.animations.card.shine }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: config.animations.card.shineSweep.duration, ease: config.animations.card.shineSweep.ease }}
            />
            
            <motion.div 
              className={`absolute top-4 right-4 w-${config.sizes.sparkle.topRight.w} h-${config.sizes.sparkle.topRight.h} bg-white/40 rounded-full blur-sm`}
              animate={{ 
                scale: [0, 1.3, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{ 
                duration: config.animations.card.sparkle1.duration, 
                repeat: 1, 
                repeatDelay: config.animations.card.sparkle1.repeatDelay,
                delay: config.animations.card.sparkle1.delay
              }}
            />
            <motion.div 
              className={`absolute bottom-4 left-4 w-${config.sizes.sparkle.bottomLeft.w} h-${config.sizes.sparkle.bottomLeft.h} bg-white/50 rounded-full blur-sm`}
              animate={{ 
                scale: [0, 1.4, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: config.animations.card.sparkle2.duration, 
                repeat: 1, 
                delay: config.animations.card.sparkle2.delay
              }}
            />
          </motion.div>

          <motion.p 
            className={`text-${config.typography.label.size} tracking-[${config.typography.label.tracking}] font-para font-bold uppercase text-[#F0E7D5]/70`}
            variants={itemVariants}
            custom={1}
          >
            {config.label}
          </motion.p>

          <motion.h2 
            className={`text-${config.typography.title.default} md:text-${config.typography.title.md} font-choco text-[#F0E7D5] relative`}
            variants={itemVariants}
            custom={2}
            whileHover={{ 
              textShadow: "0 0 20px rgba(240,231,213,0.6)",
              scale: 1.02
            }}
            transition={{ duration: config.animations.card.title.hover }}
          >
            {config.name}
          </motion.h2>

          <motion.p 
            className={`text-${config.typography.location.default} md:text-${config.typography.location.md} font-font text-[#F0E7D5]/85 font-light tracking-wide`}
            variants={itemVariants}
            custom={3}
          >
            {config.location}
          </motion.p>

          <motion.p 
            className={`text-${config.typography.note.default} md:text-${config.typography.note.md} font-font text-[#F0E7D5]/70 tracking-[${config.typography.note.tracking}] uppercase font-light`}
            variants={itemVariants}
            custom={4}
          >
            {config.note}
          </motion.p>

          <motion.div 
            className={`flex items-center justify-center gap-${config.layout.card.motif.gap}`}
            variants={itemVariants}
            custom={5}
          >
            <motion.span 
              className={`h-px w-${config.sizes.motif.line.w} bg-gradient-to-r from-transparent via-[#F0E7D5]/60 to-transparent`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: config.animations.motif.line.duration, delay: config.animations.motif.line.leftDelay }}
            />
            <motion.span 
              className={`w-${config.sizes.motif.dot.w} h-${config.sizes.motif.dot.h} rounded-full bg-[#F0E7D5]/85 shadow-md relative`}
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0 0 rgba(240,231,213,0.4)",
                  "0 0 8px 2px rgba(240,231,213,0.5)",
                  "0 0 0 0 rgba(240,231,213,0.4)"
                ]
              }}
              transition={{ 
                duration: config.animations.motif.dot.duration, 
                repeat: Infinity, 
                ease: config.animations.motif.dot.ease 
              }}
            />
            <motion.span 
              className={`h-px w-${config.sizes.motif.line.w} bg-gradient-to-r from-transparent via-[#F0E7D5]/60 to-transparent`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: config.animations.motif.line.duration, delay: config.animations.motif.line.rightDelay }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
