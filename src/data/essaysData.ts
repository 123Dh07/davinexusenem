import { BookOpen, Heart, Leaf, Cpu, Users, Palette, Scale, Shield, Briefcase } from "lucide-react";

export interface RepertoireUsed {
  title: string;
  category: string;
}

export interface Essay {
  id: string;
  theme: string;
  axisId: string;
  topicName: string;
  score: number;
  introduction: string;
  development1: string;
  development2: string;
  conclusion: string;
  repertoiresUsed: RepertoireUsed[];
}

export const essays: Essay[] = [
  // ============================================================
  // EDUCAÇÃO
  // ============================================================
  {
    id: "educacao-desigualdade",
    theme: "A desigualdade no acesso à educação no Brasil",
    axisId: "educacao",
    topicName: "Desigualdade no acesso à educação",
    score: 1000,
    introduction: `A filósofa Hannah Arendt afirmou que a educação é o ponto em que decidimos se amamos o mundo o suficiente para assumir a responsabilidade por ele. No Brasil, entretanto, essa responsabilidade tem sido distribuída de forma desigual: enquanto parte da população acessa escolas bem estruturadas, milhões de estudantes enfrentam condições precárias de ensino. Nesse contexto, a desigualdade no acesso à educação configura-se como um dos principais obstáculos ao desenvolvimento social do país, perpetuando ciclos de pobreza e exclusão.`,
    development1: `Segundo o sociólogo Pierre Bourdieu, a escola reproduz as desigualdades sociais por meio do capital cultural, favorecendo aqueles que já possuem recursos e saberes valorizados socialmente. Essa lógica se manifesta de forma clara no Brasil: conforme dados do IBGE, estudantes de regiões periféricas apresentam índices de escolaridade significativamente inferiores aos das regiões mais desenvolvidas. Além disso, a Constituição Federal de 1988 estabelece, em seu artigo 205, que a educação é direito de todos e dever do Estado — princípio que, na prática, ainda não foi plenamente efetivado. A contradição entre o texto legal e a realidade vivida por milhões de brasileiros evidencia a urgência de políticas públicas que superem as barreiras estruturais do sistema educacional.`,
    development2: `Outro fator que aprofunda essa desigualdade é a desvalorização da carreira docente. De acordo com a OCDE, o Brasil está entre os países que menos remuneram seus professores, o que compromete tanto a qualidade do ensino quanto a atratividade da profissão. A obra Vidas Secas, de Graciliano Ramos, já retratava, no século XX, a exclusão de populações vulneráveis do acesso ao conhecimento — realidade que, guardadas as proporções, persiste no século XXI. Ademais, a pandemia de Covid-19 escancarou outra dimensão da desigualdade educacional: a exclusão digital. Estudantes sem acesso à internet ou a equipamentos adequados ficaram à margem do ensino remoto, demonstrando que a transformação tecnológica da escola exige, antes de tudo, inclusão.`,
    conclusion: `Portanto, a desigualdade no acesso à educação no Brasil é resultado de fatores históricos, sociais e econômicos que demandam ações integradas. Cabe ao Estado, em parceria com municípios e sociedade civil, ampliar investimentos em infraestrutura escolar nas regiões mais vulneráveis, valorizar a carreira docente por meio do cumprimento da Lei do Piso Salarial (11.738/2008) e garantir acesso à internet nas escolas públicas. Somente por meio de uma educação verdadeiramente universal será possível construir uma sociedade mais justa e igualitária, em que o futuro de cada cidadão não seja determinado pelo local onde nasceu.`,
    repertoiresUsed: [
      { title: "Pierre Bourdieu", category: "philosopher" },
      { title: "Constituição Federal (Art. 205)", category: "law" },
      { title: "IBGE – Desigualdade Educacional", category: "data" },
      { title: "Vidas Secas – Graciliano Ramos", category: "literature" },
      { title: "Lei do Piso Salarial (11.738/2008)", category: "law" },
    ],
  },
  {
    id: "educacao-evasao",
    theme: "Evasão escolar no Brasil: causas e consequências",
    axisId: "educacao",
    topicName: "Evasão escolar",
    score: 1000,
    introduction: `O educador Paulo Freire defendeu que a educação verdadeira não é a transmissão de conteúdos, mas a libertação do ser humano. No Brasil, no entanto, milhões de jovens são privados dessa libertação ao abandonar a escola antes de concluir o ensino médio. A evasão escolar configura-se, assim, como um grave problema social que perpetua desigualdades e limita as perspectivas de vida de uma geração inteira, exigindo respostas urgentes do Estado e da sociedade.`,
    development1: `De acordo com dados da PNAD, o Brasil registra alarmantes taxas de abandono escolar, especialmente entre jovens de famílias de baixa renda. Para Paulo Freire, a educação bancária — baseada na mera transmissão de conteúdos sem diálogo com a realidade dos alunos — é um dos fatores que alimentam esse fenômeno, ao tornar a escola um espaço alienante e desmotivador. Nesse sentido, a evasão não é apenas consequência da pobreza, mas também de um modelo pedagógico que não reconhece a experiência e os saberes dos estudantes. A escola que não dialoga com a vida do aluno torna-se, para ele, um lugar sem sentido.`,
    development2: `Além dos fatores pedagógicos, as condições socioeconômicas das famílias exercem papel determinante na permanência escolar. O Programa Bolsa Família, ao condicionar o benefício à frequência escolar, demonstrou que políticas de transferência de renda podem reduzir significativamente o abandono entre populações vulneráveis. Contudo, segundo o UNICEF, ainda há milhões de crianças e adolescentes brasileiros fora da escola ou em risco de evasão, o que evidencia que as iniciativas existentes são insuficientes diante da magnitude do problema. A garantia do direito à educação exige, portanto, uma abordagem que combine suporte econômico às famílias com transformações pedagógicas profundas.`,
    conclusion: `Diante do exposto, combater a evasão escolar no Brasil requer uma atuação em múltiplas frentes. É necessário que o Ministério da Educação, em parceria com estados e municípios, amplie programas de transferência de renda condicionada à frequência escolar e invista na formação de professores para práticas pedagógicas mais dialógicas e inclusivas. Paralelamente, as escolas devem desenvolver projetos de acompanhamento individualizado dos alunos em risco de abandono, criando vínculos que os motivem a permanecer. Afinal, uma nação que perde seus jovens para a evasão escolar perde também seu futuro.`,
    repertoiresUsed: [
      { title: "Paulo Freire", category: "philosopher" },
      { title: "PNAD – Taxa de Abandono Escolar", category: "data" },
      { title: "Programa Bolsa Família", category: "history" },
      { title: "UNICEF – Crianças fora da escola", category: "data" },
    ],
  },

  // ============================================================
  // SAÚDE
  // ============================================================
  {
    id: "saude-mental",
    theme: "A crise de saúde mental entre os jovens brasileiros",
    axisId: "saude",
    topicName: "Saúde mental dos jovens",
    score: 1000,
    introduction: `O sociólogo Zygmunt Bauman descreveu a modernidade como líquida: um tempo marcado pela instabilidade das relações, pela insegurança constante e pela ausência de referências sólidas. Nesse contexto, os jovens brasileiros tornam-se especialmente vulneráveis ao adoecimento mental. Com o Brasil liderando o ranking mundial de transtornos de ansiedade, segundo a Organização Mundial da Saúde, a saúde mental da juventude emerge como uma questão de urgência nacional, que demanda atenção do Estado, das famílias e da sociedade como um todo.`,
    development1: `A fragilidade das relações interpessoais na contemporaneidade, agravada pelo uso intensivo das redes sociais, contribui significativamente para o sofrimento psíquico dos jovens. A série 13 Reasons Why trouxe à tona, de forma impactante, como o isolamento, o bullying e a pressão social podem levar adolescentes a situações extremas. De forma análoga, dados do Conselho Federal de Psicologia indicam que o suicídio é a segunda maior causa de morte entre jovens de 15 a 29 anos no Brasil — dado alarmante que evidencia a gravidade da crise. Apesar disso, o acesso a serviços de saúde mental no país ainda é profundamente desigual, concentrado nas grandes cidades e inacessível para a maioria da população.`,
    development2: `No campo legal, a Lei de Saúde Mental (10.216/2001) representou um avanço ao garantir direitos às pessoas com transtornos mentais e propor a humanização do atendimento. Contudo, a escassez de psicólogos e psiquiatras na rede pública, especialmente nas escolas, demonstra que a legislação ainda não se traduziu em acesso real. A pandemia de Covid-19 agravou ainda mais esse quadro: o isolamento social, a incerteza e o luto coletivo intensificaram os índices de ansiedade e depressão entre os jovens, expondo as lacunas de um sistema de saúde mental historicamente subfinanciado.`,
    conclusion: `Portanto, enfrentar a crise de saúde mental entre os jovens brasileiros exige uma resposta estruturada e urgente. Cabe ao Ministério da Saúde ampliar a oferta de serviços psicológicos na rede pública, com ênfase nas escolas e nos Centros de Atenção Psicossocial (CAPS). As plataformas digitais devem ser regulamentadas para limitar mecanismos que promovem comparação social e ansiedade. Por fim, é fundamental que a escola se torne um espaço de escuta e acolhimento, formando professores para identificar sinais de sofrimento e encaminhar adequadamente os alunos. A saúde mental dos jovens é condição para o desenvolvimento de toda uma geração.`,
    repertoiresUsed: [
      { title: "Zygmunt Bauman", category: "philosopher" },
      { title: "OMS – Saúde Mental", category: "data" },
      { title: "13 Reasons Why", category: "cinema" },
      { title: "Lei de Saúde Mental (10.216/2001)", category: "law" },
      { title: "CFP – Suicídio entre jovens no Brasil", category: "data" },
    ],
  },

  // ============================================================
  // MEIO AMBIENTE
  // ============================================================
  {
    id: "meio-ambiente-desmatamento",
    theme: "O desmatamento da Amazônia e seus impactos",
    axisId: "meio-ambiente",
    topicName: "Desmatamento na Amazônia",
    score: 1000,
    introduction: `O pensador indígena Ailton Krenak afirma que a Terra é um ser vivo com o qual os seres humanos precisam coexistir com respeito e reciprocidade. No Brasil, entretanto, essa coexistência tem sido sistematicamente violada: dados do INPE revelam taxas alarmantes de desmatamento na Amazônia, colocando em risco não apenas a biodiversidade, mas também o equilíbrio climático global. O avanço devastador sobre a maior floresta tropical do mundo representa uma ameaça à soberania nacional, aos povos originários e ao futuro do planeta.`,
    development1: `O desmatamento amazônico é impulsionado por interesses econômicos de curto prazo que ignoram os custos socioambientais de longo prazo. O assassinato do seringueiro Chico Mendes, em 1988, já evidenciava os violentos conflitos entre o modelo exploratório e os defensores da floresta — tensão que persiste até hoje. A Constituição Federal, em seu artigo 225, garante a todos o direito ao meio ambiente ecologicamente equilibrado, caracterizando sua defesa como dever do Estado e da coletividade. Contudo, a omissão do poder público diante do avanço do desmatamento configura uma grave violação desse preceito constitucional, que afeta desproporcionalmente as populações indígenas e ribeirinhas.`,
    development2: `No plano internacional, o Brasil assumiu compromissos climáticos por meio do Acordo de Paris, de 2015, incluindo metas de redução do desmatamento. O descumprimento dessas metas não apenas prejudica a imagem do país no exterior, mas também compromete o esforço global de contenção das mudanças climáticas. O relatório do IPCC alerta que os impactos do aquecimento global já são irreversíveis em algumas dimensões, tornando urgente a preservação dos grandes biomas. A Amazônia, responsável pela regulação do ciclo das chuvas em toda a América do Sul, é peça-chave nesse equilíbrio — sua destruição representa uma ameaça existencial para o continente.`,
    conclusion: `Diante desse quadro, combater o desmatamento da Amazônia requer ações concretas e imediatas. O Governo Federal deve fortalecer os órgãos de fiscalização ambiental, como o IBAMA, garantindo recursos humanos e tecnológicos para coibir o desmatamento ilegal. Paralelamente, é necessário criar mecanismos de incentivo econômico para comunidades que preservam a floresta em pé, reconhecendo o valor dos serviços ambientais prestados pela Amazônia. Por fim, a demarcação das terras indígenas deve ser prioridade, uma vez que os povos originários são os guardiões mais eficazes da floresta. Preservar a Amazônia é, antes de tudo, uma questão de sobrevivência — não apenas do Brasil, mas da humanidade.`,
    repertoiresUsed: [
      { title: "Ailton Krenak", category: "philosopher" },
      { title: "INPE – Taxas de Desmatamento", category: "data" },
      { title: "Constituição Federal (Art. 225)", category: "law" },
      { title: "Chico Mendes e os seringueiros (1988)", category: "history" },
      { title: "Acordo de Paris (2015)", category: "history" },
    ],
  },

  // ============================================================
  // TECNOLOGIA
  // ============================================================
  {
    id: "tecnologia-fakenews",
    theme: "O impacto das fake news na democracia brasileira",
    axisId: "tecnologia",
    topicName: "Fake news e desinformação",
    score: 1000,
    introduction: `A filósofa Hannah Arendt advertiu que a mentira na política representa uma ameaça à própria existência da democracia, pois destrói a base factual sobre a qual os cidadãos tomam decisões coletivas. Na era digital, essa ameaça se amplificou exponencialmente: as fake news se disseminam pelas redes sociais em velocidade e escala sem precedentes, manipulando opiniões e corroendo a confiança nas instituições. No Brasil, um dos países mais afetados pela desinformação no mundo, segundo o Reuters Institute, esse fenômeno representa um desafio central para a consolidação democrática.`,
    development1: `A disseminação de fake news não é um fenômeno espontâneo, mas resultado de escolhas deliberadas de plataformas digitais que priorizam o engajamento em detrimento da verdade. O documentário O Dilema das Redes revelou como os algoritmos são projetados para amplificar conteúdos que geram reações emocionais intensas — frequentemente, informações falsas ou distorcidas. Esse mecanismo foi explorado de forma devastadora durante a pandemia de Covid-19, quando fake news sobre vacinas contribuíram para a hesitação vacinal e mortes evitáveis no Brasil. A desinformação, portanto, não é apenas um problema virtual: ela tem consequências reais e letais.`,
    development2: `No campo jurídico, o debate em torno do PL das Fake News evidencia a tensão entre a necessidade de combater a desinformação e a proteção da liberdade de expressão — um dos pilares democráticos. Essa tensão não tem solução simples, mas exige regulamentação cuidadosa que responsabilize as plataformas digitais sem censurar o debate público legítimo. A educação midiática emerge, nesse contexto, como ferramenta fundamental: cidadãos capazes de identificar e questionar informações falsas são mais resistentes à manipulação e mais aptos a exercer uma cidadania plena.`,
    conclusion: `Portanto, combater as fake news no Brasil exige uma abordagem multidimensional. O Congresso Nacional deve aprovar uma legislação que responsabilize as plataformas digitais pela amplificação de desinformação, sem criar mecanismos de censura prévia. O Ministério da Educação deve incorporar a educação midiática ao currículo escolar, formando cidadãos críticos e capazes de navegar no ambiente digital com discernimento. Por fim, os meios de comunicação tradicionais devem investir em jornalismo de verificação de fatos, contribuindo para a restauração de uma esfera pública informada. A democracia sobrevive apenas onde a verdade tem espaço para existir.`,
    repertoiresUsed: [
      { title: "Hannah Arendt", category: "philosopher" },
      { title: "O Dilema das Redes", category: "cinema" },
      { title: "Reuters Institute – Digital News Report", category: "data" },
      { title: "Desinformação na pandemia (2020-2022)", category: "history" },
      { title: "PL das Fake News (em tramitação)", category: "law" },
    ],
  },

  // ============================================================
  // CIDADANIA
  // ============================================================
  {
    id: "cidadania-racismo",
    theme: "O racismo estrutural e seus impactos na sociedade brasileira",
    axisId: "cidadania",
    topicName: "Racismo estrutural",
    score: 1000,
    introduction: `O jurista Silvio Almeida define o racismo estrutural como aquele que está enraizado nas instituições, nas práticas e nas normas sociais — invisível para quem não o sofre, mas devastadoramente presente na vida de quem é seu alvo. No Brasil, país que se proclama miscigenado e tolerante, essa forma de racismo se manifesta de maneira contundente nas estatísticas de violência, educação e renda: negros são maioria entre os mais pobres, os menos escolarizados e as vítimas de homicídio. Reconhecer e combater o racismo estrutural é, portanto, condição indispensável para a construção de uma democracia plena.`,
    development1: `O Atlas da Violência aponta que negros representam a esmagadora maioria das vítimas de homicídios no Brasil, evidenciando como o racismo estrutural se traduz em violência concreta e cotidiana. Essa realidade tem raízes históricas profundas: a abolição da escravidão, em 1888, não foi acompanhada de políticas de reparação e inclusão, deixando os ex-escravizados à própria sorte em uma sociedade que os excluía sistematicamente. A Declaração Universal dos Direitos Humanos, de 1948, estabelece que todos nascem livres e iguais em dignidade — princípio que, no Brasil, ainda não foi plenamente efetivado para a população negra, que enfrenta barreiras estruturais no acesso à educação, saúde e justiça.`,
    development2: `No campo das políticas afirmativas, a Lei de Cotas (12.711/2012) representou um avanço significativo ao reservar vagas em universidades federais para negros, indígenas e estudantes de escola pública. Essa iniciativa busca corrigir distorções históricas e ampliar a presença de grupos marginalizados nos espaços de poder e conhecimento. Contudo, políticas afirmativas isoladas são insuficientes para desmantelar o racismo estrutural: é necessário transformar as instituições que o reproduzem, desde a abordagem policial seletiva até os critérios de contratação nas empresas. A filósofa Kimberlé Crenshaw, com o conceito de interseccionalidade, demonstrou que raça, gênero e classe se combinam para produzir formas específicas de opressão — compreensão essencial para políticas públicas verdadeiramente inclusivas.`,
    conclusion: `Diante do exposto, combater o racismo estrutural no Brasil exige ações em múltiplas dimensões. O Estado deve ampliar e fortalecer políticas de ação afirmativa, garantindo não apenas o acesso, mas a permanência de estudantes negros nas universidades. As instituições de segurança pública precisam ser reformadas para eliminar práticas discriminatórias, com formação obrigatória em direitos humanos e diversidade. Por fim, a educação antirracista deve ser incorporada ao currículo escolar, formando gerações capazes de identificar e questionar as estruturas que perpetuam a desigualdade racial. Combater o racismo é responsabilidade de todos — e condição para que o Brasil cumpra a promessa democrática de igualdade.`,
    repertoiresUsed: [
      { title: "Silvio Almeida", category: "philosopher" },
      { title: "Atlas da Violência – Homicídios de Negros", category: "data" },
      { title: "Abolição da escravidão (1888)", category: "history" },
      { title: "Lei de Cotas (12.711/2012)", category: "law" },
      { title: "Kimberlé Crenshaw", category: "philosopher" },
    ],
  },

  // ============================================================
  // DESIGUALDADE
  // ============================================================
  {
    id: "desigualdade-concentracao",
    theme: "A concentração de renda e a desigualdade social no Brasil",
    axisId: "desigualdade",
    topicName: "Concentração de renda",
    score: 1000,
    introduction: `O economista Amartya Sen afirma que a pobreza não é apenas ausência de renda, mas privação de liberdades e capacidades fundamentais. No Brasil, país que figura entre os mais desiguais do mundo segundo o coeficiente de Gini, essa privação afeta milhões de cidadãos que, apesar de formalmente livres, não têm acesso real a educação, saúde, moradia e oportunidades de trabalho digno. A concentração de renda, portanto, não é apenas um problema econômico — é uma violação dos direitos humanos que compromete a democracia e a coesão social.`,
    development1: `Segundo o relatório da Oxfam, 1% da população mundial detém mais riqueza do que os 50% mais pobres. No Brasil, essa concentração é ainda mais acentuada, resultado de séculos de exploração colonial e de estruturas tributárias que historicamente favoreceram os mais ricos. Na perspectiva de Karl Marx, a desigualdade é inerente ao sistema capitalista, sustentada pela exploração do trabalho. Embora o diagnóstico marxista seja debatido, é inegável que o Brasil perpetua mecanismos que concentram riqueza: um sistema tributário regressivo que onera mais os pobres, uma estrutura fundiária excludente e uma herança escravocrata que ainda marca as desigualdades raciais.`,
    development2: `Contudo, a história brasileira também oferece exemplos de que políticas públicas podem reduzir a desigualdade. O Programa Fome Zero, lançado em 2003, retirou o Brasil do mapa da fome da FAO e demonstrou que transferência de renda combinada com investimentos em educação e saúde produz resultados concretos. Thomas Piketty, em sua análise do capitalismo contemporâneo, demonstrou que a desigualdade tende a crescer quando o retorno do capital supera o crescimento econômico — tendência que só pode ser revertida por meio de tributação progressiva e investimentos públicos robustos. O Brasil precisa aprender com suas próprias experiências bem-sucedidas e com as lições da economia global.`,
    conclusion: `Portanto, reduzir a concentração de renda no Brasil exige uma reforma estrutural do sistema econômico e tributário. O Congresso Nacional deve aprovar uma reforma tributária que aumente a progressividade dos impostos, taxando adequadamente grandes fortunas e heranças. O Poder Executivo deve ampliar programas de transferência de renda condicionados ao acesso à educação e saúde, como demonstrou o sucesso do Bolsa Família. Por fim, investimentos em educação pública de qualidade são fundamentais para romper o ciclo intergeracional da pobreza. Uma sociedade mais igualitária não é apenas mais justa — é também mais produtiva, mais coesa e mais democrática.`,
    repertoiresUsed: [
      { title: "Amartya Sen", category: "philosopher" },
      { title: "Oxfam – Desigualdade Global", category: "data" },
      { title: "Coeficiente de Gini – Brasil", category: "data" },
      { title: "Karl Marx", category: "philosopher" },
      { title: "Programa Fome Zero (2003)", category: "history" },
    ],
  },

  // ============================================================
  // VIOLÊNCIA
  // ============================================================
  {
    id: "violencia-mulher",
    theme: "A violência contra a mulher no Brasil",
    axisId: "violencia",
    topicName: "Violência contra a mulher",
    score: 1000,
    introduction: `A filósofa Simone de Beauvoir afirmou que não se nasce mulher, torna-se mulher — reconhecendo que o feminino é uma construção social repleta de imposições e hierarquias. No Brasil, essas hierarquias se traduzem em violência cotidiana: o país figura entre os que registram os maiores índices de feminicídio no mundo, segundo o Atlas da Violência. A violência contra a mulher, longe de ser um problema individual ou doméstico, é expressão de uma cultura patriarcal que naturaliza a dominação masculina e precisa ser combatida em todas as suas dimensões.`,
    development1: `A Lei Maria da Penha (11.340/2006) representou um marco histórico no enfrentamento da violência doméstica, ao criar mecanismos de proteção e punição para agressores. Reconhecida internacionalmente como uma das legislações mais avançadas do mundo nessa área, a lei demonstra que o Estado brasileiro foi capaz de responder legislativamente ao problema. Contudo, os altos índices de feminicídio persistentes evidenciam que a legislação, por si só, é insuficiente: é necessário que as instituições do sistema de justiça apliquem a lei com rigor e que a sociedade abandone a cultura do silêncio que protege agressores.`,
    development2: `Para a filósofa Judith Butler, o gênero é uma performance social que, quando transgredida, provoca reações violentas — o que ajuda a compreender por que mulheres que buscam autonomia são frequentemente alvo de violência. Nesse sentido, combater a violência de gênero exige mais do que punição: requer uma transformação cultural profunda que questione os papéis tradicionais atribuídos a homens e mulheres. A educação tem papel central nessa transformação: escolas que promovem a igualdade de gênero e o respeito à diversidade contribuem para a formação de gerações menos violentas e mais empáticas.`,
    conclusion: `Diante do exposto, o enfrentamento da violência contra a mulher no Brasil exige uma atuação coordenada entre Estado, sociedade e família. O Poder Executivo deve ampliar a rede de Casas da Mulher Brasileira e garantir o pleno funcionamento das Delegacias da Mulher em todos os municípios. O sistema educacional deve incorporar discussões sobre igualdade de gênero desde a educação básica, desconstruindo estereótipos que alimentam a violência. Por fim, as plataformas digitais devem ser responsabilizadas por conteúdos que incitam o ódio contra mulheres. Cada vida salva é uma vitória da democracia sobre a barbárie.`,
    repertoiresUsed: [
      { title: "Simone de Beauvoir", category: "philosopher" },
      { title: "Atlas da Violência – Feminicídio", category: "data" },
      { title: "Lei Maria da Penha (11.340/2006)", category: "law" },
      { title: "Judith Butler", category: "philosopher" },
    ],
  },

  // ============================================================
  // TRABALHO
  // ============================================================
  {
    id: "trabalho-precarizacao",
    theme: "A precarização do trabalho no Brasil contemporâneo",
    axisId: "trabalho",
    topicName: "Precarização do trabalho",
    score: 1000,
    introduction: `O sociólogo Guy Standing cunhou o termo "precariado" para descrever a nova classe social do século XXI: trabalhadores marcados pela instabilidade econômica, pela ausência de direitos e pela incerteza permanente. No Brasil, essa realidade se manifesta de forma contundente: segundo o IBGE, mais de 40% dos trabalhadores estão na informalidade, sem acesso a férias, FGTS ou aposentadoria. A precarização do trabalho, longe de ser uma tendência inevitável, é resultado de escolhas políticas e econômicas que precisam ser revertidas para garantir dignidade à classe trabalhadora brasileira.`,
    development1: `A Consolidação das Leis do Trabalho, criada em 1943, representou um marco histórico na proteção dos direitos dos trabalhadores brasileiros. Ao longo de décadas, a CLT garantiu conquistas fundamentais como o salário mínimo, a jornada de trabalho regulamentada e o direito a férias — avanços que reduziram a exploração e ampliaram o consumo interno. Contudo, as transformações recentes do mercado de trabalho, impulsionadas pela digitalização e pela chamada "uberização", desafiam esse arcabouço legal. Na perspectiva de Karl Marx, o capitalismo tende a explorar ao máximo a força de trabalho — e as plataformas digitais representam uma nova versão sofisticada dessa exploração, ao transferir riscos e custos para os trabalhadores enquanto retêm os lucros.`,
    development2: `A automação tecnológica adiciona uma dimensão adicional ao problema. Jeremy Rifkin, em O Fim dos Empregos, argumentou que a substituição progressiva do trabalho humano por máquinas exige uma reconfiguração profunda das políticas sociais e econômicas. No Brasil, trabalhadores de baixa qualificação são os mais vulneráveis a essa transformação, uma vez que têm menos acesso à requalificação profissional. A Revolução Industrial do século XVIII já demonstrou que mudanças tecnológicas podem gerar tanto riqueza quanto exclusão — e que, sem regulação adequada, os benefícios tendem a se concentrar nas mãos de poucos.`,
    conclusion: `Portanto, combater a precarização do trabalho no Brasil exige uma agenda política clara e corajosa. O Estado deve fortalecer a fiscalização do cumprimento da legislação trabalhista e regulamentar as plataformas digitais de trabalho, garantindo direitos mínimos aos trabalhadores por aplicativo. Investimentos em educação profissional e tecnológica são fundamentais para preparar os trabalhadores para as demandas do mercado em transformação. Por fim, é necessário debater novas formas de proteção social que alcancem os trabalhadores informais e autônomos. O trabalho digno não é um privilégio — é um direito humano fundamental.`,
    repertoiresUsed: [
      { title: "Guy Standing", category: "philosopher" },
      { title: "IBGE – Taxa de Informalidade", category: "data" },
      { title: "CLT (1943)", category: "history" },
      { title: "Karl Marx", category: "philosopher" },
      { title: "Jeremy Rifkin", category: "philosopher" },
    ],
  },
];
