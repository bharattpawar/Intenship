import { 
    SUBMIT_QUERY, 
    QUERY_SUCCESS, 
    QUERY_ERROR, 
    CLEAR_HISTORY 
  } from './actionTypes';
  
  const initialState = {
    queries: [],
    currentQuery: '',
    results: null,
    loading: false,
    error: null
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case SUBMIT_QUERY:
        return {
          ...state,
          loading: true,
          currentQuery: action.payload
        };
      case QUERY_SUCCESS:
        return {
          ...state,
          loading: false,
          results: action.payload,
          queries: [...state.queries, {
            query: action.payload.query,
            timestamp: action.payload.timestamp || new Date().toLocaleString()
          }],
          error: null
        };
      case QUERY_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case CLEAR_HISTORY:
        return {
          ...state,
          queries: []
        };
      default:
        return state;
    }
  }
  
  export default rootReducer;