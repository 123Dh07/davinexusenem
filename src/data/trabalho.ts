import { Briefcase } from "lucide-react";
import { ThematicAxis } from "./types";

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
          paragraphModel: "Segundo Guy Standing, o precariado constitui uma nova classe social marcada pela instabilidade econômica. No Brasil, a crescente informalidade agrava a vulnerabilidade de milhões de trabalhadores.",
        },
        {
          category: "history",
          title: "CLT (1943)",
          description: "Consolidação das Leis do Trabalho como marco de direitos.",
          howToUse: "Use para contextualizar a importância histórica dos direitos trabalhistas.",
          paragraphModel: "A CLT, instituída em 1943, representou um marco na garantia de direitos aos trabalhadores brasileiros. As transformações recentes no mercado de trabalho desafiam essa estrutura.",
        },
        {
          category: "data",
          title: "IBGE – Taxa de Informalidade",
          description: "Mais de 40% dos trabalhadores brasileiros estão na informalidade.",
          howToUse: "Use para dimensionar a precarização do trabalho com dados oficiais.",
          paragraphModel: "Segundo o IBGE, mais de 40% dos trabalhadores brasileiros estão na informalidade, sem acesso a direitos como férias, FGTS e aposentadoria.",
        },
        {
          category: "philosopher",
          title: "Karl Marx",
          description: "A alienação do trabalho no sistema capitalista.",
          howToUse: "Use para analisar como o trabalho precário afasta o trabalhador do produto de seu esforço.",
          paragraphModel: "Marx demonstrou que o capitalismo aliena o trabalhador do produto de seu trabalho. Na era da uberização, essa alienação se aprofunda: o trabalhador assume riscos e custos, enquanto a plataforma retém os lucros.",
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
          paragraphModel: "A Revolução Industrial transformou radicalmente o mundo do trabalho. De forma análoga, a atual revolução tecnológica exige que governos preparem trabalhadores para os impactos da automação.",
        },
        {
          category: "data",
          title: "FGV – Desemprego Jovem no Brasil",
          description: "Jovens são os mais afetados pelo desemprego no Brasil.",
          howToUse: "Use para mostrar como o desemprego impacta desproporcionalmente os jovens.",
          paragraphModel: "Pesquisas da FGV apontam que o desemprego entre jovens no Brasil é proporcionalmente muito maior do que na população geral, comprometendo sua inserção social.",
        },
      ],
    },
    {
      name: "Trabalho infantil",
      repertoires: [
        {
          category: "data",
          title: "IBGE – Trabalho infantil no Brasil",
          description: "Milhões de crianças ainda trabalham no Brasil, muitas em condições degradantes.",
          howToUse: "Use para dimensionar o problema do trabalho infantil com dados nacionais.",
          paragraphModel: "Segundo o IBGE, milhões de crianças ainda trabalham no Brasil, muitas em condições degradantes. Esse dado evidencia que a erradicação do trabalho infantil ainda é um desafio estrutural para o país.",
        },
        {
          category: "law",
          title: "ECA – Estatuto da Criança e do Adolescente (1990)",
          description: "Proíbe o trabalho infantil e garante direitos às crianças e adolescentes.",
          howToUse: "Use para mostrar avanços legais e os desafios de implementação.",
          paragraphModel: "O ECA, de 1990, proíbe o trabalho infantil e garante proteção integral às crianças. Contudo, a persistência dessa prática evidencia que a legislação ainda não foi suficiente para erradicá-la.",
        },
        {
          category: "literature",
          title: "Capitães da Areia – Jorge Amado",
          description: "Retrata crianças que trabalham e vivem nas ruas para sobreviver.",
          howToUse: "Use para ilustrar literariamente as raízes históricas do trabalho infantil.",
          paragraphModel: "Em Capitães da Areia, Jorge Amado retrata crianças que trabalham e sobrevivem nas ruas de Salvador. Essa obra evidencia como a pobreza força crianças a abandonar a infância pelo trabalho.",
        },
      ],
    },
  ],
};
