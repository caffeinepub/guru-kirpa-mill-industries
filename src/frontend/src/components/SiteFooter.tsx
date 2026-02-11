import { SiLinkedin, SiFacebook } from 'react-icons/si';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'gkmi-website'
  );

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Guru Kirpa Mill Industries</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Leading manufacturer of high-quality nuts, bolts, and precision fasteners. Committed to
              excellence in every product.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="text-muted-foreground hover:text-accent transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/manufacturing"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Manufacturing
                </a>
              </li>
              <li>
                <a href="/quality" className="text-muted-foreground hover:text-accent transition-colors">
                  Quality Standards
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  Industrial Area, Phase 2<br />
                  Punjab, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:info@gkmi.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  info@gkmi.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Guru Kirpa Mill Industries. All rights reserved.
          </p>
          <p className="mt-2">
            Built with{' '}
            <span className="text-accent">❤</span> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
