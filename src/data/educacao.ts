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
          paragraphModel: "Segundo Pierre Bourdieu, a escola atua como um mecanismo de reprodução das desigualdades sociais. Nesse sentido, observa-se que, no Brasil, estudantes de baixa renda possuem menos acesso à educação de qualidade, o que evidencia a permanência das desigualdades estruturais.",
        },
        {
          category: "law",
          title: "Constituição Federal (Art. 205)",
          description: "A educação é direito de todos e dever do Estado e da família.",
          howToUse: "Use para mostrar a contradição entre o que a lei garante e a realidade.",
          paragraphModel: "Conforme a Constituição Federal de 1988, a educação é um direito de todos e dever do Estado. No entanto, na prática, esse direito não é plenamente garantido, especialmente em regiões periféricas.",
        },
        {
          category: "data",
          title: "IBGE – Desigualdade Educacional",
          description: "Dados mostram disparidade nos índices de escolaridade entre regiões.",
          howToUse: "Use para embasar com dados concretos a argumentação sobre desigualdade.",
          paragraphModel: "De acordo com o IBGE, grande parte da população em áreas periféricas apresenta baixos índices de escolaridade. Esse cenário demonstra a persistência da desigualdade educacional.",
        },
        {
          category: "cinema",
          title: "Escritores da Liberdade",
          description: "Filme retrata a transformação social por meio da educação.",
          howToUse: "Use como exemplo de como a educação pode mudar realidades.",
          paragraphModel: "No filme Escritores da Liberdade, é retratada a transformação social por meio da educação. De maneira análoga, na realidade brasileira, o acesso ao ensino pode mudar trajetórias.",
        },
        {
          category: "literature",
          title: "Vidas Secas – Graciliano Ramos",
          description: "Exclusão social e falta de acesso à educação no sertão.",
          howToUse: "Use para ilustrar a exclusão histórica das populações vulneráveis.",
          paragraphModel: "Na obra Vidas Secas, de Graciliano Ramos, é evidenciada a exclusão social vivida por famílias em situação de vulnerabilidade. De forma semelhante, essa realidade ainda se reflete na dificuldade de acesso à educação no Brasil.",
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
          paragraphModel: "Segundo Paulo Freire, a educação bancária, baseada na mera transmissão de conteúdos, aliena o estudante e o desmotiva. Nesse contexto, a evasão escolar no Brasil pode ser compreendida como resultado de um sistema que não dialoga com a realidade dos alunos.",
        },
        {
          category: "data",
          title: "PNAD – Taxa de Abandono Escolar",
          description: "Milhões de jovens abandonam a escola antes de completar o ensino médio.",
          howToUse: "Use para comprovar a gravidade do problema com números oficiais.",
          paragraphModel: "Conforme dados da PNAD, milhões de jovens brasileiros abandonam a escola antes de concluir o ensino médio. Esse dado alarmante revela a urgência de políticas públicas que tornem a escola mais atrativa e acessível.",
        },
        {
          category: "history",
          title: "Programa Bolsa Família",
          description: "Política de transferência de renda que reduziu a evasão escolar.",
          howToUse: "Use para mostrar como políticas sociais impactam a permanência escolar.",
          paragraphModel: "O Programa Bolsa Família, ao condicionar o benefício à frequência escolar, contribuiu para a redução da evasão entre estudantes em situação de vulnerabilidade.",
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
          paragraphModel: "De acordo com a OCDE, o Brasil está entre os países que menos remuneram seus professores. Essa desvalorização salarial compromete a atratividade da carreira docente.",
        },
        {
          category: "philosopher",
          title: "Dermeval Saviani",
          description: "A formação e valorização do professor são essenciais para a educação.",
          howToUse: "Use para defender investimentos na formação e remuneração docente.",
          paragraphModel: "Para Dermeval Saviani, a qualidade da educação está diretamente ligada à formação e à valorização do professor. Assim, a desvalorização da carreira docente no Brasil configura um obstáculo estrutural ao desenvolvimento educacional do país.",
        },
        {
          category: "law",
          title: "Lei do Piso Salarial (11.738/2008)",
          description: "Estabelece o piso nacional para os professores da educação básica.",
          howToUse: "Use para mostrar avanços legais e o descumprimento por parte de alguns estados.",
          paragraphModel: "A Lei 11.738/2008 estabeleceu o piso salarial nacional para professores da educação básica. Contudo, o descumprimento dessa legislação por parte de alguns estados evidencia a persistência da desvalorização profissional.",
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
          paragraphModel: "Para Lev Vygotsky, a aprendizagem se desenvolve na interação social e com o ambiente. Nesse sentido, o uso de tecnologias digitais na educação pode potencializar essa troca, desde que utilizado de forma pedagógica e inclusiva.",
        },
        {
          category: "history",
          title: "Pandemia e ensino remoto (2020)",
          description: "A Covid-19 escancarou as desigualdades no acesso à educação digital.",
          howToUse: "Use para demonstrar como a exclusão digital afeta o direito à educação.",
          paragraphModel: "Durante a pandemia de Covid-19, a adoção do ensino remoto revelou profundas desigualdades no acesso à tecnologia. Estudantes sem computador ou internet ficaram excluídos do processo educacional.",
        },
      ],
    },
  ],
};
