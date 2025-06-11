import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "@/components/theme-provider"
import { Heart, Star, Zap, Shield } from "lucide-react"

export function DemoSection() {
  const [count, setCount] = useState(0)
  const { theme } = useTheme()

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Performance",
      description: "Lightning-fast development with Vite and React 19"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Type Safe",
      description: "Built with TypeScript for better developer experience"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Modern UI",
      description: "Beautiful components with shadcn/ui and Tailwind CSS"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Developer Friendly",
      description: "Hot reload, ESLint, and modern tooling out of the box"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Demo App</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="hidden sm:inline text-sm text-muted-foreground">
              Current theme: {theme}
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center py-12 sm:py-16 lg:py-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            React + TypeScript + Vite
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A modern development stack with shadcn/ui components, 
            responsive design, and seamless dark/light theme switching.
          </p>
          
          {/* Interactive Counter */}
          <div className="bg-card border border-border rounded-lg p-6 sm:p-8 max-w-md mx-auto mb-8">
            <h2 className="text-2xl font-semibold mb-4">Interactive Counter</h2>
            <div className="text-4xl font-bold text-primary mb-4">{count}</div>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button 
                onClick={() => setCount(count + 1)}
                className="w-full sm:w-auto"
              >
                Increment
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setCount(count - 1)}
                className="w-full sm:w-auto"
              >
                Decrement
              </Button>
              <Button 
                variant="secondary" 
                onClick={() => setCount(0)}
                className="w-full sm:w-auto"
              >
                Reset
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Button Variants Demo */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12">Button Variants</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <Star className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>Built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui</p>
        </div>
      </footer>
    </div>
  )
}
