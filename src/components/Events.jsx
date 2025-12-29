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

  return (
    <section className="relative py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#1a2035] via-[#141827] to-[#0e1220] overflow-hidden">

      {/* 🌙 SOFT GLOW */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,231,213,0.15),transparent_60%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* 🌫️ VERY SUBTLE PATTERN */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url(${pattern})`,
          backgroundSize: "900px 900px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 1.5 }}
      />

      <motion.div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-[0.7rem] tracking-[0.35em] uppercase text-[#F0E7D5]/70 mb-3">
            Wedding Schedule
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-choco text-[#F0E7D5]">
            Wedding Celebrations
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative space-y-12 md:space-y-14">

          {/* CENTER LINE */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#F0E7D5]/15" />

          {events.map((event, index) => {
            const reverse = index % 2 === 0;

            return (
              <motion.div
                key={event.title}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${reverse ? "md:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >

                {/* EVENT CARD */}
                <div className="md:w-1/2 w-full group">
                  <div className="relative rounded-2xl bg-[#1b2136]/90 border border-[#F0E7D5]/15 px-6 py-6 shadow-[0_18px_55px_rgba(0,0,0,0.6)] backdrop-blur-sm">

                    {/* ✨ VERY SUBTLE SHINE */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.4 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: "-120%" }}
                        whileHover={{ x: "120%" }}
                        transition={{ duration: 1.6, ease: "easeOut" }}
                      />

                      {/* 🌟 SINGLE SOFT PARTICLE */}
                      <motion.span
                        className="absolute top-4 right-5 w-1.5 h-1.5 bg-white/40 rounded-full blur-sm"
                        animate={{ opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
                        transition={{ duration: 1.4 }}
                      />
                    </motion.div>

                    <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[#F0E7D5]/60">
                      Day {index + 1}
                    </p>

                    <h3 className="text-xl md:text-2xl font-choco text-[#F0E7D5] mt-1">
                      {event.title}
                    </h3>

                    <p className="text-sm text-[#F0E7D5]/80 mt-1">
                      {event.date}
                    </p>

                    <p className="text-sm text-[#F0E7D5]/70">
                      {event.time}
                    </p>

                    {event.note && (
                      <p className="pt-2 text-xs md:text-sm text-[#F0E7D5]/65 leading-relaxed">
                        {event.note}
                      </p>
                    )}
                  </div>
                </div>

                {/* CENTER DOT */}
                <div className="hidden md:flex items-center justify-center">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-[#F0E7D5]"
                    animate={{
                      boxShadow: [
                        "0 0 0 6px rgba(240,231,213,0.12)",
                        "0 0 12px 8px rgba(240,231,213,0.25)",
                        "0 0 0 6px rgba(240,231,213,0.12)",
                      ],
                    }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                {/* IMAGE */}
                <div className="hidden md:block md:w-1/2 group">
                  <div className="relative h-44 lg:h-56 rounded-2xl overflow-hidden border border-[#F0E7D5]/15 shadow-[0_18px_55px_rgba(0,0,0,0.6)]">
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* FOOTER */}
        <motion.p
          className="mt-14 text-center text-xs md:text-sm text-[#F0E7D5]/60 tracking-[0.25em] uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          We would be delighted to have you at every celebration
        </motion.p>

      </motion.div>
    </section>
  );
}
