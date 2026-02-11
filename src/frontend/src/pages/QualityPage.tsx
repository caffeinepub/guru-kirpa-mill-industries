import { Award, CheckCircle, FileCheck, Shield } from 'lucide-react';

export default function QualityPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-background via-muted/20 to-background py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Quality Standards</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Uncompromising commitment to quality through rigorous standards and continuous improvement.
          </p>
        </div>
      </section>

      {/* Quality Philosophy */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Quality Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Quality is not just a goal at Guru Kirpa Mill Industries—it's the foundation of everything
              we do. We believe that consistent quality is achieved through systematic processes,
              continuous monitoring, and a culture of excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every product undergoes multiple quality checks throughout the manufacturing process,
              ensuring that only products meeting our stringent standards reach our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications & Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-background border-2 border-border/40 hover:border-accent/50 transition-colors text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Award className="text-accent" size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">ISO 9001:2015</h3>
              <p className="text-sm text-muted-foreground">Quality Management System</p>
            </div>

            <div className="p-6 rounded-xl bg-background border-2 border-border/40 hover:border-accent/50 transition-colors text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="text-accent" size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">ISO 14001</h3>
              <p className="text-sm text-muted-foreground">Environmental Management</p>
            </div>

            <div className="p-6 rounded-xl bg-background border-2 border-border/40 hover:border-accent/50 transition-colors text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <FileCheck className="text-accent" size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">ASTM Standards</h3>
              <p className="text-sm text-muted-foreground">Material & Testing Compliance</p>
            </div>

            <div className="p-6 rounded-xl bg-background border-2 border-border/40 hover:border-accent/50 transition-colors text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-accent" size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">DIN Standards</h3>
              <p className="text-sm text-muted-foreground">German Industrial Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Process */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Quality Control Process</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-6 rounded-xl border-2 border-border/40">
              <h3 className="text-xl font-bold mb-3">Incoming Material Inspection</h3>
              <p className="text-muted-foreground">
                All raw materials are inspected upon arrival. We verify material certificates, conduct
                chemical composition analysis, and perform mechanical property tests to ensure compliance
                with specifications.
              </p>
            </div>

            <div className="p-6 rounded-xl border-2 border-border/40">
              <h3 className="text-xl font-bold mb-3">In-Process Quality Checks</h3>
              <p className="text-muted-foreground">
                Regular monitoring during production ensures dimensional accuracy and surface quality.
                Statistical process control (SPC) methods help maintain consistency and identify trends
                before issues arise.
              </p>
            </div>

            <div className="p-6 rounded-xl border-2 border-border/40">
              <h3 className="text-xl font-bold mb-3">Final Product Inspection</h3>
              <p className="text-muted-foreground">
                Comprehensive final inspection includes dimensional verification, visual examination,
                hardness testing, and functional testing. Products are inspected against customer
                specifications and industry standards.
              </p>
            </div>

            <div className="p-6 rounded-xl border-2 border-border/40">
              <h3 className="text-xl font-bold mb-3">Documentation & Traceability</h3>
              <p className="text-muted-foreground">
                Complete documentation for every batch ensures full traceability. Material certificates,
                test reports, and inspection records are maintained and available upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Equipment */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Testing Equipment & Capabilities</h2>
            <p className="text-muted-foreground mb-6">
              Our quality control laboratory is equipped with advanced testing equipment to verify
              product specifications and performance:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={16} />
                  <span className="text-muted-foreground text-sm">
                    Coordinate Measuring Machine (CMM)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={16} />
                  <span className="text-muted-foreground text-sm">Hardness Testing Equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={16} />
                  <span className="text-muted-foreground text-sm">Tensile Testing Machine</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={16} />
                  <span className="text-muted-foreground text-sm">
                    Optical Comparator & Projector
                  </span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={16} />
                  <span className="text-muted-foreground text-sm">
                    Surface Roughness Tester
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={16} />
                  <span className="text-muted-foreground text-sm">
                    Salt Spray Testing Chamber
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={16} />
                  <span className="text-muted-foreground text-sm">
                    Spectrometer for Material Analysis
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={16} />
                  <span className="text-muted-foreground text-sm">
                    Thread Gauges & Measuring Tools
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Improvement */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Continuous Improvement</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to continuous improvement through regular audits, employee training, and
              customer feedback. Our quality management system is regularly reviewed and updated to
              incorporate best practices and address emerging challenges. This commitment ensures we
              consistently deliver products that meet or exceed expectations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
