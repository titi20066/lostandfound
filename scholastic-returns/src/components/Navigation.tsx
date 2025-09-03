import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">Lost & Found</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
                How It Works
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="default" size="sm" className="bg-accent-gradient hover:opacity-90 transition-opacity">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="#features" className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                How It Works
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </a>
               <div className="flex flex-col space-y-2 pt-4">
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="default" size="sm" className="bg-accent-gradient hover:opacity-90 transition-opacity w-full">
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;