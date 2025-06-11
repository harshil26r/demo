import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { 
  Diamond,
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  Heart
} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Stay Updated with Our Latest News
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter and be the first to know about new products, 
              special offers, and company updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
              <Button>
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Diamond className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-card-foreground">
                Demo Company
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to delivering exceptional products and services 
              that exceed customer expectations while maintaining the highest 
              standards of quality and innovation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@democompany.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">123 Business St, City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-6">
              Support & Resources
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h5 className="text-sm font-medium text-card-foreground mb-3">
                Theme Preference
              </h5>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© 2024 Demo Company. All rights reserved.</span>
              <span>•</span>
              <span className="flex items-center">
                Made with <Heart className="h-3 w-3 text-red-500 mx-1" /> using React & shadcn/ui
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
              <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Career Opportunities", href: "#careers" },
  { label: "Contact Us", href: "#contact" },
  { label: "Blog", href: "#blog" },
  { label: "News & Updates", href: "#news" }
]

const services = [
  { label: "Product Development", href: "#development" },
  { label: "Consulting Services", href: "#consulting" },
  { label: "Technical Support", href: "#support" },
  { label: "Training Programs", href: "#training" },
  { label: "Maintenance Services", href: "#maintenance" },
  { label: "Custom Solutions", href: "#custom" }
]

const supportLinks = [
  { label: "Help Center", href: "#help" },
  { label: "Documentation", href: "#docs" },
  { label: "FAQs", href: "#faqs" },
  { label: "Community Forum", href: "#forum" },
  { label: "Contact Support", href: "#support" },
  { label: "Service Status", href: "#status" }
]

const socialLinks = [
  {
    label: "Facebook",
    href: "#facebook",
    icon: <Facebook className="h-4 w-4" />
  },
  {
    label: "Twitter",
    href: "#twitter",
    icon: <Twitter className="h-4 w-4" />
  },
  {
    label: "Instagram",
    href: "#instagram",
    icon: <Instagram className="h-4 w-4" />
  },
  {
    label: "LinkedIn",
    href: "#linkedin",
    icon: <Linkedin className="h-4 w-4" />
  }
]
