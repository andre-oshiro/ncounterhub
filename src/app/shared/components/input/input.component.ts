import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() label: string;
  @Input() name: string;
  @Input() type = 'text';
  @Input() placeholder: string;
  @Input() hasError = false;

  constructor() {}

  ngOnInit() {}

  // this is the initial value set to the component
  public writeValue(obj: any) {}

  // registers 'fn' that will be fired wheb changes are made
  // this is how we emit the changes back to the form
  public registerOnChange(fn: any) {}

  // validates the form, returns null when valid else the validation object
  // in this case we're checking if the json parsing has passed or failed from the onChange method
  public validate(c: FormControl) {
    return { error: { valid: false } };
  }

  // not used, used for touch input
  public registerOnTouched() {}

  // change events from the textarea
  private onChange(event) {}

  // the method set in registerOnChange to emit changes back to the form
  private propagateChange = (_: any) => {};
}
