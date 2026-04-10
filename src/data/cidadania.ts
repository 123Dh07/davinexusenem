import { Users } from "lucide-react";
import { ThematicAxis } from "./types";

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
          paragraphModel: "Segundo Hannah Arendt, a ação política sustenta a democracia. O desinteresse político dos jovens brasileiros representa uma ameaça à vitalidade democrática do país.",
        },
        {
          category: "history",
          title: "Movimento dos Caras-Pintadas (1992)",
          description: "Mobilização juvenil que contribuiu para o impeachment de Collor.",
          howToUse: "Use como exemplo histórico de protagonismo político juvenil.",
          paragraphModel: "O Movimento dos Caras-Pintadas, em 1992, demonstrou o poder da mobilização juvenil ao contribuir para o impeachment do presidente Collor.",
        },
        {
          category: "data",
          title: "TSE – Abstenção Eleitoral",
          description: "Crescimento da abstenção entre eleitores jovens nas últimas eleições.",
          howToUse: "Use para mostrar a desconexão entre jovens e política institucional.",
          paragraphModel: "Dados do TSE revelam crescimento da abstenção eleitoral entre jovens, refletindo o distanciamento entre a política institucional e os anseios da juventude.",
        },
        {
          category: "philosopher",
          title: "Alexis de Tocqueville",
          description: "A democracia depende da participação ativa dos cidadãos.",
          howToUse: "Use para reforçar a importância da participação cidadã para a democracia.",
          paragraphModel: "Tocqueville defendeu que a democracia só se sustenta com a participação ativa dos cidadãos nas decisões coletivas. No Brasil, o baixo engajamento político dos jovens representa um desafio para a consolidação democrática.",
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
          paragraphModel: "A Lei de Cotas representou um avanço na promoção da igualdade racial ao reservar vagas em universidades federais, buscando corrigir distorções históricas causadas pelo racismo estrutural.",
        },
        {
          category: "data",
          title: "Atlas da Violência – Homicídios de Negros",
          description: "Negros são desproporcionalmente vítimas de homicídios no Brasil.",
          howToUse: "Use para comprovar com dados o impacto do racismo estrutural.",
          paragraphModel: "O Atlas da Violência aponta que negros representam a maioria esmagadora das vítimas de homicídios no Brasil, revelando como o racismo estrutural se traduz em violência concreta.",
        },
        {
          category: "history",
          title: "Abolição da escravidão (1888)",
          description: "A abolição sem reparação deixou os ex-escravizados sem condições de inclusão social.",
          howToUse: "Use para mostrar as raízes históricas do racismo estrutural no Brasil.",
          paragraphModel: "A abolição da escravidão, em 1888, não foi acompanhada de políticas de reparação e inclusão. Esse abandono histórico é a raiz do racismo estrutural que ainda marca as desigualdades raciais no Brasil.",
        },
      ],
    },
    {
      name: "Direitos humanos",
      repertoires: [
        {
          category: "law",
          title: "Declaração Universal dos Direitos Humanos (1948)",
          description: "Documento que estabelece os direitos fundamentais de todos os seres humanos.",
          howToUse: "Use como base para argumentar sobre violações de direitos no Brasil.",
          paragraphModel: "A Declaração Universal dos Direitos Humanos estabelece que todos nascem livres e iguais em dignidade. No Brasil, a persistência de desigualdades evidencia que esses princípios ainda não foram plenamente efetivados.",
        },
        {
          category: "philosopher",
          title: "John Rawls",
          description: "A teoria da justiça como equidade.",
          howToUse: "Use para embasar argumentos sobre justiça social e distribuição de direitos.",
          paragraphModel: "Para John Rawls, uma sociedade justa garante igualdade de oportunidades e protege os mais vulneráveis. As desigualdades estruturais brasileiras representam uma violação aos princípios básicos de justiça.",
        },
      ],
    },
  ],
};
