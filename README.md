# Teste Leadster

## 📑 Sobre o Projeto

Este projeto consiste em uma landing page desenvolvida como parte de um teste para um processo
seletivo na Leadster. A landing page foi criada para demonstrar meus conhecimentos e habilidades em
desenvolvimento web.

O objetivo principal do projeto é construir uma página inicial atrativa e responsiva, que exiba uma
lista de vídeos e permita que os usuários os filtrem com base em determinados critérios, como
`Agências`, `Chatbot`, `Marketing Digital`, `Geração de Leads` e `Mídia Paga`. Além disso, os
usuários também podem ordenar os vídeos de acordo com sua preferência.

<br>

## ✨ Decisões Tomadas

Durante o desenvolvimento do projeto, foram tomadas algumas decisões importantes para garantir a
qualidade, organização e eficiência do código. Abaixo estão as decisões tomadas e o motivo pelo qual
foram escolhidas.

### 1. Uso do TypeScript:

- Decidi utilizar o TypeScript para fornecer tipagem estática ao código.
- O TypeScript ajuda a detectar erros de tipo em tempo de desenvolvimento, melhorando a robustez e a
  manutenção do código.
- Além disso, o TypeScript oferece recursos avançados, como autocompletar e documentação integrada,
  facilitando o desenvolvimento e a colaboração em equipe.

### 2. Configuração do Prettier:

- Optei por configurar o Prettier para manter um estilo de código consistente e legível.
- O Prettier automatiza a formatação do código, reduzindo conflitos de estilo e economizando tempo
  na formatação manual.
- A formatação consistente do código também melhora a legibilidade e a compreensão do código.

### 3. Configuração do ESLint:

- O Next.js já inclui uma configuração padrão do ESLint, que fornece regras de linting para ajudar a
  identificar e corrigir problemas no código.
- O ESLint ajuda a manter um código limpo, consistente e seguindo as melhores práticas.

### 4. Configuração do Husky:

- Configurei o Husky para executar scripts automaticamente antes dos commits.
- O Husky permite garantir que o código esteja formatado corretamente e atenda aos padrões definidos
  antes de ser enviado para o repositório.
- Dessa forma, evitamos a inclusão de código mal formatado ou com erros no histórico de commits,
  mantendo a qualidade e a consistência do código.

### 5. Adoção do Styled Components:

- Utilizei o Styled Components como biblioteca para estilização dos componentes.
- O Styled Components foi sugerido no desafio e fornece uma abordagem moderna e conveniente para
  escrever estilos CSS dentro dos componentes React. Inicialmente, tive receio de utilizá-lo, pois
  em uma tentativa anterior com o Next.js 13 e Styled Components, enfrentei erros persistentes que
  me impediram de prosseguir. Pesquisando mais a fundo, descobri que o Next.js 13 ainda não oferecia
  suporte ao Styled Components. Felizmente, ao verificar novamente, percebi que o suporte já estava
  disponível, se não estivesse faria o projeto com o Next.js 12.
- Com o Styled Components, é possível escrever estilos encapsulados, facilitando a manutenção,
  reutilização e a criação de componentes estilizados de forma mais intuitiva.

### 6. Uso do Framer Motion:

- Optei por utilizar a biblioteca Framer Motion para animações no projeto.
- O Framer Motion é uma biblioteca moderna e poderosa que fornece uma API simples para criar
  animações fluidas e interativas.
- Ele possui recursos como transições suaves, animações baseadas em física e a capacidade de animar
  propriedades complexas.

### 7. Uso do JSON Server:

- Escolhi o JSON Server para simular o recebimento de dados do backend.
- O JSON Server é uma ferramenta simples e fácil de usar que permite criar uma API REST completa com
  base em um arquivo JSON.
- Com o JSON Server, posso definir endpoints, criar rotas e definir os dados que serão retornados em
  formato JSON.
- Isso é especialmente útil durante o desenvolvimento, pois posso ter um ambiente local para testar
  a integração do frontend com o backend simulado, sem depender de um servidor real.

<br>

## 📚 Organização do Código

A estrutura de pastas do projeto é organizada da seguinte forma:

```
├── public
│   └── ...
│
└── src
    ├── animations
    │   └── animations.ts
    │
    ├── app
    │   ├── favicon.ico
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── theme
    │       ├── globalStyles.ts
    │       ├── shared.ts
    │       └── theme.ts
    │
    ├── components
    │   ├── Footer
    │   │   └── ...
    │   │
    │   ├── Header
    │   │   └── ...
    │   │
    │   ├── Hero
    │   │   └── ...
    │   │
    │   ├── Overview
    │   │   └── ...
    │   │
    │   └── VideoGallery
    │       └── ...
    │
    ├── data
    │   └── videos.json
    │
    ├── lib
    │   └── registry.tsx
    │
    └── types
        └── videos.ts
```

- Na pasta `public`, encontramos os arquivos estáticos relacionados à aplicação. Todos esses
  arquivos são acessíveis publicamente.

- Dentro da pasta `src`, encontramos a pasta `animations`, que contém o arquivo `animations.ts`
  relacionado a animações específicas do projeto. A pasta `app` que define a estrutura principal,
  contendo os arquivos:

  - `favicon.ico`, ícone da página
  - `layout.tsx`, é uma interface compartilhada entre rotas.
  - `page.tsx`, interface exclusiva para uma rota.
  - além da pasta `theme` que contém os arquivos relacionados a estilos globais e compartilhados da
    aplicação.

