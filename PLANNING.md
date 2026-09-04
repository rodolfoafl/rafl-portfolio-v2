# Plano de Implementação — Portfólio Rodolfo Leal v2

> Documento de referência para implementação assistida por agente (Claude Code / VSCode). Contém contexto, decisões de design já validadas, modelo de conteúdo e o passo a passo de execução. Sempre que houver dúvida de estilo/layout, a fonte da verdade são os arquivos em `design-reference/` (mockups estáticos já aprovados).

---

## 1. Contexto e objetivos

Reconstrução do portfólio pessoal de Rodolfo Leal (Desenvolvedor Front-End Pleno), atualmente em `rafl-portfolio.vercel.app`. O site atual usa Next.js + Tailwind + Prismic (CMS headless). Objetivos desta v2:

1. **Remover a dependência do Prismic** — conteúdo passa a ser local, tipado, versionado no repositório (sem CMS externo).
2. **Novo visual** — direção "Ficha Técnica" em modo escuro, já validada em mockups estáticos.
3. **Conteúdo atualizado** — sincronizado com o currículo mais recente (ver seção 6).
4. Site com 3 páginas: Home, Sobre, Projetos.

Não é necessário migrar dados do Prismic — o conteúdo novo já foi todo levantado e está nesse documento.

---

## 2. Stack técnica

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS** (sem plugins extras necessários)
- **next/font/google** para as fontes (não usar `<link>` manual do Google Fonts)
- **Sem CMS.** Conteúdo em `src/content/*.ts`, tipado com `interface`/`type`.
- Currículo em PDF servido estaticamente de `public/resume/curriculo-rodolfo-leal.pdf` (não depender de link externo do Prismic CDN).
- Sem bibliotecas de animação (Framer Motion etc.) — as animações da v1 dos mockups são só CSS + um `IntersectionObserver` pequeno, dá pra manter assim em React com hooks simples (`useEffect` + `useRef`, ou um componente cliente `<RevealOnScroll>` reutilizável).

---

## 3. Design tokens

Modo escuro é a única versão (não há alternância claro/escuro no momento).

```css
--bg: #14191A;        /* fundo geral (grafite esverdeado, não preto puro) */
--surface: #1D2422;   /* superfície da sidebar "ficha" e blocos de destaque */
--line: #2A322F;      /* divisórias e bordas */
--ink: #EDEFEC;       /* texto principal (off-white quente) */
--ink-muted: #B7BDB8; /* texto secundário */
--aqua: #7FFFD4;      /* acento principal — links, números/specs em destaque */
--amber: #D9924A;     /* acento secundário — CTA principal, contraponto quente */
--olive: #9CAE6E;     /* acento terciário — usado esporadicamente nas chips do marquee */
```

Regra de uso: **aquamarine é o elemento mais "berrante" da página** (números de estatística, links). Âmbar é reservado ao CTA de destaque (botão "Baixar currículo"). O resto da UI é deliberadamente discreto — não introduzir novos acentos de cor.

Recomenda-se configurar esses valores em `tailwind.config.ts` como `colors.bg`, `colors.surface`, `colors.line`, `colors.ink`, `colors.ink.muted`, `colors.aqua`, `colors.amber`, `colors.olive` (ou via CSS variables + `theme extend` apontando pra `var(--token)`).

---

## 4. Tipografia

Via `next/font/google`:

- **Archivo** (peso 700/800) — títulos e headings (`h1`, `h2`, `h3`, nome na sidebar).
- **IBM Plex Sans** (peso 400/500) — corpo de texto.
- **IBM Plex Mono** (peso 400/500/700) — specs, números de estatística, período das experiências, tags de tecnologia. Usado de forma grande e intencional nos números — não como labelzinha pequena.

---

## 5. Estrutura de pastas sugerida

