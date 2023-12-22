'use client'

import HandlingError from '@/app/components/handling-error/handling-error'

const ErrorSubmitMeal = () => {
    return (
        <HandlingError
            headline="An error occured!"
            text="Failed to create a meal"
        />
    )
}

export default ErrorSubmitMeal