- Dentro da pasta `components`, temos diversos componentes reutilizáveis, como `Footer`, `Header`,
  `Hero`, `Overview` e `VideoGallery`, cada um com sua estrutura de arquivos específica.

- A pasta `data` contém o arquivo `videos.json` com os dados relacionados aos vídeos.

- A pasta `lib` contém o arquivo `registry.tsx` que é responsável por lidar com a renderização
  correta e o gerenciamento de estilos do pacote Styled Components em uma aplicação Next.js.

- A pasta `types` contém o arquivo `videos.ts` com definições de tipos relacionados aos vídeos.

<br>

## 🎯 Funcionalidades

O projeto é uma landing page que possui uma seção de vídeos, na qual os usuários podem filtrar e
ordenar os vídeos de acordo com suas preferências. Além disso, a seção de vídeos é paginada,
permitindo que os usuários naveguem pelos vídeos de forma mais conveniente.

As funcionalidades principais do projeto incluem:

1. Filtragem de Vídeos: Os usuários podem aplicar filtros para restringir os vídeos exibidos com
   base em critérios específicos, como categoria, data de upload ou outro atributo relevante.

2. Ordenação de Vídeos: Os usuários podem escolher a ordem em que os vídeos são exibidos. Por
   exemplo, eles podem ordenar por populdata de publicação ou ordem alfabética.

3. Paginação: Como a seção de vídeos pode conter um grande número de vídeos, a paginação permite que
   os usuários naveguem pelos diferentes conjuntos de vídeos em páginas separadas, tornando a
   experiência mais organizada e fácil de usar.

<br>

## 💻 Instruções de Instalação e de Uso

Para instalar e usar o projeto "teste-leadster", siga as instruções abaixo:

1. Faça um fork do projeto no GitHub: Acesse o link
   [https://github.com/paulaandrezza/teste-leadster](https://github.com/paulaandrezza/teste-leadster)
   e clique no botão "Fork" no canto superior direito da página. Isso criará uma cópia do projeto em
   seu próprio repositório do GitHub.

2. Clone o repositório: No seu terminal, navegue até o diretório onde deseja clonar o projeto e
   execute o seguinte comando:

   ```
   git clone https://github.com/SEU_USUARIO_GITHUB/teste-leadster.git
   ```

   Certifique-se de substituir "SEU_USUARIO_GITHUB" pelo seu nome de usuário no GitHub.

3. Acesse o diretório do projeto: Execute o seguinte comando no terminal para entrar no diretório do
   projeto:

   ```
   cd teste-leadster
   ```

4. O projeto possui 2 branchs, a main e a fake-api, a main possui um arquivo json onde estão os
   videos salvos, a fake-api também possui o arquivo json, porém para acessá-lo é preciso iniciar o
   json-server. Os próximos passos serão divididos para cada um dos casos:

   **4.1 Branch main**: essa é a branch padrão em que o projeto inicia, para executar o projeto com
   ela siga os seguintes passos:

   4.1.1. Instale as dependências: Execute o comando a seguir para instalar as dependências do
   projeto usando o npm:

   ```
   npm install
   ```

   **4.2 Branch feat/fake-api**: essa é a branch onde existe a fake api, para executar o projeto com
   ela siga os seguintes passos:

   4.2.1 Troque para a branch main: Execute o comando a seguir para instalar as alterar a branch:

   ```
   git checkout feat/fake-api
   ```

   4.2.2. Instale as dependências: Execute o comando a seguir para instalar as dependências do
   projeto usando o npm:

   ```
   npm install
   ```

   4.2.2. Inicie o servidor da nossa fake API: Execute o comando a seguir no terminal para iniciar a
   API, lembrando que o `-p 8000` é para definir a porta 8000 para a api e não conflitar com a porta
   3000 que é onde roda o front-end:

   ```
   json-server --watch db.json -p 8000
   ```

**Os passos a partir daqui são iguais, tanto para a branch main quando para a fake-api**

5. Inicie o servidor de desenvolvimento: Se estiver usando a fake-api em outro terminal execute o
   seguinte comando para iniciar o servidor de desenvolvimento, se for a main pode executar no
   terminal normal, pois ela não necessita da API:

   ```
   npm run dev
   ```

6. Acesse o projeto: Abra o seu navegador e digite o seguinte endereço:
   ```
   http://localhost:3000
   ```
   Agora você poderá visualizar e interagir com o projeto "teste-leadster" localmente em seu
   ambiente de desenvolvimento.

É possível acessar o deploy do projeto no seguinte link:
[Teste Leadster](https://teste-leadster-paulaandrezza.vercel.app/).

<br>

## 👩 Autora

- Nome: Paula Marinho
- E-mail: [paulaandrezza25@gmail.com](mailto:paulaandrezza25@gmail.com)
- [Perfil no GitHub](https://github.com/paulaandrezza)
- [Perfil no LinkedIn](https://www.linkedin.com/in/paula-andrezza/)
- [Meu portfólio](https://paulaandrezza.github.io/portfolio/)
