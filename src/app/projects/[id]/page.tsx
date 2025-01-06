import { notFound } from "next/navigation"
import ProjectDetails from "./ProjectDetails"
import { ReactElement } from "react"
import { getProjectById } from "../Providers"

export interface RouteParameters {
    id: string
}

export interface Parameters {
    params: Promise<RouteParameters>
}

export default async function Project({params}: Parameters) : Promise<ReactElement> {
    const id = (await params).id
    const summary = getProjectById(Number(id))

    if (summary == null) {
        notFound();
    }

    return (
        <>
            <ProjectDetails project={summary} />
        </>)
}
