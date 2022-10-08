import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
export type buttonType = 'reset' | 'query' | boolean;
@Component({
  selector: 'app-reset-query-button',
  templateUrl: './reset-query-button.component.html',
  styleUrls: ['./reset-query-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetQueryButtonComponent implements OnInit {
  @Input() isUp = false;
  @Output() readonly clickButton = new EventEmitter<buttonType>();
  pickUp = false;
  constructor() { }

  ngOnInit(): void {
    this.pickUp = this.isUp;
  }

  reset(): void {
    this.clickButton.emit('reset');
  }

  query(): void {
    this.clickButton.emit('query');
  }

  changStatus(): void {
    this.pickUp = !this.pickUp;
    this.clickButton.emit(this.pickUp);
  }
}
