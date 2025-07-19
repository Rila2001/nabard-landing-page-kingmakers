import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ExternalLink
} from "lucide-react"

export const Footer = () => {
  const quickLinks = [
    { name: "About NABARD Grade A", href: "#about" },
    { name: "Eligibility Criteria", href: "#eligibility" },
    { name: "Exam Pattern", href: "#exam-pattern" },
    { name: "Course Highlights", href: "#course" },
    { name: "Fees & Payment", href: "#fees" },
    { name: "FAQ", href: "#faq" }
  ]

  const courses = [
    "NABARD Grade A Coaching",
    "NABARD Grade B Preparation", 
    "RBI Grade B Coaching",
    "SEBI Grade A Training",
    "Bank PO Coaching",
    "Bank Clerk Preparation"
  ]

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" }
  ]

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">KM</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">King Makers</h3>
                <p className="text-white/80">Banking Academy</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Chennai's premier coaching institute for NABARD Grade A preparation. 
              With 15+ years of excellence, we have guided thousands of students 
              to successful banking careers.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span>+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span>info@kingmakersacademy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-secondary" />
                <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>

            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-secondary">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-white/80 hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Our Courses */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-secondary">Our Courses</h4>
            <div className="space-y-3">
              {courses.map((course, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-white/80 hover:text-secondary transition-colors"
                >
                  {course}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Locations */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-secondary">Our Centers</h4>
            
            <div className="space-y-4">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-white">Anna Nagar Center</h5>
                      <p className="text-white/80 text-sm">
                        123, 2nd Avenue, Anna Nagar,<br />
                        Chennai - 600040
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-white">Adyar Center</h5>
                      <p className="text-white/80 text-sm">
                        456, Lattice Bridge Road,<br />
                        Adyar, Chennai - 600020
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button variant="secondary" className="w-full">
              <ExternalLink className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © 2024 King Makers Banking Academy. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/80 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/80 hover:text-secondary transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}