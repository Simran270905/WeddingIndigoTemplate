"use client";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.4
      }
    }
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: i * 0.1
      }
    })
  };

  return (
    <section className="relative bg-gradient-to-b from-[#1a2035] via-[#141827] to-[#0e1220] py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      <motion.div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,231,213,0.18),transparent_55%)]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      <motion.div
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-10" variants={containerVariants}>
          <motion.p 
            className="text-[0.7rem] font-para font-bold tracking-[0.35em] uppercase text-[#F0E7D5]/70 mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Precious Moments
          </motion.p>
          <motion.h2 
            className="font-monster text-3xl md:text-4xl lg:text-5xl text-[#F0E7D5]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Story in Frames
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5"
          variants={containerVariants}
        >
          {photos.map((photo, index) => (
            <motion.figure
              key={photo.src}
              className={`
                group relative overflow-hidden rounded-2xl bg-[#141827]
                border border-[#F0E7D5]/10 shadow-[0_18px_45px_rgba(0,0,0,0.65)]
                ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}
              `}
              variants={photoVariants}
              custom={index}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(240,231,213,0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover"
                initial={{ filter: "brightness(0.8) blur(1px)" }}
                animate={{ filter: "brightness(1) blur(0px)" }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              />

              {/* ✨ SHINE/GLINT EFFECT */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {/* Main shine sweep */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                
                {/* Subtle sparkle particles */}
                <motion.div 
                  className="absolute top-4 right-4 w-2 h-2 bg-white/50 rounded-full blur-sm"
                  animate={{ 
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 1.2, 
                    repeat: 1, 
                    repeatDelay: 0.3,
                    delay: 0.2
                  }}
                />
                <motion.div 
                  className="absolute top-6 left-6 w-1.5 h-1.5 bg-white/40 rounded-full blur-sm"
                  animate={{ 
                    scale: [0, 1.2, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{ 
                    duration: 1.4, 
                    repeat: 1, 
                    repeatDelay: 0.5,
                    delay: 0.4
                  }}
                />
                <motion.div 
                  className="absolute bottom-6 right-8 w-2 h-2 bg-white/60 rounded-full blur-sm"
                  animate={{ 
                    scale: [0, 1.4, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 1.3, 
                    repeat: 1, 
                    delay: 0.6
                  }}
                />
              </motion.div>

              <motion.div 
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ opacity: 1 }}
              />

              <motion.figcaption 
                className="pointer-events-none absolute bottom-3 left-4 right-4 text-xs md:text-sm text-[#F0E7D5]/90 tracking-wide opacity-0 translate-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0, y: 10 }}
                whileHover={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.span 
                  className="inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.span 
                    className="h-px w-6 bg-[#F0E7D5]/60"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span>Vansh &amp; Mishti</span>
                </motion.span>
              </motion.figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <motion.div 
          className="mt-8 flex flex-col items-center gap-4"
          variants={containerVariants}
          custom={photos.length}
        >
          <motion.p 
            className="text-xs md:text-sm font-para text-[#F0E7D5]/60 tracking-[0.2em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Swipe or scroll to see more memories
          </motion.p>

          <motion.button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 rounded-full border border-[#F0E7D5]/40 px-6 py-2 text-[0.7rem] md:text-xs tracking-[0.25em] uppercase text-[#F0E7D5]/90 bg-[#141827]/70 backdrop-blur-sm shadow-lg hover:shadow-[#F0E7D5]/20"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(240,231,213,0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            View more photos
          </motion.button>
        </motion.div>
      </motion.div>

      {showAll && (
        <motion.div 
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="relative max-w-6xl w-full max-h-[90vh] bg-[#101524] border border-[#F0E7D5]/20 rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            <motion.div 
              className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-[#F0E7D5]/15 text-[#F0E7D5]/85"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xs md:text-sm tracking-[0.25em] uppercase">
                All Memories
              </span>
              <motion.button
                onClick={() => setShowAll(false)}
                className="text-[0.7rem] md:text-xs tracking-[0.25em] uppercase text-[#F0E7D5]/70 hover:text-[#F0E7D5] transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>

            <motion.div 
              className="p-4 md:p-6 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {photos.map((photo, index) => (
                  <motion.div
                    key={photo.src}
                    className="relative overflow-hidden rounded-2xl bg-[#141827] border border-[#F0E7D5]/10 group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-48 md:h-56 lg:h-64 object-cover hover:brightness-110 transition-all duration-300"
                    />
                    {/* ✨ Modal shine effect too */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
