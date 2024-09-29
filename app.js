const ADD_ITEM = "ADD_ITEM";
const UPDATE_ITEM = "UPDATE_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

const initialState = {
  items: [],
};

const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
const updateItem = (item) => ({
  type: UPDATE_ITEM,
  payload: item,
});
const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...action.payload };
          } else {
            return item;
          }
        }),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

const createStore = (reducer, initialState) => {
  let state = initialState;

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
  };

  return {
    getState,
    dispatch,
  };
};

const store = createStore(reducer, initialState);

// Add an item
store.dispatch(addItem({ id: 1, name: "Item 1", value: 10 }));
store.dispatch(addItem({ id: 2, name: "Item 2", value: 15 }));
store.dispatch(addItem({ id: 3, name: "Item 3", value: 15 }));

// Initial State

store.dispatch(
  updateItem({ id: 3, name: "Item Updated => item 3", value: 10 })
);

store.dispatch(
  removeItem({ id: 3, name: "Item Updated => item 3", value: 10 })
);
store.dispatch(
  removeItem({ id: 2, name: "Item Updated => item 3", value: 10 })
);
store.dispatch(
  removeItem({ id: 1, name: "Item Updated => item 3", value: 10 })
);
console.log(store.getState()); // { items: [] }
// console.log(store.getState()); // { items: [] }
