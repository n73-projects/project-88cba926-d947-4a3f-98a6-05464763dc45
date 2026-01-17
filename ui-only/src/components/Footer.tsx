import { Building2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
                <Building2 className="size-6 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">ByggExpert</span>
            </div>
            <p className="text-primary-foreground/80 max-w-md">
              Bygger framtiden med hållbara och innovativa lösningar sedan 1998.
              Din pålitliga partner för alla byggprojekt.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Tjänster</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Kommersiella byggnader</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Bostadsprojekt</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Renovering</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Projektledning</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Företag</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Om oss</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Karriär</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Kontakt</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Integritet</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          © 2024 ByggExpert AB. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  );
}
