import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgCardLeftComponent } from './msg-card-left.component';

describe('MsgCardLeftComponent', () => {
  let component: MsgCardLeftComponent;
  let fixture: ComponentFixture<MsgCardLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MsgCardLeftComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgCardLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
