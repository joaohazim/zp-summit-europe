import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Building2, Zap, Target, Calendar, Rocket } from "lucide-react";

export function AgendaSection() {
  const agenda = [
    {
      day: 1,
      date: "Segunda-feira",
      location: "Madrid",
      title: "Chiliz + Crypto Plaza",
      description: "Tour exclusivo pela Chiliz (fan tokens) + Crypto Plaza com +15 startups cripto. Networking com founders locais.",
      highlights: ["Chiliz headquarters tour", "Crypto Plaza deep dive", "Fan tokens masterclass"],
      icon: Building2,
      color: "from-primary/10 to-primary/5",
      cityImage: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80"
    },
    {
      day: 2,
      date: "Terça-feira", 
      location: "Valencia",
      title: "Lanzadera Innovation Hub",
      description: "Visita ao maior hub de startups da Espanha. Como Juan Roig construiu o ecossistema de inovação da Mercadona.",
      highlights: ["Lanzadera campus tour", "Portfolio companies meetup", "Innovation methodology"],
      icon: Rocket,
      color: "from-accent/10 to-accent/5",
      cityImage: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&q=80"
    },
    {
      day: 3,
      date: "Quarta-feira",
      location: "Castellón", 
      title: "Bit2Me Campus Exclusivo",
      description: "Behind-the-scenes da maior exchange europeia em sua sede. Como construir uma exchange global from scratch.",
      highlights: ["Trading floor exclusivo", "CTO keynote", "Product demo privado"],
      icon: Zap,
      color: "from-primary/10 to-accent/10",
      cityImage: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&q=80"
    },
    {
      day: 4,
      date: "Quinta-feira",
      location: "Barcelona",
      title: "Venga & Future Trends",
      description: "Venga (digital payments) + painel sobre o futuro dos pagamentos digitais. Oportunidades de parcerias e encerramento.",
      highlights: ["Venga product demo", "Digital payments trends", "Alumni network launch"],
      icon: Target,
      color: "from-accent/10 to-primary/5",
      cityImage: "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?w=800&q=80"
    }
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container">
        <div className="content-spacing max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="text-primary flex items-center gap-2 w-fit mx-auto">
              <Calendar className="h-3 w-3" />
              4 Dias de Experiências Únicas
            </Badge>
            
            <h2 className="text-balance">
              Sua jornada pela{" "}
              <span className="text-primary">Europa cripto</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Acesso VIP a locais e pessoas que moldam o futuro cripto europeu
            </p>
          </div>
          
          {/* Timeline */}
          <div className="space-y-8">
            {agenda.map((day, index) => {
              const IconComponent = day.icon;
              return (
                <div key={day.day} className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Card */}
                  <Card className={`${index % 2 === 1 ? 'lg:order-2' : ''} hover:shadow-lg transition-shadow duration-200`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-primary font-medium">
                          Dia {day.day} • {day.date}
                        </Badge>
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                    <CardTitle className="text-2xl">{day.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {day.location}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {day.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <Clock className="h-4 w-4 text-primary" />
                        Destaques do dia:
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                        {day.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Network indicator */}
                    <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      ~15 profissionais para networking
                    </div>
                  </CardContent>
                </Card>
                
                {/* City Image Card */}
                <div 
                  className={`${index % 2 === 1 ? 'lg:order-1' : ''} aspect-video rounded-lg border shadow-sm relative overflow-hidden`}
                  style={{
                    backgroundImage: `url(${day.cityImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40"></div>
                  
                  {/* Content */}
                  <div className="relative h-full flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-lg font-semibold text-white">{day.location}</div>
                      <div className="text-sm text-white/80">Dia {day.day}</div>
                    </div>
                  </div>
                </div>
                </div>
              );
            })}
          </div>
          
          {/* Call to action */}
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 text-center">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-2">
                Transporte interno incluído
              </h3>
              <p className="text-muted-foreground">
                Madrid → Valencia → Castellón → Barcelona. Apenas voos internacionais e hospedagem por sua conta.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}