import { Header } from "@/components/landing/Header"
import { Hero } from "@/components/landing/Hero"
import { About } from "@/components/landing/About"
import { Eligibility } from "@/components/landing/Eligibility"
import { ExamPattern } from "@/components/landing/ExamPattern"
import { CourseHighlights } from "@/components/landing/CourseHighlights"
import { Fees } from "@/components/landing/Fees"
import { FAQ } from "@/components/landing/FAQ"
import { CTA } from "@/components/landing/CTA"
import { Footer } from "@/components/landing/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="eligibility">
          <Eligibility />
        </section>
        <section id="exam-pattern">
          <ExamPattern />
        </section>
        <section id="course">
          <CourseHighlights />
        </section>
        <section id="fees">
          <Fees />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
