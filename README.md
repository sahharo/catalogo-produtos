# Catálogo de Produtos em React com TypeScript

Este projeto é um catálogo de produtos desenvolvido com ReactJS e TypeScript que consome a API pública DummyJSON para exibir uma lista de produtos. O aplicativo permite ao usuário buscar produtos pelo nome, filtrar por categoria e por nota mínima, 
além de ordenar os produtos por preço ou ordem alfabética. Ao clicar em um produto, o usuário é levado para uma página de detalhes que mostra informações completas do produto, com um botão para voltar à lista. A navegação entre páginas é feita com React Router.

## Funcionalidades

- Listagem de produtos consumindo a API https://dummyjson.com/products
- Pesquisa por nome do produto
- Filtro por categoria
- Filtro por nota mínima
- Ordenação por preço ou ordem alfabética
- Página de detalhes de produto com botão de voltar
- Layout responsivo e estilizado com CSS

## Tecnologias usadas

- ReactJS com TypeScript
- React Router Dom para navegação
- Fetch API para requisição HTTP
- CSS para estilização

## Como rodar

1. Clone o repositório
2. Rode `npm install` para instalar dependências
3. Rode `npm start` para iniciar o servidor de desenvolvimento
4. Acesse http://localhost:5174 no navegador

## Estrutura

- `src/App.tsx`: Roteamento principal
- `src/pages/ProductList.tsx`: Componente para listagem, busca, filtro e ordenação
- `src/pages/ProductDetails.tsx`: Página de detalhes do produto
- `src/index.tsx`: Renderiza a aplicação com BrowserRouter
- `src/ProductList.css`: Estilos para o catálogo de produtos

## Observações

- O layout e as cores foram personalizados para um tema todo baseado no rosa.
- A aplicação trata carregamento e exibe mensagem enquanto busca produtos.
- Todos os filtros, ordenações e busca são combinados para filtrar a lista.
- Botão "Voltar" na página de detalhes usa a navegação do React Router para retornar à lista.
- Nenhum estado global foi usado, apenas hooks locais.
