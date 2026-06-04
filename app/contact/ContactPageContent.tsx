"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { contactEmail, calendlyUrl, socialLinks } from "../config/socialConfig";
import { PiEnvelopeBold, PiCalendarBold, PiArrowRightBold, PiCopyBold, PiCheckBold, PiMapPinBold, PiClockBold } from "react-icons/pi";
import { FaGithub, FaLinkedin, FaMedium, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

const socialIconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  medium: FaMedium,
  x: FaXTwitter,
};

export function ContactPageContent() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="text-primary font-mono text-sm tracking-wider mb-4 block">GET IN TOUCH</span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Let&apos;s Connect
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          I&apos;m always excited to discuss new projects, creative ideas, or opportunities to collaborate. 
          Don&apos;t hesitate to reach out!
        </p>
      </motion.div>

      {/* Main Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative p-8 md:p-12 rounded-3xl glass border border-border overflow-hidden mb-8"
      >
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          {/* CTA Buttons */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Ready to start a project?
            </h2>
            <p className="text-muted-foreground mb-8">
              Send me a message or schedule a quick call. I typically respond within 24 hours.
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
            <span className="text-muted-foreground text-sm">or find me on</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Email & Socials */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Email copy */}
            <button
              onClick={copyEmail}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors group w-full md:w-auto justify-center"
            >
              <PiEnvelopeBold className="text-primary" />
              <span className="text-foreground font-medium">{contactEmail}</span>
              {copied ? (
                <PiCheckBold className="text-primary" />
              ) : (
                <PiCopyBold className="text-muted-foreground group-hover:text-primary transition-colors" />
              )}
            </button>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url.startsWith("http") ? link.url : `https://${link.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    aria-label={link.name}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 rounded-2xl border border-border bg-card"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <PiMapPinBold className="text-primary text-xl" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
          <p className="text-muted-foreground">
            Available for remote work worldwide. Based in India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 rounded-2xl border border-border bg-card"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <PiClockBold className="text-primary text-xl" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Response Time</h3>
          <p className="text-muted-foreground">
            I usually respond within 24 hours. For urgent matters, schedule a call.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
