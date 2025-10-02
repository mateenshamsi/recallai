import { Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-amber-200/50 overflow-hidden">
      {/* Background matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50" />
      
      <div className="container relative mx-auto max-w-6xl">
        {/* Logo */}
        <div className="flex  -mx-3">
          <img src="/logo.png" alt="Recallai" className="h-12" />
        </div>

        {/* Bottom Bar */}
        <div className=" flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#6B4423]/80 font-medium">
            © 2025 Recallai. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-amber-200/50 flex items-center justify-center text-[#6B4423]/80 hover:text-white hover:bg-[#8B4513] hover:border-[#8B4513] transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-amber-200/50 flex items-center justify-center text-[#6B4423]/80 hover:text-white hover:bg-[#8B4513] hover:border-[#8B4513] transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-amber-200/50 flex items-center justify-center text-[#6B4423]/80 hover:text-white hover:bg-[#8B4513] hover:border-[#8B4513] transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;