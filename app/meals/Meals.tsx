import { getMeals } from '@/lib/meals'
import MealsGrid from '../components/meals/meals-grid'

const Meals = async () => {
    const meals = await getMeals()

    return <MealsGrid meals={meals} />
}

export default Meals
