import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const RBICourseHighlights = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-sm px-4 py-2">
              📚 Course Highlights
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Comprehensive <span className="text-primary">RBI Grade B</span> Preparation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our meticulously designed course covers every aspect of RBI Grade B preparation, from basic concepts 
              to advanced problem-solving techniques, ensuring your success in all three phases.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
              <CardHeader className="pb-4">
                <div className="text-primary text-3xl mb-2">🏛️</div>
                <CardTitle className="text-xl">Stream-Specific Offline Coaching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Dedicated batches for General, DEPR, and DSIM streams with specialized faculty for each domain.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    <span>Stream-specific syllabus coverage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    <span>Small batch sizes (25-30 students)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    <span>Individual attention guaranteed</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-secondary">
              <CardHeader className="pb-4">
                <div className="text-secondary text-3xl mb-2">👨‍🏫</div>
                <CardTitle className="text-xl">Expert Faculty Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Learn from industry veterans with specialized expertise in Finance, Management, ESI, and English.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    <span>15+ years teaching experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    <span>Former bankers and economists</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    <span>Subject matter specialists</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-success">
              <CardHeader className="pb-4">
                <div className="text-success text-3xl mb-2">📰</div>
                <CardTitle className="text-xl">Current Affairs & Economy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Daily current affairs sessions with special focus on economic developments and budget analysis.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    <span>Daily news analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    <span>Budget & Economic Survey detailed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    <span>Monthly current affairs compilation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-cta">
              <CardHeader className="pb-4">
                <div className="text-cta text-3xl mb-2">📝</div>
                <CardTitle className="text-xl">Comprehensive Test Series</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Regular mock tests for both Prelims and Mains with detailed performance analysis and ranking.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    <span>20+ Prelims mock tests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    <span>15+ Mains mock tests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    <span>All-India ranking system</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
              <CardHeader className="pb-4">
                <div className="text-primary text-3xl mb-2">✍️</div>
                <CardTitle className="text-xl">Descriptive Writing Practice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Intensive practice sessions for English descriptive paper with personalized feedback and evaluation.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    <span>Essay writing workshops</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    <span>Précis writing techniques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    <span>Individual copy evaluation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-secondary">
              <CardHeader className="pb-4">
                <div className="text-secondary text-3xl mb-2">🎤</div>
                <CardTitle className="text-xl">Interview Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete interview guidance with mock panels, personality development, and confidence building.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    <span>Mock interview panels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    <span>Personality development sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    <span>Current affairs for interview</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Study Materials Section */}
          <Card className="mb-12 border-2 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-3">
                <span className="text-primary text-2xl">📖</span>
                Study Materials & Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-card-foreground">📚 Printed Materials:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">📘</span>
                      <span><strong>Subject-wise Books:</strong> Comprehensive coverage of Finance, Management, ESI, English</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">📄</span>
                      <span><strong>Previous Year Papers:</strong> Last 10 years solved papers with explanations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">📑</span>
                      <span><strong>Practice Sets:</strong> Chapter-wise and topic-wise question banks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">📰</span>
                      <span><strong>Current Affairs:</strong> Monthly magazines and weekly compilations</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-card-foreground">💻 Digital Resources:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">🎥</span>
                      <span><strong>Video Lectures:</strong> Recorded sessions for revision and doubt clearing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">📱</span>
                      <span><strong>Mobile App:</strong> Practice questions and current affairs on-the-go</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">💾</span>
                      <span><strong>Online Tests:</strong> Additional practice tests with instant results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">📊</span>
                      <span><strong>Performance Analytics:</strong> Detailed analysis of strengths and weaknesses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Features */}
          <Card className="mb-12 bg-muted/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Additional Support Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6">
                  <div className="text-3xl mb-3">🤝</div>
                  <h4 className="font-semibold text-lg mb-3">Doubt Sessions</h4>
                  <p className="text-muted-foreground text-sm">
                    Regular doubt clearing sessions with faculty and peer-to-peer discussions for better understanding.
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="text-3xl mb-3">📈</div>
                  <h4 className="font-semibold text-lg mb-3">Progress Tracking</h4>
                  <p className="text-muted-foreground text-sm">
                    Weekly assessments and progress reports to monitor your preparation level and improvement areas.
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="text-3xl mb-3">🎯</div>
                  <h4 className="font-semibold text-lg mb-3">Goal Setting</h4>
                  <p className="text-muted-foreground text-sm">
                    Personalized study plans and target setting based on your current level and time available.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center bg-hero-gradient rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your RBI Grade B Journey?</h3>
            <p className="mb-6 text-primary-foreground/90 max-w-2xl mx-auto">
              Join our comprehensive coaching program and transform your RBI Grade B preparation with expert guidance, 
              proven strategies, and complete support system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="cta" size="lg" className="font-semibold px-8">
                🚀 Enroll in RBI Grade B Course
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                📞 Talk to Our Counselor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}