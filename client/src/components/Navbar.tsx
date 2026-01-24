import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Scissors } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Price Sheet" },
    { href: "/faq", label: "FAQ" },
  ];

  const bookingUrl = "https://fremontsharpening.youcanbook.me/";

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/">
            <a className="flex items-center gap-2 font-serif text-xl font-bold tracking-tight text-primary hover:opacity-90 transition-opacity">
              <img src="/logo-fremont.png" alt="Fremont Sharpening Logo" className="h-12 w-12 object-contain bg-white rounded-full p-0.5" />
              <span>Fremont Sharpening</span>
            </a>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href
                    ? "text-primary underline decoration-2 underline-offset-4"
                    : "text-foreground/70"
                }`}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        location === link.href ? "text-primary" : "text-foreground/70"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  </Link>
                ))}
                <Button asChild className="mt-4 w-full bg-primary hover:bg-primary/90">
                  <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                    Book Now
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
