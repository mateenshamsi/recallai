import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements - matching Features */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50" />
      <div className="absolute top-10 right-20 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container relative mx-auto max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-amber-200/50 p-8 sm:p-12 lg:p-16 text-center space-y-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-[#5C4033]">Ready to Transform Your</span>
            <span className="text-[#8B4513] block mt-2">Learning Experience?</span>
          </h2>
          
          <p className="text-lg text-[#6B4423]/90 max-w-2xl mx-auto leading-relaxed font-medium">
            Join thousands of students and professionals who are already learning smarter, 
            not harder, with Recallai's AI-powered platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#8B4513] to-[#A0522D] hover:from-[#A0522D] hover:to-[#8B4513] text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              Get Started for Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-[#8B4513] text-[#8B4513] hover:bg-amber-100 hover:border-[#A0522D] px-8 py-6 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Demo
            </Button>
          </div>

          <p className="text-sm text-[#6B4423]/80 pt-4 font-medium">
            No credit card required • Free 14-day trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;