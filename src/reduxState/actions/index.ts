import Axios from 'axios';
import { Dispatch } from 'redux';
import { Actions, ActionTypes } from '../state.model';

export const SearchRepositories = (term: string) => async (dispatch: Dispatch<Actions>) => {
  dispatch({
    type: ActionTypes.SEARCH_REPOSITORIES,
  });
  try {
    const { data } = await Axios.get(`https://register.npmjs.org/-/v1/search?text=${term}`);

    const names = data.objects.map((result: any) => {
      return result.package.name;
    });
    dispatch({
      type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
      payload: names,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
      payload: err.message,
    });
  }
};
