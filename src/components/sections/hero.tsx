import { ArrowRight, Play, Rocket, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary/20 to-secondary/40">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="content-spacing">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit text-primary font-medium flex items-center gap-2">
                <Rocket className="h-3 w-3" />
                Experiência Exclusiva • Apenas 25 Vagas
              </Badge>
              
              <h1 className="text-balance">
                Mergulhe no coração da{" "}
                <span className="text-primary">inovação cripto</span>{" "}
                europeia
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                4 dias de acesso a empresas do setor, proporcionando uma compreensão 
                aprofundada de como a indústria cripto está se moldando, além de uma 
                valiosa oportunidade para expandir seu networking.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="btn-primary group">
                Quero essa experiência
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button size="lg" variant="outline" className="group">
                <Play className="mr-2 h-4 w-4" />
                Ver vídeo (30s)
              </Button>
            </div>
          </div>
          
          {/* Right: Visual Grid */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 border-0 shadow-sm">
              <div className="h-full flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">€3,750</div>
                  <div className="text-sm text-muted-foreground">Exceto voos, hotel e alimentação</div>
                </div>
              </div>
            </Card>
            
            <Card className="row-span-2 bg-gradient-to-b from-accent/10 to-primary/10 border-0 shadow-sm">
              <div className="h-full flex items-center justify-center p-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-base font-medium">Madrid</div>
                    <div className="text-base font-medium">Castellón</div>
                    <div className="text-base font-medium">Valência</div>
                    <div className="text-base font-medium">Barcelona</div>
                  </div>
                  <div className="text-sm text-muted-foreground pt-1">4 cidades, 4 dias</div>
                </div>
              </div>
            </Card>
            
            <Card className="aspect-square bg-gradient-to-tl from-primary/10 to-accent/10 border-0 shadow-sm">
              <div className="h-full flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-accent">25</div>
                  <div className="text-sm text-muted-foreground">Vagas limitadas</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}