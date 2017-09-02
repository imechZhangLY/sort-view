/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OptionComponentComponent } from './option-component.component';

describe('OptionComponentComponent', () => {
  let component: OptionComponentComponent;
  let fixture: ComponentFixture<OptionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
