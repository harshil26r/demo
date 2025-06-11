import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Globe, 
  Phone, 
  Clock, 
  Truck, 
  CheckCircle,
  ArrowRight,
  Building,
  Users
} from "lucide-react"

export function AvailabilityAreas() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Globe className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Service Availability Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We proudly serve customers across multiple regions with our comprehensive 
            range of products and services. Find out if we're available in your area.
          </p>
        </div>

        {/* Service Coverage Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Our Service Coverage
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                We have expanded our operations to serve customers across major metropolitan 
                areas and are continuously growing our network to reach more locations. 
                Our commitment is to provide the same high-quality service regardless of your location.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {serviceStats.map((stat, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-4 text-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-card-foreground mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  Service Features
                </h4>
                <ul className="space-y-2">
                  {serviceFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h4 className="text-lg font-semibold text-card-foreground mb-6">
              Check Service Availability
            </h4>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Enter Your Location
                </label>
                <input
                  type="text"
                  placeholder="City, State or ZIP Code"
                  className="w-full px-4 py-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
              </div>
              <Button className="w-full">
                <MapPin className="mr-2 h-4 w-4" />
                Check Availability
              </Button>
            </form>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Primary Service Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">{area.region}</h4>
                    <p className="text-sm text-muted-foreground">{area.coverage}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Cities Served:</span>
                    <span className="font-medium text-card-foreground">{area.cities}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="font-medium text-card-foreground">{area.responseTime}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Service Level:</span>
                    <span className="font-medium text-primary">{area.serviceLevel}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <h5 className="font-medium text-card-foreground text-sm">Major Cities:</h5>
                  <div className="flex flex-wrap gap-2">
                    {area.majorCities.map((city, idx) => (
                      <span
                        key={idx}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Contact Local Office
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Expansion Plans */}
        <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">
            Expanding Our Reach
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're constantly expanding our service areas to better serve our customers. 
            Don't see your location listed? Let us know and we'll keep you informed 
            about our expansion plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Globe className="mr-2 h-4 w-4" />
              Request Service in Your Area
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

const serviceStats = [
  {
    icon: <Building className="h-5 w-5 text-primary" />,
    value: "50+",
    label: "Cities Served"
  },
  {
    icon: <Users className="h-5 w-5 text-primary" />,
    value: "10K+",
    label: "Customers"
  },
  {
    icon: <Truck className="h-5 w-5 text-primary" />,
    value: "24/7",
    label: "Support"
  },
  {
    icon: <Clock className="h-5 w-5 text-primary" />,
    value: "2-4h",
    label: "Response Time"
  }
]

const serviceFeatures = [
  "Same-day service available in major metropolitan areas",
  "24/7 customer support and emergency assistance",
  "Professional installation and setup services",
  "Comprehensive warranty and maintenance programs",
  "Local technicians and support staff",
  "Flexible scheduling to fit your needs"
]

const serviceAreas = [
  {
    region: "Northeast Region",
    coverage: "Full Service Coverage",
    cities: "25+",
    responseTime: "2-4 hours",
    serviceLevel: "Premium",
    majorCities: ["New York", "Boston", "Philadelphia", "Washington DC", "Baltimore"]
  },
  {
    region: "Southeast Region",
    coverage: "Full Service Coverage",
    cities: "20+",
    responseTime: "3-5 hours",
    serviceLevel: "Premium",
    majorCities: ["Atlanta", "Miami", "Charlotte", "Tampa", "Jacksonville"]
  },
  {
    region: "Midwest Region",
    coverage: "Full Service Coverage",
    cities: "18+",
    responseTime: "2-4 hours",
    serviceLevel: "Premium",
    majorCities: ["Chicago", "Detroit", "Cleveland", "Indianapolis", "Milwaukee"]
  },
  {
    region: "Southwest Region",
    coverage: "Full Service Coverage",
    cities: "15+",
    responseTime: "3-6 hours",
    serviceLevel: "Standard",
    majorCities: ["Dallas", "Houston", "Austin", "San Antonio", "Phoenix"]
  },
  {
    region: "West Coast Region",
    coverage: "Full Service Coverage",
    cities: "22+",
    responseTime: "2-4 hours",
    serviceLevel: "Premium",
    majorCities: ["Los Angeles", "San Francisco", "Seattle", "Portland", "San Diego"]
  },
  {
    region: "Mountain Region",
    coverage: "Limited Service",
    cities: "12+",
    responseTime: "4-8 hours",
    serviceLevel: "Standard",
    majorCities: ["Denver", "Salt Lake City", "Las Vegas", "Albuquerque", "Boise"]
  }
]
