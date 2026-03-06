import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, GraduationCap, Award, BookOpen, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutISTQB() {
  const benefits = [
    {
      title: "Global Recognition",
      description: "ISTQB is the world's most successful scheme for certifying software testers, with over 1 million exams delivered in 130 countries.",
      icon: <Globe className="w-6 h-6 text-primary" />
    },
    {
      title: "Standardized Language",
      description: "It provides a common vocabulary and standardized testing practices used by professionals worldwide.",
      icon: <Users className="w-6 h-6 text-primary" />
    },
    {
      title: "Career Advancement",
      description: "Certification demonstrates your commitment to the profession and mastery of core testing principles.",
      icon: <Award className="w-6 h-6 text-primary" />
    }
  ];

  const levels = [
    {
      name: "Foundation Level",
      desc: "The entry point, covering the fundamental principles and terminology of software testing.",
      active: true
    },
    {
      name: "Advanced Level",
      desc: "Focused on specific roles like Test Manager, Test Analyst, and Technical Test Analyst.",
      active: false
    },
    {
      name: "Expert Level",
      desc: "In-depth testing knowledge for experienced professionals seeking specialization.",
      active: false
    }
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              What is ISTQB?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              The International Software Testing Qualifications Board (ISTQB) is the world leader in software testing certification.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border/40 mb-16">
            <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Certification Levels
            </h2>
            <div className="space-y-8">
              {levels.map((level, i) => (
                <div key={i} className={`flex gap-6 ${!level.active ? 'opacity-60' : ''}`}>
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${level.active ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                      {i + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                      {level.name}
                      {level.active && <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full uppercase tracking-wider">Our Current Focus</span>}
                    </h4>
                    <p className="text-muted-foreground">
                      {level.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold">Why Get Certified?</h3>
              <ul className="space-y-4">
                {[
                  "Global standard for testing professionals",
                  "Structured path for career progression",
                  "Verified proof of specialized testing skills",
                  "Enhanced employability and market value"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                Exam Structure
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                The Foundation Level exam consists of 40 multiple-choice questions. You have 60 minutes to complete the exam (with extra time for non-native speakers). A score of 65% (26 marks) is required to pass.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-border/40 text-center">
                  <div className="text-2xl font-bold text-primary">40</div>
                  <div className="text-[10px] uppercase text-muted-foreground">Questions</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-border/40 text-center">
                  <div className="text-2xl font-bold text-primary">60</div>
                  <div className="text-[10px] uppercase text-muted-foreground">Minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
