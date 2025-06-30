import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Rocket, Building, Globe } from "lucide-react";

export function WhySpainSection() {
  const stats = [
    {
      number: "14,9M",
      label: "utilizadores de cripto previstos",
      description: "Na Espanha para 2025",
      icon: Users
    },
    {
      number: "$110B",
      label: "valor do ecossistema de startups",
      description: "Na Espanha em 2025",
      icon: Rocket
    },
    {
      number: "30K",
      label: "pessoas em eventos cripto",
      description: "Na Espanha em 2025",
      icon: Building
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="text-center content-spacing max-w-4xl mx-auto">
          {/* Header */}
          <div className="space-y-6">
            <Badge variant="outline" className="text-primary flex items-center gap-2 w-fit mx-auto">
              <Globe className="h-3 w-3" />
              Epicentro da Inovação
            </Badge>
            
            <h2 className="text-balance">
              Por que a Espanha é{" "}
              <span className="text-primary">um hub cripto</span>{" "}
              da Europa?
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubra um ecossistema cripto interessante em primeira mão e conecte-se 
              com oportunidades!
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-primary">{stat.number}</div>
                      <div className="text-lg font-medium">{stat.label}</div>
                      <div className="text-sm text-muted-foreground">{stat.description}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}