import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
              <Building2 className="size-6 text-accent-foreground" />
            </div>
            <span className="text-xl font-bold text-primary-foreground">ByggExpert</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#tjanster" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Tjänster
            </a>
            <a href="#om-oss" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Om oss
            </a>
            <a href="#projekt" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Projekt
            </a>
            <Button variant="accent" size="sm">
              Kontakt
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
