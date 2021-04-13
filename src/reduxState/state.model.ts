export interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}
export enum ActionTypes {
  SEARCH_REPOSITORIES = 'SEARCH_REPOSITORIES',
  SEARCH_REPOSITORIES_SUCCESS = 'SEARCH_REPOSITORIES_SUCCESS',
  SEARCH_REPOSITORIES_ERROR = 'SEARCH_REPOSITORIES_ERROR',
}

export type Actions = SearchRepositories | SearchRepositoriesSuccess | SearchRepositoriesError;
interface SearchRepositories {
  type: ActionTypes.SEARCH_REPOSITORIES;
}
interface SearchRepositoriesSuccess {
  type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface SearchRepositoriesError {
  type: ActionTypes.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}
