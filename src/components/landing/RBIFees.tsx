import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const RBIFees = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4 text-sm px-4 py-2">
              💰 Course Fees & Official Information
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Transparent <span className="text-primary">Fee Structure</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Invest in your future with our comprehensive RBI Grade B coaching program. 
              Affordable fees with maximum value and no hidden charges.
            </p>
          </div>

          {/* Course Fees Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* King Makers Course Fee */}
            <Card className="border-l-4 border-l-primary hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center bg-primary/5">
                <div className="text-primary text-4xl mb-2">🏆</div>
                <CardTitle className="text-2xl text-primary">King Makers Banking Academy</CardTitle>
                <p className="text-muted-foreground">RBI Grade B Complete Course</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">Contact for Details</div>
                  <p className="text-sm text-muted-foreground">Call +91 98765 43210 for current fees</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-lg text-card-foreground">Course Includes:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-success">✅</span>
                      <span className="text-sm">Complete study materials (Printed + Digital)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-success">✅</span>
                      <span className="text-sm">Prelims + Mains mock test series</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-success">✅</span>
                      <span className="text-sm">Interview preparation & mock panels</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-success">✅</span>
                      <span className="text-sm">Daily current affairs sessions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-success">✅</span>
                      <span className="text-sm">Doubt clearing sessions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-success">✅</span>
                      <span className="text-sm">Descriptive writing practice</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-success">✅</span>
                      <span className="text-sm">Progress tracking & counseling</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20 mb-6">
                  <h5 className="font-semibold text-secondary mb-2">💳 Payment Options:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• One-time payment (Discounts available)</li>
                    <li>• Installment options available</li>
                    <li>• Online payment & Bank transfer</li>
                    <li>• Cash payment at center</li>
                  </ul>
                </div>

                <Button className="w-full" variant="rbi" size="lg">
                  💬 Get Fee Details & Enroll Now
                </Button>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-6">
              {/* Batch Timings */}
              <Card className="border-l-4 border-l-secondary">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <span className="text-secondary">🗓️</span>
                    Batch Timings & Options
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h5 className="font-semibold mb-2">📅 Weekday Batches:</h5>
                      <p className="text-sm text-muted-foreground">Monday to Friday | 10:00 AM - 1:00 PM</p>
                      <p className="text-sm text-muted-foreground">Perfect for students and dedicated aspirants</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h5 className="font-semibold mb-2">🏢 Weekend Batches:</h5>
                      <p className="text-sm text-muted-foreground">Saturday & Sunday | 9:00 AM - 5:00 PM</p>
                      <p className="text-sm text-muted-foreground">Ideal for working professionals</p>
                    </div>
                    <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                      <h5 className="font-semibold text-success mb-2">📚 Medium of Instruction:</h5>
                      <p className="text-sm">English Only (No Tamil/Hindi batches)</p>
                    </div>
                    <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <h5 className="font-semibold text-primary mb-2">🔄 Revision Policy:</h5>
                      <p className="text-sm">Repeat classes allowed within course duration</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Special Offers */}
              <Card className="border-l-4 border-l-cta">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <span className="text-cta">🎁</span>
                    Special Offers & Discounts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-cta/10 rounded border border-cta/20">
                      <span className="text-cta">🎓</span>
                      <div>
                        <div className="font-medium text-sm">Early Bird Discount</div>
                        <div className="text-xs text-muted-foreground">Register 2 months before exam</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded border border-secondary/20">
                      <span className="text-secondary">👥</span>
                      <div>
                        <div className="font-medium text-sm">Group Registration</div>
                        <div className="text-xs text-muted-foreground">3+ friends get additional discount</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-success/10 rounded border border-success/20">
                      <span className="text-success">🔄</span>
                      <div>
                        <div className="font-medium text-sm">Repeat Students</div>
                        <div className="text-xs text-muted-foreground">Alumni get special pricing</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Official RBI Application Fees */}
          <Card className="mb-12 border-2 border-primary/20 bg-card">
            <CardHeader className="text-center bg-primary/5">
              <CardTitle className="text-2xl flex items-center justify-center gap-3">
                <span className="text-primary text-2xl">🏛️</span>
                Official RBI Grade B Application Fees (2024)
              </CardTitle>
              <p className="text-muted-foreground">Pay directly to Reserve Bank of India during registration</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="text-primary text-3xl font-bold mb-3">₹850</div>
                  <h4 className="font-semibold text-lg mb-2">General / OBC Category</h4>
                  <p className="text-sm text-muted-foreground">
                    Application fee for General and Other Backward Classes candidates
                  </p>
                </div>
                
                <div className="text-center p-6 bg-success/5 rounded-lg border border-success/20">
                  <div className="text-success text-3xl font-bold mb-3">₹100</div>
                  <h4 className="font-semibold text-lg mb-2">SC / ST / PwBD Category</h4>
                  <p className="text-sm text-muted-foreground">
                    Reduced application fee for reserved category candidates
                  </p>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h5 className="font-semibold mb-3 text-card-foreground">💳 Payment Methods (RBI):</h5>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Online Payment (Debit/Credit Card)</li>
                    <li>• Net Banking</li>
                    <li>• UPI Payments</li>
                    <li>• Challan Payment (Offline)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-3 text-card-foreground">⚠️ Important Notes:</h5>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Fees once paid are non-refundable</li>
                    <li>• Payment receipt must be preserved</li>
                    <li>• No exam without proper fee payment</li>
                    <li>• Check official RBI notification for updates</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location & Facilities */}
          <Card className="border-l-4 border-l-success">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="text-success text-2xl">📍</span>
                Our Locations & Facilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-card-foreground">🏢 Chennai Branches:</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h5 className="font-semibold text-primary mb-2">Anna Nagar Branch</h5>
                      <p className="text-sm text-muted-foreground mb-2">Modern smart classrooms with AC facilities</p>
                      <p className="text-xs text-muted-foreground">Near Metro Station | Easy accessibility</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h5 className="font-semibold text-primary mb-2">Adyar Branch</h5>
                      <p className="text-sm text-muted-foreground mb-2">Spacious study environment with library</p>
                      <p className="text-xs text-muted-foreground">IT corridor location | Well connected</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-card-foreground">🏠 Accommodation Support:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-secondary/10 rounded border border-secondary/20">
                      <span className="text-secondary mt-1">🏨</span>
                      <div>
                        <div className="font-medium text-sm">Hostel Not Provided</div>
                        <div className="text-xs text-muted-foreground">But we assist in finding nearby accommodations</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-success/10 rounded border border-success/20">
                      <span className="text-success mt-1">🤝</span>
                      <div>
                        <div className="font-medium text-sm">Accommodation Guidance</div>
                        <div className="text-xs text-muted-foreground">Help with PG, hostels, and shared apartments</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-primary/10 rounded border border-primary/20">
                      <span className="text-primary mt-1">📱</span>
                      <div>
                        <div className="font-medium text-sm">Local Contacts</div>
                        <div className="text-xs text-muted-foreground">Verified accommodation providers list available</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center bg-hero-gradient rounded-2xl p-8 text-primary-foreground mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Invest in Your RBI Career?</h3>
            <p className="mb-6 text-primary-foreground/90 max-w-2xl mx-auto">
              Don't let fee concerns hold you back from your dream job. Call us to discuss flexible payment options 
              and special discounts available for serious aspirants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="cta" size="lg" className="font-semibold px-8">
                💰 Get Fee Details & Payment Options
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                📍 Visit Our Centers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}