import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ImageComponent } from './form/image/image.component';
import { DestinationComponent } from './form/destination/destination.component';
import { FilterComponent } from './form/filter/filter.component';
import { PreviewComponent } from './form/preview/preview.component';
import { PreferencesComponent } from './form/preferences/preferences.component';
import { imageReducer } from "./image.state";
import { destinationReducer } from "./destination.state";
import { filterReducer } from "./filter.state";


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ImageComponent,
    DestinationComponent,
    FilterComponent,
    PreviewComponent,
    PreferencesComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
                        image: imageReducer,
                        destination: destinationReducer,
                        filter: filterReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
