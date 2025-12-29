import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, ChevronRight, Zap, Globe, Users2, BarChart3, Lock, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
              <BookOpen className="h-6 w-6" />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight hidden md:inline-block">
              AIPTA
            </span>
            <span className="font-serif font-bold text-xl tracking-tight md:hidden">
              AIPTA
            </span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/auth">
              <Button>Member Login</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-40 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <Zap className="h-4 w-4" />
                  Empowering Physics Education
                </div>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="font-serif text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight"
              >
                Advancing Physics Education <span className="text-blue-600">Across India</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
              >
                Join 2000+ physics teachers. Access resources, connect with educators, and transform your teaching.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              >
                <Link href="/auth">
                  <Button size="lg" className="px-8 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    Get Started
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="px-8 text-base">
                  Learn More
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-8 flex justify-center gap-8 text-center"
              >
                <div>
                  <p className="font-bold text-slate-900 text-2xl">2000+</p>
                  <p className="text-sm text-slate-600">Teachers</p>
                </div>
                <div className="h-12 w-px bg-slate-200"></div>
                <div>
                  <p className="font-bold text-slate-900 text-2xl">50+</p>
                  <p className="text-sm text-slate-600">Countries</p>
                </div>
                <div className="h-12 w-px bg-slate-200"></div>
                <div>
                  <p className="font-bold text-slate-900 text-2xl">500+</p>
                  <p className="text-sm text-slate-600">Resources</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Abstract background elements - smaller */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 pointer-events-none">
            <div className="absolute -top-[30%] -right-[20%] w-[400px] h-[400px] rounded-full bg-blue-100/40 blur-3xl" />
            <div className="absolute top-[50%] -left-[15%] w-[300px] h-[300px] rounded-full bg-indigo-100/40 blur-3xl" />
          </div>
        </section>

        {/* Features Grid - Only 3 items */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-4">
                Why Choose AIPTA
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="pt-10 pb-10 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold font-serif">500+ Resources</h3>
                  <p className="text-base text-slate-600">Expert-designed materials & papers</p>
                </CardContent>
              </Card>

              <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="pt-10 pb-10 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
                    <Users2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold font-serif">2000+ Teachers</h3>
                  <p className="text-base text-slate-600">Global community & networking</p>
                </CardContent>
              </Card>

              <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="pt-10 pb-10 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold font-serif">Expert Support</h3>
                  <p className="text-base text-slate-600">Workshops & professional growth</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white overflow-hidden">
          {/* Background decorative elements - smaller */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -mr-36 -mt-36" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -ml-36 -mb-36" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
                  Ready to Join?
                </h2>
                <p className="text-lg text-blue-100 leading-relaxed">
                  Access resources and connect with physics educators worldwide.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center gap-4 flex-col sm:flex-row"
              >
                <Link href="/auth" className="flex-1 sm:flex-none">
                  <Button size="lg" className="w-full px-8 text-base bg-white text-blue-700 hover:bg-slate-50 font-semibold shadow-lg hover:shadow-xl transition-all">
                    Get Started
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="flex-1 sm:flex-none px-8 text-base border-2 border-white text-white hover:bg-white/10 font-semibold">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-slate-50 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-slate-900 mb-4">About</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-primary">About AIPTA</a></li>
                <li><a href="#" className="hover:text-primary">Leadership</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-primary">Study Materials</a></li>
                <li><a href="#" className="hover:text-primary">Question Papers</a></li>
                <li><a href="#" className="hover:text-primary">Videos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-primary">Forum</a></li>
                <li><a href="#" className="hover:text-primary">Events</a></li>
                <li><a href="#" className="hover:text-primary">Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
            <p>&copy; {new Date().getFullYear()} All India Physics Teachers Association. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary">Twitter</a>
              <a href="#" className="hover:text-primary">LinkedIn</a>
              <a href="#" className="hover:text-primary">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
