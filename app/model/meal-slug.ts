export type MealSlugProps = {
    params: {
        mealSlug: string
        sizes?: string
    }
}

export type MealProps = {
    id: number
    slug: MealSlugProps['params']['mealSlug']
    title: string
    image: string
    summary: string
    instructions: string
    creator: string
    creator_email: string
}
