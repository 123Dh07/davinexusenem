// ============================================================
// ARQUIVO PRINCIPAL – enemData.ts
// Este arquivo importa todos os eixos temáticos separados.
//
// Para editar um eixo, abra o arquivo correspondente:
//   📄 educacao.ts     → Educação
//   📄 saude.ts        → Saúde
//   📄 meioAmbiente.ts → Meio Ambiente
//   📄 tecnologia.ts   → Tecnologia
//   📄 cidadania.ts    → Cidadania e Democracia
//   📄 cultura.ts      → Cultura e Sociedade
//   📄 desigualdade.ts → Desigualdade Social
//   📄 violencia.ts    → Violência
//   📄 trabalho.ts     → Trabalho e Economia
// ============================================================

import { educacao } from "./educacao";
import { saude } from "./saude";
import { meioAmbiente } from "./meioAmbiente";
import { tecnologia } from "./tecnologia";
import { cidadania } from "./cidadania";
import { cultura } from "./cultura";
import { desigualdade } from "./desigualdade";
import { violencia } from "./violencia";
import { trabalho } from "./trabalho";

export type { RepertoireCategory, Repertoire, Topic, ThematicAxis } from "./types";
export { categoryLabels } from "./types";

export const thematicAxes = [
  educacao,
  saude,
  meioAmbiente,
  tecnologia,
  cidadania,
  cultura,
  desigualdade,
  violencia,
  trabalho,
];
