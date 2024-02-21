
export const FETCH_IMAGE = 'FETCH_IMAGE';
export const SET_IMAGE = 'SET_IMAGE';
export const FETCH_IMAGE_ERROR = 'FETCH_IMAGE_ERROR';

export type RootState = {
  image: string | null;
};

export type FetchImageAction = {
  type: typeof FETCH_IMAGE;
  payload: {
    width: number;
    height: number;
    greyscale: boolean;
    youngKeanu: boolean;
  };
};

export type SetImageAction = {
  type: typeof SET_IMAGE;
  payload: string;
};

export type FetchImageErrorAction = {
  type: typeof FETCH_IMAGE_ERROR;
  payload: Error;
};

export type ActionTypes =
  | FetchImageAction
  | SetImageAction
  | FetchImageErrorAction;

export type GraphQLResponse = {
  data: {
    image: string;
  }
  json: any;
}

