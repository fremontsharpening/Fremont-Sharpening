import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const faqs = [
    {
      question: "How does the mobile service work?",
      answer: "We come directly to your home in our fully equipped mobile workshop. We'll park in your driveway or on the street, collect your items, sharpen them on-site, and return them to you immediately. No need to be without your tools for days!"
    },
    {
      question: "How long does it take?",
      answer: "Most appointments take between 45 to 60 minutes, depending on the number of items and their condition. We work efficiently so you can get back to cooking."
    },
    {
      question: "What is your service area?",
      answer: "We primarily serve the Fremont area and surrounding local neighborhoods. If you're unsure if you're in our range, please try booking an appointment—the system will let you know, or feel free to contact us."
    },
    {
      question: "How often should I sharpen my knives?",
      answer: "For regular home cooks, we recommend professional sharpening every 6-12 months. If you cook daily or notice your knife slipping on tomato skins or onion layers, it's time for a touch-up."
    },
    {
      question: "Do you repair damaged knives?",
      answer: "Yes! We can fix broken tips, chips in the blade, and bolster issues. Minor repairs are often included in the sharpening price, while major restoration might incur a small extra fee."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, debit cards, cash, and digital payments like Venmo or Apple Pay upon completion of the service."
    },
    {
      question: "Do you sharpen serrated knives?",
      answer: "Absolutely. We have specialized equipment to sharpen each scallop of a serrated blade individually, restoring its slicing power without ruining the teeth."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Common Questions</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our mobile sharpening service.
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-sm border p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium py-4 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a href="mailto:hello@fremontsharpening.com" className="text-primary font-medium hover:underline text-lg">
            Contact us directly
          </a>
        </div>
      </div>
    </div>
  );
}