```
src/
  app/
    layout.tsx          → fontes, metadata base, <Sidebar> fixa
    page.tsx            → Home
    sobre/page.tsx       → Sobre
    projetos/page.tsx    → Projetos
  components/
    layout/
      Sidebar.tsx        → a "ficha" lateral (compartilhada nas 3 páginas)
    sections/
      Hero.tsx
      Stats.tsx
      SkillsMarquee.tsx
      Timeline.tsx
      ProjectGroup.tsx
    ui/
      RevealOnLoad.tsx   → wrapper client component p/ animação de entrada (Home)
      RevealOnScroll.tsx → wrapper client component c/ IntersectionObserver (Sobre/Projetos)
      Chip.tsx
      Button.tsx
  content/
    profile.ts           → dados da sidebar (nome, cargo, specs, stack chips, socials)
    experience.ts         → array de experiências (timeline)
    projects.ts            → grupos de projetos
    skills.ts              → lista de tecnologias (marquee)
    education.ts           → formação, certificações, idiomas
public/
  resume/
    curriculo-rodolfo-leal.pdf
design-reference/
  home-mockup.html
  sobre-mockup.html
  projetos-mockup.html
```

---

## 6. Modelo e dados de conteúdo

### 6.1 `profile.ts`

```ts
export const profile = {
  name: "Rodolfo Leal",
  role: "Desenvolvedor Front-End Pleno",
  location: "Curitiba, PR",
  specialty: "E-commerce & performance",
  stackChips: ["React", "Next.js", "TypeScript", "JavaScript", "PHP"],
  languages: "Português, Inglês",
  resumeUrl: "/resume/curriculo-rodolfo-leal.pdf",
  social: {
    github: "https://github.com/rodolfoafl",
    linkedin: "https://www.linkedin.com/in/rodolfo-leal-96041b220/",
  },
};
```

### 6.2 Home — headline, stats, CTAs

```ts
export const home = {
  headline: "Desenvolvedor Front-End especializado em e-commerce de alta performance.",
  subheadline:
    "Mais de 5 anos construindo e mantendo lojas online — de +20 e-commerces desenvolvidos à evolução de plataformas de grande volume.",
  ctas: [
    { label: "Ver projetos", href: "/projetos" },
    { label: "Fale comigo", href: "mailto:rodolfoafl@gmail.com" },
  ],
  stats: [
    { value: "5+", label: "anos de experiência" },
    { value: "20+", label: "lojas online desenvolvidas" },
    { value: "+60%", label: "crescimento de tráfego (SEO)" },
  ],
};
```

**Sem selo de "aberto a oportunidades"** — decisão deliberada (Rodolfo segue empregado na Fagundez; o CTA "Fale comigo" já cumpre esse papel discretamente).

### 6.3 Sobre — resumo e experiência (`experience.ts`)

Resumo profissional (parágrafo de abertura da página Sobre):

> Desenvolvedor Front-End Pleno com mais de 5 anos de experiência no desenvolvimento e manutenção de e-commerces, sistemas web e sites institucionais. Atuo principalmente no ecossistema JavaScript (React, Next.js, TypeScript, Tailwind), com experiência também em PHP e plataformas de e-commerce como Magento e Tray. Tenho uma trajetória sólida em e-commerce: participei do desenvolvimento de mais de 20 lojas online na Novovarejo.com, e hoje atuo na manutenção e evolução do e-commerce Gigantec, na Fagundez Distribuição. Também tenho experiência prática em SEO, performance web e construção de interfaces responsivas focadas em experiência do usuário.

**Nota:** não incluir trajetória pessoal/storytelling (infância, cursos anteriores à ADS) — decisão deliberada de manter a página enxuta e profissional. Não incluir experiências anteriores a Novovarejo.com (estágios e trabalho informal) — decisão deliberada, ver observação no fim deste documento.

```ts
export const experience = [
  {
    company: "Fagundez Distribuição",
    role: "Desenvolvedor Front-End Pleno",
    period: "Abril 2025 — atualmente",
    bullets: [
      "Desenvolvimento e manutenção do e-commerce Gigantec (gigantec.com.br), de grande volume, com Magento, PHP, JavaScript, HTML5 e CSS3.",
      "Desenvolvimento e manutenção do e-commerce DataRo (datarosports.com.br) na plataforma Tray, ampliando os canais de venda do grupo.",
      "Manutenção de sites institucionais e sistemas internos: fagundez.com, institucional.gigantec.com.br, catalogo.fagundez.com e intranet interna.",
    ],
  },
  {
    company: "Autônomo",
    role: "Desenvolvedor Front-End",
    period: "Março 2024 — Maio 2026",
    bullets: [
      "Desenvolvimento de sites institucionais para clientes de diversos segmentos (incluindo jurídico), com React, Next.js, TypeScript e Tailwind.",
      "Implementação de SEO técnico com crescimento de ~60% no tráfego anual dos sites mantidos.",
      "Integração de CMS para blogs, com páginas entre as mais acessadas dos sites.",
    ],
  },
  {
    company: "WeFit",
    role: "Desenvolvedor Front-End",
    period: "Maio 2024 — Setembro 2024",
    bullets: [
      "Desenvolvimento e manutenção de sistemas web com React, Next.js, TypeScript e Tailwind.",
    ],
  },
  {
    company: "Novovarejo.com",
    role: "Desenvolvedor Front-End",
    period: "Fevereiro 2021 — Janeiro 2024",
    bullets: [
      "Desenvolvimento e manutenção de mais de 20 lojas online, com React, TypeScript, JavaScript, HTML5 e CSS3.",
      "Desenvolvimento e manutenção de sites institucionais.",
    ],
  },
];
```

