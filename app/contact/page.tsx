// import Link from "next/link"
// import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Badge } from "@/components/ui/badge"

// export default function ContactPage() {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background dark:from-primary/10 dark:via-background dark:to-background section-padding">
//         <div className="container-custom">
//           <div className="text-center max-w-3xl mx-auto space-y-6">
//             <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
//               Contact Us
//             </Badge>
//             <h1 className="font-galano text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
//               Start Your <span className="text-primary">Global Education</span> Journey
//             </h1>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Whether you're just exploring options or ready to apply, our expert advisors are here to guide you — step
//               by step. Let's make your dream of studying or settling abroad a reality.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
//               <Button size="lg" asChild>
//                 <Link href="/consultation" className="gap-2">
//                   Book a Free Consultation
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="section-padding">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-2 gap-12">
//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <h2 className="font-galano text-3xl font-bold">How Can We Help You?</h2>
//                 <p className="text-muted-foreground text-lg">
//                   Tell us a bit about your goals — and we'll respond with clear, personalized advice.
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-primary/10 p-2 rounded-full mt-1">
//                     <Phone className="h-5 w-5 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-galano text-lg font-semibold">Call Us Directly</h3>
//                     <p className="text-muted-foreground">
//                       New Zealand: +64 2102312849
//                       <br />
//                       India: +91 90379 93020
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="bg-primary/10 p-2 rounded-full mt-1">
//                     <Mail className="h-5 w-5 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-galano text-lg font-semibold">Email Us</h3>
//                     <p className="text-muted-foreground">
//                       <a href="mailto:info@tpacific.co.nz" className="hover:text-primary transition-colors">
//                         info@tpacific.co.nz
//                       </a>
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="bg-primary/10 p-2 rounded-full mt-1">
//                     <Clock className="h-5 w-5 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-galano text-lg font-semibold">Office Hours</h3>
//                     <p className="text-muted-foreground">
//                       New Zealand: Mon–Fri, 9 AM – 6 PM
//                       <br />
//                       India: Mon–Sat, 10 AM – 7 PM
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <Card className="border-border/50">
//                 <CardContent className="p-6">
//                   <h2 className="font-galano text-2xl font-bold mb-6">Get in Touch</h2>
//                   <form className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="firstName">First Name</Label>
//                         <Input id="firstName" placeholder="Enter your first name" required />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="lastName">Last Name</Label>
//                         <Input id="lastName" placeholder="Enter your last name" required />
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="email">Email Address</Label>
//                       <Input id="email" type="email" placeholder="Enter your email address" required />
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="phone">Phone Number</Label>
//                       <Input id="phone" placeholder="Enter your phone number" required />
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="service">Service Interested In</Label>
//                       <Select>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select a service" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="student-visa">Student Visa</SelectItem>
//                           <SelectItem value="work-visa">Work Visa</SelectItem>
//                           <SelectItem value="immigration">Immigration</SelectItem>
//                           <SelectItem value="ielts">IELTS</SelectItem>
//                           <SelectItem value="others">Others</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="message">Message</Label>
//                       <Textarea
//                         id="message"
//                         placeholder="e.g., Looking to apply for MS in Canada, Fall 2025"
//                         rows={4}
//                       />
//                     </div>

//                     <Button type="submit" className="w-full">
//                       Send Message
//                     </Button>

