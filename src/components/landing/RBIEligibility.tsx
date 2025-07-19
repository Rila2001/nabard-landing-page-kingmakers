import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const RBIEligibility = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-sm px-4 py-2">
              🎯 Eligibility Criteria
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Are You <span className="text-primary">Eligible</span> for RBI Grade B?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Check the complete eligibility requirements for RBI Grade B Officer positions. 
              Make sure you meet all criteria before starting your preparation.
            </p>
          </div>

          {/* Age Limit Section */}
          <Card className="mb-12 border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="text-primary text-2xl">⏰</span>
                Age Limit Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">21-30</div>
                  <div className="text-sm font-medium">General Category</div>
                  <div className="text-xs text-muted-foreground">Years</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-secondary mb-2">21-33</div>
                  <div className="text-sm font-medium">OBC Category</div>
                  <div className="text-xs text-muted-foreground">Years (+3 years relaxation)</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-success mb-2">21-35</div>
                  <div className="text-sm font-medium">SC/ST Category</div>
                  <div className="text-xs text-muted-foreground">Years (+5 years relaxation)</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-cta mb-2">21-40</div>
                  <div className="text-sm font-medium">PwBD Category</div>
                  <div className="text-xs text-muted-foreground">Years (+10 years relaxation)</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Age is calculated as on 1st day of the month in which the advertisement is published. 
                  Ex-servicemen and other special categories may have additional relaxations as per RBI guidelines.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Educational Qualification */}
          <Card className="mb-12 border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="text-secondary text-2xl">🎓</span>
                Educational Qualification by Stream
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* General Stream */}
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-4">1. General Stream</h4>
                  <div className="bg-card p-6 rounded-lg border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-card-foreground mb-3">Minimum Requirements:</h5>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-success mt-1">✓</span>
                            <span>Bachelor's degree in any discipline with <strong>60% marks</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-success mt-1">✓</span>
                            <span>For SC/ST/PwBD: <strong>50% marks</strong> required</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-success mt-1">✓</span>
                            <span>Degree from a recognized university/institution</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-card-foreground mb-3">Eligible Disciplines:</h5>
                        <div className="flex flex-wrap gap-2">
                          {['Commerce', 'Economics', 'Management', 'Finance', 'Science', 'Arts', 'Engineering', 'Any Graduate'].map((subject) => (
                            <Badge key={subject} variant="outline" className="text-xs">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* DEPR Stream */}
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-4">2. DEPR (Department of Economic and Policy Research)</h4>
                  <div className="bg-card p-6 rounded-lg border">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-card-foreground mb-3">Postgraduate Requirements:</h5>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-success mt-1">✓</span>
                            <span>Master's degree in <strong>Economics/Econometrics/Quantitative Economics</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-success mt-1">✓</span>
                            <span>OR Master's degree in <strong>Statistics/Mathematical Statistics/Mathematical Economics</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-success mt-1">✓</span>
                            <span>Minimum <strong>55% marks</strong> (50% for SC/ST/PwBD)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* DSIM Stream */}
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-4">3. DSIM (Department of Statistics and Information Management)</h4>
                  <div className="bg-card p-6 rounded-lg border">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-card-foreground mb-3">Specialized Requirements:</h5>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-success mt-1">✓</span>
                            <span>Master's degree in <strong>Statistics/Mathematical Statistics/Applied Statistics</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-success mt-1">✓</span>
                            <span>OR Master's degree in <strong>Economics/Econometrics with Statistics</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-success mt-1">✓</span>
                            <span>Minimum <strong>55% marks</strong> (50% for SC/ST/PwBD)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notes */}
          <div className="bg-cta/10 border border-cta/20 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-cta mb-4 flex items-center gap-2">
              <span>⚠️</span>
              Important Notes for Aspirants
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-cta mt-1">📌</span>
                  <span>Final year students can apply, but degree must be completed before joining</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cta mt-1">📌</span>
                  <span>Percentage calculation should exclude non-credit subjects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cta mt-1">📌</span>
                  <span>Professional degrees like CA, CS, CMA are considered equivalent</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-cta mt-1">📌</span>
                  <span>Distance learning degrees from UGC-recognized universities are valid</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cta mt-1">📌</span>
                  <span>Foreign degrees must have equivalence certificate from AIU</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cta mt-1">📌</span>
                  <span>Working professionals can apply while employed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}