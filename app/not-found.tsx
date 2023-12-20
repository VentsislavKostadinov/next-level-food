'use client'

import HandlingError from './components/handling-error/handling-error'

const NotFoundPage = () => {
    return (
        <HandlingError
            headline="Not found"
            text=" Unfortunately, we could not found the requested page or
        resource."
        />
    )
}

export default NotFoundPage
