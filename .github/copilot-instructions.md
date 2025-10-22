# Copilot Instructions for buscar-filmes

## Visão Geral
Este projeto é uma aplicação Next.js (v14.1.0) que consome a API do TheMovieDB para busca e exibição de filmes. O foco é praticar consumo de APIs e desenvolvimento com Next.js, React, TypeScript e Tailwind CSS.

## Estrutura Principal
- **src/app/**: Páginas principais, rotas dinâmicas (`movie/[id]/`), busca (`search/`), layout global.
- **src/components/**: Componentes reutilizáveis (Sidebar, CardMovie, MovieResult, Skeletons, Footer, etc).
- **src/hooks/**: Hooks customizados, incluindo integração com TMDB (`useSearchMovies`).
- **src/services/**: Serviços para chamadas à API, especialmente `TMDB/searchMovies.ts`.
- **src/types/**: Tipos TypeScript para dados de filmes, imagens e providers.
- **src/util/**: Funções utilitárias, como tradução de status de filmes.

## Fluxo de Dados
- As buscas e detalhes de filmes são feitas via serviços que consomem a API TMDB diretamente.
- Server Components usam fetch nativo do Next.js para renderização no servidor.
- Client Components que precisam de interatividade usam hooks customizados com useState/useEffect.
- O padrão de comunicação entre componentes é via props e context quando necessário.

## Convenções Específicas
- **Skeletons**: Componentes de loading são padronizados em `CardSkeleton` e `MovieFilmResult/Skeleton.tsx`.
- **Paginação**: Implementada em `Pagination/index.tsx`.
- **Filtros**: Tabs de filtro em `TabsFilterMovie/index.tsx`.
- **Layout**: O layout global está em `app/layout.tsx` e o cabeçalho em `layouts/Header/`.
- **Serviços**: Toda chamada à API TMDB deve passar por `src/services/TMDB/`.
- **Hooks**: Hooks customizados ficam em `src/hooks/`, com destaque para `useSearchMovies`.

## Workflows de Desenvolvimento
- Instale dependências com `npm install`.
- Rode o projeto localmente com `npm start` (Next.js inicia em `localhost:3000`).
- Para testes, utilize scripts e configurações do Jest (`jest.config.js`, `jest.setup.js`).
- Estilização via Tailwind, configurada em `tailwind.config.js` e `postcss.config.js`.

## Integrações e Dependências
- API TMDB: Chave e endpoints configurados em `src/services/TMDB/`.
- Tailwind: Utilizado para estilização rápida e responsiva.
- React/Next: Server Components para renderização no servidor, Client Components para interatividade.
- Fetch nativo: Usado tanto no servidor quanto no cliente através dos serviços.

## Exemplos de Padrões
- Para buscar filmes em Server Components:
  ```ts
  // src/services/TMDB/searchMovies.ts
  const { results } = await searchMovies({ query, page });
  ```
- Para buscar filmes em Client Components:
  ```ts
  // src/hooks/TMDB/useSearchMovies.ts
  const { data, isLoading, error } = useSearchMovies({ query, page });
  ```
- Para buscar detalhes de filme:
  ```ts
  // src/services/TMDB/getMovieDetails.ts
  const movie = await getMovieDetails(id);
  ```
- Para exibir resultados:
  ```tsx
  // src/components/MovieResult/index.tsx
  <MovieResult movie={data} />
  ```
- Para mostrar loading:
  ```tsx
  // src/components/CardSkeleton/index.tsx
  <CardSkeleton />
  ```

## Recomendações para Agentes
- Sempre utilize os hooks e serviços existentes para consumir dados.
- Siga os padrões de componentes e tipagem definidos em `src/types/`.
- Mantenha a separação entre lógica de dados (hooks/serviços) e apresentação (componentes).
- Consulte este arquivo e o README para comandos e arquitetura.

---
Seções incompletas ou dúvidas? Solicite feedback para atualização deste guia.
