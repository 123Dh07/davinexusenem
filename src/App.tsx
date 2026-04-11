import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import { useState } from "react";

const queryClient = new QueryClient();

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);

  const handleLogin = () => {
    if (senha === "davizeca2026") {
      localStorage.setItem("nexus_auth", "true");
      onLogin();
    } else {
      setErro(true);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0a0b0f",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Inter, sans-serif",
    }}>
      <div style={{
        backgroundColor: "#12141a",
        border: "1px solid #1e2030",
        borderRadius: "16px",
        padding: "40px",
        width: "100%",
        maxWidth: "380px",
        textAlign: "center",
      }}>
        <img
          src="/davinexusenem/logo.png"
          alt="Logo"
          style={{ height: "80px", marginBottom: "24px", objectFit: "contain" }}
        />
        <h1 style={{ color: "#fff", fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}>
          Nexus ENEM
        </h1>
        <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "28px" }}>
          Digite a senha para acessar
        </p>
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => { setSenha(e.target.value); setErro(false); }}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          style={{
            width: "100%",
            padding: "12px 16px",
            backgroundColor: "#1a1d26",
            border: erro ? "1px solid #ef4444" : "1px solid #1e2030",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "14px",
            marginBottom: "12px",
            boxSizing: "border-box",
            outline: "none",
          }}
        />
        {erro && (
          <p style={{ color: "#ef4444", fontSize: "13px", marginBottom: "12px" }}>
            Senha incorreta. Tente novamente.
          </p>
        )}
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#3b82f6",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [autenticado, setAutenticado] = useState(
    localStorage.getItem("nexus_auth") === "true"
  );

  if (!autenticado) {
    return <Login onLogin={() => setAutenticado(true)} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;