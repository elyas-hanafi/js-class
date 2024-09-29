// Action types
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const FILTER_ITEMS = "FILTER_ITEMS";

const initialState = { items: [] };
// Reducer function to manage the store
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

// Create store function
const createStore = (reducer) => {
  let state;

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
  };

  // Initialize store with default state
  dispatch({});

  return { getState, dispatch };
};

// Example usage
const store = createStore(reducer);

// Action creators
const addItem = (item) => ({ type: ADD_ITEM, payload: item });
const removeItem = (item) => ({ type: REMOVE_ITEM, payload: item });

// Add items
store.dispatch(addItem("apple"));
store.dispatch(addItem("banana"));
store.dispatch(addItem("tomato"));
store.dispatch(addItem("potato"));
// store.dispatch({ type: REMOVE_ITEM, payload: item });
// console.log("State after adding apple:", store.getState());
console.log(store.getState());
// console.log("State after adding banana:", store.getState());

// store.dispatch(addItem("orange"));
// console.log("State after adding orange:", store.getState());

// // Remove an item
store.dispatch(removeItem("banana"));
console.log(store.getState());
// console.log("State after removing banana:", store.getState());
