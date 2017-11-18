import { Action } from '@ngrx/store';

export interface ImageState {
  imageURL: string;
}

const defaultImageState: ImageState = {
  imageURL: 'https://imgs.xkcd.com/comics/how_to_make_friends.png'
}

export function imageReducer(state: ImageState = defaultImageState,
                             action: Action): ImageState {
  switch (action.type) {
    default:
      return state;
  }

}
