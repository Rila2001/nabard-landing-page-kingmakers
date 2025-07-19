import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Users,
  Trophy,
  Star,
  CheckCircle,
  ArrowRight,
  Calendar
} from "lucide-react"

export const CTA = () => {
  const urgencyFeatures = [
    "Limited seats available",
    "Early bird discount ending soon", 
    "Batch starting next week",
    "Expert faculty with proven track record"
  ]

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Call Now",
      value: "+91-9876543210",
      action: "tel:+919876543210",
      primary: true
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email Us", 
      value: "info@kingmakersacademy.com",
      action: "mailto:info@kingmakersacademy.com",
      primary: false
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Visit Centers",
      value: "Anna Nagar & Adyar",
      action: "#",
      primary: false
    }
  ]

  const locations = [
    {
      name: "Anna Nagar Center",
      address: "123, 2nd Avenue, Anna Nagar, Chennai - 600040",
      timing: "Mon-Sat: 9:00 AM - 7:00 PM"
    },
    {
      name: "Adyar Center", 
      address: "456, Lattice Bridge Road, Adyar, Chennai - 600020",
      timing: "Mon-Sat: 9:00 AM - 7:00 PM"
    }
  ]

  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-6">
          <Badge variant="secondary" className="px-6 py-3 text-lg font-semibold">
            🚀 Enrollment Open - Limited Seats!
          </Badge>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Start Your <span className="text-secondary">NABARD Grade A</span>
            <br />Journey Today!
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join Chennai's #1 NABARD Grade A coaching institute and transform your career 
            with expert guidance, comprehensive study materials, and proven success strategies.
          </p>

          {/* Urgency Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {urgencyFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-white">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8 space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold">Get Started Now</h3>
                <p className="text-white/80 text-lg">
                  Speak with our admission counselors and secure your seat today
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Button
                    key={index}
                    variant={method.primary ? "hero" : "outline"}
                    size="lg"
                    className={`w-full justify-start text-lg py-6 ${
                      method.primary 
                        ? "bg-secondary text-secondary-foreground hover:bg-secondary/90" 
                        : "border-white text-white hover:bg-white hover:text-primary"
                    }`}
                    asChild
                  >
                    <a href={method.action}>
                      <div className="flex items-center space-x-4">
                        {method.icon}
                        <div className="text-left">
                          <div className="font-semibold">{method.label}</div>
                          <div className="text-sm opacity-80">{method.value}</div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 ml-auto" />
                    </a>
                  </Button>
                ))}
              </div>

              <div className="text-center pt-6 border-t border-white/20">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-white/80">Students Placed</div>
                  </div>
                  <div className="text-center">
                    <Trophy className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm text-white/80">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <Star className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm text-white/80">Years Experience</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location Information */}
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-white">Visit Our Centers</h3>
              <p className="text-white/80 text-lg">
                Conveniently located in Chennai with modern facilities and smart classrooms
              </p>
            </div>

            <div className="space-y-4">
              {locations.map((location, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 text-white">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold">{location.name}</h4>
                        <p className="text-white/80">{location.address}</p>
                        <div className="flex items-center space-x-2 text-sm text-white/70">
                          <Clock className="w-4 h-4" />
                          <span>{location.timing}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-secondary/20 border-secondary/40">
              <CardContent className="p-6 text-center text-white">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h4 className="text-xl font-bold mb-2">Book a Free Demo Class</h4>
                <p className="text-white/80 mb-4">
                  Experience our teaching methodology before enrollment
                </p>
                <Button variant="secondary" size="lg" className="w-full">
                  Schedule Demo Class
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="text-3xl font-bold text-white">
            Don't Wait - Secure Your NABARD Grade A Success Today!
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-xl px-12 py-6">
              Enroll Now - Limited Seats!
            </Button>
            <Button variant="outline" size="lg" className="text-xl px-12 py-6 border-white text-white hover:bg-white hover:text-primary">
              Download Brochure
            </Button>
          </div>
          <p className="text-white/70 text-sm">
            Join thousands of successful NABARD Grade A officers who started their journey with King Makers Banking Academy
          </p>
        </div>
      </div>
    </section>
  )
}