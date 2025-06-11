import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Menu,
  X,
  Phone,
  User,
  ShoppingBag,
  Heart,
  Search,
  Diamond,
} from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/95">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline">
              Professional Services & Solutions
            </span>
            <span className="sm:hidden">Professional Services</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <a href="tel:+447361523500" className="hover:underline">
              +44 7361523500
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Diamond className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">
              Demo Company
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </a>
            <a
              href="#services"
              className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a
              href="#careers"
              className="text-foreground hover:text-primary transition-colors font-medium">
              Careers
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
            <a
              href="#inquiry"
              className="text-foreground hover:text-primary transition-colors font-medium">
              Get Quote
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Search - Hidden on mobile */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Account */}
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
              <span className="sr-only">Shopping cart</span>
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {/* Search on mobile */}
              <div className="md:hidden">
                <Button variant="outline" className="w-full justify-start">
                  <Search className="h-4 w-4 mr-2" />
                  Search products...
                </Button>
              </div>

              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors font-medium py-2">
                About Us
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Services
              </a>
              <a
                href="#careers"
                className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Careers
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Contact
              </a>
              <a
                href="#inquiry"
                className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Get Quote
              </a>

              {/* Account actions on mobile */}
              <div className="pt-4 border-t border-border">
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" className="justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Sign In / Register
                  </Button>
                  <Button className="justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
