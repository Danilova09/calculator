import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addChar } from './calculator.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mathExpression!: Observable<string>;

  constructor(private store: Store<{char: string}>) {
    this.mathExpression = store.select('char');
  }

  addCharacter(event: Event) {
    const target = <HTMLButtonElement>event.target;
    const char = target.textContent;
    this.store.dispatch(addChar({char: char}));
  }

}
