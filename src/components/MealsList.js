
import { useMealsListContext } from "../providers/MealsListProvider";
// import '../../styles/meals.css'


function MealsList(){
    // get the meals from the context
    const {meals}  = useMealsListContext();
    // console.log(useMealsListContext)

    if(meals===null || meals === undefined){
        console.log("In the MealsList: "+meals)
    }else{
         
        return (
            <div>
                <h1>Today's meals with Context API</h1>
                {meals.map((meal, index) => (
                        <h2 key={index} className="meal">{meal}</h2>
                    ))}
            </div>
        )
    }
   
}
export default MealsList;

