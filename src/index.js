import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import allReducers from './reducers/index';
import {Provider} from 'react-redux'

const store= createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());




// // Store: Store is basically a globalized state, it holds and stores all the data for our application.

// // Action: Describes what we want to do. Let's say our action is increment. It's a simple function that returns the object.

// const increment = () =>{
//   return{
//     type:'INCREMENT'
//   }
// }

// const decrement = () =>{
//   return{
//     type:'DECREMENT'
//   }
// }



// // Reducer: Describes how the actions transforms our state to next state.

// const counter = (state = 0, action)=>{
//   switch(action.type){
//     case "INCREMENT":
//         return state+1;
//     case "DECREMENT":
//         return state-1;
//   }

// };

// let store= createStore(counter);

// //Display it in the console

// store.subscribe(()=>{
//   console.log(store.getState());
// })

// // Dispatch; Send the action to reducer, reducer checks what to do and store gets updated.

// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);


