import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_IMAGE, FetchImageAction, GraphQLResponse } from '../types/types';
import { fetchImageError, setImage } from '../actions/actions';
import API from '../api';


function* fetchKeanuImageSaga(action: FetchImageAction) {
    try {
      const { width, height, greyscale, youngKeanu } = action.payload;
      const query = `${API.keanuServerImages}/graphql?query={
        image(
            width:${width},
            height:${height},
            greyscale:${greyscale},
            youngKeanu:${youngKeanu}
        )
      }`;
      const response: GraphQLResponse = yield call(fetch, query, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data: GraphQLResponse = yield response.json();
      yield put(setImage(data.data.image));
    } catch (error: unknown) {
      yield put(fetchImageError(error as Error));
    }
  }
function* rootSaga() {
  yield takeEvery(FETCH_IMAGE, fetchKeanuImageSaga);
}

export default rootSaga;