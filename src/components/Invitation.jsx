"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pattern from "../assets/image/pattern.png";

const invitationConfig = {
  brideName: "Vansh",
  groomName: "Mishti",
  title: "With Great Joy",
  intro: "Together with our families,",
  names: "Vansh & Mishti",
  message: "invite you to share in the beginning of their journey as they unite in love and devotion. ",
  messageHighlight: "Your presence will grace the occasion with blessings and warmth.",
  pattern: pattern,
  colors: {
    primary: "#F0E7D5",
    background: "#141827",
  },
  layout: {
    padding: { py: "24", px: { default: "6", md: "20", lg: "32" } },
    maxWidth: "3xl",
    card: {
      padding: { px: { default: "6", sm: "10", lg: "14" }, py: { default: "12", sm: "14" } },
      spaceY: "7",
    },
  },
  typography: {
    title: { default: "3xl", md: "4xl", lg: "[2.6rem]" },
    intro: { default: "base", md: "lg", lg: "xl" },
    names: { default: "2xl", md: "3xl", lg: "4xl" },
    message: { default: "base", md: "lg", lg: "xl" },
  },
  animations: {
    container: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
    item: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.1,
    },
    overlay: { duration: 1 },
    glow: { duration: 1.2, delay: 0.2 },
    accentLine: { duration: 0.8, delay: 0.4 },
    card: { hover: { duration: 0.3 } },
    namesAppear: { duration: 0.7, delay: 0.5 },
    highlight: { duration: 0.6, delay: 0.6 },
    motif: {
      line: { duration: 0.6, leftDelay: 0, rightDelay: 0.1 },
      dots: {
        main: { 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut",
          delays: [0, 1]
        },
        middle: { 
          duration: 2.5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.5 
        },
      },
    },
  },
  sizes: {
    accentLine: { w: "28", h: "[2px]" },
    motif: {
      line: { w: "10" },
      dots: {
        main: { w: "3.5", h: "3.5" },
        middle: { w: "2.5", h: "2.5" },
      },
    },
  },
};

export default function Invitation({ config = invitationConfig }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: config.animations.container.staggerChildren,
        delayChildren: config.animations.container.delayChildren
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section
      className={`py-${config.layout.padding.py} px-${config.layout.padding.px.default} md:px-${config.layout.padding.px.md} lg:px-${config.layout.padding.px.lg} relative overflow-hidden bg-[${config.colors.background}]`}
      style={{
        backgroundImage: `url(${config.pattern})`,
        backgroundSize: "1000px 1000px",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#181d30]/95 via-[#141827]/95 to-[#0e1220]/98"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: config.animations.overlay.duration }}
      />

      <motion.div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,231,213,0.28),transparent_55%)]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: config.animations.glow.duration, delay: config.animations.glow.delay }}
      />

      <motion.div 
        className={`absolute top-10 left-1/2 -translate-x-1/2 w-${config.sizes.accentLine.w} h-${config.sizes.accentLine.h} bg-gradient-to-r from-transparent via-[#F0E7D5]/70 to-transparent rounded-full`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: config.animations.accentLine.duration, delay: config.animations.accentLine.delay }}
      />

      <motion.div
        ref={ref}
        className={`relative z-10 max-w-${config.layout.maxWidth} mx-auto`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className={`rounded-3xl bg-[#1b2136]/80 border border-[#F0E7D5]/12 shadow-[0_18px_60px_rgba(0,0,0,0.55)] px-${config.layout.card.padding.px.default} sm:px-${config.layout.card.padding.px.sm} lg:px-${config.layout.card.padding.px.lg} py-${config.layout.card.padding.py.default} sm:py-${config.layout.card.padding.py.sm} text-center backdrop-blur-sm space-y-${config.layout.card.spaceY} group`}
          variants={itemVariants}
          custom={0}
          whileHover={{ 
            scale: 1.01, 
            boxShadow: "0 25px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(240,231,213,0.1)" 
          }}
          transition={{ duration: config.animations.card.hover.duration }}
        >
          <motion.h2 
            className={`text-${config.typography.title.default} md:text-${config.typography.title.md} lg:text-${config.typography.title.lg} font-choco tracking-tight text-[#F0E7D5]`}
            variants={itemVariants}
            custom={1}
            whileHover={{ scale: 1.02 }}
          >
            {config.title}
          </motion.h2>

          <motion.p 
            className={`text-${config.typography.intro.default} md:text-${config.typography.intro.md} lg:text-${config.typography.intro.lg} font-light font-para text-[#F0E7D5]/80`}
            variants={itemVariants}
            custom={2}
          >
            {config.intro}
          </motion.p>

          <motion.p 
            className={`text-${config.typography.names.default} md:text-${config.typography.names.md} lg:text-${config.typography.names.lg} font-choco text-[#F0E7D5]`}
            variants={itemVariants}
            custom={3}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: config.animations.namesAppear.duration, delay: config.animations.namesAppear.delay }}
          >
            {config.names}
          </motion.p>

          <motion.p 
            className={`text-${config.typography.message.default} md:text-${config.typography.message.md} lg:text-${config.typography.message.lg} font-para leading-relaxed text-[#F0E7D5]/85`}
            variants={itemVariants}
            custom={4}
          >
            {config.message}
            <motion.span 
              className="font-bold text-[#F0E7D5]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: config.animations.highlight.duration, delay: config.animations.highlight.delay }}
            >
              {config.messageHighlight}
            </motion.span>
          </motion.p>

          <motion.div 
            className="pt-4 flex items-center justify-center gap-4"
            variants={itemVariants}
            custom={5}
          >
            <motion.span 
              className={`h-px w-${config.sizes.motif.line.w} bg-gradient-to-r from-transparent via-[#F0E7D5]/60 to-transparent`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: config.animations.motif.line.duration }}
            />
            <div className="flex gap-2">
              <motion.div 
                className={`w-${config.sizes.motif.dots.main.w} h-${config.sizes.motif.dots.main.h} rounded-full bg-[#F0E7D5]/85 shadow-md`}
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(240,231,213,0.4)",
                    "0 0 8px 2px rgba(240,231,213,0.3)",
                    "0 0 0 0 rgba(240,231,213,0.4)"
                  ]
                }}
                transition={{ 
                  duration: config.animations.motif.dots.main.duration, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className={`w-${config.sizes.motif.dots.middle.w} h-${config.sizes.motif.dots.middle.h} rounded-full bg-[#F0E7D5]/55 translate-y-1`}
                animate={{ 
                  y: [0, -2, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: config.animations.motif.dots.middle.duration, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: config.animations.motif.dots.middle.delay
                }}
              />
              <motion.div 
                className={`w-${config.sizes.motif.dots.main.w} h-${config.sizes.motif.dots.main.h} rounded-full bg-[#F0E7D5]/85 shadow-md`}
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(240,231,213,0.4)",
                    "0 0 8px 2px rgba(240,231,213,0.3)",
                    "0 0 0 0 rgba(240,231,213,0.4)"
                  ]
                }}
                transition={{ 
                  duration: config.animations.motif.dots.main.duration, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: config.animations.motif.dots.main.delays[1]
                }}
              />
            </div>
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
