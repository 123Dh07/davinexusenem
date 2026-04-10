import { Cpu } from "lucide-react";
import { ThematicAxis } from "./types";

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
          paragraphModel: "De acordo com o IBGE, milhões de brasileiros ainda não possuem acesso à internet, aprofundando desigualdades no acesso à informação e ao mercado de trabalho.",
        },
        {
          category: "philosopher",
          title: "Manuel Castells",
          description: "A sociedade em rede cria novas formas de exclusão.",
          howToUse: "Use para argumentar que a tecnologia pode tanto incluir quanto excluir.",
          paragraphModel: "Para Manuel Castells, a sociedade em rede reorganiza as relações sociais, mas também cria novas formas de exclusão. No Brasil, aqueles sem acesso à tecnologia ficam à margem das oportunidades digitais.",
        },
        {
          category: "history",
          title: "Pandemia e exclusão digital (2020)",
          description: "A Covid-19 evidenciou como a exclusão digital impede o acesso a serviços essenciais.",
          howToUse: "Use para mostrar os impactos concretos da falta de acesso à tecnologia.",
          paragraphModel: "Durante a pandemia, a exclusão digital impediu milhões de brasileiros de acessar serviços de saúde, educação e benefícios sociais online, demonstrando que a conectividade se tornou uma necessidade básica.",
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
          paragraphModel: "No filme Ex Machina, são explorados os limites éticos da inteligência artificial. De modo análogo, o avanço da IA exige reflexão profunda sobre seus impactos sociais.",
        },
        {
          category: "law",
          title: "Marco Legal da IA no Brasil (2024)",
          description: "Legislação que regula o uso de inteligência artificial no país.",
          howToUse: "Use para mostrar os avanços regulatórios e os desafios da governança da IA.",
          paragraphModel: "O Marco Legal da Inteligência Artificial estabelece princípios para o uso ético dessa tecnologia. Sua implementação eficaz depende de fiscalização rigorosa e de uma cultura digital que priorize os direitos humanos.",
        },
        {
          category: "philosopher",
          title: "Nick Bostrom",
          description: "Filósofo que alerta para os riscos existenciais da superinteligência.",
          howToUse: "Use para aprofundar o debate sobre os riscos da IA sem regulamentação.",
          paragraphModel: "Nick Bostrom alerta que o desenvolvimento de uma inteligência artificial superinteligente sem controles representa um dos maiores riscos à humanidade. Esse debate é urgente diante do avanço acelerado das tecnologias de IA.",
        },
        {
          category: "data",
          title: "WEF – Impacto da IA no mercado de trabalho",
          description: "Fórum Econômico Mundial prevê que a IA eliminará milhões de empregos.",
          howToUse: "Use para discutir os impactos econômicos da inteligência artificial.",
          paragraphModel: "Segundo o Fórum Econômico Mundial, a inteligência artificial eliminará dezenas de milhões de empregos nas próximas décadas. No Brasil, trabalhadores de baixa qualificação são os mais vulneráveis a essa transformação.",
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
          paragraphModel: "Hannah Arendt alertou que o apagamento da verdade factual representa uma ameaça à democracia. Nas redes sociais, as fake news manipulam a opinião pública e corroem a confiança nas instituições.",
        },
        {
          category: "history",
          title: "Desinformação na pandemia (2020-2022)",
          description: "Fake news sobre vacinas causaram mortes evitáveis no Brasil.",
          howToUse: "Use como exemplo concreto dos danos reais da desinformação.",
          paragraphModel: "Durante a pandemia de Covid-19, fake news sobre vacinas contribuíram para a hesitação vacinal e mortes evitáveis, demonstrando que a desinformação é uma questão de saúde pública.",
        },
        {
          category: "data",
          title: "Reuters Institute – Digital News Report",
          description: "Brasil está entre os países mais afetados pela desinformação.",
          howToUse: "Use para dimensionar o problema da desinformação com dados internacionais.",
          paragraphModel: "Segundo o Reuters Institute, o Brasil figura entre os países mais afetados pela desinformação digital, comprometendo processos eleitorais e a coesão social.",
        },
        {
          category: "law",
          title: "PL das Fake News (em tramitação)",
          description: "Projeto de lei que busca regulamentar as redes sociais e combater a desinformação.",
          howToUse: "Use para discutir os desafios de regulamentar a liberdade de expressão e a desinformação.",
          paragraphModel: "O debate em torno do PL das Fake News evidencia a tensão entre a necessidade de combater a desinformação e a proteção da liberdade de expressão. Encontrar esse equilíbrio é um dos maiores desafios da democracia digital brasileira.",
        },
      ],
    },
    {
      name: "Privacidade e proteção de dados",
      repertoires: [
        {
          category: "law",
          title: "LGPD – Lei Geral de Proteção de Dados (13.709/2018)",
          description: "Regula o tratamento de dados pessoais no Brasil.",
          howToUse: "Use para discutir o avanço legal na proteção da privacidade digital.",
          paragraphModel: "A LGPD, sancionada em 2018, representou um marco na proteção de dados pessoais no Brasil, regulando como empresas e governo podem coletar e usar informações dos cidadãos.",
        },
        {
          category: "cinema",
          title: "O Dilema das Redes",
          description: "Documentário que expõe como dados pessoais são usados para manipulação.",
          howToUse: "Use para ilustrar os riscos concretos da exposição de dados nas redes sociais.",
          paragraphModel: "O documentário O Dilema das Redes revelou como algoritmos usam dados pessoais para manipular comportamentos e maximizar o engajamento, frequentemente em detrimento do bem-estar dos usuários.",
        },
      ],
    },
  ],
};
