import { useState, useRef, useEffect } from "react";
import "../styles/ChatBot.css";

const responses = {
  "O que é a Prismae?": 
    "A Prismae é uma empresa de desenvolvimento web e soluções digitais modernas. Criamos sites responsivos, sistemas web e experiências digitais únicas para empresas de todos os portes.",
    
  "Como entrar em contato?": 
    "Você pode nos contatar pelo formulário de contato do site ou enviar um email diretamente para prismae.contato@gmail.com. Respondemos rapidamente a todas as solicitações.",
    
  "Quais serviços vocês oferecem?": 
    "Oferecemos desenvolvimento de sites institucionais e landing pages, criação de sistemas web simples e personalizados (como cadastros, controles e painéis administrativos), além de serviços de manutenção e hospedagem, com foco em qualidade, desempenho e experiência do usuário.",
    
  "Onde podemos ver trabalhos anteriores?": 
    "Você pode conferir nossos projetos anteriores na seção 'Projetos' do site. Lá mostramos sites, sistemas e soluções digitais que já desenvolvemos para nossos clientes.",

  // ✅ NOVA PERGUNTA
  "Quais planos a Prismae oferece?":
    "Oferecemos três planos principais:\n\nSTART: Sites institucionais simples (até 5 páginas), ideal para presença digital inicial.\n\nPRO: Sites profissionais completos com mais páginas, animações, SEO e identidade visual.\n\nPREMIUM: Sistemas e plataformas completas com painel administrativo, banco de dados e funcionalidades avançadas.\n\nTodos incluem hospedagem e podem ser personalizados conforme sua necessidade."
};

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  function sendMessage(question) {
    setMessages(prev => [
      ...prev,
      { from: "user", text: question },
      { from: "bot", text: responses[question] }
    ]);
  }

  return (
    <div className={`chatbot ${isOpen ? "open" : ""}`}>
      
      <div className="chatbot-icon" onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="black"
        >
          <path d="M4 4h16v12H5.17L4 17.17V4zm0-2c-1.1 0-2 .9-2 2v16l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4z"/>
        </svg>
      </div>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-messages">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.from}`}>
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-options">
            {Object.keys(responses).map(q => (
              <button key={q} onClick={() => sendMessage(q)}>
                {q}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}