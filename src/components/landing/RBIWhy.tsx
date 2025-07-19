import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const RBIWhy = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4 text-sm px-4 py-2">
              🏆 Why Choose King Makers Banking Academy?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Chennai's <span className="text-primary">#1 RBI Grade B</span> Coaching Institute
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful RBI officers who started their journey with King Makers Banking Academy. 
              We don't just teach - we transform aspirants into RBI officers.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="text-primary text-4xl mb-4">🏛️</div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">Offline Excellence in Chennai</h3>
                <p className="text-muted-foreground mb-6">
                  State-of-the-art classroom facilities in Anna Nagar & Adyar with small batch sizes for personalized attention. 
                  No distractions, maximum focus.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-success">📍</span>
                    <span className="font-medium">Anna Nagar Branch:</span>
                    <span className="text-muted-foreground">Modern Smart Classrooms</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-success">📍</span>
                    <span className="font-medium">Adyar Branch:</span>
                    <span className="text-muted-foreground">Air-Conditioned Study Environment</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="text-secondary text-4xl mb-4">👨‍🏫</div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">Expert Faculty Team</h3>
                <p className="text-muted-foreground mb-6">
                  Industry veterans and subject matter experts with 10+ years of experience in Finance, Management, ESI, English, and Quantitative Aptitude.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-primary">💼</span>
                    <span>Finance Specialists</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-primary">📊</span>
                    <span>Management Experts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-primary">🌍</span>
                    <span>ESI Masters</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-primary">✍️</span>
                    <span>English Gurus</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Success Metrics */}
          <div className="bg-card rounded-2xl p-8 border shadow-sm mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center text-card-foreground">
              Our Track Record Speaks for Itself
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Successful RBI Officers</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-secondary">15+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-success">85%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cta">2</div>
                <div className="text-sm text-muted-foreground">Prime Locations</div>
              </div>
            </div>
          </div>

          {/* Unique Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">🎯</div>
                <h4 className="font-semibold text-lg mb-3">Personalized Mentoring</h4>
                <p className="text-muted-foreground text-sm">
                  Individual attention with regular progress tracking and customized study plans for each student.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">📈</div>
                <h4 className="font-semibold text-lg mb-3">Result-Oriented Strategy</h4>
                <p className="text-muted-foreground text-sm">
                  Proven methodologies that have consistently produced RBI Grade B officers year after year.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-l-success">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">🏅</div>
                <h4 className="font-semibold text-lg mb-3">Complete Preparation</h4>
                <p className="text-muted-foreground text-sm">
                  From Prelims to Interview - comprehensive coaching that covers every aspect of the RBI Grade B exam.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center bg-hero-gradient rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Ready to Join India's Elite Banking Officers?</h3>
            <p className="mb-6 text-primary-foreground/90">
              Don't let this opportunity slip away. Start your RBI Grade B journey with Chennai's most trusted coaching institute.
            </p>
            <Button variant="cta" size="lg" className="font-semibold px-8">
              🚀 Book Your Seat Now - Limited Batches Available!
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}