import { motion } from "framer-motion";
import { ReactElement } from "react";

export type CustomContent = () => React.JSX.Element

export interface ProjectTags {
    name: string
    color: string
}

export interface ProjectSummary {
    id: number,
    author: string,
    title: string,
    src: string,
    ctaLink: string,
    projectPage: string | null,
    projectTags: ProjectTags[] | null,
    content: CustomContent,
}

export function Tags(s: ProjectSummary) : ReactElement | ReactElement[] | null {
    if (s.projectTags == null) {
        return <></>
    }

    return <div className="flex gap-4">
        {s.projectTags.map((tag, index) => {
            return <motion.p
                key={index}
                className="px-4 py-3 text-sm rounded-md font-bold text-white"
                style={{backgroundColor: "#456990"}}
                layoutId={`project-tags-${tag.name}`}
            >
                {tag.name}
            </motion.p>
        })}
    </div>
}
