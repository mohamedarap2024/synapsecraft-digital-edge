import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-camera.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rotate-45 floating"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-accent/30 rotate-12 floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border border-primary/30 rotate-45 floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 border border-accent/30 rotate-12 floating" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Innovate.</span>
                <span className="block text-gradient">Create. Elevate.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Your Partner in Digital Transformation
              </p>
              <p className="text-lg text-muted-foreground/80 max-w-xl">
                We craft exceptional digital experiences that drive innovation, 
                enhance creativity, and elevate your brand to new heights in the digital landscape.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-ghost">
                Get Started
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border/30">
              <div>
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 pulse-glow rounded-2xl overflow-hidden">
              <img 
                src={heroImage} 
                alt="Digital Innovation Visualization" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;