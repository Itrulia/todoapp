import { Component, ChangeDetectionStrategy } from '@angular/core';
import {TodoItem} from './todo/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public items: TodoItem[] = [
    {
      description: 'Todo 1',
      isDone: false,
      id: 1
    },
    {
      description: 'Todo 2',
      isDone: true,
      id: 2
    }
  ];

  public addItem(description: string): void {
    const highestId = this.items.reduce((prev, curr) => {
      if (prev < curr.id) {
        return curr.id;
      }

      return prev;
    }, 1);

    this.items = [...this.items, {
      description,
      isDone: false,
      id: highestId + 1
    }];
  }

  public removeItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  public markItem({id, isDone}): void {
    this.items = this.items.map(item => {
      if (id === item.id) {
        return {...item, isDone};
      }

      return item;
    });
  }
}
