import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const RBIAbout = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-sm px-4 py-2">
              ✅ Course Introduction
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What is <span className="text-primary">RBI Grade B?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The Reserve Bank of India Grade B Officer exam is one of India's most prestigious 
              banking examinations, offering a direct entry into the central banking system.
            </p>
          </div>

          {/* Key Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-primary text-3xl mb-4">🏛️</div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Central Bank Career</h3>
                <p className="text-muted-foreground">
                  Work directly with India's central bank and shape the nation's monetary policy and financial regulations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-secondary text-3xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Prestigious Position</h3>
                <p className="text-muted-foreground">
                  Grade B Officers enjoy excellent salary packages, job security, and high social status in the banking sector.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-success hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-success text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Career Growth</h3>
                <p className="text-muted-foreground">
                  Fast-track promotion opportunities with clear advancement paths to senior management positions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Why It's Sought After */}
          <div className="bg-card rounded-2xl p-8 border shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-center text-card-foreground">
              Why RBI Grade B is India's Most Sought-After Banking Job
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4 text-primary">🎯 Exclusive Benefits:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-success mt-1">✓</span>
                    <span><strong>Competitive Salary:</strong> Starting ₹35,000+ with regular increments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success mt-1">✓</span>
                    <span><strong>Job Security:</strong> Government job with lifetime employment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success mt-1">✓</span>
                    <span><strong>Work-Life Balance:</strong> Fixed working hours and excellent leave policies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success mt-1">✓</span>
                    <span><strong>Posting Flexibility:</strong> All-India posting with transfer options</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-4 text-primary">📚 Why Expert Guidance Matters:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">⚡</span>
                    <span><strong>High Competition:</strong> Lakhs of aspirants compete for limited seats</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">⚡</span>
                    <span><strong>Complex Syllabus:</strong> Finance, Management, ESI require specialized teaching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">⚡</span>
                    <span><strong>Three-Stage Process:</strong> Prelims, Mains, and Interview need strategic preparation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">⚡</span>
                    <span><strong>Current Affairs:</strong> ESI and GA require daily updates and analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}