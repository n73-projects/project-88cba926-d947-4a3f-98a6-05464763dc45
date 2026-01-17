import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Låt oss bygga tillsammans
            </h2>
            <p className="text-xl text-muted-foreground">
              Kontakta oss idag för en kostnadsfri konsultation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4">
                <Phone className="size-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Telefon</h3>
              <p className="text-muted-foreground">+46 8 123 456 78</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4">
                <Mail className="size-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">E-post</h3>
              <p className="text-muted-foreground">info@byggexpert.se</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4">
                <MapPin className="size-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Adress</h3>
              <p className="text-muted-foreground">Byggvägen 12, Stockholm</p>
            </div>
          </div>

          <div className="bg-card p-8 sm:p-12 rounded-lg shadow-card">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Namn
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Ditt namn"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    E-post
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="din@email.se"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Meddelande
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Berätta om ditt projekt..."
                ></textarea>
              </div>

              <Button variant="accent" size="lg" className="w-full">
                Skicka meddelande
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
