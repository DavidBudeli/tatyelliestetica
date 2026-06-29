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
    street: "Rua Rio Japurá, 2270, Bairro Alto",
    city: "Curitiba",
    region: "PR",
    postalCode: "82820-020",
    country: "BR",
    full: "Rua Rio Japurá, 2270, Bairro Alto, Curitiba PR, 82820-020, Brasil",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua%20Rio%20Japur%C3%A1%2C%202270%2C%20Bairro%20Alto%2C%20Curitiba%20PR%2C%2082820-020%2C%20Brasil",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=Rua%20Rio%20Japur%C3%A1%2C%202270%2C%20Bairro%20Alto%2C%20Curitiba%20PR%2C%2082820-020%2C%20Brasil&output=embed",
  },
};

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Catálogo", href: "#catalogo" },
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
  },
  {
    title: "Estética Corporal",
    image: assets.body,
    description: "Protocolos para auxiliar no cuidado corporal, sempre conforme avaliação e acompanhamento.",
    items: "Drenagem · Enzimas · Criolipólise · Detox · Endermoterapia · Corrente russa",
  },
  {
    title: "Depilação a Laser",
    image: assets.laser,
    description: "Tecnologia para redução progressiva dos pelos, com mais praticidade, conforto e segurança.",
    items: "Depilação a laser com orientação antes, durante e depois das sessões",
  },
  {
    title: "Injetáveis e Rejuvenescimento",
    image: assets.clinicTwo,
    description: "Tratamentos voltados para firmeza, textura e naturalidade, com segurança e planejamento.",
    items: "Toxina botulínica · Preenchimentos · Bioestimuladores · Skinbooster",
  },
  {
    title: "Pós-operatório e Pós-parto",
    image: assets.body,
    description: "Atendimento cuidadoso para fases que exigem acolhimento, avaliação e condutas individualizadas.",
    items: "Drenagem · Flacidez · Celulite · Pós-parto · Pós-operatório",
  },
  {
    title: "Procedimentos Específicos",
    image: assets.laser,
    description: "Opções com tecnologia para necessidades pontuais, indicadas após análise profissional.",
    items: "Remoção de tatuagem · Secagem de vasinhos · Bumbum na nuca · Glúteo Max",
  },
];

export type CatalogItem = {
  name: string;
  price: string;
  image: string;
  description: string;
};

export const catalogItems: CatalogItem[] = [
  {
    name: "Corrente Russa",
    price: "R$ 79,99",
    image: "/assets/tatyelli/catalogo/corrente-russa.jpg",
    description: "Procedimento corporal que auxilia na tonificação muscular e melhora do contorno corporal.",
  },
  {
    name: "Enzimas",
    price: "R$ 259,99",
    image: "/assets/tatyelli/catalogo/enzimas.jpg",
    description: "Protocolo indicado após avaliação para auxiliar em objetivos corporais específicos.",
  },
  {
    name: "Skin Booster",
    price: "R$ 350,00",
    image: "/assets/tatyelli/catalogo/skin-booster.jpg",
    description: "Tratamento voltado para hidratação profunda, viço e melhora da qualidade da pele.",
  },
  {
    name: "Microagulhamento",
    price: "R$ 289,99",
    image: "/assets/tatyelli/catalogo/microagulhamento.jpg",
    description: "Procedimento estético que auxilia na renovação da pele, textura e estímulo de colágeno.",
  },
  {
    name: "Tabela de Preços",
    price: "Consultar",
    image: "/assets/tatyelli/catalogo/tabela-precos.jpg",
    description: "Confira valores e opções de procedimentos disponíveis na clínica.",
  },
  {
    name: "Drenagem Linfática Premium",
    price: "R$ 159,99",
    image: "/assets/tatyelli/catalogo/drenagem-linfatica-premium.jpg",
    description: "Técnica que auxilia na retenção de líquidos, sensação de leveza e bem-estar corporal.",
  },
  {
    name: "Botox",
    price: "R$ 999,99",
    image: "/assets/tatyelli/catalogo/botox.jpg",
    description: "Procedimento indicado para suavização de linhas de expressão, sempre após avaliação profissional.",
  },
  {
    name: "Bumbum Up",
    price: "R$ 99,99",
    image: "/assets/tatyelli/catalogo/bumbum-up.jpg",
    description: "Protocolo corporal para modelagem e harmonização da região dos glúteos.",
  },
  {
    name: "Criofrequência",
    price: "R$ 159,99",
    image: "/assets/tatyelli/catalogo/criofrequencia.jpg",
    description: "Tecnologia estética utilizada para auxiliar em protocolos de firmeza, contorno e textura da pele.",
  },
  {
    name: "Depilação a Laser",
    price: "R$ 60,00",
    image: "/assets/tatyelli/catalogo/depilacao-a-laser.jpg",
    description: "Auxilia na redução progressiva dos pelos, trazendo mais praticidade para a rotina.",
  },
  {
    name: "Peeling Químico",
    price: "R$ 169,99",
    image: "/assets/tatyelli/catalogo/peeling-quimico.jpg",
    description: "Tratamento indicado para renovação da pele, controle de oleosidade, manchas e textura, conforme avaliação.",
  },
  {
    name: "Método TC",
    price: "R$ 1.999,99",
    image: "/assets/tatyelli/catalogo/metodo-tc.jpg",
    description: "Protocolo exclusivo da clínica, com avaliação individual e estratégia personalizada de tratamento.",
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
