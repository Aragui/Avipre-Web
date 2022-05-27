interface IProject {
    slug: string
    name: string
    year: number
    ubication: string | null | undefined
    cover: string | null | undefined
    // description: string | null | undefined
    // groundExtension: string | null | undefined
    // designer: string
    // builder: string
}

export type { IProject }