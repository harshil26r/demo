import { Button } from "@/components/ui/button"
import { 
  Code, 
  Palette, 
  BarChart3, 
  Users, 
  Headphones, 
  Shield,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign
} from "lucide-react"

export function CareerOptions() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Career Opportunities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our dynamic team and build a rewarding career with us. We offer 
            exciting opportunities across various departments with competitive 
            benefits and growth potential.
          </p>
        </div>

        {/* Career Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {careerCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {category.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {category.description}
              </p>
              <div className="space-y-2 mb-6">
                {category.roles.map((role, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{role}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                View Openings
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Why Work With Us */}
        <div className="bg-card border border-border rounded-lg p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
              Why Work With Us?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in creating an environment where our employees can thrive, 
              grow, and make a meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-card-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Openings Preview */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Current Openings
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest job opportunities and find the perfect role for your skills and career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {featuredJobs.map((job, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-1">
                    {job.title}
                  </h4>
                  <p className="text-muted-foreground">{job.department}</p>
                </div>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {job.type}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{job.experience}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  <span>{job.salary}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {job.description}
              </p>

              <Button className="w-full">
                Apply Now
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Openings
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

const careerCategories = [
  {
    title: "Technology",
    description: "Join our tech team and work on cutting-edge projects using the latest technologies.",
    icon: <Code className="h-6 w-6 text-primary" />,
    roles: ["Software Developer", "DevOps Engineer", "Data Scientist", "UI/UX Designer"]
  },
  {
    title: "Design",
    description: "Create beautiful and functional designs that enhance user experience.",
    icon: <Palette className="h-6 w-6 text-primary" />,
    roles: ["Graphic Designer", "Product Designer", "Brand Manager", "Creative Director"]
  },
  {
    title: "Business",
    description: "Drive business growth and strategy across various departments.",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    roles: ["Business Analyst", "Project Manager", "Sales Executive", "Marketing Specialist"]
  },
  {
    title: "Human Resources",
    description: "Help build and maintain our company culture and support our team.",
    icon: <Users className="h-6 w-6 text-primary" />,
    roles: ["HR Manager", "Recruiter", "Training Specialist", "Employee Relations"]
  },
  {
    title: "Customer Support",
    description: "Provide exceptional service and support to our valued customers.",
    icon: <Headphones className="h-6 w-6 text-primary" />,
    roles: ["Support Specialist", "Account Manager", "Technical Support", "Customer Success"]
  },
  {
    title: "Operations",
    description: "Ensure smooth operations and maintain high-quality standards.",
    icon: <Shield className="h-6 w-6 text-primary" />,
    roles: ["Operations Manager", "Quality Assurance", "Supply Chain", "Logistics Coordinator"]
  }
]

const benefits = [
  {
    title: "Competitive Salary",
    description: "Industry-leading compensation packages with performance bonuses",
    icon: <DollarSign className="h-8 w-8 text-primary" />
  },
  {
    title: "Growth Opportunities",
    description: "Clear career progression paths and professional development programs",
    icon: <BarChart3 className="h-8 w-8 text-primary" />
  },
  {
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options available",
    icon: <Clock className="h-8 w-8 text-primary" />
  },
  {
    title: "Great Team",
    description: "Collaborative environment with supportive and talented colleagues",
    icon: <Users className="h-8 w-8 text-primary" />
  }
]

const featuredJobs = [
  {
    title: "Senior Software Developer",
    department: "Technology",
    type: "Full-time",
    location: "New York, NY / Remote",
    experience: "5+ years experience",
    salary: "$80,000 - $120,000",
    description: "We're looking for an experienced software developer to join our growing tech team and help build innovative solutions."
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    type: "Full-time",
    location: "Los Angeles, CA",
    experience: "3+ years experience",
    salary: "$60,000 - $85,000",
    description: "Lead our marketing initiatives and help drive brand awareness and customer acquisition strategies."
  }
]