//                     <p className="text-xs text-center text-muted-foreground">
//                       By submitting this form, you agree to our privacy policy and terms of service.
//                     </p>
//                   </form>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Global Offices Section */}
//       <section className="section-padding bg-muted/30 dark:bg-muted/10 border-y">
//         <div className="container-custom">
//           <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
//             <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
//               Our Locations
//             </Badge>
//             <h2 className="font-galano text-3xl md:text-4xl font-bold">Our Global Offices</h2>
//             <p className="text-xl text-muted-foreground">Visit us at any of our offices across New Zealand and India</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 country: "New Zealand",
//                 location: "Mount Eden",
//                 address: "Suite 6, Floor 1, 93 Dominion Road, Mount Eden, Auckland 1024",
//                 phone: "+64 2102312849",
//                 email: "info@tpacific.co.nz",
//                 hours: "Mon–Fri: 9 AM – 6 PM",
//                 mapUrl: "https://maps.google.com/?q=93+Dominion+Road,+Mount+Eden,+Auckland+1024",
//               },
//               {
//                 country: "New Zealand",
//                 location: "Sandringham",
//                 address: "587 Sandringham Road, Auckland 1025",
//                 phone: "+64 2102312849",
//                 email: "auckland@tpacific.co.nz",
//                 hours: "Mon–Fri: 9 AM – 6 PM",
//                 mapUrl: "https://maps.google.com/?q=587+Sandringham+Road,+Auckland+1025",
//               },
//               {
//                 country: "India",
//                 location: "Kochi Office",
//                 address: "3rd Floor, Abad Nucleus Mall, Poonithura, Maradu, Ernakulam, Kochi – 682034",
//                 phone: "+91 90379 93020",
//                 email: "kochi@tpacific.co.nz",
//                 hours: "Mon–Sat: 10 AM – 7 PM",
//                 mapUrl: "https://maps.google.com/?q=Abad+Nucleus+Mall,+Poonithura,+Maradu,+Ernakulam,+Kochi",
//               },
//               {
//                 country: "India",
//                 location: "Hyderabad (Kukatpally)",
//                 address:
//                   "3rd Floor, Dhanalakshmi Centre, Rd No. 2, above ICICI Bank, Kukatpally Housing Board, Hyderabad – 500072",
//                 phone: "+91 99599 15680 | +91 98499 95490",
//                 email: "hyd@tpacific.co.nz",
//                 hours: "Mon–Sat: 10 AM – 7 PM",
//                 mapUrl: "https://maps.google.com/?q=Dhanalakshmi+Centre,+Kukatpally+Housing+Board,+Hyderabad",
//               },
//               {
//                 country: "India",
//                 location: "Hyderabad (Dilsukhnagar)",
//                 address: "Opposite Konark Theatre, Dilsukhnagar, Hyderabad – 500060",
//                 phone: "+91 99599 15680 | +91 98499 95490",
//                 email: "dilshuknagar@tpacific.co.nz",
//                 hours: "Mon–Sat: 10 AM – 7 PM",
//                 mapUrl: "https://maps.google.com/?q=Konark+Theatre,+Dilsukhnagar,+Hyderabad",
//               },
//             ].map((office, index) => (
//               <Card key={index} className="bg-background border-border/50 hover:shadow-md transition-shadow">
//                 <CardContent className="p-6 space-y-4">
//                   <div className="flex items-center justify-between">
//                     <Badge variant="outline" className="bg-background dark:bg-muted">
//                       {office.country}
//                     </Badge>
//                     <div className="bg-primary/10 p-2 rounded-full">
//                       <MapPin className="h-4 w-4 text-primary" />
//                     </div>
//                   </div>
//                   <h3 className="font-galano text-xl font-semibold">{office.location}</h3>
//                   <div className="space-y-3 text-muted-foreground">
//                     <p>{office.address}</p>
//                     <div className="flex items-center gap-2">
//                       <Phone className="h-4 w-4 text-primary shrink-0" />
//                       <span>{office.phone}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Mail className="h-4 w-4 text-primary shrink-0" />
//                       <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">
//                         {office.email}
//                       </a>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Clock className="h-4 w-4 text-primary shrink-0" />
//                       <span>{office.hours}</span>
//                     </div>
//                   </div>
//                   <div className="pt-2">
//                     <Button variant="outline" size="sm" className="w-full" asChild>
//                       <a href={office.mapUrl} target="_blank" rel="noopener noreferrer">
//                         View on Map
//                       </a>
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="section-padding">
//         <div className="container-custom">
//           <div className="rounded-xl overflow-hidden border border-border/50 h-[500px]">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.0611514925287!2d174.7437863!3d-36.8730368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47e7f2a734c7%3A0x500ef6143a2d500!2s93%20Dominion%20Rd%2C%20Mount%20Eden%2C%20Auckland%201024%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Transpacific Immigration Services Office Location"
//             ></iframe>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="section-padding bg-primary text-primary-foreground">
//         <div className="container-custom">
//           <div className="max-w-3xl mx-auto text-center space-y-6">
//             <h2 className="font-galano text-3xl md:text-4xl font-bold">Ready to Take the Next Step?</h2>
//             <p className="text-xl opacity-90">
//               Book a free consultation with our education experts and start your journey towards global education and
//               opportunities.
//             </p>
//             <div className="pt-4">
//               <Button size="lg" variant="secondary" asChild>
//                 <Link href="/consultation" className="gap-2">
//                   Book Your Free Consultation
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }










