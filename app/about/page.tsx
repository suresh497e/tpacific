import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Briefcase, GraduationCap, Globe, FileText, Plane, Home, HeartHandshake } from "lucide-react"

export const metadata: Metadata = {
  title: "About Transpacific | Your Gateway to Global Opportunities",
  description:
    "Learn about Transpacific Immigration Services - your trusted partner for international education and immigration services with over a decade of experience.",
}

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Transpacific</h1>
            <p className="text-xl md:text-2xl font-medium text-primary">Your Gateway to Global Opportunities</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              At Transpacific, we transform your dream of studying, working, or settling abroad into a clear and
              confident journey. With over a decade of experience in international education and immigration services,
              we guide students and professionals through every step of global relocation — from India to the world.
            </p>

            <p className="text-lg mb-6">
              Whether you're aiming for a top university in New Zealand, the UK, Australia, Europe, the USA, or Canada,
              or exploring permanent residency pathways, we bring you the expertise, clarity, and support you need.
            </p>

            <div className="bg-primary/10 p-6 rounded-lg my-8">
              <p className="text-xl font-semibold mb-2">We don't just file applications.</p>
              <p className="text-2xl font-bold text-primary">We mentor futures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Transpacific */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Why Choose Transpacific?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Expertise You Can Trust</h3>
                      <p>
                        With a strong presence in New Zealand and India, our licensed advisers and trained counsellors
                        navigate global immigration systems with ease.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Tailored Guidance</h3>
                      <p>
                        We understand that no two journeys are the same. Your goals, your budget, your background —
                        everything is considered in our advice.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">End-to-End Support</h3>
                      <p>
                        From your first consultation to your first job abroad, we're with you — offering everything from
                        visa filing to post-arrival support.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Proven Results</h3>
                      <p>
                        With thousands of visas approved and a 98% satisfaction rate, Transpacific is a name students
                        trust across borders.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Transparent & Responsive</h3>
                      <p>
                        We believe in clear communication, zero guesswork, and proactive updates — so you always feel in
                        control.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">What We Do</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <Plane className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-lg">Visa Assistance</h3>
                    <p>
                      From SOPs to embassy appointments — we make the visa process smooth, strategic, and stress-free.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-lg">University & Course Selection</h3>
                    <p>We help you shortlist institutions and programs based on your career goals and PR potential.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <Globe className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-lg">IELTS Coaching</h3>
                    <p>
                      Access expert language training and resources to clear your admission and visa requirements
                      confidently.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <FileText className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-lg">Financial Documentation Support</h3>
                    <p>
                      We guide you in preparing all necessary financial documents for visa approval and university
                      admission.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <Plane className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-lg">Pre-Departure & Cultural Briefing</h3>
                    <p>
                      Get prepared for life abroad — from housing and healthcare to weather, transport, and local
                      etiquette.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <Home className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-lg">Post-Arrival Services</h3>
                    <p>
                      Need airport pickup, city orientation, or help with local registrations? We've got you covered
                      after you land too.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <HeartHandshake className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">What Drives Us</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Our Mission</h3>
                  <p>
                    To empower aspiring global citizens with accurate guidance, ethical support, and practical tools to
                    study and succeed abroad.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Our Vision</h3>
                  <p>
                    To become the most trusted international education and migration consultancy across the Indo-Pacific
                    region and beyond.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Our Values</h3>
                  <p className="mb-2">Integrity. Empathy. Excellence. Accountability. Innovation.</p>
                  <p className="italic">These aren't just words — they define how we serve every student, every day.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Global Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation with our experts and take the first step toward your international education and
            career goals.
          </p>
          <Button asChild size="lg" className="px-8">
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
