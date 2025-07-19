import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  DollarSign, 
  CreditCard, 
  Gift,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Users
} from "lucide-react"

export const Fees = () => {
  const applicationFees = [
    { category: "General/OBC", amount: "₹800", description: "One-time online application fee" },
    { category: "SC/ST/PwBD", amount: "₹150", description: "Reduced fee for reserved categories" }
  ]

  const courseInclusions = [
    "Complete study materials (printed + digital)",
    "Full-length mock test series", 
    "Descriptive paper practice sessions",
    "Current affairs monthly updates",
    "Stream-specific subject training",
    "Mock interview preparation",
    "Doubt clearing sessions",
    "Revision classes before exam"
  ]

  const paymentOptions = [
    {
      title: "One-Time Payment",
      description: "Complete course fee payment",
      benefits: ["5% discount on total fee", "All materials included", "No hidden charges"]
    },
    {
      title: "Installment Option",
      description: "Flexible payment plan",
      benefits: ["Easy EMI facility", "Zero interest option", "Convenient monthly payments"]
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
            Course Investment
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Course Fees & <span className="text-primary">Investment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Invest in your future with our comprehensive NABARD Grade A coaching program. 
            Transparent pricing with no hidden costs and flexible payment options.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Course Fees */}
          <Card className="lg:col-span-2 border-2 hover:border-primary/20 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <DollarSign className="w-8 h-8 text-primary" />
                <span>King Makers Academy Course Fees</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center bg-primary/5 p-8 rounded-lg border border-primary/20">
                <div className="text-5xl font-bold text-primary mb-2">Contact for Details</div>
                <p className="text-muted-foreground text-lg">
                  Competitive pricing for comprehensive NABARD Grade A coaching
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                  <Button variant="default" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" size="lg">
                    <Mail className="w-4 h-4 mr-2" />
                    Get Quote
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {paymentOptions.map((option, index) => (
                  <div key={index} className="p-6 bg-muted/50 rounded-lg border">
                    <h4 className="font-bold text-lg text-foreground mb-2">{option.title}</h4>
                    <p className="text-muted-foreground mb-4">{option.description}</p>
                    <div className="space-y-2">
                      {option.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20">
                <div className="flex items-center space-x-2 mb-4">
                  <Gift className="w-6 h-6 text-secondary" />
                  <h4 className="font-bold text-lg text-foreground">What's Included in Course Fee</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  {courseInclusions.map((inclusion, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-sm text-muted-foreground">{inclusion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* NABARD Application Fees */}
          <Card className="border-2 hover:border-primary/20 transition-colors h-fit">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl">
                <CreditCard className="w-6 h-6 text-primary" />
                <span>NABARD Application Fees</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Official examination fees to be paid directly to NABARD
              </p>
              
              {applicationFees.map((fee, index) => (
                <div key={index} className="p-4 bg-background rounded-lg border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{fee.category}</span>
                    <Badge variant="secondary" className="text-lg font-bold">{fee.amount}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{fee.description}</p>
                </div>
              ))}

              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Clock className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-amber-800 mb-1">Payment Deadline</h5>
                    <p className="text-sm text-amber-700">
                      Application fees must be paid during the official registration period as announced by NABARD
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="bg-primary text-white border-none">
          <CardContent className="p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">
                  Ready to Start Your <span className="text-secondary">NABARD Journey?</span>
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  Contact us today for detailed fee structure, batch availability, and enrollment process. 
                  Our counselors will help you choose the best batch timing that suits your schedule.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-secondary" />
                    <span>Anna Nagar & Adyar Centers, Chennai</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-secondary" />
                    <span>Limited Seats - Early Bird Discounts Available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-6 h-6 text-secondary" />
                    <span>15+ Years of Excellence in Banking Exam Coaching</span>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-6">
                <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-4">Get Instant Callback</h4>
                  <p className="text-white/80 mb-6">Speak with our admission counselor</p>
                  <div className="space-y-3">
                    <Button variant="secondary" size="lg" className="w-full text-lg">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: +91-9876543210
                    </Button>
                    <Button variant="outline" size="lg" className="w-full text-lg border-white text-white hover:bg-white hover:text-primary">
                      <Mail className="w-5 h-5 mr-2" />
                      Email: info@kingmakersacademy.com
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}