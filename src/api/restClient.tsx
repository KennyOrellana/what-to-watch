import axios from "axios";
import Api from "../constants/Api";

const instance = axios.create({
  baseURL: Api.HOST
});

export function getData(url) {
  return instance.get(url, {
    params: {
      api_key: Api.KEY,
      "Content-Type": "application/json;charset=utf-8"
    }
  });
}
