import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoCreateComponent implements OnInit {
  @Output()
  public add = new EventEmitter<string>();

  public description: string;

  constructor() { }

  ngOnInit() {
  }

  public addItem(description: string): void {
    this.description = null;
    this.add.emit(description);
  }
}
