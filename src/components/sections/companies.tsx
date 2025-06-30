import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Building, Users, Zap, Building2, Shield, KeyRound, Rocket } from "lucide-react";

export function CompaniesSection() {
  const companies = [
    {
      name: "Chiliz",
      type: "Fan Tokens & Sports",
      description: "Plataforma líder mundial em fan tokens, revolucionando o engagement entre clubes e torcedores",
      experience: "Tour pela sede + masterclass sobre fan tokens e Web3 no esporte",
      stats: "100+ clubes",
      icon: Zap,
      website: "chiliz.com"
    },
    {
      name: "Lanzadera",
      type: "Startup Accelerator",
      description: "Maior hub de startups da Espanha, criado por Juan Roig (Mercadona). +400 empresas aceleradas",
      experience: "Campus tour + meetup com portfolio companies + metodologia de inovação",
      stats: "€2B+ investido",
      icon: Rocket,
      website: "lanzadera.es"
    },
    {
      name: "Bit2Me",
      type: "Exchange & Fintech",
      description: "Maior exchange nativa da Europa, fundada em Castellón. Líder em compliance europeia",
      experience: "Acesso exclusivo ao trading floor + sessão técnica com CTO",
      stats: "€1B+ volume",
      icon: Building2,
      website: "bit2me.com"
    },
    {
      name: "Venga",
      type: "Digital Payments",
      description: "Plataforma de pagamentos digitais next-gen, focada em experiência do usuário e inovação",
      experience: "Product demo exclusivo + insights sobre futuro dos pagamentos",
      stats: "Growing fast",
      icon: KeyRound,
      website: "venga.com"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="content-spacing max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="text-primary flex items-center gap-2 w-fit mx-auto">
              <Shield className="h-3 w-3" />
              Acesso VIP Exclusivo
            </Badge>
            
            <h2 className="text-balance">
              Empresas cripto que você{" "}
              <span className="text-primary">nunca visitaria</span>{" "}
              sozinho
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Portas normalmente fechadas, agora abertas para você
            </p>
          </div>
          
          {/* Main Companies Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {companies.map((company, index) => {
              const IconComponent = company.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-200 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-primary font-medium">
                        {company.type}
                      </Badge>
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  
                  <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                    {company.name}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  
                  <div className="text-sm text-muted-foreground">
                    {company.website}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {company.description}
                  </p>
                  
                  {/* Experience highlight */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2 text-sm font-medium text-primary">
                      <Zap className="h-4 w-4" />
                      Sua experiência:
                    </div>
                    <p className="text-sm text-foreground">
                      {company.experience}
                    </p>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building className="h-4 w-4" />
                      {company.stats}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      Networking
                    </div>
                  </div>
                </CardContent>
              </Card>
              );
            })}
          </div>
          
          
          {/* Value proposition */}
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 text-center">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <Zap className="h-3 w-3 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">
                  O que torna isso especial?
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="font-medium mb-1">Acesso restrito</div>
                  <div className="text-muted-foreground">Locais normalmente fechados ao público</div>
                </div>
                <div>
                  <div className="font-medium mb-1">Networking qualificado</div>
                  <div className="text-muted-foreground">Apenas 25 pessoas selecionadas</div>
                </div>
                <div>
                  <div className="font-medium mb-1">Conteúdo exclusivo</div>
                  <div className="text-muted-foreground">Demos de produtos não lançados</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}