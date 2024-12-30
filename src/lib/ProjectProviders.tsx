import { ProjectSummary } from "@/data/projects/ProjectSummary";

export function getAllSummaries() : ProjectSummary[] {
    return cards;
}

export function getSummaryById(id: number) : ProjectSummary | null {
    let idx = cards.findIndex((s) => {return s.id === id;});
    if (idx === -1) {
        return null
    }
    return cards[idx];
}

const cards: ProjectSummary[] = [
  {
    id: 1,
    author: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "/lana-del-rey.jpeg",
    ctaLink: "https://ui.aceternity.com/templates",
    projectPage: "https://github.com/matto1matteo/portfolio-be",
    projectTags: [
      { name: "React/Next.JS", color: "#2976f2" },
      { name: "Go", color: "#0f3c85" },
    ],
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
  },
  {
    id: 2,
    projectPage: null,
    projectTags: null,
    author: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "/lana-del-rey.jpeg",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },
  {
    id: 3,
    projectPage: null,
    projectTags: null,
    author: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "/lana-del-rey.jpeg",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      );
    },
  },
  {
    id: 4,
    projectPage: null,
    projectTags: null,
    author: "Lord Himesh",
    title: "Aap Ka Suroor",
    src: "/lana-del-rey.jpeg",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Himesh Reshammiya, a renowned Indian music composer, singer, and
          actor, is celebrated for his distinctive voice and innovative
          compositions. Born in Mumbai, India, he has become a prominent figure
          in the Bollywood music industry. <br /> <br /> His songs often feature
          a blend of contemporary and traditional Indian music, capturing the
          essence of modern Bollywood soundtracks. With a career spanning over
          two decades, Himesh Reshammiya has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },
];
