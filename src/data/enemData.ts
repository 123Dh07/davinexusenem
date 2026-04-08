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
          {
            category: "history",
            title: "Programa Bolsa Família",
            description: "Política de transferência de renda que reduziu a evasão escolar.",
            howToUse: "Use para mostrar como políticas sociais impactam a permanência escolar.",
            paragraphModel: "O Programa Bolsa Família, ao condicionar o benefício à frequência escolar, contribuiu para a redução da evasão entre estudantes em situação de vulnerabilidade. Esse exemplo demonstra que a permanência na escola está diretamente ligada às condições socioeconômicas das famílias.",
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
          {
            category: "law",
            title: "Lei do Piso Salarial (11.738/2008)",
            description: "Estabelece o piso nacional para os professores da educação básica.",
            howToUse: "Use para mostrar avanços legais e o descumprimento por parte de alguns estados.",
            paragraphModel: "A Lei 11.738/2008 estabeleceu o piso salarial nacional para professores da educação básica, representando um avanço no reconhecimento da carreira docente. Contudo, o descumprimento dessa legislação por parte de alguns estados evidencia a persistência da desvalorização profissional.",
          },
        ],
      },
      {
        name: "Impacto da tecnologia na educação",
        repertoires: [
          {
            category: "philosopher",
            title: "Lev Vygotsky",
            description: "A aprendizagem ocorre na interação social e com o meio.",
            howToUse: "Use para defender o uso de tecnologias colaborativas no ensino.",
            paragraphModel: "Para Lev Vygotsky, a aprendizagem se desenvolve na interação social e com o ambiente. Nesse sentido, o uso de tecnologias digitais na educação pode potencializar essa troca, desde que utilizado de forma pedagógica e inclusiva.",
          },
          {
            category: "history",
            title: "Pandemia e ensino remoto (2020)",
            description: "A Covid-19 escancarou as desigualdades no acesso à educação digital.",
            howToUse: "Use para demonstrar como a exclusão digital afeta o direito à educação.",
            paragraphModel: "Durante a pandemia de Covid-19, a adoção do ensino remoto revelou profundas desigualdades no acesso à tecnologia. Estudantes sem computador ou internet ficaram excluídos do processo educacional, evidenciando que a transformação digital da escola exige, antes de tudo, inclusão digital.",
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
          {
            category: "cinema",
            title: "13 Reasons Why",
            description: "Série que aborda suicídio e saúde mental entre adolescentes.",
            howToUse: "Use para ilustrar o impacto do isolamento e da pressão social na juventude.",
            paragraphModel: "A série 13 Reasons Why trouxe à tona o debate sobre saúde mental e suicídio entre adolescentes, mostrando como o isolamento e o bullying podem ser devastadores. De forma análoga, a realidade brasileira exige atenção redobrada à saúde mental nas escolas.",
          },
          {
            category: "law",
            title: "Lei de Saúde Mental (10.216/2001)",
            description: "Garante direitos às pessoas com transtornos mentais no Brasil.",
            howToUse: "Use para mostrar avanços legais e lacunas na atenção à saúde mental.",
            paragraphModel: "A Lei 10.216/2001 representou um marco ao garantir direitos às pessoas com transtornos mentais e propor a humanização do atendimento. No entanto, a escassez de serviços especializados, sobretudo para jovens, demonstra que sua implementação ainda é insuficiente.",
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
          {
            category: "data",
            title: "CNS – Subfinanciamento da Saúde",
            description: "Brasil investe abaixo do recomendado pela OMS em saúde pública.",
            howToUse: "Use para argumentar que o subfinanciamento compromete a universalidade do SUS.",
            paragraphModel: "Segundo o Conselho Nacional de Saúde, o Brasil investe proporcionalmente menos em saúde pública do que o recomendado pela OMS. Esse subfinanciamento compromete a capacidade do SUS de atender a toda a população com qualidade e dignidade.",
          },
        ],
      },
      {
        name: "Obesidade e alimentação",
        repertoires: [
          {
            category: "data",
            title: "IBGE – Pesquisa de Orçamentos Familiares",
            description: "Crescimento da obesidade no Brasil, especialmente entre jovens.",
            howToUse: "Use para comprovar o avanço da obesidade como problema de saúde pública.",
            paragraphModel: "De acordo com o IBGE, o índice de obesidade no Brasil cresceu significativamente nas últimas décadas, atingindo inclusive crianças e adolescentes. Esse cenário reflete mudanças nos hábitos alimentares e a influência da indústria de ultraprocessados.",
          },
          {
            category: "law",
            title: "Lei de Rotulagem de Alimentos (2022)",
            description: "Obriga informações nutricionais claras nos rótulos de alimentos.",
            howToUse: "Use para mostrar avanços na política de saúde alimentar.",
            paragraphModel: "A nova regulamentação de rotulagem de alimentos, implementada em 2022, tornou obrigatória a identificação clara de produtos com alto teor de açúcar, sódio e gordura. Essa medida representa um avanço na promoção de escolhas alimentares mais conscientes pela população.",
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
          {
            category: "philosopher",
            title: "Ailton Krenak",
            description: "Pensador indígena que defende a Terra como ser vivo e sujeito de direitos.",
            howToUse: "Use para trazer uma perspectiva indígena e filosófica sobre a destruição ambiental.",
            paragraphModel: "Para Ailton Krenak, a Terra é um ser vivo com o qual os seres humanos precisam coexistir com respeito. Essa perspectiva indígena contrasta com o modelo exploratório que tem levado ao desmatamento acelerado da Amazônia, colocando em risco não apenas a biodiversidade, mas culturas milenares.",
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
          {
            category: "data",
            title: "IPCC – Relatório do Clima",
            description: "Painel da ONU aponta que o aquecimento global já causa impactos irreversíveis.",
            howToUse: "Use para embasar com dados científicos a urgência da crise climática.",
            paragraphModel: "O relatório do IPCC, painel científico da ONU, alerta que o aquecimento global já provoca impactos irreversíveis no planeta. Para o Brasil, isso significa maior frequência de secas, enchentes e eventos extremos, exigindo políticas de adaptação e mitigação urgentes.",
          },
          {
            category: "cinema",
            title: "Uma Verdade Inconveniente",
            description: "Documentário de Al Gore sobre as causas e consequências das mudanças climáticas.",
            howToUse: "Use para ilustrar a urgência da crise climática de forma didática.",
            paragraphModel: "O documentário Uma Verdade Inconveniente, de Al Gore, expôs ao mundo as consequências devastadoras das mudanças climáticas causadas pela ação humana. Esse alerta permanece atual e reforça a necessidade de compromissos concretos dos governos e da sociedade.",
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
            paragraphModel: "A Política Nacional de Resíduos Sólidos, instituída em 2010, estabeleceu metas para a redução, reutilização e reciclagem do lixo no Brasil. No entanto, a persistência de lixões a céu aberto em diversas regiões revela as dificuldades de implementação dessa legislação.",
          },
          {
            category: "data",
            title: "ONU – Poluição Plástica nos Oceanos",
            description: "Milhões de toneladas de plástico são despejadas nos oceanos anualmente.",
            howToUse: "Use para dimensionar o impacto global da má gestão de resíduos.",
            paragraphModel: "Segundo relatórios da ONU, milhões de toneladas de plástico são despejadas nos oceanos a cada ano, ameaçando a biodiversidade marinha. O Brasil, como um dos maiores produtores de resíduos plásticos, tem responsabilidade central nesse debate.",
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
          {
            category: "philosopher",
            title: "Nick Bostrom",
            description: "Filósofo que alerta para os riscos existenciais da superinteligência.",
            howToUse: "Use para aprofundar o debate sobre os riscos da IA sem regulamentação.",
            paragraphModel: "O filósofo Nick Bostrom alerta que o desenvolvimento de uma inteligência artificial superinteligente sem controles adequados representa um dos maiores riscos à humanidade. Esse debate é urgente diante do avanço acelerado das tecnologias de IA no mundo.",
          },
          {
            category: "law",
            title: "Marco Legal da IA no Brasil (2024)",
            description: "Legislação que regula o uso de inteligência artificial no país.",
            howToUse: "Use para mostrar os avanços regulatórios e os desafios da governança da IA.",
            paragraphModel: "O Marco Legal da Inteligência Artificial, aprovado no Brasil em 2024, estabelece princípios para o uso ético e responsável dessa tecnologia. Apesar do avanço, a implementação eficaz depende de fiscalização rigorosa e de uma cultura digital que priorize os direitos humanos.",
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
            paragraphModel: "Hannah Arendt, ao analisar a mentira na política, alertou que o apagamento da verdade factual representa uma ameaça à democracia. Na era das redes sociais, as fake news cumprem esse papel destruidor, manipulando a opinião pública e corroendo a confiança nas instituições.",
          },
          {
            category: "data",
            title: "Reuters Institute – Digital News Report",
            description: "Brasil está entre os países mais afetados pela desinformação.",
            howToUse: "Use para dimensionar o problema da desinformação com dados internacionais.",
            paragraphModel: "Segundo o Reuters Institute, o Brasil figura entre os países mais afetados pela desinformação digital. Esse cenário compromete processos eleitorais, políticas de saúde pública e a coesão social, exigindo ações coordenadas de combate às fake news.",
          },
          {
            category: "history",
            title: "Desinformação na pandemia (2020-2022)",
            description: "Fake news sobre vacinas causaram mortes evitáveis no Brasil.",
            howToUse: "Use como exemplo concreto dos danos reais da desinformação.",
            paragraphModel: "Durante a pandemia de Covid-19, a disseminação de fake news sobre vacinas contribuiu para a hesitação vacinal e mortes evitáveis no Brasil. Esse episódio histórico demonstra que a desinformação não é apenas um problema virtual, mas uma questão de saúde pública.",
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
          {
            category: "data",
            title: "TSE – Abstenção Eleitoral",
            description: "Crescimento da abstenção entre eleitores jovens nas últimas eleições.",
            howToUse: "Use para mostrar a desconexão entre jovens e política institucional.",
            paragraphModel: "Dados do TSE revelam crescimento da abstenção eleitoral entre jovens nas últimas eleições brasileiras. Esse fenômeno reflete o distanciamento entre a política institucional e os anseios da juventude, exigindo novas formas de engajamento cívico.",
          },
        ],
      },
      {
        name: "Direitos humanos e cidadania",
        repertoires: [
          {
            category: "law",
            title: "Declaração Universal dos Direitos Humanos (1948)",
            description: "Documento que estabelece os direitos fundamentais de todos os seres humanos.",
            howToUse: "Use como base para argumentar sobre violações de direitos no Brasil.",
            paragraphModel: "A Declaração Universal dos Direitos Humanos, proclamada pela ONU em 1948, estabelece que todos os seres humanos nascem livres e iguais em dignidade e direitos. No Brasil, a persistência de desigualdades estruturais evidencia que esses princípios ainda não foram plenamente efetivados.",
          },
          {
            category: "philosopher",
            title: "John Rawls",
            description: "A teoria da justiça como equidade.",
            howToUse: "Use para embasar argumentos sobre justiça social e distribuição de direitos.",
            paragraphModel: "Para John Rawls, uma sociedade justa é aquela que garante igualdade de oportunidades e protege os mais vulneráveis. Sob essa perspectiva, as desigualdades estruturais brasileiras representam uma violação aos princípios básicos de justiça e cidadania.",
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
            paragraphModel: "Segundo Silvio Almeida, o racismo é estrutural, ou seja, está enraizado nas instituições, nas práticas e nas normas sociais. No Brasil, isso se manifesta na desigualdade de acesso à educação, saúde e justiça entre brancos e negros.",
          },
          {
            category: "data",
            title: "Atlas da Violência – Homicídios de Negros",
            description: "Negros são desproporcionalmente vítimas de homicídios no Brasil.",
            howToUse: "Use para comprovar com dados o impacto do racismo estrutural.",
            paragraphModel: "O Atlas da Violência aponta que negros representam a maioria esmagadora das vítimas de homicídios no Brasil. Esse dado revela como o racismo estrutural se traduz em violência concreta, tornando urgente a adoção de políticas de segurança que considerem o recorte racial.",
          },
          {
            category: "law",
            title: "Lei de Cotas (12.711/2012)",
            description: "Reserva vagas em universidades federais para negros, indígenas e estudantes de escola pública.",
            howToUse: "Use para discutir ações afirmativas como resposta ao racismo estrutural.",
            paragraphModel: "A Lei de Cotas, sancionada em 2012, representou um avanço na promoção da igualdade racial ao reservar vagas em universidades federais para negros, indígenas e estudantes de escola pública. Essa política afirmativa busca corrigir distorções históricas causadas pelo racismo estrutural.",
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
      {
        name: "Influência das redes sociais na cultura",
        repertoires: [
          {
            category: "philosopher",
            title: "Guy Debord",
            description: "A sociedade do espetáculo transforma tudo em imagem e consumo.",
            howToUse: "Use para criticar a superficialidade das relações mediadas pelas redes sociais.",
            paragraphModel: "Guy Debord, em A Sociedade do Espetáculo, argumentou que a vida moderna se reduz a uma acumulação de espetáculos. Nas redes sociais contemporâneas, essa lógica se intensifica: a experiência é substituída pela sua representação, gerando uma cultura do entretenimento vazio.",
          },
          {
            category: "data",
            title: "DataReportal – Uso de Redes Sociais no Brasil",
            description: "Brasil está entre os países que mais usam redes sociais no mundo.",
            howToUse: "Use para contextualizar o impacto das redes na cultura brasileira.",
            paragraphModel: "Segundo o DataReportal, o Brasil está entre os países que mais utilizam redes sociais no mundo. Esse dado revela como essas plataformas moldam hábitos culturais, influenciam opiniões e transformam as formas de comunicação e entretenimento da população.",
          },
          {
            category: "cinema",
            title: "O Dilema das Redes",
            description: "Documentário que expõe os mecanismos manipuladores das redes sociais.",
            howToUse: "Use para discutir os impactos negativos das redes sociais na sociedade.",
            paragraphModel: "O documentário O Dilema das Redes revelou como os algoritmos das plataformas digitais são projetados para maximizar o engajamento, frequentemente à custa do bem-estar dos usuários. Esse mecanismo tem impactos profundos na saúde mental, na polarização política e na cultura.",
          },
        ],
      },
      {
        name: "Identidade e diversidade",
        repertoires: [
          {
            category: "philosopher",
            title: "Frantz Fanon",
            description: "A colonização destruiu identidades e culturas dos povos colonizados.",
            howToUse: "Use para discutir os impactos históricos do colonialismo na identidade cultural.",
            paragraphModel: "Frantz Fanon demonstrou que o colonialismo não apenas explorou economicamente os povos dominados, mas destruiu suas identidades culturais. No Brasil, os reflexos desse processo histórico ainda se manifestam na desvalorização de culturas negras e indígenas.",
          },
          {
            category: "literature",
            title: "Quarto de Despejo – Carolina Maria de Jesus",
            description: "Relato de uma mulher negra e pobre sobre a vida na favela.",
            howToUse: "Use para ilustrar a interseccionalidade entre raça, gênero e classe social.",
            paragraphModel: "Em Quarto de Despejo, Carolina Maria de Jesus narra com crueza a vida na favela, evidenciando a intersecção entre pobreza, racismo e machismo. Essa obra é um documento histórico que revela as múltiplas opressões enfrentadas por mulheres negras no Brasil.",
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
          {
            category: "data",
            title: "Coeficiente de Gini – Brasil",
            description: "O Brasil é um dos países mais desiguais do mundo segundo o índice Gini.",
            howToUse: "Use para comprovar com dados a gravidade da desigualdade brasileira.",
            paragraphModel: "O coeficiente de Gini, indicador internacional de desigualdade, posiciona o Brasil entre os países mais desiguais do mundo. Esse dado reforça a necessidade de políticas redistributivas que promovam justiça social e reduzam o abismo entre ricos e pobres.",
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
            paragraphModel: "Para Amartya Sen, a pobreza não se resume à falta de renda, mas à privação de capacidades e liberdades fundamentais. Sob essa perspectiva, combater a pobreza no Brasil exige investimentos em educação, saúde e oportunidades que ampliem as possibilidades de vida dos mais vulneráveis.",
          },
          {
            category: "history",
            title: "Programa Fome Zero (2003)",
            description: "Política de segurança alimentar que reduziu a fome no Brasil.",
            howToUse: "Use como exemplo de política pública bem-sucedida no combate à pobreza.",
            paragraphModel: "O Programa Fome Zero, lançado em 2003, representou um marco na luta contra a fome e a pobreza no Brasil, retirando o país do mapa da fome da FAO. Esse exemplo demonstra que políticas públicas integradas podem produzir resultados concretos na redução da vulnerabilidade social.",
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
          {
            category: "data",
            title: "Atlas da Violência – Feminicídio",
            description: "Brasil registra altos índices de feminicídio entre países do mundo.",
            howToUse: "Use para dimensionar a gravidade da violência de gênero com dados.",
            paragraphModel: "O Atlas da Violência aponta que o Brasil é um dos países com maiores índices de feminicídio no mundo. Esse dado revela a urgência de políticas integradas de proteção à mulher, que vão desde a educação para a igualdade de gênero até o fortalecimento das redes de apoio.",
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
            paragraphModel: "Michel Foucault demonstrou que o poder punitivo do Estado é exercido de forma seletiva, recaindo desproporcionalmente sobre os mais vulneráveis. No Brasil, essa lógica se manifesta na abordagem policial racializada e na superlotação dos presídios.",
          },
          {
            category: "data",
            title: "Atlas da Violência – Homicídios",
            description: "Brasil registra uma das maiores taxas de homicídios do mundo.",
            howToUse: "Use para comprovar a gravidade da violência urbana no Brasil.",
            paragraphModel: "O Atlas da Violência aponta que o Brasil registra anualmente um dos maiores números absolutos de homicídios do mundo. Esse cenário evidencia a falência das políticas de segurança pública e a necessidade de abordagens que combinem repressão qualificada e prevenção social.",
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
          {
            category: "data",
            title: "IBGE – Taxa de Informalidade",
            description: "Mais de 40% dos trabalhadores brasileiros estão na informalidade.",
            howToUse: "Use para dimensionar a precarização do trabalho com dados oficiais.",
            paragraphModel: "Segundo o IBGE, mais de 40% dos trabalhadores brasileiros estão na informalidade, sem acesso a direitos como férias, FGTS e aposentadoria. Esse dado revela a profundidade da precarização do trabalho no país e a urgência de políticas de formalização.",
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
            paragraphModel: "Jeremy Rifkin, em O Fim dos Empregos, argumentou que a automação tecnológica substituirá progressivamente o trabalho humano em diversos setores. No Brasil, esse processo já é visível em indústrias e serviços, exigindo políticas de requalificação profissional e proteção social.",
          },
          {
            category: "data",
            title: "FGV – Desemprego Jovem no Brasil",
            description: "Jovens são os mais afetados pelo desemprego no Brasil.",
            howToUse: "Use para mostrar como o desemprego impacta desproporcionalmente os jovens.",
            paragraphModel: "Pesquisas da FGV apontam que o desemprego entre jovens no Brasil é proporcionalmente muito maior do que na população geral. Esse fenômeno compromete a inserção social dessa geração, aumentando a vulnerabilidade e a exclusão.",
          },
          {
            category: "history",
            title: "Revolução Industrial",
            description: "Primeiro grande momento de transformação do trabalho pela tecnologia.",
            howToUse: "Use como paralelo histórico para discutir os impactos da automação atual.",
            paragraphModel: "A Revolução Industrial, no século XVIII, transformou radicalmente o mundo do trabalho, gerando tanto novas oportunidades quanto exclusão social. De forma análoga, a atual revolução tecnológica exige que governos e sociedade se preparem para os impactos da automação no emprego.",
          },
        ],
      },
    ],
  },
];
