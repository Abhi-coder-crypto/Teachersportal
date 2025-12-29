import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, ChevronRight } from "lucide-react";
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
              All India Physics Teachers Association
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
        <section className="relative overflow-hidden py-20 lg:py-32 bg-slate-50">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-serif text-4xl font-extrabold tracking-tight sm:text-6xl text-slate-900"
              >
                Advancing Physics Education Across India
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                Connecting educators, sharing resources, and fostering excellence in physics teaching for a better tomorrow.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/auth">
                  <Button size="lg" className="h-12 px-8 text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    Join the Community
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="h-12 px-8 text-lg">
                  Learn More
                </Button>
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
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-none hover:bg-slate-50 transition-colors">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-serif">Curated Resources</h3>
                  <p className="text-muted-foreground">Access a vast library of study materials, question papers, and teaching aids developed by experts.</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-none hover:bg-slate-50 transition-colors">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-serif">Teacher Community</h3>
                  <p className="text-muted-foreground">Connect with fellow physics educators, share insights, and collaborate on best practices.</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-none hover:bg-slate-50 transition-colors">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-serif">Professional Growth</h3>
                  <p className="text-muted-foreground">Participate in workshops, seminars, and training programs to enhance your teaching skills.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Mission Statement */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-serif font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              To empower physics teachers with the tools, knowledge, and network needed to inspire the next generation of scientists and innovators across India.
            </p>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-slate-50 border-t">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} All India Physics Teachers Association. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
