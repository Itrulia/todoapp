import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, EventEmitter, Output} from "@angular/core";

export interface TodoItem {
  description: string;
  isDone: boolean;
  id: number;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  @Input()
  public todoItems: TodoItem[];

  @Output()
  public addItem = new EventEmitter<string>();

  @Output()
  public removeItem = new EventEmitter<number>();

  @Output()
  public markItem = new EventEmitter<{id: number, isDone: boolean}>();

  constructor() { }

  ngOnInit() {
  }

  public add(description: string): void {
    this.addItem.emit(description);
  }

  public remove(id: number): void {
    this.removeItem.emit(id);
  }

  public markDone(isDone: boolean, id: number): void {
    this.markItem.emit({isDone, id});
  }

  public trackByIndex(item: TodoItem, index: number): number {
    return index;
  }
}
