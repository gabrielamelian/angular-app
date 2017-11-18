import { Action } from '@ngrx/store';

import { ImageState } from "./image.state";
import { DestinationState } from "./destination.state";
import { FilterState } from "./filter.state";

export interface AppState {
  image: ImageState;
  destination: DestinationState;
  filter: FilterState;
}
