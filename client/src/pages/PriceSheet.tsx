import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PriceSheet() {
  const bookingUrl = "https://fremontsharpening.youcanbook.me/";

  const priceItems = [
    { category: "Kitchen Cutlery", items: [
      { name: "Kitchen Knives", price: "$9.00", desc: "Standard chef, paring, and utility knives." },
      { name: "Serrated Knives", price: "$9.00", desc: "Bread knives and serrated utility knives." },
      { name: "Cleavers / Large Knives", price: "$12.00", desc: "Blades 10 inches or longer, and heavy cleavers." },
      { name: "Kitchen Tools", price: "$12.00", desc: "Pizza cutters, food processor blades, peelers, etc." },
    ]},
    { category: "Household & Garden", items: [
      { name: "Scissors", price: "$9.00", desc: "Fabric, kitchen, and household scissors." },
      { name: "Pruning Shears", price: "$12.00", desc: "Hand pruners and garden shears." },
      { name: "Machetes", price: "$16.00", desc: "Large brush clearing tools." },
      { name: "Axes / Hatchets", price: "$16.00", desc: "Hand axes and splitting mauls." },
      { name: "Large Loppers", price: "$16.00", desc: "Long-handled branch cutters." },
      { name: "Lawnmower Blades", price: "$16.00", desc: "Includes free removal and re-installation." },
    ]}
  ];

  return (
    <div className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Service Pricing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for all your sharpening needs. No hidden service fees for local visits.
          </p>
        </div>

        <div className="grid gap-12">
          {priceItems.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-serif font-bold border-b border-border pb-4 text-primary">
                {section.category}
              </h2>
              <div className="grid gap-4">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg hover:bg-secondary/30 transition-colors border border-transparent hover:border-border/50">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <div className="font-bold text-xl text-primary whitespace-nowrap">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-secondary/20 rounded-2xl border border-secondary text-center space-y-6">
          <h3 className="text-2xl font-serif font-bold">Ready to book?</h3>
          <p className="text-muted-foreground">
            Minimum service visit is 6 items or $54. Feel free to combine with neighbors!
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
              Schedule Appointment
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
