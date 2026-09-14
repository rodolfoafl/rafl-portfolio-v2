export interface HomeCta {
  label: string;
  href: string;
  external: boolean;
}

export interface HomeStat {
  value: string;
  label: string;
}

export interface HomeContent {
  headline: string;
  subheadline: string;
  ctas: HomeCta[];
  stats: HomeStat[];
}

export const home: HomeContent = {
  headline:
    "Desenvolvedor Front-End especializado em e-commerce de alta performance.",
  subheadline:
    "Mais de 5 anos construindo e mantendo lojas online — de +20 e-commerces desenvolvidos à evolução de plataformas de grande volume.",
  ctas: [
    { label: "Ver projetos", href: "/projetos", external: false },
    {
      label: "Fale comigo",
      href: "mailto:rodolfoafl@gmail.com",
      external: true,
    },
  ],
  stats: [
    { value: "5+", label: "anos de experiência" },
    { value: "20+", label: "lojas online desenvolvidas" },
    { value: "+60%", label: "crescimento de tráfego (SEO)" },
  ],
};
