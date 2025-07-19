import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export const RBIFAQ = () => {
  const faqs = [
    {
      id: "item-1",
      question: "Are repeat classes allowed if I miss sessions?",
      answer: "Yes, we allow repeat classes within the course duration. You can attend the same topic in different batches or request recorded sessions for missed classes."
    },
    {
      id: "item-2", 
      question: "Do you cover Descriptive English and writing practice?",
      answer: "Absolutely! We have dedicated sessions for descriptive English including essay writing, précis writing, comprehension, and letter writing with individual copy evaluation and feedback."
    },
    {
      id: "item-3",
      question: "Is RBI Grade B coaching available in Tamil?",
      answer: "No, our RBI Grade B coaching is conducted only in English medium. This helps students prepare better for the actual exam which is also in English."
    },
    {
      id: "item-4",
      question: "Can working professionals attend weekend classes?",
      answer: "Yes, we have special weekend batches (Saturday & Sunday, 9 AM - 5 PM) designed specifically for working professionals who cannot attend weekday classes."
    },
    {
      id: "item-5",
      question: "Do you help with interview preparation?",
      answer: "Yes, we provide comprehensive interview preparation including mock interview panels, personality development sessions, current affairs for interviews, and confidence building exercises."
    },
    {
      id: "item-6",
      question: "What study materials are provided in the course?",
      answer: "Complete study package includes printed books for all subjects, previous year papers, practice sets, current affairs magazines, mobile app access, and video lectures for revision."
    },
    {
      id: "item-7",
      question: "How many mock tests are included?",
      answer: "Our test series includes 20+ Prelims mock tests, 15+ Mains mock tests with detailed performance analysis, All-India ranking, and separate descriptive writing practice tests."
    },
    {
      id: "item-8",
      question: "Is this course suitable for non-Finance background students?",
      answer: "Yes, our course is designed for all backgrounds. We start from basics in Finance and Management, making it suitable for students from any academic background."
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-sm px-4 py-2">
              ❓ Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Got <span className="text-primary">Questions?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Find answers to the most common questions about our RBI Grade B coaching program.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border border-border rounded-lg px-6 bg-card hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}