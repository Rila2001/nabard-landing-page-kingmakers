import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const RBIExamPattern = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4 text-sm px-4 py-2">
              🧠 Exam Pattern & Selection Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Complete <span className="text-primary">RBI Grade B</span> Exam Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Understanding the exam pattern is crucial for strategic preparation. RBI Grade B follows a comprehensive 
              3-stage selection process designed to test your knowledge, skills, and personality.
            </p>
          </div>

          {/* Overview */}
          <div className="bg-card rounded-2xl p-8 border shadow-sm mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center text-card-foreground">
              3-Stage Selection Process Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
                <div className="text-primary text-3xl mb-3">📝</div>
                <h4 className="font-semibold text-lg mb-2">Phase 1 - Prelims</h4>
                <p className="text-sm text-muted-foreground">Objective Questions Only</p>
                <div className="text-primary font-medium mt-2">200 Marks | 2 Hours</div>
              </div>
              <div className="text-center p-6 bg-secondary/5 rounded-lg border border-secondary/20">
                <div className="text-secondary text-3xl mb-3">📚</div>
                <h4 className="font-semibold text-lg mb-2">Phase 2 - Mains</h4>
                <p className="text-sm text-muted-foreground">Objective + Descriptive</p>
                <div className="text-secondary font-medium mt-2">300 Marks | 4.5 Hours</div>
              </div>
              <div className="text-center p-6 bg-success/5 rounded-lg border border-success/20">
                <div className="text-success text-3xl mb-3">🎤</div>
                <h4 className="font-semibold text-lg mb-2">Phase 3 - Interview</h4>
                <p className="text-sm text-muted-foreground">Personal Interview</p>
                <div className="text-success font-medium mt-2">50 Marks | 20-30 Minutes</div>
              </div>
            </div>
          </div>

          {/* Phase 1 - Prelims */}
          <Card className="mb-12 border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="text-primary text-2xl">📝</span>
                Phase 1 - Preliminary Examination
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-card-foreground">Exam Details:</h4>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Total Questions:</span>
                      <span className="font-medium">200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Marks:</span>
                      <span className="font-medium">200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time Duration:</span>
                      <span className="font-medium">2 Hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Question Type:</span>
                      <span className="font-medium">Multiple Choice (MCQ)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Negative Marking:</span>
                      <span className="font-medium text-destructive">-0.25 marks</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-card-foreground">Subject-wise Breakdown:</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                      <span className="font-medium">General Awareness</span>
                      <span className="text-primary font-semibold">80 marks</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                      <span className="font-medium">English Language</span>
                      <span className="text-primary font-semibold">30 marks</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                      <span className="font-medium">Quantitative Aptitude</span>
                      <span className="text-primary font-semibold">45 marks</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                      <span className="font-medium">Reasoning Ability</span>
                      <span className="text-primary font-semibold">45 marks</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <strong>Qualifying Nature:</strong> Phase 1 is only for qualifying to Phase 2. Scores are not added to final merit. 
                  Minimum qualifying marks vary by category and are decided by RBI based on performance.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Phase 2 - Mains */}
          <Card className="mb-12 border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="text-secondary text-2xl">📚</span>
                Phase 2 - Main Examination
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="text-center p-4 bg-secondary/10 rounded-lg">
                  <h4 className="text-lg font-semibold text-secondary mb-2">Final Merit Calculation</h4>
                  <p className="text-sm text-muted-foreground">
                    Phase 2 scores (85%) + Interview scores (15%) = Final Merit List
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Paper 1 - ESI */}
                  <Card className="border border-secondary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Paper 1 - Economic & Social Issues (ESI)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span>Marks:</span>
                          <span className="font-medium">100</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Time:</span>
                          <span className="font-medium">90 minutes</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Questions:</span>
                          <span className="font-medium">100 MCQs</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Type:</span>
                          <span className="font-medium">Objective</span>
                        </div>
                      </div>
                      <Separator />
                      <div className="text-xs text-muted-foreground">
                        <strong>Topics:</strong> Indian Economy, Social Issues, Current Affairs, Budget & Economic Survey
                      </div>
                    </CardContent>
                  </Card>

                  {/* Paper 2 - English */}
                  <Card className="border border-secondary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Paper 2 - English (Descriptive)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span>Marks:</span>
                          <span className="font-medium">100</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Time:</span>
                          <span className="font-medium">90 minutes</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Questions:</span>
                          <span className="font-medium">3-4 Questions</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Type:</span>
                          <span className="font-medium">Descriptive</span>
                        </div>
                      </div>
                      <Separator />
                      <div className="text-xs text-muted-foreground">
                        <strong>Topics:</strong> Essay Writing, Précis Writing, Comprehension, Letter Writing
                      </div>
                    </CardContent>
                  </Card>

                  {/* Paper 3 - F&M */}
                  <Card className="border border-secondary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Paper 3 - Finance & Management</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span>Marks:</span>
                          <span className="font-medium">100</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Time:</span>
                          <span className="font-medium">90 minutes</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Questions:</span>
                          <span className="font-medium">100 MCQs</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Type:</span>
                          <span className="font-medium">Objective</span>
                        </div>
                      </div>
                      <Separator />
                      <div className="text-xs text-muted-foreground">
                        <strong>Topics:</strong> Financial Management, Corporate Finance, Banking Theory, HR Management
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                  <h5 className="font-semibold text-secondary mb-2">Important Notes for Mains:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Negative marking of 0.25 marks for objective papers</li>
                    <li>• English paper is descriptive - focus on quality writing</li>
                    <li>• All papers are conducted on the same day with breaks</li>
                    <li>• Calculators are allowed for F&M paper</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phase 3 - Interview */}
          <Card className="mb-12 border-l-4 border-l-success">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="text-success text-2xl">🎤</span>
                Phase 3 - Personal Interview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-card-foreground">Interview Process:</h4>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Total Marks:</span>
                      <span className="font-medium">50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">20-30 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Panel Members:</span>
                      <span className="font-medium">3-5 RBI Officials</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weightage in Merit:</span>
                      <span className="font-medium">15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Document Verification:</span>
                      <span className="font-medium">Before Interview</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-card-foreground">Assessment Areas:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded">
                      <span className="text-success">💼</span>
                      <span>Professional Knowledge & Current Affairs</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded">
                      <span className="text-success">🧠</span>
                      <span>Analytical & Problem-Solving Skills</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded">
                      <span className="text-success">🗣️</span>
                      <span>Communication & Presentation</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded">
                      <span className="text-success">👥</span>
                      <span>Leadership Potential & Personality</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
                <h5 className="font-semibold text-success mb-2">Interview Success Tips:</h5>
                <p className="text-sm text-muted-foreground">
                  The interview tests your overall personality, knowledge of banking/economics, current affairs awareness, 
                  and suitability for a central banking career. Our expert panels conduct regular mock interviews to prepare you thoroughly.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Final Merit Calculation */}
          <div className="bg-card rounded-2xl p-8 border shadow-sm text-center">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">
              Final Merit List Calculation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <div className="text-primary text-2xl font-bold mb-2">85%</div>
                <div className="font-medium">Phase 2 - Mains</div>
                <div className="text-sm text-muted-foreground mt-1">300 marks total</div>
              </div>
              <div className="flex items-center justify-center text-2xl font-bold text-muted-foreground">+</div>
              <div className="p-6 bg-success/5 rounded-lg border border-success/20">
                <div className="text-success text-2xl font-bold mb-2">15%</div>
                <div className="font-medium">Phase 3 - Interview</div>
                <div className="text-sm text-muted-foreground mt-1">50 marks total</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> Only candidates who qualify Phase 1 can appear for Phase 2. 
                Phase 1 scores are not counted in final merit. Final selection is based on combined scores of Mains + Interview.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}