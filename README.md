# X Clone

Um clone moderno do Twitter (X) desenvolvido em React, com foco em responsividade, usabilidade e experiência de usuário.

- **Repositório remoto:** [https://github.com/rafaelscdev/x_frontend](https://github.com/rafaelscdev/x_frontend)
- **Consome a API de backend própria** (autenticação, posts, comentários, etc)

## Funcionalidades
- Feed de posts responsivo (desktop, tablet e mobile)
- Página de post individual com comentários
- Sidebar com navegação (menu hamburguer no mobile)
- Login, cadastro e autenticação de usuário
- Postar, comentar, curtir e seguir usuários
- Logout seguro

## Tecnologias Utilizadas
- React + TypeScript
- Styled-components
- Redux Toolkit (RTK Query)
- React Router DOM
- Vercel (deploy)

## Como rodar localmente
1. Clone o repositório:
   ```sh
   git clone https://github.com/rafaelscdev/x_frontend.git
   cd x_frontend_new
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Rode o projeto:
   ```sh
   npm start
   ```
4. Acesse [http://localhost:3000](http://localhost:3000)

## Estrutura de Pastas
```
x_frontend_new/
├── src/
│   ├── components/      # Componentes reutilizáveis (BarLeft, BarRight, Post, Posts, etc)
│   ├── pages/           # Páginas principais (Feed, PostPage, Entry)
│   ├── styles/          # Estilos globais e temas
│   ├── services/        # Serviços de API (auth, posts)
│   └── utils/           # Funções utilitárias
├── public/              # Arquivos estáticos
├── package.json         # Dependências e scripts
└── README.md            # Este arquivo
```

## Deploy
O projeto está hospedado na Vercel e faz deploy automático a cada push na branch `main`.

## Contribuição
Pull requests são bem-vindos! Para contribuir, abra uma issue ou envie um PR.

---
Projeto desenvolvido para fins educacionais e de portfólio.
