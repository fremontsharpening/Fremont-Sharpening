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
      question: "What equipment do you use?",
      answer: "We use the Work Sharp Ken Onion Blade Grinding system. This professional-grade equipment allows for precise, repeatable results and creates a superior convex edge that stays sharp longer than traditional grinds."
    },
    {
      question: "Is there a minimum service charge?",
      answer: "Yes, our minimum for mobile sharpening is 6 items or $54. If you have fewer items, we encourage you to combine your sharpening with a neighbor or friend at the same location!"
    },
    {
      question: "How long does it take?",
      answer: "Most appointments take between 45 to 60 minutes, depending on the number of items and their condition. We work efficiently so you can get back to cooking."
    },
    {
      question: "What is your service area?",
      answer: "We primarily serve Fremont, Union City, and Newark. We can travel outside these areas for a small additional travel fee—please inquire regardless of your location and we'll do our best to accommodate you!"
    },
    {
      question: "How often should I sharpen my knives?",
      answer: "For regular home cooks, we recommend professional sharpening every 3-6 months. If you cook daily or notice your knife slipping on tomato skins or onion layers, it's time for a touch-up."
    },
    {
      question: "Do you repair damaged knives?",
      answer: "Yes! We can fix broken tips, chips in the blade, and bolster issues. Minor repairs are often included in the sharpening price, while major restoration might incur a small extra fee."
    },
    {
      question: "What payment methods do you accept?",
      answer: "Upon completion, we'll send a mobile invoice directly to your phone. You can pay instantly using a credit card, Apple Pay, or Google Pay. We also accept cash, Zelle, and Venmo."
    },
    {
      question: "Do you sharpen serrated knives?",
      answer: "Absolutely. We have specialized equipment to sharpen each scallop of a serrated blade individually, restoring its slicing power without ruining the teeth."
    },
    {
      question: "Do you sharpen grooming or hair shears?",
      answer: "No, we do not sharpen grooming or hair shears. These require specialized equipment and calibration that falls outside of our service offerings."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16 space-y-4">
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
          <a href="mailto:fremontsharpening@gmail.com" className="text-primary font-medium hover:underline text-lg">
            Contact us directly
          </a>
        </div>
      </div>
    </div>
  );
}
