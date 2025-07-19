import { Header } from "@/components/landing/Header"
import { RBIHero } from "@/components/landing/RBIHero"
import { RBIAbout } from "@/components/landing/RBIAbout"
import { RBIWhy } from "@/components/landing/RBIWhy"
import { RBIEligibility } from "@/components/landing/RBIEligibility"
import { RBIExamPattern } from "@/components/landing/RBIExamPattern"
import { RBICourseHighlights } from "@/components/landing/RBICourseHighlights"
import { RBIFees } from "@/components/landing/RBIFees"
import { RBIFAQ } from "@/components/landing/RBIFAQ"
import { RBICTA } from "@/components/landing/RBICTA"
import { Footer } from "@/components/landing/Footer"

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <main>
        <RBIHero />
        <section id="about">
          <RBIAbout />
        </section>
        <section id="why-choose">
          <RBIWhy />
        </section>
        <section id="eligibility">
          <RBIEligibility />
        </section>
        <section id="exam-pattern">
          <RBIExamPattern />
        </section>
        <section id="course">
          <RBICourseHighlights />
        </section>
        <section id="fees">
          <RBIFees />
        </section>
        <section id="faq">
          <RBIFAQ />
        </section>
        <RBICTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
