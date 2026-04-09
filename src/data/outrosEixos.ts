import { Leaf, Cpu, Users, Palette, Scale, Shield, Briefcase } from "lucide-react";
import { ThematicAxis } from "./types";

export const meioAmbiente: ThematicAxis = {
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
          paragraphModel: "Segundo dados do INPE, as taxas de desmatamento na Amazônia atingiram patamares alarmantes nos últimos anos. Esse cenário evidencia a fragilidade das políticas de proteção ambiental.",
        },
        {
          category: "law",
          title: "Constituição Federal (Art. 225)",
          description: "Todos têm direito ao meio ambiente ecologicamente equilibrado.",
          howToUse: "Use para evidenciar o descumprimento do direito constitucional ambiental.",
          paragraphModel: "Conforme o artigo 225 da Constituição Federal, todos têm direito ao meio ambiente ecologicamente equilibrado. No entanto, o avanço do desmatamento demonstra que esse direito está sendo sistematicamente violado.",
        },
        {
          category: "philosopher",
          title: "Ailton Krenak",
          description: "Pensador indígena que defende a Terra como ser vivo e sujeito de direitos.",
          howToUse: "Use para trazer uma perspectiva indígena sobre a destruição ambiental.",
          paragraphModel: "Para Ailton Krenak, a Terra é um ser vivo com o qual os seres humanos precisam coexistir com respeito. Essa perspectiva contrasta com o modelo exploratório que tem levado ao desmatamento acelerado da Amazônia.",
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
          paragraphModel: "O Acordo de Paris, firmado em 2015, estabeleceu metas globais para a redução de emissões de gases do efeito estufa. Apesar de signatário, o Brasil enfrenta dificuldades em cumprir seus compromissos.",
        },
        {
          category: "data",
          title: "IPCC – Relatório do Clima",
          description: "Painel da ONU aponta que o aquecimento global já causa impactos irreversíveis.",
          howToUse: "Use para embasar com dados científicos a urgência da crise climática.",
          paragraphModel: "O relatório do IPCC alerta que o aquecimento global já provoca impactos irreversíveis no planeta. Para o Brasil, isso significa maior frequência de secas, enchentes e eventos extremos.",
        },
      ],
    },
    {
      name: "Resíduos sólidos e poluição",
      repertoires: [
        {
          category: "law",
          title: "Política Nacional de Resíduos Sólidos (12.305/2010)",
          description: "Lei que estabelece diretrizes para gestão de lixo no Brasil.",
          howToUse: "Use para mostrar avanços legais e desafios na implementação.",
          paragraphModel: "A Política Nacional de Resíduos Sólidos estabeleceu metas para a redução, reutilização e reciclagem do lixo no Brasil. No entanto, a persistência de lixões revela as dificuldades de implementação.",
        },
        {
          category: "data",
          title: "ONU – Poluição Plástica nos Oceanos",
          description: "Milhões de toneladas de plástico são despejadas nos oceanos anualmente.",
          howToUse: "Use para dimensionar o impacto global da má gestão de resíduos.",
          paragraphModel: "Segundo relatórios da ONU, milhões de toneladas de plástico são despejadas nos oceanos a cada ano, ameaçando a biodiversidade marinha. O Brasil tem responsabilidade central nesse debate.",
        },
      ],
    },
  ],
};

export const tecnologia: ThematicAxis = {
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
          paragraphModel: "De acordo com o IBGE, milhões de brasileiros ainda não possuem acesso à internet. Essa exclusão digital aprofunda desigualdades já existentes, limitando o acesso à informação e ao mercado de trabalho.",
        },
        {
          category: "philosopher",
          title: "Manuel Castells",
          description: "A sociedade em rede cria novas formas de exclusão.",
          howToUse: "Use para argumentar que a tecnologia pode tanto incluir quanto excluir.",
          paragraphModel: "Para Manuel Castells, a sociedade em rede reorganiza as relações sociais e econômicas, mas também cria novas formas de exclusão. No Brasil, aqueles sem acesso à tecnologia ficam à margem das oportunidades digitais.",
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
          paragraphModel: "No filme Ex Machina, são explorados os limites éticos da inteligência artificial. De modo análogo, o avanço acelerado da IA exige uma reflexão profunda sobre seus impactos sociais.",
        },
        {
          category: "law",
          title: "Marco Legal da IA no Brasil (2024)",
          description: "Legislação que regula o uso de inteligência artificial no país.",
          howToUse: "Use para mostrar os avanços regulatórios e os desafios da governança da IA.",
          paragraphModel: "O Marco Legal da Inteligência Artificial estabelece princípios para o uso ético dessa tecnologia. Apesar do avanço, a implementação eficaz depende de fiscalização rigorosa.",
        },
      ],
    },
    {
      name: "Fake news e desinformação",
      repertoires: [
        {
          category: "philosopher",
          title: "Hannah Arendt",
          description: "A mentira na política e o apagamento da verdade factual.",
          howToUse: "Use para discutir como a desinformação ameaça a democracia.",
          paragraphModel: "Hannah Arendt alertou que o apagamento da verdade factual representa uma ameaça à democracia. Nas redes sociais, as fake news cumprem esse papel destruidor, manipulando a opinião pública.",
        },
        {
          category: "history",
          title: "Desinformação na pandemia (2020-2022)",
          description: "Fake news sobre vacinas causaram mortes evitáveis no Brasil.",
          howToUse: "Use como exemplo concreto dos danos reais da desinformação.",
          paragraphModel: "Durante a pandemia de Covid-19, a disseminação de fake news sobre vacinas contribuiu para a hesitação vacinal e mortes evitáveis. Esse episódio demonstra que a desinformação é uma questão de saúde pública.",
        },
      ],
    },
  ],
};

