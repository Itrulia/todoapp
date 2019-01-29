import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {
  @Input()
  public description: string;

  @Input()
  public isDone: boolean;

  @Output()
  public markDone = new EventEmitter<boolean>();

  @Output()
  public markDelete = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  public mark(isDone: boolean): void {
    console.log(isDone);
    this.markDone.emit(isDone);
  }
}
