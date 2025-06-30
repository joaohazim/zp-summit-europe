"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { ArrowRight, Shield, CheckCircle, Target, Euro, Globe, Construction, Smartphone, Rocket, AlertCircle } from "lucide-react";

export function SignupFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    profession: "",
    interest: "",
    motivation: "",
    gdprConsent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Inscrição realizada com sucesso! Entraremos em contato em breve.'
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          country: "",
          profession: "",
          interest: "",
          motivation: "",
          gdprConsent: false
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Erro ao processar inscrição. Tente novamente.'
        });
      }
    } catch (error) {
      console.error('Erro no envio:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Erro de conexão. Verifique sua internet e tente novamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/40 to-secondary/60">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left: Form */}
          <Card className="shadow-lg border-0">
            <CardHeader className="text-center pb-6">
              <Badge variant="secondary" className="w-fit mx-auto text-primary font-medium mb-4 flex items-center gap-2">
                <Target className="h-3 w-3" />
                Apenas 25 Vagas Disponíveis
              </Badge>
              
              <CardTitle className="text-3xl">
                Garantir minha vaga
              </CardTitle>
              
              <p className="text-muted-foreground">
                Junte-se ao grupo seleto que terá acesso VIP às empresas cripto da Espanha
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nome */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nome completo</label>
                  <Input
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email profissional</label>
                  <Input
                    type="email"
                    placeholder="seu.email@empresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                
                {/* País */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">País</label>
                  <Select value={formData.country} onValueChange={(value) => setFormData({...formData, country: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione seu país" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="br">Brasil</SelectItem>
                      <SelectItem value="pt">Portugal</SelectItem>
                      <SelectItem value="es">Espanha</SelectItem>
                      <SelectItem value="us">Estados Unidos</SelectItem>
                      <SelectItem value="uk">Reino Unido</SelectItem>
                      <SelectItem value="de">Alemanha</SelectItem>
                      <SelectItem value="fr">França</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Profissão */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Área profissional</label>
                  <Select value={formData.profession} onValueChange={(value) => setFormData({...formData, profession: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sua área de atuação" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="investor">Investidor / VC</SelectItem>
                      <SelectItem value="founder">Founder / Entrepreneur</SelectItem>
                      <SelectItem value="developer">Developer / CTO</SelectItem>
                      <SelectItem value="fintech">Fintech / Banking</SelectItem>
                      <SelectItem value="consultant">Consultoria / Advisory</SelectItem>
                      <SelectItem value="legal">Legal / Compliance</SelectItem>
                      <SelectItem value="other">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Interesse */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Principal interesse</label>
                  <Select value={formData.interest} onValueChange={(value) => setFormData({...formData, interest: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="O que mais te interessa?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="investment">Oportunidades de investimento</SelectItem>
                      <SelectItem value="partnership">Parcerias empresariais</SelectItem>
                      <SelectItem value="technology">Tecnologia e inovação</SelectItem>
                      <SelectItem value="regulation">Regulamentação europeia</SelectItem>
                      <SelectItem value="networking">Networking qualificado</SelectItem>
                      <SelectItem value="market">Expansão de mercado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Motivação */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Por que quer participar?</label>
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Conte-nos brevemente sua motivação..."
                    value={formData.motivation}
                    onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                    maxLength={300}
                  />
                  <div className="text-xs text-muted-foreground text-right">
                    {formData.motivation.length}/300
                  </div>
                </div>
                
                {/* GDPR Consent */}
                <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                  <input
                    type="checkbox"
                    id="gdpr"
                    checked={formData.gdprConsent}
                    onChange={(e) => setFormData({...formData, gdprConsent: e.target.checked})}
                    className="mt-0.5"
                    required
                  />
                  <label htmlFor="gdpr" className="text-sm text-muted-foreground leading-relaxed">
                    Concordo em receber comunicações sobre o ZP Summit e 
                    aceito a <a href="#" className="text-primary hover:underline">Política de Privacidade</a>. 
                    Posso cancelar a qualquer momento.
                  </label>
                </div>
                
                {/* Status Messages */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-lg flex items-center gap-3 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-800' 
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}>
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    )}
                    <span className="text-sm font-medium">{submitStatus.message}</span>
                  </div>
                )}

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full btn-primary group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Processando..."
                  ) : (
                    <>
                      Entrar na lista VIP
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
              
              {/* Security note */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                <Shield className="h-3 w-3" />
                Seus dados são protegidos por GDPR
              </div>
            </CardContent>
          </Card>
          
          {/* Right: Benefits & Social Proof */}
          <div className="space-y-8">
            {/* What's included */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">O que está incluído</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Transporte interno",
                  "Todas as refeições e networking events",
                  "Acesso VIP a locais exclusivos",
                  "Sessions técnicas privadas",
                  "Certificado Alumni ZP Summit",
                  "Grupo WhatsApp exclusivo"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            {/* Pricing */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6 text-center">
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <Euro className="h-6 w-6 text-primary" />
                    <div className="text-3xl font-bold text-primary">3,750</div>
                  </div>
                  <div className="text-sm text-muted-foreground">Exceto voos, hotel e alimentação</div>
                </div>
                
              </CardContent>
            </Card>

            {/* Parceiros do Programa */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Parceiros do Programa</h3>
                <p className="text-sm text-muted-foreground">
                  Eventos e experiências adicionais incluídas
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    name: "European Blockchain Convention",
                    role: "Side-event exclusivo",
                    icon: Globe
                  },
                  {
                    name: "Merge Madrid",
                    role: "Tour e networking",
                    icon: Construction
                  },
                  {
                    name: "Madrid Digital Hub",
                    role: "Networking + apresentações",
                    icon: Smartphone
                  },
                  {
                    name: "Web Summit Portugal",
                    role: "Conexões com ecossistema português",
                    icon: Globe
                  },
                  {
                    name: "Valencia Digital Summit",
                    role: "Evento de inovação em Valência",
                    icon: Rocket
                  }
                ].map((partner, index) => {
                  const IconComponent = partner.icon;
                  return (
                    <Card key={index} className="border-dashed hover:border-solid hover:shadow-sm transition-all duration-200">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 text-left">
                          <div className="font-medium text-sm">{partner.name}</div>
                          <div className="text-xs text-muted-foreground">{partner.role}</div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}