
import { Phone, Instagram, Facebook, CarFront } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <CarFront className="w-6 h-6 text-luxury-black" />
              </div>
              <div>
                <h3 className="text-luxury-white font-display font-bold text-xl">
                  OLIVEIRA CLEAN
                </h3>
                <p className="text-gold-400 text-sm font-light">ESTÉTICA AUTOMOTIVA</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Há mais de 3 anos cuidando do seu veículo com excelência e dedicação. 
              Oferecemos serviços premium de estética automotiva com a qualidade que seu carro merece.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/oliveira_clean" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-gold-400 hover:to-gold-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-luxury-black" />
              </a>
              <a 
                href="https://facebook.com/oliveira.clean" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-gold-400 hover:to-gold-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-luxury-black" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-luxury-white mb-4 font-display">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold-400" />
                <span className="text-gray-400">(11) 99999-9999</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-gold-400 rounded-full mt-1 flex-shrink-0"></div>
                <div className="text-gray-400">
                  <p>Rua das Flores, 123</p>
                  <p>Vila Madalena - São Paulo</p>
                  <p>CEP: 05049-000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-luxury-white mb-4 font-display">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#servicos" className="text-gray-400 hover:text-gold-400 transition-colors">Lavagem Completa</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-gold-400 transition-colors">Polimento Técnico</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-gold-400 transition-colors">Higienização</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-gold-400 transition-colors">Cristalização</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-gold-400 transition-colors">Enceramento</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-gold-400 transition-colors">Detalhamento Premium</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 OLIVEIRA CLEAN. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>

        {/* WhatsApp Float Button */}
        <a 
          href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um serviço na OLIVEIRA CLEAN."
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
