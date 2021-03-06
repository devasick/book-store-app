import {
  DATA_REQUESTED,
  SEND_CATEGORY,
  SEARCH
} from "../constants/action-types";
/**
 * getData get the json data
 */
export function getData() {
  return { type: DATA_REQUESTED };
}
/**
 * sendCategory : it will send category to action from left menu (Business, Digital media, Software Development, Web Application )
 */
export function sendCategory(category) {
  return { type: SEND_CATEGORY, category };
}
/**
 *
 * @param {*} it will send search keyword to action from top menu
 */
export function search(value) {
  return { type: SEARCH, value };
}
