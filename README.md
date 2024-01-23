# learnREACT


## State management with the context API

1. Create a state provider - a component that contains the state, and used in context by other components to get access to the state.
2. In this component, ensure to create a context, and also export a const that gives access to the values the context provides
3. Remember when defining the context.Provider value = {an object} inside {...}. This if not done the value is undefined when you try using it.
4. import the constant in the components that need the state data, use it to get the data and use that data in those components. This ensures they access the data without the use of props hence avoiding state drilling.