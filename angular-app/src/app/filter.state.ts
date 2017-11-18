import { Action } from '@ngrx/store';

export interface FilterState {
  selectedFilter: string;
  availableFilters: string[];
}

const defaultFilterState: FilterState = {
  selectedFilter: 'daylight',
  availableFilters: [ 'daylight', 'neutral', 'sepia', 'blur' ]
}

export function filterReducer(state: FilterState = defaultFilterState,
                                   action: Action): FilterState {
  switch (action.type) {
    default:
      return state;
  }

}
