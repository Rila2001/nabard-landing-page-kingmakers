import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Laptop, 
  BookOpen, 
  Users, 
  Calendar,
  FileText,
  Target,
  Award,
  MessageSquare,
  Clock,
  CheckCircle,
  Star,
  TrendingUp
} from "lucide-react"

export const CourseHighlights = () => {
  const highlights = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Smart Classroom Coaching",
      description: "State-of-the-art offline classrooms with interactive learning technology and comfortable seating arrangements.",
      features: ["Air-conditioned classrooms", "Audio-visual aids", "Interactive whiteboards", "Comfortable seating"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Faculty Team",
      description: "Highly qualified instructors with specialized expertise in ARD, ESI, English, and stream-specific subjects.",
      features: ["15+ years experience", "Subject matter experts", "NABARD exam specialists", "Regular faculty training"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Comprehensive Study Material",
      description: "Complete printed and digital resources covering entire syllabus with latest exam patterns and updates.",
      features: ["Updated study guides", "Practice question banks", "Current affairs compilation", "Digital resources"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mock Tests & Practice",
      description: "Regular assessment through full-length mock tests, sectional tests, and descriptive paper practice.",
      features: ["Weekly mock tests", "Performance analysis", "Descriptive practice", "Time management training"]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Personalized Mentoring",
      description: "Individual attention with customized study plans and regular feedback sessions for each student.",
      features: ["One-on-one guidance", "Progress tracking", "Doubt clearing sessions", "Strategy planning"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Current Affairs Focus",
      description: "Daily current affairs sessions with special emphasis on Economic & Social Issues and Agricultural developments.",
      features: ["Daily CA updates", "ESI & ARD focus", "Monthly magazines", "News analysis"]
    }
  ]

  const batchDetails = [
    {
      type: "Weekday Batch",
      timing: "10:00 AM - 1:00 PM",
      days: "Monday to Friday",
      duration: "6 months intensive"
    },
    {
      type: "Weekend Batch", 
      timing: "9:00 AM - 5:00 PM",
      days: "Saturday & Sunday",
      duration: "8 months comprehensive"
    },
    {
      type: "Working Professional",
      timing: "6:00 PM - 9:00 PM",
      days: "Monday to Friday",
      duration: "8 months flexible"
    }
  ]

  const includedServices = [
    "Complete study materials (printed + digital)",
    "Full-length mock test series with analysis",
    "Descriptive paper practice and evaluation", 
    "Current affairs monthly magazines",
    "Stream-specific subject coaching",
    "Mock interview sessions",
    "Doubt clearing sessions",
    "Performance tracking and feedback",
    "Revision classes before exam",
    "Post-exam interview guidance"
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
            Course Features
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Course <span className="text-primary">Highlights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive offline coaching program designed to provide complete preparation 
            for NABARD Grade A examination with expert guidance and proven methodologies.
          </p>
        </div>

        {/* Course Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-4">
                  {highlight.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {highlight.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
                <div className="space-y-2">
                  {highlight.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Batch Information */}
          <Card className="border-2 hover:border-primary/20 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <Calendar className="w-8 h-8 text-primary" />
                <span>Batch Timings & Schedule</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {batchDetails.map((batch, index) => (
                  <div key={index} className="p-4 bg-background rounded-lg border hover:border-primary/20 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-lg text-foreground">{batch.type}</h4>
                      <Badge variant="secondary">{batch.duration}</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Timing:</span>
                        <div className="font-medium text-foreground">{batch.timing}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Days:</span>
                        <div className="font-medium text-foreground">{batch.days}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">Medium of Instruction</span>
                </div>
                <p className="text-foreground font-medium">English</p>
                <p className="text-sm text-muted-foreground mt-1">
                  All classes conducted in English with bilingual support for complex concepts
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Included Services */}
          <Card className="border-2 hover:border-primary/20 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <Star className="w-8 h-8 text-primary" />
                <span>What's Included</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {includedServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3 p-2 hover:bg-muted/50 rounded transition-colors">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gold-gradient rounded-lg text-center">
                <Award className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Complete Package</h4>
                <p className="text-white/90 mb-4">
                  Everything you need for NABARD Grade A success in one comprehensive program
                </p>
                <Button variant="outline" className="bg-white text-primary hover:bg-white/90">
                  Contact for Course Fees
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}