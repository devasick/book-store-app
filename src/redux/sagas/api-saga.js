import { takeEvery, call, put } from "redux-saga/effects";
const jsonData = require("../../data/books-data.json");

export default function* watcherSaga() {
  yield takeEvery("DATA_REQUESTED", workerSaga);
}

/**
 * json data fetch from src-> data -> books-data.json
 */
function getData() {
  return jsonData;
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: "DATA_LOADED", payload });
  } catch (event) {
    yield put({ type: "ERRORED", payload: event });
  }
}
