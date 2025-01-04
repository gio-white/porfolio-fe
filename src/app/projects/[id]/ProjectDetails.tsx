import { Project } from "@/lib/ProjectProviders"

interface Props {
    project: Project
}
export default function ProjectDetails({project: summary}: Props) {
    return (
        <>
            <h1>Project Id: {summary.id}</h1>
            <h2>Project Title: {summary?.title}</h2>
        </>
    )
}
