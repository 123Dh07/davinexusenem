import { useState, useEffect } from "react";
import { PenLine, Trash2, ChevronDown, ChevronUp, Star, X, Trophy, TrendingUp, AlertCircle, Save, ClipboardCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface Correcao {
  competencia1: { nota: number; comentario: string };
  competencia2: { nota: number; comentario: string };
  competencia3: { nota: number; comentario: string };
  competencia4: { nota: number; comentario: string };
  competencia5: { nota: number; comentario: string };
  notaTotal: number;
  comentarioGeral: string;
}

interface RedacaoSalva {
  id: string;
  tema: string;
  nome: string;
  serie: string;
  escola: string;
  texto: string;
  data: string;
  correcao?: Correcao;
}

const TEMAS_SUGERIDOS = [
  "A desigualdade no acesso à educação no Brasil",
  "A crise de saúde mental entre os jovens brasileiros",
  "O desmatamento da Amazônia e seus impactos",
  "O impacto das fake news na democracia brasileira",
  "O racismo estrutural e seus impactos na sociedade brasileira",
  "A concentração de renda e a desigualdade social no Brasil",
  "A violência contra a mulher no Brasil",
  "A precarização do trabalho no Brasil contemporâneo",
];

const competencias = [
  { key: "competencia1", label: "C1", desc: "Norma culta da língua portuguesa" },
  { key: "competencia2", label: "C2", desc: "Compreensão e aplicação do tema" },
  { key: "competencia3", label: "C3", desc: "Seleção e organização de argumentos" },
  { key: "competencia4", label: "C4", desc: "Coesão e coerência" },
  { key: "competencia5", label: "C5", desc: "Proposta de intervenção" },
];

const notasValidas = [0, 40, 80, 120, 160, 200];

function Confetti() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-sm animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}px`,
            backgroundColor: ["#3b82f6", "#22c55e", "#f59e0b", "#ec4899", "#8b5cf6"][Math.floor(Math.random() * 5)],
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${1 + Math.random() * 2}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
}

export function MyEssays() {
  const [view, setView] = useState<"lista" | "escolherTema" | "escrever" | "ver" | "corrigir">("lista");
  const [redacoes, setRedacoes] = useState<RedacaoSalva[]>(() => {
    const saved = localStorage.getItem("nexus_redacoes");
    return saved ? JSON.parse(saved) : [];
  });
  const [temaSelecionado, setTemaSelecionado] = useState("");
  const [temaPersonalizado, setTemaPersonalizado] = useState("");
  const [nome, setNome] = useState("");
  const [serie, setSerie] = useState("");
  const [escola, setEscola] = useState("");
  const [texto, setTexto] = useState("");
  const [redacaoAtual, setRedacaoAtual] = useState<RedacaoSalva | null>(null);
  const [expandido, setExpandido] = useState<string | null>(null);
  const [mostrarConfetti, setMostrarConfetti] = useState(false);
  const [animacaoEntrada, setAnimacaoEntrada] = useState(false);

  // Correção manual
  const [correcaoTemp, setCorrecaoTemp] = useState<Partial<Correcao>>({});

  const temaFinal = temaPersonalizado || temaSelecionado;
  const palavras = texto.trim().split(/\s+/).filter(Boolean).length;

  useEffect(() => {
    if (view === "ver" && redacaoAtual?.correcao) {
      setAnimacaoEntrada(false);
      setTimeout(() => setAnimacaoEntrada(true), 100);
      if (redacaoAtual.correcao.notaTotal >= 800) {
        setMostrarConfetti(true);
        setTimeout(() => setMostrarConfetti(false), 4000);
      }
    }
  }, [view, redacaoAtual]);

  const salvarRedacao = () => {
    if (!temaFinal || !texto || !nome) return;
    const nova: RedacaoSalva = {
      id: Date.now().toString(),
      tema: temaFinal,
      nome,
      serie,
      escola,
      texto,
      data: new Date().toLocaleDateString("pt-BR"),
    };
    const novas = [nova, ...redacoes];
    setRedacoes(novas);
    localStorage.setItem("nexus_redacoes", JSON.stringify(novas));
    setView("lista");
    setTemaSelecionado("");
    setTemaPersonalizado("");
    setNome("");
    setSerie("");
    setEscola("");
    setTexto("");
  };

  const iniciarCorrecao = (redacao: RedacaoSalva) => {
    setRedacaoAtual(redacao);
    setCorrecaoTemp(redacao.correcao || {});
    setView("corrigir");
  };

  const salvarCorrecao = () => {
    if (!redacaoAtual) return;
    const c1 = (correcaoTemp.competencia1?.nota || 0);
    const c2 = (correcaoTemp.competencia2?.nota || 0);
    const c3 = (correcaoTemp.competencia3?.nota || 0);
    const c4 = (correcaoTemp.competencia4?.nota || 0);
    const c5 = (correcaoTemp.competencia5?.nota || 0);
    const notaTotal = c1 + c2 + c3 + c4 + c5;

    const correcao: Correcao = {
      competencia1: { nota: c1, comentario: correcaoTemp.competencia1?.comentario || "" },
      competencia2: { nota: c2, comentario: correcaoTemp.competencia2?.comentario || "" },
      competencia3: { nota: c3, comentario: correcaoTemp.competencia3?.comentario || "" },
      competencia4: { nota: c4, comentario: correcaoTemp.competencia4?.comentario || "" },
      competencia5: { nota: c5, comentario: correcaoTemp.competencia5?.comentario || "" },
      notaTotal,
      comentarioGeral: correcaoTemp.comentarioGeral || "",
    };

    const atualizadas = redacoes.map(r =>
      r.id === redacaoAtual.id ? { ...r, correcao } : r
    );
    setRedacoes(atualizadas);
    localStorage.setItem("nexus_redacoes", JSON.stringify(atualizadas));
    setRedacaoAtual({ ...redacaoAtual, correcao });
    setView("ver");
  };

  const deletarRedacao = (id: string) => {
    const novas = redacoes.filter(r => r.id !== id);
    setRedacoes(novas);
    localStorage.setItem("nexus_redacoes", JSON.stringify(novas));
  };

  const getCorNota = (nota: number) => {
    if (nota >= 160) return "text-green-400";
    if (nota >= 120) return "text-yellow-400";
    if (nota >= 80) return "text-orange-400";
    return "text-red-400";
  };

  const getCorBarra = (nota: number) => {
    if (nota >= 160) return "bg-green-400";
    if (nota >= 120) return "bg-yellow-400";
    if (nota >= 80) return "bg-orange-400";
    return "bg-red-400";
  };

  const getMensagem = (nota: number) => {
    if (nota >= 900) return { emoji: "🏆", titulo: "Incrível! Nota quase perfeita!", texto: "Você dominou todas as competências do ENEM. Continue assim e a nota 1000 está ao seu alcance!", cor: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" };
    if (nota >= 800) return { emoji: "🎉", titulo: "Parabéns! Excelente redação!", texto: "Você demonstrou domínio das competências do ENEM. Pequenos ajustes vão te levar ainda mais alto!", cor: "text-green-400", bg: "bg-green-500/10 border-green-500/20" };
    if (nota >= 650) return { emoji: "👏", titulo: "Muito bem! Redação acima da média!", texto: "Você está acima da maioria dos candidatos. Foque nas competências mais fracas para alcançar a nota máxima!", cor: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" };
    if (nota >= 500) return { emoji: "💪", titulo: "Bom esforço! Você está no caminho certo!", texto: "Sua redação está na média nacional. Com dedicação e prática, você vai melhorar muito!", cor: "text-primary", bg: "bg-primary/10 border-primary/20" };
    if (nota >= 300) return { emoji: "📚", titulo: "Não desanime! Tudo começa com o primeiro passo!", texto: "Sua redação precisa de melhorias, mas isso é normal no início. Leia as redações nota 1000, estude os repertórios e pratique!", cor: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" };
    return { emoji: "✍️", titulo: "Continue praticando! Todo campeão já foi iniciante!", texto: "Não fique triste! Use os repertórios do Nexus ENEM, leia as redações nota 1000 e tente de novo. A melhora vem com a prática!", cor: "text-red-400", bg: "bg-red-500/10 border-red-500/20" };
  };

  return (
    <div className="space-y-8">
      {mostrarConfetti && <Confetti />}

      {/* Lista */}
      {view === "lista" && (
        <div className="space-y-6 opacity-0 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-foreground">Minhas Redações</h2>
              <p className="text-[13px] text-muted-foreground mt-1">{redacoes.length} redação(ões) salva(s)</p>
            </div>
            <button
              onClick={() => setView("escolherTema")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-[13px] hover:opacity-90 transition-all"
            >
              <PenLine className="w-4 h-4" />
              Nova Redação
            </button>
          </div>

          {redacoes.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <PenLine className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p className="text-[15px]">Nenhuma redação ainda.</p>
              <p className="text-[13px] mt-1 opacity-70">Clique em "Nova Redação" para começar!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {redacoes.map(r => (
                <div key={r.id} className="p-4 rounded-xl bg-card border border-border/60">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-[14px] truncate">{r.tema}</p>
                      <p className="text-[11px] font-mono text-muted-foreground mt-0.5">{r.nome} · {r.data}</p>
                      {r.correcao && (
                        <div className="flex items-center gap-2 mt-2">
                          <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                          <span className={cn("text-[13px] font-bold", getCorNota(r.correcao.notaTotal))}>
                            {r.correcao.notaTotal} pontos
                          </span>
                          <span className="text-[11px]">{getMensagem(r.correcao.notaTotal).emoji}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => iniciarCorrecao(r)}
                        className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 text-[12px] font-medium hover:bg-primary/20 transition-colors flex items-center gap-1.5"
                      >
                        <ClipboardCheck className="w-3.5 h-3.5" />
                        {r.correcao ? "Editar correção" : "Corrigir"}
                      </button>
                      {r.correcao && (
                        <button
                          onClick={() => { setRedacaoAtual(r); setView("ver"); }}
                          className="px-3 py-1.5 rounded-lg bg-secondary text-foreground border border-border/40 text-[12px] font-medium hover:border-primary/30 transition-colors"
                        >
                          Ver resultado
                        </button>
                      )}
                      <button
                        onClick={() => deletarRedacao(r.id)}
                        className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button
                      onClick={() => setExpandido(expandido === r.id ? null : r.id)}
                      className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {expandido === r.id ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      {expandido === r.id ? "Ocultar texto" : "Ver texto"}
                    </button>
                    {expandido === r.id && (
                      <p className="mt-2 text-[13px] text-foreground/70 leading-relaxed whitespace-pre-wrap border-t border-border/30 pt-3">
                        {r.texto}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Escolher tema */}
      {view === "escolherTema" && (
        <div className="space-y-6 opacity-0 animate-fade-in">
          <div className="flex items-center gap-3">
            <button onClick={() => setView("lista")} className="p-2 rounded-lg hover:bg-secondary transition-colors">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
            <h2 className="text-xl font-bold text-foreground">Escolha o Tema</h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            <p className="text-[13px] text-muted-foreground">Clique no tema para abrir a folha de redação</p>
            <div className="grid grid-cols-1 gap-2">
              {TEMAS_SUGERIDOS.map(t => (
                <button
                  key={t}
                  onClick={() => { setTemaSelecionado(t); setTemaPersonalizado(""); setView("escrever"); }}
                  className="px-4 py-3 rounded-xl text-[13px] font-medium text-left transition-all border bg-secondary/60 border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 flex items-center justify-between group"
                >
                  <span>{t}</span>
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-mono">Escrever →</span>
                </button>
              ))}
            </div>
            <div className="pt-2">
              <input
                type="text"
                placeholder="Ou digite um tema personalizado e pressione Enter..."
                value={temaPersonalizado}
                onChange={(e) => setTemaPersonalizado(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && temaPersonalizado.trim()) {
                    setTemaSelecionado("");
                    setView("escrever");
                  }
                }}
                className="w-full px-4 py-3 rounded-xl bg-secondary/80 border border-border/40 text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
              />
            </div>
          </div>
        </div>
      )}

      {/* Folha de redação */}
      {view === "escrever" && (
        <div className="space-y-6 opacity-0 animate-fade-in">
          <div className="flex items-center gap-3">
            <button onClick={() => setView("escolherTema")} className="p-2 rounded-lg hover:bg-secondary transition-colors">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
            <h2 className="text-xl font-bold text-foreground">Folha de Redação</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Folha estilo ENEM */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-border/20">
              {/* Cabeçalho da folha */}
              <div className="bg-blue-900 text-white p-4 text-center">
                <p className="text-[11px] font-mono uppercase tracking-widest opacity-80">Exame Nacional do Ensino Médio</p>
                <p className="text-[18px] font-black tracking-tight">REDAÇÃO</p>
              </div>

              {/* Dados do aluno */}
              <div className="p-5 border-b border-gray-200 bg-gray-50">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Nome completo *</label>
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Seu nome"
                      className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-200 text-[13px] text-gray-800 focus:outline-none focus:border-blue-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Série / Turma</label>
                    <input
                      type="text"
                      value={serie}
                      onChange={(e) => setSerie(e.target.value)}
                      placeholder="Ex: 3º Ano A"
                      className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-200 text-[13px] text-gray-800 focus:outline-none focus:border-blue-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Escola</label>
                    <input
                      type="text"
                      value={escola}
                      onChange={(e) => setEscola(e.target.value)}
                      placeholder="Nome da escola"
                      className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-200 text-[13px] text-gray-800 focus:outline-none focus:border-blue-400 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Tema */}
              <div className="px-5 py-4 border-b border-gray-200 bg-blue-50">
                <p className="text-[10px] font-mono text-blue-600 uppercase tracking-wider mb-1">Tema da Redação</p>
                <p className="text-[15px] font-bold text-blue-900">{temaFinal}</p>
              </div>

              {/* Área de escrita com linhas */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">Texto dissertativo-argumentativo</p>
                  <span className={cn(
                    "text-[11px] font-mono px-2 py-0.5 rounded",
                    palavras < 150 ? "bg-red-100 text-red-600" : palavras > 300 ? "bg-yellow-100 text-yellow-600" : "bg-green-100 text-green-600"
                  )}>
                    {palavras} palavras
                  </span>
                </div>
                <textarea
                  value={texto}
                  onChange={(e) => setTexto(e.target.value)}
                  placeholder="Escreva sua redação aqui...&#10;&#10;Lembre-se da estrutura:&#10;• Introdução: apresente o tema e sua tese&#10;• 1º Desenvolvimento: argumento + repertório sociocultural&#10;• 2º Desenvolvimento: argumento + repertório sociocultural&#10;• Conclusão: proposta de intervenção com agente, ação, meio, finalidade e efeito"
                  className="w-full h-80 text-[14px] text-gray-800 leading-[2] resize-none focus:outline-none placeholder:text-gray-300"
                  style={{
                    backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, #e5e7eb 31px, #e5e7eb 32px)",
                    lineHeight: "32px",
                    paddingTop: "4px",
                  }}
                />
              </div>

              {/* Rodapé da folha */}
              <div className="px-5 pb-5">
                <button
                  onClick={salvarRedacao}
                  disabled={!temaFinal || !texto || !nome || palavras < 50}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-900 text-white font-semibold text-[14px] hover:bg-blue-800 transition-all disabled:opacity-40"
                >
                  <Save className="w-4 h-4" />
                  Salvar Redação
                </button>
                {!nome && <p className="text-[11px] text-red-400 text-center mt-2">* Preencha seu nome para salvar</p>}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Corrigir manualmente */}
      {view === "corrigir" && redacaoAtual && (
        <div className="space-y-6 opacity-0 animate-fade-in">
          <div className="flex items-center gap-3">
            <button onClick={() => setView("lista")} className="p-2 rounded-lg hover:bg-secondary transition-colors">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
            <h2 className="text-xl font-bold text-foreground">Corrigir Redação</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Info do aluno */}
            <div className="p-4 rounded-xl bg-card border border-border/60">
              <p className="font-semibold text-foreground">{redacaoAtual.nome}</p>
              <p className="text-[12px] text-muted-foreground">{redacaoAtual.serie} · {redacaoAtual.escola} · {redacaoAtual.data}</p>
              <p className="text-[13px] font-medium text-primary mt-1">{redacaoAtual.tema}</p>
            </div>

            {/* Texto do aluno */}
            <div className="p-5 rounded-xl bg-card border border-border/40">
              <p className="text-[10px] font-mono font-semibold text-primary/60 uppercase tracking-wider mb-3">Redação do aluno</p>
              <p className="text-[13px] leading-[1.9] text-foreground/80 whitespace-pre-wrap">{redacaoAtual.texto}</p>
            </div>

            {/* Correção por competência */}
            <div className="space-y-4">
              <p className="text-[13px] font-semibold text-foreground">Correção por Competência</p>
              {competencias.map(comp => (
                <div key={comp.key} className="p-4 rounded-xl bg-card border border-border/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-primary/60 uppercase">{comp.label}</span>
                      <p className="text-[13px] font-semibold text-foreground">{comp.desc}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {notasValidas.map(n => (
                        <button
                          key={n}
                          onClick={() => setCorrecaoTemp(prev => ({
                            ...prev,
                            [comp.key]: { ...((prev as any)[comp.key] || {}), nota: n }
                          }))}
                          className={cn(
                            "w-10 h-8 rounded-lg text-[11px] font-bold transition-all border",
                            (correcaoTemp as any)[comp.key]?.nota === n
                              ? n >= 160 ? "bg-green-400 text-white border-green-400"
                                : n >= 120 ? "bg-yellow-400 text-white border-yellow-400"
                                  : n >= 80 ? "bg-orange-400 text-white border-orange-400"
                                    : "bg-red-400 text-white border-red-400"
                              : "bg-secondary/60 text-muted-foreground border-border/40 hover:border-primary/30"
                          )}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>
                  <textarea
                    value={(correcaoTemp as any)[comp.key]?.comentario || ""}
                    onChange={(e) => setCorrecaoTemp(prev => ({
                      ...prev,
                      [comp.key]: { ...((prev as any)[comp.key] || {}), comentario: e.target.value }
                    }))}
                    placeholder={`Comentário sobre ${comp.desc.toLowerCase()}...`}
                    className="w-full h-20 px-3 py-2 rounded-lg bg-secondary/60 border border-border/40 text-[12px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 resize-none"
                  />
                </div>
              ))}

              {/* Comentário geral */}
              <div className="p-4 rounded-xl bg-card border border-border/40 space-y-2">
                <p className="text-[13px] font-semibold text-foreground">Comentário Geral</p>
                <textarea
                  value={correcaoTemp.comentarioGeral || ""}
                  onChange={(e) => setCorrecaoTemp(prev => ({ ...prev, comentarioGeral: e.target.value }))}
                  placeholder="Escreva um comentário geral sobre a redação, destacando pontos fortes e o que precisa melhorar..."
                  className="w-full h-28 px-3 py-2 rounded-lg bg-secondary/60 border border-border/40 text-[12px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 resize-none"
                />
              </div>

              {/* Nota total preview */}
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-between">
                <p className="text-[13px] font-semibold text-foreground">Nota Total</p>
                <p className="text-[24px] font-black text-primary">
                  {Object.values(correcaoTemp).reduce((acc, val) => {
                    if (typeof val === 'object' && val !== null && 'nota' in val) {
                      return acc + ((val as any).nota || 0);
                    }
                    return acc;
                  }, 0)} / 1000
                </p>
              </div>

              <button
                onClick={salvarCorrecao}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-[14px] hover:opacity-90 transition-all"
              >
                <Save className="w-4 h-4" />
                Salvar Correção
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Ver resultado */}
      {view === "ver" && redacaoAtual?.correcao && (
        <div className={cn("space-y-6", animacaoEntrada && "opacity-0 animate-fade-in")}>
          <div className="flex items-center gap-3">
            <button onClick={() => setView("lista")} className="p-2 rounded-lg hover:bg-secondary transition-colors">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
            <h2 className="text-xl font-bold text-foreground">Resultado da Correção</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">

            {/* Mensagem motivacional */}
            {(() => {
              const msg = getMensagem(redacaoAtual.correcao.notaTotal);
              return (
                <div className={cn("p-6 rounded-2xl border text-center", msg.bg)}>
                  <div className="text-5xl mb-3">{msg.emoji}</div>
                  <h3 className={cn("text-[20px] font-extrabold mb-2", msg.cor)}>{msg.titulo}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed max-w-lg mx-auto">{msg.texto}</p>
                </div>
              );
            })()}

            {/* Nota geral */}
            <div className="p-6 rounded-2xl bg-card border border-border/60 text-center">
              <p className="text-[13px] text-muted-foreground mb-1">Aluno: <strong className="text-foreground">{redacaoAtual.nome}</strong></p>
              <p className="text-[13px] text-muted-foreground mb-3">{redacaoAtual.serie} · {redacaoAtual.escola}</p>
              <p className="text-[13px] text-muted-foreground mb-2">Nota Final ENEM</p>
              <p className={cn("text-6xl font-black mb-1", getCorNota(redacaoAtual.correcao.notaTotal))}>
                {redacaoAtual.correcao.notaTotal}
              </p>
              <p className="text-[13px] text-muted-foreground">de 1000 pontos</p>

              {/* Mini barras */}
              <div className="grid grid-cols-5 gap-2 mt-6">
                {competencias.map(comp => {
                  const c = redacaoAtual.correcao![comp.key as keyof Omit<Correcao, 'notaTotal' | 'comentarioGeral'>] as { nota: number; comentario: string };
                  if (!c) return null;
                  return (
                    <div key={comp.key} className="text-center">
                      <p className="text-[10px] font-mono text-muted-foreground mb-1">{comp.label}</p>
                      <div className="h-16 bg-secondary rounded-lg overflow-hidden flex items-end">
                        <div
                          className={cn("w-full rounded-lg transition-all duration-1000", getCorBarra(c.nota))}
                          style={{ height: `${(c.nota / 200) * 100}%` }}
                        />
                      </div>
                      <p className={cn("text-[11px] font-bold mt-1", getCorNota(c.nota))}>{c.nota}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Análise geral */}
            {redacaoAtual.correcao.comentarioGeral && (
              <div className="p-5 rounded-xl bg-card border border-border/40">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <p className="text-[13px] font-semibold text-foreground">Análise do Professor</p>
                </div>
                <p className="text-[13px] text-foreground/80 leading-relaxed">{redacaoAtual.correcao.comentarioGeral}</p>
              </div>
            )}

            {/* Competências detalhadas */}
            <div className="space-y-3">
              <p className="text-[13px] font-semibold text-foreground flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-primary" />
                Detalhamento por Competência
              </p>
              {competencias.map(comp => {
                const c = redacaoAtual.correcao![comp.key as keyof Omit<Correcao, 'notaTotal' | 'comentarioGeral'>] as { nota: number; comentario: string };
                if (!c) return null;
                return (
                  <div key={comp.key} className="p-4 rounded-xl bg-card border border-border/40">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-[11px] font-mono text-primary/60 uppercase">{comp.label}</span>
                        <p className="text-[13px] font-semibold text-foreground">{comp.desc}</p>
                      </div>
                      <span className={cn("text-[18px] font-black", getCorNota(c.nota))}>{c.nota}</span>
                    </div>
                    <div className="w-full h-1.5 bg-secondary rounded-full mb-3">
                      <div
                        className={cn("h-full rounded-full transition-all duration-1000", getCorBarra(c.nota))}
                        style={{ width: `${(c.nota / 200) * 100}%` }}
                      />
                    </div>
                    {c.comentario && <p className="text-[12px] text-muted-foreground leading-relaxed">{c.comentario}</p>}
                  </div>
                );
              })}
            </div>

            {/* Texto da redação */}
            <div className="p-5 rounded-xl bg-card border border-border/40">
              <p className="text-[10px] font-mono font-semibold text-primary/60 uppercase tracking-wider mb-3">Redação do aluno</p>
              <p className="text-[13px] leading-[1.9] text-foreground/80 whitespace-pre-wrap">{redacaoAtual.texto}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => iniciarCorrecao(redacaoAtual)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-secondary border border-border/40 text-foreground text-[13px] font-medium hover:border-primary/30 transition-colors"
              >
                <ClipboardCheck className="w-4 h-4" />
                Editar Correção
              </button>
              {redacaoAtual.correcao.notaTotal < 800 && (
                <button
                  onClick={() => { setView("escrever"); setTemaSelecionado(redacaoAtual.tema); setTemaPersonalizado(""); setTexto(""); setNome(redacaoAtual.nome); setSerie(redacaoAtual.serie); setEscola(redacaoAtual.escola); }}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-primary-foreground text-[13px] font-semibold hover:opacity-90 transition-all"
                >
                  <PenLine className="w-4 h-4" />
                  Tentar Novamente
                </button>
              )}
              {redacaoAtual.correcao.notaTotal >= 800 && (
                <div className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  <span className="text-[13px] text-yellow-400 font-semibold">Excelente resultado!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}