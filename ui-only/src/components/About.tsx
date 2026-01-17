import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Certifierade yrkesmän med gedigen erfarenhet",
  "Hållbara material och moderna byggteknik",
  "Transparent kommunikation genom hela projektet",
  "Garanti på alla våra arbeten",
];

export function About() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Byggexperter sedan 1998
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Vi är ett familjeägt byggföretag baserat i Stockholm med uppdrag över hela Sverige.
              Vår passion för kvalitet och hållbarhet driver oss att leverera projekt som överträffar
              förväntningar.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="size-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg">
              Läs mer om oss
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
                alt="Byggarbetsplats"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-lg shadow-elegant max-w-xs">
              <div className="text-3xl font-bold text-accent mb-1">98%</div>
              <div className="text-sm text-muted-foreground">
                av våra kunder rekommenderar oss till andra
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
