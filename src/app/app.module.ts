import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { calculatorReducer } from './calculator.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({char: calculatorReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
