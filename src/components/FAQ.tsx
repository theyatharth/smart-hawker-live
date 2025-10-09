import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this app difficult to use?",
    answer: "No! This app is specifically designed for vendors like you. It's very easy to use."
  },
  {
    question: "What does it cost? Are there any hidden fees?",
    answer: "Most of SmartHawker's essential features are completely FREE. We also have a Premium plan with extra features at a very low cost. There are no hidden fees."
  },
  {
    question: "Is my business data safe in this app?",
    answer: "Yes, absolutely. All your business data is 100% secure and no one except you can see it."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Answers to your questions are here
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
