1. What problem does the context API help solve?

   Context api solve  prop drilling by giving children components access to their parent components state.  It allows all us to share data across all levels of the application.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are information marked by payloads that send information to the store of the application. This is the stores only source of information.  The store  holds the data in a state-tree of the application and wraps the components that needs a specific set of data. It’s data can only be changed by a dispatched action.  The reducer specifies how the state should be updated. This is in response to actions being sent to the store. 


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Component stat is a state that lives in a specific component. The state can only be updated within components that have information passed down to its children by props.  Application state is global and can be accessed with by the store.  The way you would choose one of the other could be determined by how large the application is and how many components need to shared the same set of information.  If you needed data across a large array of components then it would probably be best to use a library like redux to store the state. Otherwise you can choose to use component state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

     Redux thunk is middleware that extends the stores abilities and lets you write async logic that interacts with the store. It allows you to write action creators that can return a function  instead of an action.  Thunk can be used to tell when to dispatch an action and could be set up to dispatch only if a certain condition is met.


1. What is your favorite state management system you've learned and this sprint? Please explain why!

    My personal favorite state management system that I have learned during this sprint is the Context API. I like having that ability to share the data across the all levels of the application with minimal setup. It seems share a lot of the same benefits that redux with half the set up time. Personally for smaller to middle sized  projects I would choose Context over redux.  