### 6.4 Skills (`skills.ts`) — lista única, sem indicar nível de proficiência

```ts
export const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS",
  "HTML5", "CSS3", "PHP", "Magento", "Tray", "SEO", "Git",
  "Node.js", "SQL", "Figma", "Design System", "Jest", "Cypress",
  "Playwright", "Docker", "Spec-Driven Development (Claude Code)",
];
```

Renderizar em marquee contínuo (duplicar o array para loop sem costura), pausa no `:hover`.

### 6.5 Formação e idiomas (`education.ts`)

```ts
export const education = {
  academic: {
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Positivo",
    year: "2019",
  },
  certifications: [
    "AWS Certified Cloud Practitioner — AWS",
    "ReactJS — Rocketseat (50h)",
    "Clean Code — Rocketseat",
    "Redux + Zustand — Rocketseat",
    "Produtividade com IA — Rocketseat",
  ],
  languages: [{ language: "Inglês", level: "Avançado" }],
};
```

### 6.6 Projetos (`projects.ts`) — 3 grupos cronológicos

```ts
export const projectGroups = [
  {
    company: "Fagundez Distribuição",
    period: "Abril 2025 — atualmente",
    note: null,
    items: [
      {
        name: "Gigantec",
        description:
          "E-commerce de grande volume do grupo. Manutenção e evolução contínua, com foco em performance e estabilidade da plataforma.",
        tech: ["Magento", "PHP", "JavaScript", "HTML5", "CSS3"],
        links: [{ label: "gigantec.com.br", url: "https://gigantec.com.br" }],
      },
      {
        name: "DataRo",
        description:
          "E-commerce na plataforma Tray, ampliando os canais de venda do grupo para o segmento esportivo.",
        tech: ["Tray"],
        links: [{ label: "datarosports.com.br", url: "https://www.datarosports.com.br" }],
      },
      {
        name: "Sites institucionais e sistemas internos",
        description:
          "Manutenção do site institucional do grupo, do site institucional da Gigantec, do catálogo de produtos e do sistema de intranet interno.",
        tech: [],
        links: [
          { label: "fagundez.com", url: "https://fagundez.com" },
          { label: "institucional.gigantec.com.br", url: "https://institucional.gigantec.com.br" },
          { label: "catalogo.fagundez.com", url: "https://catalogo.fagundez.com" },
          { label: "Intranet (interno, sem link público)", url: null },
        ],
      },
    ],
  },
  {
    company: "Projetos autônomos",
    period: "2024 — 2025",
    note: "SEO técnico aplicado nesses projetos resultou em ~60% de crescimento de tráfego anual, com os blogs entre as páginas mais acessadas dos sites.",
    items: [
      {
        name: "Realiza",
        description: "Site institucional com blog integrado, usado como principal canal de conteúdo do cliente.",
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        period: "2024 — 2025",
        links: [
          { label: "realizajus.com", url: "https://www.realizajus.com" },
          { label: "blog (CMS Ghost)", url: "https://www.realizajus.com/blog" },
        ],
      },
      {
        name: "Glomb Advogados",
        description: "Site para escritório de advocacia, com blog integrado para conteúdo institucional e jurídico.",
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        period: "2024 — 2025",
        links: [{ label: "glomb.com.br", url: "https://www.glomb.com.br" }],
      },
      {
        name: "Hermes Tech",
        description: "Landing page para empresa de tecnologia.",
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        period: "03/2024",
        links: [{ label: "hermestec.com.br", url: "https://hermestec.com.br" }],
      },
    ],
  },
  {
    company: "Novovarejo.com",
    period: "Fevereiro 2021 — Janeiro 2024",
    note:
      "Os projetos deste grupo não estão mais no ar — os links de época foram desativados pelos respectivos clientes. As referências ficam como registro do trabalho; placeholders de print devem ser substituídos por imagens reais assim que disponíveis.",
    items: [
      {
        name: "Lojas online",
        description:
          "Participação na criação de +20 lojas online com padrão estético consistente e personalizações de acordo com a identidade visual de cada cliente.",
        tech: ["React", "TypeScript", "JavaScript", "Sass", "GraphQL", "REST API"],
        status: "offline",
        links: [
          { label: "Fiat Barigui", url: null },
          { label: "Procura Peças", url: null },
          { label: "Barigui Seminovos", url: null },
          { label: "e-Provence Parts", url: null },
        ],
        imagePlaceholder: true,
      },
      {
        name: "Sites institucionais",
        description: "Sites institucionais desenvolvidos durante o período na Novovarejo.com.",
        tech: ["HTML", "CSS", "JavaScript"],
        status: "offline",
        links: [
          { label: "NVPC", url: null },
          { label: "Mob1", url: null },
        ],
        imagePlaceholder: true,
      },
    ],
  },
];
```

