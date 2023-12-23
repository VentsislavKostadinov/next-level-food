import classes from './page.module.scss'
import Image from 'next/image'
import { getMeal } from '@/lib/meals'
import { MealSlugProps, MealProps } from '@/app/model/meal-slug'
import HandlingError from '@/app/components/handling-error/handling-error'
import { notFound } from 'next/navigation'

export const generateMetadata = async ({ params }: MealSlugProps) => {
    const meal = getMeal(params.mealSlug) as MealProps

    if (!meal) {
        notFound()
    }

    return {
        title: meal.title,
        description: meal.summary,
    }
}

const MealDetailsPage = ({ params }: MealSlugProps) => {
    const meal = getMeal(params.mealSlug) as MealProps

    if (!meal) {
        return (
            <HandlingError
                headline="Meal not found"
                text="Unfortunately, we could not find the requested page or meal data!"
            />
        )
    }

    const { image, title, creator, creator_email, summary, instructions } = meal
    const listInstructions = instructions.split(/\n/g)
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image
                        src={`https://ventsislav-kostadinov-next-food-level.s3.eu-central-1.amazonaws.com/${image}`}
                        alt={title}
                        fill
                    />
                </div>
                <div className={classes.headerText}>
                    <h1>{title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${creator_email}`}>{creator}</a>
                    </p>
                    <p className={classes.summary}>{summary}</p>
                </div>
            </header>
            <main>
                <ul className={classes.instructions}>
                    {listInstructions.map(
                        (instruction: string, index: number) =>
                            instruction && <li key={index}>{instruction}</li>,
                    )}
                </ul>
            </main>
        </>
    )
}

export default MealDetailsPage
