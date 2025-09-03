import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, Users, Search, Camera } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: UserCheck,
      title: "Easy Registration",
      description: "Quick and simple registration process for students, staff, and parents."
    },
    {
      icon: Users,
      title: "Student Directory",
      description: "Comprehensive directory of all registered students for easy identification."
    },
    {
      icon: Search,
      title: "Item Reporting & Tracking",
      description: "Efficient system for reporting lost items and tracking their status."
    },
    {
      icon: Camera,
      title: "Image Uploads",
      description: "Ability to upload images of lost items for better identification."
    }
  ];

  return (
    <section id="features" className="py-20 bg-feature-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Key Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to efficiently manage lost and found items in your school
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-card border-border">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;