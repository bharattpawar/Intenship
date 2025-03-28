import { 
    SUBMIT_QUERY, 
    QUERY_SUCCESS, 
    QUERY_ERROR, 
    CLEAR_HISTORY 
  } from './actionTypes';
  
  export const submitQuery = (query) => ({
    type: SUBMIT_QUERY,
    payload: query
  });
  
  export const querySuccess = (data) => ({
    type: QUERY_SUCCESS,
    payload: data
  });
  
  export const queryError = (error) => ({
    type: QUERY_ERROR,
    payload: error
  });
  
  export const clearHistory = () => ({
    type: CLEAR_HISTORY
  });