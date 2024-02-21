import { FETCH_IMAGE, SET_IMAGE, FETCH_IMAGE_ERROR, ActionTypes } from '../types/types';

export const fetchImage = (payload: { width: number; height: number; greyscale: boolean; youngKeanu: boolean }): ActionTypes => ({
  type: FETCH_IMAGE,
  payload,
});

export const setImage = (payload: string): ActionTypes => ({
  type: SET_IMAGE,
  payload,
});

export const fetchImageError = (payload: Error): ActionTypes => ({
  type: FETCH_IMAGE_ERROR,
  payload,
});