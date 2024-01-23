

import { useMealsListContext } from "../providers/MealsListProvider";

const Counter = () => {
    const {meals} = useMealsListContext();
    return(
        <div>
            <h1>Meals left for today: {meals.length}</h1>
        </div>
    )
}

export default Counter;