export const cidadania: ThematicAxis = {
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
          paragraphModel: "Segundo Hannah Arendt, a ação política sustenta a democracia. Nesse sentido, o desinteresse político dos jovens brasileiros representa uma ameaça à vitalidade democrática do país.",
        },
        {
          category: "history",
          title: "Movimento dos Caras-Pintadas (1992)",
          description: "Mobilização juvenil que contribuiu para o impeachment de Collor.",
          howToUse: "Use como exemplo histórico de protagonismo político juvenil.",
          paragraphModel: "O Movimento dos Caras-Pintadas, em 1992, demonstrou o poder da mobilização juvenil ao contribuir para o impeachment do presidente Collor.",
        },
      ],
    },
    {
      name: "Racismo estrutural",
      repertoires: [
        {
          category: "philosopher",
          title: "Silvio Almeida",
          description: "O racismo é estrutural e está enraizado nas instituições sociais.",
          howToUse: "Use para argumentar que o racismo vai além de atitudes individuais.",
          paragraphModel: "Segundo Silvio Almeida, o racismo é estrutural, enraizado nas instituições e nas normas sociais. No Brasil, isso se manifesta na desigualdade de acesso à educação, saúde e justiça.",
        },
        {
          category: "law",
          title: "Lei de Cotas (12.711/2012)",
          description: "Reserva vagas em universidades federais para negros, indígenas e estudantes de escola pública.",
          howToUse: "Use para discutir ações afirmativas como resposta ao racismo estrutural.",
          paragraphModel: "A Lei de Cotas representou um avanço na promoção da igualdade racial ao reservar vagas em universidades federais. Essa política busca corrigir distorções históricas causadas pelo racismo estrutural.",
        },
      ],
    },
  ],
};

export const cultura: ThematicAxis = {
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
          paragraphModel: "Para Stuart Hall, as identidades culturais são construções dinâmicas e plurais. A desvalorização da cultura popular brasileira representa um apagamento de identidades historicamente marginalizadas.",
        },
        {
          category: "music",
          title: "Tropicália",
          description: "Movimento artístico que valorizou a mistura cultural brasileira.",
          howToUse: "Use como exemplo de resistência cultural e valorização da identidade nacional.",
          paragraphModel: "O movimento Tropicália promoveu a fusão de elementos da cultura popular com influências internacionais, valorizando a pluralidade brasileira.",
        },
      ],
    },
    {
      name: "Influência das redes sociais na cultura",
      repertoires: [
        {
          category: "philosopher",
          title: "Guy Debord",
          description: "A sociedade do espetáculo transforma tudo em imagem e consumo.",
          howToUse: "Use para criticar a superficialidade das relações mediadas pelas redes sociais.",
          paragraphModel: "Guy Debord argumentou que a vida moderna se reduz a uma acumulação de espetáculos. Nas redes sociais, essa lógica se intensifica: a experiência é substituída pela sua representação.",
        },
        {
          category: "cinema",
          title: "O Dilema das Redes",
          description: "Documentário que expõe os mecanismos manipuladores das redes sociais.",
          howToUse: "Use para discutir os impactos negativos das redes sociais na sociedade.",
          paragraphModel: "O documentário O Dilema das Redes revelou como os algoritmos são projetados para maximizar o engajamento, frequentemente à custa do bem-estar dos usuários.",
        },
      ],
    },
  ],
};

