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
          paragraphModel: "Segundo Zygmunt Bauman, a modernidade líquida é marcada pela fragilidade das relações e pela insegurança constante. Nesse cenário, os jovens brasileiros tornam-se vulneráveis a transtornos como ansiedade e depressão.",
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
          paragraphModel: "A série 13 Reasons Why trouxe à tona o debate sobre saúde mental e suicídio entre adolescentes. De forma análoga, a realidade brasileira exige atenção redobrada à saúde mental nas escolas.",
        },
        {
          category: "law",
          title: "Lei de Saúde Mental (10.216/2001)",
          description: "Garante direitos às pessoas com transtornos mentais no Brasil.",
          howToUse: "Use para mostrar avanços legais e lacunas na atenção à saúde mental.",
          paragraphModel: "A Lei 10.216/2001 representou um marco ao garantir direitos às pessoas com transtornos mentais. No entanto, a escassez de serviços especializados demonstra que sua implementação ainda é insuficiente.",
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
          paragraphModel: "A Constituição Federal de 1988 garante, em seu artigo 196, que a saúde é direito de todos e dever do Estado. Contudo, a superlotação e a precariedade do SUS demonstram que esse direito não é plenamente efetivado.",
        },
        {
          category: "data",
          title: "CNS – Subfinanciamento da Saúde",
          description: "Brasil investe abaixo do recomendado pela OMS em saúde pública.",
          howToUse: "Use para argumentar que o subfinanciamento compromete a universalidade do SUS.",
          paragraphModel: "Segundo o Conselho Nacional de Saúde, o Brasil investe proporcionalmente menos em saúde pública do que o recomendado pela OMS. Esse subfinanciamento compromete a capacidade do SUS de atender a toda a população.",
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
          paragraphModel: "De acordo com o IBGE, o índice de obesidade no Brasil cresceu significativamente nas últimas décadas, atingindo inclusive crianças e adolescentes. Esse cenário reflete mudanças nos hábitos alimentares.",
        },
        {
          category: "law",
          title: "Lei de Rotulagem de Alimentos (2022)",
          description: "Obriga informações nutricionais claras nos rótulos de alimentos.",
          howToUse: "Use para mostrar avanços na política de saúde alimentar.",
          paragraphModel: "A nova regulamentação de rotulagem de alimentos, implementada em 2022, tornou obrigatória a identificação clara de produtos com alto teor de açúcar, sódio e gordura. Essa medida representa um avanço na promoção de escolhas alimentares mais conscientes.",
        },
      ],
    },
  ],
};
