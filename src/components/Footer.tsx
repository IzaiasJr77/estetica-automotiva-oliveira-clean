
import { Phone, Instagram, CarFront } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-premium-gold to-yellow-500 rounded-lg flex items-center justify-center">
                <CarFront className="w-6 h-6 text-deep-black" />
              </div>
              <div>
                <h3 className="text-pure-white font-display font-bold text-xl">
                  OLIVEIRA CLEAN
                </h3>
                <p className="text-premium-gold text-sm font-light">ESTÉTICA AUTOMOTIVA</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Há mais de 3 anos cuidando do seu veículo com excelência e dedicação. 
              Oferecemos serviços premium de estética automotiva com a qualidade que seu carro merece.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/oliveira_clean10" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-premium-gold hover:to-yellow-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Instagram className="w-7 h-7 text-gray-400 group-hover:text-deep-black" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-pure-white mb-4 font-display">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-premium-gold" />
                <span className="text-gray-400">(11) 97520-9844</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-premium-gold rounded-full mt-1 flex-shrink-0"></div>
                <div className="text-gray-400">
                  <p>Avenida Bariloche, nº 01</p>
                  <p>Jardim Maria Helena</p>
                  <p>Barueri/SP</p>
                  <p>CEP: 06445-040</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-pure-white mb-4 font-display">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#servicos" className="text-gray-400 hover:text-premium-gold transition-colors">Lavagem Tradicional</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-premium-gold transition-colors">Polimento Técnico</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-premium-gold transition-colors">Higienização</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-premium-gold transition-colors">Cristalização</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-premium-gold transition-colors">Enceramento</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-premium-gold transition-colors">Detalhamento Premium</a></li>
            </ul>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <h4 className="font-semibold text-pure-white mb-4 font-display text-center">Nossa Localização</h4>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.123456789!2d-46.8765432109876!3d-23.5123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMwJzQ0LjQiUyA0NsKwNTInMzUuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr&q=Avenida+Bariloche,+01+-+Jardim+Maria+Helena,+Barueri+-+SP,+06445-040"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização OLIVEIRA CLEAN"
            ></iframe>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 OLIVEIRA CLEAN. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-premium-gold transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-premium-gold transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>

        {/* WhatsApp Float Button */}
        <a 
          href="https://wa.me/5511975209844?text=Olá! Gostaria de agendar um serviço na OLIVEIRA CLEAN."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 z-40"
        >
          <Phone className="w-6 h-6 text-white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