Regra de renderização: se `link.url` for `null`, renderizar como texto neutro (não clicável, cor `ink-muted`) em vez de link em `aqua` — mesmo tratamento visual usado nos mockups pra "sem link público"/"fora do ar". Itens com `imagePlaceholder: true` devem renderizar uma caixa tracejada com o texto `[ print do projeto ]` até as imagens reais serem adicionadas.

---

## 7. Estrutura de páginas e componentes

Layout geral (`app/layout.tsx`): grid de 2 colunas — `<Sidebar>` fixa (300px, sticky, `height: 100vh`) + conteúdo da página. No mobile (`<860px`), a sidebar vira um bloco no topo (`position: relative`, altura automática).

### Sidebar (`components/layout/Sidebar.tsx`)
Nome, cargo, localização → divisor → specs (especialização, stack chips, idiomas) → divisor → nav (Home/Sobre/Projetos, com estado `active` pela rota atual) → botão "Baixar currículo" (âmbar, preenchido) + links sociais. Usa `align-items: flex-start` no bloco do botão pra nunca esticar 100% da largura (isso já causou um bug no mockup — ver seção 9).

### Home (`app/page.tsx`)
`<Hero>` (headline + subheadline + CTAs) → `<Stats>` (3 números em grid, bordas horizontais estilo "linha de specs") → `<SkillsMarquee>`.

### Sobre (`app/sobre/page.tsx`)
Header (h1 "Sobre" + resumo profissional como lead) → `<Timeline>` (experiência, numerada 01–04) → `<SkillsMarquee>` (reaproveitar o mesmo componente da Home) → lista de formação/certificações → idiomas.

### Projetos (`app/projetos/page.tsx`)
Header (h1 "Projetos" + intro curta) → `<ProjectGroup>` × 3, cada um renderizando seu `note` (se houver) e a lista de `items`.

---

## 8. Animações

### Home — coreografia única de carregamento
Sidebar revela em cascata primeiro (0 → ~0,32s: nome/cargo, divisor, specs, divisor, nav, footer), com uma pausa proposital, e só então o conteúdo principal entra (a partir de ~0,75s: headline, subheadline, CTAs, stats, skills). Implementar com uma keyframe `reveal` (`opacity 0→1`, `translateY(8px)→0`) e `animation-delay` individual por elemento (via CSS var `--d` ou classes utilitárias do Tailwind com `[animation-delay:_.75s]`).

### Sobre e Projetos — reveal disparado por scroll
Páginas mais longas usam um componente cliente `<RevealOnScroll>` com `IntersectionObserver` (`threshold: 0.15`), que adiciona uma classe `in-view` na primeira vez que o elemento entra na viewport e depois desconecta o observer (não repete ao rolar pra cima e descer de novo).

### Sempre
Respeitar `prefers-reduced-motion: reduce` — desativar todas as animações de entrada (conteúdo aparece direto) e pausar o marquee.

---

## 9. Responsividade — cuidados específicos

