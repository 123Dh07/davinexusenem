import { Leaf } from "lucide-react";
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
          paragraphModel: "Segundo dados do INPE, as taxas de desmatamento na Amazônia atingiram patamares alarmantes nos últimos anos, evidenciando a fragilidade das políticas de proteção ambiental.",
        },
        {
          category: "law",
          title: "Constituição Federal (Art. 225)",
          description: "Todos têm direito ao meio ambiente ecologicamente equilibrado.",
          howToUse: "Use para evidenciar o descumprimento do direito constitucional ambiental.",
          paragraphModel: "Conforme o artigo 225 da Constituição Federal, todos têm direito ao meio ambiente ecologicamente equilibrado. O avanço do desmatamento demonstra que esse direito está sendo sistematicamente violado.",
        },
        {
          category: "philosopher",
          title: "Ailton Krenak",
          description: "Pensador indígena que defende a Terra como ser vivo e sujeito de direitos.",
          howToUse: "Use para trazer uma perspectiva indígena sobre a destruição ambiental.",
          paragraphModel: "Para Ailton Krenak, a Terra é um ser vivo com o qual os seres humanos devem coexistir com respeito. Essa perspectiva contrasta com o modelo exploratório que tem levado ao desmatamento acelerado da Amazônia.",
        },
        {
          category: "history",
          title: "Chico Mendes e os seringueiros (1988)",
          description: "Assassinato de Chico Mendes evidenciou os conflitos ambientais na Amazônia.",
          howToUse: "Use para mostrar que a luta pela preservação ambiental tem custo humano real.",
          paragraphModel: "O assassinato de Chico Mendes, em 1988, tornou-se símbolo da luta pela preservação da Amazônia e dos direitos dos povos da floresta. Esse episódio demonstra que o conflito entre interesses econômicos e ambientais ainda cobra vidas.",
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
          howToUse: "Use para contextualizar os compromissos do Brasil no cenário internacional.",
          paragraphModel: "O Acordo de Paris estabeleceu metas globais para a redução de emissões de gases do efeito estufa. Apesar de signatário, o Brasil enfrenta dificuldades em cumprir seus compromissos.",
        },
        {
          category: "data",
          title: "IPCC – Relatório do Clima",
          description: "Painel da ONU aponta que o aquecimento global já causa impactos irreversíveis.",
          howToUse: "Use para embasar com dados científicos a urgência da crise climática.",
          paragraphModel: "O relatório do IPCC alerta que o aquecimento global já provoca impactos irreversíveis. Para o Brasil, isso significa maior frequência de secas, enchentes e eventos extremos.",
        },
        {
          category: "cinema",
          title: "Uma Verdade Inconveniente",
          description: "Documentário de Al Gore sobre as causas e consequências das mudanças climáticas.",
          howToUse: "Use para ilustrar a urgência da crise climática de forma didática.",
          paragraphModel: "O documentário Uma Verdade Inconveniente expôs ao mundo as consequências devastadoras das mudanças climáticas, reforçando a necessidade de compromissos concretos dos governos.",
        },
        {
          category: "philosopher",
          title: "Hans Jonas",
          description: "O princípio responsabilidade: agir com cautela diante dos riscos ao meio ambiente.",
          howToUse: "Use para fundamentar eticamente a necessidade de preservação ambiental.",
          paragraphModel: "Hans Jonas propôs o princípio responsabilidade, segundo o qual devemos agir de forma a preservar as condições de vida para as gerações futuras. Esse princípio é fundamental para embasar políticas de combate às mudanças climáticas.",
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
          paragraphModel: "A Política Nacional de Resíduos Sólidos estabeleceu metas para a redução e reciclagem do lixo no Brasil. A persistência de lixões revela as dificuldades de implementação dessa legislação.",
        },
        {
          category: "data",
          title: "ONU – Poluição Plástica nos Oceanos",
          description: "Milhões de toneladas de plástico são despejadas nos oceanos anualmente.",
          howToUse: "Use para dimensionar o impacto global da má gestão de resíduos.",
          paragraphModel: "Segundo a ONU, milhões de toneladas de plástico são despejadas nos oceanos anualmente, ameaçando a biodiversidade marinha. O Brasil tem responsabilidade central nesse debate.",
        },
        {
          category: "history",
          title: "Tragédia de Mariana (2015)",
          description: "Rompimento de barragem da Samarco causou o maior desastre ambiental do Brasil.",
          howToUse: "Use como exemplo concreto dos danos da negligência ambiental corporativa.",
          paragraphModel: "O rompimento da barragem da Samarco em Mariana, em 2015, destruiu o Rio Doce e comunidades inteiras, configurando o maior desastre ambiental da história brasileira. Esse episódio evidencia a necessidade de fiscalização rigorosa das atividades de mineração.",
        },
      ],
    },
    {
      name: "Energias renováveis",
      repertoires: [
        {
          category: "data",
          title: "ANEEL – Matriz energética brasileira",
          description: "Brasil possui uma das matrizes energéticas mais renováveis do mundo.",
          howToUse: "Use para destacar o potencial do Brasil em energia limpa.",
          paragraphModel: "Segundo a ANEEL, o Brasil possui uma das matrizes energéticas mais renováveis do mundo, com destaque para a energia hidrelétrica, solar e eólica. Esse potencial deve ser aproveitado para reduzir emissões e combater as mudanças climáticas.",
        },
        {
          category: "philosopher",
          title: "Jeremy Rifkin",
          description: "A terceira revolução industrial baseada em energias renováveis e internet.",
          howToUse: "Use para argumentar sobre a transição energética como necessidade global.",
          paragraphModel: "Jeremy Rifkin defende que a terceira revolução industrial será baseada em energias renováveis e na democratização da produção de energia. O Brasil, com seu vasto potencial energético limpo, tem papel estratégico nessa transição.",
        },
      ],
    },
  ],
};
