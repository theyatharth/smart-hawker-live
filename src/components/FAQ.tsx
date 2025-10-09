import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "क्या यह app इस्तेमाल करना मुश्किल है?",
    answer: "नहीं! यह app ख़ास तौर पर आप जैसे vendors के लिए ही बनाया गया है। इसको चलाना बहुत आसान है।"
  },
  {
    question: "इसका क्या charge है? क्या कोई hidden cost है?",
    answer: "SmartHawker के ज़्यादातर ज़रूरी features बिल्कुल FREE हैं। हमारा Premium plan भी है जिसमें extra features मिलते हैं, जिसका charge बहुत कम है। कोई hidden cost नहीं है।"
  },
  {
    question: "क्या मेरा business data इस app में safe है?",
    answer: "हां, बिल्कुल। आपका सारा business data 100% सुरक्षित (secure) है और आपके अलावा कोई use नहीं देख सकता।"
  }
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
          अक्सर पूछे जाने वाले सवाल
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          आपके सवालों के जवाब यहां हैं
        </p>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
