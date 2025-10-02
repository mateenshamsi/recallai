"use client"
import { Brain, Zap, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Recall",
      description: "Advanced algorithms adapt to your learning style, optimizing memory retention with personalized review schedules.",
    },
    {
      icon: Zap,
      title: "Instant Insights",
      description: "Get real-time analytics on your progress, identifying strengths and areas that need more focus.",
    },
    {
      icon: Target,
      title: "Smart Goals",
      description: "Set and track learning objectives with intelligent recommendations tailored to your pace and performance.",
    },
    {
      icon: TrendingUp,
      title: "Progressive Learning",
      description: "Build knowledge systematically with spaced repetition and active recall techniques proven by science.",
    },
  ];

  return (
    <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements - matching Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50" />
      <div className="absolute top-10 right-20 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-[#5C4033]">Powerful Features for</span>
            <span className="text-[#8B4513] block mt-2">Effective Learning</span>
          </h2>
          <p className="text-lg text-[#6B4423]/90 max-w-2xl mx-auto leading-relaxed font-medium pt-4">
            Everything you need to accelerate your learning journey and achieve your goals faster.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-white/80 backdrop-blur-sm border-amber-200/50 hover:border-amber-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-[#bb9457] group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#5C4033] group-hover:text-[#8B4513] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[#6B4423]/85 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;