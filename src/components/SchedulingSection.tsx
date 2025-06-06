
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Phone, Instagram, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SchedulingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    service: '',
    date: '',
    time: '',
    observations: ''
  });

  const services = [
    'Lavagem Completa',
    'Polimento Técnico',
    'Higienização',
    'Cristalização',
    'Enceramento',
    'Detalhamento Premium'
  ];

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formatWhatsAppMessage = () => {
    const message = `
🚗 *AGENDAMENTO OLIVEIRA CLEAN* 🚗

👤 *Nome:* ${formData.name}
📱 *Telefone:* ${formData.phone}
🚙 *Modelo do Carro:* ${formData.carModel}
🛠️ *Serviço:* ${formData.service}
📅 *Data:* ${formData.date}
⏰ *Horário:* ${formData.time}
📝 *Observações:* ${formData.observations || 'Nenhuma'}

Gostaria de confirmar meu agendamento! 
    `.trim();

    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.carModel || !formData.service || !formData.date || !formData.time) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // WhatsApp number (replace with actual number)
    const whatsappNumber = "5511999999999"; // Replace with actual WhatsApp number
    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para o WhatsApp para confirmar seu agendamento.",
    });
  };

  return (
    <section id="agendamento" className="py-20 bg-gradient-to-b from-luxury-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="animate-fade-in">
            <span className="inline-block bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent font-semibold text-lg mb-4">
              ENTRE EM CONTATO
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-white mb-6">
              Agende seu <span className="text-gold-400">Atendimento</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Preencha o formulário ao lado e entraremos em contato via WhatsApp para confirmar seu agendamento.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-gold-400/50 transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-luxury-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-luxury-white mb-1">Telefone</h3>
                    <p className="text-gray-400">(11) 99999-9999</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-gold-400/50 transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-luxury-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-luxury-white mb-1">Horário de Funcionamento</h3>
                    <p className="text-gray-400">Segunda à Sábado: 8h às 18h</p>
                    <p className="text-gray-400">Domingo: 8h às 12h</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-luxury-white mb-4">Siga-nos nas redes sociais</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-gold-400 hover:to-gold-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <Instagram className="w-6 h-6 text-gray-400 group-hover:text-luxury-black" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-gold-400 hover:to-gold-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <Facebook className="w-6 h-6 text-gray-400 group-hover:text-luxury-black" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Scheduling Form */}
          <div className="animate-slide-up">
            <Card className="bg-gray-800/50 border-gray-700 shadow-2xl">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-luxury-white text-center">
                  Formulário de Agendamento
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-luxury-white font-medium">
                        Nome Completo *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-luxury-white focus:border-gold-400"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-luxury-white font-medium">
                        Telefone/WhatsApp *
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-luxury-white focus:border-gold-400"
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="carModel" className="text-luxury-white font-medium">
                      Modelo do Carro *
                    </Label>
                    <Input
                      id="carModel"
                      value={formData.carModel}
                      onChange={(e) => handleInputChange('carModel', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-luxury-white focus:border-gold-400"
                      placeholder="Ex: Toyota Corolla 2020"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-luxury-white font-medium">
                      Serviço Desejado *
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-luxury-white focus:border-gold-400">
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        {services.map((service) => (
                          <SelectItem key={service} value={service} className="text-luxury-white hover:bg-gold-400 hover:text-luxury-black">
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date" className="text-luxury-white font-medium">
                        Data Preferida *
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-luxury-white focus:border-gold-400"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="time" className="text-luxury-white font-medium">
                        Horário Preferido *
                      </Label>
                      <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-luxury-white focus:border-gold-400">
                          <SelectValue placeholder="Selecione o horário" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time} className="text-luxury-white hover:bg-gold-400 hover:text-luxury-black">
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="observations" className="text-luxury-white font-medium">
                      Observações
                    </Label>
                    <textarea
                      id="observations"
                      value={formData.observations}
                      onChange={(e) => handleInputChange('observations', e.target.value)}
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-luxury-white focus:border-gold-400 focus:outline-none resize-none"
                      rows={3}
                      placeholder="Informações adicionais sobre seu veículo ou preferências..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-luxury-black font-bold py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Agendar via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchedulingSection;