Esses dois bugs já apareceram nos mockups e devem ser evitados desde o início:

1. **Botão "Baixar currículo" esticando 100% da largura no mobile.** Causa: `display:flex; flex-direction:column` no container do footer da sidebar faz o `<a>` esticar por `align-items: stretch` (padrão). Solução: `align-items: flex-start` no container.
2. **Botão colado ao link "Projetos" quando o conteúdo da sidebar excede a altura da viewport.** Nesse caso não usar `margin-top: auto` pra empurrar o botão pro rodapé (só funciona quando sobra espaço vertical) — ou garantir que o conteúdo da sidebar sempre caiba em `100vh` (paddings/gaps enxutos), ou aceitar que o botão siga o fluxo normal com uma margem fixa razoável acima dele.

Breakpoint principal: `860px` (sidebar empilha, vira bloco no topo).

---

## 10. SEO e metadata

- Usar a Metadata API do App Router (`export const metadata` ou `generateMetadata`) em cada página — `title`, `description`, Open Graph.
- `sitemap.ts` e `robots.ts` (suportados nativamente no App Router).
- JSON-LD tipo `Person` no layout raiz (nome, cargo, `sameAs`: GitHub e LinkedIn).
- Sem Prismic, então nada de `images.prismic.io` — usar `next/image` com arquivos locais em `/public`.

---

## 11. Referências visuais

Os 3 arquivos abaixo (em `design-reference/`) são a fonte da verdade do visual — qualquer dúvida de espaçamento, cor exata ou comportamento de hover deve ser resolvida olhando o HTML/CSS renderizado neles, não reinventada:

- `home-mockup.html`
- `sobre-mockup.html`
- `projetos-mockup.html`

---

## 12. Plano de execução (fases)

- [ ] **Fase 0 — Scaffold:** `create-next-app`, Tailwind configurado com os design tokens (seção 3), fontes via `next/font/google` (seção 4), estrutura de pastas (seção 5).
- [ ] **Fase 1 — Layout base:** `Sidebar.tsx` completo e funcional (nav com estado ativo por rota), grid de 2 colunas no `layout.tsx`, breakpoint mobile.
- [ ] **Fase 2 — Conteúdo tipado:** criar todos os arquivos em `src/content/` com os dados da seção 6.
- [ ] **Fase 3 — Home:** `Hero`, `Stats`, `SkillsMarquee`, coreografia de reveal no carregamento.
- [ ] **Fase 4 — Sobre:** header + `Timeline` + `SkillsMarquee` reaproveitado + formação/idiomas, com `RevealOnScroll`.
- [ ] **Fase 5 — Projetos:** `ProjectGroup` (com tratamento de links `null` e `imagePlaceholder`), `RevealOnScroll`.
- [ ] **Fase 6 — Currículo e metadata:** PDF em `/public/resume`, metadata/OG por página, sitemap, robots, JSON-LD.
- [ ] **Fase 7 — Polimento:** conferir os dois bugs de responsividade da seção 9, testar `prefers-reduced-motion`, contraste de cores, navegação por teclado (`:focus-visible` já usado nos mockups).
- [ ] **Fase 8 — Deploy:** publicar na Vercel (mesmo domínio ou um novo), conferir Lighthouse (performance/SEO/acessibilidade).

## 13. Critérios de aceite

- Nenhuma dependência de `@prismicio/*` no `package.json`.
- As 3 páginas renderizam com o conteúdo exato da seção 6 (sem "liderança técnica", com "+20 lojas online", datas corretas).
- Links de projetos "fora do ar" (Novovarejo) aparecem como texto neutro, nunca como link quebrado.
- Site funcional e legível em 360px de largura (mobile) e sem os dois bugs da seção 9.
- Lighthouse: Performance e SEO acima de 90 (base razoável pra um site estático sem CMS).

---

## Observações finais

- Currículo (PDF) já atualizado e sincronizado com este conteúdo — está em `Curriculo_Rodolfo_Leal.docx`/`.pdf`, gerado em conversa anterior.
- Decisão registrada: **não incluir experiências profissionais anteriores a Novovarejo.com** (2 estágios + 1 experiência informal) nem no currículo nem no site — o currículo já está solidificado como Pleno com 4 experiências relevantes, e adicionar entradas mais antigas dilui a narrativa de senioridade.
