import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Trophy, Star } from "lucide-react"
import heroImage from "@/assets/hero-image.jpg"

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-semibold px-4 py-2">
                🏆 #1 NABARD Coaching Institute in Chennai
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Master <span className="text-secondary">NABARD Grade A</span> 
                <br />with Expert Guidance
              </h1>
              
              <p className="text-xl text-white/90 max-w-lg leading-relaxed">
                Join King Makers Banking Academy's comprehensive offline coaching program 
                and secure your career as a NABARD Grade A Officer with personalized mentoring 
                and proven success strategies.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-white">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="font-medium">Offline Classes Only</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Users className="w-5 h-5 text-secondary" />
                <span className="font-medium">Expert Faculty</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Trophy className="w-5 h-5 text-secondary" />
                <span className="font-medium">Proven Track Record</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Star className="w-5 h-5 text-secondary" />
                <span className="font-medium">Personalized Mentoring</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Enroll Now - Limited Seats!
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                Download Syllabus
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-white/80 text-sm">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">15+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">95%</div>
                <div className="text-white/80 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in">
            <Card className="overflow-hidden border-none shadow-2xl">
              <img 
                src={heroImage} 
                alt="NABARD Grade A Coaching at King Makers Banking Academy" 
                className="w-full h-[600px] object-cover"
              />
            </Card>
            
            {/* Floating Achievement Card */}
            <Card className="absolute -bottom-8 -left-8 p-6 bg-white shadow-2xl border-none">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg text-gray-900">Top Results</div>
                  <div className="text-gray-600 text-sm">NABARD Grade A 2024</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}