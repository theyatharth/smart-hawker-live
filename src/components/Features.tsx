import { Mic, FileText, BookOpen, Package, BarChart3, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useTranslation } from 'react-i18next';
import Autoplay from "embla-carousel-autoplay";

const Features = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Mic,
      title: t('features.voice.title'),
      description: t('features.voice.description')
    },
    {
      icon: FileText,
      title: t('features.invoice.title'),
      description: t('features.invoice.description')
    },
    {
      icon: BookOpen,
      title: t('features.credit.title'),
      description: t('features.credit.description')
    },
    {
      icon: Package,
      title: t('features.inventory.title'),
      description: t('features.inventory.description')
    },
    {
      icon: BarChart3,
      title: t('features.reports.title'),
      description: t('features.reports.description')
    },
    {
      icon: Globe,
      title: t('features.multilingual.title'),
      description: t('features.multilingual.description')
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
          {t('features.title')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('features.subtitle')}
        </p>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {features.map((feature, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-card h-full">
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
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Features;
