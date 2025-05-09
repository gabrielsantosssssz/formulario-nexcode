📬 Formulário de Contato - Nexcode
Este projeto é um formulário de contato completo, com frontend em React e backend em Node.js. Os dados enviados pelo formulário são armazenados em um banco de dados MongoDB.

🚀 Tecnologias Utilizadas
Frontend:
React

Vite

HTML5

CSS3

JavaScript

Backend (API):
Node.js

Express

MongoDB

Mongoose

Cors

Dotenv

🧪 Funcionalidades
Envio de mensagens via formulário

Validação de campos obrigatórios

Armazenamento das mensagens no MongoDB

Comunicação via API REST entre frontend e backend

Estrutura modular e organizada

📦 Instalação
1. Clonar o repositório:
git clone https://github.com/gabrielsantosssssz/Formulario-de-contato-Nexcode.git
cd Formulario-de-contato-Nexcode

2. Configurar o backend (API):
cd api
npm install

Crie um arquivo .env com as seguintes variáveis de ambiente:
DATABASE_URL="mongodb+srv://nexcode22:nexcode13@user.ysxcp.mongodb.net/user?retryWrites=true&w=majority&appName=user"
PORT=3000

Inicie o servidor:
node serve.js

3. Configurar o frontend:
cd ..
npm install
npm run dev
🗃️ Estrutura do Projeto
Formulario-de-contato-Nexcode/
├── api/                # Backend (Node.js)
│   ├── models/
│   ├── routes/
│   └── serve.js
├── src/                # Frontend (React)
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
├── vite.config.js
└── README.md

📌 Requisitos
Node.js instalado

Conta no MongoDB Atlas (ou MongoDB local)

Navegador moderno (Chrome, Firefox, etc.)

📝 Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais informações.

👨‍💻 Desenvolvedores
Gabriel dos Santos

Everton Correia

Gabriel Pedroso

Hyago Simões

Daniel