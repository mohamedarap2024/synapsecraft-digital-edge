import { Card } from "@/components/ui/card";
import { 
  Smartphone, 
  Globe, 
  Palette, 
  BarChart3, 
  Code2, 
  Zap 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Intuitive and beautiful design solutions that enhance user engagement and brand identity.",
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that increase visibility, drive traffic, and boost conversions.",
    },
    {
      icon: Code2,
      title: "Custom Software",
      description: "Tailored software solutions that streamline operations and solve complex business challenges.",
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Intelligent automation solutions that optimize workflows and increase operational efficiency.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to transform your business 
            and elevate your online presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="glass-card p-8 group hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-gradient transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;