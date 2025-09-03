import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Miller",
      date: "2023-09-15",
      content: "This system has been a lifesaver! My son lost his backpack, and we were able to find it within hours thanks to the detailed reporting and tracking features.",
      initials: "SM"
    },
    {
      name: "David Chen",
      date: "2023-08-20",
      content: "The student directory is incredibly helpful. I found a lost phone and was able to quickly identify the owner and return it.",
      initials: "DC"
    },
    {
      name: "Emily Rodriguez",
      date: "2023-07-10",
      content: "Reporting a lost item was so easy. The image upload feature helped a lot in identifying my daughter's lost jacket. Highly recommend!",
      initials: "ER"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-feature-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from parents, students, and staff who have used our system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-card-foreground mb-6 text-sm leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.date}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Start managing lost & found items today!
          </h3>
          <button className="bg-accent-gradient hover:opacity-90 transition-opacity text-white font-semibold px-8 py-3 rounded-md text-lg">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;