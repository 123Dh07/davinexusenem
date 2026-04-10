import { Heart } from "lucide-react";
import { ThematicAxis } from "./types";

export const saude: ThematicAxis = {
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
          paragraphModel: "Segundo Zygmunt Bauman, a modernidade líquida é marcada pela fragilidade das relações. Nesse cenário, os jovens tornam-se vulneráveis a transtornos como ansiedade e depressão.",
        },
        {
          category: "data",
          title: "OMS – Saúde Mental",
          description: "Brasil é o país com maior taxa de ansiedade no mundo.",
          howToUse: "Use para dimensionar o problema com dados internacionais.",
          paragraphModel: "De acordo com a OMS, o Brasil lidera o ranking mundial de transtornos de ansiedade, evidenciando a necessidade urgente de políticas públicas voltadas à saúde mental.",
        },
        {
          category: "cinema",
          title: "13 Reasons Why",
          description: "Série que aborda suicídio e saúde mental entre adolescentes.",
          howToUse: "Use para ilustrar o impacto do isolamento e da pressão social na juventude.",
          paragraphModel: "A série 13 Reasons Why trouxe à tona o debate sobre saúde mental entre adolescentes. De forma análoga, a realidade brasileira exige atenção redobrada à saúde mental nas escolas.",
        },
        {
          category: "law",
          title: "Lei de Saúde Mental (10.216/2001)",
          description: "Garante direitos às pessoas com transtornos mentais no Brasil.",
          howToUse: "Use para mostrar avanços legais e lacunas na atenção à saúde mental.",
          paragraphModel: "A Lei 10.216/2001 representou um marco ao garantir direitos às pessoas com transtornos mentais. No entanto, a escassez de serviços especializados demonstra que sua implementação ainda é insuficiente.",
        },
        {
          category: "data",
          title: "CFP – Suicídio entre jovens no Brasil",
          description: "O suicídio é a segunda maior causa de morte entre jovens de 15 a 29 anos no Brasil.",
          howToUse: "Use para dimensionar a gravidade da crise de saúde mental juvenil.",
          paragraphModel: "Segundo o Conselho Federal de Psicologia, o suicídio é a segunda maior causa de morte entre jovens de 15 a 29 anos no Brasil. Esse dado alarmante evidencia a urgência de políticas de prevenção e de ampliação do acesso à saúde mental.",
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
          paragraphModel: "A Constituição Federal de 1988 garante que a saúde é direito de todos e dever do Estado. Contudo, a superlotação e a precariedade do SUS demonstram que esse direito não é plenamente efetivado.",
        },
        {
          category: "data",
          title: "CNS – Subfinanciamento da Saúde",
          description: "Brasil investe abaixo do recomendado pela OMS em saúde pública.",
          howToUse: "Use para argumentar que o subfinanciamento compromete a universalidade do SUS.",
          paragraphModel: "Segundo o Conselho Nacional de Saúde, o Brasil investe menos em saúde pública do que o recomendado pela OMS, comprometendo a capacidade do SUS de atender a toda a população.",
        },
        {
          category: "history",
          title: "Criação do SUS (1988)",
          description: "O Sistema Único de Saúde foi criado pela Constituição de 1988 como política universal.",
          howToUse: "Use para contextualizar a importância histórica do SUS e os desafios atuais.",
          paragraphModel: "A criação do SUS, em 1988, representou um avanço histórico ao garantir saúde pública universal e gratuita. Apesar disso, o subfinanciamento e a desigualdade regional ainda comprometem a efetivação desse direito.",
        },
        {
          category: "philosopher",
          title: "Michel Foucault",
          description: "O biopoder e o controle do Estado sobre a saúde da população.",
          howToUse: "Use para analisar como o Estado gerencia a saúde como forma de controle social.",
          paragraphModel: "Michel Foucault demonstrou que o Estado exerce o biopoder ao regular a saúde da população. No contexto brasileiro, as políticas de saúde pública refletem as contradições entre o discurso de universalidade e a realidade de exclusão.",
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
          paragraphModel: "De acordo com o IBGE, o índice de obesidade cresceu significativamente nas últimas décadas, atingindo crianças e adolescentes. Esse cenário reflete mudanças nos hábitos alimentares e a influência dos ultraprocessados.",
        },
        {
          category: "law",
          title: "Lei de Rotulagem de Alimentos (2022)",
          description: "Obriga informações nutricionais claras nos rótulos de alimentos.",
          howToUse: "Use para mostrar avanços na política de saúde alimentar.",
          paragraphModel: "A nova regulamentação de rotulagem de alimentos tornou obrigatória a identificação clara de produtos com alto teor de açúcar, sódio e gordura, promovendo escolhas alimentares mais conscientes.",
        },
        {
          category: "data",
          title: "FAO – Segurança Alimentar no Brasil",
          description: "Milhões de brasileiros vivem em situação de insegurança alimentar.",
          howToUse: "Use para mostrar a contradição entre obesidade e fome no Brasil.",
          paragraphModel: "Segundo a FAO, o Brasil convive com o paradoxo da insegurança alimentar: enquanto parte da população sofre com a fome, outra enfrenta a obesidade causada pelo consumo de alimentos ultraprocessados de baixo custo.",
        },
      ],
    },
    {
      name: "Saúde da mulher",
      repertoires: [
        {
          category: "data",
          title: "MS – Mortalidade materna no Brasil",
          description: "O Brasil apresenta altas taxas de mortalidade materna, especialmente entre mulheres negras.",
          howToUse: "Use para evidenciar as desigualdades raciais e de gênero na saúde.",
          paragraphModel: "Dados do Ministério da Saúde revelam que a mortalidade materna no Brasil afeta desproporcionalmente mulheres negras. Esse dado expõe a intersecção entre racismo e desigualdade no acesso à saúde.",
        },
        {
          category: "law",
          title: "Lei do Planejamento Familiar (9.263/1996)",
          description: "Garante acesso a métodos contraceptivos e planejamento reprodutivo.",
          howToUse: "Use para discutir direitos reprodutivos e acesso à saúde da mulher.",
          paragraphModel: "A Lei do Planejamento Familiar garante o acesso a métodos contraceptivos e ao planejamento reprodutivo. Contudo, a implementação desigual dessa política evidencia as barreiras enfrentadas por mulheres de baixa renda.",
        },
        {
          category: "philosopher",
          title: "Simone de Beauvoir",
          description: "O corpo da mulher como campo de disputas políticas e sociais.",
          howToUse: "Use para discutir como as políticas de saúde refletem as desigualdades de gênero.",
          paragraphModel: "Simone de Beauvoir evidenciou que o corpo da mulher é historicamente objeto de controle social e político. Essa perspectiva é fundamental para compreender as desigualdades no acesso à saúde reprodutiva no Brasil.",
        },
      ],
    },
    {
      name: "Dependência química",
      repertoires: [
        {
          category: "data",
          title: "IBGE – Uso de álcool e drogas no Brasil",
          description: "Brasil tem altos índices de dependência de álcool e outras drogas.",
          howToUse: "Use para dimensionar o problema da dependência química como questão de saúde pública.",
          paragraphModel: "Segundo o IBGE, o Brasil apresenta altos índices de dependência de álcool e outras drogas, especialmente entre jovens. Esse dado reforça a necessidade de políticas de prevenção e tratamento baseadas na saúde pública, não na criminalização.",
        },
        {
          category: "philosopher",
          title: "Émile Durkheim",
          description: "A anomia social como fator de vulnerabilidade a comportamentos autodestrutivos.",
          howToUse: "Use para relacionar a dependência química à desintegração dos laços sociais.",
          paragraphModel: "Para Émile Durkheim, a anomia — ausência de normas e laços sociais — favorece comportamentos autodestrutivos. Nesse sentido, a dependência química pode ser compreendida como resultado da fragilização dos vínculos sociais e da exclusão.",
        },
        {
          category: "law",
          title: "Lei de Drogas (11.343/2006)",
          description: "Diferencia usuário de traficante e prevê tratamento para dependentes.",
          howToUse: "Use para discutir a abordagem da dependência como questão de saúde.",
          paragraphModel: "A Lei de Drogas de 2006 diferenciou o tratamento jurídico entre usuários e traficantes, propondo atenção à saúde para dependentes. Contudo, sua aplicação ainda enfrenta desafios, especialmente pela criminalização seletiva de populações vulneráveis.",
        },
      ],
    },
  ],
};
