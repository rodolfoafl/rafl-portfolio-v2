export interface Profile {
  name: string;
  role: string;
  location: string;
  specialty: string;
  stackChips: string[];
  languages: string;
  email: string;
  resumeUrl: string;
  social: {
    github: string;
    linkedin: string;
  };
}

export const profile: Profile = {
  name: "Rodolfo Leal",
  role: "Desenvolvedor Front-End Pleno",
  location: "Curitiba, PR",
  specialty: "E-commerce & performance",
  stackChips: ["React", "Next.js", "TypeScript", "JavaScript", "PHP"],
  languages: "Português, Inglês",
  email: "rodolfoafl@gmail.com",
  resumeUrl: "/resume/curriculo-rodolfo-leal.pdf",
  social: {
    github: "https://github.com/rodolfoafl",
    linkedin: "https://www.linkedin.com/in/rodolfo-leal-96041b220/",
  },
};

export const siteUrl = "https://rafl-portfolio.vercel.app";
