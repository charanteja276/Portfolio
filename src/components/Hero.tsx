import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail , Code } from 'lucide-react';
import heroAvatar from '@/assets/hero-avatar.jpg';
import { useHref } from 'react-router-dom';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/charanteja276', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/charan-teja-potru-008875294/n', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:charanteja276571@example.com', label: 'Email' },
    { icon: Code , href:'https://leetcode.com/u/charanteja276571/' ,label:'Leetcode'}
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-primary blur-lg opacity-50 animate-glow-pulse"></div>
              <img
                src={heroAvatar}
                alt="Charan - Full Stack Developer"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover glass glass-border"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Charan</span>
              </h1>
              
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl lg:text-3xl text-muted-foreground mb-8"
              >
                Full Stack Developer & Tech Innovator
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-muted-foreground mb-8 max-w-2xl"
              >
                Passionate about crafting beautiful, functional web applications with cutting-edge 
                technologies. I bring ideas to life through clean code and innovative solutions.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
              >
                <a href='mailto:charanteja276571@example.com'>
                  <Button size="lg" className="glass hover:glow-primary transition-all duration-300">
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                  </Button>
                </a>
                <a href="https://drive.google.com/file/d/1Yg_L8reXWGHOaxdIL4mDOOs4TZBxW_LP/view?usp=drivesdk" download target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="glass hover:glow-secondary transition-all duration-300"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex gap-6 justify-center lg:justify-start"
              >
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass glass-border rounded-full hover:glow-primary transition-all duration-300 group"
                  >
                    <Icon className="h-6 w-6 group-hover:text-primary transition-colors" />
                    <span className="sr-only">{label}</span>
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;