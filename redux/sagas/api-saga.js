import { takeEvery, call, put } from "redux-saga/effects";
const jsonData = require("../../data/books-data.json");

export default function* watcherSaga() {
  yield takeEvery("DATA_REQUESTED", workerSaga);
}

function* workerSaga() {
  // try {
  //   const payload = yield call(getData);
  //   //console.log(payload);
  //   yield put({ type: "DATA_LOADED", payload });
  // } catch (event) {
  //   yield put({ type: "ERRORED", payload: event });
  // }

  try {
    const response = yield call(fetch, jsonData);
    const responseBody = response.json();
  } catch (e) {
    yield put(fetchFailed(e));
    return;
  }
}

function getData() {
  return jsonData;
}
