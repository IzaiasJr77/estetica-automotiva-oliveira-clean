
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GalleryHorizontal } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "/lovable-uploads/5eadd7a3-2bf7-4910-b44f-b7d9699a7b2e.png",
      alt: "Toyota em processo de lavagem profissional",
      category: "Lavagem Completa"
    },
    {
      src: "/lovable-uploads/4a872b9e-9137-44c2-addd-31e7ebdd2866.png",
      alt: "Volkswagen Tiguan após serviço de cristalização",
      category: "Cristalização"
    },
    {
      src: "/lovable-uploads/0b81fcf1-f697-434c-a695-9b9ec4c4e8e1.png",
      alt: "Toyota Hilux durante processo de higienização",
      category: "Higienização"
    },
    {
      src: "/lovable-uploads/e917e7be-c024-41bf-90a3-4e2435a29d16.png",
      alt: "Volkswagen após polimento técnico profissional",
      category: "Polimento Técnico"
    },
    {
      src: "/lovable-uploads/1a23ff31-32fc-49dc-bcf3-d6ebff2640cb.png",
      alt: "Toyota Corolla com acabamento premium",
      category: "Enceramento"
    },
    {
      src: "/lovable-uploads/b3fffe98-e8a0-4d5f-8559-9ac1b33dd7ee.png",
      alt: "Volkswagen durante detalhamento completo",
      category: "Detalhamento"
    },
    {
      src: "/lovable-uploads/2635a8fa-b5f7-4a57-8682-4536ceaf5ff4.png",
      alt: "Volkswagen Fusca clássico restaurado",
      category: "Restauração"
    },
    {
      src: "/lovable-uploads/707581ae-1b38-4914-88be-568b86ea4a1c.png",
      alt: "Volkswagen com tratamento especializado",
      category: "Tratamento Especial"
    },
    {
      src: "/lovable-uploads/c899a03e-c495-46fc-a73f-84dde0275816.png",
      alt: "Honda vermelha após lavagem completa",
      category: "Lavagem Completa"
    },
    {
      src: "/lovable-uploads/51157461-6317-40c7-b853-9ba20b88dcc7.png",
      alt: "Processo de lavagem de chassi profissional",
      category: "Lavagem de Chassi"
    },
    {
      src: "/lovable-uploads/9680aaca-3648-40ef-a192-acd1f53c2aba.png",
      alt: "Volkswagen Amarok com higienização interna completa",
      category: "Higienização"
    },
    {
      src: "/lovable-uploads/9f347c08-d6f6-43de-9ba7-949bb98e6f62.png",
      alt: "Mitsubishi durante processo de lavagem",
      category: "Lavagem Completa"
    }
  ];

  const categories = ["Todos", ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredImages = activeCategory === "Todos" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-gray-900 to-luxury-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent font-semibold text-lg mb-4">
            NOSSOS TRABALHOS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-white mb-6">
            Galeria de <span className="text-gold-400">Resultados</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Veja a transformação que proporcionamos aos veículos dos nossos clientes com nossos serviços premium
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-luxury-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gold-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <Card 
              key={index}
              className="bg-gray-800/50 border-gray-700 overflow-hidden hover:border-gold-400/50 transition-all duration-300 transform hover:scale-105 cursor-pointer group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <span className="inline-block bg-gold-400 text-luxury-black px-3 py-1 rounded-full text-sm font-semibold">
                      {image.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <GalleryHorizontal className="w-6 h-6 text-gold-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-luxury-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={selectedImage} 
                alt="Enlarged view"
                className="w-full h-full object-contain rounded-lg"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-gold-400 text-luxury-black rounded-full flex items-center justify-center font-bold hover:bg-gold-500 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-400 mb-2">500+</div>
            <div className="text-gray-400 font-medium">Carros Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-400 mb-2">100%</div>
            <div className="text-gray-400 font-medium">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-400 mb-2">24h</div>
            <div className="text-gray-400 font-medium">Resposta</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-400 mb-2">3+</div>
            <div className="text-gray-400 font-medium">Anos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
