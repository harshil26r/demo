import { Eye, Target, Heart, Lightbulb } from "lucide-react"

export function VisionMission() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driving innovation and excellence in everything we do, while building 
            lasting relationships with our clients and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Vision */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Our Vision
              </h3>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm">
              <p className="text-lg text-card-foreground leading-relaxed mb-6">
                To be the leading innovator in our industry, setting new standards 
                for quality, sustainability, and customer satisfaction while creating 
                positive impact in communities worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Global leadership in innovation and technology
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Sustainable business practices for future generations
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Empowering communities through meaningful partnerships
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Our Mission
              </h3>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm">
              <p className="text-lg text-card-foreground leading-relaxed mb-6">
                To deliver exceptional products and services that exceed customer 
                expectations, while fostering innovation, maintaining the highest 
                ethical standards, and contributing to sustainable development.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Customer-centric approach in all our endeavors
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Continuous innovation and improvement
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Ethical business practices and transparency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="font-semibold text-card-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const coreValues = [
  {
    title: "Innovation",
    description: "Continuously pushing boundaries and embracing new technologies",
    icon: <Lightbulb className="h-6 w-6 text-primary" />
  },
  {
    title: "Integrity",
    description: "Maintaining the highest ethical standards in all our actions",
    icon: <Heart className="h-6 w-6 text-primary" />
  },
  {
    title: "Excellence",
    description: "Striving for perfection in every product and service we deliver",
    icon: <Target className="h-6 w-6 text-primary" />
  },
  {
    title: "Collaboration",
    description: "Working together to achieve common goals and shared success",
    icon: <Eye className="h-6 w-6 text-primary" />
  }
]
