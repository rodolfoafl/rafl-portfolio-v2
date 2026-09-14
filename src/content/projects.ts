export interface ProjectLink {
  label: string;
  /** `null` → renderiza como texto neutro, nunca como link quebrado. */
  url: string | null;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
  period?: string;
  status?: "offline";
  imagePlaceholder?: boolean;
}

export interface ProjectGroup {
  company: string;
  period: string;
  note: string | null;
  /** Nota em tom neutro (cinza) em vez do acento aqua. */
  noteTone?: "accent" | "neutral";
  items: Project[];
}

export const projectsIntro =
  "Uma seleção dos projetos e sistemas em que atuei — do e-commerce de grande volume na Fagundez às mais de 20 lojas online desenvolvidas na Novovarejo.com.";

export const projectGroups: ProjectGroup[] = [
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
        links: [
          {
            label: "datarosports.com.br",
            url: "https://www.datarosports.com.br",
          },
        ],
      },
      {
        name: "Sites institucionais e sistemas internos",
        description:
          "Manutenção do site institucional do grupo, do site institucional da Gigantec, do catálogo de produtos e do sistema de intranet interno.",
        tech: [],
        links: [
          { label: "fagundez.com", url: "https://fagundez.com" },
          {
            label: "institucional.gigantec.com.br",
            url: "https://institucional.gigantec.com.br",
          },
          {
            label: "catalogo.fagundez.com",
            url: "https://catalogo.fagundez.com",
          },
          { label: "Intranet (interno, sem link público)", url: null },
        ],
      },
    ],
  },
  {
    company: "Projetos autônomos",
    period: "2024 — 2026",
    note: "SEO técnico aplicado nesses projetos resultou em ~60% de crescimento de tráfego anual, com os blogs entre as páginas mais acessadas dos sites.",
    noteTone: "accent",
    items: [
      {
        name: "Realiza",
        description:
          "Site institucional com blog integrado, usado como principal canal de conteúdo do cliente.",
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        period: "2024 — 2026",
        links: [
          { label: "realizajus.com", url: "https://www.realizajus.com" },
          { label: "blog (CMS Ghost)", url: "https://www.realizajus.com/blog" },
        ],
      },
      {
        name: "Glomb Advogados",
        description:
          "Site para escritório de advocacia, com blog integrado para conteúdo institucional e jurídico.",
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        period: "2024 — 2026",
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
    note: "Os projetos deste grupo não estão mais no ar — os links de época foram desativados pelos respectivos clientes. As referências ficam como registro do trabalho; placeholders de print devem ser substituídos por imagens reais assim que disponíveis.",
    noteTone: "neutral",
    items: [
      {
        name: "Lojas online",
        description:
          "Participação na criação de +20 lojas online com padrão estético consistente e personalizações de acordo com a identidade visual de cada cliente.",
        tech: [
          "React",
          "TypeScript",
          "JavaScript",
          "Sass",
          "GraphQL",
          "REST API",
        ],
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
        description:
          "Sites institucionais desenvolvidos durante o período na Novovarejo.com.",
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
