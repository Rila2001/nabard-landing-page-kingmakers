import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, GraduationCap, Users, AlertCircle } from "lucide-react"

export const Eligibility = () => {
  const ageRelaxations = [
    { category: "General", ageLimit: "21-30 years", relaxation: "No relaxation" },
    { category: "SC/ST", ageLimit: "21-35 years", relaxation: "5 years" },
    { category: "OBC", ageLimit: "21-33 years", relaxation: "3 years" },
    { category: "PwBD (General)", ageLimit: "21-40 years", relaxation: "10 years" },
    { category: "PwBD (SC/ST)", ageLimit: "21-45 years", relaxation: "15 years" },
    { category: "PwBD (OBC)", ageLimit: "21-43 years", relaxation: "13 years" }
  ]

  const qualifications = [
    {
      stream: "General",
      requirement: "Bachelor's degree in any discipline with minimum 60% marks (55% for SC/ST/PwBD)"
    },
    {
      stream: "Agriculture",
      requirement: "Bachelor's degree in Agriculture/Horticulture/Animal Husbandry/Veterinary Science/Dairy Science/Fishery Science with 60% marks"
    },
    {
      stream: "Finance",
      requirement: "Bachelor's degree in Commerce/Economics/Finance/Management with 60% marks OR CA/CS/ICWA qualification"
    },
    {
      stream: "Statistics",
      requirement: "Bachelor's degree in Statistics/Mathematics/Economics with Statistics as a subject with 60% marks"
    },
    {
      stream: "Forestry",
      requirement: "Bachelor's degree in Forestry/Environmental Science with 60% marks"
    },
    {
      stream: "Computer/IT",
      requirement: "Bachelor's degree in Computer Science/IT/Computer Applications with 60% marks"
    },
    {
      stream: "Civil Engineering",
      requirement: "Bachelor's degree in Civil Engineering with 60% marks"
    },
    {
      stream: "Electrical Engineering",
      requirement: "Bachelor's degree in Electrical/Electronics Engineering with 60% marks"
    },
    {
      stream: "Food Processing",
      requirement: "Bachelor's degree in Food Technology/Food Science/Food Processing with 60% marks"
    },
    {
      stream: "Mass Communication",
      requirement: "Bachelor's degree in Mass Communication/Journalism/Media Studies with 60% marks"
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
            Eligibility Requirements
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            NABARD Grade A <span className="text-primary">Eligibility Criteria</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive eligibility requirements for NABARD Grade A Assistant Manager positions 
            across different streams and categories.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Age Criteria */}
          <Card className="border-2 hover:border-primary/20 transition-colors">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <Calendar className="w-8 h-8 text-primary" />
                <span>Age Limit & Relaxations</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">Standard Age Limit</span>
                </div>
                <p className="text-lg font-bold">21 to 30 years (as on 01.07.2024)</p>
              </div>
              
              <div className="space-y-3">
                {ageRelaxations.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-background rounded-lg border">
                    <div>
                      <span className="font-medium text-foreground">{item.category}</span>
                      <div className="text-sm text-muted-foreground">{item.ageLimit}</div>
                    </div>
                    <Badge variant={item.relaxation === "No relaxation" ? "outline" : "secondary"}>
                      {item.relaxation}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Educational Qualifications */}
          <Card className="border-2 hover:border-primary/20 transition-colors">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <GraduationCap className="w-8 h-8 text-primary" />
                <span>Educational Qualifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="w-5 h-5 text-secondary" />
                  <span className="font-semibold text-secondary">Multiple Streams Available</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Choose from 10+ specialized streams based on your educational background
                </p>
              </div>
              
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {qualifications.map((item, index) => (
                  <div key={index} className="p-4 bg-background rounded-lg border hover:border-primary/20 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="font-medium">
                        {item.stream}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.requirement}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Notes */}
        <Card className="mt-12 bg-amber-50 border-amber-200">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-amber-800">Important Notes</h3>
                <div className="space-y-2 text-amber-700">
                  <p>• Post Graduate degrees require minimum 55% marks (50% for SC/ST/PwBD)</p>
                  <p>• Professional qualifications like CA/CS/ICWA are accepted for Finance stream</p>
                  <p>• Candidates can apply for multiple streams if they meet the qualification criteria</p>
                  <p>• Final eligibility verification will be done at the time of joining</p>
                  <p>• All percentage calculations are based on aggregate marks</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}