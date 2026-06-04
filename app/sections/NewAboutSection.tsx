"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { skills } from "../config/skillsConfig";
import { PiCodeBold, PiRocketLaunchBold, PiLightbulbBold } from "react-icons/pi";

const highlights = [
  {
    icon: PiCodeBold,
    title: "Clean Code",
    description: "I write code that is easy to read, maintain, and scale. Good code is the foundation of great products.",
  },
  {
    icon: PiRocketLaunchBold,
    title: "Fast Delivery",
    description: "I turn ideas into working products quickly without cutting corners on quality.",
  },
  {
    icon: PiLightbulbBold,
    title: "Problem Solver",
    description: "I love tackling complex challenges and finding simple, elegant solutions.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">01 / ABOUT</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A bit about me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I&apos;m a Full Stack Developer who loves building web applications that make a difference. 
                My journey started with curiosity about how websites work, and it has grown into a passion 
                for creating digital experiences.
              </p>
              <p>
                I work with modern tools like <span className="text-foreground font-medium">React</span>, 
                {" "}<span className="text-foreground font-medium">Next.js</span>, 
                {" "}<span className="text-foreground font-medium">TypeScript</span>, and 
                {" "}<span className="text-foreground font-medium">Node.js</span>. 
                I&apos;m also exploring the exciting world of blockchain and Web3 technologies.
              </p>
              <p>
                When I&apos;m not coding, I enjoy contributing to open source projects and sharing what 
                I learn through technical writing. I believe in continuous learning and pushing 
                boundaries to grow as a developer.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid gap-6 mt-12">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Technologies I work with</h3>
            
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-hover"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <i className={`${skill.iconClass} text-xl text-muted-foreground group-hover:text-primary transition-colors`} />
                  </div>
                  <span className="text-foreground font-medium text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 mt-8 p-6 rounded-2xl glass"
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2+</div>
                <div className="text-muted-foreground text-sm mt-1">Years Exp.</div>
              </div>
              <div className="text-center border-x border-border">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-muted-foreground text-sm mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-muted-foreground text-sm mt-1">Open Source</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
