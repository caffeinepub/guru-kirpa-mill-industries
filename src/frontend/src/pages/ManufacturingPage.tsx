import { Factory, Cpu, Gauge, Package } from 'lucide-react';

export default function ManufacturingPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-background via-muted/20 to-background py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Manufacturing Excellence</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            State-of-the-art infrastructure and advanced processes ensuring precision and quality.
          </p>
        </div>
      </section>

      {/* Infrastructure Overview */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Manufacturing Facility</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our modern manufacturing facility spans over 50,000 square feet and is equipped with
              cutting-edge machinery and technology. We combine traditional manufacturing expertise with
              advanced automation to deliver consistent, high-quality products.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our facility operates under strict quality control protocols and environmental standards,
              ensuring sustainable and responsible manufacturing practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl border-2 border-border/40 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Factory className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Production Capacity</h3>
              <p className="text-muted-foreground text-sm">
                500+ tons per month with scalable production lines
              </p>
            </div>

            <div className="p-6 rounded-xl border-2 border-border/40 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Cpu className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">CNC Machines</h3>
              <p className="text-muted-foreground text-sm">
                20+ precision CNC machines for complex operations
              </p>
            </div>

            <div className="p-6 rounded-xl border-2 border-border/40 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Gauge className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Control</h3>
              <p className="text-muted-foreground text-sm">
                Advanced testing equipment and 100% inspection protocols
              </p>
            </div>

            <div className="p-6 rounded-xl border-2 border-border/40 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Package className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Inventory</h3>
              <p className="text-muted-foreground text-sm">
                Large stock capacity for quick order fulfillment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Manufacturing Process</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Raw Material Selection</h3>
                <p className="text-muted-foreground">
                  We source premium-grade raw materials from certified suppliers, ensuring consistency
                  and quality from the start. All materials undergo rigorous incoming inspection.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Precision Machining</h3>
                <p className="text-muted-foreground">
                  Our CNC machines and automated production lines ensure precise dimensions and
                  consistent quality. Advanced tooling and programming minimize waste and maximize
                  efficiency.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Heat Treatment</h3>
                <p className="text-muted-foreground">
                  Controlled heat treatment processes enhance material properties, ensuring optimal
                  strength and durability. Our furnaces maintain precise temperature control for
                  consistent results.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Surface Treatment</h3>
                <p className="text-muted-foreground">
                  Various finishing options including zinc plating, galvanizing, and coating provide
                  corrosion resistance and aesthetic appeal. Our finishing lines meet international
                  standards.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Inspection & Packaging</h3>
                <p className="text-muted-foreground">
                  Final inspection using advanced measuring equipment ensures every product meets
                  specifications. Products are carefully packaged to prevent damage during transit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Technology & Innovation</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We continuously invest in the latest manufacturing technology to improve efficiency,
              precision, and quality. Our commitment to innovation ensures we stay ahead of industry
              trends and customer expectations.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-muted-foreground">
                  Computer-aided design (CAD) and manufacturing (CAM) systems
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-muted-foreground">
                  Automated material handling and inventory management
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-muted-foreground">
                  Real-time production monitoring and quality tracking
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-muted-foreground">
                  Energy-efficient equipment and sustainable practices
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
