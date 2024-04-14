'use client'
import {removeMeal} from '@/lib/action'
// import {useFormStatus} from 'react-dom'
import classes from './meal-delete-button.module.css'
export default function MealsDeleteButton({mealId}) {
    // const {pending} = useFormStatus()
    function handleDeleteClick(event) {
        console.log(Object.keys(event.target));
        // removeMeal(mealId)
    }
    return <p  className={classes.cta}>
        <button onClick={() => {
            removeMeal(mealId)
        }} mealId={mealId}>Delete</button>
    </p>
}