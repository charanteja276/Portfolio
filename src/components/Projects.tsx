import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Zap, Palette, Brain } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "Intelligent task management with ML-driven priority suggestions and automated categorization.",
      tech: ["React", "TypeScript", "Python", "TensorFlow", "MongoDB"],
      liveUrl: "https://ai-tasks.demo.com",
      githubUrl: "https://github.com/charan/ai-task-manager",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-time Collaboration Platform", 
      description: "WebRTC-based platform for seamless team collaboration with live editing and video chat.",
      tech: ["Next.js", "Socket.io", "WebRTC", "PostgreSQL", "Redis"],
      liveUrl: "https://collab-platform.demo.com",
      githubUrl: "https://github.com/charan/collab-platform",
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Design System Generator",
      description: "Automated design system creation tool with Figma integration and component generation.",
      tech: ["Vue.js", "Node.js", "Figma API", "Tailwind CSS", "Docker"],
      liveUrl: "https://design-gen.demo.com", 
      githubUrl: "https://github.com/charan/design-generator",
      icon: Palette,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Blockchain Analytics Dashboard",
      description: "Real-time cryptocurrency analytics with portfolio tracking and market insights.",
      tech: ["React", "D3.js", "Web3.js", "Express.js", "CoinGecko API"],
      liveUrl: "https://crypto-analytics.demo.com",
      githubUrl: "https://github.com/charan/crypto-dashboard", 
      icon: Code,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Smart Home IoT Controller",
      description: "IoT device management system with voice control and automated scheduling.",
      tech: ["React Native", "MQTT", "Arduino", "Firebase", "Google Assistant"],
      liveUrl: "https://smart-home.demo.com",
      githubUrl: "https://github.com/charan/smart-home",
      icon: Zap,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "E-learning Microlearning Platform", 
      description: "Bite-sized learning modules with adaptive algorithms and progress tracking.",
      tech: ["Svelte", "FastAPI", "PostgreSQL", "Redis", "Stripe API"],
      liveUrl: "https://microlearn.demo.com",
      githubUrl: "https://github.com/charan/microlearning",
      icon: Brain,
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work and innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass glass-border rounded-2xl p-6 h-full hover:glow-primary transition-all duration-500 group-hover:scale-105">
                {/* Project icon with gradient */}
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                    <project.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Project content */}
                <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full glass glass-border text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 mt-auto">
                  <Button
                    size="sm"
                    className="flex-1 glass hover:glow-primary transition-all duration-300"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="glass hover:glow-secondary transition-all duration-300"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button size="lg" className="glass hover:glow-accent transition-all duration-300">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;