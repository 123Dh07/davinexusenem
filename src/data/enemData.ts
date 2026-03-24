import { BookOpen, Heart, Leaf, Cpu, Users, Palette, Scale, Shield, Briefcase } from "lucide-react";

export type RepertoireCategory = "philosopher" | "law" | "data" | "cinema" | "literature" | "music" | "history";

export interface Repertoire {
  category: RepertoireCategory;
  title: string;
  description: string;
  howToUse: string;
  paragraphModel: string;
}

export interface Topic {
  name: string;
  repertoires: Repertoire[];
}

export interface ThematicAxis {
  id: string;
  name: string;
  icon: typeof BookOpen;
  topics: Topic[];
}

export const categoryLabels: Record<RepertoireCategory, { label: string; emoji: string }> = {
  philosopher: { label: "Filósofos e Sociólogos", emoji: "🧠" },
  law: { label: "Leis e Documentos", emoji: "📜" },
  data: { label: "Dados e Estatísticas", emoji: "📊" },
  cinema: { label: "Cinema", emoji: "🎬" },
  literature: { label: "Literatura", emoji: "📚" },
  music: { label: "Música", emoji: "🎵" },
  history: { label: "Fatos Históricos", emoji: "🕰️" },
};

export const thematicAxes: ThematicAxis[] = [
  {
    id: "educacao",
    name: "Educação",
    icon: BookOpen,
    topics: [
      {
        name: "Desigualdade no acesso à educação",
        repertoires: [
          {
            category: "philosopher",
            title: "Pierre Bourdieu",
            description: "A escola reproduz desigualdades sociais através do capital cultural.",
            howToUse: "Use para argumentar que o sistema educacional perpetua as diferenças de classe.",
            paragraphModel: "Segundo Pierre Bourdieu, a escola atua como um mecanismo de reprodução das desigualdades sociais. Nesse sentido, observa-se que, no Brasil, estudantes de baixa renda possuem menos acesso à educação de qualidade, o que evidencia a permanência das desigualdades estruturais.",
          },
          {
            category: "law",
            title: "Constituição Federal (Art. 205)",
            description: "A educação é direito de todos e dever do Estado e da família.",
            howToUse: "Use para mostrar a contradição entre o que a lei garante e a realidade.",
            paragraphModel: "Conforme a Constituição Federal de 1988, a educação é um direito de todos e dever do Estado. No entanto, na prática, esse direito não é plenamente garantido, especialmente em regiões periféricas. Dessa forma, percebe-se a necessidade de medidas mais eficazes para assegurar o acesso igualitário.",
          },
          {
            category: "data",
            title: "IBGE – Desigualdade Educacional",
            description: "Dados mostram disparidade nos índices de escolaridade entre regiões.",
            howToUse: "Use para embasar com dados concretos a argumentação sobre desigualdade.",
            paragraphModel: "De acordo com o IBGE, grande parte da população em áreas periféricas apresenta baixos índices de escolaridade. Esse cenário demonstra a persistência da desigualdade educacional, o que reforça a urgência de políticas públicas eficientes.",
          },
          {
            category: "cinema",
            title: "Escritores da Liberdade",
            description: "Filme retrata a transformação social por meio da educação.",
            howToUse: "Use como exemplo de como a educação pode mudar realidades.",
            paragraphModel: "No filme Escritores da Liberdade, é retratada a transformação social por meio da educação. De maneira análoga, na realidade brasileira, o acesso ao ensino pode mudar trajetórias, embora ainda não seja garantido a todos.",
          },
          {
            category: "literature",
            title: "Vidas Secas – Graciliano Ramos",
            description: "Exclusão social e falta de acesso à educação no sertão.",
            howToUse: "Use para ilustrar a exclusão histórica das populações vulneráveis.",
            paragraphModel: "Na obra Vidas Secas, de Graciliano Ramos, é evidenciada a exclusão social vivida por famílias em situação de vulnerabilidade. De forma semelhante, essa realidade ainda se reflete na dificuldade de acesso à educação no Brasil.",
          },
        ],
      },
      {
        name: "Evasão escolar",
        repertoires: [
          {
            category: "philosopher",
            title: "Paulo Freire",
            description: "A educação bancária desmotiva e aliena o estudante.",
            howToUse: "Use para argumentar que métodos ultrapassados contribuem para a evasão.",
            paragraphModel: "Segundo Paulo Freire, a educação bancária, baseada na mera transmissão de conteúdos, aliena o estudante e o desmotiva. Nesse contexto, a evasão escolar no Brasil pode ser compreendida como resultado de um sistema que não dialoga com a realidade dos alunos.",
          },
          {
            category: "data",
            title: "PNAD – Taxa de Abandono Escolar",
            description: "Milhões de jovens abandonam a escola antes de completar o ensino médio.",
            howToUse: "Use para comprovar a gravidade do problema com números oficiais.",
            paragraphModel: "Conforme dados da PNAD, milhões de jovens brasileiros abandonam a escola antes de concluir o ensino médio. Esse dado alarmante revela a urgência de políticas públicas que tornem a escola mais atrativa e acessível.",
          },
        ],
      },
      {
        name: "Desvalorização do professor",
        repertoires: [
          {
            category: "data",
            title: "OCDE – Salário de Professores",
            description: "Brasil paga um dos menores salários a professores entre os países avaliados.",
            howToUse: "Use para argumentar que a desvalorização salarial impacta a qualidade do ensino.",
            paragraphModel: "De acordo com a OCDE, o Brasil está entre os países que menos remuneram seus professores. Essa desvalorização salarial compromete a atratividade da carreira docente e, consequentemente, a qualidade do ensino ofertado.",
          },
          {
            category: "philosopher",
            title: "Dermeval Saviani",
            description: "A formação e valorização do professor são essenciais para a educação.",
            howToUse: "Use para defender investimentos na formação e remuneração docente.",
            paragraphModel: "Para Dermeval Saviani, a qualidade da educação está diretamente ligada à formação e à valorização do professor. Assim, a desvalorização da carreira docente no Brasil configura um obstáculo estrutural ao desenvolvimento educacional do país.",
          },
        ],
      },
    ],
  },
  {
    id: "saude",
    name: "Saúde",
    icon: Heart,
    topics: [
      {
        name: "Saúde mental dos jovens",
        repertoires: [
          {
            category: "philosopher",
            title: "Zygmunt Bauman",
            description: "A modernidade líquida gera relações frágeis e inseguranças.",
            howToUse: "Use para relacionar a fragilidade das relações modernas com o adoecimento mental.",
            paragraphModel: "Segundo Zygmunt Bauman, a modernidade líquida é marcada pela fragilidade das relações e pela insegurança constante. Nesse cenário, os jovens brasileiros tornam-se vulneráveis a transtornos como ansiedade e depressão, agravados pela pressão social e digital.",
          },
          {
            category: "data",
            title: "OMS – Saúde Mental",
            description: "Brasil é o país com maior taxa de ansiedade no mundo.",
            howToUse: "Use para dimensionar o problema com dados internacionais.",
            paragraphModel: "De acordo com a OMS, o Brasil lidera o ranking mundial de transtornos de ansiedade. Esse dado evidencia a necessidade urgente de políticas públicas voltadas à saúde mental, especialmente entre os jovens.",
          },
        ],
      },
      {
        name: "Acesso ao SUS",
        repertoires: [
          {
            category: "law",
            title: "Constituição Federal (Art. 196)",
            description: "Saúde é direito de todos e dever do Estado.",
            howToUse: "Use para mostrar a distância entre o texto legal e a realidade do SUS.",
            paragraphModel: "A Constituição Federal de 1988 garante, em seu artigo 196, que a saúde é direito de todos e dever do Estado. Contudo, a superlotação e a precariedade do SUS em diversas regiões demonstram que esse direito não é plenamente efetivado.",
          },
        ],
      },
    ],
  },
  {
    id: "meio-ambiente",
    name: "Meio Ambiente",
    icon: Leaf,
    topics: [
      {
        name: "Desmatamento na Amazônia",
        repertoires: [
          {
            category: "data",
            title: "INPE – Taxas de Desmatamento",
            description: "Dados de satélite revelam aumento alarmante do desmatamento.",
            howToUse: "Use para comprovar o avanço da destruição ambiental com dados científicos.",
            paragraphModel: "Segundo dados do INPE, as taxas de desmatamento na Amazônia atingiram patamares alarmantes nos últimos anos. Esse cenário evidencia a fragilidade das políticas de proteção ambiental e a urgência de ações mais efetivas.",
          },
          {
            category: "law",
            title: "Constituição Federal (Art. 225)",
            description: "Todos têm direito ao meio ambiente ecologicamente equilibrado.",
            howToUse: "Use para evidenciar o descumprimento do direito constitucional ambiental.",
            paragraphModel: "Conforme o artigo 225 da Constituição Federal, todos têm direito ao meio ambiente ecologicamente equilibrado. No entanto, o avanço do desmatamento na Amazônia demonstra que esse direito está sendo sistematicamente violado.",
          },
        ],
      },
      {
        name: "Mudanças climáticas",
        repertoires: [
          {
            category: "history",
            title: "Acordo de Paris (2015)",
            description: "Compromisso internacional para limitar o aquecimento global.",
            howToUse: "Use para contextualizar os compromissos assumidos pelo Brasil no cenário internacional.",
            paragraphModel: "O Acordo de Paris, firmado em 2015, estabeleceu metas globais para a redução de emissões de gases do efeito estufa. Apesar de signatário, o Brasil enfrenta dificuldades em cumprir seus compromissos, o que compromete a luta contra as mudanças climáticas.",
          },
        ],
      },
    ],
  },
  {
    id: "tecnologia",
    name: "Tecnologia",
    icon: Cpu,
    topics: [
      {
        name: "Exclusão digital",
        repertoires: [
          {
            category: "data",
            title: "IBGE – Acesso à Internet",
            description: "Milhões de brasileiros ainda não têm acesso à internet.",
            howToUse: "Use para demonstrar como a exclusão digital aprofunda outras desigualdades.",
            paragraphModel: "De acordo com o IBGE, milhões de brasileiros ainda não possuem acesso à internet. Essa exclusão digital aprofunda desigualdades já existentes, limitando o acesso à informação, à educação e ao mercado de trabalho.",
          },
          {
            category: "philosopher",
            title: "Manuel Castells",
            description: "A sociedade em rede cria novas formas de exclusão.",
            howToUse: "Use para argumentar que a tecnologia pode tanto incluir quanto excluir.",
            paragraphModel: "Para Manuel Castells, a sociedade em rede reorganiza as relações sociais e econômicas, mas também cria novas formas de exclusão. No Brasil, aqueles sem acesso à tecnologia ficam à margem das oportunidades geradas pela era digital.",
          },
        ],
      },
      {
        name: "Inteligência artificial e ética",
        repertoires: [
          {
            category: "cinema",
            title: "Ex Machina",
            description: "Filme que questiona os limites éticos da inteligência artificial.",
            howToUse: "Use para discutir os dilemas morais do avanço tecnológico.",
            paragraphModel: "No filme Ex Machina, são explorados os limites éticos da inteligência artificial. De modo análogo, o avanço acelerado da IA no Brasil e no mundo exige uma reflexão profunda sobre seus impactos sociais e a necessidade de regulamentação.",
          },
        ],
      },
    ],
  },
  {
    id: "cidadania",
    name: "Cidadania e Democracia",
    icon: Users,
    topics: [
      {
        name: "Participação política dos jovens",
        repertoires: [
          {
            category: "philosopher",
            title: "Hannah Arendt",
            description: "A ação política é fundamental para a construção da democracia.",
            howToUse: "Use para defender a importância do engajamento cívico dos jovens.",
            paragraphModel: "Segundo Hannah Arendt, a ação política é o que diferencia o ser humano e sustenta a democracia. Nesse sentido, o desinteresse político dos jovens brasileiros representa uma ameaça à vitalidade democrática do país.",
          },
          {
            category: "history",
            title: "Movimento dos Caras-Pintadas (1992)",
            description: "Mobilização juvenil que contribuiu para o impeachment de Collor.",
            howToUse: "Use como exemplo histórico de protagonismo político juvenil.",
            paragraphModel: "O Movimento dos Caras-Pintadas, em 1992, demonstrou o poder da mobilização juvenil ao contribuir para o impeachment do presidente Collor. Esse episódio evidencia que a participação ativa dos jovens é essencial para o fortalecimento democrático.",
          },
        ],
      },
    ],
  },
  {
    id: "cultura",
    name: "Cultura e Sociedade",
    icon: Palette,
    topics: [
      {
        name: "Valorização da cultura popular",
        repertoires: [
          {
            category: "philosopher",
            title: "Stuart Hall",
            description: "A identidade cultural é construída e plural.",
            howToUse: "Use para defender a diversidade cultural contra a homogeneização.",
            paragraphModel: "Para Stuart Hall, as identidades culturais são construções dinâmicas e plurais. Nesse contexto, a desvalorização da cultura popular brasileira representa não apenas uma perda artística, mas um apagamento de identidades historicamente marginalizadas.",
          },
          {
            category: "music",
            title: "Tropicália",
            description: "Movimento artístico que valorizou a mistura cultural brasileira.",
            howToUse: "Use como exemplo de resistência cultural e valorização da identidade nacional.",
            paragraphModel: "O movimento Tropicália, na década de 1960, promoveu a fusão de elementos da cultura popular com influências internacionais, valorizando a pluralidade brasileira. Esse exemplo demonstra como a arte pode ser instrumento de resistência e afirmação identitária.",
          },
        ],
      },
    ],
  },
  {
    id: "desigualdade",
    name: "Desigualdade Social",
    icon: Scale,
    topics: [
      {
        name: "Concentração de renda",
        repertoires: [
          {
            category: "data",
            title: "Oxfam – Desigualdade Global",
            description: "1% da população detém mais riqueza que os 50% mais pobres.",
            howToUse: "Use para dimensionar a gravidade da concentração de renda.",
            paragraphModel: "Segundo relatório da Oxfam, 1% da população mundial detém mais riqueza do que os 50% mais pobres. No Brasil, essa concentração é ainda mais acentuada, perpetuando ciclos de pobreza e exclusão social.",
          },
          {
            category: "philosopher",
            title: "Karl Marx",
            description: "A luta de classes é o motor da história.",
            howToUse: "Use para analisar as raízes estruturais da desigualdade.",
            paragraphModel: "Na perspectiva de Karl Marx, a desigualdade social é inerente ao sistema capitalista, sustentada pela exploração do trabalho. Essa análise permanece relevante ao observar a concentração de renda no Brasil, que perpetua a exclusão de milhões de brasileiros.",
          },
        ],
      },
    ],
  },
  {
    id: "violencia",
    name: "Violência",
    icon: Shield,
    topics: [
      {
        name: "Violência contra a mulher",
        repertoires: [
          {
            category: "law",
            title: "Lei Maria da Penha (11.340/2006)",
            description: "Mecanismo legal de proteção contra violência doméstica.",
            howToUse: "Use para argumentar sobre avanços legais e desafios na implementação.",
            paragraphModel: "A Lei Maria da Penha, sancionada em 2006, representou um avanço significativo no combate à violência doméstica no Brasil. No entanto, os altos índices de feminicídio demonstram que a legislação, por si só, é insuficiente sem políticas de prevenção e acolhimento efetivas.",
          },
          {
            category: "philosopher",
            title: "Simone de Beauvoir",
            description: "\"Não se nasce mulher, torna-se mulher\" – construção social do gênero.",
            howToUse: "Use para discutir como a sociedade constrói papéis que sustentam a violência.",
            paragraphModel: "Para Simone de Beauvoir, o gênero é uma construção social que impõe papéis e hierarquias. Nessa lógica, a violência contra a mulher no Brasil não é um fenômeno isolado, mas resultado de uma cultura patriarcal que naturaliza a opressão feminina.",
          },
        ],
      },
    ],
  },
  {
    id: "trabalho",
    name: "Trabalho e Economia",
    icon: Briefcase,
    topics: [
      {
        name: "Precarização do trabalho",
        repertoires: [
          {
            category: "philosopher",
            title: "Guy Standing",
            description: "O precariado é a nova classe social marcada pela instabilidade.",
            howToUse: "Use para discutir a informalidade e a falta de direitos trabalhistas.",
            paragraphModel: "Segundo Guy Standing, o precariado constitui uma nova classe social marcada pela instabilidade econômica e pela ausência de direitos trabalhistas. No Brasil, a crescente informalidade do trabalho reflete essa realidade, agravando a vulnerabilidade de milhões de trabalhadores.",
          },
          {
            category: "history",
            title: "CLT (1943)",
            description: "Consolidação das Leis do Trabalho como marco de direitos.",
            howToUse: "Use para contextualizar a importância histórica dos direitos trabalhistas.",
            paragraphModel: "A Consolidação das Leis do Trabalho, instituída em 1943, representou um marco na garantia de direitos aos trabalhadores brasileiros. Contudo, as recentes transformações no mercado de trabalho desafiam essa estrutura, exigindo novas formas de proteção social.",
          },
        ],
      },
    ],
  },
];
