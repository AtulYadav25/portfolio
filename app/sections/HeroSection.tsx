"use client";

import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PiArrowDownBold, PiDownloadSimpleBold, PiArrowRightBold } from "react-icons/pi";
import Link from "next/link";
import { socialLinks } from "../config/socialConfig";
import { FaGithub, FaLinkedin, FaMedium, FaXTwitter } from "react-icons/fa6";

const socialIconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  medium: FaMedium,
  x: FaXTwitter,
};

const techStack = ["TypeScript", "React", "Next.js", "Node.js", "MongoDB", "Web3"];

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 lg:px-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-foreground">Hi, I&apos;m </span>
              <span className="gradient-text">Atul Yadav</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-4 line-decoration"
            >
              Full Stack Web Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl"
            >
              I build modern web applications that solve real problems. I focus on clean code, 
              great user experiences, and making technology work for people. Currently exploring 
              blockchain and Web3 technologies.
            </motion.p>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                  className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-primary/50 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan">
                <Link href="/contact" className="flex items-center gap-2">
                  Get in Touch
                  <PiArrowRightBold />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:border-primary/50 hover:bg-primary/5">
                <Link href="/resume" className="flex items-center gap-2">
                  <PiDownloadSimpleBold />
                  Resume
                </Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url.startsWith("http") ? link.url : `https://${link.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    aria-label={link.name}
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated rings */}
              <div className="absolute inset-0 scale-110">
                <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: "3s" }} />
              </div>
              <div className="absolute inset-0 scale-125">
                <div className="absolute inset-0 rounded-full border border-primary/10 animate-ping" style={{ animationDuration: "4s", animationDelay: "0.5s" }} />
              </div>

              {/* Main avatar */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-indigo-500 to-primary rounded-full opacity-50 blur-lg animate-pulse" />
                <Avatar className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 border-4 border-card">
                  <AvatarImage src="/assets/atul2.png" className="object-cover" alt="Atul Yadav" />
                  <AvatarFallback className="text-4xl bg-card">AY</AvatarFallback>
                </Avatar>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl animate-float"
                style={{ animationDelay: "0s" }}
              >
                <span className="text-sm font-medium text-foreground">Full Stack</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl animate-float"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-sm font-medium text-primary">Web3</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          aria-label="Scroll to about section"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <PiArrowDownBold size={28} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
