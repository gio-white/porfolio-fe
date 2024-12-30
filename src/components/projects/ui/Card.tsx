import { ProjectSummary, Tags } from "@/data/projects/ProjectSummary";
import { motion } from "framer-motion";
import Image from "next/image";

interface CardProps {
    summary: ProjectSummary,
    index: number,
    id: string,
    onClick: () => void
}

export const ProjectSummaryCard = ({summary: card, id, onClick}: CardProps) => {
    return (
    <>
        <motion.li
            layoutId={`card-${card.title}-${id}`}
            onClick={onClick}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">

              {/* Image */}
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>

              <div className="flex justify-center items-left flex-col px-2">
                {/* Project Title */}
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-left md:text-left text-base"
                >
                  {card.title}
                </motion.h3>

                {/* Project Area / Course */}
                <motion.p
                  layoutId={`description-${card.author}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-left md:text-left text-base"
                >
                  {card.author}
                </motion.p>

                {/* Project Tags */}
                {Tags(card)}
              </div>
            </div>
        </motion.li>
    </>
)}
