export const siteConfig = {
  name: "Estética Tatyelli Cristina",
  responsible: "Tatyelli Cristina Stimamilio",
  email: "tatyellics@gmail.com",
  whatsappPhone: "5541987095659",
  whatsappFormatted: "(41) 98709-5659",
  instagram: "@esteticatatyellicristina",
  instagramUrl: "https://www.instagram.com/esteticatatyellicristina/",
  professionalInstagram: "@tatyellics_",
  professionalInstagramUrl: "https://www.instagram.com/tatyellics_/",
  domain: "https://seu-dominio.com.br",
  address: {
    street: "Endereço a configurar",
    city: "Cidade a configurar",
    region: "UF",
    country: "BR",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Est%C3%A9tica%20Tatyelli%20Cristina",
  },
};

export const defaultWhatsappMessage =
  "Olá, Tatyelli! Vim pelo site e gostaria de agendar uma avaliação.";

export const whatsappUrl = (message = defaultWhatsappMessage) =>
  `https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(message)}`;

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export const assets = {
  logoHorizontal: "/assets/tatyelli/logo/logo-tatyelli-horizontal.svg",
  logoSymbol: "/assets/tatyelli/logo/logo-tatyelli-symbol.svg",
  logoLight: "/assets/tatyelli/logo/logo-tatyelli-light.svg",
  favicon: "/assets/tatyelli/logo/favicon.ico",
  appleTouchIcon: "/assets/tatyelli/logo/apple-touch-icon.png",
  og: "/assets/tatyelli/logo/og-tatyelli.png",
  hero: "/assets/tatyelli/images/hero-tatyelli.jpg",
  profile: "/assets/tatyelli/images/tatyelli-perfil.jpg",
  clinicOne: "/assets/tatyelli/images/clinica-espaco-01.jpg",
  clinicTwo: "/assets/tatyelli/images/clinica-espaco-02.jpg",
  facial: "/assets/tatyelli/images/procedimento-facial.jpg",
  body: "/assets/tatyelli/images/procedimento-corporal.jpg",
  laser: "/assets/tatyelli/images/laser.jpg",
  beforeAfter: "/assets/tatyelli/images/antes-depois-01.jpg",
};

export const authorityItems = [
  ["10 anos", "de mercado"],
  ["Atendimento", "humanizado"],
  ["Protocolos", "personalizados"],
  ["Facial, corporal", "e laser"],
  ["Acompanhamento", "individual"],
];

export const services = [
  {
    title: "Estética Facial",
    image: assets.facial,
    description: "Cuidados para higienizar, renovar e melhorar a qualidade da pele com indicação profissional.",
    items: "Limpeza de pele · Peeling químico · Microagulhamento · Rejuvenescimento facial",
    message: "Olá, Tatyelli! Vim pelo site e gostaria de saber mais sobre estética facial.",
  },
  {
    title: "Estética Corporal",
    image: assets.body,
    description: "Protocolos para auxiliar no cuidado corporal, sempre conforme avaliação e acompanhamento.",
    items: "Drenagem · Enzimas · Criolipólise · Detox · Endermoterapia · Corrente russa",
    message: "Olá, Tatyelli! Vim pelo site e gostaria de saber mais sobre estética corporal.",
  },
  {
    title: "Depilação a Laser",
    image: assets.laser,
    description: "Tecnologia para redução progressiva dos pelos, com mais praticidade, conforto e segurança.",
    items: "Depilação a laser com orientação antes, durante e depois das sessões",
    message: "Olá, Tatyelli! Vim pelo site e gostaria de saber mais sobre depilação a laser.",
  },
  {
    title: "Injetáveis e Rejuvenescimento",
    image: assets.clinicTwo,
    description: "Tratamentos voltados para firmeza, textura e naturalidade, com segurança e planejamento.",
    items: "Toxina botulínica · Preenchimentos · Bioestimuladores · Skinbooster",
    message: "Olá, Tatyelli! Vim pelo site e gostaria de saber mais sobre injetáveis e rejuvenescimento.",
  },
  {
    title: "Pós-operatório e Pós-parto",
    image: assets.body,
    description: "Atendimento cuidadoso para fases que exigem acolhimento, avaliação e condutas individualizadas.",
    items: "Drenagem · Flacidez · Celulite · Pós-parto · Pós-operatório",
    message: "Olá, Tatyelli! Vim pelo site e gostaria de saber mais sobre pós-operatório e pós-parto.",
  },
  {
    title: "Procedimentos Específicos",
    image: assets.laser,
    description: "Opções com tecnologia para necessidades pontuais, indicadas após análise profissional.",
    items: "Remoção de tatuagem · Secagem de vasinhos · Bumbum na nuca · Glúteo Max",
    message: "Olá, Tatyelli! Vim pelo site e gostaria de saber mais sobre procedimentos específicos.",
  },
];

