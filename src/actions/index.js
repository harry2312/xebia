import { loginApi, searchPlanetsApi } from "../api";
import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_PENDING,
  SEARCH_ERROR,
  SEARCH_SUCCESS,
  SEARCH_PENDING,
} from "./actionTypes";

export function getLoggedIn(dispatch, username, password) {
  dispatch({ type: LOGIN_PENDING });
  loginApi(username).then((res) => {
    if (res && res.status < 350 && res.data) {
      if (res.data.count === 1) {
        const data = res.data.results[0];
        if (data.birth_year === password) {
          dispatch({ type: LOGIN_SUCCESS, payload: data });
        } else {
          dispatch({ type: LOGIN_ERROR, message: "Wrong password" });
        }
      } else {
        dispatch({ type: LOGIN_ERROR, message: "Wrong Username" });
      }
    } else {
      dispatch({
        type: LOGIN_ERROR,
        message: "Something went wrong",
      });
    }
  });
}

export function searchPlanet(dispatch, name) {
  dispatch({ type: SEARCH_PENDING });
  searchPlanetsApi(name).then((res) => {
    if (res && res.status < 350 && res.data) {
      const data = res.data.results;
      if (res.data.count) {
        dispatch({ type: SEARCH_SUCCESS, payload: data });
      } else {
        dispatch({
          type: SEARCH_ERROR,
          message: "No result found for search",
        });
      }
    } else {
      dispatch({
        type: SEARCH_ERROR,
        message: "Something went wrong",
      });
    }
  });
}
