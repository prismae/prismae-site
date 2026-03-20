import { useState, useEffect } from "react";
import "./CookieBanner.css";

export default function CookieBanner() {
  const [visivel, setVisivel] = useState(false);
  const [modal, setModal] = useState(false);
  const [preferencias, setPreferencias] = useState({
    necessarios: true,
    analytics: false,
    marketing: false,
  });

  // 🔒 MOSTRA SE NÃO EXISTIR CONSENTIMENTO
  useEffect(() => {
    const consentimento = localStorage.getItem("cookieConsent");

    if (!consentimento) {
      setVisivel(true);
      document.body.style.overflow = "hidden";
    }

    // 🔥 FUNÇÃO GLOBAL PRA REABRIR
    window.abrirCookies = () => {
      setVisivel(true);
      setModal(false);
      document.body.style.overflow = "hidden";
    };
  }, []);

  const salvar = (dados) => {
    localStorage.setItem("cookieConsent", JSON.stringify(dados));
    setVisivel(false);
    setModal(false);
    document.body.style.overflow = "auto";
  };

  const aceitarTodos = () => {
    salvar({
      necessarios: true,
      analytics: true,
      marketing: true,
    });
  };

  const recusar = () => {
    salvar({
      necessarios: true,
      analytics: false,
      marketing: false,
    });
  };

  if (!visivel) return null;

  return (
    <>
      {!modal && (
        <div className="cookie-overlay">
          <div className="cookie-popup">
            <h3>🍪 Uso de Cookies</h3>

            <p>
              Utilizamos cookies para melhorar sua experiência, analisar o tráfego
              e personalizar conteúdos. Veja nossa{" "}
              <a
                href="/politica-de-privacidade.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de Privacidade
              </a>.
            </p>

            <div className="botoes">
              <button onClick={aceitarTodos}>Aceitar</button>
              <button onClick={recusar} className="secundario">
                Recusar
              </button>
              <button onClick={() => setModal(true)} className="secundario">
                Configurar
              </button>
            </div>
          </div>
        </div>
      )}

      {modal && (
        <div className="cookie-overlay">
          <div className="cookie-popup">
            <h3>Preferências de Cookies</h3>

            <label>
              <input type="checkbox" checked disabled />
              Necessários (obrigatório)
            </label>

            <label>
              <input
                type="checkbox"
                checked={preferencias.analytics}
                onChange={(e) =>
                  setPreferencias({
                    ...preferencias,
                    analytics: e.target.checked,
                  })
                }
              />
              Analytics
            </label>

            <label>
              <input
                type="checkbox"
                checked={preferencias.marketing}
                onChange={(e) =>
                  setPreferencias({
                    ...preferencias,
                    marketing: e.target.checked,
                  })
                }
              />
              Marketing
            </label>

            <div className="botoes">
              <button onClick={() => salvar(preferencias)}>
                Salvar
              </button>
              <button onClick={() => setModal(false)} className="secundario">
                Voltar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}