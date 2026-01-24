import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, ShieldCheck, Sparkles, Clock } from "lucide-react";

export default function Home() {
  const bookingUrl = "https://fremontsharpening.youcanbook.me/";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: 'url("/hero-sharpening.png")',
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium tracking-wide mb-4">
              Mobile Sharpening Service
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-tight">
              Restore the Edge <br/> to Your Kitchen
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Professional craftsmanship delivered to your doorstep. We service knives, scissors, and tools for discerning home cooks in Fremont.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-full shadow-lg shadow-black/20">
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4 px-6"
            >
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold">We Come to You</h3>
              <p className="text-muted-foreground leading-relaxed">
                No need to drop off your tools. Our mobile workshop arrives at your driveway, providing convenient, on-site service.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 px-6"
            >
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold">Precision Edge</h3>
              <p className="text-muted-foreground leading-relaxed">
                We use the Work Sharp Ken Onion Blade Grinding system to restore a professional, durable edge to your cherished tools.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 px-6"
            >
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold">Fast Turnaround</h3>
              <p className="text-muted-foreground leading-relaxed">
                Most appointments are completed within the hour. Enjoy your freshly sharpened tools immediately for your next meal.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro / About Snippet */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <img 
                src="/tools-display.png" 
                alt="Sharpened tools" 
                className="rounded-lg shadow-xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-primary font-medium tracking-wide uppercase text-sm">Our Philosophy</span>
              <h2 className="text-4xl font-serif font-bold text-foreground">
                Honoring the Craft of Cooking
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fremont Sharpening was founded on a simple belief: good cooking starts with good tools. 
                A dull knife isn't just frustrating—it's dangerous and disrespectful to your ingredients.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We bring traditional craftsmanship to the modern home. Whether it's your grandmother's fabric scissors 
                or your favorite chef's knife, we treat every tool with the respect it deserves.
              </p>
              <div className="pt-4">
                <Button variant="link" className="text-primary p-0 h-auto font-semibold text-lg group" asChild>
                  <Link href="/faq">
                    Read our FAQ 
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Professional sharpening at a fair price. No hidden fees.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Kitchen Knives", price: "$9", icon: "🔪" },
              { name: "Large Knives", price: "$12", icon: "🍖" },
              { name: "Scissors", price: "$9", icon: "✂️" },
              { name: "Garden Tools", price: "$12+", icon: "🌿" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-semibold mb-2">{item.name}</h4>
                <p className="text-primary font-bold text-xl">{item.price}</p>
              </div>
            ))}
          </div>

          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8">
            <Link href="/pricing">View Full Price Sheet</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Our Customers Say</h2>
            <div className="flex justify-center gap-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <Sparkles key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Nelson Agregado",
                text: "Thomas did a great job sharpening several of my knives... showed up on time and did the job within minutes and I didn't even have to leave the house!",
                tag: "Local Guide"
              },
              {
                name: "Jonathan Peterson",
                text: "Absolutely awesome! As easy as could be to set up appointment... 5 knives brought back to life. Thomas was professional and had a cool apron.",
                tag: "Customer"
              },
              {
                name: "Ashley Perkins Lawson",
                text: "Thomas did a phenomenal job... Our knives are now sharper than they've ever been! We will be using Thomas' services again!",
                tag: "Customer"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl border shadow-sm relative"
              >
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <span className="text-xs text-muted-foreground">{testimonial.tag}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Ready to rediscover your knives?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Book your mobile appointment today and experience the joy of truly sharp tools.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 rounded-full shadow-xl">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
              Schedule Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
