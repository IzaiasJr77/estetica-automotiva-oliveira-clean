
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-deep-black/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-premium-gold to-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-deep-black font-bold text-xl">O</span>
            </div>
            <div>
              <h1 className="text-pure-white font-display font-bold text-xl">
                OLIVEIRA CLEAN
              </h1>
              <p className="text-premium-gold text-xs font-light">ESTÉTICA AUTOMOTIVA</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-pure-white hover:text-premium-gold transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-pure-white hover:text-premium-gold transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="text-pure-white hover:text-premium-gold transition-colors font-medium"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection('agendamento')}
              className="text-pure-white hover:text-premium-gold transition-colors font-medium"
            >
              Contato
            </button>
            <Button 
              onClick={() => scrollToSection('agendamento')}
              className="bg-premium-gold hover:bg-yellow-500 text-deep-black font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Agendar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-pure-white focus:outline-none"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-pure-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}></span>
              <span className={`bg-pure-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`bg-pure-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-premium-gold/20">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-pure-white hover:text-premium-gold transition-colors font-medium text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-pure-white hover:text-premium-gold transition-colors font-medium text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="text-pure-white hover:text-premium-gold transition-colors font-medium text-left"
              >
                Galeria
              </button>
              <button 
                onClick={() => scrollToSection('agendamento')}
                className="text-pure-white hover:text-premium-gold transition-colors font-medium text-left"
              >
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection('agendamento')}
                className="bg-premium-gold hover:bg-yellow-500 text-deep-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 w-full"
              >
                Agendar Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
