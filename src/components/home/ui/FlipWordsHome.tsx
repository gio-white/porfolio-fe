import { FlipWords } from "@/components/ui/FlipWords";

export function FlipWordsHome() {
  const words = ["Data Engineer", "Data Analyst", "Developer"];
 
  return (
    <div className="h-[20rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Welcome to My World of Data <br />
        I'm Giorgio <br />
        As a <FlipWords words={words} />I build systems that connect data with decision-making.
      </div>
    </div>
  );
}