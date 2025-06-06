
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon, Phone, Instagram, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';

const SchedulingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    carModel: '',
    date: undefined as Date | undefined,
    time: ''
  });

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleInputChange = (field: string, value: string | Date | undefined) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formatWhatsAppMessage = () => {
    const formattedDate = formData.date ? format(formData.date, 'dd/MM/yyyy', { locale: ptBR }) : '[DATA]';
    
    const message = `Olá, gostaria de agendar uma lavagem para meu carro ${formData.carModel || '[MODELO]'} no dia ${formattedDate} às ${formData.time || '[HORA]'}.`;
    
    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.carModel || !formData.date || !formData.time) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/5511975209844?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para o WhatsApp para confirmar seu agendamento.",
    });
  };

  return (
    <section id="agendamento" className="py-20 bg-gradient-to-b from-deep-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="animate-fade-in">
            <span className="inline-block bg-gradient-to-r from-premium-gold to-yellow-500 bg-clip-text text-transparent font-semibold text-lg mb-4 font-display">
              ENTRE EM CONTATO
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-pure-white mb-6">
              Agende seu <span className="text-premium-gold">Atendimento</span>
            </h2>
            <p className="text-xl text-elegant-gray mb-8 leading-relaxed font-sans">
              Preencha o formulário ao lado e entraremos em contato via WhatsApp para confirmar seu agendamento.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-premium-gold/50 transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-premium-gold to-yellow-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-deep-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pure-white mb-1 font-display">Telefone</h3>
                    <p className="text-elegant-gray font-sans">(11) 97520-9844</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-premium-gold/50 transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-premium-gold to-yellow-500 rounded-lg flex items-center justify-center">
                    <CalendarIcon className="w-6 h-6 text-deep-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pure-white mb-1 font-display">Horário de Funcionamento</h3>
                    <p className="text-elegant-gray font-sans">Segunda à Sábado: 8h às 18h</p>
                    <p className="text-elegant-gray font-sans">Domingo: 8h às 12h</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-pure-white mb-4 font-display">Siga-nos nas redes sociais</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-premium-gold hover:to-yellow-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <Instagram className="w-6 h-6 text-elegant-gray group-hover:text-deep-black" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-premium-gold hover:to-yellow-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <Facebook className="w-6 h-6 text-elegant-gray group-hover:text-deep-black" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Scheduling Form */}
          <div className="animate-slide-up">
            <Card className="bg-gray-800/50 border-gray-700 shadow-2xl">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-pure-white text-center">
                  Formulário de Agendamento
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-pure-white font-medium font-display">
                      Nome Completo *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-pure-white focus:border-premium-gold font-sans"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="carModel" className="text-pure-white font-medium font-display">
                      Modelo do Carro *
                    </Label>
                    <Input
                      id="carModel"
                      value={formData.carModel}
                      onChange={(e) => handleInputChange('carModel', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-pure-white focus:border-premium-gold font-sans"
                      placeholder="Ex: Toyota Corolla 2020"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date" className="text-pure-white font-medium font-display">
                        Data Preferida *
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal bg-gray-700 border-gray-600 text-pure-white hover:bg-gray-600 font-sans",
                              !formData.date && "text-gray-400"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.date ? format(formData.date, "PPP", { locale: ptBR }) : <span>Selecione uma data</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-600" align="start">
                          <Calendar
                            mode="single"
                            selected={formData.date}
                            onSelect={(date) => handleInputChange('date', date)}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="bg-gray-800 text-pure-white"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label htmlFor="time" className="text-pure-white font-medium font-display">
                        Horário Preferido *
                      </Label>
                      <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-pure-white focus:border-premium-gold font-sans">
                          <SelectValue placeholder="Selecione o horário" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time} className="text-pure-white hover:bg-premium-gold hover:text-deep-black font-sans">
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-premium-gold to-yellow-500 hover:from-yellow-500 hover:to-premium-gold text-deep-black font-bold py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 font-display"
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
