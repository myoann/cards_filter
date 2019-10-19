const initialState = {
  jsonResults: [],
  loading: false,
};

const jsonResults = (state = initialState, action) => {
  switch (action.type) {
    case 'JSON_RESULTS_LIST': {
      return { ...state, loading: true, error: null };
    }
    case 'JSON_RESULTS_LIST_SUCCESS': {
      const { jsonResults } = action;
      return { ...state, jsonResults, loading: false, error: null };
    }
    case 'JSON_RESULTS_LIST_FAILURE': {
      const { error } = action;
      return { ...state, loading: false, error };
    }
    case 'SEARCH_JSON_RESULTS_LIST': {
      return { ...state, loading: true, error: null };
    }
    case 'SEARCH_JSON_RESULTS_LIST_SUCCESS': {
      const { filteredResults } = action;
      return {
        ...state,
        jsonResults: filteredResults,
        loading: false,
        error: null,
      };
    }
    case 'SEARCH_JSON_RESULTS_LIST_FAILURE': {
      const { error } = action;
      return { ...state, loading: false, error };
    }
    default: {
      return state;
    }
  }
};

export default jsonResults;
