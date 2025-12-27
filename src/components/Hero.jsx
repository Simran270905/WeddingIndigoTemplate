"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  layout: {
    padding: {
      default: "4",
      sm: "6",
      lg: "8",
      xl: "12",
      "2xl": "16",
    },
    maxWidth: "4xl",
    spaceY: { default: "8", sm: "10", md: "12" },
    names: { spaceY: { default: "3", sm: "4", md: "6" } },
    connector: {
      gap: { default: "2", sm: "4", md: "6" },
      w: { default: "12", sm: "16", md: "20", lg: "24" },
    },
  },
  typography: {
    label: {
      default: "[0.7rem]",
      sm: "xs",
      md: "sm",
      tracking: "[0.4em]",
    },
    names: {
      default: "4xl",
      sm: "5xl",
      md: "6xl",
      lg: "7xl",
      xl: "8xl",
    },
    subtitle: {
      default: "sm",
      sm: "base",
      md: "lg",
      lg: "xl",
      xl: "2xl",
    },
    connector: {
      default: "xl",
      sm: "2xl",
      md: "3xl",
      lg: "4xl",
    },
    date: {
      default: "[0.7rem]",
      sm: "xs",
      md: "sm",
      tracking: "[0.3em]",
    },
  },
  animations: {
    container: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
    item: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.08,
    },
    orbs: {
      top: { duration: 4, y: [0, -8, 0] },
      bottom: { duration: 5, y: [0, 6, 0], delay: 1 },
    },
    nameBlur: { duration: 0.8 },
    connectorLine: { duration: 0.6, brideDelay: 0.3, groomDelay: 0.35 },
    connectorAmpersand: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    dateBadge: { duration: 0.5, delay: 0.6 },
    hover: {
      label: 0.3,
      names: { scale: 1.01 },
      date: 0.3,
    },
  },
  sizes: {
    orbs: {
      top: { default: { w: "24", h: "24" }, sm: { w: "32", h: "32" } },
      bottom: { default: { w: "20", h: "20" }, sm: { w: "28", h: "28" } },
    },
    datePadding: {
      px: { default: "8", sm: "10", md: "12" },
      py: { default: "3.5", sm: "4", md: "5" },
    },
  },
};

