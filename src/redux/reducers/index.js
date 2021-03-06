const initialState = {
  books: [],
  catagory: "", // default is all books and set any one catgory [Business,Digital Media,Software Development,Web Applications]
  searchValue: ""
};

function rootReducer(state = initialState, action) {
  /**
   * data loading from sagas api
   */
  //console.log(action.payload);

  switch (action.type) {
    case "DATA_LOADED": {
      return Object.assign({}, state, {
        books: state.books.concat(action.payload)
      });
    }
    /**
     * it will update category
     */
    case "SEND_CATEGORY": {
      return Object.assign({}, state, {
        books: state.books,
        catagory: action.category
      });
    }
    /**
     * Search value to update to book data
     */
    case "SEARCH": {
      return {
        books: state.books,
        searchValue: action.value,
        catagory: action.category
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
