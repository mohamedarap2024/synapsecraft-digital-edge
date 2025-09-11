import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Target, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to achieve extraordinary results"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering quality that exceeds expectations"
    },
    {
      icon: Target,
      title: "Results",
      description: "Focused on measurable outcomes and success"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="text-gradient">Synapse Agency</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                We are a forward-thinking digital agency passionate about creating 
                innovative solutions that drive business transformation.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground/90">
                At Synapse Agency, we bridge the gap between creativity and technology. 
                Our team of experts specializes in crafting digital experiences that 
                not only look stunning but also deliver measurable results.
              </p>
              
              <p className="text-lg text-muted-foreground/90">
                From web development to digital marketing, we combine strategic thinking 
                with cutting-edge technology to help businesses thrive in the digital age.
              </p>
            </div>

            <Button className="btn-hero">
              Learn More About Us
            </Button>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-gradient transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;