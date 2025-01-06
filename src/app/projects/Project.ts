export interface Project {
    id: number,
    title: string,
    description: ProjectDescription
}

export interface DescriptionImage {
    url: string,
    caption: string,
    alt: string | null,
    width: number,
    height: number,
}

export function isImage(object: any): object is DescriptionImage {
    try {
        object as DescriptionImage
        return true
    }
    catch {
        return false
    }

}

export type DescriptionElement = string | DescriptionImage
export type ProjectDescription = DescriptionElement[]

