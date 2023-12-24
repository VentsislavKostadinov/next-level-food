'use server'

const process = require('process')
import { redirect } from 'next/navigation'

import { saveMeal } from './meals'
import { revalidatePath } from 'next/cache'
process.noDeprecation = true
console.log('actions', process.noDeprecation)
const isInvalidText = (text: FormDataEntryValue | null) => {
    return !text || text === ''
}

export const shareMeal = async (prevState: FormData, formData: FormData) => {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    }

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        //@ts-ignore
        !meal.creator_email.includes('@') ||
        !meal.image
    ) {
        return {
            message: 'Invalid Input!',
        }
    }
    await saveMeal(meal)
    revalidatePath('/meals')
    redirect('/meals')
}
