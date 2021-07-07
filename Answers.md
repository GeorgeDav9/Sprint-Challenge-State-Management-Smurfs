1. What problem does the context API help solve?

- prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions hold the vanilla js functions that dispatch the type (name) of which payloads of information to send your application to your store.
- Reducers hold the switch case statement that takes an action’s type and specifies how the application’s state changes in response to the called case.
- The Store is a global place (object) that holds the state where every file in the app has access to the state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is global and Component is local.
- Component state is useful if it only needs to be updated within that component, if state that affects the whole app (global) is needed to be updated the App state is useful.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- Redux Thunk is middleware that lets one call action creators that return a function instead of an action object. Said function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

- Redux because at this point it is widely used and seems to be an optimum way to manage large production level apps.

