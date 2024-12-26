import { FlipWords } from "@/components/ui/FlipWords";

export function FlipWordsHome() {
  const words = ["better", "cute", "beautiful", "lover"];
 
  return (
    <div className="h-[20rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Next.JS
        <FlipWords words={words} /> <br />
        is the only framework i want to use
      </div>
    </div>
  );
}