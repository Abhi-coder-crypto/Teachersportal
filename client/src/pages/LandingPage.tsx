import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, ChevronRight, Zap, Globe, Users2, BarChart3, Lock, Smartphone, Download, Lightbulb, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <BookOpen className="h-5 w-5" />
            </div>
            <span className="font-serif font-bold text-lg tracking-tight">
              AIPTA
            </span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/auth">
              <Button className="bg-blue-600 hover:bg-blue-700">Member Login</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 lg:py-20 bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-6">
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
                className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight"
              >
                Advancing Physics Education <span className="text-blue-600">Across India</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
              >
                Join 2000+ physics teachers across India. Access expertly curated resources, connect with peers, and elevate your teaching methodology.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
              >
                <Link href="/auth">
                  <Button size="lg" className="px-8 text-base bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    Get Started
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="px-8 text-base border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                  Learn More
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-4 flex justify-center gap-8 text-center flex-wrap"
              >
                <div>
                  <p className="font-bold text-slate-900 text-2xl">2000+</p>
                  <p className="text-sm text-slate-600">Registered Teachers</p>
                </div>
                <div className="h-12 w-px bg-slate-300"></div>
                <div>
                  <p className="font-bold text-slate-900 text-2xl">50+</p>
                  <p className="text-sm text-slate-600">Countries</p>
                </div>
                <div className="h-12 w-px bg-slate-300"></div>
                <div>
                  <p className="font-bold text-slate-900 text-2xl">500+</p>
                  <p className="text-sm text-slate-600">Premium Resources</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
                How AIPTA Works
              </h2>
              <p className="text-base text-slate-600">Simple steps to get started</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="relative text-center">
                <div className="mx-auto w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 font-serif text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Create Account</h3>
                <p className="text-sm text-slate-600">Sign up with your email in seconds</p>
              </div>

              <div className="relative text-center">
                <div className="mx-auto w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 font-serif text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Browse Resources</h3>
                <p className="text-sm text-slate-600">Access our curated collection</p>
              </div>

              <div className="relative text-center">
                <div className="mx-auto w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 font-serif text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Connect & Share</h3>
                <p className="text-sm text-slate-600">Network with physics educators</p>
              </div>

              <div className="relative text-center">
                <div className="mx-auto w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 font-serif text-2xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Grow Your Practice</h3>
                <p className="text-sm text-slate-600">Transform your teaching approach</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
                Why Choose AIPTA
              </h2>
              <p className="text-base text-slate-600">Everything you need to excel</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="pt-10 pb-10 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">500+ Resources</h3>
                  <p className="text-base text-slate-600">Expert-designed study materials, past papers, and teaching guides</p>
                </CardContent>
              </Card>

              <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="pt-10 pb-10 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
                    <Users2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">2000+ Teachers</h3>
                  <p className="text-base text-slate-600">Active community of educators sharing experiences and best practices</p>
                </CardContent>
              </Card>

              <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="pt-10 pb-10 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Expert Support</h3>
                  <p className="text-base text-slate-600">Workshops, webinars, and professional development programs</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto text-center">
              <div>
                <p className="text-5xl font-bold mb-2">2000+</p>
                <p className="text-lg text-blue-100">Teachers rely on us</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">500+</p>
                <p className="text-lg text-blue-100">Resources available</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">50+</p>
                <p className="text-lg text-blue-100">Countries represented</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-48 -mb-48" />
          
          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight text-white">
                  Ready to Transform Your Physics Teaching?
                </h2>
                <p className="text-base lg:text-lg text-blue-100 leading-relaxed">
                  Join thousands of educators who are already making a difference in their students' understanding of physics.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center gap-4 flex-col sm:flex-row"
              >
                <Link href="/auth" className="flex-1 sm:flex-none">
                  <Button size="lg" className="w-full px-8 text-base bg-blue-600 hover:bg-blue-700 font-semibold shadow-lg hover:shadow-xl transition-all">
                    Get Started Now
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" className="flex-1 sm:flex-none px-8 text-base bg-slate-700 hover:bg-slate-600 font-semibold">
                  Schedule a Demo
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
                Everything You Need
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white">
                    <Download className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">Download Materials</h3>
                  <p className="text-slate-600">PDFs, presentations, and worksheets ready to use in class</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">Teaching Ideas</h3>
                  <p className="text-slate-600">Innovative methods and strategies from experienced educators</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white">
                    <Globe className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">Global Network</h3>
                  <p className="text-slate-600">Connect with teachers from across India and around the world</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white">
                    <Target className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">Goal Tracking</h3>
                  <p className="text-slate-600">Monitor student progress and identify areas for improvement</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                  <BookOpen className="h-4 w-4" />
                </div>
                <h4 className="font-semibold text-white">AIPTA</h4>
              </div>
              <p className="text-xs text-slate-400">Advancing physics education across India</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-white transition">Study Materials</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition">Question Papers</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Community</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-white transition">Forum</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition">Events</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition">Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
            <p className="text-slate-400">&copy; {new Date().getFullYear()} All India Physics Teachers Association. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition">Twitter</a>
              <a href="#" className="text-slate-400 hover:text-white transition">LinkedIn</a>
              <a href="#" className="text-slate-400 hover:text-white transition">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
