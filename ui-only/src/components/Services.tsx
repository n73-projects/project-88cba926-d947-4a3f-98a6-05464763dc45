import { Building2, Home, Hammer, Wrench } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Kommersiella byggnader",
    description: "Från kontor till köpcentra - vi bygger hållbara kommersiella fastigheter som står sig över tid.",
  },
  {
    icon: Home,
    title: "Bostadsprojekt",
    description: "Villor, radhus och flerbostadshus byggda med precision och omtanke för ditt framtida hem.",
  },
  {
    icon: Hammer,
    title: "Renovering & ombyggnad",
    description: "Vi ger nytt liv åt befintliga byggnader med modern teknik och tidlös design.",
  },
  {
    icon: Wrench,
    title: "Projektledning",
    description: "Professionell projektledning från planering till färdigställande - vi ser till att allt flyter smidigt.",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Våra tjänster
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vi erbjuder kompletta lösningar för alla typer av byggprojekt
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-300">
                <service.icon className="size-7 text-accent-foreground" />
              </div>

              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
