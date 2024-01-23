
import React, {useState} from 'react';



 // create a context
 const mealsContext = React.createContext(); 
  // create the meals constant - data to pass around
  const todaysmeals = ['Baked Beans','Baked Potatoes','Sweet Lemon'];

const MealsProvider = ({children}) =>{
    // instantiate the state
    const [meals, setMeals] = useState(todaysmeals)
    console.log("In Provider: ", meals)
    
    return (
        // provides the state variable...

        /*should use an object with the data itself. */

        // <mealsContext.Provider value={{meals}}>
        //     {children}
        // </mealsContext.Provider>

        /*can use an array if would want the children to set the state. */

        <mealsContext.Provider value={{meals, setMeals}}/*value should be an object */>
            {children}
        </mealsContext.Provider>
    )

}
export const useMealsListContext = ()=> React.useContext(mealsContext);

export default MealsProvider;