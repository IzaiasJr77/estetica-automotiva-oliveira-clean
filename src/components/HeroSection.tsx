
import { Button } from '@/components/ui/button';
import { CarFront } from 'lucide-react';

const HeroSection = () => {
  const scrollToAgendamento = () => {
    const element = document.getElementById('agendamento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-luxury-black via-gray-900 to-luxury-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(251,191,36,0.05)_49%,rgba(251,191,36,0.05)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-400 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gold-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-gold-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <CarFront className="w-10 h-10 text-luxury-black" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl font-bold text-luxury-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              OLIVEIRA
            </span>
            <br />
            <span className="text-luxury-white">CLEAN</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            ESTÉTICA AUTOMOTIVA PREMIUM
          </p>

          {/* Main Slogan */}
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-luxury-white mb-8 max-w-3xl mx-auto leading-relaxed">
            "Seu carro merece o <span className="text-gold-400">melhor cuidado</span>"
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transformamos seu veículo com serviços de alta qualidade e técnicas profissionais. 
            Experimente o padrão premium que seu carro merece.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToAgendamento}
              className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-luxury-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-gold-400/25"
            >
              Agendar Serviço
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-luxury-black font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Nossos Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400 mb-2">500+</div>
              <div className="text-gray-400 font-medium">Carros Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400 mb-2">5★</div>
              <div className="text-gray-400 font-medium">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400 mb-2">3+</div>
              <div className="text-gray-400 font-medium">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
