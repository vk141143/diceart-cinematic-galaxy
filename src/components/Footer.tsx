
import { Link } from "react-router-dom";
import { ExternalLink, Instagram, Twitter, Youtube, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-12 text-muted-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Diceart Films</h3>
            <p className="text-sm">
              Pushing the boundaries of visual storytelling with innovative filmmaking and gaming-inspired aesthetics.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#services" 
                  className="text-sm hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#events" 
                  className="text-sm hover:text-primary transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-sm hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#blog" 
                  className="text-sm hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-sm hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-sm hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/legal" 
                  className="text-sm hover:text-primary transition-colors flex items-center gap-1"
                >
                  Terms & Conditions
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/legal" 
                  className="text-sm hover:text-primary transition-colors flex items-center gap-1"
                  onClick={() => document.querySelector('[data-value="privacy"]')?.click()}
                >
                  Privacy Policy
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/legal" 
                  className="text-sm hover:text-primary transition-colors flex items-center gap-1"
                  onClick={() => document.querySelector('[data-value="refunds"]')?.click()}
                >
                  Cancellation & Refunds
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
            </div>
            <p className="text-sm">
              Email: info@diceartfilms.com<br />
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>
        
        <div className="border-t border-muted mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {currentYear} Diceart Films. All rights reserved.</p>
          <p className="text-xs mt-2 md:mt-0">
            Designed & Developed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
