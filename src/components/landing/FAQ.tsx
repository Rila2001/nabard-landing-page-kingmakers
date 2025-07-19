import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, MessageCircle, Phone } from "lucide-react"

export const FAQ = () => {
  const faqs = [
    {
      question: "Is revision allowed after course completion?",
      answer: "Yes, we provide revision classes before the examination. Students can attend special revision sessions covering important topics, current affairs updates, and last-minute preparation strategies. Additional doubt clearing sessions are also available during the revision period."
    },
    {
      question: "Are study materials and test series included in the course fee?",
      answer: "Absolutely! The course fee includes comprehensive printed study materials, digital resources, full-length mock test series, sectional tests, current affairs monthly magazines, and descriptive paper practice materials. No additional charges for these materials."
    },
    {
      question: "Do you provide mock interview sessions?",
      answer: "Yes, mock interview sessions are an integral part of our program. We conduct multiple rounds of mock interviews with experienced panels, provide detailed feedback, and help students improve their communication skills, confidence, and subject knowledge presentation."
    },
    {
      question: "Is the course suitable for candidates from non-agriculture backgrounds?",
      answer: "Definitely! We offer coaching for all 10+ streams including General, Finance, Statistics, Engineering, Computer/IT, and others. Our faculty provides comprehensive coverage of Agriculture & Rural Development (ARD) topics for candidates from all backgrounds, ensuring everyone is well-prepared for this mandatory section."
    },
    {
      question: "Is the course conducted in bilingual mode?",
      answer: "Our primary medium of instruction is English. However, our experienced faculty can provide explanations in Tamil or Hindi when needed for complex concepts, ensuring all students understand the topics clearly regardless of their linguistic background."
    },
    {
      question: "What is the batch size and student-teacher ratio?",
      answer: "We maintain optimal batch sizes of 25-30 students to ensure personalized attention. This allows for individual interaction with faculty, proper doubt clearing, and effective learning environment. Our student-teacher ratio ensures quality education and individual mentoring."
    },
    {
      question: "Do you provide hostel facilities?",
      answer: "While we don't provide hostel facilities directly, our admission counselors can guide you to reliable accommodation options near our Anna Nagar and Adyar centers. We maintain a list of verified PG accommodations and hostels for outstation students."
    },
    {
      question: "What happens if I miss classes due to work or personal reasons?",
      answer: "We understand the challenges faced by working professionals. Missed topics are covered in special weekend sessions, and study materials for missed classes are provided. Additionally, our faculty is available for one-on-one doubt clearing sessions to cover any missed content."
    },
    {
      question: "How often are mock tests conducted?",
      answer: "We conduct weekly full-length mock tests following the exact NABARD pattern. Additionally, there are bi-weekly sectional tests, monthly comprehensive tests, and specialized descriptive practice sessions. All tests come with detailed performance analysis and improvement suggestions."
    },
    {
      question: "Is there any scholarship or discount available?",
      answer: "Yes, we offer early bird discounts for students who enroll early. Merit-based scholarships are available for students who perform exceptionally in our entrance test. Special discounts are also provided for defense personnel, government employees, and economically weaker sections."
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Common <span className="text-primary">Questions</span> Answered
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get answers to the most frequently asked questions about our NABARD Grade A 
            coaching program, course structure, and admission process.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-muted rounded-lg px-6">
                      <AccordionTrigger className="text-left hover:no-underline py-6">
                        <div className="flex items-start space-x-3">
                          <HelpCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span className="font-semibold text-foreground">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 pt-2 pl-8">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Contact Support */}
          <div className="space-y-6">
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">Still Have Questions?</h3>
                  <p className="text-muted-foreground">
                    Our expert counselors are available to provide detailed information 
                    about the course, admission process, and career guidance.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button variant="default" size="lg" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call: +91-9876543210
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Chat
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground">
                  <p><strong>Office Hours:</strong></p>
                  <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sun: 10:00 AM - 5:00 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary/10 border border-secondary/20">
              <CardContent className="p-6 text-center space-y-4">
                <h4 className="text-lg font-bold text-foreground">Free Counseling Session</h4>
                <p className="text-sm text-muted-foreground">
                  Book a free one-on-one counseling session to discuss your preparation 
                  strategy and get personalized guidance.
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  Book Free Session
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border border-green-200">
              <CardContent className="p-6 space-y-3">
                <h4 className="text-lg font-bold text-green-800">Success Guarantee</h4>
                <p className="text-sm text-green-700">
                  We are confident in our teaching methodology. If you don't clear 
                  the preliminary exam, you can repeat the course at 50% discount.
                </p>
                <div className="text-xs text-green-600">
                  *Terms and conditions apply
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}