initialState = {
  selectedItem: {}
};

const SELECTED_ITEM = "SELECTED_ITEM";

export default (reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_ITEM:
      return { ...state, selectedItem: action.payload };
  }
});

export function selectedItem(item) {
  return {
    type: SELECTED_ITEM,
    payload: item
  };
}
