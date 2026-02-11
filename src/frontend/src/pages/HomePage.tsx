import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle, Clock, Award, Factory } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="/assets/generated/hero-fasteners.dim_1920x800.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Precision Fasteners for{' '}
              <span className="text-accent">Industrial Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Guru Kirpa Mill Industries delivers high-quality nuts, bolts, and precision fasteners
              engineered to meet the most demanding industrial standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Get a Quote
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg border-2 border-border hover:bg-accent/10 transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border/40 hover:border-accent/50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Award className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                ISO-certified manufacturing processes ensuring consistent quality and reliability in
                every product.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border/40 hover:border-accent/50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Factory className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Wide Product Range</h3>
              <p className="text-muted-foreground">
                Comprehensive selection of fasteners in various materials, grades, and sizes to meet
                diverse industrial needs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border/40 hover:border-accent/50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Clock className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Efficient production and logistics ensuring timely delivery to keep your projects on
                schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Guru Kirpa Mill Industries?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With decades of experience in precision manufacturing, we have established ourselves as
                a trusted partner for industries requiring reliable fastening solutions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="text-foreground">Advanced Manufacturing</strong>
                    <p className="text-sm text-muted-foreground">
                      State-of-the-art machinery and precision tooling for consistent quality
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="text-foreground">Quality Assurance</strong>
                    <p className="text-sm text-muted-foreground">
                      Rigorous testing and inspection at every stage of production
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="text-foreground">Custom Solutions</strong>
                    <p className="text-sm text-muted-foreground">
                      Tailored fastener solutions to meet specific project requirements
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="text-foreground">Competitive Pricing</strong>
                    <p className="text-sm text-muted-foreground">
                      Best value without compromising on quality or service
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/icons-fasteners-set.dim_512x512.png"
                alt="Fastener icons"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-accent/10 via-accent/5 to-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your fastener requirements and discover how we can support your
            industrial projects.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            Contact Us Now
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
