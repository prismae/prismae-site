# Projeto Web (Frontend + Backend)

Este projeto é composto por **frontend** e **backend**, com o backend rodando em **Python (FastAPI)** e o frontend em **JavaScript/React** (ou HTML/JS simples, dependendo da sua estrutura).

Este README explica **como rodar o projeto corretamente do zero**.

---

## 📦 Requisitos

Antes de começar, tenha instalado:

* **Node.js** (versão 18 ou superior)
* **Python** (versão 3.10 ou superior)
* **pip** (gerenciador de pacotes do Python)
* **Git** (opcional, mas recomendado)

Para verificar se já tem tudo:

```bash
node -v
python --version
pip --version
```

---

## 📁 Estrutura do Projeto (exemplo)

```text
projeto/
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── venv/
├── frontend/
│   ├── package.json
│   └── src/
└── README.md
```

---

## 🚀 Rodando o Backend (FastAPI)

### 1️⃣ Entrar na pasta do backend

```bash
cd backend
```

### 2️⃣ Criar ambiente virtual (apenas na primeira vez)

```bash
python -m venv venv
```

### 3️⃣ Ativar o ambiente virtual

**Windows:**

```bash
venv\Scripts\activate
```

**Linux / macOS:**

```bash
source venv/bin/activate
```

### 4️⃣ Instalar dependências

```bash
pip install -r requirements.txt
```

Se o `uvicorn` não funcionar, instale manualmente:

```bash
pip install fastapi uvicorn
```

### 5️⃣ Rodar o servidor

```bash
uvicorn main:app --reload
```

Se tudo der certo, o backend estará disponível em:

```
http://127.0.0.1:8000
```

Documentação automática da API:

```
http://127.0.0.1:8000/docs
```

---

## 🌐 Rodando o Frontend

### 1️⃣ Entrar na pasta do frontend

```bash
cd frontend
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Rodar o projeto

```bash
npm run dev
```

O frontend normalmente abre em:

```
http://localhost:3000
```

ou

```
http://localhost:5173
```

---

## ⚠️ Problemas Comuns

### ❌ `uvicorn: command not found`

Certifique-se de que:

* O ambiente virtual está ativado
* O uvicorn está instalado

```bash
pip install uvicorn
```

Ou rode assim:

```bash
python -m uvicorn main:app --reload
```

---

### ❌ "Não é possível acessar esse site"

Verifique:

* Se o servidor está rodando
* Se a porta está correta
* Se não há erro no terminal

---

## ✅ Dicas

* Sempre rode **backend e frontend em terminais separados**
* Não feche o terminal enquanto o servidor estiver rodando
* Use `CTRL + C` para parar o servidor

---

