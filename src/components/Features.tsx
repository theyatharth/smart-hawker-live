import { BookOpen, Package, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    title: "Digital Accounting",
    description: "Keep track of all credit transactions and send payment reminders via WhatsApp."
  },
  {
    icon: Package,
    title: "Stock Management",
    description: "Know exactly how much inventory is left and when to order new stock."
  },
  {
    icon: TrendingUp,
    title: "Daily Sales Report",
    description: "View daily sales and profits in one click and grow your business."
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
          Running Your Business Made Easy
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Manage your business efficiently with SmartHawker
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
