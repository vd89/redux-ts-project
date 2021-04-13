import { Actions, ActionTypes, RepositoriesState } from '../state.model';

const reducer = (state: RepositoriesState, action: Actions): RepositoriesState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionTypes.SEARCH_REPOSITORIES_ERROR:
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
