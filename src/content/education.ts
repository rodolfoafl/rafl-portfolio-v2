export interface Certification {
  title: string;
  issuer: string;
  /** Rótulo mono à direita na listagem (carga horária ou tipo). */
  tag: string;
}

export interface Education {
  academic: {
    degree: string;
    institution: string;
    year: string;
  };
  certifications: Certification[];
  languages: { language: string; level: string }[];
}

export const education: Education = {
  academic: {
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Positivo",
    year: "2019",
  },
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "AWS",
      tag: "Certificação",
    },
    { title: "ReactJS", issuer: "Rocketseat", tag: "50h" },
    { title: "Clean Code", issuer: "Rocketseat", tag: "Curso" },
    { title: "Redux + Zustand", issuer: "Rocketseat", tag: "Curso" },
    { title: "Produtividade com IA", issuer: "Rocketseat", tag: "Curso" },
  ],
  languages: [{ language: "Inglês", level: "Avançado" }],
};
