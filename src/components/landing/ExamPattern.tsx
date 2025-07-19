import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ClipboardList, 
  FileText, 
  Users, 
  Clock,
  CheckCircle,
  BookOpen,
  Target,
  Trophy
} from "lucide-react"

export const ExamPattern = () => {
  const phases = [
    {
      phase: "Phase I - Preliminary Examination",
      icon: <ClipboardList className="w-8 h-8" />,
      type: "Objective Type",
      duration: "2 hours",
      subjects: [
        { name: "Reasoning", questions: 40, marks: 40 },
        { name: "Quantitative Aptitude", questions: 40, marks: 40 },
        { name: "English Language", questions: 40, marks: 40 },
        { name: "General Awareness", questions: 40, marks: 40 },
        { name: "Economic & Social Issues (ESI)", questions: 40, marks: 40 },
        { name: "Agriculture & Rural Development (ARD)", questions: 40, marks: 40 }
      ],
      totalQuestions: 240,
      totalMarks: 240,
      description: "Qualifying nature examination to shortlist candidates for Phase II"
    },
    {
      phase: "Phase II - Main Examination",
      icon: <FileText className="w-8 h-8" />,
      type: "Descriptive Type",
      duration: "3 hours",
      subjects: [
        { name: "English (Descriptive)", questions: "Essay, Précis, Comprehension", marks: 100 },
        { name: "Specialized Subject", questions: "Stream-specific paper", marks: 100 }
      ],
      totalQuestions: "2 Papers",
      totalMarks: 200,
      description: "Merit-based examination with descriptive questions and stream-specific content"
    },
    {
      phase: "Phase III - Interview",
      icon: <Users className="w-8 h-8" />,
      type: "Personal Interview",
      duration: "20-30 minutes",
      subjects: [
        { name: "General Knowledge", questions: "Current Affairs, Banking", marks: "50" },
        { name: "Technical Knowledge", questions: "Stream-specific expertise", marks: "50" },
        { name: "Personality Assessment", questions: "Communication & Leadership", marks: "50" }
      ],
      totalQuestions: "Viva-voce",
      totalMarks: 150,
      description: "Final selection round assessing personality, communication skills, and subject knowledge"
    }
  ]

  const streams = [
    "General", "Agriculture", "Finance", "Statistics", "Forestry", 
    "Computer/IT", "Civil Engineering", "Electrical Engineering", 
    "Food Processing", "Mass Communication", "Company Secretary"
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
            Examination Structure
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            NABARD Grade A <span className="text-primary">Exam Pattern</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive three-phase selection process designed to evaluate candidates' 
            aptitude, subject knowledge, and personality traits for NABARD Grade A positions.
          </p>
        </div>

        {/* Exam Phases */}
        <div className="space-y-8 mb-16">
          {phases.map((phase, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {phase.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{phase.phase}</h3>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge variant="secondary">{phase.type}</Badge>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{phase.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{phase.totalMarks}</div>
                    <div className="text-sm text-muted-foreground">Total Marks</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {phase.subjects.map((subject, subIndex) => (
                    <div key={subIndex} className="p-4 bg-muted/50 rounded-lg border">
                      <div className="font-semibold text-foreground mb-2">{subject.name}</div>
                      <div className="text-sm text-muted-foreground mb-2">{subject.questions}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Marks:</span>
                        <Badge variant="outline">{subject.marks}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Available Streams */}
        <Card className="bg-muted/30 border-none">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Available <span className="text-primary">Specialization Streams</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose your specialization stream based on your educational background 
                and career interests for Phase II examination.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {streams.map((stream, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-background rounded-lg border hover:border-primary/20 transition-colors">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="font-medium text-foreground">{stream}</span>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <BookOpen className="w-12 h-12 text-primary mx-auto" />
                <h4 className="text-xl font-bold text-foreground">Comprehensive Coverage</h4>
                <p className="text-muted-foreground">All streams covered with specialized faculty and study materials</p>
              </div>
              <div className="text-center space-y-3">
                <Target className="w-12 h-12 text-primary mx-auto" />
                <h4 className="text-xl font-bold text-foreground">Focused Preparation</h4>
                <p className="text-muted-foreground">Stream-specific coaching with expert guidance and practice tests</p>
              </div>
              <div className="text-center space-y-3">
                <Trophy className="w-12 h-12 text-primary mx-auto" />
                <h4 className="text-xl font-bold text-foreground">Proven Results</h4>
                <p className="text-muted-foreground">Track record of success across all specialization streams</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}