export default function Hero({ config = heroConfig }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: config.animations.container.staggerChildren,
        delayChildren: config.animations.container.delayChildren,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: config.animations.item.duration,
        ease: config.animations.item.ease,
        delay: i * config.animations.item.delay,
      },
    }),
  };

  return (
    <section
      className={`pattern-midnight relative min-h-screen flex items-center justify-center px-${config.layout.padding.default} sm:px-${config.layout.padding.sm} lg:px-${config.layout.padding.lg} xl:px-${config.layout.padding.xl} 2xl:px-${config.layout.padding["2xl"]} overflow-hidden`}
    >
      <div className="absolute inset-0">
        <motion.div
          className={`absolute top-20 left-10 w-${config.sizes.orbs.top.default.w} h-${config.sizes.orbs.top.default.h} sm:w-${config.sizes.orbs.top.sm.w} sm:h-${config.sizes.orbs.top.sm.h} bg-[${config.colors.primary}]/5 rounded-full blur-xl`}
          animate={{ y: config.animations.orbs.top.y }}
          transition={{
            duration: config.animations.orbs.top.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-20 right-10 w-${config.sizes.orbs.bottom.default.w} h-${config.sizes.orbs.bottom.default.h} sm:w-${config.sizes.orbs.bottom.sm.w} sm:h-${config.sizes.orbs.bottom.sm.h} bg-[${config.colors.secondary}]/5 rounded-full blur-xl`}
          animate={{ y: config.animations.orbs.bottom.y }}
          transition={{
            duration: config.animations.orbs.bottom.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: config.animations.orbs.bottom.delay,
          }}
        />
      </div>

      <motion.div
        ref={ref}
        className={`relative z-10 text-center max-w-${config.layout.maxWidth} mx-auto space-y-${config.layout.spaceY.default} sm:space-y-${config.layout.spaceY.sm} md:space-y-${config.layout.spaceY.md}`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="inline-flex items-center justify-center px-4 sm:px-7 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full border border-[#F0E7D5]/20 bg-[#101524]/60 text-[0.7rem] sm:text-xs md:text-sm tracking-[0.4em] uppercase text-[#F0E7D5]/85 backdrop-blur-md shadow-sm font-para font-bold"
          variants={itemVariants}
          custom={0}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 8px 25px rgba(240,231,213,0.15)",
          }}
          transition={{ duration: config.animations.hover.label }}
        >
          {config.label}
        </motion.div>

        <div
          className={`space-y-${config.layout.names.spaceY.default} sm:space-y-${config.layout.names.spaceY.sm} md:space-y-${config.layout.names.spaceY.md}`}
        >
          <motion.h1
            className={`font-head text-${config.typography.names.default} sm:text-${config.typography.names.sm} md:text-${config.typography.names.md} lg:text-${config.typography.names.lg} xl:text-${config.typography.names.xl} leading-tight`}
            variants={itemVariants}
            custom={1}
            whileHover={{ scale: config.animations.hover.names.scale }}
          >
            <motion.span
              className="block bg-gradient-to-r from-[#F0E7D5] to-[#e8d9b8] bg-clip-text text-transparent drop-shadow-lg"
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: config.animations.nameBlur.duration }}
            >
              {config.brideName}
            </motion.span>
          </motion.h1>

          <motion.div
            className={`flex items-center justify-center gap-${config.layout.connector.gap.default} sm:gap-${config.layout.connector.gap.sm} md:gap-${config.layout.connector.gap.md}`}
            variants={itemVariants}
            custom={2}
          >
            <motion.span
              className={`h-px w-${config.layout.connector.w.default} sm:w-${config.layout.connector.w.sm} md:w-${config.layout.connector.w.md} lg:w-${config.layout.connector.w.lg} bg-gradient-to-r from-transparent via-[#F0E7D5]/50 to-transparent`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: config.animations.connectorLine.duration,
                delay: config.animations.connectorLine.brideDelay,
              }}
            />
            <motion.span
              className={`text-${config.typography.connector.default} sm:text-${config.typography.connector.sm} md:text-${config.typography.connector.md} lg:text-${config.typography.connector.lg} font-head text-[#F0E7D5]/90`}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{
                duration: config.animations.connectorAmpersand.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              &
            </motion.span>
            <motion.span
              className={`h-px w-${config.layout.connector.w.default} sm:w-${config.layout.connector.w.sm} md:w-${config.layout.connector.w.md} lg:w-${config.layout.connector.w.lg} bg-gradient-to-r from-transparent via-[#F0E7D5]/50 to-transparent`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: config.animations.connectorLine.duration,
                delay: config.animations.connectorLine.groomDelay,
              }}
            />
          </motion.div>

          <motion.h1
            className={`font-head text-${config.typography.names.default} sm:text-${config.typography.names.sm} md:text-${config.typography.names.md} lg:text-${config.typography.names.lg} xl:text-${config.typography.names.xl} leading-tight`}
            variants={itemVariants}
            custom={3}
            whileHover={{ scale: config.animations.hover.names.scale }}
          >
            <motion.span
              className="block bg-gradient-to-r from-[#F0E7D5] to-[#e8d9b8] bg-clip-text text-transparent drop-shadow-lg"
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: config.animations.nameBlur.duration,
                delay: 0.1,
              }}
            >
              {config.groomName}
            </motion.span>
          </motion.h1>
        </div>

        <motion.p
          className={`font-para text-${config.typography.subtitle.default} sm:text-${config.typography.subtitle.sm} md:text-${config.typography.subtitle.md} lg:text-${config.typography.subtitle.lg} xl:text-${config.typography.subtitle.xl} font-light tracking-wide max-w-2xl mx-auto leading-relaxed text-[#F0E7D5]/90 px-4`}
          variants={itemVariants}
          custom={4}
        >
          {config.subtitle}
        </motion.p>

        <motion.div
          className="flex justify-center"
          variants={itemVariants}
          custom={5}
        >
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: config.animations.hover.date }}
          >
            <motion.div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-30 bg-[#F0E7D5]/20 transition-opacity duration-300" />
            <motion.div
              className={`font-font relative px-${config.sizes.datePadding.px.default} sm:px-${config.sizes.datePadding.px.sm} md:px-${config.sizes.datePadding.px.md} py-${config.sizes.datePadding.py.default} sm:py-${config.sizes.datePadding.py.sm} md:py-${config.sizes.datePadding.py.md} rounded-full text-${config.typography.date.default} sm:text-${config.typography.date.sm} md:text-${config.typography.date.md} tracking-[${config.typography.date.tracking}] uppercase font-medium border border-[#F0E7D5]/30 bg-[#151a2a]/70 text-[#F0E7D5]/95 shadow-lg backdrop-blur-md`}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: config.animations.dateBadge.duration,
                delay: config.animations.dateBadge.delay,
              }}
              whileHover={{ y: -2 }}
            >
              {config.date}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
