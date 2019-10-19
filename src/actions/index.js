import jsonFile from '../results.json';

export const listJsonResults = () => async dispatch => {
  dispatch({ type: 'JSON_RESULTS_LIST' });

  try {
    const jsonResults = jsonFile;

    dispatch({
      type: 'JSON_RESULTS_LIST_SUCCESS',
      jsonResults,
    });
  } catch (error) {
    dispatch({ type: 'JSON_RESULTS_LIST_FAILURE', error });
  }
};

export const searchResults = searchText => async dispatch => {
  dispatch({ type: 'SEARCH_JSON_RESULTS_LIST' });

  try {
    const filteredResults = jsonFile.filter(({ name, tags }) => {
      // Default value
      let isToReturn = false;

      // Check if the name contains the searched text
      if (name.toLowerCase().includes(searchText.toLowerCase()))
        isToReturn = true;

      // For each tag
      tags.forEach(tag => {
        // Check if the tag contains the searched text
        if (tag.toLowerCase().includes(searchText.toLowerCase()))
          isToReturn = true;
      });

      // Return if the result should be returned or not
      return isToReturn;
    });

    dispatch({
      type: 'SEARCH_JSON_RESULTS_LIST_SUCCESS',
      filteredResults,
    });
  } catch (error) {
    dispatch({ type: 'SEARCH_JSON_RESULTS_LIST_FAILURE', error });
  }
};
