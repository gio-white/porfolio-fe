import { JSX } from "react"
import { isImage, Project, ProjectDescription } from "../Project"
import Image from "next/image";

interface Props {
    project: Project
}

function renderProjectDescription(description: ProjectDescription) : JSX.Element | JSX.Element[] { if (description.length === 0)
    {
        return <></>
    }

    let img = 0;

    return description.map((element, i) => {
        if (typeof element === "string")
        {
            return <p className="mt-2" key={i}>{element}</p>
        }

        if (isImage(element))
        {
            img++;
            return <div className="container max-w-[80%] flex-col align-middle mx-auto mt-5">
                <Image
                    className="mx-auto"
                    key={i}
                    src={element.url}
                    alt={element.alt ?? "image"}
                    width={element.width}
                    height={element.height}/>
                <p className="mx-auto w-fit italic">{"Image " + img + ": " + element.caption}</p>
            </div>
        }
        return <></>
    });
}

export default function ProjectDetails({project}: Props) {
    return (
        <>
            <div className="container mx-auto pb-[2rem]">
                <div className="mx-auto max-w-[1024px] px-[3rem]">
                    <h1 className="text-center text-white text-5xl">{project.title}</h1>
                    {renderProjectDescription(project.description)}
                </div>
            </div>
        </>
    )
}
