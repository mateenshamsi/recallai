"use client"
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play, Users, TrendingUp, BookOpen, Star } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  // Animation trigger on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Rotating stats animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "10k+", label: "Active Learners", icon: Users },
    { value: "95%", label: "Retention Rate", icon: TrendingUp },
    { value: "50+", label: "Subjects", icon: BookOpen },
  ];

  const handleStartLearning = () => {
    // Add analytics tracking or navigation logic here
    console.log("Start Learning clicked");
  };

  const handleWatchDemo = () => {
    // Add demo video modal or navigation logic here
    console.log("Watch Demo clicked");
  };

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container relative mx-auto max-w-6xl">
        <div 
          className={`text-center space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/80 backdrop-blur-sm border border-amber-300/50 shadow-sm hover:shadow-md transition-all duration-300 group">
            <Sparkles className="w-4 h-4 text-orange-600 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm font-medium text-amber-900">AI-Powered Learning Platform</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-[#bb9457] block">Remember More,</span>
              <span className="text-[#0a0908] block">Learn Better</span>
            </h1>
            
            {/* Animated underline */}
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto rounded-full" />
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-amber-800/90 max-w-2xl mx-auto leading-relaxed font-medium">
            Transform the way you learn with AI-powered recall techniques. 
            Boost retention, ace your exams, and master any subject effortlessly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button 
              size="lg" 
              onClick={handleStartLearning}
              className="bg-gradient-to-r from-[#c6ac8f] to-[#bb9457] hover:from-[#bb9457] hover:to-[#a68b5b] text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              Start Learning Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleWatchDemo}
              className="border-2 border-[#5e503f] text-amber-900 hover:bg-amber-100 hover:border-amber-600 px-8 py-6 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-sm text-amber-700 font-medium">4.9/5 from 2,000+ reviews</span>
          </div>

     

         
        </div>
      </div>
    </section>
  );
};

export default Hero;