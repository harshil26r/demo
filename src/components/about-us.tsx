import { Button } from "@/components/ui/button"
import { 
  Users, 
  Award, 
  Globe, 
  Clock, 
  Phone, 
  Mail, 
  MapPin,
  Calendar
} from "lucide-react"

export function AboutUs() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* About Us Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Our Company
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With years of experience and a commitment to excellence, we have established 
            ourselves as a trusted leader in our industry, serving clients worldwide 
            with innovative solutions and exceptional service.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Founded with a vision to transform the industry, our company has grown 
                from a small startup to a global organization. We began our journey 
                with a simple belief: that innovation and customer satisfaction should 
                be at the heart of everything we do.
              </p>
              <p className="leading-relaxed">
                Over the years, we have expanded our services, built strong partnerships, 
                and developed cutting-edge solutions that have helped thousands of clients 
                achieve their goals. Our commitment to quality and excellence has earned 
                us recognition as an industry leader.
              </p>
              <p className="leading-relaxed">
                Today, we continue to push boundaries, embrace new technologies, and 
                maintain our focus on delivering exceptional value to our clients while 
                contributing positively to the communities we serve.
              </p>
            </div>
            <Button className="mt-6">
              Learn More About Us
            </Button>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-card-foreground mb-6">
                Company Highlights
              </h4>
              <div className="grid grid-cols-2 gap-6">
                {companyStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-muted/30 rounded-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Get in Touch
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your journey with us? Contact our team today and 
              discover how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {info.title}
                </h4>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Phone className="mr-2 h-4 w-4" />
                Call Us Now
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const companyStats = [
  {
    icon: <Calendar className="h-6 w-6 text-primary" />,
    value: "10+",
    label: "Years Experience"
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    value: "500+",
    label: "Happy Clients"
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    value: "50+",
    label: "Awards Won"
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    value: "25+",
    label: "Countries Served"
  }
]

const contactInfo = [
  {
    title: "Phone",
    icon: <Phone className="h-6 w-6 text-primary" />,
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
  },
  {
    title: "Email",
    icon: <Mail className="h-6 w-6 text-primary" />,
    details: ["info@company.com", "support@company.com"]
  },
  {
    title: "Address",
    icon: <MapPin className="h-6 w-6 text-primary" />,
    details: ["123 Business Street", "City, State 12345"]
  },
  {
    title: "Hours",
    icon: <Clock className="h-6 w-6 text-primary" />,
    details: ["Mon-Fri: 9AM-6PM", "Sat: 10AM-4PM"]
  }
]
