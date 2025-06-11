import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Truck, RotateCcw } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-background">
      {/* Main Hero */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Innovation Meets <span className="text-primary">Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Delivering cutting-edge solutions and exceptional services that
            drive your business forward. Experience the difference with our
            expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Category Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-6xl">{category.icon}</div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group text-center p-4 rounded-lg hover:bg-background transition-colors cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <div className="text-2xl">{industry.icon}</div>
                </div>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center text-foreground mb-12">
          Trusted Excellence in Every Purchase
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 text-primary">
                {indicator.icon}
              </div>
              <h3 className="font-medium text-sm text-foreground">
                {indicator.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const categories = [
  { name: "Consulting", icon: "💼" },
  { name: "Development", icon: "⚙️" },
  { name: "Support", icon: "🛠️" },
  { name: "Training", icon: "📚" },
  { name: "Solutions", icon: "💡" },
];

const industries = [
  { name: "Healthcare", icon: "🏥" },
  { name: "Finance", icon: "💰" },
  { name: "Technology", icon: "💻" },
  { name: "Education", icon: "🎓" },
  { name: "Retail", icon: "🛍️" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "Real Estate", icon: "🏢" },
  { name: "Automotive", icon: "🚗" },
  { name: "Energy", icon: "⚡" },
  { name: "Agriculture", icon: "🌾" },
  { name: "Logistics", icon: "📦" },
  { name: "Entertainment", icon: "🎬" },
];

const trustIndicators = [
  {
    title: "Certified Jewellery",
    icon: <Shield className="w-full h-full" />,
  },
  {
    title: "Money Back Guarantee",
    icon: <RotateCcw className="w-full h-full" />,
  },
  {
    title: "Quality Assured",
    icon: <Star className="w-full h-full" />,
  },
  {
    title: "Fast & Insured Shipping",
    icon: <Truck className="w-full h-full" />,
  },
  {
    title: "30 Days Return",
    icon: <RotateCcw className="w-full h-full" />,
  },
  {
    title: "24/7 Customer Support",
    icon: <Shield className="w-full h-full" />,
  },
];
