import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import testimonialMale from "@/assets/testimonial-male.jpg";
import testimonialFemale from "@/assets/testimonial-female.jpg";

const testimonials = [
  {
    name: "रमेश कुमार",
    role: "Milk Vendor, Pune",
    quote: "SmartHawker से उधारी वसूलना बहुत आसान हो गया है। मेरा काफी time बचता है और हिसाब में कोई गलती नहीं होती।",
    image: testimonialMale
  },
  {
    name: "सुनीता देवी",
    role: "Vegetable Seller, Delhi",
    quote: "अब मुझे हमेशा पता रहता है कि कौनसी सब्ज़ी कितनी बची है। इससे मेरा नुकसान कम हो गया है।",
    image: testimonialFemale
  },
  {
    name: "राजेश शर्मा",
    role: "General Store Owner, Mumbai",
    quote: "मेरे सभी customers का data एक जगह है। अब मैं easily सबको track कर पाता हूं।",
    image: testimonialMale
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
          हज़ारों Vendors हम पर भरोसा करते हैं
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          देखें कैसे SmartHawker ने इनके business को बदल दिया
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
