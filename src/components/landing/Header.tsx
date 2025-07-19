import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Menu } from "lucide-react"
import { useState } from "react"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Eligibility", href: "#eligibility" },
    { name: "Exam Pattern", href: "#exam-pattern" },
    { name: "Course Details", href: "#course" },
    { name: "Fees", href: "#fees" },
    { name: "FAQ", href: "#faq" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91-9876543210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@kingmakersacademy.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Anna Nagar & Adyar, Chennai</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">KM</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">King Makers</h1>
              <p className="text-sm text-muted-foreground">Banking Academy</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Download Brochure
            </Button>
            <Button variant="default" size="sm">
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4">
                <Button variant="outline" size="sm">
                  Download Brochure
                </Button>
                <Button variant="default" size="sm">
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}