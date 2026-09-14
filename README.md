# Portfólio Rodolfo Leal — v2

Portfólio pessoal de [Rodolfo Leal](https://github.com/rodolfoafl), Desenvolvedor Front-End Pleno. Reconstrução da v1 sem CMS: todo o conteúdo é local, tipado e versionado no repositório.

Direção visual "Ficha Técnica", dark mode único. Três páginas: Home, Sobre e Projetos.

## Stack

- **Next.js 16** (App Router, Turbopack) + TypeScript
- **Tailwind CSS v4** — configuração CSS-first via `@theme` em [`src/app/globals.css`](src/app/globals.css); não existe `tailwind.config.ts`
- **next/font/google** — Archivo (títulos), IBM Plex Sans (corpo), IBM Plex Mono (specs e números)
- Sem CMS e sem biblioteca de animação: os reveals são CSS + um `IntersectionObserver` próprio

## Rodando localmente

```bash
npm install
npm run dev
```

Disponível em <http://localhost:3000>.

```bash
npm run build   # build de produção (as 3 páginas são estáticas)
npm run lint
```

## Estrutura

```
src/
  app/            # rotas, metadata, sitemap.ts, robots.ts, manifest.ts e ícones
  components/
    layout/       # Sidebar (a "ficha")
    sections/     # Hero, Stats, SkillsMarquee, Timeline, ProjectGroup
    ui/           # Chip, Button, Reveal, RevealOnScroll
  content/        # todo o conteúdo do site, tipado
public/resume/    # currículo em PDF
public/projetos/  # prints dos projetos
design-reference/ # mockups estáticos aprovados — fonte da verdade do visual
```

## Editando o conteúdo

Nada de código precisa mudar para atualizar o site — os arquivos em [`src/content/`](src/content/) são a fonte de dados:

| Arquivo         | O que controla                                       |
| --------------- | ---------------------------------------------------- |
| `profile.ts`    | Sidebar (nome, cargo, specs, sociais) e URL do site   |
| `home.ts`       | Headline, subheadline, CTAs e estatísticas da Home    |
| `experience.ts` | Resumo profissional e a timeline de experiências      |
| `projects.ts`   | Grupos de projetos da página Projetos                 |
| `skills.ts`     | Tecnologias do marquee                                |
| `education.ts`  | Formação, certificações e idiomas                     |

Em `projects.ts`, um link com `url: null` é renderizado como texto neutro em vez de link quebrado, e `images` (imports estáticos de `public/projetos/`) vira uma galeria de prints abaixo do item.

O plano de implementação completo, com decisões de conteúdo e design, está em [PLANNING.md](PLANNING.md).
