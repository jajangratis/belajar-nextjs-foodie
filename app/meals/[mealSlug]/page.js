import Image from 'next/image'
import classes from './page.module.css'
import { getMealData } from '@/lib/meals'
import { notFound } from 'next/navigation';
import MealsDeleteButton from '@/components/meals/meal-delete-button';

export async function generateMetadata({params}) {
    const meal = await getMealData(params.mealSlug);
    if (!meal) {
        notFound()
    }
    return {
        title: meal.title,
        description: meal.summary,
    }
}
  

export default async function MealDetailPage({params}) {
    const meal = await getMealData(params.mealSlug);
    if (!meal) {
        notFound()
    }
    meal.instructions = meal.instructions.replace(/\n/g, '<br/>')
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} fill alt="imageMeal" />
                </div>
                <div className={classes.headerText}>
                    <h1>
                        {meal.title}
                    </h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>NAME</a>
                    </p>
                    <p className={classes.summary}>
                        {meal.summary}
                    </p>
                </div>
                <div>
                    <MealsDeleteButton mealId={meal.id}/>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{__html: meal.instructions}}></p>
            </main>
        </>
    )
}