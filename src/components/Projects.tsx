import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Zap, Palette, Brain,CalendarDays } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Heart Disease Prediction",
      description: "predicts the risk of heart disease based on user health inputs using a machine learning model.",
      tech: ["Python", "NumPy", "Pandas" , "Matplotlib" , "scikit-learn"],
      liveUrl: "https://github.com/charanteja276/Heart_Disease_prediction",
      githubUrl: "https://github.com/charanteja276/Heart_Disease_prediction",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-time Auction Bidding Platform", 
      description: "A real-time auction bidding platform where users can place bids on listed items and compete to win before the timer ends.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "tailwindcss"],
      liveUrl: "https://sunny-croissant-0c0425.netlify.app/",
      githubUrl: "https://github.com/charanteja276/QuickBid",
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Event Managment System",
      description: "An event management system that allows users to create, manage, and register for events",
      tech: ["Vue.js", "Node.js", "Figma API", "Tailwind CSS", "Docker"],
      liveUrl: "https://github.com/charanteja276/Event-Management-system", 
      githubUrl: "https://github.com/charanteja276/Event-Management-system",
      icon: CalendarDays,
      gradient: "from-green-500 to-teal-500"
    },
    
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
        <a href='https://github.com/charanteja276' target='_blank'>
          <Button size="lg" className="glass hover:glow-accent transition-all duration-300">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;