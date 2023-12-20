import MealItem from './meal-item'
import classes from './meals-grid.module.scss'
import { MealsGridProps } from '../../model/meals-grid'
// later will create the meals model array
export default function MealsGrid({ meals }: any) {
    return (
        <ul className={classes.meals}>
            {meals.map((meal: any) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    )
}
