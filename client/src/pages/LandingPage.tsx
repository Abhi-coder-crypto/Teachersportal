import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ChevronRight, Users, Award, Globe, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2 rounded-md">
              <BookOpen className="h-5 w-5" />
            </div>
            <span className="font-semibold text-lg text-slate-900">AIPTA</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/auth">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign In</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-blue-200 font-medium text-sm">EDUCATOR NETWORK</p>
                  <h1 className="text-5xl font-bold leading-tight mt-2">
                    Transform Physics Education Across India
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-blue-100 text-lg leading-relaxed"
                >
                  Join a network of 2000+ physics educators. Access premium resources, share best practices, and develop your teaching excellence with peer collaboration.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex gap-4 pt-4"
                >
                  <Link href="/auth">
                    <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100 font-semibold">
                      Get Started
                      <ChevronRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                    Learn More
                  </Button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <Users className="h-8 w-8 text-blue-300" />
                    </div>
                    <div>
                      <p className="font-semibold">2000+</p>
                      <p className="text-blue-200 text-sm">Active Educators</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <Globe className="h-8 w-8 text-blue-300" />
                    </div>
                    <div>
                      <p className="font-semibold">50+</p>
                      <p className="text-blue-200 text-sm">Countries Connected</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <TrendingUp className="h-8 w-8 text-blue-300" />
                    </div>
                    <div>
                      <p className="font-semibold">500+</p>
                      <p className="text-blue-200 text-sm">Curated Resources</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Why Educators Choose AIPTA
              </h2>
              <p className="text-slate-600 text-lg">Comprehensive tools to elevate your teaching practice</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="pt-8 pb-8">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Premium Resources</h3>
                  <p className="text-slate-600">500+ expertly curated teaching materials, question papers, and assessment tools</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="pt-8 pb-8">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Educator Network</h3>
                  <p className="text-slate-600">Connect with experienced physics teachers, share strategies, and collaborate on innovative approaches</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="pt-8 pb-8">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Professional Growth</h3>
                  <p className="text-slate-600">Workshops, certifications, and training programs designed for continuous skill development</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Getting Started Is Simple</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: "1", title: "Sign Up", desc: "Create your educator account" },
                { num: "2", title: "Explore", desc: "Browse our resource library" },
                { num: "3", title: "Connect", desc: "Join the educator community" },
                { num: "4", title: "Grow", desc: "Advance your teaching practice" }
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold">Ready to Transform Your Teaching?</h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Join a community of dedicated physics educators improving education across India
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Link href="/auth">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100 font-semibold">
                    Get Started Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 text-white p-2 rounded-md">
                  <BookOpen className="h-4 w-4" />
                </div>
                <span className="font-semibold text-white">AIPTA</span>
              </div>
              <p className="text-sm">Advancing physics education across India through community and collaboration</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Teaching Materials</a></li>
                <li><a href="#" className="hover:text-white transition">Question Papers</a></li>
                <li><a href="#" className="hover:text-white transition">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Community</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Forums</a></li>
                <li><a href="#" className="hover:text-white transition">Events</a></li>
                <li><a href="#" className="hover:text-white transition">Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} All India Physics Teachers Association</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
