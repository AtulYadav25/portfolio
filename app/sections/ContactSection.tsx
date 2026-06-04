"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { contactEmail, calendlyUrl, socialLinks } from "../config/socialConfig";
import { PiEnvelopeBold, PiCalendarBold, PiArrowRightBold, PiCopyBold, PiCheckBold } from "react-icons/pi";
import { FaGithub, FaLinkedin, FaMedium, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

const socialIconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  medium: FaMedium,
  x: FaXTwitter,
};

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-20" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">05 / CONTACT</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let&apos;s work together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I&apos;m always open to discussing new opportunities, 
            collaborations, or interesting ideas.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative p-8 md:p-12 rounded-3xl glass border border-border overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            {/* Main CTA */}
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to start a project?
              </h3>
              <p className="text-muted-foreground mb-8">
                Drop me a message or schedule a call - I&apos;ll get back to you within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan">
                  <Link href={`mailto:${contactEmail}`} className="flex items-center gap-2">
                    <PiEnvelopeBold />
                    Send Email
                    <PiArrowRightBold />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border hover:border-primary/50 hover:bg-primary/5">
                  <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <PiCalendarBold />
                    Schedule a Call
                  </a>
                </Button>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-10">
              <div className="flex-1 h-px bg-border" />
              <span className="text-muted-foreground text-sm">or reach out on</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Social Links & Email */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Email */}
              <button
                onClick={copyEmail}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors group"
              >
                <span className="text-muted-foreground">{contactEmail}</span>
                {copied ? (
                  <PiCheckBold className="text-primary" />
                ) : (
                  <PiCopyBold className="text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </button>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => {
                  const Icon = socialIconMap[link.icon];
                  return (
                    <a
                      key={link.name}
                      href={link.url.startsWith("http") ? link.url : `https://${link.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                      aria-label={link.name}
                    >
                      <Icon size={22} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
