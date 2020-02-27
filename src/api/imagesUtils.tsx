import axios from "axios";
import Api from "../constants/Api";

export enum BACKDROP_SIZES {
  W300 = "w300",
  W780 = "w780",
  W1280 = "w1280",
  ORIGINAL = "original"
}

export enum POSTER_SIZES {
  W92 = "w92",
  W154 = "w154",
  W185 = "w185",
  W342 = "w342",
  W500 = "w500",
  W780 = "w780",
  ORIGINAL = "original"
}

export function getImageUrl(url, size: String) {
  return `${Api.HOST_IMAGE}/${size}/${url}`;
}

export function getPoster(item, size = POSTER_SIZES.W342) {
  return getImageUrl(item.poster_path, size);
}

export function getBackdrop(item, size = BACKDROP_SIZES.W780) {
  return getImageUrl(item.backdrop_path, size);
}
