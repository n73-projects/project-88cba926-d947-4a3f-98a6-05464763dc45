import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Bygger framtiden,
            <span className="block text-accent">en konstruktion i taget</span>
          </h1>

          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-10 max-w-2xl leading-relaxed">
            Med över 25 års erfarenhet levererar vi hållbara och innovativa byggprojekt i hela Sverige.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="accent" size="lg" className="group">
              Begär offert
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-primary-foreground border-white/30 hover:bg-white hover:text-primary">
              <Phone className="size-5" />
              Ring oss
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">250+</div>
              <div className="text-primary-foreground/80 text-sm sm:text-base">Projekt slutförda</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">25+</div>
              <div className="text-primary-foreground/80 text-sm sm:text-base">Års erfarenhet</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-primary-foreground/80 text-sm sm:text-base">Nöjda kunder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
