
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: "Lavagem Completa",
      description: "Limpeza externa e interna com produtos premium, incluindo pneus, rodas e detalhamento completo.",
      features: ["Espuma ativa", "Cera de proteção", "Limpeza dos vidros", "Aspiração interna"],
      price: "A partir de R$ 45",
      icon: "🚿"
    },
    {
      title: "Polimento Técnico",
      description: "Remoção de riscos e micro-riscos, restaurando o brilho original da pintura do seu veículo.",
      features: ["Análise da pintura", "Polimento em etapas", "Produtos profissionais", "Acabamento espelhado"],
      price: "A partir de R$ 150",
      icon: "✨"
    },
    {
      title: "Higienização",
      description: "Limpeza profunda com produtos antibacterianos, eliminando odores e germes do interior.",
      features: ["Aspiração profunda", "Produtos antibacterianos", "Limpeza do ar-condicionado", "Eliminação de odores"],
      price: "A partir de R$ 80",
      icon: "🧽"
    },
    {
      title: "Cristalização",
      description: "Aplicação de cristalizador para proteção duradoura da pintura contra intempéries.",
      features: ["Proteção UV", "Durabilidade de 6 meses", "Brilho intenso", "Repelência à água"],
      price: "A partir de R$ 200",
      icon: "💎"
    },
    {
      title: "Enceramento",
      description: "Aplicação de cera premium para proteção e brilho superior da pintura automotiva.",
      features: ["Cera premium", "Proteção prolongada", "Brilho profundo", "Fácil manutenção"],
      price: "A partir de R$ 120",
      icon: "🌟"
    },
    {
      title: "Detalhamento Premium",
      description: "Serviço completo que inclui todos os cuidados para deixar seu carro impecável.",
      features: ["Todos os serviços", "Cuidado especial", "Produtos premium", "Garantia de qualidade"],
      price: "A partir de R$ 350",
      icon: "👑"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-luxury-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent font-semibold text-lg mb-4">
            NOSSOS SERVIÇOS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-white mb-6">
            Cuidado <span className="text-gold-400">Premium</span> para seu Veículo
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços de estética automotiva com a mais alta qualidade e atenção aos detalhes
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/50 border-gray-700 hover:border-gold-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gold-400/10 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Service Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="font-display text-xl font-bold text-luxury-white mb-3 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="border-t border-gray-700 pt-4">
                  <span className="font-bold text-gold-400 text-lg">
                    {service.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gold-400/10 to-gold-600/10 border border-gold-400/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-luxury-white mb-4">
              Precisa de um orçamento personalizado?
            </h3>
            <p className="text-gray-400 mb-6">
              Entre em contato conosco e receba um orçamento sob medida para as necessidades do seu veículo.
            </p>
            <button 
              onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-luxury-black font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
