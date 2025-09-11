import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-12 border-t border-border/30 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold text-gradient">SYNAPSE</span>
              </div>
              <p className="text-muted-foreground">
                Transforming businesses through innovative digital solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Digital Marketing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Dribbble</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/30 mt-12 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Synapse Agency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