export const methodSteps = [
  ["01", "Avaliação individual", "Entendimento da pele, corpo, rotina, histórico e objetivo da cliente."],
  ["02", "Melhor protocolo", "Indicação transparente, sem prometer resultados iguais para todas as pessoas."],
  ["03", "Execução segura", "Procedimentos realizados com técnica, cuidado e atenção aos detalhes."],
  ["04", "Acompanhamento", "Orientações para evolução do tratamento e ajustes quando necessário."],
];

export const feedbackImages = [
  {
    src: "/assets/tatyelli/images/feedbacks/feedback-01.jpg",
    title: "Feedback sobre laser",
    description: "Depoimento compartilhado pela cliente.",
  },
  {
    src: "/assets/tatyelli/images/feedbacks/feedback-02.jpg",
    title: "Cuidado e acolhimento",
    description: "Registro de experiência positiva da cliente.",
  },
  {
    src: "/assets/tatyelli/images/feedbacks/feedback-03.jpg",
    title: "Limpeza de pele",
    description: "Cliente retornando pela confiança no atendimento.",
  },
  {
    src: "/assets/tatyelli/images/feedbacks/feedback-04.jpg",
    title: "Depilação a laser",
    description: "Registro de feedback visual autorizado.",
  },
  {
    src: "/assets/tatyelli/images/feedbacks/feedback-05.jpg",
    title: "Drenagem e bem-estar",
    description: "Relato sobre acompanhamento e sensação de alívio.",
  },
  {
    src: "/assets/tatyelli/images/feedbacks/feedback-06.jpg",
    title: "Massagem e relaxamento",
    description: "Experiência de cuidado registrada pela cliente.",
  },
];

export const feedbackVideos = [
  "/assets/tatyelli/images/feedbacks/feedback-video-01.mp4",
  "/assets/tatyelli/images/feedbacks/feedback-video-02.mp4",
  "/assets/tatyelli/images/feedbacks/feedback-video-03.mp4",
  "/assets/tatyelli/images/feedbacks/feedback-video-04.mp4",
];

export const faqs = [
  {
    question: "Preciso passar por avaliação antes do procedimento?",
    answer:
      "Sim. A avaliação ajuda a entender sua necessidade, histórico, rotina e objetivo para indicar um protocolo seguro e personalizado.",
  },
  {
    question: "Os resultados são imediatos?",
    answer:
      "Depende do procedimento e da resposta de cada organismo. Alguns cuidados podem mostrar mudanças gradativas, sempre com acompanhamento profissional.",
  },
  {
    question: "A depilação a laser dói?",
    answer:
      "A sensibilidade varia de pessoa para pessoa. Durante a avaliação, a Tatyelli orienta sobre preparo, cuidados e conforto durante as sessões.",
  },
  {
    question: "Posso fazer procedimento no pós-parto?",
    answer:
      "Alguns procedimentos podem ser considerados após avaliação individual e conforme a fase do pós-parto. A indicação deve respeitar segurança e orientação profissional.",
  },
  {
    question: "Como agendar meu horário?",
    answer:
      "O agendamento é feito pelo WhatsApp. Envie uma mensagem informando o procedimento de interesse para receber orientação e disponibilidade.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "As condições podem variar conforme o procedimento. Consulte pelo WhatsApp para confirmar as formas de pagamento disponíveis.",
  },
];
