import classes from './loading-component.module.scss'
import { LoadingPageProps } from '@/app/model/loading-page'

const LoadingPage = ({ title }: LoadingPageProps) => {
    return <p className={classes.loading}>{title}</p>
}

export default LoadingPage
