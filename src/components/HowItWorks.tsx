import { Download, UserPlus, Store } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "App Download Karein",
    number: "1"
  },
  {
    icon: UserPlus,
    title: "Apna Business Register Karein",
    number: "2"
  },
  {
    icon: Store,
    title: "Digital Dukaan Chalayein aur Munafa Kamayein",
    number: "3"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
          Sirf 3 Aasaan Steps Mein Shuru Karein
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          कुछ ही मिनटों में अपना digital business शुरू करें
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg">
                    <step.icon className="w-12 h-12 text-secondary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-md">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-1 bg-gradient-to-r from-secondary to-primary opacity-30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
