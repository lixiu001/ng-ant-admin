import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-base-shrink',
  templateUrl: './base-shrink.component.html',
  styleUrls: ['./base-shrink.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseShrinkComponent implements OnInit {
  validateForm!: FormGroup;
  pickUp: boolean = false;
  inputValue: string | null = null;
  hiddenDom: boolean = false;
  checkOptionsOne = [
    { label: 'option1', value: 'option1', checked: false },
    { label: 'option2', value: 'option2', checked: false }
  ];
  constructor(private fb: FormBuilder, public changRf: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      form_item_field1: ['', [Validators.required]],
      form_item_field2: ['', [Validators.required]],
      form_item_field3: ['', [Validators.required]],
      form_item_field4: null,
      form_item_field5: null
    });
  }

  resetOrquery(event: string | boolean): void {
    if (event === 'query') {
      this.query();
    } else if (event === 'reset') {
      this.resetForm();
    } else {
      this.changStatus(event as boolean);
    }
  }

  query(): void {
    // ...
    this.changRf.markForCheck();
  }

  resetForm(): void {
    this.checkOptionsOne.forEach(p => {
      p.checked = false;
    });
    this.validateForm.reset({
      form_item_field5: this.checkOptionsOne
    });
    this.changRf.markForCheck();
  }

  changStatus(event: boolean): void {
    this.hiddenDom = event;
    this.changRf.markForCheck();
  }
}
