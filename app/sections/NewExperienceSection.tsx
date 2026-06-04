"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { experiences } from "../config/experienceConfig";
import { PiMapPinBold, PiCalendarBold, PiArrowSquareOutBold } from "react-icons/pi";

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 lg:py-32 px-6 lg:px-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">02 / EXPERIENCE</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Where I&apos;ve worked
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent transform md:-translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary glow-cyan transform -translate-x-1/2 mt-2 z-10" />

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {exp.logo ? (
                          <img src={exp.logo} alt={exp.company} className="w-8 h-8 object-contain" />
                        ) : (
                          <span className="text-lg font-bold text-primary">{exp.company[0]}</span>
                        )}
                      </div>
                      <div className={index % 2 === 0 ? "md:text-right" : ""}>
                        <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className={`flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="flex items-center gap-1.5">
                        <PiCalendarBold className="text-primary" />
                        {exp.startDate} — {exp.endDate}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <PiMapPinBold className="text-primary" />
                        {exp.location} ({exp.locationType})
                      </span>
                    </div>

                    {/* Responsibilities */}
                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.responsibilities.slice(0, 3).map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm leading-relaxed">
                          <span className="text-primary mr-2">-</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech.name}
                          className="px-2.5 py-1 rounded-lg bg-secondary text-xs font-medium text-muted-foreground border border-border"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    {exp.links && exp.links.length > 0 && (
                      <div className={`flex flex-wrap gap-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        {exp.links.map((link) => (
                          <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-primary text-sm hover:underline"
                          >
                            {link.name}
                            <PiArrowSquareOutBold size={14} />
                          </a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
