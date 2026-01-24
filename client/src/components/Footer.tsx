import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-primary">Fremont Sharpening</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Professional mobile sharpening service for discerning home cooks. 
              Restoring the edge to your kitchen and garden tools with precision and care.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Serving Fremont, Union City, & Newark</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>fremontsharpening@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(510) 579-5156</span>
              </div>
            </div>
          </div>

          {/* Hours/Booking */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Service</h4>
            <p className="text-sm text-muted-foreground">
              We come to you! Schedule a time that works for your household.
            </p>
            <a 
              href="https://fremontsharpening.youcanbook.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-primary font-medium hover:underline"
            >
              Book an Appointment &rarr;
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Fremont Sharpening. All rights reserved.</p>
          <div className="flex gap-6 mt-2">
            <a href="https://instagram.com/fremontsharpening" target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm"><Instagram className="h-5 w-5" /></a>
            <a href="https://facebook.com/fremontsharpening" target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
