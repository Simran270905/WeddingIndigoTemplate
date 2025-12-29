"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

import img1 from "../assets/image/img1.jpg";
import img2 from "../assets/image/img2.jpg";
import img3 from "../assets/image/img3.jpg";
import img4 from "../assets/image/img4.jpg";
import img5 from "../assets/image/e1.jpg";
import img6 from "../assets/image/img6.jpg";

const photos = [
  { src: img1, alt: "Vansh & Mishti 1" },
  { src: img2, alt: "Vansh & Mishti 2" },
  { src: img3, alt: "Vansh & Mishti 3" },
  { src: img4, alt: "Vansh & Mishti 4" },
  { src: img5, alt: "Vansh & Mishti 5" },
  { src: img6, alt: "Vansh & Mishti 6" },
];

export default function AestheticPhotoGallery() {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, delayChildren: 0.4 },
    },
  };

  const photo = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section className="relative bg-gradient-to-b from-[#1a2035] via-[#141827] to-[#0e1220] py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,231,213,0.18),transparent_55%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      <motion.div
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div className="text-center mb-10" variants={container}>
          <p className="text-[0.7rem] font-bold tracking-[0.35em] uppercase text-[#F0E7D5]/70 mb-3">
            Precious Moments
          </p>
          <h2 className="font-choco text-3xl md:text-4xl lg:text-5xl text-[#F0E7D5]">
            Our Story in Frames
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5"
          variants={container}
        >
          {photos.map((photoItem, index) => (
            <motion.figure
              key={photoItem.src}
              className={`group relative overflow-hidden rounded-2xl bg-[#141827]
                border border-[#F0E7D5]/10 shadow-[0_18px_45px_rgba(0,0,0,0.65)]
                ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              variants={photo}
              custom={index}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={photoItem.src}
                alt={photoItem.alt}
                className="h-full w-full object-cover"
                initial={{ filter: "brightness(0.85)" }}
                animate={{ filter: "brightness(1)" }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              />

              {/* Shine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                />
              </div>
            </motion.figure>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="text-xs md:text-sm text-[#F0E7D5]/60 tracking-[0.2em] uppercase">
            Swipe or scroll to see more memories
          </p>

          <motion.button
            onClick={() => setShowAll(true)}
            className="rounded-full border border-[#F0E7D5]/40 px-6 py-2 text-[0.7rem] md:text-xs tracking-[0.25em] uppercase text-[#F0E7D5]/90 bg-[#141827]/70 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View more photos
          </motion.button>
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-6xl w-full max-h-[90vh] bg-[#101524] rounded-3xl overflow-hidden"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between px-6 py-4 border-b border-[#F0E7D5]/15 text-[#F0E7D5]/80">
                <span className="text-xs tracking-[0.25em] uppercase">
                  All Memories
                </span>
                <button
                  onClick={() => setShowAll(false)}
                  className="text-xs uppercase hover:text-white"
                >
                  Close
                </button>
              </div>

              <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto">
                {photos.map((p, i) => (
                  <motion.img
                    key={p.src}
                    src={p.src}
                    alt={p.alt}
                    className="rounded-2xl object-cover h-48 md:h-56 lg:h-64"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
