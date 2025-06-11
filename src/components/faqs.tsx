import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export function FAQs() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our services, processes, and policies. 
            Can't find what you're looking for? Contact our support team for assistance.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* General FAQs */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <span className="text-primary font-semibold">1</span>
              </span>
              General Questions
            </h3>
            <div className="space-y-4">
              {generalFAQs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItems.includes(index)}
                  onToggle={() => toggleItem(index)}
                />
              ))}
            </div>
          </div>

          {/* Service FAQs */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <span className="text-primary font-semibold">2</span>
              </span>
              Services & Support
            </h3>
            <div className="space-y-4">
              {serviceFAQs.map((faq, index) => (
                <FAQItem
                  key={index + 100}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItems.includes(index + 100)}
                  onToggle={() => toggleItem(index + 100)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Billing & Pricing FAQs */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center justify-center">
            <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
              <span className="text-primary font-semibold">3</span>
            </span>
            Billing & Pricing
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {billingFAQs.map((faq, index) => (
                <FAQItem
                  key={index + 200}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItems.includes(index + 200)}
                  onToggle={() => toggleItem(index + 200)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <div className="bg-muted/30 rounded-lg p-8 md:p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you with any questions or concerns you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                Contact Support
              </button>
              <button className="border border-border text-foreground px-6 py-3 rounded-md font-medium hover:bg-muted transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
        onClick={onToggle}
      >
        <span className="font-medium text-card-foreground pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

const generalFAQs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of services including consulting, development, design, and ongoing support. Our team specializes in delivering custom solutions tailored to your specific business needs."
  },
  {
    question: "How long have you been in business?",
    answer: "We have been serving clients for over 10 years, building a strong reputation for quality, reliability, and innovation in our industry."
  },
  {
    question: "What makes you different from competitors?",
    answer: "Our commitment to customer satisfaction, innovative approach, and experienced team sets us apart. We focus on building long-term partnerships and delivering exceptional value."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Yes, we work with businesses of all sizes, from startups to large enterprises. We tailor our services to meet the unique needs and budgets of each client."
  }
]

const serviceFAQs = [
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Simply contact us through our inquiry form or give us a call. We'll schedule a consultation to discuss your needs and provide a customized proposal."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on scope and complexity. Most projects range from 2-12 weeks. We'll provide a detailed timeline during the planning phase."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer comprehensive support packages to ensure your continued success. Our support includes maintenance, updates, and technical assistance."
  },
  {
    question: "Can you work with our existing systems?",
    answer: "Absolutely! We have experience integrating with various existing systems and platforms. We'll assess your current setup and recommend the best approach."
  }
]

const billingFAQs = [
  {
    question: "What are your payment terms?",
    answer: "We typically require 50% upfront and 50% upon completion. For larger projects, we can arrange milestone-based payments."
  },
  {
    question: "Do you offer fixed-price projects?",
    answer: "Yes, we offer both fixed-price and hourly billing options depending on the project scope and client preference."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No, we believe in transparent pricing. All costs are clearly outlined in our proposals with no hidden fees or surprise charges."
  },
  {
    question: "Do you offer refunds?",
    answer: "We stand behind our work and offer refunds in accordance with our terms of service. Contact us to discuss any concerns about your project."
  }
]
