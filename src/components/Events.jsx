"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pattern from "../assets/image/pattern.png";
import e1 from "../assets/image/e2.jpg";
import e2 from "../assets/image/img5.jpg";
import e3 from "../assets/image/e3.jpg";

const eventsConfig = {
  events: [
    {
      title: "Mehendi & Sangeet",
      date: "9th February 2026",
      time: "6:00 PM onwards",
      note: "An evening of music, dance and mehendi.",
      image: e1,
    },
    {
      title: "Wedding Ceremony",
      date: "10th February 2026",
      time: "11:00 AM",
      note: "Sacred rituals as we tie the knot.",
      image: e2,
    },
    {
      title: "Reception",
      date: "10th February 2026",
      time: "7:00 PM onwards",
      note: "Celebrate with us over dinner and music.",
      image: e3,
    },
  ],
  pattern: pattern,
  colors: {
    primary: "#F0E7D5",
    background: {
      from: "#1a2035",
      via: "#141827",
      to: "#0e1220",
    },
  },
  layout: {
    padding: { py: "20", px: { default: "6", md: "16", lg: "24" } },
    maxWidth: "5xl",
    margins: {
      heading: "14",
      events: { default: "12", md: "14" },
      footer: "14",
    },
  },
  animations: {
    container: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
    item: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.15,
    },
    glow: { duration: 1.2 },
    pattern: { duration: 1.5, delay: 0.2 },
    heading: { subtitle: 0.6, title: { duration: 0.8, delay: 0.2 } },
    timeline: { line: { duration: 1, delay: 0.8 } },
    card: {
      hover: { duration: 0.3 },
      shine: { duration: 0.4, shineDuration: 1.2 },
      content: { duration: 0.6, delay: 0.2 },
    },
    dot: {
      appear: { duration: 0.5 },
      pulse: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
    image: {
      appear: { duration: 0.8 },
      hover: { scale: 1.08 },
    },
    sparkle1: { duration: 1.2, repeat: 1, repeatDelay: 0.4, delay: 0.3 },
    sparkle2: { duration: 1.3, delay: 0.5 },
    mobileLabel: { duration: 0.5 },
    footer: { duration: 0.6, delay: 1.2 },
  },
};

