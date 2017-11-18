import { Action } from '@ngrx/store';

export interface DestinationState {
  destinationLocation: string;
}

const defaultDestinationState: DestinationState = {
  destinationLocation: 'xkcd.com'
}

export function destinationReducer(state: DestinationState = defaultDestinationState,
                                   action: Action): DestinationState {
  switch (action.type) {
    default:
      return state;
  }

}
