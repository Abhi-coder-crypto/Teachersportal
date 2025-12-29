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
        <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <Zap className="h-4 w-4" />
                  Empowering Physics Education
                </div>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-serif text-5xl font-extrabold tracking-tight sm:text-6xl text-slate-900 leading-tight"
              >
                Advancing Physics Education <span className="text-blue-600">Across India</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
              >
                Join 2000+ physics teachers. Access curated resources, connect with educators worldwide, and transform your teaching. All in one secure platform.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              >
                <Link href="/auth">
                  <Button size="lg" className="h-12 px-8 text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    Get Started Now
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="h-12 px-8 text-lg">
                  Learn More
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="pt-8 flex justify-center gap-8 text-center"
              >
                <div>
                  <p className="text-2xl font-bold text-slate-900">2000+</p>
                  <p className="text-sm text-slate-600">Physics Teachers</p>
                </div>
                <div className="h-12 w-px bg-slate-200"></div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">50+</p>
                  <p className="text-sm text-slate-600">Countries</p>
                </div>
                <div className="h-12 w-px bg-slate-200"></div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">500+</p>
                  <p className="text-sm text-slate-600">Resources</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Abstract background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-3xl" />
            <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-indigo-100/50 blur-3xl" />
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">
                Everything You Need
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Comprehensive tools and resources designed specifically for physics educators.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8 text-center space-y-4">
                  <div className="mx-auto w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold font-serif">Curated Resources</h3>
                  <p className="text-slate-600">Access 500+ expertly designed study materials, solved papers, and teaching guides for all ICSE classes.</p>
                </CardContent>
              </Card>

              <Card className="border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8 text-center space-y-4">
                  <div className="mx-auto w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
                    <Users2 className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold font-serif">Global Community</h3>
                  <p className="text-slate-600">Connect with 2000+ physics educators from India and 50+ countries. Share insights and best practices.</p>
                </CardContent>
              </Card>

              <Card className="border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8 text-center space-y-4">
                  <div className="mx-auto w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                    <Award className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold font-serif">Professional Growth</h3>
                  <p className="text-slate-600">Access workshops, seminars, and training programs from industry experts and seasoned educators.</p>
                </CardContent>
              </Card>

              <Card className="border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8 text-center space-y-4">
                  <div className="mx-auto w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                    <Globe className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold font-serif">Secure Access</h3>
                  <p className="text-slate-600">Enterprise-grade security ensures your content is protected. Access from anywhere, anytime.</p>
                </CardContent>
              </Card>

              <Card className="border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8 text-center space-y-4">
                  <div className="mx-auto w-14 h-14 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center">
                    <BarChart3 className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold font-serif">Yearly Updates</h3>
                  <p className="text-slate-600">Resources updated annually with latest curriculum changes and exam patterns.</p>
                </CardContent>
              </Card>

              <Card className="border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8 text-center space-y-4">
                  <div className="mx-auto w-14 h-14 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center">
                    <Zap className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold font-serif">Quick Access</h3>
                  <p className="text-slate-600">Intuitive dashboard makes finding resources easy. Filter by year, class, and topic instantly.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-5xl font-bold mb-2">2000+</p>
                <p className="text-blue-100">Active Physics Teachers</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">500+</p>
                <p className="text-blue-100">Learning Resources</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">50+</p>
                <p className="text-blue-100">Countries Represented</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">5+</p>
                <p className="text-blue-100">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">
                About AIPTA
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                  The All India Physics Teachers Association (AIPTA) is a premier organization dedicated to advancing physics education across India and beyond. We represent teachers, paper setters, book authors, and senior educators passionate about transforming how physics is taught.
                </p>
                <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                  Founded on the principles of excellence, collaboration, and innovation, AIPTA provides a unified platform where physics educators can access cutting-edge resources, share experiences, and grow professionally.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Our mission is simple: empower every physics teacher with the tools, knowledge, and community support they need to inspire the next generation of scientists and innovators.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                        <BookOpen className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">ICSE Focused</h4>
                      <p className="text-slate-600 text-sm">All resources aligned with ICSE curriculum standards</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                        <Users className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Expert Community</h4>
                      <p className="text-slate-600 text-sm">Resources created by experienced educators and authors</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                        <Award className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Trusted Platform</h4>
                      <p className="text-slate-600 text-sm">Secure and reliable access for all members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-48 -mb-48" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30">
                  <Zap className="h-4 w-4" />
                  Join the Physics Education Revolution
                </div>
                <h2 className="text-5xl font-serif font-bold mb-6 leading-tight">
                  Ready to Transform Your Teaching?
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Access 500+ curated resources, connect with 2000+ educators worldwide, and elevate your teaching practice. Join thousands of physics teachers who are transforming education one classroom at a time.
                </p>
              </motion.div>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-4 mb-12"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                  <p className="font-semibold text-sm">500+ Resources</p>
                  <p className="text-xs text-blue-100 mt-1">Study materials & papers</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                  <Users2 className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                  <p className="font-semibold text-sm">2000+ Teachers</p>
                  <p className="text-xs text-blue-100 mt-1">From across India</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                  <Globe className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                  <p className="font-semibold text-sm">50+ Countries</p>
                  <p className="text-xs text-blue-100 mt-1">Global community</p>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex justify-center gap-4 flex-col sm:flex-row"
              >
                <Link href="/auth" className="flex-1 sm:flex-none">
                  <Button size="lg" className="w-full h-14 px-12 text-lg bg-white text-blue-700 hover:bg-slate-50 font-semibold shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all">
                    Get Started Now
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="flex-1 sm:flex-none h-14 px-12 text-lg border-2 border-white text-white hover:bg-white/10 font-semibold">
                  Learn More
                </Button>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center mt-12 text-blue-100"
              >
                <p className="text-sm">🔒 Secure login · 📱 Mobile friendly · 🌐 Access anywhere</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-slate-50 border-t">
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