"use client"
import Link from "next/link"
import { ArrowRight, Clock, Mail, MapPin, Phone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState } from "react"
import { sendEmail } from "@/lib/send-mail"
import { motion, AnimatePresence } from "framer-motion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })

  // Add loading and success states
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }
  
  // Handle select changes
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }))
  }
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const result = await sendEmail({
        to: "info@tpacific.co.nz",
        subject: "New Contact Form Submission",
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Service:</strong> ${formData.service}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
        `,
      });

      if (result.success) {
        console.log("Email sent successfully")
        setIsSubmitted(true)
        // Reset form data
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        })
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        console.error("Failed to send email")
        alert("There was an error sending your message. Please try again later.")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      alert("There was an error sending your message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <>
      {/* Top Banner */}
      <section className="bg-primary text-primary-foreground py-3">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="font-galano text-xl md:text-2xl font-bold">Leading Immigration & Education Consultancy</h1>
          </div>
        </div>
      </section>

      {/* Hero Section with Image and Content */}
      <section className="section-padding bg-muted/30 dark:bg-muted/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-galano text-3xl md:text-4xl font-bold text-primary mb-4">
              TRUSTED IMMIGRATION & EDUCATION CONSULTANCY
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Image on Left */}
            <div className="order-2 lg:order-1 flex">
              <div className="relative rounded-xl overflow-hidden shadow-lg w-full">
                <Image
                  src="/contact_hero.jpg"
                  alt="Students consulting with education advisors"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content on Right */}
            <div className="order-1 lg:order-2 space-y-6 flex flex-col justify-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transpacific Immigration Services is one of the most{" "}
                <strong>trusted immigration and education consultants</strong> and the most emerging brand in the space
                of overseas education and immigration services. We have multiple offices across New Zealand and India
                with a team of 50+ experienced professionals. Serving students and families since 2015, we have helped
                thousands of clients achieve their dreams of studying and settling abroad.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our expert team provides comprehensive guidance for studying in New Zealand, Australia, Canada, USA, UK,
                and Ireland. We also offer specialized services for work visas, family reunification, and permanent
                residency applications. We have the expertise, the vision, the dedication, and the commitment to
                challenge conventional limits and deliver exceptional results that exceed your expectations.
              </p>

              <div className="pt-4">
                <Button size="lg" asChild>
                  <Link href="#contact-form" className="gap-2">
                    Get Expert Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding" id="contact-form">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-galano text-3xl font-bold">How Can We Help You?</h2>
                <p className="text-muted-foreground text-lg">
                  Tell us a bit about your goals — and we'll respond with clear, personalized advice.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-galano text-lg font-semibold">Call Us Directly</h3>
                    <p className="text-muted-foreground">
                      New Zealand: +64 2102312849
                      <br />
                      India: +91 90379 93020
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-galano text-lg font-semibold">Email Us</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@tpacific.co.nz" className="hover:text-primary transition-colors">
                        info@tpacific.co.nz
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-galano text-lg font-semibold">Office Hours</h3>
                    <p className="text-muted-foreground">
                      New Zealand: Mon–Fri, 9 AM – 6 PM
                      <br />
                      India: Mon–Sat, 10 AM – 7 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* Success message */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Alert className="bg-green-50 border-green-200 text-green-800">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertTitle className="text-green-800 font-medium">Success!</AlertTitle>
                      <AlertDescription className="text-green-700">
                        Your message has been sent successfully. We'll get back to you soon.
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h2 className="font-galano text-2xl font-bold mb-6">Get in Touch</h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Enter your first name" 
                          required 
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Enter your last name" 
                          required 
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email address" 
                        required 
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        placeholder="Enter your phone number" 
                        required 
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <Select onValueChange={handleSelectChange} value={formData.service}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student-visa">Student Visa</SelectItem>
                          <SelectItem value="work-visa">Work Visa</SelectItem>
                          <SelectItem value="immigration">Immigration</SelectItem>
                          <SelectItem value="ielts">IELTS</SelectItem>
                          <SelectItem value="others">Others</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="e.g., Looking to apply for MS in Canada, Fall 2025"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="section-padding bg-muted/30 dark:bg-muted/10 border-y">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-background dark:bg-muted">
              Our Locations
            </Badge>
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Our Global Offices</h2>
            <p className="text-xl text-muted-foreground stats-intro-text">Visit us at any of our offices across New Zealand and India</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                country: "New Zealand",
                location: "Mount Eden",
                address: "Suite 6, Floor 1, 93 Dominion Road, Mount Eden, Auckland 1024",
                phone: "+64 2102312849",
                email: "info@tpacific.co.nz",
                hours: "Mon–Fri: 9 AM – 6 PM",
                mapUrl: "https://maps.google.com/?q=93+Dominion+Road,+Mount+Eden,+Auckland+1024",
                embedUrl:
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.0611514925287!2d174.7437863!3d-36.8730368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47e7f2a734c7%3A0x500ef6143a2d500!2s93%20Dominion%20Rd%2C%20Mount%20Eden%2C%20Auckland%201024%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus",
              },
              {
                country: "New Zealand",
                location: "Sandringham",
                address: "587 Sandringham Road, Auckland 1025",
                phone: "+64 2102312849",
                email: "auckland@tpacific.co.nz",
                hours: "Mon–Fri: 9 AM – 6 PM",
                mapUrl: "https://maps.google.com/?q=587+Sandringham+Road,+Auckland+1025",
                embedUrl:
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.8234567890123!2d174.7234567!3d-36.8654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47e7f2a734c8%3A0x500ef6143a2d501!2s587%20Sandringham%20Rd%2C%20Auckland%201025%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1621234567891!5m2!1sen!2sus",
              },
              {
                country: "India",
                location: "Kochi Office",
                address: "3rd Floor, Abad Nucleus Mall, Poonithura, Maradu, Ernakulam, Kochi – 682034",
                phone: "+91 90379 93020",
                email: "kochi@tpacific.co.nz",
                hours: "Mon–Sat: 10 AM – 7 PM",
                mapUrl: "https://maps.google.com/?q=Abad+Nucleus+Mall,+Poonithura,+Maradu,+Ernakulam,+Kochi",
                embedUrl:
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8234567890123!2d76.2234567!3d9.9654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d26b7a734c7%3A0x500ef6143a2d502!2sAbad%20Nucleus%20Mall%2C%20Poonithura%2C%20Maradu%2C%20Ernakulam%2C%20Kochi%2C%20Kerala%20682034%2C%20India!5e0!3m2!1sen!2sus!4v1621234567892!5m2!1sen!2sus",
              },
              {
                country: "India",
                location: "Hyderabad (Kukatpally)",
                address:
                  "3rd Floor, Dhanalakshmi Centre, Rd No. 2, above ICICI Bank, Kukatpally Housing Board, Hyderabad – 500072",
                phone: "+91 99599 15680 | +91 98499 95490",
                email: "hyd@tpacific.co.nz",
                hours: "Mon–Sat: 10 AM – 7 PM",
                mapUrl: "https://maps.google.com/?q=Dhanalakshmi+Centre,+Kukatpally+Housing+Board,+Hyderabad",
                embedUrl:
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8234567890123!2d78.3234567!3d17.4654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a26b7a734c7%3A0x500ef6143a2d503!2sDhanalakshmi%20Centre%2C%20Kukatpally%20Housing%20Board%2C%20Hyderabad%2C%20Telangana%20500072%2C%20India!5e0!3m2!1sen!2sus!4v1621234567893!5m2!1sen!2sus",
              },
              {
                country: "India",
                location: "Hyderabad (Dilsukhnagar)",
                address:
                  "4th Floor, SRR Complex, H-No-13-9-12, Opposite Konark Theatre, Lalitha Nagar, Dilsukhnagar, Hyderabad – 500060",
                phone: "+91 99599 15680 | +91 98499 95490",
                email: "dilshuknagar@tpacific.co.nz",
                hours: "Mon–Sat: 10 AM – 7 PM",
                mapUrl:
                  "https://maps.google.com/?q=SRR+Complex,+H-No-13-9-12,+Opposite+Konark+Theatre,+Lalitha+Nagar,+Dilsukhnagar,+Hyderabad",
                embedUrl:
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.234567890123!2d78.5234567!3d17.3654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99a26b7a734c7%3A0x500ef6143a2d505!2sSRR%20Complex%2C%20H-No-13-9-12%2C%20Opposite%20Konark%20Theatre%2C%20Lalitha%20Nagar%2C%20Dilsukhnagar%2C%20Hyderabad%2C%20Telangana%20500060%2C%20India!5e0!3m2!1sen!2sus!4v1621234567895!5m2!1sen!2sus",
              },
            ].map((office, index) => (
              <Card key={index} className="bg-background border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-background dark:bg-muted">
                      {office.country}
                    </Badge>
                    <div className="bg-primary/10 p-2 rounded-full">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-galano text-xl font-semibold">{office.location}</h3>

                  {/* Embedded Map */}
                  <div className="rounded-lg overflow-hidden border border-border/50 h-48">
                    <iframe
                      src={office.embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${office.location} office`}
                    ></iframe>
                  </div>

                  <div className="space-y-3 text-muted-foreground">
                    <p className="text-sm">{office.address}</p>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors text-sm">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm">{office.hours}</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={office.mapUrl} target="_blank" rel="noopener noreferrer">
                        View Larger Map
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="rounded-xl overflow-hidden border border-border/50 h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.234567890123!2d78.5234567!3d17.3654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99a26b7a734c7%3A0x500ef6143a2d505!2sSRR%20Complex%2C%20H-No-13-9-12%2C%20Opposite%20Konark%20Theatre%2C%20Lalitha%20Nagar%2C%20Dilsukhnagar%2C%20Hyderabad%2C%20Telangana%20500060%2C%20India!5e0!3m2!1sen!2sus!4v1621234567895!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Transpacific Immigration Services - Hyderabad Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-galano text-3xl md:text-4xl font-bold">Ready to Take the Next Step?</h2>
            <p className="text-xl opacity-90 stats-intro-text">
              Book a free consultation with our education experts and start your journey towards global education and
              opportunities.
            </p>
            <div className="pt-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/consultation" className="gap-2">
                  Book Your Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


