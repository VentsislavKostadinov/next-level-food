import MealItem from './meal-item'
import classes from './meals-grid.module.scss'
import { MealsGridProps } from '../../model/meals-grid'
import { MealProps } from '@/app/model/meal-slug'

const MealsGrid = ({ meals }: MealsGridProps) => {
    return (
        <ul className={classes.meals}>
            {meals.map((meal: MealProps) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    )
}

export default MealsGrid