export default function Events({ config = eventsConfig }) {
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
    hidden: { opacity: 0, y: 25 },
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
    <section className={`relative py-${config.layout.padding.py} px-${config.layout.padding.px.default} md:px-${config.layout.padding.px.md} lg:px-${config.layout.padding.px.lg} bg-gradient-to-b from-[${config.colors.background.from}] via-[${config.colors.background.via}] to-[${config.colors.background.to}] overflow-hidden`}>
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
        className={`relative z-10 max-w-${config.layout.maxWidth} mx-auto`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className={`text-center mb-${config.layout.margins.heading}`} variants={containerVariants}>
          <motion.p 
            className="text-[0.7rem] tracking-[0.35em] uppercase font-para text-[#F0E7D5]/70 mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: config.animations.heading.subtitle }}
          >
            Wedding Schedule
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-choco text-[#F0E7D5]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: config.animations.heading.title.duration, delay: config.animations.heading.title.delay }}
          >
            Wedding Celebrations
          </motion.h2>
        </motion.div>

        <motion.div className="relative" variants={containerVariants}>
          <motion.div 
            className="hidden md:block absolute top-2 bottom-2 left-1/2 -translate-x-1/2 w-px bg-[#F0E7D5]/18"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: config.animations.timeline.line.duration, delay: config.animations.timeline.line.delay }}
          />

          <div className={`space-y-${config.layout.margins.events.default} md:space-y-${config.layout.margins.events.md}`}>
            {config.events.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={event.title}
                  className={`flex flex-col md:flex-row items-center md:items-stretch gap-5 md:gap-10 ${isLeft ? "md:flex-row-reverse" : ""}`}
                  variants={itemVariants}
                  custom={index}
                >
                  <motion.div 
                    className="md:w-1/2 group"
                    whileHover={{ y: -4 }}
                  >
                    <motion.div 
                      className="relative rounded-2xl bg-[#1b2136]/90 border border-[#F0E7D5]/18 px-6 py-5 md:px-7 md:py-6 shadow-[0_18px_55px_rgba(0,0,0,0.6)] backdrop-blur-sm"
                      whileHover={{ 
                        borderColor: "#F0E7D5",
                        boxShadow: "0 25px 70px rgba(0,0,0,0.75), 0 0 0 1px rgba(240,231,213,0.2)"
                      }}
                      transition={{ duration: config.animations.card.hover.duration }}
                    >
                      <motion.div 
                        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: config.animations.card.shine.duration }}
                      >
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: config.animations.card.shine.shineDuration, ease: "easeOut" }}
                        />
                      </motion.div>

                      <motion.div 
                        className="relative space-y-1.5"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: config.animations.card.content.duration, delay: config.animations.card.content.delay }}
                      >
                        <p className="text-[0.65rem] font-font font-bold tracking-[0.3em] uppercase text-[#F0E7D5]/65">
                          {`Day ${index + 1}`}
                        </p>
                        <h3 className="text-xl md:text-2xl font-choco text-[#F0E7D5]">
                          {event.title}
                        </h3>
                        <p className="text-sm md:text-base font-font text-[#F0E7D5]/80">
                          {event.date}
                        </p>
                        <p className="text-sm md:text-base font-font text-[#F0E7D5]/75">
                          {event.time} 
                        </p>
                        {event.note && (
                          <p className="pt-2 text-xs md:text-sm font-para font-semibold text-[#F0E7D5]/70 leading-relaxed">
                            {event.note}
                          </p>
                        )}
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="hidden md:flex flex-col items-center justify-center md:w-0"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: config.animations.dot.appear.duration, delay: index * 0.2 + 0.8 }}
                  >
                    <motion.div 
                      className="w-4 h-4 rounded-full bg-[#F0E7D5] shadow-[0_0_0_6px_rgba(240,231,213,0.16)]"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          "0 0 0 6px rgba(240,231,213,0.16)",
                          "0 0 12px 8px rgba(240,231,213,0.3)",
                          "0 0 0 6px rgba(240,231,213,0.16)"
                        ]
                      }}
                      transition={{ 
                        duration: config.animations.dot.pulse.duration, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    />
                    {index !== config.events.length - 1 && (
                      <div className="flex-1 w-px bg-gradient-to-b from-[#F0E7D5]/25 via-[#F0E7D5]/10 to-transparent mt-1" />
                    )}
                  </motion.div>

                  <motion.div 
                    className="hidden md:block md:w-1/2 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative h-40 lg:h-52 rounded-2xl overflow-hidden bg-[#101524] border border-[#F0E7D5]/15 shadow-[0_18px_55px_rgba(0,0,0,0.6)]">
                      <motion.img
                        src={event.image}
                        alt={event.title}
                        className="h-full w-full object-cover"
                        initial={{ filter: "brightness(0.85) blur(1px)" }}
                        animate={{ filter: "brightness(1) blur(0px)" }}
                        transition={{ duration: config.animations.image.appear.duration }}
                        whileHover={{ scale: config.animations.image.hover.scale }}
                      />

                      <motion.div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: config.animations.card.shine.duration }}
                      >
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                        
                        <motion.div 
                          className="absolute top-3 right-4 w-1.5 h-1.5 bg-white/50 rounded-full blur-sm"
                          animate={{ 
                            scale: [0, 1.3, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ 
                            duration: config.animations.sparkle1.duration, 
                            repeat: 1, 
                            repeatDelay: config.animations.sparkle1.repeatDelay,
                            delay: config.animations.sparkle1.delay
                          }}
                        />
                        <motion.div 
                          className="absolute bottom-3 left-4 w-2 h-2 bg-white/60 rounded-full blur-sm"
                          animate={{ 
                            scale: [0, 1.4, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ 
                            duration: config.animations.sparkle2.duration, 
                            repeat: 1, 
                            delay: config.animations.sparkle2.delay
                          }}
                        />
                      </motion.div>

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    </div>
                  </motion.div>

                  <motion.div 
                    className="md:hidden text-center text-[0.7rem] tracking-[0.25em] uppercase text-[#F0E7D5]/60"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: config.animations.mobileLabel.duration }}
                  >
                    {`Day ${index + 1}`}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.p 
          className={`mt-${config.layout.margins.footer} text-center text-xs md:text-sm font-para text-[#F0E7D5]/60 tracking-[0.25em] uppercase`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: config.animations.footer.duration, delay: config.animations.footer.delay }}
        >
          We would be delighted to have you at every celebration
        </motion.p>
      </motion.div>
    </section>
  );
}
