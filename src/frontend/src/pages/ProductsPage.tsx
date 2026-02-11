import { Wrench, Bolt, Nut, Cog } from 'lucide-react';

export default function ProductsPage() {
  const products = [
    {
      icon: Bolt,
      name: 'Hex Bolts',
      description:
        'High-strength hexagonal head bolts for structural and mechanical applications.',
      specs: [
        'Material: Carbon Steel, Stainless Steel, Alloy Steel',
        'Grade: 4.6, 5.8, 8.8, 10.9, 12.9',
        'Finish: Zinc Plated, Hot Dip Galvanized, Black Oxide',
        'Size Range: M6 to M64',
      ],
    },
    {
      icon: Nut,
      name: 'Hex Nuts',
      description: 'Precision-threaded hexagonal nuts designed for secure fastening.',
      specs: [
        'Material: Carbon Steel, Stainless Steel, Brass',
        'Grade: 4, 5, 8, 10, 12',
        'Finish: Plain, Zinc Plated, Hot Dip Galvanized',
        'Size Range: M6 to M64',
      ],
    },
    {
      icon: Wrench,
      name: 'Anchor Bolts',
      description: 'Heavy-duty anchor bolts for concrete and masonry applications.',
      specs: [
        'Material: Carbon Steel, Stainless Steel',
        'Grade: 4.6, 8.8, 10.9',
        'Finish: Zinc Plated, Hot Dip Galvanized',
        'Size Range: M8 to M48',
      ],
    },
    {
      icon: Cog,
      name: 'Machine Screws',
      description: 'Precision machine screws for equipment assembly and maintenance.',
      specs: [
        'Material: Carbon Steel, Stainless Steel',
        'Grade: 4.8, 8.8, 10.9',
        'Finish: Zinc Plated, Black Oxide, Nickel Plated',
        'Size Range: M3 to M20',
      ],
    },
    {
      icon: Bolt,
      name: 'Stud Bolts',
      description: 'Threaded rods for flange connections and high-pressure applications.',
      specs: [
        'Material: Carbon Steel, Stainless Steel, Alloy Steel',
        'Grade: B7, B8, B16',
        'Finish: Plain, Zinc Plated, PTFE Coated',
        'Size Range: M10 to M100',
      ],
    },
    {
      icon: Nut,
      name: 'Lock Nuts',
      description: 'Self-locking nuts designed to resist loosening under vibration.',
      specs: [
        'Material: Carbon Steel, Stainless Steel',
        'Grade: 5, 8, 10',
        'Finish: Zinc Plated, Nylon Insert',
        'Size Range: M6 to M48',
      ],
    },
    {
      icon: Wrench,
      name: 'U-Bolts',
      description: 'U-shaped bolts for pipe mounting and suspension applications.',
      specs: [
        'Material: Carbon Steel, Stainless Steel',
        'Grade: 4.6, 8.8',
        'Finish: Zinc Plated, Hot Dip Galvanized',
        'Size Range: M8 to M36',
      ],
    },
    {
      icon: Cog,
      name: 'Washers',
      description: 'Flat and spring washers for load distribution and locking.',
      specs: [
        'Material: Carbon Steel, Stainless Steel',
        'Type: Flat, Spring, Lock',
        'Finish: Plain, Zinc Plated, Hot Dip Galvanized',
        'Size Range: M6 to M64',
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-background via-muted/20 to-background py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Comprehensive range of precision-engineered fasteners for diverse industrial applications.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl border-2 border-border/40 hover:border-accent/50 transition-all hover:shadow-lg bg-background"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{product.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Specifications:</h4>
                    <ul className="space-y-1">
                      {product.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="text-xs text-muted-foreground">
                          • {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Custom Solutions Available</h2>
            <p className="text-muted-foreground mb-8">
              Don't see what you need? We offer custom manufacturing services to meet your specific
              requirements. Contact us to discuss your project needs.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Request Custom Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
