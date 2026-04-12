import { useState } from "react";
import { PenLine, Trash2, ChevronDown, ChevronUp, Loader2, Star, X } from "lucide-react";
import { cn } from "@/lib/utils";

const API_KEY = "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"; // Cole sua nova chave aqui

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

export function MyEssays() {
  const [view, setView] = useState<"lista" | "escrever" | "ver">("lista");
  const [redacoes, setRedacoes] = useState<RedacaoSalva[]>(() => {
    const saved = localStorage.getItem("nexus_redacoes");
    return saved ? JSON.parse(saved) : [];
  });
  const [tema, setTema] = useState("");
  const [temaPersonalizado, setTemaPersonalizado] = useState("");
  const [texto, setTexto] = useState("");
  const [corrigindo, setCorrigindo] = useState(false);
  const [redacaoAtual, setRedacaoAtual] = useState<RedacaoSalva | null>(null);
  const [expandido, setExpandido] = useState<string | null>(null);

  const temaFinal = temaPersonalizado || tema;
  const palavras = texto.trim().split(/\s+/).filter(Boolean).length;

  const salvarRedacao = () => {
    if (!temaFinal || !texto) return;
    const nova: RedacaoSalva = {
      id: Date.now().toString(),
      tema: temaFinal,
      texto,
      data: new Date().toLocaleDateString("pt-BR"),
    };
    const novas = [nova, ...redacoes];
    setRedacoes(novas);
    localStorage.setItem("nexus_redacoes", JSON.stringify(novas));
    setView("lista");
    setTema("");
    setTemaPersonalizado("");
    setTexto("");
  };

  const corrigirRedacao = async (redacao: RedacaoSalva) => {
    setCorrigindo(true);
    setRedacaoAtual(redacao);

    const prompt = `Você é um corretor oficial do ENEM. Corrija a redação abaixo nas 5 competências do ENEM.

Tema: ${redacao.tema}

Redação:
${redacao.texto}

Responda APENAS em JSON válido, sem texto antes ou depois:
{
  "competencia1": { "nota": (0,40,80,120,160,200), "comentario": "comentário detalhado" },
  "competencia2": { "nota": (0,40,80,120,160,200), "comentario": "comentário detalhado" },
  "competencia3": { "nota": (0,40,80,120,160,200), "comentario": "comentário detalhado" },
  "competencia4": { "nota": (0,40,80,120,160,200), "comentario": "comentário detalhado" },
  "competencia5": { "nota": (0,40,80,120,160,200), "comentario": "comentário detalhado" },
  "notaTotal": (soma das 5 notas),
  "comentarioGeral": "comentário geral sobre a redação com pontos fortes e o que melhorar"
}

Competência 1: Domínio da norma culta da língua portuguesa
Competência 2: Compreensão da proposta e aplicação de conceitos de áreas de conhecimento
Competência 3: Seleção, relação e organização de informações e argumentos
Competência 4: Mecanismos linguísticos necessários para construção da argumentação
Competência 5: Proposta de intervenção social respeitando os direitos humanos`;

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1500,
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await response.json();
      const text = data.content?.[0]?.text || "{}";
      const clean = text.replace(/```json|```/g, "").trim();
      const correcao: Correcao = JSON.parse(clean);

      const atualizadas = redacoes.map(r =>
        r.id === redacao.id ? { ...r, correcao } : r
      );
      setRedacoes(atualizadas);
      localStorage.setItem("nexus_redacoes", JSON.stringify(atualizadas));
      setRedacaoAtual({ ...redacao, correcao });
      setView("ver");
    } catch (e) {
      alert("Erro ao corrigir. Verifique sua API Key.");
    } finally {
      setCorrigindo(false);
    }
  };

  const deletarRedacao = (id: string) => {
    const novas = redacoes.filter(r => r.id !== id);
    setRedacoes(novas);
    localStorage.setItem("nexus_redacoes", JSON.stringify(novas));
  };

  const competencias = [
    { key: "competencia1", label: "C1 – Norma culta" },
    { key: "competencia2", label: "C2 – Compreensão do tema" },
    { key: "competencia3", label: "C3 – Seleção de argumentos" },
    { key: "competencia4", label: "C4 – Coesão e coerência" },
    { key: "competencia5", label: "C5 – Proposta de intervenção" },
  ];

  const getCorNota = (nota: number) => {
    if (nota >= 160) return "text-green-400";
    if (nota >= 120) return "text-yellow-400";
    if (nota >= 80) return "text-orange-400";
    return "text-red-400";
  };

  return (
    <div className="space-y-8">

      {/* Lista de redações */}
      {view === "lista" && (
        <div className="space-y-6 opacity-0 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-foreground">Minhas Redações</h2>
              <p className="text-[13px] text-muted-foreground mt-1">{redacoes.length} redação(ões) salva(s)</p>
            </div>
            <button
              onClick={() => setView("escrever")}
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
                      <p className="text-[11px] font-mono text-muted-foreground mt-0.5">{r.data}</p>
                      {r.correcao && (
                        <div className="flex items-center gap-2 mt-2">
                          <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                          <span className={cn("text-[13px] font-bold", getCorNota(r.correcao.notaTotal))}>
                            {r.correcao.notaTotal} pontos
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {!r.correcao && (
                        <button
                          onClick={() => corrigirRedacao(r)}
                          disabled={corrigindo}
                          className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 text-[12px] font-medium hover:bg-primary/20 transition-colors"
                        >
                          {corrigindo && redacaoAtual?.id === r.id ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : "Corrigir"}
                        </button>
                      )}
                      {r.correcao && (
                        <button
                          onClick={() => { setRedacaoAtual(r); setView("ver"); }}
                          className="px-3 py-1.5 rounded-lg bg-secondary text-foreground border border-border/40 text-[12px] font-medium hover:border-primary/30 transition-colors"
                        >
                          Ver correção
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

                  {/* Preview do texto */}
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

      {/* Escrever redação */}
      {view === "escrever" && (
        <div className="space-y-6 opacity-0 animate-fade-in">
          <div className="flex items-center gap-3">
            <button onClick={() => setView("lista")} className="p-2 rounded-lg hover:bg-secondary transition-colors">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
            <h2 className="text-xl font-bold text-foreground">Nova Redação</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Escolha do tema */}
            <div className="space-y-3">
              <p className="text-[13px] font-semibold text-foreground">Escolha o tema</p>
              <div className="grid grid-cols-1 gap-2">
                {TEMAS_SUGERIDOS.map(t => (
                  <button
                    key={t}
                    onClick={() => { setTema(t); setTemaPersonalizado(""); }}
                    className={cn(
                      "px-4 py-2.5 rounded-xl text-[13px] font-medium text-left transition-all border",
                      tema === t && !temaPersonalizado
                        ? "bg-primary/15 border-primary/40 text-primary"
                        : "bg-secondary/60 border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/20"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder="Ou digite um tema personalizado..."
                value={temaPersonalizado}
                onChange={(e) => { setTemaPersonalizado(e.target.value); setTema(""); }}
                className="w-full px-4 py-2.5 rounded-xl bg-secondary/80 border border-border/40 text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
              />
            </div>

            {/* Área de escrita */}
            {temaFinal && (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-[11px] font-mono text-primary/60 uppercase tracking-wider mb-1">Tema</p>
                  <p className="text-[14px] font-semibold text-foreground">{temaFinal}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-semibold text-foreground">Sua redação</p>
                    <span className={cn(
                      "text-[11px] font-mono",
                      palavras < 150 ? "text-red-400" : palavras > 300 ? "text-yellow-400" : "text-green-400"
                    )}>
                      {palavras} palavras {palavras < 150 ? "(mínimo 150)" : palavras > 300 ? "(ideal até 300)" : "✓"}
                    </span>
                  </div>
                  <textarea
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    placeholder="Escreva sua redação aqui... Lembre-se: introdução, dois parágrafos de desenvolvimento e conclusão com proposta de intervenção."
                    className="w-full h-64 px-4 py-3 rounded-xl bg-secondary/80 border border-border/40 text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors resize-none leading-relaxed"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={salvarRedacao}
                    disabled={!temaFinal || !texto || palavras < 50}
                    className="flex-1 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-[14px] hover:opacity-90 transition-all disabled:opacity-40"
                  >
                    Salvar Redação
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Ver correção */}
      {view === "ver" && redacaoAtual && (
        <div className="space-y-6 opacity-0 animate-fade-in">
          <div className="flex items-center gap-3">
            <button onClick={() => setView("lista")} className="p-2 rounded-lg hover:bg-secondary transition-colors">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
            <h2 className="text-xl font-bold text-foreground">Correção da Redação</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Nota geral */}
            {redacaoAtual.correcao && (
              <>
                <div className="p-6 rounded-2xl bg-card border border-border/60 text-center">
                  <p className="text-[13px] text-muted-foreground mb-2">Nota Final</p>
                  <p className={cn("text-5xl font-black mb-2", getCorNota(redacaoAtual.correcao.notaTotal))}>
                    {redacaoAtual.correcao.notaTotal}
                  </p>
                  <p className="text-[13px] text-muted-foreground">de 1000 pontos</p>
                  <p className="text-[13px] text-foreground/70 mt-3 leading-relaxed max-w-lg mx-auto">
                    {redacaoAtual.correcao.comentarioGeral}
                  </p>
                </div>

                {/* Competências */}
                <div className="space-y-3">
                  {competencias.map(comp => {
                    const c = redacaoAtual.correcao![comp.key as keyof Correcao] as { nota: number; comentario: string };
                    return (
                      <div key={comp.key} className="p-4 rounded-xl bg-card border border-border/40">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[13px] font-semibold text-foreground">{comp.label}</p>
                          <span className={cn("text-[15px] font-black", getCorNota(c.nota))}>{c.nota}</span>
                        </div>
                        <div className="w-full h-1.5 bg-secondary rounded-full mb-3">
                          <div
                            className={cn("h-full rounded-full transition-all", c.nota >= 160 ? "bg-green-400" : c.nota >= 120 ? "bg-yellow-400" : c.nota >= 80 ? "bg-orange-400" : "bg-red-400")}
                            style={{ width: `${(c.nota / 200) * 100}%` }}
                          />
                        </div>
                        <p className="text-[12px] text-muted-foreground leading-relaxed">{c.comentario}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Texto da redação */}
                <div className="p-5 rounded-xl bg-card border border-border/40">
                  <p className="text-[10px] font-mono font-semibold text-primary/60 uppercase tracking-wider mb-3">Sua redação</p>
                  <p className="text-[13px] leading-[1.9] text-foreground/80 whitespace-pre-wrap">{redacaoAtual.texto}</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}