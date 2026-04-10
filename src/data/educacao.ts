import { BookOpen } from "lucide-react";
import { ThematicAxis } from "./types";

export const educacao: ThematicAxis = {
  id: "educacao",
  name: "Educação",
  icon: BookOpen,
  topics: [
    {
      name: "Desigualdade no acesso à educação",
      repertoires: [
        {
          category: "philosopher",
          title: "Pierre Bourdieu",
          description: "A escola reproduz desigualdades sociais através do capital cultural.",
          howToUse: "Use para argumentar que o sistema educacional perpetua as diferenças de classe.",
          paragraphModel: "Segundo Pierre Bourdieu, a escola atua como um mecanismo de reprodução das desigualdades sociais. Nesse sentido, estudantes de baixa renda possuem menos acesso à educação de qualidade, o que evidencia a permanência das desigualdades estruturais.",
        },
        {
          category: "law",
          title: "Constituição Federal (Art. 205)",
          description: "A educação é direito de todos e dever do Estado e da família.",
          howToUse: "Use para mostrar a contradição entre o que a lei garante e a realidade.",
          paragraphModel: "Conforme a Constituição Federal de 1988, a educação é um direito de todos e dever do Estado. No entanto, esse direito não é plenamente garantido, especialmente em regiões periféricas.",
        },
        {
          category: "data",
          title: "IBGE – Desigualdade Educacional",
          description: "Dados mostram disparidade nos índices de escolaridade entre regiões.",
          howToUse: "Use para embasar com dados concretos a argumentação sobre desigualdade.",
          paragraphModel: "De acordo com o IBGE, grande parte da população em áreas periféricas apresenta baixos índices de escolaridade, demonstrando a persistência da desigualdade educacional.",
        },
        {
          category: "cinema",
          title: "Escritores da Liberdade",
          description: "Filme retrata a transformação social por meio da educação.",
          howToUse: "Use como exemplo de como a educação pode mudar realidades.",
          paragraphModel: "No filme Escritores da Liberdade, é retratada a transformação social por meio da educação. De maneira análoga, o acesso ao ensino no Brasil pode mudar trajetórias, embora ainda não seja garantido a todos.",
        },
        {
          category: "literature",
          title: "Vidas Secas – Graciliano Ramos",
          description: "Exclusão social e falta de acesso à educação no sertão.",
          howToUse: "Use para ilustrar a exclusão histórica das populações vulneráveis.",
          paragraphModel: "Na obra Vidas Secas, de Graciliano Ramos, é evidenciada a exclusão social vivida por famílias vulneráveis. Essa realidade ainda se reflete na dificuldade de acesso à educação no Brasil.",
        },
        {
          category: "history",
          title: "Criação do MEC (1953)",
          description: "O Ministério da Educação foi criado para centralizar as políticas educacionais no Brasil.",
          howToUse: "Use para contextualizar a trajetória histórica das políticas educacionais brasileiras.",
          paragraphModel: "A criação do Ministério da Educação, em 1953, representou um passo na institucionalização das políticas educacionais brasileiras. Contudo, décadas depois, as desigualdades no acesso ao ensino permanecem como um desafio estrutural.",
        },
      ],
    },
    {
      name: "Evasão escolar",
      repertoires: [
        {
          category: "philosopher",
          title: "Paulo Freire",
          description: "A educação bancária desmotiva e aliena o estudante.",
          howToUse: "Use para argumentar que métodos ultrapassados contribuem para a evasão.",
          paragraphModel: "Segundo Paulo Freire, a educação bancária aliena o estudante e o desmotiva. A evasão escolar no Brasil pode ser compreendida como resultado de um sistema que não dialoga com a realidade dos alunos.",
        },
        {
          category: "data",
          title: "PNAD – Taxa de Abandono Escolar",
          description: "Milhões de jovens abandonam a escola antes de completar o ensino médio.",
          howToUse: "Use para comprovar a gravidade do problema com números oficiais.",
          paragraphModel: "Conforme dados da PNAD, milhões de jovens brasileiros abandonam a escola antes de concluir o ensino médio, revelando a urgência de políticas públicas que tornem a escola mais atrativa.",
        },
        {
          category: "history",
          title: "Programa Bolsa Família",
          description: "Política de transferência de renda que reduziu a evasão escolar.",
          howToUse: "Use para mostrar como políticas sociais impactam a permanência escolar.",
          paragraphModel: "O Programa Bolsa Família, ao condicionar o benefício à frequência escolar, contribuiu para a redução da evasão entre estudantes em situação de vulnerabilidade.",
        },
        {
          category: "data",
          title: "UNICEF – Crianças fora da escola",
          description: "Milhões de crianças brasileiras estão fora da escola ou em risco de abandono.",
          howToUse: "Use para reforçar a gravidade da evasão escolar com dados internacionais.",
          paragraphModel: "Segundo o UNICEF, o Brasil ainda conta com milhões de crianças e adolescentes fora da escola ou em risco de abandono, evidenciando que a evasão escolar é um problema estrutural que exige ação urgente.",
        },
      ],
    },
    {
      name: "Desvalorização do professor",
      repertoires: [
        {
          category: "data",
          title: "OCDE – Salário de Professores",
          description: "Brasil paga um dos menores salários a professores entre os países avaliados.",
          howToUse: "Use para argumentar que a desvalorização salarial impacta a qualidade do ensino.",
          paragraphModel: "De acordo com a OCDE, o Brasil está entre os países que menos remuneram seus professores, comprometendo a atratividade da carreira docente.",
        },
        {
          category: "philosopher",
          title: "Dermeval Saviani",
          description: "A formação e valorização do professor são essenciais para a educação.",
          howToUse: "Use para defender investimentos na formação e remuneração docente.",
          paragraphModel: "Para Dermeval Saviani, a qualidade da educação está diretamente ligada à valorização do professor. A desvalorização da carreira docente no Brasil configura um obstáculo estrutural ao desenvolvimento educacional.",
        },
        {
          category: "law",
          title: "Lei do Piso Salarial (11.738/2008)",
          description: "Estabelece o piso nacional para os professores da educação básica.",
          howToUse: "Use para mostrar avanços legais e o descumprimento por parte de alguns estados.",
          paragraphModel: "A Lei 11.738/2008 estabeleceu o piso salarial nacional para professores. Contudo, o descumprimento dessa legislação por alguns estados evidencia a persistência da desvalorização profissional.",
        },
        {
          category: "literature",
          title: "O Cortiço – Aluísio Azevedo",
          description: "Retrata as condições precárias de trabalhadores, incluindo educadores, no Brasil do século XIX.",
          howToUse: "Use para mostrar que a precarização do trabalho docente tem raízes históricas profundas.",
          paragraphModel: "A obra O Cortiço, de Aluísio Azevedo, retrata as condições de vida precárias de trabalhadores brasileiros no século XIX. Esse contexto histórico ajuda a compreender as raízes da desvalorização do trabalho docente que persiste até hoje.",
        },
      ],
    },
    {
      name: "Impacto da tecnologia na educação",
      repertoires: [
        {
          category: "philosopher",
          title: "Lev Vygotsky",
          description: "A aprendizagem ocorre na interação social e com o meio.",
          howToUse: "Use para defender o uso de tecnologias colaborativas no ensino.",
          paragraphModel: "Para Lev Vygotsky, a aprendizagem se desenvolve na interação social. O uso de tecnologias digitais pode potencializar essa troca, desde que utilizado de forma pedagógica e inclusiva.",
        },
        {
          category: "history",
          title: "Pandemia e ensino remoto (2020)",
          description: "A Covid-19 escancarou as desigualdades no acesso à educação digital.",
          howToUse: "Use para demonstrar como a exclusão digital afeta o direito à educação.",
          paragraphModel: "Durante a pandemia de Covid-19, o ensino remoto revelou profundas desigualdades no acesso à tecnologia. Estudantes sem computador ou internet ficaram excluídos do processo educacional.",
        },
        {
          category: "data",
          title: "CETIC.br – Uso de tecnologia nas escolas",
          description: "Pesquisa aponta que escolas públicas têm acesso precário à internet e equipamentos.",
          howToUse: "Use para mostrar a desigualdade digital dentro das próprias escolas.",
          paragraphModel: "Segundo o CETIC.br, grande parte das escolas públicas brasileiras ainda possui acesso precário à internet e equipamentos desatualizados. Essa realidade demonstra que a inclusão digital na educação ainda é um projeto inacabado.",
        },
      ],
    },
    {
      name: "Educação indígena e quilombola",
      repertoires: [
        {
          category: "law",
          title: "Lei de Diretrizes e Bases (LDB – 9.394/1996)",
          description: "Garante educação diferenciada para povos indígenas e quilombolas.",
          howToUse: "Use para mostrar avanços legais e os desafios de implementação.",
          paragraphModel: "A LDB, em seu artigo 78, garante educação escolar bilíngue e intercultural para povos indígenas. Contudo, a implementação dessa política ainda enfrenta desafios como falta de professores indígenas formados e materiais didáticos adequados.",
        },
        {
          category: "philosopher",
          title: "Ailton Krenak",
          description: "Defensor dos direitos indígenas e de uma educação que respeite os saberes originários.",
          howToUse: "Use para argumentar pela valorização dos saberes indígenas na educação.",
          paragraphModel: "Para Ailton Krenak, a educação deve dialogar com os saberes originários dos povos indígenas, respeitando suas cosmologias e modos de vida. Ignorar esses conhecimentos representa uma forma de violência cultural.",
        },
      ],
    },
  ],
};
