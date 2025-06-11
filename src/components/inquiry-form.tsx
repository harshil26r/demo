import { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  Send, 
  Upload, 
  X, 
  FileText, 
  User, 
  Mail, 
  Package, 
  Hash,
  MessageSquare,
  Building
} from "lucide-react"

export function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    productName: "",
    quantity: "",
    gstinNumber: "",
    message: "",
    info: ""
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setSelectedImage(null)
    setImagePreview(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", { ...formData, image: selectedImage })
    alert("Thank you for your inquiry! We'll get back to you soon.")
  }

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Send Us an Inquiry
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a question about our products or services? Fill out the form below 
            and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-6 flex items-center">
                  <User className="h-5 w-5 mr-2 text-primary" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              </div>

              {/* Product Information */}
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-6 flex items-center">
                  <Package className="h-5 w-5 mr-2 text-primary" />
                  Product Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="productName" className="block text-sm font-medium text-card-foreground mb-2">
                      Product Name *
                    </label>
                    <input
                      type="text"
                      id="productName"
                      name="productName"
                      value={formData.productName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      placeholder="Enter product name"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-card-foreground mb-2">
                      Quantity
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full px-4 py-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      placeholder="Enter quantity"
                    />
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-6 flex items-center">
                  <Building className="h-5 w-5 mr-2 text-primary" />
                  Business Information
                </h3>
                <div>
                  <label htmlFor="gstinNumber" className="block text-sm font-medium text-card-foreground mb-2">
                    GSTIN Number
                  </label>
                  <input
                    type="text"
                    id="gstinNumber"
                    name="gstinNumber"
                    value={formData.gstinNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                    placeholder="Enter GSTIN number (if applicable)"
                    pattern="[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Format: 22AAAAA0000A1Z5 (Optional for business inquiries)
                  </p>
                </div>
              </div>

              {/* Product Image */}
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-6 flex items-center">
                  <Upload className="h-5 w-5 mr-2 text-primary" />
                  Product Image
                </h3>
                <div className="space-y-4">
                  {!imagePreview ? (
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-4">
                        Upload a product image (optional)
                      </p>
                      <label htmlFor="image" className="cursor-pointer">
                        <span className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                          Choose File
                        </span>
                        <input
                          type="file"
                          id="image"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                      </label>
                      <p className="text-xs text-muted-foreground mt-2">
                        Supported formats: JPG, PNG, GIF (Max 5MB)
                      </p>
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Product preview"
                        className="w-full max-w-md mx-auto rounded-lg border border-border"
                      />
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-1 hover:bg-destructive/90 transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-6 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  Additional Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="info" className="block text-sm font-medium text-card-foreground mb-2">
                      Product Information
                    </label>
                    <textarea
                      id="info"
                      name="info"
                      value={formData.info}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-vertical"
                      placeholder="Provide detailed information about the product specifications, requirements, etc."
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-vertical"
                      placeholder="Tell us about your inquiry, questions, or specific requirements..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button type="submit" size="lg" className="px-8">
                  <Send className="mr-2 h-4 w-4" />
                  Send Inquiry
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  We'll respond to your inquiry within 24 hours during business days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
