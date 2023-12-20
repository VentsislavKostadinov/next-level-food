import { HandlingErrorProps } from '@/app/model/handling-error'
import classes from './handling-error.module.scss'

const HandlingError = ({ headline, text, buttonText }: HandlingErrorProps) => {
    const refreshPage = () => {
        window.location.reload()
    }

    return (
        <main className={classes.error}>
            <h1>{headline}</h1>
            <p>{text}.</p>
            {buttonText !== undefined && (
                <button onClick={refreshPage}>{buttonText}</button>
            )}
        </main>
    )
}

export default HandlingError
