import classes from './loading.module.css'

export default function MealsLoadingPage(params) {
    return (
        <p className={classes.loading}>Fetching Meals...</p>
    )
}