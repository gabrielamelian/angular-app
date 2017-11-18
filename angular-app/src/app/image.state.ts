import { Action } from '@ngrx/store';

export interface ImageState {
  imageURL: string;
}

const defaultImageState: ImageState = {
  imageURL: 'https://xkcd.com/info.0.json'
}

export function imageReducer(state: ImageState = defaultImageState,
                             action: Action): ImageState {
  switch (action.type) {
    default:
      return state;
  }

}
