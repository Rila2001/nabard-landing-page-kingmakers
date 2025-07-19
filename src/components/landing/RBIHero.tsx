import { Button } from "@/components/ui/button"
import rbiHeroImage from "@/assets/rbi-hero-image.jpg"

export const RBIHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={rbiHeroImage} 
          alt="RBI Grade B Coaching"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block mb-2">Master the</span>
            <span className="block bg-gold-gradient bg-clip-text text-transparent">
              RBI Grade B
            </span>
            <span className="block">Exam</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
            Join Chennai's Premier RBI Grade B Coaching Institute with Expert Faculty for 
            <strong> Finance, Management, ESI & English</strong>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-lg">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
              <div className="font-semibold text-secondary">✅ Offline Classes</div>
              <div className="text-sm text-primary-foreground/80">Anna Nagar & Adyar</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
              <div className="font-semibold text-secondary">🎯 Expert Faculty</div>
              <div className="text-sm text-primary-foreground/80">Specialized Teaching</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
              <div className="font-semibold text-secondary">🏆 Proven Results</div>
              <div className="text-sm text-primary-foreground/80">High Success Rate</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="cta"
              className="text-lg px-8 py-4 font-semibold transform hover:scale-105 transition-all duration-300"
            >
              🚀 Enroll Now for RBI Grade B 2025!
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              📞 Call: +91 98765 43210
            </Button>
          </div>
          
          <div className="mt-8 text-secondary font-medium animate-pulse">
            ⚡ Seats Filling Fast - Secure Your Spot Today! ⚡
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}