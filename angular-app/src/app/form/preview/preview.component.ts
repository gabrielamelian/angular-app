import { Component } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {AppState} from "../../state";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent {
  imageURL: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.imageURL = store.select(state => state.image.imageURL);
  }

}
