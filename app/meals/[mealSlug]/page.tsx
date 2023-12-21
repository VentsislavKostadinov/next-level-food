import classes from './page.module.scss'
import Image from 'next/image'
import { getMeal } from '@/lib/meals'
import { MealSlugProps, MealProps } from '@/app/model/meal-slug'

export const MealDetailsPage = ({ params }: MealSlugProps) => {
    const meal = getMeal(params.mealSlug) as MealProps

    const { image, title, creator, creator_email, summary, instructions } = meal
    const listInstructions = instructions.split(/\n/g)
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={image} alt={title} fill />
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
                        (instruction: string) =>
                            instruction && <li>{instruction}</li>,
                    )}
                </ul>
            </main>
        </>
    )
}

export default MealDetailsPage
