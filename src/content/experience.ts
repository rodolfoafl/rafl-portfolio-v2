export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export const summary =
  "Desenvolvedor Front-End Pleno com mais de 5 anos de experiência no desenvolvimento e manutenção de e-commerces, sistemas web e sites institucionais. Atuo principalmente no ecossistema JavaScript (React, Next.js, TypeScript, Tailwind), com experiência também em PHP e plataformas de e-commerce como Magento e Tray. Tenho uma trajetória sólida em e-commerce: participei do desenvolvimento de mais de 20 lojas online na Novovarejo.com, e hoje atuo na manutenção e evolução do e-commerce Gigantec, na Fagundez Distribuição. Também tenho experiência prática em SEO, performance web e construção de interfaces responsivas focadas em experiência do usuário.";

export const experience: Experience[] = [
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
