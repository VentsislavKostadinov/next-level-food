import Link from 'next/link'
import Image from 'next/image'
import { MealItemProps } from '../../model/meal-item'
import classes from './meal-item.module.scss'

export default function MealItem({
    title,
    slug,
    image,
    summary,
    creator,
    sizes = '(max-width: auto)',
}: MealItemProps) {
    return (
        <article className={classes.meal}>
            <header>
                <div className={classes.image}>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGES_ENDPOINT}/${image}`}
                        alt={title}
                        fill
                        sizes={sizes}
                    />
                </div>
                <div className={classes.headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div className={classes.content}>
                <p className={classes.summary}>{summary}</p>
                <div className={classes.actions}>
                    <Link href={`/meals/${slug}`}>View Details</Link>
                </div>
            </div>
        </article>
    )
}
