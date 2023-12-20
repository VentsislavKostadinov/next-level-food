'use client'
import HandlingError from '../components/handling-error/handling-error'

const MealsError = () => {
    return (
        <HandlingError
            headline="An Error occured!"
            text="Fail to fetch data. Please try again later."
            buttonText="Refresh page"
        />
    )
}

export default MealsError
