import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import testimonialMale from "@/assets/testimonial-male.jpg";
import testimonialFemale from "@/assets/testimonial-female.jpg";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Milk Vendor, Pune",
    quote: "Collecting credit payments has become so easy with SmartHawker. It saves me a lot of time and there are no mistakes in accounting.",
    image: testimonialMale
  },
  {
    name: "Sunita Devi",
    role: "Vegetable Seller, Delhi",
    quote: "Now I always know how much of each vegetable is left. This has reduced my losses significantly.",
    image: testimonialFemale
  },
  {
    name: "Rajesh Sharma",
    role: "General Store Owner, Mumbai",
    quote: "All my customer data is in one place. Now I can easily track everyone.",
    image: testimonialMale
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
          Thousands of Vendors Trust Us
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          See how SmartHawker has transformed their businesses
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all bg-card"
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary mb-4" />
                
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
