import { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Filter,
  Search,
  ArrowRight,
  Calendar,
  Building
} from "lucide-react"

export function JobOpportunities() {
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const [selectedLocation, setSelectedLocation] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment
    const matchesLocation = selectedLocation === "All" || job.location.includes(selectedLocation)
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesDepartment && matchesLocation && matchesSearch
  })

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Briefcase className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Current Job Opportunities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our growing team and build a rewarding career with us. We're always 
            looking for talented individuals who share our passion for excellence.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-lg p-6 mb-12">
          <div className="flex items-center mb-6">
            <Filter className="h-5 w-5 text-primary mr-2" />
            <h3 className="text-lg font-semibold text-card-foreground">Filter Jobs</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">
                Search Jobs
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by title or description..."
                  className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
              </div>
            </div>

            {/* Department Filter */}
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">
                Department
              </label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              >
                <option value="All">All Departments</option>
                <option value="Technology">Technology</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Design">Design</option>
                <option value="Operations">Operations</option>
                <option value="Human Resources">Human Resources</option>
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              >
                <option value="All">All Locations</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6 mb-12">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-card-foreground mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Building className="h-4 w-4 mr-1" />
                            {job.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {job.salary}
                          </div>
                        </div>
                      </div>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {job.urgency}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-medium text-card-foreground mb-2">Key Requirements:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      Posted: {job.postedDate}
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-0 lg:ml-6 flex flex-col sm:flex-row lg:flex-col gap-3">
                    <Button className="w-full sm:w-auto lg:w-full">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto lg:w-full">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <Briefcase className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No jobs found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search terms to find more opportunities.
              </p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-muted/30 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Don't See the Right Position?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always interested in hearing from talented individuals. 
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Users className="mr-2 h-4 w-4" />
              Submit General Application
            </Button>
            <Button variant="outline" size="lg">
              Join Our Talent Pool
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

const jobOpenings = [
  {
    title: "Senior Software Developer",
    department: "Technology",
    location: "New York, NY / Remote",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    urgency: "Urgent",
    postedDate: "2 days ago",
    description: "We're looking for an experienced software developer to join our growing tech team and help build innovative solutions for our clients.",
    requirements: [
      "5+ years of software development experience",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/Azure)",
      "Strong problem-solving skills",
      "Bachelor's degree in Computer Science or related field",
      "Experience with agile development methodologies"
    ]
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$60,000 - $85,000",
    urgency: "Open",
    postedDate: "1 week ago",
    description: "Lead our marketing initiatives and help drive brand awareness and customer acquisition strategies across multiple channels.",
    requirements: [
      "3+ years of marketing experience",
      "Experience with digital marketing campaigns",
      "Strong analytical and communication skills",
      "Knowledge of SEO/SEM and social media marketing",
      "Bachelor's degree in Marketing or related field",
      "Experience with marketing automation tools"
    ]
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Chicago, IL / Remote",
    type: "Full-time",
    salary: "$55,000 - $75,000",
    urgency: "Open",
    postedDate: "3 days ago",
    description: "Create beautiful and intuitive user experiences for our digital products and help shape the future of our design system.",
    requirements: [
      "3+ years of UX/UI design experience",
      "Proficiency in Figma, Sketch, or Adobe Creative Suite",
      "Strong portfolio demonstrating design skills",
      "Understanding of user-centered design principles",
      "Experience with prototyping and user testing",
      "Knowledge of front-end development basics"
    ]
  },
  {
    title: "Sales Representative",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
    salary: "$45,000 - $65,000 + Commission",
    urgency: "Urgent",
    postedDate: "5 days ago",
    description: "Drive revenue growth by building relationships with new clients and managing existing accounts in your territory.",
    requirements: [
      "2+ years of B2B sales experience",
      "Excellent communication and negotiation skills",
      "Self-motivated and results-driven",
      "Experience with CRM systems",
      "Bachelor's degree preferred",
      "Willingness to travel occasionally"
    ]
  }
]
