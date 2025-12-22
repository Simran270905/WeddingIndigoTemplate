"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pattern from "../assets/image/pattern.png";
import e1 from "../assets/image/e2.jpg";
import e2 from "../assets/image/img5.jpg";
import e3 from "../assets/image/e3.jpg";

const events = [
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
];

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: i * 0.15
      }
    })
  };

  return (
    <section className="relative py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#1a2035] via-[#141827] to-[#0e1220] overflow-hidden">
      {/* Animated soft glow */}
      <motion.div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,231,213,0.18),transparent_60%)]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

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

      <motion.div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Animated heading */}
        <motion.div className="text-center mb-14" variants={containerVariants}>
          <motion.p 
            className="text-[0.7rem] tracking-[0.35em] uppercase font-para text-[#F0E7D5]/70 mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Wedding Schedule
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-monster text-[#F0E7D5]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Wedding Celebrations
          </motion.h2>
        </motion.div>

        {/* Animated timeline */}
        <motion.div className="relative" variants={containerVariants}>
          {/* Animated center line */}
          <motion.div 
            className="hidden md:block absolute top-2 bottom-2 left-1/2 -translate-x-1/2 w-px bg-[#F0E7D5]/18"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />

          <div className="space-y-12 md:space-y-14">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={event.title}
                  className={`flex flex-col md:flex-row items-center md:items-stretch gap-5 md:gap-10 ${
                    isLeft ? "md:flex-row-reverse" : ""
                  }`}
                  variants={itemVariants}
                  custom={index}
                >
                  {/* Animated card */}
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
                      transition={{ duration: 0.3 }}
                    >
                      {/* Card shine effect */}
                      <motion.div 
                        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                      </motion.div>

                      <motion.div 
                        className="relative space-y-1.5"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
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

                  {/* Animated timeline dot */}
                  <motion.div 
                    className="hidden md:flex flex-col items-center justify-center md:w-0"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
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
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    />
                    {index !== events.length - 1 && (
                      <div className="flex-1 w-px bg-gradient-to-b from-[#F0E7D5]/25 via-[#F0E7D5]/10 to-transparent mt-1" />
                    )}
                  </motion.div>

                  {/* Animated image with shine */}
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
                        transition={{ duration: 0.8 }}
                        whileHover={{ scale: 1.08 }}
                      />

                      {/* ✨ Image shine effect */}
                      <motion.div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                        
                        {/* Sparkle particles */}
                        <motion.div 
                          className="absolute top-3 right-4 w-1.5 h-1.5 bg-white/50 rounded-full blur-sm"
                          animate={{ 
                            scale: [0, 1.3, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ 
                            duration: 1.2, 
                            repeat: 1, 
                            repeatDelay: 0.4,
                            delay: 0.3
                          }}
                        />
                        <motion.div 
                          className="absolute bottom-3 left-4 w-2 h-2 bg-white/60 rounded-full blur-sm"
                          animate={{ 
                            scale: [0, 1.4, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ 
                            duration: 1.3, 
                            repeat: 1, 
                            delay: 0.5
                          }}
                        />
                      </motion.div>

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    </div>
                  </motion.div>

                  {/* Mobile day label */}
                  <motion.div 
                    className="md:hidden text-center text-[0.7rem] tracking-[0.25em] uppercase text-[#F0E7D5]/60"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {`Day ${index + 1}`}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Animated footer note */}
        <motion.p 
          className="mt-14 text-center text-xs md:text-sm font-para text-[#F0E7D5]/60 tracking-[0.25em] uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          We would be delighted to have you at every celebration
        </motion.p>
      </motion.div>
    </section>
  );
}
