import { Scale } from "lucide-react";
import { ThematicAxis } from "./types";

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
          paragraphModel: "Segundo a Oxfam, 1% da população mundial detém mais riqueza do que os 50% mais pobres. No Brasil, essa concentração é ainda mais acentuada, perpetuando ciclos de pobreza.",
        },
        {
          category: "philosopher",
          title: "Karl Marx",
          description: "A luta de classes é o motor da história.",
          howToUse: "Use para analisar as raízes estruturais da desigualdade.",
          paragraphModel: "Na perspectiva de Karl Marx, a desigualdade social é inerente ao sistema capitalista, sustentada pela exploração do trabalho.",
        },
        {
          category: "data",
          title: "Coeficiente de Gini – Brasil",
          description: "O Brasil é um dos países mais desiguais do mundo segundo o índice Gini.",
          howToUse: "Use para comprovar com dados a gravidade da desigualdade brasileira.",
          paragraphModel: "O coeficiente de Gini posiciona o Brasil entre os países mais desiguais do mundo, reforçando a necessidade de políticas redistributivas.",
        },
        {
          category: "philosopher",
          title: "Thomas Piketty",
          description: "O capital no século XXI: a desigualdade cresce quando o retorno do capital supera o crescimento econômico.",
          howToUse: "Use para analisar economicamente as causas da concentração de riqueza.",
          paragraphModel: "Thomas Piketty demonstrou que a desigualdade tende a crescer quando o retorno do capital supera o crescimento econômico. No Brasil, essa lógica se manifesta na concentração crescente de riqueza nas mãos de poucos.",
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
          paragraphModel: "O Programa Fome Zero representou um marco na luta contra a fome, retirando o Brasil do mapa da fome da FAO. Esse exemplo demonstra que políticas públicas integradas produzem resultados concretos.",
        },
        {
          category: "literature",
          title: "Capitães da Areia – Jorge Amado",
          description: "Romance que retrata crianças em situação de rua na Bahia dos anos 1930.",
          howToUse: "Use para ilustrar a persistência histórica da pobreza infantil no Brasil.",
          paragraphModel: "Em Capitães da Areia, Jorge Amado retrata crianças abandonadas que sobrevivem nas ruas de Salvador. Essa obra denuncia a pobreza e o abandono infantil que, décadas depois, ainda persistem como desafios no Brasil.",
        },
      ],
    },
    {
      name: "Desigualdade racial e de gênero",
      repertoires: [
        {
          category: "data",
          title: "IBGE – Desigualdade de renda por raça e gênero",
          description: "Mulheres negras têm os menores rendimentos médios no Brasil.",
          howToUse: "Use para mostrar como raça e gênero se somam na produção de desigualdades.",
          paragraphModel: "Segundo o IBGE, mulheres negras recebem, em média, os menores rendimentos do país. Esse dado evidencia como a intersecção entre racismo e machismo aprofunda as desigualdades sociais no Brasil.",
        },
        {
          category: "philosopher",
          title: "Kimberlé Crenshaw",
          description: "A interseccionalidade como ferramenta para compreender opressões múltiplas.",
          howToUse: "Use para analisar como raça, gênero e classe se combinam na produção de desigualdades.",
          paragraphModel: "Kimberlé Crenshaw desenvolveu o conceito de interseccionalidade para analisar como raça, gênero e classe se combinam e produzem formas específicas de opressão. No Brasil, esse conceito é essencial para compreender a situação de mulheres negras.",
        },
      ],
    },
  ],
};
