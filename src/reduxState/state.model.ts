export interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

export interface SearchRepositories {
  type: 'SEARCH_REPOSITORIES';
}
export interface SearchRepositoriesSuccess {
  type: 'SEARCH_REPOSITORIES_SUCCESS';
  payload: string[];
}
export interface SearchRepositoriesError {
  type: 'SEARCH_REPOSITORIES_ERROR';
  payload: string;
}
