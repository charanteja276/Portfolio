import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Charan. Built with ❤️ using React, TypeScript & Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
