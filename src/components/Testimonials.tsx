import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useTranslation } from 'react-i18next';
import testimonialMale from "@/assets/testimonial-male.jpg";
import testimonialFemale from "@/assets/testimonial-female.jpg";

const Testimonials = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      name: t('testimonials.testimonial1.name'),
      role: t('testimonials.testimonial1.title'),
      quote: t('testimonials.testimonial1.quote'),
      image: testimonialMale
    },
    {
      name: t('testimonials.testimonial2.name'),
      role: t('testimonials.testimonial2.title'),
      quote: t('testimonials.testimonial2.quote'),
      image: testimonialFemale
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
          {t('testimonials.title')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Real feedback from real users
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
