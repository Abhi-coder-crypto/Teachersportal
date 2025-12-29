import { DashboardLayout } from "@/components/DashboardLayout";
import { useAuth } from "@/hooks/use-auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Video, ArrowRight, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AddResourceDialog } from "@/components/AddResourceDialog";

export default function DashboardHome() {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold tracking-tight text-slate-900">
              Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Welcome back, {user?.name}. Here's what's happening.
            </p>
          </div>
          {isAdmin && <AddResourceDialog />}
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Study Materials</CardTitle>
              <BookOpen className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Access</div>
              <p className="text-xs text-muted-foreground">Comprehensive notes & guides</p>
              <Link href="/dashboard/study-material">
                <Button variant="link" className="px-0 h-auto mt-4 text-blue-600">
                  View All <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Question Papers</CardTitle>
              <FileText className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Practice</div>
              <p className="text-xs text-muted-foreground">Previous years & mock tests</p>
              <Link href="/dashboard/question-papers">
                <Button variant="link" className="px-0 h-auto mt-4 text-amber-600">
                  View All <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Video Lectures</CardTitle>
              <Video className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Learn</div>
              <p className="text-xs text-muted-foreground">Expert sessions & tutorials</p>
              <Link href="/dashboard/videos">
                <Button variant="link" className="px-0 h-auto mt-4 text-green-600">
                  View All <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Admin Section */}
        {isAdmin && (
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-700">
                <UserCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif">Admin Controls</h3>
                <p className="text-sm text-muted-foreground">Manage platform resources and users</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              As an administrator, you can upload new resources, manage existing content, and oversee the platform. Use the "Add Resource" button at the top to contribute new materials.
            </p>
          </div>
        )}

        {/* Recent Updates Placeholder */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold font-serif">Recent Announcements</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-1">
                  <h3 className="font-semibold">Upcoming Physics Workshop</h3>
                  <p className="text-sm text-muted-foreground mt-1">Join us for a virtual workshop on "Modern Approaches to Thermodynamics" next Saturday at 10 AM.</p>
                  <p className="text-xs text-slate-400 mt-2">Posted 2 days ago</p>
                </div>
                <div className="border-l-4 border-amber-500 pl-4 py-1">
                  <h3 className="font-semibold">New Question Bank Added</h3>
                  <p className="text-sm text-muted-foreground mt-1">2024 Model Question Papers for Class 12 have been uploaded to the resources section.</p>
                  <p className="text-xs text-slate-400 mt-2">Posted 5 days ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
