import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgCardRightComponent } from './msg-card-right.component';

describe('MsgCardRightComponent', () => {
  let component: MsgCardRightComponent;
  let fixture: ComponentFixture<MsgCardRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MsgCardRightComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgCardRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
