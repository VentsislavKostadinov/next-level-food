import Link from 'next/link'
import classes from './page.module.scss'
import Meals from './Meals'
import { Suspense } from 'react'
import LoadingPage from '../components/loading/loading-page'

const MealsPage = async () => {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created{' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. It is easy
                    and fun!
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share Your Favorite Recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<LoadingPage title="Fetching Meals..." />}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}

export default MealsPage
