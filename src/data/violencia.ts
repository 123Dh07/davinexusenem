import { Shield } from "lucide-react";
import { ThematicAxis } from "./types";

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
        {
          category: "data",
          title: "Atlas da Violência – Feminicídio",
          description: "Brasil registra altos índices de feminicídio entre países do mundo.",
          howToUse: "Use para dimensionar a gravidade da violência de gênero com dados.",
          paragraphModel: "O Atlas da Violência aponta que o Brasil é um dos países com maiores índices de feminicídio, revelando a urgência de políticas integradas de proteção à mulher.",
        },
        {
          category: "philosopher",
          title: "Judith Butler",
          description: "O gênero como performance e a violência contra corpos dissidentes.",
          howToUse: "Use para aprofundar a análise da violência de gênero além do binarismo.",
          paragraphModel: "Judith Butler demonstrou que o gênero é uma performance social que, quando transgredida, provoca violência. Essa perspectiva é fundamental para compreender tanto a violência contra mulheres quanto contra pessoas LGBTQIA+ no Brasil.",
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
          paragraphModel: "O Atlas da Violência aponta que o Brasil registra um dos maiores números de homicídios do mundo, evidenciando a necessidade de políticas de segurança mais eficazes.",
        },
        {
          category: "philosopher",
          title: "Loïc Wacquant",
          description: "A criminalização da pobreza e o encarceramento em massa.",
          howToUse: "Use para analisar como o sistema penal pune desproporcionalmente os pobres.",
          paragraphModel: "Loïc Wacquant demonstrou que o encarceramento em massa é uma resposta política à pobreza, criminalizando populações vulneráveis em vez de combater as causas estruturais da violência. No Brasil, essa lógica se reflete no perfil da população carcerária.",
        },
      ],
    },
    {
      name: "Violência nas escolas e bullying",
      repertoires: [
        {
          category: "law",
          title: "Lei do Bullying (13.185/2015)",
          description: "Institui o Programa de Combate à Intimidação Sistemática nas escolas.",
          howToUse: "Use para mostrar o reconhecimento legal do bullying como problema social.",
          paragraphModel: "A Lei 13.185/2015 instituiu o Programa de Combate à Intimidação Sistemática, reconhecendo o bullying como problema social que exige resposta das escolas e da família.",
        },
        {
          category: "data",
          title: "IBGE – Bullying nas escolas brasileiras",
          description: "Pesquisa aponta que mais de 20% dos estudantes sofreram bullying.",
          howToUse: "Use para dimensionar o problema do bullying com dados nacionais.",
          paragraphModel: "Segundo o IBGE, mais de 20% dos estudantes brasileiros relataram ter sofrido bullying na escola. Esse dado evidencia a urgência de programas de prevenção e mediação de conflitos no ambiente escolar.",
        },
        {
          category: "history",
          title: "Tragédia de Realengo (2011)",
          description: "Ataque em escola do Rio de Janeiro matou 12 crianças.",
          howToUse: "Use para discutir os impactos extremos da violência escolar.",
          paragraphModel: "A tragédia de Realengo, em 2011, quando um atirador matou 12 crianças em uma escola do Rio de Janeiro, evidenciou a vulnerabilidade das instituições escolares à violência e a urgência de políticas de saúde mental e segurança.",
        },
      ],
    },
  ],
};