export const desigualdade: ThematicAxis = {
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
          paragraphModel: "Segundo relatório da Oxfam, 1% da população mundial detém mais riqueza do que os 50% mais pobres. No Brasil, essa concentração é ainda mais acentuada.",
        },
        {
          category: "philosopher",
          title: "Karl Marx",
          description: "A luta de classes é o motor da história.",
          howToUse: "Use para analisar as raízes estruturais da desigualdade.",
          paragraphModel: "Na perspectiva de Karl Marx, a desigualdade social é inerente ao sistema capitalista, sustentada pela exploração do trabalho.",
        },
      ],
    },
    {
      name: "Pobreza e vulnerabilidade social",
      repertoires: [
        {
          category: "philosopher",
          title: "Amartya Sen",
          description: "A pobreza é a privação de capacidades e liberdades fundamentais.",
          howToUse: "Use para ampliar o conceito de pobreza além da renda.",
          paragraphModel: "Para Amartya Sen, a pobreza não se resume à falta de renda, mas à privação de capacidades e liberdades. Combater a pobreza exige investimentos em educação, saúde e oportunidades.",
        },
        {
          category: "history",
          title: "Programa Fome Zero (2003)",
          description: "Política de segurança alimentar que reduziu a fome no Brasil.",
          howToUse: "Use como exemplo de política pública bem-sucedida no combate à pobreza.",
          paragraphModel: "O Programa Fome Zero representou um marco na luta contra a fome no Brasil, retirando o país do mapa da fome da FAO.",
        },
      ],
    },
  ],
};

export const violencia: ThematicAxis = {
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
          paragraphModel: "A Lei Maria da Penha representou um avanço no combate à violência doméstica. No entanto, os altos índices de feminicídio demonstram que a legislação sozinha é insuficiente.",
        },
        {
          category: "philosopher",
          title: "Simone de Beauvoir",
          description: "Construção social do gênero e opressão feminina.",
          howToUse: "Use para discutir como a sociedade constrói papéis que sustentam a violência.",
          paragraphModel: "Para Simone de Beauvoir, o gênero é uma construção social que impõe hierarquias. A violência contra a mulher é resultado de uma cultura patriarcal que naturaliza a opressão feminina.",
        },
      ],
    },
    {
      name: "Violência urbana e segurança pública",
      repertoires: [
        {
          category: "philosopher",
          title: "Michel Foucault",
          description: "O poder punitivo e o controle social sobre os corpos.",
          howToUse: "Use para analisar criticamente o sistema de segurança pública.",
          paragraphModel: "Michel Foucault demonstrou que o poder punitivo do Estado é exercido de forma seletiva, recaindo desproporcionalmente sobre os mais vulneráveis.",
        },
        {
          category: "data",
          title: "Atlas da Violência – Homicídios",
          description: "Brasil registra uma das maiores taxas de homicídios do mundo.",
          howToUse: "Use para comprovar a gravidade da violência urbana no Brasil.",
          paragraphModel: "O Atlas da Violência aponta que o Brasil registra anualmente um dos maiores números de homicídios do mundo, evidenciando a falência das políticas de segurança pública.",
        },
      ],
    },
  ],
};

export const trabalho: ThematicAxis = {
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
          paragraphModel: "Segundo Guy Standing, o precariado constitui uma nova classe social marcada pela instabilidade econômica. No Brasil, a crescente informalidade reflete essa realidade.",
        },
        {
          category: "history",
          title: "CLT (1943)",
          description: "Consolidação das Leis do Trabalho como marco de direitos.",
          howToUse: "Use para contextualizar a importância histórica dos direitos trabalhistas.",
          paragraphModel: "A CLT, instituída em 1943, representou um marco na garantia de direitos aos trabalhadores. Contudo, as transformações no mercado de trabalho desafiam essa estrutura.",
        },
      ],
    },
    {
      name: "Desemprego e automação",
      repertoires: [
        {
          category: "philosopher",
          title: "Jeremy Rifkin",
          description: "O fim do emprego como consequência da automação tecnológica.",
          howToUse: "Use para discutir os impactos da automação no mercado de trabalho.",
          paragraphModel: "Jeremy Rifkin argumentou que a automação tecnológica substituirá progressivamente o trabalho humano. No Brasil, esse processo já é visível em indústrias e serviços.",
        },
        {
          category: "history",
          title: "Revolução Industrial",
          description: "Primeiro grande momento de transformação do trabalho pela tecnologia.",
          howToUse: "Use como paralelo histórico para discutir os impactos da automação atual.",
          paragraphModel: "A Revolução Industrial transformou radicalmente o mundo do trabalho. De forma análoga, a atual revolução tecnológica exige que governos se preparem para os impactos da automação.",
        },
      ],
    },
  ],
};
