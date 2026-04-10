import { Palette } from "lucide-react";
import { ThematicAxis } from "./types";

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
          paragraphModel: "O movimento Tropicália promoveu a fusão de elementos da cultura popular com influências internacionais, valorizando a pluralidade brasileira e resistindo à ditadura militar.",
        },
        {
          category: "music",
          title: "Funk e Rap como expressão periférica",
          description: "Gêneros musicais que expressam a realidade das periferias brasileiras.",
          howToUse: "Use para defender a legitimidade cultural de expressões artísticas periféricas.",
          paragraphModel: "O funk e o rap brasileiros são expressões legítimas da cultura periférica, retratando com autenticidade a realidade de comunidades marginalizadas. A criminalização desses gêneros musicais revela o preconceito de classe e raça ainda presentes na sociedade.",
        },
        {
          category: "philosopher",
          title: "Antonio Gramsci",
          description: "A hegemonia cultural como forma de dominação das classes dominantes.",
          howToUse: "Use para analisar como a cultura dominante suprime expressões populares.",
          paragraphModel: "Antonio Gramsci demonstrou que a hegemonia cultural é uma forma de dominação que naturaliza os valores das classes dominantes. No Brasil, isso se reflete na desvalorização de manifestações culturais populares como o carnaval, o candomblé e o funk.",
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
          paragraphModel: "Guy Debord argumentou que a vida moderna se reduz a uma acumulação de espetáculos. Nas redes sociais, a experiência é substituída pela sua representação, gerando uma cultura do entretenimento vazio.",
        },
        {
          category: "cinema",
          title: "O Dilema das Redes",
          description: "Documentário que expõe os mecanismos manipuladores das redes sociais.",
          howToUse: "Use para discutir os impactos negativos das redes sociais na sociedade.",
          paragraphModel: "O documentário O Dilema das Redes revelou como os algoritmos são projetados para maximizar o engajamento, frequentemente à custa do bem-estar dos usuários.",
        },
        {
          category: "data",
          title: "DataReportal – Uso de Redes Sociais no Brasil",
          description: "Brasil está entre os países que mais usam redes sociais no mundo.",
          howToUse: "Use para contextualizar o impacto das redes na cultura brasileira.",
          paragraphModel: "Segundo o DataReportal, o Brasil está entre os países que mais utilizam redes sociais no mundo, o que revela como essas plataformas moldam hábitos culturais e formas de comunicação.",
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
          paragraphModel: "Frantz Fanon demonstrou que o colonialismo destruiu identidades culturais dos povos dominados. No Brasil, isso se reflete na desvalorização de culturas negras e indígenas.",
        },
        {
          category: "literature",
          title: "Quarto de Despejo – Carolina Maria de Jesus",
          description: "Relato de uma mulher negra e pobre sobre a vida na favela.",
          howToUse: "Use para ilustrar a interseccionalidade entre raça, gênero e classe social.",
          paragraphModel: "Em Quarto de Despejo, Carolina Maria de Jesus narra a vida na favela, evidenciando a intersecção entre pobreza, racismo e machismo.",
        },
        {
          category: "law",
          title: "Estatuto da Igualdade Racial (12.288/2010)",
          description: "Estabelece direitos e políticas de promoção da igualdade racial no Brasil.",
          howToUse: "Use para mostrar avanços legais na proteção da identidade e cultura negra.",
          paragraphModel: "O Estatuto da Igualdade Racial representou um avanço ao reconhecer os direitos da população negra e estabelecer políticas de combate à discriminação. Contudo, sua implementação ainda enfrenta resistências estruturais.",
        },
      ],
    },
    {
      name: "Patrimônio cultural e memória",
      repertoires: [
        {
          category: "history",
          title: "Incêndio do Museu Nacional (2018)",
          description: "Incêndio destruiu 20 milhões de itens do acervo histórico brasileiro.",
          howToUse: "Use para discutir o descaso do poder público com o patrimônio cultural.",
          paragraphModel: "O incêndio do Museu Nacional, em 2018, destruiu 20 milhões de itens históricos, evidenciando o descaso do poder público com o patrimônio cultural brasileiro. Essa tragédia é resultado do subfinanciamento crônico da cultura e da ciência.",
        },
        {
          category: "philosopher",
          title: "Walter Benjamin",
          description: "A memória e o patrimônio como resistência à barbárie histórica.",
          howToUse: "Use para argumentar sobre a importância da preservação da memória coletiva.",
          paragraphModel: "Walter Benjamin defendeu que preservar a memória histórica é um ato de resistência contra a barbárie. No Brasil, a destruição do patrimônio cultural representa o apagamento de narrativas essenciais para a construção da identidade nacional.",
        },
      ],
    },
  ],
};
