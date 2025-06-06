
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: "Lavagem Tradicional",
      description: "Lavagem externa com shampoo neutro + Aspiração + Limpeza de painel e plásticos com multilimpador bactericida + Limpeza dos vidros + revitalizador de pneus + cera de carnaúba.",
      features: [
        "Veículos pequenos: R$ 60,00",
        "SUV: R$ 70,00", 
        "Caminhonete: R$ 80,00"
      ],
      extras: [
        "Top Cera: R$ 20,00",
        "Cera Blend: R$ 35,00",
        "Revitalização de Plásticos Externos: R$ 15,00",
        "Revitalização de Plásticos Internos: R$ 20,00"
      ],
      icon: "🚿",
      showPrices: true
    },
    {
      title: "Polimento Técnico",
      description: "Remoção de riscos e micro-riscos, restaurando o brilho original da pintura do seu veículo.",
      features: ["Análise da pintura", "Polimento em etapas", "Produtos profissionais", "Acabamento espelhado"],
      price: "Consulte valores",
      icon: "✨",
      showPrices: false
    },
    {
      title: "Higienização",
      description: "Limpeza profunda com produtos antibacterianos, eliminando odores e germes do interior.",
      features: ["Aspiração profunda", "Produtos antibacterianos", "Limpeza do ar-condicionado", "Eliminação de odores"],
      price: "Consulte valores",
      icon: "🧽",
      showPrices: false
    },
    {
      title: "Cristalização",
      description: "Aplicação de cristalizador para proteção duradoura da pintura contra intempéries.",
      features: ["Proteção UV", "Durabilidade de 6 meses", "Brilho intenso", "Repelência à água"],
      price: "Consulte valores",
      icon: "💎",
      showPrices: false
    },
    {
      title: "Enceramento",
      description: "Aplicação de cera premium para proteção e brilho superior da pintura automotiva.",
      features: ["Cera premium", "Proteção prolongada", "Brilho profundo", "Fácil manutenção"],
      price: "Consulte valores",
      icon: "🌟",
      showPrices: false
    },
    {
      title: "Detalhamento Premium",
      description: "Serviço completo que inclui todos os cuidados para deixar seu carro impecável.",
      features: ["Todos os serviços", "Cuidado especial", "Produtos premium", "Garantia de qualidade"],
      price: "Consulte valores",
      icon: "👑",
      showPrices: false
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-deep-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-gradient-to-r from-premium-gold to-yellow-500 bg-clip-text text-transparent font-semibold text-lg mb-4">
            NOSSOS SERVIÇOS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-pure-white mb-6">
            Cuidado <span className="text-premium-gold">Premium</span> para seu Veículo
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
              className="bg-gray-800/50 border-gray-700 hover:border-premium-gold/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-premium-gold/10 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Service Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="font-display text-xl font-bold text-pure-white mb-3 group-hover:text-premium-gold transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features/Prices List */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-premium-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Extras for Lavagem Tradicional */}
                {service.extras && (
                  <div className="mb-4">
                    <p className="text-premium-gold font-semibold text-sm mb-2">Para maiores cuidados:</p>
                    <ul className="space-y-1">
                      {service.extras.map((extra, extraIndex) => (
                        <li key={extraIndex} className="flex items-center text-xs text-gray-400">
                          <div className="w-1 h-1 bg-premium-gold rounded-full mr-2"></div>
                          {extra}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Price */}
                {!service.showPrices && (
                  <div className="border-t border-gray-700 pt-4">
                    <span className="font-bold text-premium-gold text-lg">
                      {service.price}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-premium-gold/10 to-yellow-500/10 border border-premium-gold/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-pure-white mb-4">
              Precisa de um orçamento personalizado?
            </h3>
            <p className="text-gray-400 mb-6">
              Entre em contato conosco e receba um orçamento sob medida para as necessidades do seu veículo.
            </p>
            <button 
              onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-premium-gold hover:bg-yellow-500 text-deep-black font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
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
