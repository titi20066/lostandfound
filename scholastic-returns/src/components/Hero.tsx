import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black/20"></div>
      <img 
        src={heroImage} 
        alt="Students using Lost & Found system" 
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Easily Report and Track
            <span className="block text-accent">Lost & Found Items</span>
            <span className="block text-white">in School</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our system simplifies the process of reporting and finding lost items within the school environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent-gradient hover:opacity-90 transition-opacity text-white font-semibold px-8 py-3 text-lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;