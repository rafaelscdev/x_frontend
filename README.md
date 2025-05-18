# X Clone - Frontend

Este é o frontend do projeto **X Clone**, inspirado na rede social X (antigo Twitter). O objetivo é simular o desenvolvimento incremental de uma aplicação web moderna, integrando com o backend já publicado em produção.

## Fluxo de Desenvolvimento
O desenvolvimento deste frontend é dividido em 5 grandes etapas (branches):

1. **setup-e-configuracao**: Estrutura inicial, configurações, linters e ambiente.
2. **auth-e-usuario**: Telas e lógica de login/cadastro, integração com backend.
3. **feed-e-posts**: Tela principal do feed, listagem e criação de posts.
4. **follows-e-interacoes**: Funcionalidade de seguir/deixar de seguir usuários.
5. **ajustes-finais-e-deploy**: Refino visual, responsividade, testes e deploy na Vercel.

## Como rodar o projeto localmente

1. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

2. Rode o projeto:
   ```bash
   npm start
   # ou
   yarn start
   ```

3. O app estará disponível em [http://localhost:3000](http://localhost:3000)

## Integração com o Backend
O backend está publicado em: [https://x-clone-api-94920bbdaaf8.herokuapp.com/](https://x-clone-api-94920bbdaaf8.herokuapp.com/)

Configure as variáveis de ambiente do frontend para apontar para essa URL quando necessário.

---

Desenvolvido por Rafael Corrêa para fins didáticos e de portfólio.

