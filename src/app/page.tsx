import { HeroSection } from "@/components/sections/hero";
import { WhySpainSection } from "@/components/sections/why-spain";
import { AgendaSection } from "@/components/sections/agenda";
import { CompaniesSection } from "@/components/sections/companies";
import { SignupFormSection } from "@/components/sections/signup-form";
import { AdminDashboard } from "@/components/admin-dashboard";

export default function Home({ searchParams }: { searchParams: { admin?: string } }) {
  
  // Se tem ?admin na URL, mostra o dashboard
  if (searchParams?.admin !== undefined) {
    return <AdminDashboard />
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Divider */}
      <div className="border-t border-border/60"></div>
      
      {/* Why Spain Section */}
      <WhySpainSection />
      
      {/* Divider */}
      <div className="border-t border-border/60"></div>
      
      {/* Agenda Section */}
      <AgendaSection />
      
      {/* Divider */}
      <div className="border-t border-border/60"></div>
      
      {/* Companies Section */}
      <CompaniesSection />
      
      {/* Divider */}
      <div className="border-t border-border/60"></div>
      
      {/* Signup Form Section */}
      <SignupFormSection />
      
      {/* Footer */}
      <footer className="section-padding bg-foreground text-background">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">
              ZP Summit Europe | Spain Edition
            </h3>
            <p className="text-background/80 max-w-2xl mx-auto">
              A única experiência presencial de imersão nas empresas cripto 
              que estão moldando o futuro da Europa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-medium mb-2">Contato</h4>
              <p className="text-background/70">joaohazim@gmail.com</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Legal</h4>
              <div className="space-y-1 text-background/70">
                <p><a href="#" className="hover:text-background transition-colors">Política de Privacidade</a></p>
                <p><a href="#" className="hover:text-background transition-colors">Termos de Uso</a></p>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Próximas Edições</h4>
              <div className="space-y-1 text-background/70">
                <p>Em breve</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-background/20 text-background/60 text-sm">
            <p>© 2025 ZP Summit. Todos os direitos reservados.</p>
            <p className="mt-1">
              ⚠️ Aviso: Este não é aconselhamento financeiro. 
              Investimentos em cripto são arriscados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
