import { Users, Target, TrendingUp, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-background via-muted/20 to-background py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Learn about our journey, values, and commitment to manufacturing excellence.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Guru Kirpa Mill Industries has been at the forefront of precision fastener manufacturing
                for over two decades. Founded with a vision to provide high-quality industrial fasteners,
                we have grown into a trusted name in the manufacturing sector.
              </p>
              <p>
                Our state-of-the-art facility combines traditional craftsmanship with modern technology
                to produce nuts, bolts, and fasteners that meet the most stringent quality standards. We
                serve diverse industries including automotive, construction, machinery, and infrastructure.
              </p>
              <p>
                What sets us apart is our unwavering commitment to quality, customer satisfaction, and
                continuous improvement. Every product that leaves our facility undergoes rigorous quality
                checks to ensure it meets or exceeds industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Shield className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                Uncompromising standards in every product we manufacture
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Users className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <p className="text-muted-foreground">
                Building lasting relationships through exceptional service
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <TrendingUp className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Continuously improving processes and products
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Target className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Reliability</h3>
              <p className="text-muted-foreground">
                Consistent delivery of quality products on time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-xl border-2 border-border/40 hover:border-accent/50 transition-colors">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To manufacture and deliver precision fasteners that exceed customer expectations through
                continuous innovation, quality excellence, and sustainable practices. We strive to be the
                preferred partner for industries requiring reliable fastening solutions.
              </p>
            </div>

            <div className="p-8 rounded-xl border-2 border-border/40 hover:border-accent/50 transition-colors">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as a global leader in fastener manufacturing, known for our commitment
                to quality, innovation, and customer satisfaction. We aim to set industry benchmarks
                through technological advancement and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
