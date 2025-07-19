import { Button } from "@/components/ui/button"

export const RBICTA = () => {
  return (
    <section className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your RBI Grade B Success
            <span className="block bg-gold-gradient bg-clip-text text-transparent">
              Starts Here!
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
            Join <strong>500+ successful RBI officers</strong> who began their journey with King Makers Banking Academy. 
            Don't let this opportunity pass - secure your spot in India's most prestigious banking career.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-bold text-lg">Limited Seats</div>
              <div className="text-sm text-primary-foreground/80">Only 30 students per batch</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-3xl mb-2">🗓️</div>
              <div className="font-bold text-lg">Batch Starting Soon</div>
              <div className="text-sm text-primary-foreground/80">Don't miss the next cycle</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-bold text-lg">Expert Guidance</div>
              <div className="text-sm text-primary-foreground/80">15+ years experience</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="cta"
                className="text-xl px-12 py-6 font-bold transform hover:scale-105 transition-all duration-300"
              >
                🚀 Enroll Now for RBI Grade B 2025!
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-xl px-12 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold"
              >
                📞 Call: +91 98765 43210
              </Button>
            </div>
            
            <div className="text-secondary font-bold text-lg animate-pulse">
              ⏰ Seats Filling Fast - Only 15 Spots Left! ⏰
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-sm text-primary-foreground/80">
              <div>📍 Anna Nagar Branch: Near Metro Station</div>
              <div>📍 Adyar Branch: IT Corridor Location</div>
              <div>💬 WhatsApp: +91 98765 43210</div>
              <div>🌐 Visit: www.kingmakersbankingacademy.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}