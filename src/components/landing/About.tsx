import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  GraduationCap, 
  Users, 
  MapPin, 
  Clock,
  BookOpen,
  Target,
  Award,
  TrendingUp 
} from "lucide-react"

export const About = () => {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Expert Faculty",
      description: "Experienced instructors specialized in Agriculture, Economics, Statistics, and English with deep knowledge of NABARD exam patterns."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Chennai Locations",
      description: "Conveniently located centers in Anna Nagar and Adyar with modern smart classrooms and comprehensive learning facilities."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Timings",
      description: "Both weekday and weekend batch options available to accommodate working professionals and fresh graduates."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Complete Study Material",
      description: "Comprehensive printed and digital resources covering all subjects with latest exam patterns and current affairs."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalized Mentoring",
      description: "Individual attention and customized study plans to address each student's strengths and areas for improvement."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Track Record",
      description: "15+ years of excellence in banking exam preparation with consistent results in regulatory examinations."
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
            About King Makers Banking Academy
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose <span className="text-primary">King Makers</span> for NABARD Grade A?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            King Makers Banking Academy stands as Chennai's premier coaching institute for NABARD Grade A preparation, 
            combining expert faculty, comprehensive study materials, and personalized mentoring to ensure your success 
            in this highly competitive examination.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About NABARD */}
        <Card className="bg-muted/50 border-none">
          <CardContent className="p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge variant="secondary" className="px-4 py-2">
                    About NABARD Grade A
                  </Badge>
                  <h3 className="text-3xl font-bold text-foreground">
                    National Bank for Agriculture and Rural Development
                  </h3>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    NABARD Grade A examination is conducted annually to recruit Assistant Manager officers 
                    in the Rural Development Banking Service (RDBS). As an apex organization wholly owned 
                    by the Government of India, NABARD plays a crucial role in rural development and agricultural finance.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Grade A officers are responsible for policy formulation, project appraisal, supervision 
                    of cooperative banks, and implementation of rural development schemes across India. 
                    This prestigious position offers excellent career growth opportunities and job security.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-bold text-2xl text-primary">₹35,000+</div>
                    <div className="text-sm text-muted-foreground">Starting Salary</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-bold text-2xl text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Career Streams</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-foreground mb-4">Key Responsibilities:</h4>
                <div className="space-y-3">
                  {[
                    "Rural development project evaluation and monitoring",
                    "Agricultural credit policy formulation and implementation",
                    "Supervision and regulation of cooperative financial institutions",
                    "Promoting sustainable agricultural practices and technologies",
                    "Financial inclusion initiatives in rural areas",
                    "Research and development in agricultural finance"
                  ].map((responsibility, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}