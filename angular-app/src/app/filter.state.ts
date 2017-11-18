import { Action } from '@ngrx/store';

export interface FilterState {
  selectedFilter: string;
  availableFilters: string[];
}
