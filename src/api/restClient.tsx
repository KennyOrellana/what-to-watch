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

export function getImageUrl(url) {
  return `${Api.HOST_IMAGE}w92/${url}`;
}

export function getPoster(item) {
  return getImageUrl(item.poster_path);
}
