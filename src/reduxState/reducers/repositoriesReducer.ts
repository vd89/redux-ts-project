import {
  RepositoriesState,
  SearchRepositories,
  SearchRepositoriesError,
  SearchRepositoriesSuccess,
} from '../state.model';
import { SEARCH_REPOSITORIES, SEARCH_REPOSITORIES_ERROR, SEARCH_REPOSITORIES_SUCCESS } from '../types';

const reducer = (
  state: RepositoriesState,
  action: SearchRepositories | SearchRepositoriesSuccess | SearchRepositoriesError
): RepositoriesState => {
  switch (action.type) {
    case SEARCH_REPOSITORIES:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case SEARCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
